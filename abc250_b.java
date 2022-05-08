
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.lang.Math;

class Main {

    private static String Black = "#";
    private static String White = ".";

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var A = scanner.nextInt();
            var B = scanner.nextInt();
            var outWhiteV = true;
            var outWhiteW = true;
            var tiles = new String[N * A][N * B];
            // 縦
            for (var i = 0; i < N; i++) {
                // 横
                for (var k = 0; k < N; k++) {
                    // 縦
                    for (var j = 0; j < A; j++) {
                        // 横
                        for (var s = 0; s < B; s++) {
                            tiles[j + i * A][s + k * B] = outWhiteW ? White : Black;
                        }
                    }
                    outWhiteW = !outWhiteW;
                }
                outWhiteW = outWhiteV = !outWhiteV;
            }
            for (var i = 0; i < N * A; i++) {
                for (var j = 0; j < N * B; j++) {
                    System.out.print(tiles[i][j]);
                }
                log("");
            }
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
