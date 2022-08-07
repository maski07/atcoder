
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

    static int a;
    static int N;

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            a = scanner.nextInt();
            N = scanner.nextInt();
            var x = 1;
            var ans = dfs(a, 1);
            log(ans);
        }
    }

    public static int dfs(int x, int count) {
        // log(x, count);
        if (x == N) {
            return count;
        } else if (x < N) {
            var pattern1 = dfs(x * a, count + 1);

            var strX = String.valueOf(x);
            int pattern2 = -1;
            if (strX.length() > 1) {
                var newX = strX.charAt(strX.length() - 1) + strX.substring(0, strX.length() - 1);
                pattern2 = dfs(Integer.parseInt(newX), count + 1);
            }
            // log(x, pattern1, pattern2);

            if (pattern1 == -1 && pattern2 == -1) {
                return pattern2;
            } else if (pattern1 == -1 && pattern2 != -1) {
                return pattern2;
            } else if (pattern2 == -1 && pattern1 != -1) {
                return pattern1;
            } else {
                return Math.min(pattern1, pattern2);
            }
        } else {
            return -1;
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
