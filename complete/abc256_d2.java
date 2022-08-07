
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
import java.util.Comparator;
/** よく使うやつを定義 */
import java.util.ArrayList;
import java.util.List;
import java.lang.Math;
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;
import java.util.Queue;
import java.util.Deque;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var arr = new int[N][2];
            for (var i = 0; i < N; i++) {
                var L = scanner.nextInt();
                var R = scanner.nextInt();
                arr[i][0] = L;
                arr[i][1] = R;
            }
            Arrays.sort(arr, new Comparator<int[]>() {
                public int compare(int[] a, int[] b) {
                    return a[0] - b[0];
                }
            });
            var num1 = arr[0][0];
            var num2 = arr[0][1];
            for (var i = 1; i < N; i++) {
                if (arr[i][0] <= num2) {
                    if (num2 <= arr[i][1]) {
                        num2 = arr[i][1];
                    }
                } else {
                    System.out.print(num1);
                    System.out.print(" ");
                    System.out.println(num2);
                    num1 = arr[i][0];
                    num2 = arr[i][1];
                }
            }
            System.out.print(num1);
            System.out.print(" ");
            System.out.println(num2);
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
