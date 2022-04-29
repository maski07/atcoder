
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

    private static int N;
    private static int A;
    private static int B;
    private static int P;
    private static int Q;
    private static int R;
    private static int S;
    private static String Black = "#";
    private static String White = ".";

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            N = scanner.nextInt();
            A = scanner.nextInt();
            B = scanner.nextInt();
            P = scanner.nextInt();
            Q = scanner.nextInt();
            R = scanner.nextInt();
            S = scanner.nextInt();
            for (var i = P; i <= Q; i++) {
                for (var j = R; j <= S; j++) {
                    // isBlack(i, j);
                    if (isBlack(i, j)) {
                        System.out.print(Black);
                    } else {
                        System.out.print(White);
                    }
                }
                System.out.println();
            }
        }
    }

    private static boolean isBlack2(int x, int y) {

        return false;
    }

    private static boolean isBlack(int x, int y) {
        // if (!(x == 1 && y == 4))
        // return false;
        var min_one = Math.max(1 - A, 1 - B);
        var max_one = Math.min(N - A, N - B);
        var min_two = Math.max(1 - A, B - N);
        var max_two = Math.min(N - A, B - 1);
        // log("N,A,B", N, A, B);
        // log("one", min_one, max_one, "two", min_two, max_two);
        var x_is_black_one = min_one + A <= x && x <= max_one + A;
        var y_is_black_one = min_one + B <= y && y <= max_one + B;
        var is_black_one = x_is_black_one && y_is_black_one;
        log("");
        log("x,y", x, y);
        log("one", x_is_black_one, y_is_black_one);
        var x_is_black_two = min_two + A <= x && x <= max_two + A;
        var y_is_black_two = B - min_two >= y && y >= B - max_two;
        var is_black_two = x_is_black_two && y_is_black_two;
        log("two", x_is_black_two, y_is_black_two);

        return is_black_one || is_black_two;
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