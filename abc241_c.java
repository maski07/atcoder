
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;

class Main {

    public static final String Black = "#";

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var arr = new String[N][N];

            for (var i = 0; i < N; i++) {
                var count = 0;
                arr[i] = scanner.next().split("");
            }
            for (var i = 0; i < N; i++) {
                for (var j = 0; j < N; j++) {
                    // 縦の確認
                    if (i + 5 < N) {
                        var blackCount = 0;
                        for (var k = 0; k < 6; k++) {
                            if (Black.equals(arr[i + k][j])) {
                                blackCount++;
                            }
                            if (blackCount >= 4) {
                                log("Yes");
                                return;
                            }
                        }
                    }
                    // 横の確認
                    if (j + 5 < N) {
                        var blackCount = 0;
                        for (var k = 0; k < 6; k++) {
                            if (Black.equals(arr[i][j + k])) {
                                blackCount++;
                            }
                            if (blackCount >= 4) {
                                log("Yes");
                                return;
                            }
                        }
                    }

                    // 斜め右の確認
                    if (i + 5 < N && j + 5 < N) {
                        var blackCount = 0;
                        for (var k = 0; k < 6; k++) {
                            if (Black.equals(arr[i + k][j + k])) {
                                blackCount++;
                            }
                            if (blackCount >= 4) {
                                log("Yes");
                                return;
                            }
                        }
                    }

                    // 斜め左の確認
                    if (i + 5 < N && j - 5 >= 0) {
                        var blackCount = 0;
                        for (var k = 0; k < 6; k++) {
                            if (Black.equals(arr[i + k][j - k])) {
                                blackCount++;
                            }
                            if (blackCount >= 4) {
                                log("Yes");
                                return;
                            }
                        }
                    }
                }
            }
            log("No");
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
