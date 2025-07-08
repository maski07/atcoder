
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
import java.math.BigInteger;
import java.util.ArrayDeque;
/** よく使うやつを定義 */
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.Queue;
import java.util.HashMap;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            int Q = scanner.nextInt();
            Queue<long[]> queue = new ArrayDeque<>();
            new Pair<>();
            for (int i = 0; i < Q; i++) {
                int command = scanner.nextInt();
                if (command == 1) {
                    long c = scanner.nextLong();
                    long x = scanner.nextLong();
                    long[] element = new long[] { c, x };
                    queue.add(element);
                } else {
                    long k = scanner.nextLong();
                    long deleteCount = k;
                    BigInteger sum = BigInteger.ZERO;
                    // log(Arrays.deepToString(queue.toArray()));
                    while (deleteCount > 0 && queue.size() > 0) {
                        long[] element = queue.peek();
                        long c = element[0];
                        long x = element[1];
                        // log("c=", c, " x=", x, " k=", k, "sum=", sum);
                        if (deleteCount >= c) {
                            queue.poll();
                            sum = sum.add(BigInteger.valueOf(c)
                                    .multiply(BigInteger.valueOf(x)));
                            deleteCount -= c;
                            // log("deleteCount", deleteCount);
                        } else {
                            element[0] -= deleteCount;
                            sum = sum.add(BigInteger.valueOf(deleteCount)
                                    .multiply(BigInteger.valueOf(x)));
                            deleteCount = 0;
                        }
                    }
                    log(sum);
                }
            }
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
