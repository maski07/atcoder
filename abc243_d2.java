
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;

class Main {
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            final int N = scanner.nextInt();
            final long X = scanner.nextLong();
            final char[] S = scanner.next().toCharArray();
            var binary = Long.toBinaryString(X);
            var bs = binary.toString();
            for (var i = 0; i < N; i++) {
                if (S[i] == 'U') {
                    bs = bs.substring(0, bs.length() - 1); // 右シフト
                } else if (S[i] == 'R') {
                    bs += "1"; // 左シフト + 1
                } else {
                    bs += "0"; // 左シフト
                }
            }
            log(Long.parseLong(bs, 2));
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
