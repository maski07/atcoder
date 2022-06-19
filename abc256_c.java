
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
            var h1 = scanner.nextInt();
            var h2 = scanner.nextInt();
            var h3 = scanner.nextInt();
            var w1 = scanner.nextInt();
            var w2 = scanner.nextInt();
            var w3 = scanner.nextInt();
            var ans = 0;
            for (var i = 1; i <= (h1 - 2) && i <= (w1 - 2); i++) {
                for (var j = 1; (i + j) <= (h1 - 1) && j <= (w2 - 2); j++) {
                    for (var k = 1; k <= (h2 - 2) && (i + k) <= (w1 - 1); k++) {
                        for (var z = 1; (k + z) <= (h2 - 1) && (j + z) <= (w2 - 1); z++) {
                            // 縦
                            var ijx = h1 - (i + j);
                            var kzx = h2 - (k + z);
                            // 横
                            var ikx = w1 - (i + k);
                            var jzx = w2 - (j + z);

                            var xxx1 = h3 - (ikx + jzx);
                            var xxx2 = w3 - (ijx + kzx);
                            if (xxx1 == xxx2 && xxx1 > 0) {
                                ans++;
                                // log(i, k, ikx);
                                // log(j, z, jzx);
                                // log(ijx, kzx, h3 - (ikx + jzx));
                                // log("------");
                            }
                        }
                    }
                }
            }
            log(ans);
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
