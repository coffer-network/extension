import { makeNativeSegwitAddressIndexDerivationPath } from '@coffer.network/bitcoin';
import type { BitcoinNetworkModes, Inscription } from '@coffer.network/models';
import type { UtxoWithDerivationPath } from '@coffer.network/query';

interface CreateUtxoFromInscriptionArgs {
  inscription: Inscription;
  network: BitcoinNetworkModes;
  accountIndex: number;
  inscriptionAddressIdx: number;
}
export function createUtxoFromInscription({
  inscription,
  network,
  accountIndex,
  inscriptionAddressIdx,
}: CreateUtxoFromInscriptionArgs): UtxoWithDerivationPath {
  const { genesisBlockHash, genesisTimestamp, genesisBlockHeight, value } = inscription;
  return {
    txid: inscription.txid,
    vout: Number(inscription.output),
    status: {
      confirmed: true,
      block_height: genesisBlockHeight,
      block_hash: genesisBlockHash,
      block_time: genesisTimestamp,
    },
    value: Number(value),
    derivationPath: makeNativeSegwitAddressIndexDerivationPath(
      network,
      accountIndex,
      inscriptionAddressIdx
    ),
  };
}
