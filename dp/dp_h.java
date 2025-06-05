
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.lang.Math;
import java.util.ArrayList;
import java.util.List;

class Main {

    private static int mod = 1000000000 + 7;

    /** そのマスに到達するまでに何通り存在するのかをdpしていく。 */
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var H = scanner.nextInt();
            var W = scanner.nextInt();
            var grid = new char[H][H];
            for (var i = 0; i < H; i++) {
                grid[i] = scanner.next().toCharArray();
            }

            var dp = new int[H + 1][W + 1];
            dp[1][1] = 1;
            for (var i = 1; i <= H; i++) {
                for (var j = 1; j <= W; j++) {
                    if ('.' == grid[i - 1][j - 1]) {
                        var above = dp[i - 1][j];
                        var left = dp[i][j - 1];
                        dp[i][j] += (above + left) % mod;
                    }
                }
            }
            log(dp[H][W]);
        }
    }

    private static void log(Object object) {
        System.out.println(object);
    }

    private static void log(Object... object) {
        System.out.println(Arrays.toString(object));
    }
}
