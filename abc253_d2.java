
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
/** よく使うやつを定義 */
import java.lang.Math;
import java.math.BigDecimal;
import java.util.Set;
import java.util.HashSet;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextLong();
            var A = scanner.nextLong();
            var B = scanner.nextLong();
            var bigN = new BigDecimal(N);
            var bigA = new BigDecimal(A);
            var bigB = new BigDecimal(B);
            var bigOne = new BigDecimal(1);
            var bigTwo = new BigDecimal(2);
            var total = bigN.multiply(bigN.add(bigOne)).divide(bigTwo);
            var Acount = bigN.divide(bigA, BigDecimal.ROUND_CEILING);
            var Bcount = bigN.divide(bigB, BigDecimal.ROUND_CEILING);
            var ABcount = bigN.divide(bigA.multiply(bigB), BigDecimal.ROUND_CEILING);
            var Atotal = Acount.multiply(Acount.add(bigOne)).divide(bigTwo, BigDecimal.ROUND_CEILING).multiply(bigA);
            var Btotal = Bcount.multiply(Bcount.add(bigOne)).divide(bigTwo, BigDecimal.ROUND_CEILING).multiply(bigB);
            var ABtotal = ABcount.multiply(ABcount.add(bigOne)).divide(bigTwo, BigDecimal.ROUND_CEILING).multiply(bigA)
                    .multiply(bigB);
            var ans = total.subtract(Atotal).subtract(Btotal).add(ABtotal);
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
