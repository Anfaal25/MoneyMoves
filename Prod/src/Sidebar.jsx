import React, { useState } from 'react';
import { openTabB, openTabC, openTabCR, openTabO, openTabS } from '../../Prod/Frontend/script.js';
import Home from './Home.jsx';
import { BsCashStack } from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar, handleTabClick }) {
  const [data, setData] = useState(null);

  const handleButtonClickC = (tabName) => {
    openTabC(tabName)
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

  const handleButtonClickS = (tabName) => {
    openTabS(tabName)
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

  const handleButtonClickCR = (tabName) => {
    openTabCR(tabName)
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

  const handleButtonClickO = (tabName) => {
    openTabO(tabName)
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

  const handleButtonClickB = (tabName) => {
    openTabB(tabName)
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
      </div>

      <ul className='sidebar-list' style={{ listStyleType: 'none' }}>
        <li className='sidebar-list-item'>
          <button className="tab-button" onClick={() => handleButtonClickC('ChequingAccounts')}>
            Chequing Accounts
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button className="tab-button" onClick={() => handleButtonClickS('SavingsAccounts')}>
            Savings Accounts
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button className="tab-button" onClick={() => handleButtonClickCR('CreditCards')}>
            Credit Cards
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button className="tab-button" onClick={() => handleButtonClickO('online_mobile_banking')}>
            Online and Mobile Banking
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button className="tab-button" onClick={() => handleButtonClickB('best_banks')}>
            Best Banks
          </button>
        </li>
      </ul>

    </aside>
  );
}

export default Sidebar;

