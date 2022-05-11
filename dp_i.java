
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
/** よく使うやつを定義 */
import java.lang.Math;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var pn = new double[N];
            for (var i = 0; i < N; i++) {
                pn[i] = scanner.nextDouble();
            }
            var dp = new double[N][N];
            for (var i = 0; i < N; i++) {
                for (var j = 0; j < i; j++) {
                    var p = pn[i];
                    dp[i][j] = dp[i - 1][i - 1] * pn;
                }
            }
        }
        log(answer);
    }

    }

    private static int combination(int n, int r) {
        return permination(n, r) / permination(r, r);
    }

    private static int permination(int n, int r) {
        if (n == 0 || r == 0) {
            return 1;
        }
        return n * permination(n - 1, r - 1);
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

    public static class AtCoder {
        public static List<Integer> getPrime(int N) {
            var noPrimes = new boolean[N + 1];
            List<Integer> primes = new ArrayList<>();
            for (var i = 2; i <= N; i++) {
                var noPrime = noPrimes[i];
                if (!noPrime) {
                    primes.add(i);
                    for (var j = 2; j * i <= N; j++) {
                        noPrimes[i * j] = true;
                    }
                }
            }
            return primes;
        }
    }
}
