import java.util.Scanner;
import java.lang.Math;
import java.util.Arrays;

/**
 * 全網羅でとくと、3×10^5 ! で間に合わない。
 * 
 * 配列に詰めていく。
 * 1以上の数の階乗を足していく。
 * 3×10^5 程度の処理量で完結できる
 */
class Main {
    private static void log(Object object) {
        System.out.println(object);
    }

    private static int toInt(String str) {
        return Integer.parseInt(str);
    }

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var arr = new int[10000];
            for (var i = 0; i < N; i++) {
                var A = scanner.nextInt();
                arr[A] = arr[A] + 1;
            }
            log(Arrays.toString(arr));
            solve();
        }
    }

    private static void solve() {
        log("Yes");
        log("No");
    }
}