import java.util.Scanner;
import java.lang.Math;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.ArrayList;
import java.util.stream.Collectors;

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
            var Q = scanner.nextInt();
            // anの取り出し
            List<Integer> an = new ArrayList<Integer>();
            // var an = int[N];
            for (var i = 0; i < N; i++) {
                an.add(scanner.nextInt());
                // an[i] = scanner.nextInt();
            }
            // xkの取り出し
            var xk = new int[Q][2];
            for (var i = 0; i < Q; i++) {
                xk[i][0] = scanner.nextInt();
                xk[i][1] = scanner.nextInt();
            }
            solve(N, Q, an, xk);
        }
    }

    private static void solve(int N, int Q, List<Integer> an, int[][] xk) {
        // 2分探索 Q * log n
        for (var i = 0; i < Q; i++) {
            List<Integer> newAn = (ArrayList<Integer>) an.stream().collect(Collectors.toList());
            var x = xk[i][0];
            var k = xk[i][1];
            var findCount = 0;
            var preIndex = 0;
            while (true) {
                // log(newAn);
                var index = newAn.indexOf(x);
                if (index != -1) {
                    findCount++;
                    preIndex += index + 1;
                    newAn = newAn.subList(index + 1, newAn.size());
                    if (findCount == k) {
                        log(preIndex);
                        break;
                    }
                } else {
                    log(-1);
                    break;
                }
            }
        }
    }
}