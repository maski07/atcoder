import java.util.Scanner;
import java.lang.Math;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.ArrayList;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var X = scanner.nextInt();
            var arr = new int[N][2];
            for (var i = 0; i < N; i++) {
                arr[i][0] = scanner.nextInt();
                arr[i][1] = scanner.nextInt();
            }
            solve(N, X, arr);
        }
    }

    private static void solve(int N, int X, int[][] arr) {
        if (dfs(arr, 0, 0, X)) {
            log("Yes");
        } else {
            log("No");
        }
    }

    private static boolean dfs(int[][] arr, int i, int sum, int X) {
        if (arr.length == i) {
            return sum == X;
        }
        if (sum >= X) {
            return false;
        }
        return dfs(arr, i + 1, sum + arr[i][0], X)
                || dfs(arr, i + 1, sum + arr[i][1], X);
    }

    private static void log(Object object) {
        System.out.println(object);
    }

    private static void logArray(Object[] obj) {
        System.out.println(Arrays.deepToString(obj));
    }

    private static int toInt(String str) {
        return Integer.parseInt(str);
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