
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.lang.Math;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var K = scanner.nextInt();
            var hn = Util.getIntArray(N, scanner);
            var dp = new int[N + 1];
            Arrays.fill(dp, Integer.MAX_VALUE);
            dp[0] = 0;
            for (var i = 1; i < N; i++) {
                // K個後ろのパターンで小さい方を採用する
                for (var j = 1; j <= K; j++) {
                    var preIndex = Math.max(i - j, 0);
                    dp[i] = Math.min(dp[i], Math.abs(hn[i] - hn[preIndex]) + dp[preIndex]);
                }
            }
            log(dp[N - 1]);
        }
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
