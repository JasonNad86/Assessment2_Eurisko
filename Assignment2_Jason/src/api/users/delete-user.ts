import { instance } from '../config';


export async function deleteUser( id : string) {
  const res = await instance.delete(
    `/users/${id}`, 
  );
  return res.data.result.data.user; 
}