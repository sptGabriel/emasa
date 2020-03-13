import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import Header from 'app/components/header/index';
import { GlobalContainer, Content } from 'app/globals/global_styles';
import { Overlay } from 'app/globals/global_styles';
import Footer from 'app/components/footer/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from 'redux/slices/popupMenu';
import { toggleSide } from 'redux/slices/sideBar';
import LadingContent from 'app/components/content/LadingContent';
import GlobalStyle from 'app/globals/global_css';

const Layout = () => {
  const dispatch = useDispatch();
  const { popUpIsOpen } = useSelector(RootState => RootState.togglePopUp);
  const { sideIsOpen } = useSelector(RootState => RootState.toggleSide);
  return (
    <GlobalContainer>
      <Overlay
        onClick={() =>
          popUpIsOpen ? dispatch(toggle()) : dispatch(toggleSide())
        }
        pop={popUpIsOpen ? popUpIsOpen : sideIsOpen}
      />
      <GlobalStyle pop={popUpIsOpen} />
      <Header />
      <Content>{Outlet() ? <Outlet /> : <LadingContent />}</Content>
      <Footer />
    </GlobalContainer>
  );
};
const LayoutDashBoard = () => {
  const dispatch = useDispatch();
  const { popUpIsOpen } = useSelector(RootState => RootState.togglePopUp);
  const { sideIsOpen } = useSelector(RootState => RootState.toggleSide);
  return (
    <GlobalContainer>
      <Overlay
        onClick={() =>
          popUpIsOpen ? dispatch(toggle()) : dispatch(toggleSide())
        }
        pop={popUpIsOpen ? popUpIsOpen : sideIsOpen}
      />
      <GlobalStyle />
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </GlobalContainer>
  );
};
const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="about" element={<>About</>} />
        <Route path="test" element={<> test </>} />
      </Route>
      <Route path="dashboard" element={<LayoutDashBoard />}>
        <Route path="/" element={<> Dash home</>} />
        <Route path="about" element={<> Dash About</>} />
        <Route path="test" element={<>Dash test </>} />
      </Route>
    </Routes>
  );
};

export default MainRoutes;
