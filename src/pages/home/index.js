import React, { useState } from 'react';

import { ModalFriends, Sidebar } from 'components';
import { FirstSection } from './FirstSection';
import { SecondSection } from './SecondSection';
import { ThirdSection } from './ThirdSection';
import { FourthSection } from './FourthSection';
import { FifthSection } from './FifthSection';
import { SixthSection } from './SixthSection';

import 'animate.css';
import './style.scss';

const Home = () => {
  const [activeSection, setActiveSection] = useState('home-first-section');
  const [isOpenMintingSites, setIsOpenMintingSites] = useState(false);

  return (
    <div className="container-fluid p-0 m-0 home-section-parent" id="home">
      <Sidebar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      <ModalFriends />

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
    </div>
  );
};

export default Home;
