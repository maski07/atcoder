import java.util.Scanner;
import java.util.Arrays;
import java.lang.Math;
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;
import java.util.Deque;
import java.util.ArrayDeque;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var dp = new int[N + 1][4];
            Map<Integer, Integer> map = new HashMap<>();
            for (var i = 0; i < N; i++) {
                var num = scanner.nextInt();
                map.put(num, map.getOrDefault(num, 0) + 1);
            }
            var i = 1;
            dp[0][0] = 1;
            for (var key : map.keySet().stream().sorted().toArray()) {
                dp[i][0] = 1;
                var count = map.get(key);
                for (int j = 1; j < 4; j++) {
                    dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1] * count;
                }
                i++;
            }
            log(dp[map.size()][3]);
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
