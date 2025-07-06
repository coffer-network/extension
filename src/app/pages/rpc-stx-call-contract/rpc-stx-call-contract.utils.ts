import type { StacksNetwork } from '@stacks/network';
import { PostConditionMode } from '@stacks/transactions';

import type { Money } from '@coffer.network/models';
import { createRequestEncoder, stxCallContract } from '@coffer.network/rpc';
import {
  type StacksUnsignedContractCallOptions,
  TransactionTypes,
  ensurePostConditionWireFormat,
  getPostConditions,
  getStacksContractName,
} from '@coffer.network/stacks';
import { createMoney } from '@coffer.network/utils';

import { initialSearchParams } from '@app/common/initial-search-params';
import type { Nonce } from '@app/features/nonce-editor/nonce-editor.context';

export function getDecodedRpcStxCallContractRequest() {
  const { decode } = createRequestEncoder(stxCallContract.request);
  const rpcRequest = initialSearchParams.get('rpcRequest');
  if (!rpcRequest) throw new Error('Missing rpcRequest');
  return decode(rpcRequest);
}

function getTransactionOptionsFromRpcRequest() {
  const decodedRpcRequest = getDecodedRpcStxCallContractRequest();

  return {
    contractAddress: decodedRpcRequest.params.contract.split('.')[0],
    contractName: getStacksContractName(decodedRpcRequest.params.contract),
    fee: decodedRpcRequest.params.fee
      ? createMoney(decodedRpcRequest.params.fee, 'STX')
      : undefined,
    functionArgs: decodedRpcRequest.params.functionArgs ?? [],
    functionName: decodedRpcRequest.params.functionName,
    nonce: decodedRpcRequest.params.nonce,
    postConditions: getPostConditions(
      decodedRpcRequest.params.postConditions?.map(pc => ensurePostConditionWireFormat(pc))
    ),
    postConditionMode:
      decodedRpcRequest.params.postConditionMode === 'allow'
        ? PostConditionMode.Allow
        : PostConditionMode.Deny,
    sponsored: decodedRpcRequest.params.sponsored,
  };
}

interface GetUnsignedStacksContractCallOptionsForFeeEstimationArgs {
  publicKey: string;
  network: StacksNetwork;
}
export function getUnsignedStacksContractCallOptionsForFeeEstimation({
  publicKey,
  network,
}: GetUnsignedStacksContractCallOptionsForFeeEstimationArgs): StacksUnsignedContractCallOptions {
  const requestOptions = getTransactionOptionsFromRpcRequest();

  return {
    txType: TransactionTypes.ContractCall,
    ...requestOptions,
    fee: requestOptions.fee ?? createMoney(0, 'STX'),
    nonce: requestOptions.nonce ?? 0,
    publicKey,
    network,
  };
}

interface GetUnsignedStacksContractCallOptionsArgs {
  fee: Money;
  network: StacksNetwork;
  nonce: Nonce;
  publicKey: string;
}
export function getUnsignedStacksContractCallOptions({
  fee,
  network,
  nonce,
  publicKey,
}: GetUnsignedStacksContractCallOptionsArgs): StacksUnsignedContractCallOptions {
  const requestOptions = getTransactionOptionsFromRpcRequest();

  return {
    txType: TransactionTypes.ContractCall,
    ...requestOptions,
    publicKey,
    network,
    fee,
    nonce,
  };
}
