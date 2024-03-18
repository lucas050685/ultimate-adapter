import { Transformer } from '~/core/types';
import { frontConfig } from '~/config/frontConfig';
import { useQuery } from '@tanstack/react-query';
import { useUser } from '../useUser';

export function useTransformers() {
  const user = useUser();

  const { data: transformers, isLoading, refetch } = useQuery<Transformer[]>({
    queryKey: ['get-transformers', 'user', user.id],
    queryFn: async () => {
      if (!user.id) return [];
      const url = new URL(`/api/transformers/owner/${user.id}`, frontConfig.serverHost);
      const request = await fetch(url);
      const response = request.json();
      return response;
    }
  });

  const save = async (transformer: Transformer) => {
    console.log(frontConfig.serverHost);
    const url = new URL('/api/transformers', frontConfig.serverHost);
    const body = JSON.stringify(transformer);
    const headers: Record<string, string> = {
      'Content-Type': 'application/json'
    };
    if (user.id) headers['-x-user-id'] = user.id;

    const request = await fetch(url, {
      method: "post",
      body,
      headers,
    });

    const response = await request.json();
    refetch();
    return response;
  }

  return {
    save,
    transformers: transformers ?? [],
    isLoading,
  }
}