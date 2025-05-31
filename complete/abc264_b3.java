
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;

// アルゴリズム：チェビシェフ距離
class Main {
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var R = scanner.nextInt();
            var C = scanner.nextInt();
            var max = Math.max(Math.abs(R - 8), Math.abs(C - 8));
            if (max % 2 == 1) {
                log("black");
            } else {
                log("white");
            }
        }
    }

    private static void outGrid(String[][] grid) {
        for (var i = 0; i < 15; i++) {
            for (var j = 0; j < 15; j++) {
                System.out.print(grid[i][j]);
            }
            log("");
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
