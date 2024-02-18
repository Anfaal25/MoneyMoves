function openTab(tabId) {
  fetch(`/tab/${tabId}`)
      .then(response => response.json())
      .then(data => {
          const content = data.map(bank => `
              <div class="card">
                  <img src="${bank.imageUrl}" alt="${bank.name}">
                  <h3>${bank.name}</h3>
                  <p>${bank.description}</p>
                  <a href="${bank.url}" target="_blank">Visit Website</a>
              </div>
          `).join('');
          document.querySelector('.right-pane').innerHTML = content;
      })
      .catch(error => console.error('Error loading the tab data:', error));
}
