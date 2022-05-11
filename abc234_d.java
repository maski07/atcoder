
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
import java.util.PriorityQueue;
import java.util.Queue;

class Main {

    /**
     * ・解法
     * 平行二分探索木
     * SegTree
     * priority queue
     * 線形探索
     * 累積和
     * 
     * @param args
     */
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var K = scanner.nextInt();
            Queue<Integer> queue = new PriorityQueue<>(K);
            for (var i = 0; i < K - 1; i++) {
                queue.add(Integer.parseInt(scanner.next()));
            }
            StringBuilder sb = new StringBuilder();
            for (var i = K - 1; i < N; i++) {
                queue.add(Integer.parseInt(scanner.next()));
                if (queue.size() > K)
                    queue.poll();

                sb.append(queue.peek() + "\n");
            }
            System.out.print(sb);
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
