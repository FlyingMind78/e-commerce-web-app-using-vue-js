import axios from "axios";

export async function useHttpRequest(method, url, responseType, data = null) {
  return axios({
    method,
    url,
    responseType,
    data,
  })
    .then((data) => data)
    .catch((err) => {
      console.log(err);
      return err;
    });
}
