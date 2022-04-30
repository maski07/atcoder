
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
                var hn = Util.getIntArray(N, scanner);
                var dp = new int[N + 1];
                dp[0] = 0;
                for (var i = 1; i < N; i++) {
                    var now = hn[i];
                    var preOne = hn[i - 1];
                    var preTwo = hn[Math.max(i - 2, 0)];
                    // 1つ後ろと2つ後ろから来たパターンで小さい方を採用する
                    dp[i] = Math.min(Math.abs(now - preOne) + dp[i - 1], Math.abs(now - preTwo) + dp[Math.max(i - 2, 0)]);
                    // log(dp[i],
                    // "i", i,
                    // "now", now,
                    // "pre1", preOne, dp[i - 1],
                    // "pre2", preTwo, dp[Math.max(i - 2, 0)],
                    // "abs1", Math.abs(now - preOne) + dp[i - 1],
                    // "abs2", Math.abs(now - preTwo) + dp[Math.max(i - 2, 0)]);
                }
                log(dp[N - 1]);
            }
        }

        private static void solve() {
            log("Yes");
            log("No");
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

        private static int loggedCount = 0;

        private static void timeLog(Object... obj) {
            final int logCount = 0;
            if (loggedCount <= logCount) {
                System.out.println(Arrays.toString(obj));
                loggedCount++;
            }
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
