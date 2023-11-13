import { axiosInstance } from "./axiosInstance";

// register user
export const RegisterUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/users/register", payload);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

// login user
export const LoginUser = async (payload) => {
  try {
    const response = await axiosInstance.post("/api/users/login", payload);
    return response.data;
  } catch (error) {
    return error.message;
  }
};

//get current users
export const GetCurrentUser = async (payload) => {
  try {
    const response = await axiosInstance.post(
      "/api/users/get-current-user",
      payload
    );
    return response.data;
  } catch (error) {
    return error.message;
  }
};

//getall users
export const GetAllUsers = async () => {
  try {
    const responce = await axiosInstance.get("/api/users/get-all-users");
    return responce.data;
  } catch (error) {
    return error.message;
  }
};
//  update user status
export const UpdateUserStatus = async(id, status) => {
  try{
    const response = await axiosInstance.put(
      '/api/users/update-user-status/${id}' ,
      {status}
    );
    return response.data;
  } catch (error) {
    returnerror.message
  }
};
