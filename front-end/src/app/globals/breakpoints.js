const breakpoints = [320, 480, 481, 767, 768, 1024, 1281];

export const down = () => {
  return breakpoints.map(bp => `@media (min-width: ${bp}px)`);
};

export const up = () => {
  return breakpoints.map(bp => `@media (min-width: ${bp}px)`);
};

export const only = () => {
  return breakpoints.map(bp => `@media (min-width: ${bp}px)`);
};

export const between = (value1, value2, landscape) => {
  if (value1 && value2) {
    return `@media (min-width: ${value1}px) and (max-width: ${value2}px) ${
      landscape ? `and (orientation: landscape)` : ''
    }`;
  }
};
