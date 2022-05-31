
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            final int N = scanner.nextInt();
            final long X = scanner.nextLong();
            final char[] S = scanner.next().toCharArray();
            var num = X;
            for (var i = 0; i < N; i++) {
                if (S[i] == 'U') {
                    num >>= 1;
                } else if (S[i] == 'R') {
                    num = (num << 1) + 1;
                } else {
                    num <<= 1;
                }
            }
            log(num);
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
