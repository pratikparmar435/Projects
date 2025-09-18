export default function LeftSection({
  imageUrl,
  productName,
  productDescription,
  googlePlay,
  appStore,
  tryDemo,
  learnMore,
}) {
  return (
    <div className="container mt-5 p-3">
      <div className="row" style={{ marginLeft: "100px" }}>
        <div className="col">
          <img src={imageUrl} alt="" style={{ marginRight: "80px" }} />
        </div>
        <div className="col text-muted p-5">
          <h1 className="fs-3">{productName}</h1>
          <p style={{ lineHeight: "1.8rem", fontSize: "1.1rem" }}>
            {productDescription}
          </p>
          <div className="mb-3">
            <a
              href={tryDemo ? tryDemo : "#"}
              style={{ textDecoration: "none" }}
            >
              Try Demo <i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <a
              href={learnMore ? learnMore : "#"}
              style={{ textDecoration: "none", marginLeft: "50px" }}
            >
              Learn more <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
          <div>
            <a href={googlePlay}>
              <img src="media/images/googlePlayBadge.svg" alt="" />
            </a>
            <a href={appStore} style={{ marginLeft: "50px" }}>
              <img src="media/images/appstoreBadge.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
