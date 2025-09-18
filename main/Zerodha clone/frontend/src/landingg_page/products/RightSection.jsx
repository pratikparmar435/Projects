export default function RightSection({
  productName,
  productDescription,
  learnMore,
  imageUrl,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col text-muted p-5 mt-5">
          <h1 className="fs-3 mt-5">{productName}</h1>
          <p style={{ lineHeight: "1.8rem", fontSize: "1.1rem" }}>
            {productDescription}
          </p>
          <div className="mb-3">
            <a
              href={learnMore ? learnMore : "#"}
              style={{ textDecoration: "none" }}
            >
              Learn more <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
        <div className="col">
          <img src={imageUrl} alt="" style={{ marginRight: "80px" }} />
        </div>
      </div>
    </div>
  );
}
