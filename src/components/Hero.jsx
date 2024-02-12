import "./Hero.css";
// import puma from "../assets/puma.png";

const Hero = (props) => {
  const { title, price, images, trending } = props;

  return (
    <>
      <div className="hero">
        <div
          className="card"
          style={{
            border: "2px solid black",
            width: "250px",
            padding: "5px 5px",
          }}
        >
          <h2>{trending}</h2>
          <div>
            <img src={images} alt="puma" width={250} />
            <div style={{ display: "flex" }}>
              <p>{title}</p>
              <p>{price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
