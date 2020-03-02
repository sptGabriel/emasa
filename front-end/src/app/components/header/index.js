import React from 'react';
import { Device } from 'utils/device_screenSizes';
import Desktop from './Desktop';
import Mobile from './Mobile';
const Header = props => {
  return (
    <>
      <Device.Desktop>
        <Desktop {...props} />
      </Device.Desktop>
      <Device.Mobile>
        <Mobile {...props} />
      </Device.Mobile>
    </>
  );
};

export default Header;
