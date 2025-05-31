
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.util.ArrayList;
import java.util.List;
import java.lang.Math;
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;

class Main {
    static final int isBlack = 1;
    static final int isWhite = 0;

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var R = scanner.nextInt();
            var C = scanner.nextInt();
            var grid = new int[15][15];
            // 横列
            for (var i = 1; i <= 15; i++) {
                var coler = i % 2 == 0 ? isWhite : isBlack;
                for (var j = i; j <= 15 - i; j++) {
                    grid[i - 1][j - 1] = coler;
                }
            }
            outGrid(grid);
            // 縦列
            for (var j = 1; j <= 15; j++) {
                var coler = j % 2 == 0 ? isWhite : isBlack;
                for (var i = j; i <= 15 - j; i++) {
                    grid[i - 1][j - 1] = coler;
                }
            }
        }
    }

    private static void outGrid(int[][] grid) {
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
