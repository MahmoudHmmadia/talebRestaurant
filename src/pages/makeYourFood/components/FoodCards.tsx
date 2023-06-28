import { useState } from "react";
import { IconType } from "react-icons";
import AltButton from "../../../components/altButton";
import { GiCook, GiKitchenKnives, GiReturnArrow } from "react-icons/gi";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { MdNextPlan } from "react-icons/md";
import { ImSpoonKnife } from "react-icons/im";
import { RiCloseCircleFill } from "react-icons/ri";
import { addedTypes, chosenTypes } from "../../../hooks/useMakeFood";
import { UseContext } from "../../../context/UseContext";
import Order from "../../../components/order";
type props = {
  typeToChose: {
    title: string;
    icon: any;
    options: string[];
  }[];
  typeToAdd: {
    title: string;
    icon: any;
    options: string[];
  }[];
  main: "pizza" | "burger" | string;
  setIsMain: React.Dispatch<React.SetStateAction<boolean>>;
};
function FoodCard({ typeToChose, typeToAdd, main, setIsMain }: props) {
  const [cat, setCat] = useState<"chose" | "add">("chose");
  const [chosenTypes, setChosenTypes] = useState<chosenTypes | undefined>(
    undefined
  );
  const [addedTypes, setAddedTypes] = useState<addedTypes | undefined>();
  const { setIsOrder, isOrder } = UseContext();
  function test(
    category: { title: string; icon: IconType; options: string[] },
    option: string
  ) {
    if (
      (chosenTypes &&
        chosenTypes[category.title as keyof typeof chosenTypes] === option) ||
      (addedTypes &&
        addedTypes[category.title as keyof typeof addedTypes] &&
        addedTypes[category.title as keyof typeof addedTypes]!.includes(option))
    )
      return true;
    else return false;
  }
  function handleAddedTypes(key: string, op: string) {
    if (!addedTypes)
      setAddedTypes({
        [key]: [op],
      });
    else {
      if (addedTypes[key as keyof typeof addedTypes]) {
        addedTypes[key as keyof typeof addedTypes]!.filter(
          (option: string) => op === option
        ).length > 0
          ? setAddedTypes((prev) => ({
              ...prev,
              [key]: addedTypes[key as keyof typeof addedTypes]!.filter(
                (option: string) => op !== option
              ),
            }))
          : setAddedTypes((prev) => ({
              ...prev,
              [key]: [...addedTypes[key as keyof typeof addedTypes]!, op],
            }));
      } else {
        setAddedTypes((prev) => ({
          ...prev,
          [key]: [op],
        }));
      }
    }
  }
  return (
    <div className="container flex flex-column g-2 relative">
      {isOrder && chosenTypes && addedTypes && (
        <>
          <div className="fixed l-0 t-0 w-100 h-100 black-bg opacity-70 z-100000"></div>
          <Order
            payload={{ main, typeToChose: chosenTypes, typeToAdd: addedTypes }}
            clearCart={() => {
              setChosenTypes(undefined);
              setAddedTypes(undefined);
            }}
            type="special"
          />
        </>
      )}
      <div className="centering-content g-2">
        <h1
          className="cl-khaled cool_title txt-c uppercase"
          style={{
            textShadow: "1px 1px 10px",
          }}
        >
          {cat === "chose" ? " Chose Your Type" : "Add Your Touch Now"}
        </h1>
        <div className="fs-large flex cl-khaled">
          {cat === "chose" ? <GiKitchenKnives /> : <ImSpoonKnife />}
        </div>
      </div>
      <div className="food-cards">
        {(cat === "chose" ? typeToChose : typeToAdd).map((category) => (
          <div
            key={category.title}
            className="flex flex-column g-1 p-2 dark-box-shadow main-bg radius-s"
          >
            <div className="centering-content g-1">
              <h2
                className="cl-w letter-s-1 uppercase"
                style={{
                  textShadow: "1px 1px 10px",
                }}
              >
                {category.title}
              </h2>
              <div className="flex fs-large cl-khaled">
                <category.icon />
              </div>
            </div>
            <ul className="flex flex-column g-2">
              {category.options.map((option) => (
                <div key={option} className="relative p-1 cl-t main-bg">
                  {addedTypes &&
                    addedTypes[category.title as keyof typeof addedTypes] &&
                    addedTypes[
                      category.title as keyof typeof addedTypes
                    ]!.includes(option) && (
                      <div
                        className="absolute flex r-0 t-0 cl-r fs-b-small z-10000 pointer"
                        style={{
                          top: "-4px",
                        }}
                        onClick={() =>
                          handleAddedTypes(
                            category.title as keyof typeof addedTypes,
                            option
                          )
                        }
                      >
                        <RiCloseCircleFill />
                      </div>
                    )}
                  <li
                    className={`letter-s-1 fs-small capitalize pointer relative radius-s p-2 option smooth-2 ${
                      test(category, option) ? "mouse-none neon" : "pointer"
                    }
                  `}
                    style={{
                      border: test(category, option)
                        ? "1px solid"
                        : "1px solid",
                      borderColor: test(category, option) ? "#eee" : "#bbb",
                      color: test(category, option) ? "#fff" : "#bbb",
                    }}
                    onClick={() =>
                      cat === "chose"
                        ? setChosenTypes((prev) => ({
                            ...prev,
                            [category.title]: option,
                          }))
                        : handleAddedTypes(
                            category.title as keyof typeof addedTypes,
                            option
                          )
                    }
                  >
                    <span>{option}</span>
                    {test(category, option) && (
                      <span
                        className="flex cl-g absolute r-0 t-50 fs-b-small"
                        style={{
                          transform: "translate(-50%,-50%)",
                        }}
                      >
                        <BsFillCheckCircleFill />
                      </span>
                    )}
                  </li>
                </div>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex g-1 align-center">
        <AltButton
          bgColor="red_gradient_bg"
          color="cl-b"
          content="back"
          Icon={GiReturnArrow}
          fn={() => {
            cat == "add" ? setCat("chose") : setIsMain(false);
          }}
          valid={true}
        />
        <AltButton
          bgColor="khaled-bg"
          color="cl-b"
          content={cat === "chose" ? "Add Your touch" : `Make Your ${main}`}
          Icon={cat === "chose" ? MdNextPlan : GiCook}
          valid={
            (cat == "chose" && chosenTypes) ||
            (cat == "add" && addedTypes && chosenTypes)
              ? true
              : false
          }
          fn={() => {
            cat === "chose" ? setCat("add") : setIsOrder(true);
          }}
        />
      </div>
    </div>
  );
}
export default FoodCard;
