
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.lang.Math;
import java.util.Map;
import java.util.HashMap;

/** bit全探索 */
/**
 * Again
 */
class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            /** inputs */
            var N = scanner.nextInt();
            var K = scanner.nextInt();
            var Sn = new String[26 + 1];
            for (var i = 0; i < N; i++) {
                Sn[i] = scanner.next();
            }
            /** 解答 */
            var answer = 0;
            // bit全探索
            // 例: 1 << N -> 1 << 4 -> 0b10000 -> 2^4 -> 16
            // bitの全パターンを回す。
            /**
             * 001 → S2=0. S1=0, S0=1 → S0だけのパターン
             * 010
             * 011
             * 100
             * 101
             * 110
             * 111
             * → S2:S1:S0
             */
            for (var bit = 0; bit < (1 << N); bit++) {
                Map<String, Integer> cnt = new HashMap<>();
                // bitの各桁を取得するためのfor文
                /**
                 * N=5 の場合 → N = 101 → 3桁なので3回forを回す。
                 */
                for (var i = 0; i < N; i++) {
                    // フラグがON(bitが1)ならcntに突っ込む
                    /**
                     * 101 の1が立っていたらcntに突っ込む
                     */
                    if (((bit >> i) & 1) > 0) {
                        var SnArr = Sn[i].split("");
                        for (int x = 0; x < SnArr.length; x++) {
                            var key = SnArr[x];
                            if (cnt.containsKey(key)) {
                                cnt.put(key, cnt.get(key) + 1);
                            } else {
                                cnt.put(key, 1);
                            }
                        }
                    }
                }
                var now = 0;
                for (var value : cnt.values()) {
                    if (value == K) {
                        now++;
                    }
                }
                answer = Math.max(answer, now);
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
