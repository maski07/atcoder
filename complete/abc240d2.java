import java.util.Scanner;
import java.util.Stack;
import java.lang.Math;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.ArrayList;
import java.util.Stack;
import java.util.Deque;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            List<Integer> arr = new ArrayList<Integer>();
            int consecutiveCount = 0;
            int count = 0;
            var ball = new Stack<int[]>();
            for (var i = 0; i < N; i++) {
                var an = scanner.nextInt();
                count++;
                if (ball.empty()
                        || ball.peek()[0] != an) {
                    ball.push(new int[] { an, 1 });
                } else {
                    ball.peek()[1]++;
                    if (ball.peek()[1] == an) {
                        count -= an;
                        ball.pop();
                    }
                }
                System.out.println(count);
            }
        }
    }

    private static void log(Object object) {
        System.out.println(object);
    }

    private static void logDeepArray(Object[] obj) {
        System.out.println(Arrays.deepToString(obj));
    }

    private static int toInt(String str) {
        return Integer.parseInt(str);
    }
}

/**
 * よく使うコードリスト
 */
public class SampleCode {
    private static void Sample() {
        /**
         * ArrayList
         * https://docs.oracle.com/javase/jp/8/docs/api/java/util/ArrayList.html
         */
        List<Integer> arrayList = new ArrayList<Integer>();
        arrayList.indexOf(0); // indexを返却
        arrayList.sort(Comparator.naturalOrder()); // ソート
        /**
         * 配列 https://docs.oracle.com/javase/jp/8/docs/api/java/sql/Array.html
         */
    }
}