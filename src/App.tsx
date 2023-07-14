import { FC } from 'react';
import './app.scss';
import Neshon from './Neshon';
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
        <footer>
          <table>
            <tr>
              <td>
                <span>Erfan Ghandi</span>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr></tr>
            <tr>
              <td>
                <div className="ins">
                  <a href='https://www.instagram.com/erfan_dowom/' target='_blank' rel="noopener noreferrer">My Instagram</a>
                </div>
              </td>
              <td></td>
              <td>
                <span>GitHub</span>
              </td>
            </tr>
          </table>
        </footer>
      </div>
    </>
  );
}

export default App;
