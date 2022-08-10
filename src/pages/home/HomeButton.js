export const HomeButton = props => {
  const { size, label } = props;
  const { mobile = '', tablet = '', desktop = '' } = size;

  return (
    <>
      {/* xs  */}
      <a {...props} className="d-block p-0 m-0  d-sm-none">
        <button className="pd-button" style={{ width: mobile }}>
          <strong>
            <p className="pd-button-text p-0 m-0 text-center">{label}</p>
          </strong>
        </button>
      </a>
      {/* md */}
      <a {...props} className="d-none p-0 m-0 d-md-block d-lg-none">
        <button className="pd-button" style={{ width: tablet }}>
          <strong>
            <p className="pd-button-text p-0 m-0 text-center">{label}</p>
          </strong>
        </button>
      </a>

      {/* desktop */}
      <a {...props} className="d-none p-0 m-0 d-lg-block">
        <button className="pd-button" style={{ width: desktop }}>
          <strong>
            <p className="pd-button-text p-0 m-0 text-center">{label}</p>
          </strong>
        </button>
      </a>
    </>
  );
};
