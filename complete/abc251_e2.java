
import java.util.Scanner;
import java.util.Arrays;
import java.lang.Math;

class Main {
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var An = new long[N];
            for (var i = 0; i < N; i++) {
                An[i] = scanner.nextLong();
            }
            var answer = Long.MAX_VALUE;
            // 最初を使うか使わないか
            for (var t = 0; t <= 1; t++) {
                var dp = new long[N + 1][2];
                dp[0][0] = Long.MAX_VALUE;
                dp[0][1] = An[0] * t;
                for (var i = 1; i < N; i++) {
                    dp[i][0] = dp[i - 1][1];
                    dp[i][1] = Math.min(dp[i - 1][0], dp[i - 1][1]) + An[i];
                }
                if (t == 0) {
                    answer = Math.min(answer, dp[N - 1][1]);
                } else if (t == 1) {
                    answer = Math.min(answer, Math.min(dp[N - 1][0], dp[N - 1][1]));
                }
            }
            log(answer);
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
}
