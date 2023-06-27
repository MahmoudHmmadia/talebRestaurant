import CustomSelect from "../customSelect";
import Calendar from "react-calendar";
import {
  BiCalendar,
  IoIosPeople,
  IoCloseCircle,
  BsFillPeopleFill,
  BsFillPersonFill,
  BiCalendarCheck,
} from "react-icons/all";
import { motion as m } from "framer-motion";
import { UseContext } from "../../context/UseContext";
import "./reservation.scss";
import useReservation from "../../hooks/useReservation";
import "react-calendar/dist/Calendar.css";
import PersonsNumber from "./PersonsNumber";
import useRequest from "../../hooks/useRequest";
import AltButton from "../altButton";
function Reservation() {
  const { setReservation } = UseContext();
  const {
    date,
    isCalendar,
    number,
    setDate,
    setIsCalendar,
    DATES,
    emailRef,
    nameRef,
    phoneRef,
    isMoreThanTwo,
    setIsMoreThanTwo,
    value,
    setValue,
    setNumber,
    valid,
    specialRequestRef,
    validCheck,
  } = useReservation();
  const { postRequest } = useRequest();
  const path = "/table";
  function getPayload() {
    return {
      name: nameRef.current?.value,
      phoneID: phoneRef.current?.value,
      number: typeof number == "number" ? number.toFixed() : number,
      date: date.toLocaleDateString(),
      email: emailRef.current?.value,
      time: value?.split("/ ")[1].split(" ")[0],
      specialRequest: specialRequestRef.current?.value,
    };
  }
  function clear() {
    setReservation(false);
  }
  function reset() {
    nameRef.current!.value = "";
    emailRef.current!.value = "";
    phoneRef.current!.value = "";
    validCheck();
  }
  return (
    <>
      <m.div
        className="fixed l-50 z-100000 radius-s p-2 flex flex-column g-2 w-40 main-bg reservation"
        initial={{
          y: 150,
          opacity: 0,
          x: "-50%",
        }}
        animate={{
          y: 0,
          opacity: 1,
          x: "-50%",
        }}
      >
        <div
          className="absolute t-0 r-0 cl-r fs-large pointer"
          onClick={() => setReservation(false)}
        >
          <IoCloseCircle />
        </div>
        {isMoreThanTwo && (
          <>
            <div className="absolute l-0 t-0 w-100 h-100 black-bg opacity-90 z-10000"></div>
            <div className="absolute l-50 t-50 translate-50 p-3 radius-s alt-bg z-100000 w-80 flex flex-column g-2 ">
              <div className="flex flex-wrap align-center g-3 justify-center">
                <PersonsNumber
                  setNumber={setNumber}
                  num={3}
                  number={number}
                  moreThanTwoFn={setIsMoreThanTwo}
                />
                <PersonsNumber
                  setNumber={setNumber}
                  num={4}
                  number={number}
                  moreThanTwoFn={setIsMoreThanTwo}
                />
                <PersonsNumber
                  setNumber={setNumber}
                  num={5}
                  number={number}
                  moreThanTwoFn={setIsMoreThanTwo}
                />
                <PersonsNumber
                  setNumber={setNumber}
                  num={6}
                  number={number}
                  moreThanTwoFn={setIsMoreThanTwo}
                />
                <PersonsNumber
                  setNumber={setNumber}
                  num={7}
                  number={number}
                  moreThanTwoFn={setIsMoreThanTwo}
                />
              </div>
              <div
                className="g-1 grid align-center"
                style={{
                  gridTemplateColumns: "150px 1fr",
                }}
              >
                <p className="uppercase fs-small cl-t">
                  or put a custom number
                </p>
                <CustomSelect
                  options={[8, 9, 10, 11, 12, 13, 14, 15]}
                  setNumber={setNumber}
                  number={number}
                />
              </div>
              <button
                className="w-60 m-auto p-2 centering-content bold letter-s-1 cl-b khaled-bg"
                onClick={() => setIsMoreThanTwo(false)}
              >
                Done
              </button>
            </div>
          </>
        )}
        {isCalendar && (
          <div className="overlay w-100 h-100 black-bg opacity-90 z-10000 absolute l-0 t-0"></div>
        )}
        <h1 className="cool_title cl-khaled uppercase txt-c">Reservation</h1>
        <div
          className="input-container grid relative g-1 align-center"
          style={{
            gridTemplateColumns: "40px 1fr",
          }}
        >
          <p className="cl-t">Name</p>
          <input
            type="text"
            autoComplete="off"
            className="cl-w letter-s-1 w-100 radius-s"
            id="res-name"
            style={{
              border: "1px solid #e4c390",
            }}
            ref={nameRef}
            onChange={validCheck}
          />
        </div>
        <div
          className="input-container grid relative g-1 align-center"
          style={{
            gridTemplateColumns: "40px 1fr",
          }}
        >
          <p className="cl-t">Phone</p>
          <input
            autoComplete="off"
            type="text"
            id="res-phone"
            className="cl-w letter-s-1 w-100 radius-s"
            style={{
              border: "1px solid #e4c390",
            }}
            ref={phoneRef}
            onChange={validCheck}
          />
        </div>
        <div
          className="input-container grid relative g-1 align-center"
          style={{
            gridTemplateColumns: "40px 1fr",
          }}
        >
          <p className="cl-t">Email</p>
          <input
            type="email"
            autoComplete="off"
            id="res-email"
            className="cl-w letter-s-1 w-100 radius-s"
            style={{
              border: "1px solid #e4c390",
            }}
            ref={emailRef}
            onChange={validCheck}
          />
        </div>
        <div
          className="grid g-1 align-center"
          style={{
            gridTemplateColumns: "40px 1fr",
          }}
        >
          <p className="cl-t">Time</p>
          <CustomSelect
            options={
              date.toLocaleDateString() === new Date().toLocaleDateString()
                ? DATES.filter(
                    (d) =>
                      d >
                      (new Date().getHours() > 12
                        ? new Date().getHours() % 12
                          ? new Date().getHours() % 12
                          : 12
                        : 0)
                  )
                : DATES
            }
            isDate={true}
            value={value}
            setValue={setValue}
          />
        </div>
        <div
          className="input-container grid relative g-1 align-center"
          style={{
            gridTemplateColumns: "40px 1fr",
          }}
        >
          <p className="cl-t">Date</p>
          <div
            className="cl-w letter-s-1 w-100 radius-s p-1 fs-small cl-t flex g-1 align-center pointer"
            style={{
              border: "1px solid #e4c390",
            }}
            onClick={() => setIsCalendar(true)}
          >
            <span className="icon fs-b-small flex">
              <BiCalendar />
            </span>
            <span>{date.toLocaleDateString()}</span>
          </div>
        </div>
        <div
          className="input-container grid relative g-1 align-center cl-khaled radius-s"
          style={{
            border: "1px solid",
          }}
        >
          <textarea
            placeholder="Special Request"
            className="cl-w p-2"
            id="special-request"
            autoComplete="off"
            style={{
              height: "100px",
            }}
            ref={specialRequestRef}
          ></textarea>
        </div>
        {isCalendar && (
          <div
            className="calendar-container absolute t-0 l-50 z-100000 flex p-3 flex-column g-1 w-80 overflow-hidden radius-s cl-khaled"
            style={{
              top: "100px",
              transform: "translateX(-50%)",
              border: "1px solid",
            }}
          >
            <div
              className="absolute t-0 r-0 fs-med pointer"
              onClick={() => setIsCalendar(false)}
            >
              <IoCloseCircle />
            </div>
            <Calendar
              //@ts-ignore
              onChange={setDate}
              value={date}
              showNeighboringMonth={false}
              minDate={new Date()}
              calendarType="ISO 8601"
            />
            <button
              className="khaled-bg cl-b bold fs-small uppercase p-2"
              onClick={() => {
                setIsCalendar(false);
              }}
            >
              set the date
            </button>
          </div>
        )}
        <div className="flex flex-wrap justify-evenly g-1 align-center">
          <PersonsNumber
            Icon={BsFillPersonFill}
            content="one persons"
            setNumber={setNumber}
            num={1}
            number={number}
          />
          <PersonsNumber
            Icon={BsFillPeopleFill}
            content="two persons"
            setNumber={setNumber}
            num={2}
            number={number}
          />
          <PersonsNumber
            Icon={IoIosPeople}
            content="group"
            setNumber={setNumber}
            num={3}
            number={number}
            moreThanTwoFn={setIsMoreThanTwo}
          />
        </div>

        <AltButton
          bgColor="khaled-bg"
          color="cl-b"
          content="reservation"
          fn={() => postRequest(getPayload, path, clear, reset, "reservation")}
          valid={valid}
          Icon={BiCalendarCheck}
        />
      </m.div>
    </>
  );
}
export default Reservation;
