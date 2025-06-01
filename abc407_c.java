
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
import java.util.ArrayDeque;
/** よく使うやつを定義 */
import java.util.ArrayList;
import java.util.List;
import java.lang.Math;
import java.lang.reflect.Array;
import java.util.Set;
import java.util.function.Consumer;
import java.util.function.Function;
import java.util.HashSet;
import java.util.Map;
import java.util.Queue;
import java.util.HashMap;

class Main {

    private static int len = 0;

    private static Queue<String[]> queue = new ArrayDeque<>();

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var S = scanner.nextInt();
            len = Integer.toString(S).length();
            queue.add(new String[] { "0", "1", "1" });
            var result = bfs(new ArrayList<Integer>(), 0, 0);
            log(result);
        }
    }

    private static int bfs(List<Integer> curr, int count, int pushedAinArow) {
        var arr = queue.poll();
        var 
        return 1;
    }

    private static int dfs(List<Integer> curr, int count, int pushedAinArow) {
        // define dfs function
        // leaves
        if (curr.size() > len || pushedAinArow <= 10) {
            return Integer.MAX_VALUE;
        }
        // brunches: push button A
        curr.add(0);
        var count1 = bfs(curr, ++count, pushedAinArow);
        curr.remove(curr.size() - 1);

        // brunches: push button B
        List<Integer> next = new ArrayList<>(curr);
        for (var i = 0; i < next.size(); i++) {
            next.set(i, next.get(i));
        }
        var count2 = dfs(next, ++count);

        return Math.min(count1, count2);
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
