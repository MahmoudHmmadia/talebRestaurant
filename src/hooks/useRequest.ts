import { AxiosError } from "axios";
import myAxios from "../api/axios";
import { UseContext } from "../context/UseContext";
function useRequest() {
  const { setServerResponse, setLoader } = UseContext();
  function postRequest(
    getPayload: any,
    path: string,
    clear: () => void,
    reset: () => void,
    type: string,
    refresh?: () => void
  ) {
    setLoader(true);
    myAxios
      .post(path, getPayload())
      .then((res) => {
        setLoader(false);
        if (res.status === 204) {
          reset();
          setServerResponse({
            content: "there is no free tables at this time , try another one",
            type: "error",
          });
        } else {
          clear();
          setServerResponse({
            content: res.data.message ? res.data.message : res.data,
            type,
          });
        }
        refresh && refresh();
      })
      .catch((err: AxiosError) => {
        setLoader(false);
        if (err.response?.status === 400) {
          reset();
          setServerResponse({
            content: "Write A Correct Data!",
            type: "error",
          });
        } else if (err.response?.status === 409) {
          const message = {
            message: "",
          };
          reset();
          setServerResponse({
            content: (err.response.data as typeof message).message,
            type: "error",
          });
        } else {
          clear();
          setServerResponse({
            content: "The Server Is Not Working Write Now , Try Again Letter",
            type: "error",
          });
        }
      });
  }
  return {
    postRequest,
  };
}
export default useRequest;
