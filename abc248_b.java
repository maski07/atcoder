
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
import java.lang.Math;

class Main {

    /**
     * todo この計算式でなんでダメなのかが不明
     * テスト内容が公開されたら確認してみる
     */
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var A = scanner.nextInt();
            var B = scanner.nextInt();
            var K = scanner.nextInt();
            log((int) Math.ceil(Math.log(B / A) / Math.log(K)));
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
