
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var L = scanner.nextInt();
            var R = scanner.nextInt();
            log("atcoder".substring(L - 1, R));
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
