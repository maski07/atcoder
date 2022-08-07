
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.util.ArrayList;
import java.util.List;
import java.lang.Math;
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var X = scanner.nextLong();
            var A = scanner.nextLong();
            var D = scanner.nextLong();
            var N = scanner.nextLong();
            var ans = 0L;
            if (D == 0L) {
                log(D);
                return;
            }
            if (D > 0) {
                var plus = ((X + A) / D <= N) ? (X + A) % D : X - A;
                var minus = ((X - A) / D <= N) ? (X - A) % D : X - A;
                ans = Math.min(plus, minus);
            } else {
                var plus = ((X + A) / D >= N) ? (X + A) % D : X - A;
                var minus = ((X - A) / D >= N) ? (X - A) % D : X - A;
                ans = Math.max(plus, minus);
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
}
