
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.lang.Math;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var H = scanner.nextInt();
            var W = scanner.nextInt();
            var R = scanner.nextInt();
            var C = scanner.nextInt();
            var mass = new int[H][W];
            for (var i = 0; i < H; i++) {
                mass[i][0] = (mass[i][0] + 1);
                mass[i][W - 1] = (mass[i][W - 1] + 1);
            }
            for (var i = 0; i < W; i++) {
                mass[0][i] = (mass[0][i] + 1);
                mass[H - 1][i] = (mass[H - 1][i] + 1);
            }
            var answer = mass[R - 1][C - 1] == 0 ? 4 : 4 - mass[R - 1][C - 1];
            log(answer);
        }
    }

    private static void log(Object object) {
        System.out.println(object);
    }

    private static void log(Object... object) {
        System.out.println(Arrays.toString(object));
    }

}
