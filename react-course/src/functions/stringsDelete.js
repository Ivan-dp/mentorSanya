export function stringsDelete(arr) {
  return arr.map((obj) => obj.value).filter((item) => typeof item === 'number');
}
