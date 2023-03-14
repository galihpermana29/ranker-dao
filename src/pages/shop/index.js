import './style.scss';
import { DUMMY_DATA } from './constant';
import { Link } from 'react-router-dom';

const OurShop = () => {
  return (
    <div className="shop-container">
      <div className="shop-title mt-5">
        <div className="my-4">
          <p className="shop-title-black d-block d-sm-none m-0 p-0">
            STARTED ON
          </p>
          <p className="shop-title-black d-none d-sm-block">
            LETS GET YOU STARTED ON
          </p>

          <p className="shop-title-yellow">ON YOUR JOURNEY</p>
        </div>
        <p className="shop-title-sub d-none d-md-block mb-5">
          We have the tools that you need to enhanche your experience on the
          metaverse!
        </p>
      </div>

      <div className="content-wrapper">
        {DUMMY_DATA.map((data, idx) => (
          <Link to={`/shop/${data.id}`} key={idx} className="card-shop">
            <div>
              <img src={data.thum} alt="thumbnail" />
            </div>
            <div className="title">{data.title}</div>
          </Link>
        ))}
      </div>

      <div className="bottom-content">
        <div className="bold">
          STAY ON TOP ON THE HOTTEST AND NEWEST GAME ON OUR LIST!
        </div>
        <div className="light">
          Simply by getting yourself a badge and officially be a part of our
          guild!
        </div>
        <Link className="button mt-5">MINT YOURS NOW</Link>
      </div>
    </div>
  );
};

export default OurShop;
