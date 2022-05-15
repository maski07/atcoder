
import java.util.Scanner;
import java.util.Arrays;
import java.util.Queue;
import java.util.Deque;
import java.util.ArrayDeque;

class Main {

    private static final char R = 'R';

    /**
     * 解き直す
     * この人のソースコードが綺麗
     * https://atcoder.jp/contests/abc237/submissions/28948630
     */
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var Sarr = scanner.next().toCharArray();
            Deque<Integer> rq = new ArrayDeque<>();
            Deque<Integer> lq = new ArrayDeque<>();
            for (var i = 1; i <= N; i++) {
                var s = Sarr[i - 1];
                if (s == R) {
                    rq.add(i - 1);
                } else {
                    lq.addFirst(i - 1);
                }
            }
            var sb = new StringBuilder();

            for (var rv : rq) {
                sb.append(rv + " ");
            }
            sb.append(N);
            for (var lv : lq) {
                sb.append(" " + lv);
            }

            log(sb.toString());
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
