
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
/** よく使うやつを定義 */
import java.lang.Math;
import java.util.Comparator;
import java.util.StringJoiner;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var An = new int[N];
            Map<Integer, List<Integer>> map = new HashMap<>();

            for (var i = 0; i < N; i++) {
                An[i] = scanner.nextInt();
            }

            for (var i = 0; i < N; i++) {
                var permulative = map.getOrDefault(An[i], new ArrayList<>());
                places.add(i);
                map.put(An[i], places);
            }

            var Q = scanner.nextInt();
            for (var i = 0; i < Q; i++) {
                var L = scanner.nextInt();
                var R = scanner.nextInt();
                var X = scanner.nextInt();

            }
            solve();
        }
    }

    private static void solve() {
        log("Yes");
        log("No");
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
