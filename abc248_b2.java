
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;
/** サンプルコード */
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.function.Function;
/** よく使うやつを定義 */
import java.util.Arrays;
import java.lang.Math;
import java.util.Comparator;
import java.util.StringJoiner;
import java.util.Comparator;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var A = scanner.nextLong();
            var B = scanner.nextLong();
            var K = scanner.nextLong();
            var now = A;
            var count = 0;
            while (true) {
                if (now >= B) {
                    log(count);
                    return;
                } else {
                    count++;
                    now *= K;
                }
            }
        }
    }

    private static void solve() {
        log("Yes");
        log("No");
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
