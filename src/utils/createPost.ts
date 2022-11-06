import { client, ResponseAPI } from '../api/client';

export const createPost = async (
  title: string,
  body: string,
  userId: number
): Promise<Array<ResponseAPI>> => {
  const { data } = await client.post('', { title, body, userId });
  //   console.log(data);
  return data;
};
