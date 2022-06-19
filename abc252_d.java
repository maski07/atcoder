
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
import java.lang.Math;
import java.util.Set;
import java.util.HashSet;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            Set<Integer> set = new HashSet<>();
            final int max = 2 * 100000 + 1;
            var arr = new int[max];
            for (var i = 0; i < N; i++) {
                var num = scanner.nextInt();
                set.add(num);
                arr[num]++;
            }

            var ans = c(set.size(), 3);
            // log("ans", set.size(), ans);

            for (var i = 0; i < max; i++) {
                ans *= arr[i] == 0 ? 1 : arr[i];
                // if (arr[i] != 0) {
                // log(i, arr[i]);
                // }
            }
            // log(Arrays.toString(arr), set.size());
            log(ans);
        }
    }

    private static int c(int n, int r) {
        return p(n, r) / p(r, r);
    }

    private static int p(int n, int r) {
        return n > 0 && r > 0 ? n * p(n - 1, r - 1) : 1;
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
