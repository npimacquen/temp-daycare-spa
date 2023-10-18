import axios from "axios";
import { baseUrl } from "../../constant/url.constant";
import { IUser } from "../../types/global.typing";

export const GetUser = async () => {
  axios.defaults.withCredentials = true;
  const response = await axios.get<IUser>(baseUrl);
  return response;
};
