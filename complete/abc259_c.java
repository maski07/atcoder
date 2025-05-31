
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var S = ("0" + scanner.next()).toCharArray();
            var T = ("0" + scanner.next()).toCharArray();
            var shortS = "";
            for (var i = 1; i < S.length - 1; i++) {
                if (S[i] == S[i + 1]
                        && S[i] != S[i - 1]) {
                    shortS += Character.toString(S[i]);
                }
            }
            var shortT = "";
            for (var i = 1; i < T.length - 1; i++) {
                if (T[i] == T[i + 1]
                        && T[i] != T[i - 1]) {
                    shortT += Character.toString(T[i]);
                }
            }
            log(shortS.equals(shortT) ? "Yes" : "No");
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
