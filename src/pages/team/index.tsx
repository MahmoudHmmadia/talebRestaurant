import { socialIcons } from "../../constants/data";
import SectionTitle from "../../components/sectionTitle";
import useTeam from "../../hooks/useTeam";
import { motion as m } from "framer-motion";
import "./team.scss";
import { CiWarning } from "react-icons/ci";
import AltNav from "../../components/AltNav";
import { RiTeamFill } from "react-icons/ri";
import { UseContext } from "../../context/UseContext";
import AltButton from "../../components/altButton";
import { BiHome } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
function Team() {
  const { loader } = UseContext();
  let count = 0;
  const {
    active,
    personDetails,
    setActive,
    setPersonDetails,
    styleHelper,
    team,
  } = useTeam();
  const navigate = useNavigate();
  return (
    <div
      className="team alt-bg relative"
      id="team"
      style={{
        minHeight: "100vh",
      }}
    >
      <Helmet>
        <title>Taleb Restaurant | Team</title>
      </Helmet>
      <div className="absolute l-0 t-0 w-100 h-100 black-bg opacity-90"></div>
      {team.length == 0 && !loader ? (
        <div className="flex flex-column align-center g-3 absolute l-50 t-50 translate-50 container">
          <div
            className="flex cl-r"
            style={{
              fontSize: "7rem",
            }}
          >
            <CiWarning />
          </div>
          <h1 className=" neon txt-c ">THE SERVER IS NOT WORKING WRITE NOW</h1>
          <AltButton
            bgColor="blue_gradient_bg"
            color="cl-b"
            content="go back"
            Icon={BiHome}
            valid={true}
            fn={() => navigate("/")}
            width="w-50"
          />
        </div>
      ) : (
        <div className="container relative flex align-center justify-center g-3 flex-wrap">
          {loader && (
            <>
              <div
                className="fixed l-0 t-0 w-100 h-100 black-bg opacity-100 z-100000"
                style={{ zIndex: 999999999991 }}
              ></div>
              <div className="loader" style={{ zIndex: 999999999999 }}></div>
            </>
          )}
          <AltNav>
            <div className="flex g-1">
              <div className="flex cl-khaled fs-x-large cl-khaled">
                <RiTeamFill />
              </div>
              <div className="flex-column g-1 uppercase neon align-center justify-center txt-c">
                <h1>OUR</h1>
                <h1>TEAM</h1>
              </div>
            </div>
          </AltNav>
          <div className="flex flex-column g-3 w-40 team_content">
            <SectionTitle animate={false} title="our team" />
            <div className="cool_title txt-c">This Is Our Awesome Team</div>
            <div className="cool_content txt-c">
              They consist of a dedicated group of skilled and professional
              individuals in their field. They work together in harmony to
              provide an exceptional dining experience for our valued guests.
              The team members have extensive experience in the restaurant
              industry and the art of hospitality. They possess deep knowledge
              in preparing and presenting dishes with the highest standards of
              quality and creativity. The team works with a spirit of unity and
              dedication to meet the needs of our guests and provide an
              exceptional experience with every visit. They are the backbone of
              our restaurant, and we take pride in having them.
            </div>
          </div>
          <div className="team_leaders w-100 circle relative">
            <m.div
              className="animate_pattern_i circle absolute l-50 t-50 translate-50 w-80 h-80"
              initial={{
                rotate: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                rotate: 360,
                x: "-50%",
                y: "-50%",
              }}
              transition={{
                duration: 7,
                ease: "linear",
                repeat: Infinity,
              }}
            ></m.div>
            <m.div
              className="animate_pattern_ii circle absolute l-50 t-50 translate-50 w-60 h-60"
              initial={{
                rotate: 0,
                x: "-50%",
                y: "-50%",
              }}
              animate={{
                rotate: 360,
                x: "-50%",
                y: "-50%",
              }}
              transition={{
                duration: 4,
                ease: "linear",
                repeat: Infinity,
              }}
              style={{
                border: "5px solid",
                borderColor: " transparent #fff transparent #fff",
              }}
            ></m.div>
            <div className="icons relative w-100 h-100 centering-content pointer flex-1">
              {team &&
                team.map((person, index) => (
                  <div
                    className={`image absolute circle overflow-hidden ${
                      person._id === active ? "active" : ""
                    }`}
                    key={index}
                    id={`image${styleHelper[count++]}`}
                    onClick={() => {
                      setActive(person._id);
                      setPersonDetails(undefined);
                      setTimeout(() => {
                        setPersonDetails(person);
                      }, 300);
                    }}
                  >
                    <img
                      src={`https://www.taleb-restaurant-api.onrender.com/assets/${person?.image}`}
                      alt="TEAM"
                      className="absolute fit-cover l-0 t-0 w-100 h-100 circle"
                    />
                  </div>
                ))}
            </div>
            {personDetails && (
              <m.div
                className="flex-column centering-content g-1 absolute l-50 t-50 translate-50 person_details"
                initial={{
                  opacity: 0,
                  y: 30,
                  x: "-50%",
                }}
                animate={{
                  opacity: 1,
                  y: "-50%",
                  x: "-50%",
                }}
                transition={{
                  duration: 0.5,
                }}
              >
                <div className="image overflow-hidden radius-m">
                  <img
                    src={`https://www.taleb-restaurant-api.onrender.com/assets/${personDetails?.image}`}
                    alt="LEADER"
                    width={120}
                    height={120}
                  />
                </div>
                <h4 className="name cl-khaled capitalize">
                  {personDetails?.name}
                </h4>
                <p className="cl-t2 details letter-s-1 txt-c fs-small">
                  {personDetails?.jobTitle}
                </p>
                <div className="flex align-center g-1 social">
                  {personDetails.social?.map((icon) => (
                    <m.div
                      className="flex cl-t2 p-1 pointer radius-s icon"
                      key={socialIcons[`${icon.name}`].color}
                      style={{
                        backgroundColor: "#ccc",
                      }}
                      whileHover={{
                        backgroundColor: socialIcons[`${icon.name}`].color,
                        color: "#fff",
                      }}
                    >
                      {socialIcons[`${icon.name}`].icon}
                    </m.div>
                  ))}
                </div>
              </m.div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default Team;
