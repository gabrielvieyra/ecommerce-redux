import { client, ResponseAPI } from '../api/client';

export const getPosts = async (): Promise<Array<ResponseAPI>> => {
  const { data } = await client.get('?_limit=6');
  //   console.log(data);
  return data;
};
