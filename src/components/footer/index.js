import { Link } from 'react-router-dom';

import Logo from '../../assets/img/logo-big.png';
import './style.scss';
const Footer = () => {
  const footerLinkList = [
    {
      name: 'TELEGRAM',
      link: 'https://t.me/rankerdao',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      name: 'INVENTORY',
      link: 'https://rankerdao.com/axies/index.html',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    {
      name: 'TWITTER',
      link: 'https://twitter.com/rankerdao',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    { name: '$RANKER', link: '/about' },
    {
      name: 'DISCORD',
      link: 'http://discord.gg/rankerdao',
      target: '_blank',
      rel: 'noopener noreferrer',
    },
    { name: 'MINT BADGE', link: '/mint-badge' },
    {
      name: 'INSTAGRAM',
      target: '_blank',
      rel: 'noopener noreferrer',
      link: 'https://instagram.com/rankerdao?utm_medium=copy_link',
    },
    { name: 'LITEPAPER', link: '/litepaper' },
  ];

  return (
    <footer className="footer-container d-flex justify-content-between p-sm-5 p-2">
      <div className="text-white w-100">
        <Link to="/">
          <img src={Logo} className="img-fluid footer-logo" alt="logo" />
        </Link>
        <p className="bold-15 mt-5 d-none d-sm-block">
          © RankerDao. All Rights Reserved 2022
        </p>
      </div>
      <div>
        <div className="row row-cols-2 gy-1 gy-lg-5">
          {footerLinkList.map(link => (
            <div className="col" key={link.name}>
              <a
                href={link.link}
                target={link.target}
                rel={link.rel}
                className="footer-link text-start text-white">
                {link.name}
              </a>
            </div>
          ))}
        </div>
        <p className="text-white mt-3 footer-link d-block d-sm-none">
          © RankerDao. All Rights Reserved 2022
        </p>
      </div>
    </footer>
  );
};

export default Footer;
