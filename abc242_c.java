
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;
/** サンプルコード */
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.function.Function;
/** よく使うやつを定義 */
import java.util.Arrays;
import java.lang.Math;
import java.util.Comparator;
import java.util.StringJoiner;
import java.util.Comparator;

class Main {

    private static final int mod = 998244353;

    private static int[][] memo;

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            memo = new int[N][10];
            for (var i = 1; i <= 9; i++) {
                memo[0][i] = 1;
            }
            for (var i = 1; i < N; i++) {
                for (var j = 1; j <= 9; j++) {
                    for (var k = Math.max(1, j - 1); k <= Math.min(9, j + 1); k++) {
                        memo[i][j] += memo[i - 1][k];
                        memo[i][j] %= mod;
                    }
                }
            }
            var answer = 0;
            for (var i = 1; i <= 9; i++) {
                answer += memo[N - 1][i];
                answer %= mod;
            }
            log(answer);
        }
    }

    public static int dfs(int N, int now) {
        if (now > 9 || now <= 0) {
            return 0;
        }
        if (N == 0) {
            return 1;
        }
        if (memo[N][now] != -1) {
            return memo[N][now];
        }
        var count = dfs(N - 1, now) % mod
                + dfs(N - 1, now - 1) % mod
                + dfs(N - 1, now + 1) % mod;
        memo[N][now] = count;
        return count;
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

    private static void timelog(Object... obj) {
        final int logCount = 10;
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