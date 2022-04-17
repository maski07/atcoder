
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.util.Arrays;
import java.lang.Math;
import java.util.Comparator;
import java.util.StringJoiner;
import java.util.Comparator;

class Main {

    private static final long mod = 998244353;

    private static int M = 0;
    private static int K = 0;
    private static long[][] dp;

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            M = scanner.nextInt();
            K = scanner.nextInt();
            dp = new long[N + 1][K + 1];
            for (var i = 0; i < N; i++) {
                Arrays.fill(dp[i], -1L);
            }
            var answer = dfs(N, 0);
            log(answer);
        }
    }

    private static long dfs(int remaining, int now) {
        if (remaining == 0) {
            return 1;
        }
        var count = 0L;
        for (var i = 1; i <= M && now + i <= K; i++) {
            if (dp[remaining - 1][now + i] != -1L) {
                count += dp[remaining - 1][now + i];
            } else {
                var plused = dfs(remaining - 1, now + i) % mod;
                count += plused;
                dp[remaining - 1][now + i] = plused;
            }
        }
        return count;
    }

    private static void log(Object object) {
        System.out.println(object);
    }

    private static void log(Object... object) {
        System.out.println(Arrays.toString(object));
    }

    private static int loggedCount = 0;

    private static void timeLog(Object... obj) {
        final int logCount = 0;
        if (loggedCount <= logCount) {
            System.out.println(Arrays.toString(obj));
            loggedCount++;
        }
    }

    private static void logDeepArray(Object[] obj) {
        System.out.println(Arrays.deepToString(obj));
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