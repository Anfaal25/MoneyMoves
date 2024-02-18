import React from 'react';
import {openTab} from '../../Prod/Frontend/script.js';
import {
  BsCart3, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsCashStack
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const handleButtonClick = (tabName) => {
    openTab(tabName);
    console.log(`Button clicked for tab: ${tabName}`);
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
    </aside>
  );
}

export default Sidebar;
