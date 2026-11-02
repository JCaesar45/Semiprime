public final class Semiprime {
    private Semiprime() {}

    public static boolean isSemiPrime(long n) {
        if (n < 4) return false;
        int count = 0;
        long num = n;
        for (long i = 2; i * i <= num; i++) {
            while (num % i == 0) {
                num /= i;
                count++;
                if (count > 2) return false;
            }
        }
        if (num > 1) count++;
        return count == 2;
    }

    public static void main(String[] args) {
        long[] yes = {4, 46, 74, 95, 1679};
        long[] no  = {100, 504, 13, 2, 124};
        for (long n : yes) if (!isSemiPrime(n)) throw new AssertionError(n);
        for (long n : no)  if (isSemiPrime(n))  throw new AssertionError(n);
        System.out.println("all tests passed");
    }
}
