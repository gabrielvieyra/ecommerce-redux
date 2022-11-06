import { client, ResponseAPI } from '../api/client';

interface UpdatePostProps {
  id: number;
  userId: number;
  body: string;
  title: string;
}

export const updatePost = async ({
  id,
  userId,
  body,
  title,
}: UpdatePostProps): Promise<Array<ResponseAPI>> => {
  const { data } = await client.put(`${id}`, { userId, title, body });
  return data;
};
