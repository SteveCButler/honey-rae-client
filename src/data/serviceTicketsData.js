
const _apiUrl = "/servicetickets";

export const getServiceTickets = () => {
  return fetch(_apiUrl, { mode: 'no-cors'}).then((r) => r.json());
};

//export a function here that gets a ticket by id
export const getServiceTicketsById = (id) => {
  
  return fetch(`${_apiUrl}/${id}`, { mode: 'no-cors'}).then((r) => r.json());
};

export const createServiceTicket = (payload) => {
fetch(`${_apiUrl}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  }).then(r => r.json());
};


//export a function here that DELETE a ticket by id
export const deleteTicketById = (id) => {
  
  return fetch(`${_apiUrl}/${id}`, {
    mode: 'no-cors',
    method: 'DELETE'
  }).then((r) => r.json());
};
