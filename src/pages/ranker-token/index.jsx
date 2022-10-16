import React from 'react';
import Coin from '../../assets/img/about/coin.png';
import rankerBadge from '../../assets/img/about/badges-info.png';
import chart from '../../assets/img/about/Chart.png';
import dataTokenInfo from './dataTokenInfo';
import dataTokenAllocation from './dataTokenAllocation';
import dataTableSale from './dataTableSale';
import dataTableDevelopment from './dataTableDevelopment';
import dataTablePlayer from './dataTablePlayer';
import './style.scss';

const RankerToken = () => {
  return (
    <div className="container-ranker-token">
      <section className="hero d-flex align-items-center justify-content-center flex-column">
        <img src={Coin} className="img-fluid img-coin" alt="coin" />
        <h1 className="ranker-text">
          $RANKER<span className="token-text">TOKEN</span>
        </h1>
        <p className="sub-text text-center">
          Level up your badge with $RANKER and unlock our exclusive NFTs,
          tournaments, coaching sessions and many more! You can get our tokens
          at these following site:
        </p>
      </section>
      <section className="chart">
        <img src={chart} alt="Chart" className="img-fluid" />
      </section>
      <section className="information">
        <div className="row">
          <div className="col-12 mb-5 mb-md-0 col-md-6 d-flex align-items-center justify-content-start flex-column">
            <h6 className="text-token-information">Token Information</h6>
            {dataTokenInfo.map(item => (
              <div
                className="d-flex align-items-center justify-content-between w-100"
                key={item.id}>
                <p className="title-text-information">{item.title}</p>
                <p className="subtitle-text-information">{item.subtitle}</p>
              </div>
            ))}
          </div>
          <div className="col-12 col-md-6 d-flex align-items-center flex-column">
            <h6 className="text-token-allocation">Token Allocation</h6>
            <table className="table table-hover table-bordered">
              <thead className="table-active">
                <tr className="text-row text-center">
                  <th>TOKEN ALLOCATION</th>
                  <th>TOKEN SUPPLY</th>
                  <th>PERCENTAGE</th>
                </tr>
              </thead>
              <tbody>
                {dataTokenAllocation.map(item => (
                  <tr className="text-col text-center" key={item.id}>
                    <td
                      className={[
                        item.token === 'TOKEN SALE'
                          ? 'text-col-sale-1'
                          : 'text-col-1',
                      ].join(' ')}>
                      {item.token}
                    </td>
                    {item.totalSupply && <td>{item.totalSupply}</td>}
                    {item.percentage && (
                      <td className="text-col-3">{item.percentage}</td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      <section className="table-sale">
        <table className="table table-borderless mb-5">
          <thead className="table-active text-center">
            <tr className="text-row">
              <th>SEED SALE ROUND</th>
              <th>PRIVATE SALE ROUND</th>
              <th>PUBLIC SALE ROUND</th>
            </tr>
          </thead>
          <tbody>
            {dataTableSale.map(item => (
              <tr key={item.id} className={['text-col'].join(' ')}>
                <td className="ps-0">
                  <div
                    className={[
                      'd-flex align-items-center justify-content-between',
                      item.id === 6 ? 'text-last' : 'mb-0',
                      item.id === 1 ? 'text-start' : '',
                    ].join(' ')}>
                    <p className="text-col-1 mb-0">{item.titleSale}</p>
                    <p className="text-col-2 mb-0">{item.subtitleSale}</p>
                  </div>
                </td>
                <td className="ps-0">
                  <div
                    className={[
                      'd-flex align-items-center justify-content-between',
                      item.id === 6 ? 'text-last' : 'mb-0',
                      item.id === 1 ? 'text-start' : '',
                    ].join(' ')}>
                    <p className="text-col-1 mb-0">{item.titlePrivate}</p>
                    <p className="text-col-2 mb-0">{item.subtitlePrivate}</p>
                  </div>
                </td>
                <td className="ps-0">
                  <div
                    className={[
                      'd-flex align-items-center justify-content-between',
                      item.id === 6 ? 'text-last' : 'mb-0',
                      item.id === 1 ? 'text-start' : '',
                    ].join(' ')}>
                    <p className="text-col-1 mb-0">{item.titlePublic}</p>
                    <p className="text-col-2 mb-0">{item.subtitlePublic}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table table-borderless mb-5">
          <thead className="table-active text-center">
            <tr className="text-row">
              <th>PROTOCOL DEVELOPMENT</th>
              <th>MARKETING</th>
              <th>TEAM</th>
            </tr>
          </thead>
          <tbody>
            {dataTableDevelopment.map(item => (
              <tr key={item.id} className={['text-col'].join(' ')}>
                <td className="ps-0">
                  <div
                    className={[
                      'd-flex align-items-center justify-content-between',
                      item.id === 6 ? 'text-last' : 'mb-0',
                      item.id === 1 ? 'text-start' : '',
                    ].join(' ')}>
                    <p className="text-col-1-dev mb-0">
                      {item.titleDevelopment}
                    </p>
                    <p className="text-col-2-dev mb-0">
                      {item.subtitleDevelopment}
                    </p>
                  </div>
                </td>
                <td className="ps-0">
                  <div
                    className={[
                      'd-flex align-items-center justify-content-between',
                      item.id === 6 ? 'text-last' : 'mb-0',
                      item.id === 1 ? 'text-start' : '',
                    ].join(' ')}>
                    <p className="text-col-1-dev mb-0">{item.titleMarketing}</p>
                    <p className="text-col-2-dev mb-0">
                      {item.subtitleMarketing}
                    </p>
                  </div>
                </td>
                <td className="ps-0">
                  <div
                    className={[
                      'd-flex align-items-center justify-content-between',
                      item.id === 6 ? 'text-last' : 'mb-0',
                      item.id === 1 ? 'text-start' : '',
                    ].join(' ')}>
                    <p className="text-col-1-dev mb-0">{item.titleTeam}</p>
                    <p className="text-col-2-dev mb-0">{item.subtitleTeam}</p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table table-borderless mb-0 table-bottom">
          <thead className="table-active text-center">
            <tr className="text-row">
              <th>PLAYER INCENTIVES</th>
              <th>LIQUIDITY</th>
            </tr>
          </thead>
          <tbody>
            {dataTablePlayer.map(item => (
              <tr key={item.id} className={['text-col w-100'].join(' ')}>
                <td className="ps-0">
                  <div
                    className={[
                      'd-flex align-items-center justify-content-between',
                      item.id === 6 ? 'text-last' : 'mb-0',
                      item.id === 1 ? 'text-start' : '',
                    ].join(' ')}>
                    <p className="text-col-1-player mb-0">{item.titlePlayer}</p>
                    <p className="text-col-2-player mb-0">
                      {item.subtitlePlayer}
                    </p>
                  </div>
                </td>
                <td className="ps-0">
                  <div
                    className={[
                      'd-flex align-items-center justify-content-between',
                      item.id === 6 ? 'text-last' : 'mb-0',
                      item.id === 1 ? 'text-start' : '',
                    ].join(' ')}>
                    <p className="text-col-1-player mb-0">
                      {item.titleLiquidity}
                    </p>
                    <p className="text-col-2-player mb-0">
                      {item.subtitleLiquidity}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="table-sale-mobile">
        <table className="table table-borderless mb-5">
          <thead className="table-active text-center">
            <tr className="text-row-mobile">
              <th>SEED SALE ROUND</th>
            </tr>
          </thead>
          <tbody>
            {dataTableSale.map(item => (
              <tr key={item.id} className={['text-col-mobile'].join(' ')}>
                <td className="ps-2">
                  <div
                    className={[
                      'd-flex align-items-center justify-content-between',
                      item.id === 6 ? 'text-last-mobile' : 'mb-0',
                      item.id === 1 ? 'text-start-mobile' : '',
                    ].join(' ')}>
                    <p className="text-col-1-mobile mb-0">{item.titleSale}</p>
                    <p className="text-col-2-mobile mb-0">
                      {item.subtitleSale}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table table-borderless mb-5">
          <thead className="table-active text-center">
            <tr className="text-row-mobile">
              <th>PRIVATE SALE ROUND</th>
            </tr>
          </thead>
          <tbody>
            {dataTableSale.map(item => (
              <tr key={item.id} className={['text-col-mobile'].join(' ')}>
                <td className="ps-2">
                  <div
                    className={[
                      'd-flex align-items-center justify-content-between',
                      item.id === 6 ? 'text-last-mobile' : 'mb-0',
                      item.id === 1 ? 'text-start-mobile' : '',
                    ].join(' ')}>
                    <p className="text-col-1-mobile mb-0">
                      {item.titlePrivate}
                    </p>
                    <p className="text-col-2-mobile mb-0">
                      {item.subtitlePrivate}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table table-borderless mb-5">
          <thead className="table-active text-center">
            <tr className="text-row-mobile">
              <th>PUBLIC SALE ROUND</th>
            </tr>
          </thead>
          <tbody>
            {dataTableSale.map(item => (
              <tr key={item.id} className={['text-col-mobile'].join(' ')}>
                <td className="ps-2">
                  <div
                    className={[
                      'd-flex align-items-center justify-content-between',
                      item.id === 6 ? 'text-last-mobile' : 'mb-0',
                      item.id === 1 ? 'text-start-mobile' : '',
                    ].join(' ')}>
                    <p className="text-col-1-mobile mb-0">{item.titlePublic}</p>
                    <p className="text-col-2-mobile mb-0">
                      {item.subtitlePublic}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table table-borderless mb-5">
          <thead className="table-active text-center">
            <tr className="text-row-mobile">
              <th>PROTOCOL DEVELOPMENT</th>
            </tr>
          </thead>
          <tbody>
            {dataTableDevelopment.map(item => (
              <tr key={item.id} className={['text-col-mobile'].join(' ')}>
                <td className="ps-2">
                  <div
                    className={[
                      'd-flex align-items-center justify-content-between',
                      item.id === 6 ? 'text-last-mobile' : 'mb-0',
                      item.id === 1 ? 'text-start-mobile' : '',
                    ].join(' ')}>
                    <p className="text-col-1-mobile mb-0">
                      {item.titleDevelopment}
                    </p>
                    <p className="text-col-2-mobile mb-0">
                      {item.subtitleDevelopment}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>{' '}
        <table className="table table-borderless mb-5">
          <thead className="table-active text-center">
            <tr className="text-row-mobile">
              <th>MARKETING</th>
            </tr>
          </thead>
          <tbody>
            {dataTableDevelopment.map(item => (
              <tr key={item.id} className={['text-col-mobile'].join(' ')}>
                <td className="ps-2">
                  <div
                    className={[
                      'd-flex align-items-center justify-content-between',
                      item.id === 6 ? 'text-last-mobile' : 'mb-0',
                      item.id === 1 ? 'text-start-mobile' : '',
                    ].join(' ')}>
                    <p className="text-col-1-mobile mb-0">
                      {item.titleMarketing}
                    </p>
                    <p className="text-col-2-mobile mb-0">
                      {item.subtitleMarketing}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table table-borderless mb-5">
          <thead className="table-active text-center">
            <tr className="text-row-mobile">
              <th>TEAM</th>
            </tr>
          </thead>
          <tbody>
            {dataTableDevelopment.map(item => (
              <tr key={item.id} className={['text-col-mobile'].join(' ')}>
                <td className="ps-2">
                  <div
                    className={[
                      'd-flex align-items-center justify-content-between',
                      item.id === 6 ? 'text-last-mobile' : 'mb-0',
                      item.id === 1 ? 'text-start-mobile' : '',
                    ].join(' ')}>
                    <p className="text-col-1-mobile mb-0">{item.titleTeam}</p>
                    <p className="text-col-2-mobile mb-0">
                      {item.subtitleTeam}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table table-borderless mb-5">
          <thead className="table-active text-center">
            <tr className="text-row-mobile">
              <th>PLAYER INCENTIVES</th>
            </tr>
          </thead>
          <tbody>
            {dataTablePlayer.map(item => (
              <tr key={item.id} className={['text-col-mobile'].join(' ')}>
                <td className="ps-2">
                  <div
                    className={[
                      'd-flex align-items-center justify-content-between',
                      item.id === 6 ? 'text-last-mobile' : 'mb-0',
                      item.id === 1 ? 'text-start-mobile' : '',
                    ].join(' ')}>
                    <p className="text-col-1-mobile mb-0">{item.titlePlayer}</p>
                    <p className="text-col-2-mobile mb-0">
                      {item.subtitlePlayer}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="table table-borderless mb-3">
          <thead className="table-active text-center">
            <tr className="text-row-mobile">
              <th>LIQUIDITY</th>
            </tr>
          </thead>
          <tbody>
            {dataTablePlayer.map(item => (
              <tr key={item.id} className={['text-col-mobile'].join(' ')}>
                <td className="ps-2">
                  <div
                    className={[
                      'd-flex align-items-center justify-content-between',
                      item.id === 6 ? 'text-last-mobile' : 'mb-0',
                      item.id === 1 ? 'text-start-mobile' : '',
                    ].join(' ')}>
                    <p className="text-col-1-mobile mb-0">
                      {item.titleLiquidity}
                    </p>
                    <p className="text-col-2-mobile mb-0">
                      {item.subtitleLiquidity}
                    </p>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
      <section className="ranker-badge">
        <h1 className="text-ranker-badge text-center">
          RANKER <span>BADGE</span>
        </h1>
        <p className="sub-text-ranker-1">
          Use your $RANKER with your badge to unlock our exclusive NFTs,
          tournaments, coaching sessions and many more!
        </p>
        <img
          src={rankerBadge}
          alt="rankerBadges"
          className="img-fluid img-ranker"
        />
        <h4 className="sub-text-ranker-2">DONT HAVE A BADGE YET?</h4>
        <p className="sub-text-ranker-3">
          Well, what are you waiting for? Get yours now!
        </p>
        <button className="button-ranker">MINT YOURS NOW</button>
      </section>
    </div>
  );
};

export default RankerToken;
