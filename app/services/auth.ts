import Axios from "axios";
import { LoginTypes, RegisterTypes } from "./data-types";

export async function setRegister(data: RegisterTypes) {
  const response = await Axios.post(
    `https://staging-vas-app.indofungames.com/1.0/register/users/registermain`,
    data,
    {
      headers: {
        "Content-Type": "application/vnd.api+json",
      },
    }
  ).catch((err) => {
    err.response;
  });

  const axiosResponse = response.data;

  if (axiosResponse.is_success == 0) {
    return axiosResponse;
  }

  return axiosResponse;
}

export async function setLogin(data: LoginTypes) {
  const response = await Axios.post(
    `https://staging-vas-app.indofungames.com/1.0/login/users`,
    data,
    {
      headers: {
        "Content-Type": "application/vnd.api+json",
      },
    }
  ).catch((err) => {
    err.response;
  });

  const axiosResponse = response.data;

  if (axiosResponse.is_success == 0) {
    return axiosResponse;
  }

  return axiosResponse;
}
