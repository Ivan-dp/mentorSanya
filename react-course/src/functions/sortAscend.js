export function sortAscend(a, b) {
  if (a > b) {
    return 1;
  } else if (b > a) {
    return -1;
  }
  return 0;
}
