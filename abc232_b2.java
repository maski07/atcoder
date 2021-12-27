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
        for (var i = 0; i < alphabets.length(); i++) {
            var found = true;
            for (var j = 0; j < S.length(); j++) {
                var Snum = alphabets.indexOf(S.charAt(j));
                var Tnum = alphabets.indexOf(T.charAt(j));
                if ((Snum + i) % (alphabets.length()) != Tnum) {
                    found = false;
                    break;
                }
            }
            if (found) {
                log("Yes");
                return;
            }
        }
        log("No");
    }
}