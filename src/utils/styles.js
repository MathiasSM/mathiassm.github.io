export const hslString = ([hue, saturation, lightness, alpha = 1]) =>
  `hsla(${hue},${saturation}%,${lightness}%,${alpha})`;
