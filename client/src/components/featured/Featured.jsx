import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://www.infostourismemaroc.com/uploads/images/gallery/5ec53daa390b8_visiter-place-moulay-el-mehdi-monument-ville-tetouan-city-infos-tourisme-maroc.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Tetouan</h1>
          <h2>3 tours</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/354291689.jpg?k=018c610f6ee8c75e7cd61e81c80d2ec38cb02f819b9bc03d31942404762bc813&o=&hp=1"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Merzouga</h1>
          <h2>5 tours</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://cdn.generationvoyage.fr/2019/11/visiter-medina-marrakech.jpg"
          alt=""
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Marrakech</h1>
          <h2>6 tours</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
