/* eslint-disable no-unused-vars */

import { useState, useEffect } from 'react';

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

  return (
    <>
      {/* Mobile */}
      {windowDimensions.width <= 425 ? (
        <div className="home-sidebar-mobile d-flex d-sm-none">
          {SECTION_LIST.map((name, index) => {
            return (
              <Link
                key={index}
                activeClass="active-sidebar"
                to={`home-${name}-section`}
                onSetActive={e => setActiveSection(e)}
                spy={true}
                smooth={true}
                duration={500}
                horizontal={true}
                // hashSpy={true}
                containerId="home">
                <img
                  src={
                    activeSection === `home-${name}-section`
                      ? MobileActive
                      : MobileInactive
                  }
                  className="home-sidebar-mobile-button"
                />
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="home-sidebar d-none d-sm-flex ">
          {SECTION_LIST.map((name, index) => {
            return (
              <Link
                key={index}
                activeClass="active-sidebar"
                to={`home-${name}-section`}
                onSetActive={setActiveSection}
                spy={true}
                // hashSpy={true}
                smooth={false}
                containerId="home">
                <img
                  src={
                    activeSection === `home-${name}-section`
                      ? SidebarActive
                      : SidebarInactive
                  }
                  className="home-sidebar-button"
                />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Sidebar;
