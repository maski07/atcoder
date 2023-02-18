
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;

class Main {

    /**
     * TODO: 解き直す:9/4
     * ポイント：数式を編み出す。
     * S1とS2の差分は何になるのかを分解して考える
     */
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var M = scanner.nextInt();
            var An = new long[N];
            for (var i = 0; i < N; i++) {
                An[i] = scanner.nextLong();
            }
            var S = 0L;
            var T = 0L;
            for (var i = 0; i < M; i++) {
                S += An[i] * (i + 1);
                T += An[i];
            }
            var max = S;
            // log(S, T, max);
            for (var i = M; i < N; i++) {
                S = S - T + M * An[i];
                T = T + An[i] - An[i - M];
                max = Math.max(max, S);
                // log(S, T, max);
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
