
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
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var A = scanner.nextInt();
            var B = scanner.nextInt();
            var C = scanner.nextInt();
            var X = scanner.nextInt();
            var Y = scanner.nextInt();
            var price = A * X + B * Y;
            var maxXY = Math.max(X, Y);
            var maxCcount = Math.ceil(Math.max(X, Y));
            for (var C_num = 0; C_num <= maxCcount; C_num++) {
                var A_num = Math.max(X - C_num, 0);
                var B_num = Math.max(Y - C_num, 0);
                price = Math.min(price,
                        A * A_num + B * B_num + C * C_num * 2);
            }
            log(price);
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

/**
 * よく使うコードリスト
 */
public class SampleCode {
    private static void Sample() {
        /**
         * ArrayList
         * https://docs.oracle.com/javase/jp/8/docs/api/java/util/ArrayList.html
         */
        List<Integer> arrayList = new ArrayList<Integer>();
        arrayList.indexOf(0); // indexを返却
        arrayList.sort(Comparator.naturalOrder()); // ソート
        /**
         * 配列 https://docs.oracle.com/javase/jp/8/docs/api/java/sql/Array.html
         */
    }
}