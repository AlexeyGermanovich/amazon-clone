import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://cdn.vox-cdn.com/thumbor/ZcUziRv_YdsJRtEg_7yGiQqNx2g=/1000x0/filters:no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/3706148/openworld-places-3.0.jpg"
          alt=""
        />
        <div className="home__row">
          <Product
            id="123434545"
            title="Harry Potter"
            price={19.99}
            image="https://say-hi.me/wp-content/uploads/2015/12/Digital-Harry-Potter-2.jpg"
            rating={5}
          />
          <Product
            id="2344534"
            title="The Dark Knight Rises"
            price={9.99}
            image="https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UY1200_CR90,0,630,1200_AL_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="3454653"
            title="Redmond RBM-M1921"
            price={29.99}
            image="https://cdn21vek.by/img/galleries/667/949/preview_b/rbmm1921_redmond_5b9a2eaf74e42.jpeg"
            rating={5}
          />
          <Product
            id="4576467"
            title="Baseus Flickering Desktop Fan Black"
            price={10.99}
            image="https://mobillife.by/images/virtuemart/product/CXYE-02_4.jpg"
            rating={3}
          />
          <Product
            id="567878"
            title="SAMSUNG GALAXY S20 ULTRA 5G SM-G988 12GB/128GB"
            price={300.0}
            image="https://sila.by/img/catalog2015/ntpk/tovar106278.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id="678798"
            title="Samsung UE43TU7560UXRU"
            price={500.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71%2BQph9E%2BRL.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
