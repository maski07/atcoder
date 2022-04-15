import java.util.Scanner;
import java.lang.Math;
import java.util.Arrays;

class Main {
    private static void log(Object object) {
        System.out.println(object);
    }

    private static int toInt(String str) {
        return Integer.parseInt(str);
    }

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var K = scanner.nextInt();
            var A = scanner.nextInt();
            var B = scanner.nextInt();
            solve(K, A, B);
        }
    }

    private static void solve(int K, int A, int B) {
        var tmpA = A;
        var decimalNum = 0;
        while (tmpA > 0) {
            var num = tmpA % 10;
            decimalNum += tmpA
        }
    }
}