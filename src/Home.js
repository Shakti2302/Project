import React from "react";
import "./Home.css";
import Product from "./Product";

const Home = () => {
  
  return (
    <>
      <div  className="home">
        <div className="home__container">
          <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/VGSW/2023/Jupiter23/Gateway/Homepage_DesktopHeroTemplate_3000x1200_PS5_Event_2x._CB575718748_.jpg"
            alt="Banner"
          />

          <div className="home__row">
            <Product
              id="123"
              title="Chetan Bhagat : One Arranged Murder"
              price={870}
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMF2-wkYSPX_ibNPT8LxjzEmGW9UEk0Ze9dA&usqp=CAU"
              rating={4}
            />
            <Product
              id="1234"
              title="OnePlus Nord CE 3 Lite 5G (Pastel Lime, 8GB RAM, 256GB Storage)"
              price={21998}
              image="https://m.media-amazon.com/images/I/61QRgOgBx0L._AC_UL320_.jpg"
              rating={5}
            />
          </div>
          <div className="home__row">
            <Product
              id="12345"
              title="Samsung 189 L 5 Star Digital Inverter Direct-Cool Single Door Refrigerator"
              price={17290}
              image="https://m.media-amazon.com/images/I/613SZ0sgNfL._AC_UL320_.jpg"
              rating={4}
            />
            <Product
              id="123456"
              title="Marshall Kilburn II 36W Portable Bluetooth Speaker - Black & Brass"
              price={24999}
              image="https://m.media-amazon.com/images/I/71ur52HJ8cL._AC_UY218_.jpg"
              rating={5}
            />
            <Product
              id="12"
              title="Casio G-Shock Analog-Digital Black Dial Men GM-2100G-1A9DR (G1278)"
              price={13945}
              image="https://m.media-amazon.com/images/I/71459fZyLBL._UX342_.jpg"
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id="1"
              title="Samsung 49-inch(124.4cm) Odyssey G9 Dual QHD, 240Hz, 1ms Curved Gaming Monitor, QLED, HAS, HDR 1000, G-Sync"
              price={184990}
              image="https://m.media-amazon.com/images/I/81aVCRqDqGL._AC_UY218_.jpg"
              rating={4}
            />
          </div>
          <div className="home__row">
            <Product
              id="111"
              title="Dr Luxur Weavemonster Ergonomic Gaming Chair"
              price={17290}
              image="https://m.media-amazon.com/images/I/611iEURAqVL._SY550_.jpg"
              rating={4}
            />
            <Product
              id="1212"
              title="Sg Hp 33 Grade 1+ English Willow Cricket Bat ( Size: Short Handle,Leather Ball ), Multicolour"
              price={47051}
              image="https://m.media-amazon.com/images/I/31ws8dliXjL._AC_UL320_.jpg"
              rating={4}
            />
            <Product
              id="1321"
              title="Nike Air Winflo 10 Men's Running Shoes"
              price={5660}
              image="https://m.media-amazon.com/images/I/61RrW234u2L._UY500_.jpg"
              rating={4}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
