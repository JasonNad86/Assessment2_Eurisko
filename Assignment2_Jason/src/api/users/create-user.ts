import { AxiosRequestConfig } from 'axios';
import { instance } from '../config';
import { User } from '../../../mock/mock.type';

interface CreateUserParams {
  userData: Omit<User, 'id'>;
  config?: AxiosRequestConfig;
}

export async function createUser({ userData, config }: CreateUserParams) {
  const res = await instance.post(
    '/users', 
    userData,
    config
  );
  return res.data.result.data.users; 
}