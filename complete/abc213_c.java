
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Set;
import java.util.function.Function;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
/** よく使うやつを定義 */
import java.lang.Math;
import java.util.Map;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Collections;

/**
 * アルゴリズム：座標圧縮
 */
class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var H = scanner.nextInt();
            var W = scanner.nextInt();
            var N = scanner.nextInt();
            var ABn_origin = new int[N][2];
            for (var i = 0; i < N; i++) {
                ABn_origin[i] = Util.getIntArray(2, scanner);
            }
            var ABn = ABn_origin.clone();
            var lenABn = ABn.length;
            Map<Integer, Integer> compressionA = new HashMap<>();
            Map<Integer, Integer> compressionB = new HashMap<>();

            // 重複を削除しないといけない。
            Set<Integer> setB = new HashSet<>();
            for (var i = 0; i < lenABn; i++) {
                setB.add(ABn[i][1]);
            }
            ArrayList<Integer> Bn = new ArrayList<>(setB);
            Collections.sort(Bn);
            for (var i = 0; i < Bn.size(); i++) {
                compressionB.put(Bn.get(i), i + 1);
            }

            // 昇順に並べ替え
            Set<Integer> setA = new HashSet<>();
            for (var i = 0; i < lenABn; i++) {
                setA.add(ABn[i][0]);
            }
            ArrayList<Integer> An = new ArrayList<>(setA);
            Collections.sort(An);
            for (var i = 0; i < An.size(); i++) {
                compressionA.put(An.get(i), i + 1);
            }

            for (var i = 0; i < lenABn; i++) {
                var A = ABn_origin[i][0];
                var B = ABn_origin[i][1];
                var outA = compressionA.get(A);
                var outB = compressionB.get(B);
                // log(A, B, outA, outB);
                System.out.print(outA);
                System.out.print(" ");
                System.out.print(outB);
                log("");
            }
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

    private static int loggedCount = 0;

    private static void timeLog(Object... obj) {
        final int logCount = 0;
        if (loggedCount <= logCount) {
            System.out.println(Arrays.toString(obj));
            loggedCount++;
        }
    }

    public static class Util {
        public static int[] getIntArray(int N, Scanner scanner) {
            Function<Integer, int[]> get = (argN) -> {
                var arr = new int[argN.intValue()];
                for (var i = 0; i < argN.intValue(); i++) {
                    arr[i] = scanner.nextInt();
                }
                return arr;
            };
            return get.apply(N);
        }

        private static int toInt(String str) {
            return Integer.parseInt(str);
        }
    }
}
