import { css } from "styled-components";

const sizes = {
  bigdesktop: 1824,
  desktop: 992,
  tablet: 768,
  phone: 376
};

// Iterate through the sizes and create a media template
const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}rem) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});

export default media;

// Iterate through the sizes and create a media template
export const mediaMax = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label] / 16}rem) {
      ${css(...args)};
    }
  `;

  return acc;
}, {});
