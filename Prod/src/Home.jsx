import React from 'react';
import {
  BarChart,
  Bar,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

function Home({ data, selectedTab }) {
  // Helper function to render list items with appropriate styling
  const renderItems = (items) => (
    <div className="card-table">
      {items.map((item, index) => (
        <div key={index} className="card">
          <ul>
            {Object.entries(item).map(([key, value]) => (
              <li key={key}><strong>{key}:</strong> {value}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );

  // Chart data preparation based on the selected tab
  let chartData = [];
  if (Array.isArray(data)) {
    switch (selectedTab) {
      // SavingsAccounts chart data
      case 'SavingsAccounts':
        chartData = data.map(account => ({
          name: account.Title,
          InterestRate: parseFloat(account["Interest Rate"].replace('%', ''))
        }));
        break;
      // ChequingAccounts chart data with zero interest rates
      case 'ChequingAccounts':
        chartData = data.map(account => ({
          name: account["Bank Account / Plan"],
          InterestRate: parseFloat(account["Interest Rate"].replace('%', '')) || 0
        }));
        break;
      // CreditCards chart data
      case 'CreditCards':
        chartData = data.map(card => ({
          name: card["Card Title"],
          InterestRate: parseFloat(card["Interest Rates"].split('/')[0].replace('%', ''))
        }));
        break;
      // OnlineMobileBanking chart data for Ratings and 1-Year GIC Rate
      case 'online_mobile_banking':
        chartData = data.map(bank => ({
          name: bank["Bank Name"],
          Rating: parseFloat(bank.Rating),
          GICRate: parseFloat(bank["1-Year GIC Rate"].replace('%', '')) || 0
        }));
        break;
      default:
        // For other tabs, clear chartData
        chartData = [];
        break;
    }
  }

  // Dynamically render charts based on the selected tab
  const renderChart = () => {
    if (chartData.length === 0) {
      return null;
    }
    return (
      <ResponsiveContainer width="100%" height={400}>
        {selectedTab === 'ChequingAccounts' ? (
          <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#ECF0F1" />
            <YAxis stroke="#ECF0F1" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="InterestRate" stroke="#82ca9d" name="Interest Rate (%)" />
          </LineChart>
        ) : selectedTab === 'online_mobile_banking' ? (
          <LineChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#ECF0F1" />
            <YAxis stroke="#ECF0F1" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Rating" stroke="#82ca9d" name="Rating" />
            <Line type="monotone" dataKey="GICRate" stroke="#ffc658" name="1-Year GIC Rate (%)" />
          </LineChart>
        ) : (
          <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" stroke="#ECF0F1" />
            <YAxis stroke="#ECF0F1" />
            <Tooltip />
            <Legend />
            <Bar dataKey="InterestRate" fill="#82ca9d" name="Interest Rate (%)" />
          </BarChart>
        )}
      </ResponsiveContainer>
    );
  };

  return (
    <div className="main-container">
      <div className="chart-container" style={{ marginBottom: '20px' }}>
        {renderChart()}
      </div>
      {data && data.length > 0 && renderItems(data)}
    </div>
  );
}

export default Home;
