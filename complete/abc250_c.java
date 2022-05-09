
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.lang.Math;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var Q = scanner.nextInt();
            var xq = Util.getIntArray(Q, scanner);
            var balls = new int[N + 1];
            for (var i = 1; i <= N; i++) {
                balls[i] = i;
            }
            var ballsIndex = balls.clone(); // [value] = index
            for (var x : xq) {

                var place = ballsIndex[x];
                var changedIndex = place == N ? place - 1 : place + 1;

                var tmp = balls[changedIndex];
                balls[changedIndex] = balls[place];
                balls[place] = tmp;
                ballsIndex[x] = changedIndex;
                ballsIndex[tmp] = place;

                // log(place, Arrays.toString(balls), changedIndex, tmp);
            }
            for (var i = 1; i <= N; i++) {
                System.out.print(balls[i]);
                if (i != N) {
                    System.out.print(" ");
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
