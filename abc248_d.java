import java.util.Scanner;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.lang.Math;
import java.lang.reflect.Array;
import java.util.HashMap;
import java.util.Collections;

class Main {

    /**
     * 解き直す
     * ・2分探索
     */
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var An = new int[N];
            Map<Integer, List<Integer>> map = new HashMap<>();

            for (var i = 0; i < N; i++) {
                An[i] = scanner.nextInt();
                var permulative = map.getOrDefault(An[i], new ArrayList<>());
                permulative.add(i);
                map.put(An[i], permulative);
            }
            var Q = scanner.nextInt();
            var out = new StringBuilder(N);
            for (var i = 0; i < Q; i++) {
                var L = scanner.nextInt();
                var R = scanner.nextInt();
                var X = scanner.nextInt();
                var target = map.getOrDefault(X, new ArrayList<>());
                var answer = 0;
                // 2分探索にする
                var left = lower_bound(target, L - 1);
                var right = upper_bound(target, R - 1);
                // log(L, R, left, right, Arrays.toString(target.toArray()));
                out.append(right - left + "\n");
            }
            log(out.toString().trim());
        }
    }

    private static int lower_bound(List<Integer> array, int key) {
        int lower = ~Collections.binarySearch(array, key, (x, y) -> x.compareTo(y) >= 0 ? 1 : -1);
        return lower;
    }

    private static int upper_bound(List<Integer> array, int key) {
        int upper = ~Collections.binarySearch(array, key, (x, y) -> x.compareTo(y) > 0 ? 1 : -1);
        return upper;
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
