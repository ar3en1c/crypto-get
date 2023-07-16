import { FC } from 'react';
import './app.scss';
import Neshon from './Neshon';
import Footer from './Footer';
import CryptoPage from './CryptoPage';
import { Route, Routes } from 'react-router-dom';

function NeshonMain() {
  return (
    <>
      <Neshon chi={'top5'} />
      <Neshon chi={'most-up'} />
      <Neshon chi={'most-seller'} />
      <Neshon chi={'most-down'} />
    </>
  )
}

const App: FC = () => {
  return (
    <>
      <div className="container">
        <div className="container-main">
          <Routes>
            <Route element={<NeshonMain />} path="/" />
            <Route element={<CryptoPage />} path='/crypto/:chi' />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
