import React from "react";

const Section = ({darkmode, setDarkmode}) => {
  return (
    <section className={`${darkmode?"dark":"light"}`}>
      <h1>Nike Shoes</h1>
      <h2>Jordans</h2>
      <div className="image">
        <div>
          <img
            src="https://limitededt.in/cdn/shop/files/FN5215-161_1.jpg?v=1733907166&width=2048"
            alt=""
          />
          <p>
            Nike Air Jordan Mid SE <br />$ 60.00
          </p>
        </div>
        <div>
        <img
          src="https://images-cdn.ubuy.co.in/634d139d183a133e4d32eaea-nike-air-jordan-1-high-og-unc-university.jpg"
          alt=""
        />
        <p>
          Nike Air Force 1 <br />$ 79.00
        </p>
        </div>
        <div>
        <img
          src="https://assets.myntassets.com/w_412,q_60,dpr_2,fl_progressive/assets/images/28282356/2024/3/15/628f8e05-5062-4299-b077-82a8cafa5f571710489568446AirJordan1ZoomCMFT2MensShoes1.jpg"
          alt=""
        /> <p>
        Nike Air Jordan Dunks <br />$ 199.00
      </p>
        </div>
        <div>
        <img
          src="https://crepdogcrew.com/cdn/shop/products/AirJordan1LowAluminum.jpg?v=1739802486&width=2048"
          alt=""
        /> <p>
        Nike Air Jordan Low Dunk <br />$ 299.00
      </p>
         </div>
      </div>
      <div className="price"></div>
    </section>
  );
};

export default Section;
