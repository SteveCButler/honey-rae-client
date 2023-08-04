
const _apiUrl = "/employees";

export const getEmployees = () => {
  return fetch(_apiUrl, { mode: 'no-cors'}).then((r) => r.json());
};

//export a function here that gets a customer by id
export const getEmployeeById = (id) => {
  console.warn("ID: ", id);
  
  return fetch(`${_apiUrl}/${id}`, { mode: 'no-cors'}).then((r) => r.json());
};
