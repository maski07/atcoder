
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var Sarr = scanner.next().toCharArray();
            var arr = new boolean[7];
            arr[0] = '1' == Sarr[7 - 1];
            arr[1] = '1' == Sarr[4 - 1];
            arr[2] = '1' == Sarr[2 - 1] || '1' == Sarr[8 - 1];
            arr[3] = '1' == Sarr[1 - 1] || '1' == Sarr[5 - 1];
            arr[4] = '1' == Sarr[3 - 1] || '1' == Sarr[9 - 1];
            arr[5] = '1' == Sarr[6 - 1];
            arr[6] = '1' == Sarr[10 - 1];
            var pin1 = Sarr[0] == '1'; // 倒れていない:true 倒れてる: false
            if (pin1) {
                log("No");
                return;
            }
            var now = false;
            var count = 0;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] != now) {
                    now = !now;
                    count++;
                }
                if (count == 3) {
                    log("Yes");
                    return;
                }
            }
            log("No");
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
