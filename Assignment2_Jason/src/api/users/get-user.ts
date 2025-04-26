import { instance } from "../config";
import { GetUsersParams } from "../types";
export async function getUsers({ search, config }: GetUsersParams){
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