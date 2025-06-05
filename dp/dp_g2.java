
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.lang.Math;
import java.util.List;
import java.util.HashMap;
import java.util.Map;
import java.util.List;
import java.util.ArrayList;

class Main {

    private static Map<Integer, List<Integer>> map = new HashMap<>();
    private static Map<Integer, Integer> dp = new HashMap<>();
    private static int[] dp2;
    private static boolean[] alreadyPassed;

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var M = scanner.nextInt();
            for (var i = 0; i < M; i++) {
                var x = scanner.nextInt();
                var y = scanner.nextInt();
                var value = map.getOrDefault(x, new ArrayList<>());
                value.add(y);
                map.put(x, value);
            }
            dp2 = new int[N + 1];
            alreadyPassed = new boolean[N + 1];
            var answer = 0;
            for (var i = 1; i < N + 1; i++) {
                answer = Math.max(answer, dfs(i, 0));
            }
            log(answer);
        }
    }

    private static int dfs(int key, int count) {
        var values = map.getOrDefault(key, new ArrayList<>());
        if (alreadyPassed[key]) {
            return dp2[key];
        } else {
            alreadyPassed[key] = true;
        }
        var tmp = 0;
        for (var value : values) {
            tmp = Math.max(tmp, dfs(value, count + 1) + 1);
        }
        dp2[key] = tmp;
        return tmp;
    }

    private static void log(Object object) {
        System.out.println(object);
    }

    private static void log(Object... object) {
        System.out.println(Arrays.toString(object));
    }
}
