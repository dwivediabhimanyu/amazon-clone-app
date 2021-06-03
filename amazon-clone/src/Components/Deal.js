import React from "react";
import "./Deal.css";

function Deal({ title, image, cta_text, cta_link }) {
  return (
    <div className="deal">
      <div className="deal_info">
        <p className="deal_title">{title}</p>
        <img src={image} className="deal_image" alt="deal_banner" />
        <p className="deal_cta">
          <a href={cta_link}>
            <small>{cta_text}</small>
          </a>
        </p>
      </div>
    </div>
  );
}

export default Deal;
