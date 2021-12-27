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
            var arrays = new int[N - 1][2];
            var i = 0;
            while (scanner.hasNext()) {
                var a = scanner.nextInt();
                var b = scanner.nextInt();
                arrays[i++] = new int[] { a, b };
            }
            // log(Arrays.deepToString(arrays));
            solve(N, arrays);
        }
    }

    private static void solve(int N, int[][] arrays) {
        var vertex = 0;
        // find vertex
        if (arrays[0][0] == arrays[1][0]
                || arrays[0][0] == arrays[1][1]) {
            vertex = arrays[0][0];
        } else if (arrays[0][1] == arrays[1][0]
                || arrays[0][1] == arrays[1][1]) {
            vertex = arrays[0][1];
        } else {
            log("No");
            return;
        }
        // check remaining
        for (var i = 2; i < arrays.length; i++) {
            if (arrays[i][0] != vertex
                    && arrays[i][1] != vertex) {
                log("No");
                return;
            }
        }
        log("Yes");
    }
}
