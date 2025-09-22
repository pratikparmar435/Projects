export default function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="p-5" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>
      <div className="row p-3 mx-5">
        <div className="col p-5">
          <h3>Search for an answer or browse help topics to create ticket</h3>
          <input type="text" placeholder="Eg:how do i activate F&O" />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col p-5">
          <h3>Featured</h3>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverage - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
