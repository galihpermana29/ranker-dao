// import FirstBackground from '../../assets/img/litepaper/litepaper-bg-1.png';
// import SecondBackground from '../../assets/img/litepaper/litepaper-bg-2.png';
// import ThirdBackground from '../../assets/img/litepaper/litepaper-bg-3.png';
// import FourthBackground from '../../assets/img/litepaper/litepaper-bg-4.png';
// import FifthBackground from '../../assets/img/litepaper/litepaper-bg-5.png';
import FirstSection from '../../assets/img/litepaper/Section-1.png';
import SecondSection from '../../assets/img/litepaper/Section-2.png';
import ThirdSection from '../../assets/img/litepaper/Section-3.png';
import FourthSection from '../../assets/img/litepaper/Section-4.png';
import FifthSection from '../../assets/img/litepaper/Section-5.png';
import SixthSection from '../../assets/img/litepaper/Section-6.png';
import SeventhSection from '../../assets/img/litepaper/Section-7.png';
import EighthSection from '../../assets/img/litepaper/Section-8.png';

import './style.scss';

const LitePaper = () => {
  return (
    <div className="container-fluid p-0 litepaper-container">
      <div className="d-flex justify-content-end">
        <img src={FirstSection} className="img-fluid my-5 ps-5" />
      </div>
      <div className="d-flex justify-content-start">
        <img src={SecondSection} className="img-fluid my-5 pe-5" />
      </div>
      <div className="d-flex justify-content-center p-1 p-lg-0">
        <img src={ThirdSection} className="img-fluid my-5" />
      </div>
      <div className="d-flex justify-content-center p-1 p-lg-0">
        <img src={FourthSection} className="img-fluid my-5" />
      </div>
      <div className="d-flex justify-content-center p-1 p-lg-0">
        <img src={FifthSection} className="img-fluid my-5" />
      </div>
      <div className="d-flex justify-content-center p-0 p-lg-0">
        <img src={SixthSection} className="img-fluid my-5" />
      </div>
      <div className="d-flex justify-content-center p-1 p-lg-0">
        <img src={SeventhSection} className="img-fluid my-5" />
      </div>
      <div className="d-flex justify-content-center p-1 p-lg-0">
        <img src={EighthSection} className="img-fluid my-5" />
      </div>
    </div>
  );
};

export default LitePaper;
