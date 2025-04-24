import { instance } from "../config";
import { User } from "../../../mock/mock.type";
import { AxiosRequestConfig } from 'axios';

interface GetUsersParams {
  search?: string;
  config?: AxiosRequestConfig;
}

export async function getUsers({ search, config }: GetUsersParams = {}): Promise<User[]> {
  const params = {
    ...(search && { search }),
    ...config?.params,
  };

  const res = await instance.get("/users", {
    ...config, 
    params,   
  });
  
  return res.data.result.data.users;
}