import axios from "axios";
import { checkClaimsUrl } from "../../constant/url.constant";

export const CheckClaims = async () => {
  axios.defaults.withCredentials = true;
  const response = await axios.get(checkClaimsUrl);
  return response;
};
