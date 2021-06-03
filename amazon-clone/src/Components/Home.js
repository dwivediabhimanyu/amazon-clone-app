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
            title="The Richest Man in Babylon"
            price={499}
            image="https://images-na.ssl-images-amazon.com/images/I/81NYuWzsJcS.jpg"
            rating={3}
          />
          <Product
            title="The Richest Man in Babylon"
            price={799}
            image="https://images-na.ssl-images-amazon.com/images/I/81NYuWzsJcS.jpg"
            rating={4}
          />
          <Product
            title="The Richest Man in Babylon"
            price={999}
            image="https://images-na.ssl-images-amazon.com/images/I/81NYuWzsJcS.jpg"
            rating={2}
          />
          <Product
            title="The Richest Man in Babylon"
            price={1299}
            image="https://images-na.ssl-images-amazon.com/images/I/81NYuWzsJcS.jpg"
            rating={5}
          />
        </div>
        <div className="home_row">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
        <div className="home_row">
          <Product />
        </div>
      </div>
    </div>
  );
}

export default Home;
