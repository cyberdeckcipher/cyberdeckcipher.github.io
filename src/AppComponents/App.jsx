import { Routes, Route } from 'react-router-dom';
import styles    from '../Styles/App.module.css';
import AppHeader from './Header/AppHeader';
import AppFooter from './Footer/AppFooter';

import Home     from '../Pages/Home';
// import Arts     from '../Pages/Arts';
// import Projects from '../Pages/Projects';
import PageNotFound from '../Pages/PageNotFound';
import WIP          from '../Pages/WIP';

const App = () => {
  return (
    <div className={styles.App}>
      <AppHeader />
      <div className={styles.AppContainer}>
        <Routes>
          <Route path='/'         exact element={<Home/>}     />
          <Route path='/Projects' exact element={<WIP/>}      />
          <Route path='/Arts'     exact element={<WIP/>}      />
          <Route path='/About'    exact element={<WIP/>}      />
          <Route path='/PageNotFound' exact element={<PageNotFound/>} />
          <Route path='/*'              element={<PageNotFound/>} />
        </Routes>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;