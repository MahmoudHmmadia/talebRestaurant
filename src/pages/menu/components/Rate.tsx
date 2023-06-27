import { motion as m } from "framer-motion";
import {
  BiUser,
  BsEmojiAngryFill,
  BsEmojiHeartEyesFill,
  BsEmojiNeutralFill,
  BsEmojiSmileFill,
  CgComment,
  IoCloseCircle,
  MdOutlineStarRate,
  MdStarRate,
} from "react-icons/all";
import RateBox from "./RateBox";
import AltButton from "../../../components/altButton";
import { useRef, useState } from "react";
import useRequest from "../../../hooks/useRequest";
type props = {
  setIsRate: (value: React.SetStateAction<boolean>) => void;
  id: string;
  getMenu: () => void;
};
function Rate({ setIsRate, id, getMenu }: props) {
  const { postRequest } = useRequest();
  const [rate, setRate] = useState<"awesome" | "yummy" | "it's ok" | "bad">(
    "yummy"
  );
  const nameRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLInputElement>(null);
  const [isValid, setIsValid] = useState(false);
  function handleRate() {
    nameRef.current?.value && commentRef.current?.value
      ? setIsValid(true)
      : setIsValid(false);
  }
  function getRate() {
    return rate == "awesome"
      ? 5
      : rate == "yummy"
      ? 4
      : rate == "it's ok"
      ? 2
      : 1;
  }
  function payload() {
    return {
      name: nameRef.current?.value,
      comment: commentRef.current?.value,
      rate: getRate(),
    };
  }
  const path = `/menu/rate/${id}`;
  function clear() {
    setIsRate(false);
  }
  function refresh() {
    getMenu();
  }
  return (
    <m.div
      className="fixed overflow-hidden l-50 p-2 radius-s flex flex-column g-2 main-bg z-100000 dark-box-shadow order"
      style={{
        minWidth: "70%",
        transform: "translateX(-50%)",
      }}
      initial={{
        opacity: 0,
        y: 150,
        x: "-50%",
      }}
      animate={{
        opacity: 1,
        y: 0,
        x: "-50%",
      }}
    >
      <div
        className="absolute t-0 r-0 flex fs-med cl-r pointer"
        onClick={() => setIsRate(false)}
      >
        <IoCloseCircle />
      </div>
      <div className="centering-content g-1 cl-khaled">
        <h1 className="letter-s-1 uppercase txt-c">rate</h1>
        <div className="flex fs-large">
          <MdStarRate />
        </div>
      </div>
      <div className="centering-content g-2 flex-wrap">
        <RateBox
          Icon={BsEmojiHeartEyesFill}
          rateText="awesome"
          rate={rate}
          color="cl-bl"
          fun={() => setRate("awesome")}
        />
        <RateBox
          Icon={BsEmojiSmileFill}
          rateText="yummy"
          rate={rate}
          color="cl-g"
          fun={() => setRate("yummy")}
        />
        <RateBox
          Icon={BsEmojiNeutralFill}
          rateText="it's ok"
          rate={rate}
          color="cl-m"
          fun={() => setRate("it's ok")}
        />
        <RateBox
          Icon={BsEmojiAngryFill}
          rateText="bad"
          rate={rate}
          color="cl-r"
          fun={() => setRate("bad")}
        />
      </div>
      <div
        className="w-100"
        style={{
          transform: "scale(1.2)",
          height: "1px",
          backgroundColor: "#666",
        }}
      ></div>
      <div className="flex flex-column g-1">
        <p className="cl-t bold uppercase letter-s-1 txt-c fs-small">
          left a comment for us about the dish!
        </p>
        <div className="input-container relative">
          <label
            className="absolute flex cl-khaled fs-b-small t-50"
            style={{
              transform: "translateY(-50%)",
              left: "10px",
            }}
          >
            <BiUser />
          </label>
          <input
            type="text"
            placeholder="Write Your Name"
            className="alt-bg cl-w w-100"
            style={{
              borderBottom: "1px solid #555",
              paddingLeft: "35px",
            }}
            ref={nameRef}
            onChange={handleRate}
          />
        </div>
        <div className="input-container relative">
          <label
            className="absolute flex cl-khaled fs-b-small t-50"
            style={{
              transform: "translateY(-50%)",
              left: "10px",
            }}
          >
            <CgComment />
          </label>
          <input
            type="text"
            placeholder="Write Your Comment Here"
            className="alt-bg cl-w w-100"
            style={{
              borderBottom: "1px solid #555",
              paddingLeft: "35px",
            }}
            ref={commentRef}
            onChange={handleRate}
          />
        </div>
      </div>
      <AltButton
        bgColor="khaled-bg"
        color="cl-b"
        content="send the rate"
        Icon={MdOutlineStarRate}
        valid={isValid}
        fn={() => postRequest(payload, path, clear, clear, "rate", refresh)}
      />
    </m.div>
  );
}

export default Rate;
