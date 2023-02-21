import "./main-banner.scss";
import banner from "../../resources/img/main-banner/rick-and-morty.png";

const MainBanner = () => {
    return (
        <div className="main-banner">
          <img className="main-banner__img" src={banner} alt="rick and morty"/>
        </div>
    )
}

export default MainBanner;