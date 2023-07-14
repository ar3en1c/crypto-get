import { FC } from 'react';
import './app.scss';
import Neshon from './Neshon';
import Footer from './Footer';
const App: FC = () => {
  return (
    <>
      <div className="container">
        <div className="container-main">
          <Neshon chi={'top5'} />
          <Neshon chi={'most-up'} />
          <Neshon chi={'most-seller'} />
          <Neshon chi={'most-down'} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
