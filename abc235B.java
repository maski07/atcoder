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
            var N = scanner.nextInt();
            var Hi = new int[N];
            for (int i = 0; i < N; i++) {
                Hi[i] = scanner.nextInt();
            }
            solve(N, Hi);
        }
    }

    private static void solve(int N, int[] Hi) {
        var answer = 0;
        for (int i = 1; i < N; i++) {
            if (Hi[i - 1] >= Hi[i]) {
                log(Hi[i - 1]);
                return;
            }
        }
        log(Hi[N - 1]);
    }
}