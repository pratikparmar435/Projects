import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";

export default function Universe() {
  return (
    <div className="container mt-5 mb-5">
      <div className="row text-center">
        <h1 className="mb-3">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
        <div className="col-4 p-3 mt-5">
          <img src="media/images/smallcaseLogo.png" alt="" />
          <p className="text-muted text-small">Thematic investment platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/streakLogo.png"
            alt=""
            style={{ width: "35%" }}
          />
          <p className="text-muted text-small">Algo & strategy platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/sensibullLogo.svg"
            alt=""
            style={{ width: "45%" }}
          />
          <p className="text-muted text-small">option trading platform</p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt=""
            style={{ width: "50%" }}
          />
          <p className="text-muted text-small">Asset management</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/goldenpiLogo.png"
            alt=""
            style={{ width: "40%" }}
          />
          <p className="text-muted text-small">Bonds trading platform</p>
        </div>
        <div className="col-4 p-3 mt-5">
          <img
            src="media/images/dittoLogo.png"
            alt=""
            style={{ width: "30%" }}
          />
          <p className="text-muted text-small">Insurance</p>
        </div>
      </div>
    </div>
  );
}
