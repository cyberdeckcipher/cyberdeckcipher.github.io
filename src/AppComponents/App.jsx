import { Routes, Route } from 'react-router-dom';
import styles    from '../Styles/App.module.css';
import AppHeader from './Header/AppHeader';
import AppFooter from './Footer/AppFooter';

import Home     from '../Pages/Home';
import Arts     from '../Pages/Arts';
import Projects from '../Pages/Projects';
import NotFound from '../Pages/NotFound';

const App = () => {
  return (
    <div className={styles.App}>
      <AppHeader />
      <div className={styles.AppContainer}>
        <Routes>
          <Route path='/' exact   element={<Home/>} />
          <Route path='/Home'     element={<Home/>} />
          <Route path='/Projects' element={<Projects/>} />
          <Route path='/Arts'     element={<Arts/>} />
          
          <Route path='/*'        element={<NotFound/>} />
        </Routes>
      </div>
      <AppFooter />
    </div>
  );
}

export default App;