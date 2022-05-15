
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var An = new long[N];
            for (var i = 0; i < N; i++) {
                An[i] = scanner.nextLong();
            }
            Set<Integer> set = new HashSet<>();
            for (var i = N - 1; i >= 1; i--) {
                if (An[i] < An[i - 1]) {
                    set.add(i);
                } else {
                    set.add(i - 1);
                }
            }
            if (An[0] < An[N - 1]) {
                set.add(0);
            } else {
                set.add(N - 1);
            }
            var answer = 0;
            for (var index : set) {
                answer += An[index];
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
