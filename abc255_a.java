
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

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var R = scanner.nextInt();
            var C = scanner.nextInt();
            var arr = new int[2][2];
            arr[0][0] = scanner.nextInt();
            arr[0][1] = scanner.nextInt();
            arr[1][0] = scanner.nextInt();
            arr[1][1] = scanner.nextInt();
            log(arr[R - 1][C - 1]);
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
