
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

    private static ArrayList<long[]> dp;

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var Q = scanner.nextInt();
            dp = new ArrayList<long[]>();
            for (var i = 0; i < Q; i++) {
                var num = scanner.nextInt();
                if (num == 1) {
                    var query = Util.getIntArray(2, scanner);
                    // 筒詰め
                    var x = query[0];
                    var c = query[1];
                    dp.add(new long[] { x, c });
                } else {
                    var query = Util.getIntArray(1, scanner);
                    // 筒とり&出力
                    final long c = query[0];
                    var j = c;
                    var total = 0L;
                    // log("c", c);
                    while (j > 0) {
                        var arr = dp.get(0);
                        var x_dp = arr[0];
                        var c_dp = arr[1];
                        if (c_dp <= j) {
                            total += x_dp * c_dp;
                            j -= c_dp;
                            dp.remove(0);
                            // log("calculated:", x_dp, c_dp, x_dp * c_dp);
                        } else {
                            total += x_dp * j;
                            arr[1] -= j;
                            break;
                        }
                        // if (total < 0) {
                        // log("break");
                        // return;
                        // }
                        // log("arr", Arrays.toString(arr));
                    }
                    log(total);
                }
            }
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
        public static long[] getIntArray(int N, Scanner scanner) {
            Function<Integer, long[]> get = (argN) -> {
                var arr = new long[argN.intValue()];
                for (var i = 0; i < argN.intValue(); i++) {
                    arr[i] = scanner.nextLong();
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
