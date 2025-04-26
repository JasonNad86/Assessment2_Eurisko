import { instance } from '../config';
import { UpdateUserParams } from '../types';


export async function updateUser({ id, userData, config }: UpdateUserParams) {
  const res = await instance.put(
    `/users/${id}`, 
    userData,
    config
  );
  return res.data.result.data.users; 
}