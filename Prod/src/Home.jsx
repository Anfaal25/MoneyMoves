import React from 'react';

function Home({ data }) {
  const chequingAccounts = data && data.ChequingAccounts;

  if (!chequingAccounts || Object.keys(chequingAccounts).length === 0) {
    return (
      <div>
        <h2>No data available</h2>
      </div>
    );
  }

  return (
    <div>
      <h2>Displaying Data:</h2>
      <div className="main-cards">
        {Object.entries(chequingAccounts).map(([key, value]) => (
          <div key={key} className="card">
            <h3></h3>
            <ul>
              {Object.entries(value).map(([property, propertyValue]) => (
                <li key={property} class="card-inner">
                  <strong>{property}</strong>: {propertyValue}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
//   return (
//     <main className='main-container'>
//         <div className='main-title'>
//             <h3>DASHBOARD</h3>
//         </div>

//         <div className='main-cards'>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>PRODUCTS</h3>
//                     <BsFillArchiveFill className='card_icon'/>
//                 </div>
//                 <h1>300</h1>
//             </div>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>CATEGORIES</h3>
//                     <BsFillGrid3X3GapFill className='card_icon'/>
//                 </div>
//                 <h1>12</h1>
//             </div>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>CUSTOMERS</h3>
//                     <BsPeopleFill className='card_icon'/>
//                 </div>
//                 <h1>33</h1>
//             </div>
//             <div className='card'>
//                 <div className='card-inner'>
//                     <h3>ALERTS</h3>
//                     <BsFillBellFill className='card_icon'/>
//                 </div>
//                 <h1>42</h1>
//             </div>
//         </div>

//         <div className='charts'>
//             <ResponsiveContainer width="100%" height="100%">
//             <BarChart
//             width={500}
//             height={300}
//             data={data}
//             margin={{
//                 top: 5,
//                 right: 30,
//                 left: 20,
//                 bottom: 5,
//             }}
//             >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Bar dataKey="pv" fill="#8884d8" />
//                 <Bar dataKey="uv" fill="#82ca9d" />
//                 </BarChart>
//             </ResponsiveContainer>

//             <ResponsiveContainer width="100%" height="100%">
//                 <LineChart
//                 width={500}
//                 height={300}
//                 data={data}
//                 margin={{
//                     top: 5,
//                     right: 30,
//                     left: 20,
//                     bottom: 5,
//                 }}
//                 >
//                 <CartesianGrid strokeDasharray="3 3" />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Legend />
//                 <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
//                 <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
//                 </LineChart>
//             </ResponsiveContainer>

//         </div>
//     </main>
//   )