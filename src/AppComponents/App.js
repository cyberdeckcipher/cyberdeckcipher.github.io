import AppHeader from './Header/AppHeader';
import AppFooter from './Footer/AppFooter';
import AppContent from './Content/AppContent';
import styles from '../Styles/App.module.css';

function App() {
  return (
    <div className={styles.App}>
      <AppHeader />
      <AppContent />
      <AppFooter />
    </div>
  );
}

export default App;