import { useState } from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [selectedTab, setSelectedTab] = useState(null);
  const [data, setData] = useState(null);

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  const handleTabClick = (tabName, tabData) => {
    setSelectedTab(tabName);
    setData(tabData);
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar
        openSidebarToggle={openSidebarToggle}
        OpenSidebar={OpenSidebar}
        handleTabClick={handleTabClick}
      />
      <Home data={selectedTab === 'ChequingAccounts' ? data : null} />
    </div>
  );
}

export default App;
