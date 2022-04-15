import java.util.Scanner;
import java.lang.Math;
import java.util.Arrays;
import java.util.function.Function;

class Main {
    private static boolean[] dp;
    private static boolean[] ep;
    private static int K;

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            K = scanner.nextInt();
            var An = Util.getArray(N, scanner);
            var Bn = Util.getArray(N, scanner);
            dp = new boolean[N + 1];
            ep = new boolean[N + 1];
            dp[0] = ep[0] = true;

            for (var i = 1; i < N; i++) {
                dp[i] = dp[i - 1] && Math.abs(An[i] - An[i - 1]) <= K
                        || ep[i - 1] && Math.abs(An[i] - Bn[i - 1]) <= K;
                ep[i] = dp[i - 1] && Math.abs(Bn[i] - An[i - 1]) <= K
                        || ep[i - 1] && Math.abs(Bn[i] - Bn[i - 1]) <= K;
                if (!dp[i] && !ep[i]) {
                    log("No");
                    return;
                }
            }
            log("Yes");
        }
    }

    private static void log(Object obj) {
        System.out.println(obj);
    }

    private static void log(Object... obj) {
        System.out.println(Arrays.toString(obj));
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
