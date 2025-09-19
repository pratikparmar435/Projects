export default function Hero() {
  return (
    <div className="container">
      <div className="row border-bottom text-center p-5">
        <h1>Pricing</h1>
        <p className="text-muted fs-5 mt-2">
          Free equity investment and flat $20 traday and F&O trades
        </p>
      </div>
      <div className="row text-center p-5 mt-5">
        <div className="col p-4">
          <img
            src="media/images/pricingEquity.svg"
            alt=""
            style={{ width: "70%" }}
          />
          <h2 className="mb-4">Free equity delivery</h2>
          <p className="text-muted">
            All equity delivery investments (NSE, BSE),
            <br /> are absolutely free — ₹ 0 brokerage.
          </p>
        </div>
        <div className="col p-4">
          <img
            src="media/images/intradayTrades.svg"
            alt=""
            style={{ width: "70%" }}
          />
          <h2 className="mb-4">Intraday and F&O trades</h2>
          <p className="text-muted">
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹20 on all option trades.
          </p>
        </div>
        <div className="col p-4">
          <img
            src="media/images/pricingMF.svg"
            alt=""
            style={{ width: "70%" }}
          />
          <h2 className="mb-4">Free direct MF</h2>
          <p className="text-muted">
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions & DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}
