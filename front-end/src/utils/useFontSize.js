import { useState, useEffect } from 'react';

const useFontSize = (defaultSize = 1) => {
  const clamp = (n, lo = 1, hi = 4) => Math.min(hi, Math.max(n, lo));
  const clean = n => (isNaN(n) ? defaultSize : clamp(+n));
  const storageName = '_size_acessibility_font';
  const fromStorage = clean(localStorage.getItem(storageName));
  const [fontSize, setFontSize] = useState(fromStorage);

  useEffect(() => localStorage.setItem(storageName, fontSize), [fontSize]);

  return [fontSize, size => setFontSize(clean(size))];
};

export default useFontSize;
