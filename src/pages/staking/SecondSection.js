import { stakingContentSecond as s } from './constants/content';

export const StakingSecondSection = () => {
  return (
    <section className="staking-section">
      <h1 className="staking-title text-center">
        {s.title}{' '}
        <span className="staking-title yellow">{s.titleHighlight}</span>
      </h1>
      <p
        className="staking-description text-center"
        style={{ maxWidth: 'unset' }}>
        {s.subtitle}
      </p>

      <div className="staking-pricing-container">
        {s.pricing.map((e, i) => (
          <div key={i}>
            <h5 className="staking-pricing-label">{e.title}</h5>
            <p className="staking-pricing-price">
              <span className="yellow">{e.price}</span> $RANKER
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};
