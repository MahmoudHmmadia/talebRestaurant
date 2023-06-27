import { motion as m } from "framer-motion";
import { BiMailSend } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { RiPhoneFill, RiUserFill } from "react-icons/ri";
import AltButton from "../../../components/altButton";
import { BsSendCheckFill } from "react-icons/bs";
import { IoCloseCircle, IoLocationSharp } from "react-icons/io5";
import { useEffect, useRef, useState } from "react";
import myAxios from "../../../api/axios";
import { UseContext } from "../../../context/UseContext";
import useRequest from "../../../hooks/useRequest";
type props = {
  setIsSubscribe: React.Dispatch<React.SetStateAction<boolean>>;
};
function Subscribe({ setIsSubscribe }: props) {
  const { postRequest } = useRequest();
  const [valid, setValid] = useState(false);
  const nameRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const path = "/customer";
  function getPayload() {
    return {
      name: nameRef.current?.value,
      address: addressRef.current?.value,
      email: emailRef.current?.value,
      phoneID: phoneRef.current?.value,
    };
  }
  function clear() {
    setIsSubscribe(false);
  }
  function reset() {
    nameRef.current!.value = "";
    addressRef.current!.value = "";
    emailRef.current!.value = "";
    phoneRef.current!.value = "";
    handleValid();
  }
  function handleValid() {
    nameRef.current?.value &&
    addressRef.current?.value &&
    emailRef.current?.value &&
    phoneRef.current?.value
      ? setValid(true)
      : setValid(false);
  }
  return (
    <>
      <div
        className="fixed t-0 l-0 w-100 h-100 alt-bg opacity-80"
        style={{
          zIndex: 1000000000,
        }}
      ></div>
      <m.div
        className="flex flex-column fixed l-50 p-2 radius-s g-2 alt-bg dark-box-shadow w-60"
        style={{
          zIndex: 1000000001,
          top: "10%",
          transform: "translateX(-50%)",
          border: "2px solid #444",
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
          className="absolute pointer r-0 t-0 cl-r flex fs-med"
          onClick={() => setIsSubscribe(false)}
        >
          <IoCloseCircle />
        </div>
        <div className="flex centering-content g-1">
          <h1 className="cool_title cl-w">Subscribe</h1>
          <div className="flex cl-w fs-x-large cl-khaled">
            <BiMailSend />
          </div>
        </div>
        <div className="flex flex-column g-2">
          <div className="input-container relative">
            <div
              className="absolute cl-khaled t-50 flex fs-b-small"
              style={{
                transform: "translateY(-50%)",
                left: "8px",
              }}
            >
              <RiUserFill />
            </div>
            <input
              type="text"
              id="sub-name"
              placeholder="FULL NAME"
              className="p-1 main-bg cl-w radius-s w-100 pl-3"
              style={{
                border: "1px solid #555",
              }}
              ref={nameRef}
              onChange={handleValid}
            />
          </div>
          <div className="input-container relative">
            <div
              className="absolute cl-khaled t-50 flex fs-b-small"
              style={{
                transform: "translateY(-50%)",
                left: "8px",
              }}
            >
              <IoLocationSharp />
            </div>
            <input
              type="text"
              id="sub-address"
              placeholder="ADDRESS"
              className="p-1 main-bg cl-w radius-s w-100 pl-3"
              style={{
                border: "1px solid #555",
              }}
              ref={addressRef}
              onChange={handleValid}
            />
          </div>
          <div className="input-container relative">
            <div
              className="absolute cl-khaled t-50 flex fs-b-small"
              style={{
                transform: "translateY(-50%)",
                left: "8px",
              }}
            >
              <MdEmail />
            </div>
            <input
              type="text"
              id="sub-email"
              placeholder="EMAIL"
              className="p-1 main-bg cl-w radius-s w-100 pl-3"
              style={{
                border: "1px solid #555",
              }}
              ref={emailRef}
              onChange={handleValid}
            />
          </div>
          <div className="input-container relative">
            <div
              className="absolute cl-khaled t-50 flex fs-b-small"
              style={{
                transform: "translateY(-50%)",
                left: "8px",
              }}
            >
              <RiPhoneFill />
            </div>
            <input
              type="text"
              id="sub-phone"
              placeholder="PHONE NUMBER"
              className="p-1 main-bg cl-w radius-s w-100 pl-3"
              style={{
                border: "1px solid #555",
              }}
              ref={phoneRef}
              onChange={handleValid}
            />
          </div>
        </div>
        <AltButton
          bgColor="khaled-bg"
          color="cl-b"
          content="subscribe"
          Icon={BsSendCheckFill}
          valid={valid}
          fn={() => postRequest(getPayload, path, clear, reset, "subscribe")}
        />
      </m.div>
      ;
    </>
  );
}
export default Subscribe;
