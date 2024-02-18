import React, { useState } from 'react';
import { openTab } from '../../Prod/Frontend/script.js';
import Home from './Home.jsx';
import {
  BsCashStack
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar, handleTabClick }) {
  const [data, setData] = useState(null);

  const handleButtonClick = (tabName) => {
    openTab(tabName)
      .then((result) => {
        setData(result);
        console.log(`Button clicked for tab: ${tabName}`);
        console.log('Fetched data:', result);

        // Pass the tab name and corresponding data to the parent component
        if (handleTabClick && typeof handleTabClick === 'function') {
          handleTabClick(tabName, result);
        }
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  };

  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand'>
          <BsCashStack className='icon_header' /> MoneyMoves
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <li className='sidebar-list-item'>
          <button className="tab-button" onClick={() => handleButtonClick('ChequingAccounts')}>
            Chequing Accounts
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button className="tab-button" onClick={() => handleButtonClick('SavingsAccounts')}>
            Savings Accounts
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button className="tab-button" onClick={() => handleButtonClick('CreditCards')}>
            Credit Cards
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button className="tab-button" onClick={() => handleButtonClick('online_mobile_banking')}>
            Online and Mobile Banking
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button className="tab-button" onClick={() => handleButtonClick('best_banks')}>
            Best Banks
          </button>
        </li>
      </ul>

      {/* Do not render Home component here */}
    </aside>
  );
}

export default Sidebar;