import React, { useEffect, useRef, useState } from 'react';

import { Modal } from 'bootstrap';
import 'animate.css';

// import { Footer } from '../../components';
import { ModalFriends, Sidebar } from 'components';

import './style.scss';
import { FirstSection } from './FirstSection';
import { SecondSection } from './SecondSection';
import { ThirdSection } from './ThirdSection';
import { FourthSection } from './FourthSection';
import { FifthSection } from './FifthSection';
import { SixthSection } from './SixthSection';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home-first-section');
  const [isOpenMintingSites, setIsOpenMintingSites] = useState(false);

  const modalRef = useRef(null);

  // const SectionsId = [
  //   'home-first-section',
  //   'home-second-section',
  //   'home-third-section',
  //   'home-fourth-section',
  //   'home-fifth-section',
  //   'home-sixth-section',
  // ];

  const showFriendsModal = () => {
    const modalEle = modalRef.current;
    const bsModal = new Modal(modalEle, {
      backdrop: 'static',
      keyboard: false,
    });
    bsModal.show();
  };
  const closeFriendsModal = () => {
    const modalEle = modalRef.current;
    const bsModal = Modal.getInstance(modalEle);
    bsModal.hide();
  };

  useEffect(() => {
    const showModal = () => {
      if (activeSection === 'home-sixth-section') {
        showFriendsModal();
      }
    };
    showModal();
  }, [activeSection]);

  // Couldnt create a reusable/map the component, bug with react-scroll
  // const RenderSection = useCallback(
  //   ({ id = '', bgImageDesktop, bgImageMobile, heroImage, children }) => {
  //     return (
  //       <section
  //         className={`home-section animate__animated ${
  //           activeSection === id ? 'animate__fadeIn' : 'animate__fadeOut'
  //         }`}
  //         id={id}>
  //         {/* Mobile */}
  //         <img
  //           src={bgImageMobile}
  //           alt="background section"
  //           className=" home-section-background d-block d-sm-none"
  //         />
  //         {/* Desktop */}
  //         <img
  //           src={bgImageDesktop}
  //           alt="background section"
  //           className=" home-section-background d-none d-sm-block"
  //         />
  //         {children}
  //         <div className="home-section-right">
  //           <img
  //             src={heroImage}
  //             alt="get set play earn"
  //             className="home-section-hero-image"
  //           />
  //         </div>
  //       </section>
  //     );
  //   },
  //   [activeSection],
  // );

  // const animationFadeInClass = id => {
  //   if (id === activeSection) {
  //     return 'animate__fadeIn';
  //   }
  //   return 'animate__fadeOut';
  // };

  // const animationSlideClass = id => {
  //   if (id === activeSection) {
  //     return 'animate__fadeInLeft';
  //   }
  //   return 'animate__fadeOut';
  // };

  return (
    <div className="container-fluid p-0 m-0 home-section-parent" id="home">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <ModalFriends modalRef={modalRef} onClose={closeFriendsModal} />

      <FirstSection id="home-first-section" />
      <SecondSection id="home-second-section" />

      <ThirdSection id="home-third-section" />

      <FourthSection
        id="home-fourth-section"
        isOpenMintingSites={isOpenMintingSites}
        setIsOpenMintingSites={setIsOpenMintingSites}
      />

      <FifthSection id="home-fifth-section" />

      <SixthSection id="home-sixth-section" />

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
