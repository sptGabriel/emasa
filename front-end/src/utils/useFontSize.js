import { useState, useEffect } from 'react';

export default function useFontSize(defaultSize = { size: 1 }) {
  const [fontSize, _setSize] = useState(getInitialSize);
  function getInitialSize() {
    const savedSize = localStorage.getItem('_size_acessibility_font');
    const parsedSize = JSON.parse(savedSize);
    const { size } = parsedSize;
    if (size >= 1 && size <= 4) {
      return size;
    } else {
      return defaultSize.size;
    }
  }

  useEffect(() => {
    localStorage.setItem(
      '_size_acessibility_font',
      JSON.stringify({ size: fontSize }),
    );
  }, [fontSize]);

  return {
    fontSize,
    setSize: ({ setSize, ...size }) => {
      return _setSize(size);
    },
  };
}
