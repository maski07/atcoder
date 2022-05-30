
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
/** よく使うやつを定義 */
import java.lang.Math;
import java.util.Set;
import java.util.HashSet;

class Main {

    static boolean[][] gt;
    static boolean[][] ga;

    /**
     * グラフの同型判定
     * 解き直す
     */
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var M = scanner.nextInt();
            var gt = new boolean[N + 1][N + 1];
            for (var i = 0; i < M; i++) {
                var A = scanner.nextInt();
                var B = scanner.nextInt();
                A--;
                B--;
                gt[A][B] = gt[B][A] = true;
            }
            var ga = new boolean[N + 1][N + 1];
            for (var i = 0; i < M; i++) {
                var A = scanner.nextInt();
                var B = scanner.nextInt();
                A--;
                B--;
                ga[A][B] = ga[B][A] = true;
            }
            var isSame = true;
            a: for (var i = 0; i < N; i++) { // 入れ替え対象数値
                for (var x = i + 1; x < N; x++) { // 入れ替え対象数値
                    isSame = true;
                    b: for (var j = 0; j < N; j++) {
                        for (var k = 0; k < N; k++) {
                            var one = j;
                            var two = k;
                            if (j == i) {
                                one = x;
                            } else if (j == x) {
                                one = i;
                            }
                            if (k == i) {
                                two = x;
                            } else if (k == x) {
                                two = i;
                            }
                            if (ga[one][two] != gt[j][k]) {
                                isSame = false;
                                break b;
                            }
                        }
                    }
                    if (isSame) {
                        break a;
                    }
                }
            }
            log(isSame ? "Yes" : "No");
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
