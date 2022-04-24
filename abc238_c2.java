
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;
/** サンプルコード */
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/** よく使うやつを定義 */
import java.lang.Math;
import java.util.Comparator;
import java.util.StringJoiner;
import java.util.Comparator;

class Main {
    private static long mod = 998244353L;
    private static long inv2 = 499122177L;

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextLong();
            var res = 0L;
            var p10 = 10L;
            // 解読する。
            for (int dg = 1; dg <= 18; dg++) {
                var l = p10 / 10L;
                var r = Math.min(N, p10 - 1);
                if (l <= r) {
                    res += triangular_number(r - l + 1);
                    res %= mod;
                }
                p10 *= 10;
            }
            log(res);
        }
    }

    private static long triangular_number(long x) {
        x %= mod;
        var res = x;
        res *= (x + 1);
        res %= mod;
        res /= 2;
        res %= mod;
        return res;
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
