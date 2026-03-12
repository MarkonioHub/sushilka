export function getLocalStorageItem(key: string) {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) || "[]") : false
}
