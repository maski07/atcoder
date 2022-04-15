import java.util.Scanner;
import java.lang.Math;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.ArrayList;

class Main {
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            int N = scanner.nextInt();
            int[] An = new int[N];
            for (int i = 0; i < N; i++) {
                An[i] = scanner.nextInt();
            }
            solve(N, An);
        }
    }

    private static void solve(int N, int[] An) {
        var pizza = new ArrayList<Integer>(Arrays.asList(360));
        var now = 0;
        for (var i = 0; i < An.length(); i++) {
            while (true) {
                var piece = pizza.get(0);
            }
        }
    }

    private static void log(Object object) {
        System.out.println(object);
    }

    private static void logArray(Object[] obj) {
        System.out.println(Arrays.deepToString(obj));
    }

    private static int toInt(String str) {
        return Integer.parseInt(str);
    }
}

/**
 * よく使うコードリスト
 */
public class SampleCode {
    private static void Sample() {
        /**
         * ArrayList
         * https://docs.oracle.com/javase/jp/8/docs/api/java/util/ArrayList.html
         */
        List<Integer> arrayList = new ArrayList<Integer>();
        arrayList.indexOf(0); // indexを返却
        arrayList.sort(Comparator.naturalOrder()); // ソート
        /**
         * 配列 https://docs.oracle.com/javase/jp/8/docs/api/java/sql/Array.html
         */
    }
}