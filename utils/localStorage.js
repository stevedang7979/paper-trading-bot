export function initLS(item, value, setState, handler) {
  let prevItem = localStorage.getItem(item);
  if (prevItem !== null) {
    if (setState) setState(prevItem);
    if (handler) handler(prevItem);
  } else {
    localStorage.setItem(item, value);
    if (handler) handler(value);
  }
}

export function setLS(item, value, setState, handler) {
  if (handler) handler(value);
  if (setState) setState(value);
  localStorage.setItem(item, value);
}
