export default function Hero() {
  return (
    <div className="container border-bottom" style={{ marginTop: "70px" }}>
      <div
        className="text-center text-muted p-5"
        style={{ lineHeight: "3rem" }}
      >
        <h1 className="fs-3 mb-3 mt-3">Zerodha Products</h1>
        <h5>Sleek, modern, and intuitive trading platforms</h5>
        <p>
          Check out our{" "}
          <a href="" style={{ textDecoration: "none" }}>
            investment offerings{" "}
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </p>
      </div>
    </div>
  );
}
