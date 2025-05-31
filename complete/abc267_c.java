
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.lang.reflect.Array;
import java.util.Arrays;

class Main {

    /** TODO: 後でREの原因を追求する */
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var M = scanner.nextInt();
            var An = new long[N];
            for (var i = 0; i < N; i++) {
                An[i] = scanner.nextLong();
            }
            var memo = new long[N + 1][M + 1];
            var max = Long.MIN_VALUE;
            for (var i = 1; i < N + 1; i++) {
                for (var j = 1; j < M + 1; j++) {
                    memo[i][j] = An[i - 1] * j + memo[i - 1][j - 1];
                    // log(i, j, memo[i][j], An[i - 1] * (j + 1), memo[i - 1][j - 1]);
                }
                if (i >= M) {
                    max = Math.max(max, memo[i][M]);
                }
            }
            log(max);
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
