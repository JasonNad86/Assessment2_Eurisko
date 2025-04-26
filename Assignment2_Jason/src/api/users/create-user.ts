import { instance } from '../config';
import { CreateUserParams } from '../types';


export async function createUser({ userData, config }: CreateUserParams) {
  const res = await instance.post(
    '/users', 
    userData,
    config
  );
  return res.data.result.data.users; 
}