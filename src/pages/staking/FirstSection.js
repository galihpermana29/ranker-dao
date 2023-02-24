import { stakingContentFirst as s } from './constants/content';

const Description = () => (
  <>
    {s.description.map((e, i) => (
      <p className={`staking-description mb-${i < 1 ? '2' : '4'}`} key={i}>
        {e}
      </p>
    ))}

    <button className="staking-button" onClick={() => {}}>
      Mint yours now
    </button>
  </>
);

export const StakingFirstSection = () => {
  return (
    <section className="staking-section-hero" id="staking-first-section">
      <div>
        <h1 className="staking-title">
          {s.title}{' '}
          <span className="staking-title yellow">
            {s.titleHighlight}
          </span>
        </h1>

        <div className="staking-description-container--desktop">
          <Description />
        </div>
      </div>

      <img src={s.img.src} alt={s.img.alt} className="staking-section-hero-image" />

      <div className="staking-description-container--mobile">
        <Description />
      </div>
    </section>
  );
};
