import { Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import styles        from '../Styles/App.module.css';
import AppHeader     from './Header/AppHeader';
import AppFooter     from './Footer/AppFooter';
import Home          from '../Pages/Home';
import Projects      from '../Pages/Projects';
import PageNotFound  from '../Pages/PageNotFound';
import WIP           from '../Pages/WIP';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

const App = () => {

  return (
    <ThemeProvider
      breakpoints   ={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
      minBreakpoint ="xs"
    >
      <div className={styles.App}>
        <AppHeader />
        <div className={styles.AppContainer}>
          <Routes>
            <Route path='/'             exact element={<Home/>} />
            <Route path='/Projects'     exact element={<Projects/>} />
            <Route path='/Arts'         exact element={<WIP/>} />
            <Route path='/About'        exact element={<WIP/>} />
            <Route path='/PageNotFound' exact element={<PageNotFound/>} />
            <Route path='/*'                  element={<PageNotFound/>} />
          </Routes>
        </div>
        <AppFooter />
      </div>
    </ThemeProvider>
  );
}

export default App;