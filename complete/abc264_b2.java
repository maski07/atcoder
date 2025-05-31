
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;

class Main {
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var R = scanner.nextInt();
            var C = scanner.nextInt();
            var grid = new String[15][15];
            // 横列
            {
                var i = 0;
                grid[i++] = "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1".split(" ");
                grid[i++] = "1 0 0 0 0 0 0 0 0 0 0 0 0 0 1".split(" ");
                grid[i++] = "1 0 1 1 1 1 1 1 1 1 1 1 1 0 1".split(" ");
                grid[i++] = "1 0 1 0 0 0 0 0 0 0 0 0 1 0 1".split(" ");
                grid[i++] = "1 0 1 0 1 1 1 1 1 1 1 0 1 0 1".split(" ");
                grid[i++] = "1 0 1 0 1 0 0 0 0 0 1 0 1 0 1".split(" ");
                grid[i++] = "1 0 1 0 1 0 1 1 1 0 1 0 1 0 1".split(" ");
                grid[i++] = "1 0 1 0 1 0 1 0 1 0 1 0 1 0 1".split(" ");
                grid[i++] = "1 0 1 0 1 0 1 1 1 0 1 0 1 0 1".split(" ");
                grid[i++] = "1 0 1 0 1 0 0 0 0 0 1 0 1 0 1".split(" ");
                grid[i++] = "1 0 1 0 1 1 1 1 1 1 1 0 1 0 1".split(" ");
                grid[i++] = "1 0 1 0 0 0 0 0 0 0 0 0 1 0 1".split(" ");
                grid[i++] = "1 0 1 1 1 1 1 1 1 1 1 1 1 0 1".split(" ");
                grid[i++] = "1 0 0 0 0 0 0 0 0 0 0 0 0 0 1".split(" ");
                grid[i++] = "1 1 1 1 1 1 1 1 1 1 1 1 1 1 1".split(" ");
            }
            log("1".equals(grid[R - 1][C - 1]) ? "black" : "white");
            // outGrid(grid);
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
