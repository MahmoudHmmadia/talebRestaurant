import { IconType } from "react-icons/lib";

type props = {
  Icon?: IconType;
  setNumber: React.Dispatch<React.SetStateAction<number>>;
  num: number;
  number: number | string;
  content?: string;
  moreThanTwoFn?: React.Dispatch<React.SetStateAction<boolean>>;
};

function PersonsNumber({
  Icon,
  num,
  number,
  content,
  moreThanTwoFn,
  setNumber,
}: props) {
  return (
    <div className="flex flex-column g-1 align-center pointer">
      <div
        className={`circle centering-content bold fs-large dark-box-shadow ${
          number === num || (content === "group" && +number > 2)
            ? "khaled-bg cl-b"
            : "alt-bg cl-khaled"
        }`}
        style={{
          width: "100px",
          height: "100px",
        }}
        onClick={() => {
          setNumber(num);
          if (num === 3) moreThanTwoFn!(true);
        }}
      >
        {Icon ? <Icon /> : num}
      </div>
      {content && <p className="cl-t uppercase">{content}</p>}
    </div>
  );
}
export default PersonsNumber;
