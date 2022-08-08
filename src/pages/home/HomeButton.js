export const HomeButton = ({ label = '', url = '', size = {} }) => {
  const { mobile = '', tablet = '', desktop = '' } = size;

  return (
    <>
      {/* xs  */}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="d-block p-0 m-0  d-sm-none">
        <button className="pd-button" style={{ width: mobile }}>
          <strong>
            <p className="regular-15 p-0 m-0 text-center">{label}</p>
          </strong>
        </button>
      </a>
      {/* md */}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="d-none p-0 m-0 d-md-block d-lg-none">
        <button className="pd-button" style={{ width: tablet }}>
          <strong>
            <p className="regular-15 p-0 m-0 text-center">{label}</p>
          </strong>
        </button>
      </a>

      {/* desktop */}
      <a
        href={url}
        target="_blank"
        rel="noreferrer"
        className="d-none p-0 m-0 d-lg-block">
        <button className="pd-button" style={{ width: desktop }}>
          <strong>
            <p className="regular-15 p-0 m-0 text-center">{label}</p>
          </strong>
        </button>
      </a>
    </>
  );
};
