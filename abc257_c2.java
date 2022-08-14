
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
import java.util.Collection;
import java.util.Collections;
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
            var sarr = scanner.next().split("");
            var childs = new ArrayList<Integer>();
            var adalts = new ArrayList<Integer>();
            for (String s : sarr) {
                var num = scanner.nextInt();
                if (s == "0") {
                    childs.add(num);
                } else {
                    adalts.add(num);
                }
            }
            if (childs.size() == 0 || adalts.size() == 0) {
                log(N);
            }
            // 昇順に
            Collections.sort(childs);
            Collections.sort(adalts);

            var ci = 0;
            var ai = 0;
            var ans = 0;
            while (true) {
                if (ci < childs.size()) {
                    ans += adalts.size();
                    break;
                } else if (ai < adalts.size()) {
                    ans += childs.size() - ai;
                    break;
                }
                var child = childs.get(ci);
                var adalt = adalts.get(ai);
                if (child < adalt) {
                    // ans +=
                }
            }
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
