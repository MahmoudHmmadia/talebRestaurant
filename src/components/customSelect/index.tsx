import { useState } from "react";
import { RiArrowDownSFill } from "react-icons/ri";
import { motion as m } from "framer-motion";
type props = {
  options: number[];
  value?: string;
  setValue?: React.Dispatch<React.SetStateAction<string | undefined>>;
  isDate?: boolean;
  number?: number;
  setNumber?: React.Dispatch<React.SetStateAction<number>>;
};
function CustomSelect({
  options,
  isDate,
  setNumber,
  number,
  setValue,
  value,
}: props) {
  const [isSelect, setIsSelect] = useState(false);
  return (
    <div
      className={`customSelect p-2 radius-s flex align-center cl-khaled relative w-100 ${
        options.length == 0 ? "mouse-none opacity-60" : "pointer opacity-100"
      }`}
      style={{
        border: "1px solid",
      }}
      tabIndex={0}
      onClick={() => setIsSelect((prev) => !prev)}
      onBlur={() => setIsSelect(false)}
    >
      <div
        className="absolute t-50 flex align-center g-1"
        style={{
          transform: "translateY(-50%)",
          right: "10px",
        }}
      >
        <div className="cl-t">|</div>
        <div className="flex cl-t">
          <RiArrowDownSFill />
        </div>
      </div>
      <p className="fs-x-small bold cl-t uppercase letter-s-1">
        {!isDate ? number && +number > 7 && +number : value}
        {options.length == 0 &&
          "There Is No More Reservation in this day try another one"}
      </p>
      {isSelect && (
        <ul
          className="absolute l-0 overflow-auto w-100 alt-bg radius-s flex flex-column z-10000"
          style={{
            height: "150px",
            bottom: "-375%",
          }}
        >
          {options.map((option) => (
            <m.li
              key={option}
              className="p-1 cl-t"
              style={{
                borderBottom: "1px solid",
              }}
              whileHover={{
                color: "#000",
                backgroundColor: "#e4c590",
              }}
              onClick={() => {
                if (isDate)
                  setValue!(`Your Reservation Will Be At / ${option}PM /`);
                else {
                  setNumber!(option);
                }
              }}
            >
              {option}
              {isDate && "PM"}
            </m.li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default CustomSelect;
