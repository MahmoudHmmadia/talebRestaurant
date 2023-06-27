import { GiLoveLetter } from "react-icons/gi";
import SectionTitle from "../../components/sectionTitle";
import rateImage from "../../assets/rate.svg";
import "./rate.scss";
import AltButton from "../../components/altButton";
import { BiSend } from "react-icons/bi";
import { RiUserStarFill } from "react-icons/ri";
import { FaComments } from "react-icons/fa";
import { useRef, useState } from "react";
import useRequest from "../../hooks/useRequest";
import RateBox from "../menu/components/RateBox";
import {
  BsEmojiAngryFill,
  BsEmojiHeartEyesFill,
  BsEmojiNeutralFill,
  BsEmojiSmileFill,
} from "react-icons/bs";
function RateUs() {
  const [rate, setRate] = useState<number>(4);
  const { postRequest } = useRequest();
  const nameRef = useRef<HTMLInputElement>(null);
  const commentRef = useRef<HTMLInputElement>(null);
  const [valid, setValid] = useState(false);
  function handleCheck() {
    nameRef.current?.value && commentRef.current?.value
      ? setValid(true)
      : setValid(false);
  }
  function getPayload() {
    return {
      name: nameRef.current?.value,
      comment: commentRef.current?.value,
      rate,
    };
  }
  const path = "/feedBack";

  function reset() {
    nameRef.current!.value = "";
    commentRef.current!.value = "";
    handleCheck();
  }

  return (
    <div className="rate section relative">
      <div className="absolute l-0 t-0 w-100 h-100 main-bg opacity-90"></div>
      <div className="container relative flex flex-column g-3">
        <SectionTitle title="rate us" />
        <h1 className="cool_title txt-c">how you find our restaurant?</h1>
        <div className="flex align-center g-3">
          <div className="image">
            <img src={rateImage} alt="RATE" width={500} />
          </div>
          <div className="flex-column g-2 align-center flex">
            <div
              className="flex cl-khaled"
              style={{
                fontSize: "10rem",
              }}
            >
              <GiLoveLetter />
            </div>
            <p className="uppercase txt-c">
              left for us any comment , complement , or whatever our services
              make you fill
            </p>
            <div className="w-100 flex flex-column g-1">
              <div className="input-container relative">
                <label
                  htmlFor="name"
                  className="absolute cl-khaled t-50 flex"
                  style={{
                    transform: "translateY(-50%)",
                    left: "8px",
                  }}
                >
                  <RiUserStarFill />
                </label>
                <input
                  id="name"
                  autoComplete="off"
                  type="text"
                  placeholder="NAME"
                  className="alt-bg w-100 m-auto cl-w p-2 pl-3"
                  style={{
                    border: "1px solid #e4c590",
                  }}
                  ref={nameRef}
                  onChange={handleCheck}
                />
              </div>
              <div className="input-container relative">
                <label
                  htmlFor="comment"
                  className="absolute cl-khaled t-50 flex"
                  style={{
                    transform: "translateY(-50%)",
                    left: "8px",
                  }}
                >
                  <FaComments />
                </label>
                <input
                  id="comment"
                  autoComplete="off"
                  type="text"
                  placeholder="WHAT EVER IN YOUR MIND"
                  className="alt-bg w-100 m-auto cl-w p-2 pl-3"
                  style={{
                    border: "1px solid #e4c590",
                  }}
                  ref={commentRef}
                  onChange={handleCheck}
                />
              </div>
              <div className="centering-content g-2 flex-wrap">
                <RateBox
                  Icon={BsEmojiHeartEyesFill}
                  rateText={5}
                  rate={rate}
                  color="cl-bl"
                  fun={() => setRate(5)}
                />
                <RateBox
                  Icon={BsEmojiSmileFill}
                  rateText={4}
                  rate={rate}
                  color="cl-g"
                  fun={() => setRate(4)}
                />
                <RateBox
                  Icon={BsEmojiNeutralFill}
                  rateText={2}
                  rate={rate}
                  color="cl-m"
                  fun={() => setRate(2)}
                />
                <RateBox
                  Icon={BsEmojiAngryFill}
                  rateText={1}
                  rate={rate}
                  color="cl-r"
                  fun={() => setRate(1)}
                />
              </div>
              <AltButton
                bgColor="khaled-bg"
                color="cl-b"
                content="send"
                Icon={BiSend}
                valid={valid}
                width="w-100"
                fn={() => postRequest(getPayload, path, reset, reset, "rate")}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RateUs;
