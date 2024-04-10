function getUser() {
  const user = sessionStorage.getItem("user");
  if (user === undefined || !user) {
    return null;
  } else {
    return JSON.parse(user);
  }
}

function getToken() {
  return sessionStorage.getItem("token");
}

function setUserSession(user, token) {
  sessionStorage.setItem("user", JSON.stringify(user));
  sessionStorage.setItem("token", token);
}

function resetUserSession() {
  sessionStorage.removeItem("user");
  sessionStorage.removeItem("token");
}

export { getUser, getToken, setUserSession, resetUserSession };
