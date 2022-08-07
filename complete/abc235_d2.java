import java.util.Scanner;
import java.util.Arrays;
import java.util.Deque;
import java.util.ArrayDeque;

class Main {

    static int a;
    static int N;
    static Deque<Integer> queue;
    static final int INF = Integer.MAX_VALUE;
    static int[] dist;
    static final int MX = 1000000;

    /**
     * 解き直す
     * 幅優先探索
     */
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            a = scanner.nextInt();
            N = scanner.nextInt();
            queue = new ArrayDeque<>();
            dist = new int[1000000];
            Arrays.fill(dist, INF);

            push(1, 0);
            while (queue.size() != 0) {
                var value = queue.pop();
                var d = dist[value];
                if ((long) value * (long) a < (long) MX) {
                    push(a * value, d + 1);
                }
                if (value >= 10 && value % 10 != 0) {
                    var newX = rotate(String.valueOf(value));
                    push(Integer.parseInt(newX), d + 1);
                }
            }
            if (dist[N] == INF) {
                log(-1);
            } else {
                log(dist[N]);
            }
        }
    }

    private static String rotate(String value) {
        return value.substring(value.length() - 1)
                + value.substring(0, value.length() - 1);
    }

    private static void push(int v, int d) {
        if (dist[v] == INF) {
            dist[v] = d;
            queue.push(v);
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
