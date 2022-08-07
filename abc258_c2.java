
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
import java.util.Collections;
/** よく使うやつを定義 */
import java.util.ArrayList;
import java.util.List;
import java.lang.Math;
import java.util.Set;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.IntStream;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;

/** 解き直す */
class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var Q = scanner.nextInt();
            var S = scanner.next().toCharArray();
            var curr = 0;
            var out = new StringBuilder();
            for (var i = 0; i < Q; i++) {
                var t = scanner.nextInt();
                var x = scanner.nextInt();
                // log("i:", i, ",t:", t, ",x:", x);
                if (t == 1) {
                    // 頭の文字が何文字目の文字なのかをもつ
                    curr = (curr - x + N) % N;
                } else if (t == 2) {
                    var index = (curr + x - 1) % N;
                    out.append(S[index]);
                    out.append("\n");
                }
            }
            log(out.toString());
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
}