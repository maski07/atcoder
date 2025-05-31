
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.util.ArrayList;
import java.util.List;

class Main {

    /*
     * 解き直す。（転倒数を使ってみる）
     */
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var S = scanner.next();
            List<Character> tmp = new ArrayList<>();
            for (var one : S.toCharArray()) {
                tmp.add(one);
            }
            // atcoderの位置の数を足していく
            var ans = 0;
            for (var one : "atcoder".toCharArray()) {
                var i = 0;
                for (; i < tmp.size(); i++) {
                    if (tmp.get(i).charValue() == one) {
                        break;
                    }
                }
                tmp.remove(i);
                ans += i;
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
