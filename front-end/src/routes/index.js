import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from 'app/components/header/index';
import { GlobalContainer, Content, Footer } from 'app/globals/global_styles';
import { Overlay } from 'app/globals/global_styles';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from 'redux/slices/popupMenu';
import { toggleSide } from 'redux/slices/sideBar';
import GlobalStyle from 'app/globals/global_css';

const MainRoutes = () => {
  const dispatch = useDispatch();
  const { popUpIsOpen } = useSelector(RootState => RootState.togglePopUp);
  const { sideIsOpen } = useSelector(RootState => RootState.toggleSide);
  return (
    <GlobalContainer>
      <GlobalStyle />
      <Overlay
        onClick={() =>
          popUpIsOpen ? dispatch(toggle()) : dispatch(toggleSide())
        }
        pop={popUpIsOpen ? popUpIsOpen : sideIsOpen}
      />
      <Routes>
        <Route path={['/']} element={<Header />} />
      </Routes>
      <Content>
        <Routes>
          <Route path="/" element={<> home </>}>
            <Route path="about" element={<>about</>} />
          </Route>
        </Routes>
      </Content>

      <Footer />
    </GlobalContainer>
  );
};

export default MainRoutes;
