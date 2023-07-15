import axios from "axios";

// ----------Api to get profile ---------
export const getProfile = () => {
  return axios.get("https://panorbit.in/api/users.json");
};
