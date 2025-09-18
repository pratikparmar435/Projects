import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";

export default function ProductPage() {
  return (
    <>
      <Hero />
      <LeftSection
        imageUrl="media/images/kite.png"
        productName="Kite"
        productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.kite3"
        appStore="https://apps.apple.com/in/app/zerodha-kite-trade-invest/id1449453802"
        tryDemo="https://kite-demo.zerodha.com/dashboard"
        learnMore="https://zerodha.com/products/kite"
      />
      <RightSection
        productName="Console"
        productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."
        learnMore="https://zerodha.com/products/console"
        imageUrl="media/images/console.png"
      />
      <LeftSection
        imageUrl="media/images/coin.png"
        productName="Coin"
        productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.coin"
        appStore="https://apps.apple.com/in/app/coin-by-zerodha-mutual-funds/id1392892554"
      />
      <RightSection
        productName="Kite Connect API"
        productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."
        learnMore="https://zerodha.com/products/api/"
        imageUrl="media/images/kiteconnect.png"
      />
      <LeftSection
        imageUrl="media/images/varsity.png"
        productName="Varsity mobile"
        productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."
        googlePlay="https://play.google.com/store/apps/details?id=com.zerodha.varsity"
        appStore="https://apps.apple.com/in/app/varsity-by-zerodha/id1474610753"
      />
      <p className="text-center fs-5 mb-5 mt-5">
        Want to know more about our technology stack? Check out the{" "}
        <a href="" style={{ textDecoration: "none" }}>
          Zerodha.tech
        </a>{" "}
        blog.
      </p>
      <Universe />
    </>
  );
}
