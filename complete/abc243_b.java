import java.util.Scanner;
import java.lang.Math;
import java.util.Arrays;
import java.util.Collections;
import java.util.stream.Collectors;
import java.util.List;
import java.util.HashSet;
import java.util.Set;
import java.util.ArrayList;

/**
 * TODO: jsで解けたけど、javaで解けないアルゴリズム
 * テスト内容が公開されたら原因を確認してみる。
 */
class Main {
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            final int N = scanner.nextInt();
            final Integer[] An = new Integer[N];
            final Integer[] Bn = new Integer[N];
            for (var i = 0; i < N; i++) {
                An[i] = scanner.nextInt();
            }
            for (var i = 0; i < N; i++) {
                Bn[i] = scanner.nextInt();
            }
            var count1 = 0;
            var count2 = 0;
            var includeAandB = 0;
            Set<Integer> AnSet = Arrays.stream(An).collect(Collectors.toSet());
            // log(AnSet);
            for (var i = 0; i < N; i++) {
                if (An[i] == Bn[i]) {
                    count1++;
                } else if (AnSet.contains(Bn[i])) {
                    count2++;
                }
            }
            System.out.println(count1);
            System.out.println(count2);
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
        public static int[] getArray(int N, Scanner scanner) {
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
