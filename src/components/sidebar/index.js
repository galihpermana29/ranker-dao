/* eslint-disable no-unused-vars */

import { useState, useEffect, useMemo } from 'react';

import { Link, animateScroll as scroll } from 'react-scroll';

import SidebarActive from 'assets/img/home/sidebar/sidebar-active.png';
import SidebarInactive from 'assets/img/home/sidebar/sidebar-inactive.png';
import MobileActive from 'assets/img/home/sidebar/mobile-active.png';
import MobileInactive from 'assets/img/home/sidebar/mobile-inactive.png';

import './style.scss';

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return {
    width,
  };
}

const Sidebar = ({ activeSection, setActiveSection }) => {
  const SECTION_LIST = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isMobile = useMemo(() => {
    if (windowDimensions.width <= 425) {
      return true;
    } else {
      return false;
    }
  }, [windowDimensions]);

  return (
    <div
      className={`${
        isMobile
          ? 'home-sidebar-mobile d-flex d-sm-none'
          : 'home-sidebar d-none d-sm-flex'
      }`}>
      {SECTION_LIST.map((name, index) => {
        return (
          <Link
            key={index}
            activeClass="active-sidebar"
            to={`home-${name}-section`}
            onSetActive={setActiveSection}
            spy={true}
            smooth={true}
            duration={300}
            horizontal={isMobile}
            containerId="home">
            {isMobile ? (
              <img
                src={
                  activeSection === `home-${name}-section`
                    ? MobileActive
                    : MobileInactive
                }
                className="home-sidebar-mobile-button"
              />
            ) : (
              <img
                src={
                  activeSection === `home-${name}-section`
                    ? SidebarActive
                    : SidebarInactive
                }
                className="home-sidebar-button"
              />
            )}
          </Link>
        );
      })}
    </div>
  );
};

export default Sidebar;
