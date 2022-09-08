import React, { useCallback, useEffect, useRef, useState } from 'react';

import { Modal } from 'bootstrap';
import 'animate.css';

import { ModalFriends, Sidebar } from 'components';
import { FirstSection } from './FirstSection';
import { SecondSection } from './SecondSection';
import { ThirdSection } from './ThirdSection';
import { FourthSection } from './FourthSection';
import { FifthSection } from './FifthSection';
import { SixthSection } from './SixthSection';

import './style.scss';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home-first-section');
  const [isOpenMintingSites, setIsOpenMintingSites] = useState(false);

  const modalRef = useRef(null);

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

  const showModal = useCallback(() => {
    if (activeSection === 'home-sixth-section') {
      showFriendsModal();
    } else {
      return null;
    }
  }, [activeSection]);

  useEffect(() => {
    showModal();
  }, [showModal]);

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
