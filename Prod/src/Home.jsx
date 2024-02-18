
import React from 'react';

function Home({ data }) {
  if (!data || Object.keys(data).length === 0) {
    return (
      <div>
        <h2>No data available</h2>
      </div>
    );
  }

  return (
    <div className="main-container">
      <div className="card-table">
        {Object.entries(data).map(([category, items]) => (
          <div key={category} className="card">
            <h3>{category}</h3>
            {Array.isArray(items) ? renderItems(items) : renderProperties(items)}
          </div>
        ))}
      </div>
    </div>
  );
}

function renderItems(items) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>
          {Object.entries(item).map(([key, value]) => (
            <div key={key}>
              <strong>{key}:</strong> {value}
            </div>
          ))}
        </li>
      ))}
    </ul>
  );
}

function renderProperties(properties) {
  return (
    <ul>
      {Object.entries(properties).map(([key, value]) => (
        <li key={key}>
          <strong>{key}:</strong> {value}
        </li>
      ))}
    </ul>
  );
}

export default Home;


