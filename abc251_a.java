
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var S = scanner.next();
            var Sarr = S.toCharArray();
            var out = "";
            for (var i = 0; i < 6; i++) {
                var index = i % Sarr.length;
                out += Sarr[index];
            }
            log(out);
        }
    }

    private static void log(Object object) {
        System.out.println(object);
    }
}
