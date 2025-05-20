import logo from "./logoPD.jpg";
import loadImg from "./1484.png";
export function LoaderPD() {
  return (
    <div
      style={{
        position: "absolute",
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        justifyItems: "center",
        alignItems: "center",
        top: "0px",
        left: "0px",
        height: "100vh",
        width: "100vw",
        zIndex: "1000",
        backdropFilter: "blur(2px)",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${logo})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: 150 + "px",
          backgroundPosition: "center",
          width: 200 + "px",
          height: 150 + "px",
          margin: "0 auto",
          paddingTop: "150px",
          textAlign: "center",
        }}
      >
        <p style={{ textAlign: "center", color: "#000" }}>
          Please wait
          <br />
          for the download!
        </p>
        <img src={loadImg} style={{ height: "30px" }} />
      </div>
    </div>
  );
}
