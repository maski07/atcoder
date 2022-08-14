
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var K = scanner.nextInt();
            var an = new int[N];
            for (var i = 0; i < N; i++) {
                an[i] = scanner.nextInt();
            }
            for (var i = 0; i < K && i + K < N; i++) {
                var tmp = new int[(int) Math.floor((N - (i + 1)) / K) + 1];
                // tmpを作成する
                for (var j = i; j < N; j += K) {
                    tmp[j / K] = an[j];
                    // log("j", j);
                }
                // ソートする
                Arrays.sort(tmp);
                // 元に戻す
                for (var j = i; j < N; j += K) {
                    an[j] = tmp[j / K];
                }
                // log(Arrays.toString(tmp));
            }
            // log(Arrays.toString(an));
            // ソートできてるかチェック
            var tmp = Arrays.copyOf(an, an.length);
            Arrays.sort(tmp);
            for (var i = 1; i < N; i++) {
                if (tmp[i] != an[i]) {
                    log("No");
                    return;
                }
            }
            log("Yes");
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
