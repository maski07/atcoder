import java.util.Scanner;
import java.lang.Math;

class Main {
    public static void log(Object object) {
        System.out.println(object);
    }

    public static void main(String[] args) {
        var scanner = new Scanner(System.in);
        var S = scanner.next();
        var T = scanner.next();
        // 1文字ならYes
        if (S.length() == 1) {
            log("Yes");
            return;
        }
        final String alphabets = "abcdefghijklmnopqrstuvwxyz";
        // 1文字目の差分を取得
        var firstSnum = alphabets.indexOf(S.charAt(0)) + 1;
        var firstTnum = alphabets.indexOf(T.charAt(0)) + 1;
        log(firstSnum + ":" + firstTnum);
        log("length:" + alphabets.length());
        var firstDiff = (firstSnum + firstTnum) % (alphabets.length());
        log("firstDiff:" + firstDiff);

        // 残りの文字が差分と等しいかチェック
        for (var i = 1; i < S.length(); i++) {
            var Schar = S.charAt(i);
            var Tchar = T.charAt(i);
            var Snum = alphabets.indexOf(Schar) + 1;
            var Tnum = alphabets.indexOf(Tchar) + 1;
            log(Snum);
            log(Tnum);
            var diff = Math.abs(Snum - Tnum);
            if (diff != firstDiff) {
                log("No");
                return;
            }
        }
        log("Yes");
    }
}
/**
 * 解法:
 * abc -> 123
 * def -> 456
 * a-b = d-e (1-2 = 4-5)
 * b-c = e-f (2-3=5-6)
 * 
 * z -> 27
 * a -> 1
 * 1文字なら確実Yes
 * 
 * abc -> zab
 * 12 -> 27 1
 * 
 * a-z = -26
 * b + 26 = 28 % 27 = a
 */