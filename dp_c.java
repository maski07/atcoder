
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.lang.Math;
import java.util.Collections;
import java.util.List;
import java.util.stream.IntStream;
import java.util.OptionalInt;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var abcn = new int[N][3];
            for (var i = 0; i < N; i++) {
                abcn[i] = Util.getIntArray(3, scanner);
            }
            var dp = new int[3];
            dp[0] = abcn[0][0];
            dp[1] = abcn[0][1];
            dp[2] = abcn[0][2];
            for (var i = 1; i < N; i++) {
                var a = dp[0];
                var b = dp[1];
                var c = dp[2];
                dp[0] = Math.max(b, c) + abcn[i][0];
                dp[1] = Math.max(c, a) + abcn[i][1];
                dp[2] = Math.max(a, b) + abcn[i][2];
                // log(Arrays.toString(dp));
            }
            log(Arrays.stream(dp).max().getAsInt());
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
