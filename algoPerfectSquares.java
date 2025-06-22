
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
import java.util.Comparator;
/** よく使うやつを定義 */
import java.util.ArrayList;
import java.util.List;
import java.lang.Math;
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;

class Main {

    private static int N;

    private static Map<Integer, Integer> dp;

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            N = scanner.nextInt();
            dp = new HashMap<>();

            // Hold a perfect square number list
            List<Integer> perfectList = new ArrayList<>();

            // Make the perfect square number
            for (int i = 1; i <= N; i++) {
                // check perfect square
                if (Math.floor(i ^ 2) * 2 == i) {
                    perfectList.add(i);
                }
            }

            // find the smallest amount of perfect squares
            int res = dfs(perfectList, N, 0, 0);
            log(res);
        }
    }

    private static int dfs(List<Integer> list, int amount, int i, int count) {
        // leaves
        if (i == list.size() || amount < 0) {
            return 0;
        }
        // found an answer
        if (amount == 0) {
            return count;
        }
        // use memo
        if (dp.get(amount) != null) {
            return dp.get(amount);
        }

        // branches
        int perfectNumber = list.get(list.size() - i);
        int num = 0;
        int tmp = amount;
        while (perfectNumber <= tmp) {
            tmp -= perfectNumber;
            num = dfs(list, tmp, i, count + 1);
            // dp.put(amount, num);
        }
        // if wasn't able to find an answer, search more
        if (num == 0) {
            int res2 = dfs(list, amount, i - 1, count + 1);
            // dp.put(amount, num);
            return res2;
        }

        return num;
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
