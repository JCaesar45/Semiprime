export function isSemiPrime(n: number): boolean {
  if (!Number.isInteger(n) || n < 4) return false;
  let count = 0;
  let num = n;
  for (let i = 2; i * i <= num; i++) {
    while (num % i === 0) {
      num /= i;
      count++;
      if (count > 2) return false;
    }
  }
  if (num > 1) count++;
  return count === 2;
}
