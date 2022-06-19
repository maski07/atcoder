
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
            var N = scanner.nextInt();
            var P = 0;
            var mass = new int[4];
            for (var i = 0; i < N; i++) {
                var increment = scanner.nextInt();
                mass[0] = 1;
                var newMass = new int[4];
                // log(Arrays.toString(mass));
                for (var j = 0; j < 4; j++) {
                    // log("j=", j, "value=", value, "inc=", increment);
                    if (mass[j] > 0) {
                        var nextMass = j + increment;
                        if (nextMass > 3) {
                            P++;
                        } else {
                            newMass[nextMass] = 1;
                        }
                    }
                }
                mass = newMass;
            }
            // log(Arrays.toString(mass));
            log(P);
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
