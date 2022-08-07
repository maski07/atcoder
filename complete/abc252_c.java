
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
import java.util.HashMap;
import java.util.Map;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var arrays = new int[10][10];
            for (var i = 0; i < N; i++) {
                var nums = scanner.next().split("");
                for (var j = 0; j < 10; j++) {
                    var num = Integer.parseInt(nums[j]);
                    arrays[num][j]++;
                }
            }
            // log(Arrays.deepToString(arrays));
            var answer = Integer.MAX_VALUE;
            for (var i = 0; i < 10; i++) {
                var mx = 0;
                for (var j = 0; j < 10; j++) {
                    var num = arrays[i][j];
                    mx = Math.max(mx, 10 * (num - 1) + j);
                }
                // log("mx:", mx);
                answer = Math.min(answer, mx);
            }
            log(answer);
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
