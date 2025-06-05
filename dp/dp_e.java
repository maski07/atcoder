
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.lang.Math;
import java.util.Comparator;
import java.util.StringJoiner;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            /** inputの取り出し */
            var N = scanner.nextInt();
            var W = scanner.nextInt();
            final int MaxValue = 100000;
            var wvn = new int[N][2];
            for (var i = 0; i < N; i++) {
                wvn[i][0] = scanner.nextInt();
                wvn[i][1] = scanner.nextInt();
            }
            /** 実装 */
            // i番目の品物を価値がj以下になる最小の重さをdpに入れていく
            // dp[i番目][value]
            var dp = new int[N + 1][MaxValue + 1];
            for (var i = 0; i <= N; i++) {
                for (var j = 0; j <= MaxValue; j++) {
                    dp[i][j] = Integer.MAX_VALUE - W;
                }
            }
            dp[0][0] = 0;
            for (var i = 1; i <= N; i++) {
                var weight = wvn[i - 1][0];
                var value = wvn[i - 1][1];
                for (var j = 0; j <= MaxValue; j++) {
                    if (j >= value) {
                        dp[i][j] = Math.min(dp[i - 1][j], dp[i - 1][j - value] + weight);
                        if (dp[i][j] < Integer.MAX_VALUE - W) {
                            log(
                                    "i:" + i,
                                    "j:" + j,
                                    "dp[i][j]:" + dp[i][j],
                                    "dp[i - 1][j]:" + dp[i - 1][j],
                                    "dp[i - 1][j - value]:" + dp[i - 1][j - value],
                                    "value:" + value,
                                    "weight:" + weight,
                                    Integer.MAX_VALUE - W);
                        }
                    } else {
                        dp[i][j] = dp[i - 1][j];
                    }
                }
            }
            var ans = 100000;
            while (dp[N][ans] > W) {
                ans--;
            }
            log(ans);
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
