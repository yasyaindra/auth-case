import Axios from "axios";

export async function GetGithubUser() {
  const ROOT_API = process.env.NEXT_PUBLIC_DUMMY_API;
  const response = await Axios.get(`${ROOT_API}`);
  const axiosResponse = response.data;
  return axiosResponse;
}
