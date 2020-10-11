export function Login (token: string) {
  localStorage.setItem("token", token)
}

export function Logout () {
  localStorage.removeItem("token")
}

export function getToken () {
  return localStorage.getItem("token")
}

export function isAuth () {
  const token = localStorage.getItem("token")
  if (token) 
    return true 
  else if (token === null)
    return false
}