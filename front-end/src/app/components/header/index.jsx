import React from 'react';
import DesktopNav from './DesktopNav';
import { useTheme } from 'emotion-theming';

export const NavBar = props => {
  const Theme = useTheme();
  return <DesktopNav theme={Theme} {...props} />;
};
