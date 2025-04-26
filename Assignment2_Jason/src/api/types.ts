import { AxiosRequestConfig } from "axios";
import { User } from "../../mock/mock.type";

export interface CreateUserParams {
  userData: Omit<User, 'id'>;
  config?: AxiosRequestConfig;
}

export interface UpdateUserParams {
  id?:string;
  userData: Omit<User, 'id'>;
  config?: AxiosRequestConfig;
}

export interface GetUsersParams {
    search?: string;
    config?: AxiosRequestConfig;
}