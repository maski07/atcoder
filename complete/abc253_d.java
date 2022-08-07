
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

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextLong();
            var A = scanner.nextLong();
            var B = scanner.nextLong();
            var lcm = lcm(A, B);
            var total = f(N);
            log(lcm(4, 8));
            var ans = total - A * f(N / A) - B * f(N / B) + lcm * f(N / lcm);
            log(ans);
        }
    }

    public static long f(long N) {
        return N * (N + 1) / 2;
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

    /**
     * 最大公約数
     */
    private static long gcd(long a, long b) {
        long temp;
        long c = a;
        c *= b;
        while ((temp = a % b) != 0) {
            a = b;
            b = temp;
        }
        return (long) b;
    }

    /**
     * 最小公倍数
     */
    private static long lcm(long a, long b) {
        return (long) gcd(a, b) / (a * b);
    }
}
