import { useEffect, useRef, useState } from "react";
function useReservation() {
  type reservationDetails = {
    name: string;
    date: string;
    time: string;
    sameDate?: string;
  };
  const DATES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
  const [isLoading, setIsLoading] = useState(false);
  const [valid, setValid] = useState(false);
  const [date, setDate] = useState<Date>(new Date());
  const [isCalendar, setIsCalendar] = useState(false);
  const [number, setNumber] = useState<number>(1);
  const [isMoreThanTwo, setIsMoreThanTwo] = useState(false);
  const [value, setValue] = useState<string | undefined>();
  const [reservationDetails, setReservationDetails] = useState<
    undefined | reservationDetails
  >();
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const specialRequestRef = useRef<HTMLTextAreaElement>(null);
  function validCheck() {
    if (nameRef.current?.value && phoneRef.current?.value && value) {
      setValid(true);
    } else setValid(false);
  }
  useEffect(() => {
    validCheck();
  }, [value]);

  return {
    number,
    isLoading,
    date,
    isCalendar,
    validCheck,
    setIsCalendar,
    setDate,
    DATES,
    value,
    setValue,
    setValid,
    nameRef,
    emailRef,
    setNumber,
    phoneRef,
    isMoreThanTwo,
    setIsMoreThanTwo,
    valid,
    reservationDetails,
    setReservationDetails,
    specialRequestRef,
  };
}

export default useReservation;
