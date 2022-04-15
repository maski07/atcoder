import java.util.Scanner;
import java.lang.Math;
import java.util.Arrays;

class Main {
    private static void log(Object object) {
        System.out.println(object);
    }

    private static int toInt(String str) {
        return Integer.parseInt(str);
    }

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var t = scanner.nextInt();
            log(fx(fx(fx(t) + t) + fx(fx(t))));
        }
    }

    private static int fx(int x) {
        return x * x + 2 * x + 3;
    }
}