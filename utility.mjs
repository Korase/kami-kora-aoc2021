export function windows(input, size) {
  const arr = [];

  if(size > input.length)
    return input;

  for(let i = 0; i <= input.length - size; i++) {
    arr.push(input.slice(i, i + size));
  }

  return arr;
}