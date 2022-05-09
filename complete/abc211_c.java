
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.lang.Math;
import java.util.Comparator;
import java.util.StringJoiner;

class Main {

    /**
     * 動的計画法(DP)
     * 解き直す
     */
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var S = scanner.next();
            var Sarr = S.split("");
            final String target = "chokudai";
            final int mod = 1000000007;
            var dp = new int[Sarr.length + 1][target.length() + 1];
            // 0文字目は空文字としてカウントさせる
            for (var i = 0; i < Sarr.length; i++) {
                dp[i][0] = 1;
            }

            for (var i = 1; i <= Sarr.length; i++) {
                for (var j = 1; j <= target.length(); j++) {
                    var str = target.substring(j - 1, j);
                    if (Sarr[i - 1].equals(str)) {
                        dp[i][j] = (dp[i - 1][j - 1] + dp[i - 1][j]) % mod;
                    } else {
                        dp[i][j] = dp[i - 1][j];
                    }
                    // log(Sarr[i - 1], str, dp[i][j], i, j);
                }
            }
            log(dp[Sarr.length][target.length()]);
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
