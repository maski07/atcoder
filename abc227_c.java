
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.lang.Math;

class Main {

    /**
     * 数学的な問題
     */
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextLong();
            var answer = 0L;
            for (var a = 1L; a * a * a <= N; a++) {
                for (var b = a; b * b <= N; b++) {
                    var c = Math.floor(N / (a * b)) - b + 1L;
                    answer += c;
                }
            }
            log(answer);
        }
    }

    private static void log(Object object) {
        System.out.println(object);
    }

    private static void log(Object... object) {
        System.out.println(Arrays.toString(object));
    }
}
