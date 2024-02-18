// export function openTab(tabId) {
//   fetch(`/tab/${tabId}`)
//       .then(response => response.json())
//       .then(data => {
//           const content = data.map(bank => `
//               <div class="card">
//                   <img src="${bank.imageUrl}" alt="${bank.name}">
//                   <h3>${bank.bankAccount}</h3>
//                   <p>${bank.transactions}</p>
//                   <a href="${bank.url}" target="_blank">Visit Website</a>
//               </div>
//           `).join('');
//           document.querySelector('.right-pane').innerHTML = content;
//       })
//       .catch(error => console.error('Error loading the tab data:', error));
// }


// script.js
export function openTab(tabId) {
    return fetch(`/tab/${tabId}`)
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        });
  }
  