import java.util.Scanner;
import java.lang.Math;
import java.util.Arrays;
import java.util.Collections;
import java.util.stream.Collectors;
import java.util.List;
import java.util.HashSet;
import java.util.Set;
import java.util.ArrayList;
import java.util.function.Function;

/**
 * jsで解けたけど、javaで解けないアルゴリズム
 * テスト内容が公開されたら原因を確認してみる。
 * → Integerなので、==は参照チェックになっていた。
 * 学び：
 * Java は-128 から 127 の範囲の Integer 値をキャッシュします。
 * したがって、2つの整数オブジェクトがこの範囲で同じ値を持つ場合、
 * == コンパレータは同じオブジェクトを参照するため true を返します
 */
class Main {
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            final int N = scanner.nextInt();
            final Integer[] An = Util.getIntArray(N, scanner);
            final Integer[] Bn = Util.getIntArray(N, scanner);
            var count1 = 0;
            var count2 = 0;
            var includeAandB = 0;
            Set<Integer> AnSet = Arrays.stream(An).collect(Collectors.toSet());
            // log(AnSet);
            var debug = true;
            for (var i = 0; i < N; i++) {
                if (debug) {
                    log(An[i], Bn[i]);
                    log(An[i] == Bn[i]);
                    // debug = false;
                }
                if (An[i].equals(Bn[i])) {
                    count1++;
                } else if (AnSet.contains(Bn[i])) {
                    count2++;
                }
            }
            System.out.println(count1);
            System.out.println(count2);
            return;
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
        public static Integer[] getIntArray(int N, Scanner scanner) {
            Function<Integer, Integer[]> get = (argN) -> {
                var arr = new Integer[argN.intValue()];
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
