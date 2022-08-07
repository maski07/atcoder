
import java.util.Scanner;
import java.util.Arrays;
import java.util.List;
import java.lang.Math;
import java.util.LinkedList;

class Main {

    private static char Right = 'R';

    /**
     * 実行時間オーバー
     */
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var Sarr = scanner.next().toCharArray();
            LinkedList<Integer> array = new LinkedList<>();
            var pointer = 1;
            array.add(0);
            for (var i = 1; i <= N; i++, pointer++) {
                var s = Sarr[i - 1];
                // log("pointer, s=", pointer, s);
                if (s == Right) {
                    array.add(pointer, i);
                } else {
                    pointer = Math.max(pointer - 1, 0);
                    array.add(pointer, i);
                }
                // log(array.toString());
            }
            var out = new StringBuilder();
            for (Integer value : array) {
                out.append(value + " ");
            }
            log(out.toString());
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
