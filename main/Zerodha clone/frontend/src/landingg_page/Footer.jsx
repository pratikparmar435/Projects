export default function Footer() {
  return (
    <div className="container border-top mt-5">
      <div className="row mt-5">
        <div className="col">
          <img
            src="media/images/logo.svg"
            alt="Logo"
            style={{ width: "50%" }}
          />
          <p className="mb-4 mt-3">
            &copy; 2010 - 2024, Not Zerodha Broking Ltd. <br />
            All rights reserved.
          </p>
          <i className="fa-brands fa-twitter text-muted fs-4"></i>
          <i className="fa-brands fa-square-facebook text-muted fs-4"></i>
          <i className="fa-brands fa-instagram text-muted fs-4"></i>
          <i className="fa-brands fa-linkedin-in text-muted fs-4"></i>
          <i className="fa-brands fa-telegram text-muted fs-4"></i>
        </div>
        <div className="col">
          <p>Company</p>
          <p className="text-muted">About</p>
          <p className="text-muted">Products</p>
          <p className="text-muted">Pricing</p>
          <p className="text-muted">Referral programme</p>
          <p className="text-muted">Careers</p>
          <p className="text-muted">Zerodha.tech</p>
          <p className="text-muted">Press & media</p>
          <p className="text-muted">Zerodha cares</p>
        </div>
        <div className="col">
          <p>Support</p>
          <p className="text-muted">Contact</p>
          <p className="text-muted">Support portal</p>
          <p className="text-muted">Z-Connect blog</p>
          <p className="text-muted">List of charges</p>
          <p className="text-muted">Downloads & resources</p>
        </div>
        <div className="col">
          <p>Account</p>
          <p className="text-muted">Open an account</p>
          <p className="text-muted">Fund transfer</p>
          <p className="text-muted">60 day challenge</p>
        </div>
      </div>
      <div className="mt-5 text-muted" style={{ fontSize: "12px" }}>
        <p>
          Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration
          no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha
          Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading
          through Zerodha Commodities Pvt. Ltd. MCX: 46025; SEBI Registration
          no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154,
          4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th
          Phase, Bengaluru - 560078, Karnataka, India. For any complaints
          pertaining to securities broking please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI | ICF
        </p>
        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID. Benefits: Effective Communication,
          Speedy redressal of the grievances
        </p>
        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p>
          Attention investors: 1) Stock brokers can accept securities as margins
          from clients only by way of pledge in the depository system w.e.f
          September 01, 2020. 2) Update your e-mail and phone number with your
          stock broker / depository participant and receive OTP directly from
          depository on your e-mail and/or mobile number to create pledge. 3)
          Check your securities / MF / bonds in the consolidated account
          statement issued by NSDL/CDSL every month.
        </p>
      </div>
    </div>
  );
}
