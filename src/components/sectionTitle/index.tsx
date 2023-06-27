import separator from "../../assets/separator.svg";
import { motion as m } from "framer-motion";
function SectionTitle({
  title,
  animate,
}: {
  title: string;
  animate?: boolean;
}) {
  return (
    <m.div
      className="flex flex-column g-2"
      initial={{
        y: animate ? "30%" : "",
        opacity: animate ? 0 : "",
      }}
      animate={{
        y: animate ? "0%" : "",
        opacity: animate ? 1 : "",
      }}
      transition={{
        duration: 0.5,
        delay: 0.5,
      }}
    >
      <h4 className="cl-khaled uppercase letter-s-2 txt-c">{title}</h4>
      <div className="separator centering-content">
        <img src={separator} alt="SEPARATOR" width={100} />
      </div>
    </m.div>
  );
}
export default SectionTitle;
