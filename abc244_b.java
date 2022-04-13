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
            var N = scanner.nextInt();
            var T = scanner.next();
            var proceeds = T.split("R");
            var direction = 0;
            var x = 0;
            var y = 0;
            for (var proceed : proceeds) {
                if (direction == 0) {
                    x += proceed.length();
                    direction++;
                } else if (direction == 1) {
                    y -= proceed.length();
                    direction++;
                } else if (direction == 2) {
                    x -= proceed.length();
                    direction++;
                } else if (direction == 3) {
                    y += proceed.length();
                    direction = 0;
                }
            }
            log(x + " " + y);
        }
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
