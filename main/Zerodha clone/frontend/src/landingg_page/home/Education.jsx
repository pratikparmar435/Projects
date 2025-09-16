export default function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <img src="media/images/education.svg" alt="" />
        </div>
        <div className="col mt-5">
          <h1 className="fs-2">Free and open market education</h1>
          <p className="mt-4">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            Varsity
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            india for all your market related queries.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            TradingQ&A
            <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
