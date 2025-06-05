
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.lang.Math;
import java.util.Comparator;
import java.util.StringJoiner;
/** サンプルコード */
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.HashMap;
import java.util.Map;

class Main {

    /**
     * 順不同ではなかった。
     */
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var s = scanner.next();
            var t = scanner.next();
            Map<String, Integer> sStr = new HashMap<>();
            Map<String, Integer> tStr = new HashMap<>();

            for (var str : s.split("")) {
                sStr.put(str, sStr.getOrDefault(str, 0) + 1);
            }
            for (var str : t.split("")) {
                tStr.put(str, tStr.getOrDefault(str, 0) + 1);
            }
            var answer = "";
            for (char alphabet = 'a'; alphabet <= 'z'; alphabet++) {
                var str = String.valueOf(alphabet);
                var sCount = sStr.getOrDefault(str, 0);
                var tCount = tStr.getOrDefault(str, 0);
                log(str, sCount, tCount);
                if (sCount > 0 && tCount > 0) {
                    var diff = Math.min(sCount, tCount);
                    answer += str.repeat(diff);
                }
            }
            log(answer);
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

/**
 * よく使うコードリスト
 */
public class SampleCode {
    private static void Sample() {
        /**
         * ArrayList
         * https://docs.oracle.com/javase/jp/8/docs/api/java/util/ArrayList.html
         */
        List<Integer> arrayList = new ArrayList<Integer>();
        arrayList.indexOf(0); // indexを返却
        arrayList.sort(Comparator.naturalOrder()); // ソート
        /**
         * 配列 https://docs.oracle.com/javase/jp/8/docs/api/java/sql/Array.html
         */
    }
}