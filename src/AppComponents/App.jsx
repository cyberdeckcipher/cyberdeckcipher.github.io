import { Routes, Route } from 'react-router-dom';
import styles    from '../Styles/App.module.css';
import AppHeader from './Header/AppHeader';
import AppFooter from './Footer/AppFooter';

import Home     from '../Pages/Home';
// import Arts     from '../Pages/Arts';
// import Projects from '../Pages/Projects';
import NotFound from '../Pages/NotFound';
import WIP      from '../Pages/WIP';

const App = () => {
  return (
    <div className={styles.App}>
      <AppHeader />
      <div className={styles.AppContainer}>
        <Routes>
          <Route path='/' exact   element={<Home/>} />
          <Route path='/Projects' element={<WIP/>} />
          <Route path='/Arts'     element={<WIP/>} />
          <Route path='/About'     element={<WIP/>} />
          
          <Route path='/*'        element={<NotFound/>} />
        </Routes>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;