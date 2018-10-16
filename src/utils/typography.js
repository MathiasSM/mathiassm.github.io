const Typography = require("typography");

const typography = new Typography({
  baseFontSize: 16,
  baseLineHeight: 1.5,
  scaleRatio: 2,
  googleFonts: [
    {
      name: "Roboto Slab",
      styles: ["700"]
    },
    {
      name: "Roboto",
      styles: ["400", "400i", "700", "700i"]
    }
  ],
  headerFontFamily: ["Roboto Slab", "Helvetica", "sans-serif"],
  bodyFontFamily: ["Roboto", "Helvetica", "sans-serif"],
  headerGray: 20,
  headerGrayHue: "warm",
  bodyGray: 20,
  bodyGrayHue: "cool",
  headerWeight: 700,
  bodyWeight: 400,
  boldWeight: 700
});

const { rhythm, scale } = typography;
export { rhythm, scale, typography as default };
