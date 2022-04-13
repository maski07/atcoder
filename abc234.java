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
            var array = new int[N][2];
            for (var i = 0; i < N; i++) {
                var Xi = scanner.nextInt();
                var Yi = scanner.nextInt();
                int[] num = { Xi, Yi };
                array[i] = num;
            }
            solve(array);
        }
    }

    private static void solve(int[][] array) {
        Comparator<int[]> xAscComparator = new Comparator<int[]>() {
            @Override
            public int compare(int[] obj1, int[] obj2) {
                return obj1[0] - obj2[0];
            }
        };
        Comparator<int[]> yAscComparator = new Comparator<int[]>() {
            @Override
            public int compare(int[] obj1, int[] obj2) {
                return obj1[1] - obj2[1];
            }
        };

        var xAsc = Sort(array, xAscComparator);
        var yAsc = Sort(array, yAscComparator);
        var minX = xAsc[0];
        var maxX = xAsc[xAsc.length];
        var minY = yAsc[0];
        var maxY = yAsc[yAsc.length];
        log(Arrays.toString(xAsc));
        log(Arrays.toString(yAsc));
    }
}