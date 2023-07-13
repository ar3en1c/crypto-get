import {FC} from 'react';
import './app.scss';
import Neshon from './Neshon';
const App : FC = () => {
  return (
    <>
      <div className="container">
        <div className="container-main">
          <Neshon chi={'top5'}/>
          <Neshon chi={'most-up'}/>
          <Neshon chi={'most-seller'}/>
          <Neshon chi={'most-down'}/>
        </div>
      </div>
    </>
  );
}

export default App;
