
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var S = scanner.next();
            var Sarr = S.split("");
            var skipped = true;
            var bcount = Sarr.length - 1;
            var fcount = 0;
            var answer = true;
            while (fcount < bcount) {
                var front = Sarr[fcount];
                var back = Sarr[bcount];
                if (front.equals(back)) {
                    bcount--;
                    fcount++;
                    if (!"a".equals(front)) {
                        skipped = false;
                    }
                } else {
                    if ("a".equals(back) && skipped) {
                        bcount--;
                    } else if (skipped) {
                        skipped = false;
                    } else {
                        answer = false;
                        break;
                    }
                }
            }
            log(answer ? "Yes" : "No");
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

    private static int loggedCount = 0;

    private static void timeLog(Object... obj) {
        final int logCount = 0;
        if (loggedCount <= logCount) {
            System.out.println(Arrays.toString(obj));
            loggedCount++;
        }
    }

    public static class Util {
        public static int[] getIntArray(int N, Scanner scanner) {
            Function<Integer, int[]> get = (argN) -> {
                var arr = new int[argN.intValue()];
                for (var i = 0; i < argN.intValue(); i++) {
                    arr[i] = scanner.nextInt();
                }
                return arr;
            };
            return get.apply(N);
        }

        private static int toInt(String str) {
            return Integer.parseInt(str);
        }
    }
}
