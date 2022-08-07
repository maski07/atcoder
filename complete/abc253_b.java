
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
            var H = scanner.nextInt();
            var W = scanner.nextInt();
            var plase = new int[2][2];
            var x = 0;
            for (var i = 0; i < H; i++) {
                var array = scanner.next().toCharArray();
                for (var j = 0; j < W; j++) {
                    if (array[j] == 'o') {
                        plase[x][0] = i;
                        plase[x][1] = j;
                        x++;
                    }
                }
            }
            // log(Arrays.deepToString(plase));
            var answer = Math.abs(plase[1][0] - plase[0][0]) + Math.abs(plase[1][1] - plase[0][1]);
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
