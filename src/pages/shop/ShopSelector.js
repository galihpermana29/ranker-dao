const ShopSelector = ({ setActiveGame, list = {} }) => {
  const onClickChangeGame = game => {
    setActiveGame(game);
  };

  const result = [];
  Object.keys(list).forEach(function (key) {
    return result.push(list[key]);
  });

  return (
    <div className="shop-selector row w-100">
      {result.length &&
        result.map(({ name = '' }, index) => {
          return (
            <div
              onClick={() => onClickChangeGame(name)}
              key={index}
              className="shop-selector-item col-12 px-0">
              <p className="m-0 py-2 px-0">{name.toUpperCase()}</p>
            </div>
          );
        })}
      <div className="shop-selector-item col-12 px-0">
        <p className="m-0 py-2 px-0">More Games</p>
      </div>
    </div>
  );
};

export { ShopSelector };
