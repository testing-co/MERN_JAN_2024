import './App.css';
import Header from './components/Header';
import Navigation from './components/Navigation';
import MainContent from './components/MainContent';

function App() {

  return (
    <div className="app outline">
      <Header />
      <Navigation />
      <MainContent />
    </div>
  );
}

export default App;
