import React from 'react';
import {
  BsCart3, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill, BsCashStack
} from 'react-icons/bs';

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  const handleButtonClick = (tabName) => {
    // Add logic here for handling button click with the tabName
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
          <button className="tab-button" onClick={() => handleButtonClick('CreditCards')}>
            Credit Cards
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button className="tab-button" onClick={() => handleButtonClick('personal_loans')}>
            Personal Loans
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button className="tab-button" onClick={() => handleButtonClick('mortgages')}>
            Mortgages
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button className="tab-button" onClick={() => handleButtonClick('investment_services')}>
            Investment Services
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button className="tab-button" onClick={() => handleButtonClick('financial_planning')}>
            Financial Planning
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button className="tab-button" onClick={() => handleButtonClick('insurance_products')}>
            Insurance Products
          </button>
        </li>
        <li className='sidebar-list-item'>
          <button className="tab-button" onClick={() => handleButtonClick('online_mobile_banking')}>
            Online and Mobile Banking
          </button>
        </li>
      </ul>
    </aside>
  );
}

export default Sidebar;