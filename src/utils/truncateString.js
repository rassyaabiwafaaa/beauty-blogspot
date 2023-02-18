export function truncateString(str) {
  if (str.length > 300) {
    return str.slice(0, 300) + "...";
  } else {
    return str;
  }
}
