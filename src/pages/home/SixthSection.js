import { useEffect, useRef } from 'react';
import { Modal } from 'bootstrap';

import { useIntersectionObserver } from 'usehooks-ts';

import { HomeButton } from './HomeButton';
import SixthBg from 'assets/img/home/background/teal-bg.png';
import SixthHero from 'assets/img/home/hero/sixth-hero.png';
import SixthHeroMobile from 'assets/img/home/background/teal-bg-mobile.png';
import { ModalFriends } from 'components';

export const SixthSection = ({ id = '' }) => {
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
      <ModalFriends onClose={closeFriendsModal} modalRef={modalRef} />
      <section className="home-section px-4 pb-0" id={id} ref={sixthRef}>
        {/* Mobile */}
        <img
          src={SixthHeroMobile}
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
            className={`home-section-hero-image animate__animated ${
              isVisible ? 'animate__fadeIn' : 'animate__fadeOut'
            }`}
          />
        </div>
      </section>
    </>
  );
};
