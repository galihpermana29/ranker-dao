import { useEffect, useRef, useState } from 'react';
import { Modal } from 'bootstrap';

import { useIntersectionObserver } from 'usehooks-ts';

import { HomeButton } from './HomeButton';
import SixthBg from 'assets/img/home/background/teal-bg.png';
import SixthBgMobile from 'assets/img/home/background/teal-bg-mobile.png';
import SixthHero from 'assets/img/home/hero/sixth-hero.png';
import SixthHeroMobile from 'assets/img/home/hero/sixth-hero-mobile.png';
import { ModalFriends } from 'components';

export const SixthSection = ({ id = '' }) => {
  const [isTop, setIsTop] = useState(true);
  const [isBottom, setIsBottom] = useState(false);
  const modalRef = useRef(null);
  const sixthRef = useRef();
  const entry = useIntersectionObserver(sixthRef, {
    threshold: 0.1,
    freezeOnceVisible: false,
  });

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

  const onScrollModal = event => {
    const { scrollHeight, scrollTop, clientHeight } = event.target;
    const bottom = scrollHeight - clientHeight;

    if (scrollTop === 0) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }

    if (bottom === scrollTop) {
      setIsBottom(true);
    } else {
      setIsBottom(false);
    }
  };

  const isVisible = entry ? !!entry.isIntersecting : false;

  useEffect(() => {
    const showModal = () => {
      if (isVisible) {
        showFriendsModal();
      }
    };
    showModal();
  }, [isVisible]);

  return (
    <>
      <ModalFriends
        onScroll={onScrollModal}
        onClose={closeFriendsModal}
        modalRef={modalRef}
        isTop={isTop}
        isBottom={isBottom}
      />
      <section className="home-section px-4 pb-0" id={id} ref={sixthRef}>
        {/* Mobile */}
        <img
          src={SixthBgMobile}
          alt="background section"
          className=" home-section-background d-block d-sm-none"
        />
        {/* Desktop */}
        <img
          src={SixthBg}
          alt="background section"
          className=" home-section-background d-none d-sm-block"
        />
        <div
          className={`home-section-left animate__animated ${
            isVisible ? 'animate__fadeInLeft' : 'animate__fadeOut'
          }`}>
          <p className="home-title">
            SOCIAL-FI{' '}
            <span className="home-title yellow-half-bottom">STRONG</span>
          </p>
          <p className="description-common">
            Start your adventure together! Our community is ready to strategize,
            practice and formulate new ideas! Compete in the highest level of
            gaming against other guilds, and fellow rankers. Good luck, have
            fun!
          </p>
          <p className="description-common">
            Compete in the highest level of gaming against other guilds, and
            fellow rankers. Good luck, have fun!
          </p>
          <p className="description-common">
            As we grow, we will implement more Social-Fi features such as
            in-guild tournaments, and other exciting activities.
          </p>
          <HomeButton
            label="START YOUR ADVENTURE NOW!"
            href="/mint-badge"
            size={{ mobile: '213px', tablet: '218px', desktop: '359px' }}
          />
        </div>
        <div className="home-section-right">
          <img
            src={SixthHero}
            alt="get set play earn"
            className={`d-none d-md-flex home-section-hero-image animate__animated ${
              isVisible ? 'animate__fadeIn' : 'animate__fadeOut'
            }`}
          />
          <img
            src={SixthHeroMobile}
            alt="get set play earn"
            className={`d-md-none home-section-hero-image animate__animated ${
              isVisible ? 'animate__fadeIn' : 'animate__fadeOut'
            }`}
          />
        </div>
      </section>
    </>
  );
};
