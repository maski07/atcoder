
/** 既存メソッドで使用 */
import java.util.Scanner;
/** よく使うやつを定義 */
import java.lang.Math;

class Main {

    private static String[][] chw;
    private static int H;
    private static int W;

    /**
     * DPの問題
     * 全探索だと、同じ箇所を無駄に通るのでTLEとなる
     */
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            /** input */
            H = scanner.nextInt();
            W = scanner.nextInt();
            chw = new String[H][W];
            for (var i = 0; i < H; i++) {
                chw[i] = scanner.next().split("");
            }
            /** 実装 */
            log(dfs(0, 0, 1));
        }
    }

    private static int dfs(int i, int j, int curr) {
        if (i >= H
                || j >= W
                || "#".equals(chw[i][j])) {
            return curr - 1;
        }

        return Math.max(dfs(i + 1, j, curr + 1), dfs(i, j + 1, curr + 1));
    }

    private static void log(Object object) {
        System.out.println(object);
    }
}