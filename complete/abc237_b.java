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
            int H = scanner.nextInt();
            int W = scanner.nextInt();
            int[][] Aij = new int[H][W];
            for (int i = 0; i < H; i++) {
                for (int j = 0; j < W; j++) {
                    Aij[i][j] = scanner.nextInt();
                }
            }
            solve(H, W, Aij);
        }
    }

    private static void solve(int H, int W, int[][] Aij) {
        for (int j = 0; j < W; j++) {
            for (int i = 0; i < H; i++) {
                System.out.print(Aij[i][j]);
                System.out.print(" ");
            }
            System.out.println();
        }
    }

    private static void log(Object obj) {
        System.out.println(obj);
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
class SampleCode {
    private static void Sample() {
        /**
         * ArrayList
         * https://docs.oracle.com/javase/jp/8/docs/api/java/util/ArrayList.html
         */
        /**
         * List<Integer> arrayList = new ArrayList<Integer>();
         * arrayList.indexOf(); // indexを返却
         * arrayList.sort(); // ソート
         */
        /**
         * 配列 https://docs.oracle.com/javase/jp/8/docs/api/java/sql/Array.html
         */
    }
}