
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var S = scanner.next();
            if (S.equals("Monday")) {
                log(5);
            } else if (S.equals("Tuesday")) {
                log(4);
            } else if (S.equals("Wednesday")) {
                log(3);
            } else if (S.equals("Thursday")) {
                log(2);
            } else if (S.equals("Friday"))
                log(1);
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
