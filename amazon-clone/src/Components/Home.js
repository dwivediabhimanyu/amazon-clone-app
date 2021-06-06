import React from "react";
import Deal from "./Deal";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <div className="home_container">
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img18/Fresh/GW/June_21/Pantry/01_3RD-JUN-pc1x._CB667273035_.jpg"
          className="home_bannerImage"
          alt="home_banner"
        />
        {/* Home Contents */}
        <div className="home_row">
          <Deal
            title="Up to 70% off | Electronics clearance store"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img21/CEPC/Clearance/May21/V238940049_IN_PC_BAU_Edit_Creation_Laptops1x._SY304_CB667377205_.jpg"
            cta_text="See More"
            cta_link="#"
          />
          <Deal
            title="Pay your credit card bills on Amazon"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Boson/Sid/CCBP/DesktopGateway_CategoryCard_379x304_CCBP._SY304_CB413372299_.jpg"
            cta_text="View all offers"
            cta_link="#"
          />
          <Deal
            title="Amazon Pay | Buy Google Play recharge code now"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/HFC/GPRC/GPRC_Desktop_CC_379x304._SY304_CB659214458_.jpg"
            cta_text="Buy Now"
            cta_link="#"
          />
          <Deal
            title="Beauty Products for women | Up to 70% off"
            image="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Dashboard/Fuji_Dash_Beauty_1x._SY304_CB432774351_.jpg"
            cta_text="View all offers"
            cta_link="#"
          />
        </div>
        <div className="home_row">
          <Product
            id={11}
            title="
            Echo Dot (3rd Gen), Black – Improved smart speaker with Alexa – Like new, backed with 1-year warranty"
            price={2899}
            image="https://images-na.ssl-images-amazon.com/images/I/61EXU8BuGZL._SL1100_.jpg"
            rating={4}
          />
          <Product
            id={12}
            title="Fire TV Stick (3rd Gen, 2021) with all-new Alexa Voice Remote| HD streaming device"
            price={3199}
            image="https://images-na.ssl-images-amazon.com/images/I/51-1DEGYWjS._SL1000_.jpg"
            rating={4}
          />
          <Product
            id={13}
            title="All-New Kindle Oasis (10th Gen) - Now with warm light, 7 inch Display, 32 GB, WiFi + Free 4G (Graphite)"
            price={28999}
            image="https://images-na.ssl-images-amazon.com/images/I/51468TdFt8S._SL1000_.jpg"
            rating={3}
          />
          <Product
            id={14}
            title="New Apple iPhone 12 (128GB) - Blue with A14 Bionic chip, the fastest chip ever in a smartphone"
            price={80650}
            image="https://images-na.ssl-images-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <img
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Vernac13th/1500x150_V2_Eng._CB412582591_.jpg"
            alt="gamming_banner"
            style={{ width: "100%" }}
          />
        </div>

        <div className="home_row">
          <Deal
            title="Up to 45% off | Bedding & linen | Amazon Brands & more"
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img20/AmazonBrands/GW/CC/Comforters_Desktop_379x304._SY304_CB413974303_.jpg"
            cta_text="View all offers"
            cta_link="#"
          />
          <Product
            id={14}
            title="New Apple iPhone 12 (128GB) - Blue with A14 Bionic chip, the fastest chip ever in a smartphone"
            price={80650}
            image="https://images-na.ssl-images-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id={14}
            title="New Apple iPhone 12 (128GB) - Blue with A14 Bionic chip, the fastest chip ever in a smartphone"
            price={80650}
            image="https://images-na.ssl-images-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg"
            rating={5}
          />
          <Product
            id={14}
            title="New Apple iPhone 12 (128GB) - Blue with A14 Bionic chip, the fastest chip ever in a smartphone"
            price={80650}
            image="https://images-na.ssl-images-amazon.com/images/I/71ZOtNdaZCL._SL1500_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
