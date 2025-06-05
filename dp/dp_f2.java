
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.StringJoiner;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.lang.Math;
import java.util.StringJoiner;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var s = scanner.next();
            var t = scanner.next();
            var sArr = s.split("");
            var tArr = s.split("");
            var slen = sArr.length;
            var tlen = tArr.length;
            var dp = new int[slen + 1][tlen + 1];
            for (var i = 1; i <= slen; i++) {
                for (var j = 1; j <= tlen; j++) {
                    if (sArr[i - 1].equals(tArr[j - 1])) {
                        dp[i][j] = dp[i - 1][j - 1] + 1;
                    } else {
                        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
                    }
                }
            }
            logDeepArray(dp);
            var i = slen;
            var j = tlen;
            var len = dp[slen][tlen];
            var answer = new String[len];
            while (len > 0) {
                if (sArr[i - 1].equals(tArr[j - 1])) {
                    answer[len - 1] = sArr[i - 1];
                    i--;
                    j--;
                    len--;
                } else if (dp[i][j] == dp[i - 1][j]) {
                    i--;
                } else {
                    j--;
                }
            }
            log(String.join("", answer));
        }
    }

    private static void solve() {
        log("Yes");
        log("No");
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
