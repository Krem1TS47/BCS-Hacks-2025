import './App.css';
import Supabase from './Supabase';
import Home from './components/Home'

function App() {
  return (
    <div className="bg-black">
      <Home />
      <Supabase/>
    </div>
  );
}

export default App;
