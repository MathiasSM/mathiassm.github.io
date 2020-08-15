const chroma = require("chroma-js");

const white = chroma("white");
const black = chroma("black");

const generate = ({ id, hsl }) => {
  const c = chroma.hsl(...hsl);
  return {
    id,
    colors: {
      black: chroma.mix(black, c, 0.2),
      dark: c.darken(),
      pure: c,
      light: c.brighten(),
      white: chroma.mix(white, c, 0.2),
    },
  };
};

const getHexes = ({ id, colors }) => {
  const hexes = Object.keys(colors).reduce(
    (acc, k) => ({ ...acc, [k]: colors[k].hex() }),
    {}
  );
  return { [id]: hexes };
};

const getColors = (colorJson) =>
  colorJson
    .reduce((acc, color) => [...acc, generate(color)], [])
    .reduce((acc, colorSet) => ({ ...acc, ...getHexes(colorSet) }), {});

module.exports = getColors;
