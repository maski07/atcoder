
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var S = scanner.next();
            var T = scanner.next();
            int sc = 1, si = 0;
            int tc = 1, ti = 0;
            while (si < S.length() && ti < T.length()) {
                while (si + 1 < S.length()
                        && S.charAt(si) == S.charAt(si + 1)) {
                    sc++;
                    si++;
                }
                while (ti + 1 < T.length()
                        && T.charAt(ti) == T.charAt(ti + 1)) {
                    tc++;
                    ti++;
                }
                // log(S.charAt(si), T.charAt(ti), sc, tc, si, ti);
                if (!(S.charAt(si) == T.charAt(ti) && sc == tc
                        || S.charAt(si) == T.charAt(ti) && sc > 1 && sc <= tc)) {
                    log("No");
                    return;
                }
                sc = 1;
                tc = 1;
                si++;
                ti++;
            }
            log("Yes");
        }

    }

    private static void log(Object object) {
        System.out.println(object);
    }

    private static void log(Object... object) {
        System.out.println(Arrays.deepToString(object));
    }

    private static void logDeepArray(Object[] obj) {
        System.out.println(Arrays.deepToString(obj));
    }
}
