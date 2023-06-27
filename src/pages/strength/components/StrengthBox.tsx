type props = {
  image: string;
  title: string;
  content: string;
};

function StrengthBox({ image, title, content }: props) {
  return (
    <div
      className="strength_box p-3 flex flex-column align-center dark-box-shadow"
      style={{
        backgroundColor: "#141515",
        gap: "1.8rem",
      }}
    >
      <div className="image icon smooth-4">
        <img src={image} alt="" />
      </div>
      <h4
        className="cool_title txt-c"
        style={{
          fontSize: "1.7rem",
        }}
      >
        {title}
      </h4>
      <div className="cl-t txt-c line-h-1">{content}</div>
    </div>
  );
}
export default StrengthBox;
