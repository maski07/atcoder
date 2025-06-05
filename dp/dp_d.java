
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.lang.Math;

class Main {

    /**
     * 解き直す
     * ナップサックDP
     * https://atcoder.jp/contests/dp/tasks/dp_d
     */
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            /** inputの取り出し */
            var N = scanner.nextInt();
            var W = scanner.nextInt();
            var wvn = new int[N][2];
            for (var i = 0; i < N; i++) {
                wvn[i][0] = scanner.nextInt();
                wvn[i][1] = scanner.nextInt();
            }
            /** 実装 */
            var dp = new long[N + 1][W + 1];
            for (var i = 0; i <= N; i++) {
                dp[i][0] = 0L;
            }
            for (var i = 1; i <= N; i++) {
                var weight = wvn[i - 1][0];
                var value = wvn[i - 1][1];
                for (var j = 0; j <= W; j++) {
                    if (j >= weight) {
                        dp[i][j] = Math.max(dp[i - 1][j - weight] + value, dp[i - 1][j]);
                    } else {
                        dp[i][j] = dp[i - 1][j];
                    }
                }
            }
            log(dp[N][W]);
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
