
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var W = scanner.nextInt();
            var An = Util.getIntArray(N, scanner);
            Set<Integer> ans = new HashSet<>();
            for (var i = 0; i < N; i++) {
                var one = An[i];
                if (one <= W) {
                    ans.add(one);
                }
                for (var j = i + 1; j < N; j++) {
                    var two = one + An[j];
                    if (two <= W) {
                        ans.add(two);
                    }
                    for (var k = j + 1; k < N; k++) {
                        var three = two + An[k];
                        if (three <= W) {
                            ans.add(three);
                        }
                    }
                }
            }
            log(ans.size());
        }
    }

    private static void log(Object object) {
        System.out.println(object);
    }

    private static void log(Object... object) {
        System.out.println(Arrays.toString(object));
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
