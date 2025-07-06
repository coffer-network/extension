import { useQuery } from '@tanstack/react-query';

import { createBestInSlotInscription, createGetInscriptionQueryOptions } from '@coffer.network/query';

import { useBitcoinClient } from '../clients/bitcoin-client';

export function useInscription(id: string) {
  const client = useBitcoinClient();
  return useQuery({
    ...createGetInscriptionQueryOptions(id, client.BestInSlotApi),
    select: resp => createBestInSlotInscription(resp.data),
  });
}
