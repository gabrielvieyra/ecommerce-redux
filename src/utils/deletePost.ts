import { client } from '../api/client';

export const deletePost = async (id: number): Promise<boolean> => {
  const { status } = await client.delete(`${id}`);
  return status === 200;
};
