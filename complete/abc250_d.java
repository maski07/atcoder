
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.lang.Math;
import java.util.ArrayList;
import java.util.List;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextLong();
            // エラストテネスの篩
            var len = (int) Math.pow(10L, Math.log10(N) / 3L) - 1;
            var noPrimes = new boolean[len + 1];
            List<Integer> primes = new ArrayList<>();
            for (var i = 2; i <= len; i++) {
                var noPrime = noPrimes[i];
                if (!noPrime) {
                    primes.add(i);
                    for (var j = 2; j * i <= len; j++) {
                        noPrimes[i * j] = true;
                    }
                }
            }
            var primeCount = primes.size();
            var answer = (primeCount * (primeCount - 1)) / 2;
            log(answer);
        }
    }

    private static int P(int n) {
        return n * P(n - 1);
    }

    private static void log(Object object) {
        System.out.println(object);
    }

    private static void log(Object... object) {
        System.out.println(Arrays.toString(object));
    }

    private static void logDeepArray(Object[] obj) {
        System.out.println(Arrays.deepToString(obj));
    }

    private static int loggedCount = 0;

    private static void timeLog(Object... obj) {
        final int logCount = 0;
        if (loggedCount <= logCount) {
            System.out.println(Arrays.toString(obj));
            loggedCount++;
        }
    }

    public static class Util {
        public static int[] getIntArray(int N, Scanner scanner) {
            Function<Integer, int[]> get = (argN) -> {
                var arr = new int[argN.intValue()];
                for (var i = 0; i < argN.intValue(); i++) {
                    arr[i] = scanner.nextInt();
                }
                return arr;
            };
            return get.apply(N);
        }

        private static int toInt(String str) {
            return Integer.parseInt(str);
        }
    }
}
