
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
            var K = scanner.nextInt();
            var hasLight = new boolean[N + 1];
            var lighters = new int[K];
            for (var i = 0; i < K; i++) {
                var a = scanner.nextInt();
                hasLight[a] = true;
                lighters[i] = a;
            }
            var place = new int[N][2];
            for (var i = 0; i < N; i++) {
                place[i][0] = scanner.nextInt();
                place[i][1] = scanner.nextInt();
            }
            var max = 0.0;
            // log(Arrays.toString(lighters), K);
            // logDeepArray(place);
            for (var i = 0; i < N; i++) {
                // 明かりなし
                if (!hasLight[i + 1]) {
                    // 明かりを持っている一番近い人との距離
                    var min = Double.MAX_VALUE;
                    var me_x = place[i][0];
                    var me_y = place[i][1];
                    // log("me", me_x, me_y);
                    for (var j = 0; j < K; j++) {
                        var lighter = lighters[j];
                        var lighter_x = place[lighter - 1][0];
                        var lighter_y = place[lighter - 1][1];
                        var distance = Math.sqrt(
                                Math.pow(lighter_x - me_x, 2)
                                        + Math.pow(lighter_y - me_y, 2));
                        // if (i == 3) {
                        // log("lighter", lighter_x, lighter_y);
                        // log(distance, "distance");
                        // }
                        min = Math.min(distance, min);
                        if (distance < min) {
                            min = distance;
                        }
                    }
                    if (max < min) {
                        max = min;
                    }
                }
            }
            log(max);
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
