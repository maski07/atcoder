
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;
import java.util.ArrayList;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var a = scanner.nextInt();
            var b = scanner.nextInt();
            var c = scanner.nextInt();
            if (a <= b && b <= c
                    || c <= b && b <= a) {
                log("Yes");
            } else {
                log("No");
            }
        }
    }

    private static void log(Object object) {
        System.out.println(object);
    }

    private static void log(Object... object) {
        System.out.println(Arrays.toString(object));
    }
}
