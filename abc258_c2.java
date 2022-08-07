
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

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var Q = scanner.nextInt();
            List<Character> S = scanner
                    .next()
                    .chars()
                    .mapToObj(c -> (char) c)
                    .collect(Collectors.toList());
            List<Character> newS = new ArrayList<>(S);
            final int size = newS.size();
            for (var i = 0; i < Q; i++) {
                var t = scanner.nextInt();
                var x = scanner.nextInt();
                // log("i:", i, ",t:", t, ",x:", x);
                if (t == 1) {
                    var tmp = newS.subList(size - x, size);
                    Collections.reverse(tmp);
                    var tmp2 = newS.subList(0, size - x);
                    tmp2.addAll(0, tmp);
                    newS = tmp2;
                } else if (t == 2) {
                    log(newS);
                    log(newS.get(x - 1));
                }
            }
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