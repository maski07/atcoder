
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.util.ArrayList;
import java.util.List;
import java.lang.Math;
import java.math.BigInteger;
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var K = scanner.nextInt();
            var sum = BigInteger.ONE;
            for (int i = 0; i < N; i++) {
                var Ai = scanner.nextBigInteger();
                sum = sum.multiply(Ai);
                if (sum.toString().length() > K) {
                    sum = BigInteger.ONE;
                }
            }
            log(sum);
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
