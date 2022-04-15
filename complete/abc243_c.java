import java.util.Scanner;
import java.lang.Math;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.ArrayList;

class Main {

    static int[][] DP;
    static int mod = 998244353;

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            DP = new int[10][N + 1];
            int count = 0;
            for (var i = 1; i <= 9; i++) {
                count += DFS(i, N - 1);
            }
            log(count);
        }
    }

    private static int DFS(int i, int N) {
        return useMomory(i, N - 1)
                + useMomory(i + 1, N - 1)
                + useMomory(i - 1, N - 1);
    }

    private static int useMomory(int i, int N) {
        if (!(1 <= i && i <= 9)) {
            return 0;
        }
        if (N == 0) {
            DP[i][N] = 1;
            return 1;
        }
        if (DP[i][N] != 0 && N < 10000) {
            return DP[i][N];
        } else {
            DP[i][N] = DFS(i, N) % mod;
            return DP[i][N];
        }
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