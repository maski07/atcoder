
/** 既存メソッドで使用 */
import java.util.Scanner;
/** よく使うやつを定義 */
import java.lang.Math;
import java.util.Arrays;

class Main {

    /**
     * DPの問題
     * 全探索だと、同じ箇所を無駄に通るのでTLEとなる
     * 解き直す
     */
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            /** input */
            var H = scanner.nextInt();
            var W = scanner.nextInt();
            var chw = new String[H][W];
            for (var i = 0; i < H; i++) {
                chw[i] = scanner.next().split("");
            }
            /** 実装 */
            var dp = new int[H][W];
            for (var i = 0; i < H; i++) {
                Arrays.fill(dp[i], -1);
            }
            dp[0][0] = 0;
            var answer = 0;
            for (var i = 0; i < H; i++) {
                for (var j = 0; j < W; j++) {
                    if (".".equals(chw[i][j])) {
                        var aboveIndex = Math.max(i - 1, 0);
                        var sideIndex = Math.max(j - 1, 0);
                        // (0,0)から通ってくる必要がある
                        if (dp[aboveIndex][j] == -1 && dp[i][sideIndex] == -1) {
                            continue;
                        }
                        dp[i][j] = Math.max(dp[aboveIndex][j], dp[i][sideIndex]) + 1;
                        answer = Math.max(answer, dp[i][j]);
                    }
                }
            }
            log(answer);
            /**
             * 解き方は2通り。
             * ・最初から撮ってきた数を足していくのか
             * ・最後から通ってきた数を足していくのか
             */
        }
    }

    private static void log(Object object) {
        System.out.println(object);
    }

    private static void log(Object... object) {
        System.out.println(Arrays.toString(object));
    }
}