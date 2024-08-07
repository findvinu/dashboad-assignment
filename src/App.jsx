import Header from "./components/Layout/Header/Header";
import Sidebar from "./components/Layout/Sidebar/Sidebar";
import Dashboard from "./pages/Dashboard";
import useMediaQuery from '@mui/material/useMediaQuery';

import "./App.scss";


const App = () => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <div>
      {matches && <Sidebar />}
      <div className="mainContent" style={{marginLeft: matches ? '80px' : 0}}>
        <Header />
        <Dashboard />
      </div>
    </div>
  );
};

export default App;
