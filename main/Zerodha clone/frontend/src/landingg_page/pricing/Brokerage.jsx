export default function Brokerage() {
  return (
    <div className="container">
      <div className="row border-top p-5">
        <div className="col-8 mt-5">
          <a href="" style={{ textDecoration: "none" }}>
            <h4 className="fs-5 text-center">Brokerage calculator</h4>
          </a>
          <ul
            className="text-muted mt-4"
            style={{ fontSize: "0.9rem", lineHeight: "2.3" }}
          >
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of $50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              $20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS), 0.5% or $1 per executed order for
              equity (whichever is lower).
            </li>
            <li>
              For NRI account (PIS), 0.5% or $2 per executed order for equity
              (whichever is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged $40 per executed order instead of $20 per executed order.
            </li>
          </ul>
        </div>
        <div className="col-4 mt-5">
          <a href="" style={{ textDecoration: "none" }}>
            <h4 className="fs-5 text-center">List of charges</h4>
          </a>
        </div>
      </div>
    </div>
  );
}
