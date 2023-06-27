import { IconType } from "react-icons/lib";

type props = {
  Icon: IconType;
  rateText: string | number;
  rate: string | number;
  color: string;
  fun: () => void;
};
function RateBox({ Icon, rateText, rate, color, fun }: props) {
  return (
    <div
      className={`flex flex-column align-center w-20 g-1 alt-bg radius-s p-2 ${
        rate == rateText ? "opacity-100 mouse-none" : "opacity-30 pointer"
      }`}
      onClick={fun}
    >
      <div className={`fs-x-large flex ${color}`}>
        <Icon />
      </div>
      <p className="bold uppercase cl-t">
        {typeof rateText == "string" && rateText}
      </p>
    </div>
  );
}
export default RateBox;
