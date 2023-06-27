import { Dispatch, SetStateAction, useEffect } from "react";

type props = {
  details: string[];
  detail: string;
  setDetail: Dispatch<SetStateAction<string>>;
};
function MenuNav({ details, detail, setDetail }: props) {
  useEffect(() => {
    setDetail("all");
  }, []);
  return (
    <ul className="centering-content g-1 main-bg dark-box-shadow radius-s w-fit m-auto mt-3 mb-3 overflow-hidden">
      {details.map((det) => (
        <li
          className={`p-2 uppercase letter-s-1 fs-small pointer ${
            det === detail ? "khaled-bg cl-b" : "cl-t main-bg"
          }`}
          key={det}
          onClick={() => {
            setDetail(det);
          }}
        >
          {det}
        </li>
      ))}
    </ul>
  );
}
export default MenuNav;
