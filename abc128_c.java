
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            /** input */
            var N = scanner.nextInt();
            var M = scanner.nextInt();
            var sm = new int[M][];
            for (var i = 0; i < M; i++) {
                var k = scanner.nextInt();
                sm[i] = Util.getIntArray(k, scanner);
            }
            var pm = Util.getIntArray(M, scanner);
            /** 解答 */
            var answer = 0;
            // スイッチN個が光ってるパターン
            for (var bit = 0; bit < 1 << N; bit++) {
                var ok = 0;
                // 電球Mが光ってるかどうか
                for (var i = 0; i < M; i++) {
                    var countSwitchOn = 0;
                    // k[i]列をループ
                    for (var j = 0; j < sm[i].length; j++) {
                        // log(Integer.toBinaryString(bit), "j", j, "sm[i][j]", sm[i][j],
                        // countSwitchOn);
                        if ((bit & (1 << sm[i][j] - 1)) > 0)
                            countSwitchOn++;
                    }
                    if (countSwitchOn % 2 == pm[i]) {
                        ok++;
                    }
                }
                // log("---------");
                // 全て点灯していたら
                if (ok == M) {
                    answer++;
                }
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
