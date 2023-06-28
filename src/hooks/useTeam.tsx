import { useEffect, useState } from "react";
import { person } from "../constants/data";
import myAxios from "../api/axios";
import { UseContext } from "../context/UseContext";
import { AxiosResponse } from "axios";

function useTeam() {
  const { setServerResponse, setLoader } = UseContext();
  const [team, setTeam] = useState<person[] | []>([]);
  const [active, setActive] = useState("");
  const [personDetails, setPersonDetails] = useState<person | undefined>();
  const styleHelper = ["I", "II", "III", "VI", "V", "IV"];
  function getEmployees() {
    setLoader(true);
    myAxios
      .get("employees")
      .then((res: AxiosResponse) => {
        setLoader(false);
        setTeam(res.data);
        setPersonDetails(res.data[0]);
        setActive(res.data[0]._id);
      })
      .catch(() => {
        setLoader(false);
        setServerResponse({
          type: "error",
          content: "The Server Is Not Working Write Now , Try Again Letter",
        });
      });
  }
  useEffect(() => {
    getEmployees();
  }, []);
  return {
    team,
    setActive,
    setPersonDetails,
    setTeam,
    personDetails,
    active,
    styleHelper,
    getEmployees,
  };
}
export default useTeam;
