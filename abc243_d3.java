
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
import java.util.Deque;
import java.util.ArrayDeque;

class Main {
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            final int N = scanner.nextInt();
            final long X = scanner.nextLong();
            final char[] S = scanner.next().toCharArray();
            var bs = Long.toBinaryString(X).toCharArray();
            Deque<String> q = new ArrayDeque<>();
            for (var i = 0; i < bs.length; i++) {
                q.add(String.valueOf(bs[i]));
            }
            for (var i = 0; i < N; i++) {
                if (S[i] == 'U') {
                    q.removeLast();
                } else if (S[i] == 'R') {
                    q.add("1");
                } else {
                    q.add("0");
                }
            }

            var sb = new StringBuilder();
            var size = q.size();
            for (var i = 0; i < size; i++) {
                sb.append(q.pop());
            }
            log(Long.parseLong(sb.toString(), 2));
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
