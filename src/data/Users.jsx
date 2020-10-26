const currentUsers = [
  { id: "1", login: "Admin", password: "000", admin: true },
  { id: "2", login: "Alex", password: "123", admin: false },
  { id: "3", login: "Mary", password: "123", admin: false },
];

export function login({ login, password }) {
  return currentUsers.find(
    (user) => user.login === login && user.password === password
  );
}

export function requestLogout() {
  console.log("Request logout sent!");
  return { success: true }
}
