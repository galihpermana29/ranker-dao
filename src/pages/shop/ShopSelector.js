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
              className="shop-selector-item col-12">
              <p>{name.toUpperCase()}</p>
            </div>
          );
        })}
    </div>
  );
};

export { ShopSelector };
