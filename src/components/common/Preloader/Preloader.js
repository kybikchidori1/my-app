/* eslint-disable jsx-a11y/alt-text */
import preloader from "../../../assets/img/preloader.gif";

let Preloader = (props) => {
  return (
    <div style={{ backgroundColor: "white" }}>
      <img src={preloader} />
    </div>
  );
};

export default Preloader;
