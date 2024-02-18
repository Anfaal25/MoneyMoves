
// script.js
export function openTabC(tabName) {
  // Assume each tabName corresponds to a specific JSON file

  return fetch(`/tab/${'../Backend/chequing_accounts.json'}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
}

export function openTabS(tabName) {
  return fetch(`/tab/${'../Backend/savings_accounts.json'}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
}

export function openTabCR(tabName) {
  return fetch(`/tab/${'../Backend/credit_cards.json'}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
}

export function openTabO(tabName) {
  return fetch(`/tab/${'../Backend/online_mobile_banking.json'}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
}

export function openTabB(tabName) {
  return fetch(`/tab/${'../Backend/best_banks.json'}`)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    });
}


