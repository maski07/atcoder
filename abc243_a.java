import java.util.Scanner;
import java.lang.Math;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.ArrayList;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var V = scanner.nextInt();
            var A = scanner.nextInt();
            var B = scanner.nextInt();
            var C = scanner.nextInt();
            var remaining = V;
            while (true) {
                remaining -= A;
                if (remaining < 0) {
                    log('F');
                    break;
                }
                remaining -= B;
                if (remaining < 0) {
                    log('M');
                    break;
                }
                remaining -= C;
                if (remaining < 0) {
                    log('T');
                    break;
                }
            }
        }
    }

    private static void solve() {
        log("Yes");
        log("No");
    }

    private static void log(Object object) {
        System.out.println(object);
    }

    private static void logArray(Object[] obj) {
        System.out.println(Arrays.deepToString(obj));
    }

    private static int toInt(String str) {
        return Integer.parseInt(str);
    }
}
