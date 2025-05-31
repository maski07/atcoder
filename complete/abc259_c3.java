
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
import java.util.Queue;

class Main {

    /**
     * ランレングス圧縮のようなことをする
     * Javaだとこれが綺麗
     * https://atcoder.jp/contests/abc259/submissions/33089875
     */
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var S = scanner.next();
            var T = scanner.next();
            int sc = 1, si = 0;
            int tc = 1, ti = 0;
            // 全文字の種類をチェックしていく
            while (si < S.length() && ti < T.length()) {
                if (S.charAt(si) != T.charAt(ti)) {
                    log("No");
                    return;
                }
                // Sの同じ文字のカウント
                while (si + 1 < S.length()) {
                    // 次の文字が同じ文字ならカウント
                    if (S.charAt(si) == S.charAt(si + 1)) {
                        sc++;
                    } else {
                        break;
                    }
                    si++; // 次の文字へ
                }
                // Tの同じ文字のカウント
                while (ti + 1 < T.length()
                        && T.charAt(ti) == T.charAt(ti + 1)) {
                    if (T.charAt(ti) == T.charAt(ti + 1)) {
                        tc++;
                    } else {
                        break;
                    }
                    ti++;
                }
                // log(S.charAt(si), T.charAt(ti), sc, tc, si, ti);
                if (!(sc == 1 && sc == tc
                        || sc > 1 && sc <= tc)) {
                    log("No");
                    return;
                }
                sc = 1;
                tc = 1;
                si++;
                ti++;
            }
            if (si == S.length() && ti == T.length()) {
                log("Yes");
            } else {
                log("No");
            }
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
