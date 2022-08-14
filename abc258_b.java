
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;

class Main {
    // [北, 南, 東, 西, 北東, 南西, 北西, 南東]
    private static final int[][] dirs = {
            { 0, 1 },
            { 0, -1 },
            { 1, 1 },
            { 1, 0 },
            { 1, -1 },
            { -1, 1 },
            { -1, 0 },
            { -1, -1 },
    };

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var arr = new int[N][N];
            for (var i = 0; i < N; i++) {
                var nums = scanner.next().split("");
                for (var j = 0; j < N; j++) {
                    arr[i][j] = Integer.parseInt(nums[j]);
                }
            }
            var ans = 0L;
            // 縦
            for (var i = 0; i < N; i++) {
                // 横
                for (var j = 0; j < N; j++) {
                    // 8方向をチェック
                    for (var dir : dirs) {
                        // i, j が現在地
                        var ver_i = i;
                        var hor_j = j;
                        long num = arr[ver_i][hor_j];
                        // N回 同じ方向に進む。
                        for (var k = 0; k < N - 1; k++) {
                            ver_i = (N + (ver_i + dir[0])) % N;
                            hor_j = (N + (hor_j + dir[1])) % N;
                            // log(ver_i, hor_j, num);
                            num = num * 10 + arr[ver_i][hor_j];
                        }
                        ans = Math.max(ans, num);
                    }
                }
            }
            log(ans);
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
