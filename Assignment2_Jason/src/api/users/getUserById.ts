import { instance } from '../config';

export async function getUserById(id: string){
  const res = await instance.get(`/users/${id}`);
  return res.data.result.data.user;
}