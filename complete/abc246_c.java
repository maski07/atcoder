import java.util.Scanner;
import java.lang.Math;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.ArrayList;
import java.util.function.Function;

/**
 * todo なんか間違ってるけど、わからない（アルゴリズムは問題ないはず）
 * テスト内容が公開されたら、解き直してみる。
 */
class Main {
    /**
     * 解き方①
     * 配列を降順にソート
     * 1: 上からmodを計算していく（クーポンXの全量消費できるもののみ使う）
     * 2: 残ったものでさらに降順にソート（クーポンXを使っていく）
     * 計算量：X = 10^9?
     */
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            /** 入力値の取り出し start */
            var N = scanner.nextInt();
            var K = scanner.nextInt();
            var X = scanner.nextInt();
            var An = Util.getIntegerArray(N, scanner);
            /** 入力値の取り出し end */

            Arrays.sort(An); // 昇順
            var remaining = K;
            // log(Arrays.toString(An));
            // クーポンXを全量消費できるもののみ
            for (var i = N - 1; i >= 0; i--) {
                if (remaining > 0) {
                    remaining -= Math.ceil(An[i] / X);
                    An[i] = An[i] % X; // 書き換える
                }
            }
            // クーポンXを全量消費できないもの
            // まずはソート
            Comparator<Integer> comp = new Comparator<Integer>() {
                @Override
                public int compare(Integer a, Integer b) {
                    return b - a;
                }
            };
            Arrays.sort(An, comp);
            log(Arrays.toString(An), remaining);
            var total = 0;
            for (var i = remaining; i < N; i++) {
                total += An[i];
            }
            log(total);
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

    public static class Util {
        public static Integer[] getIntegerArray(int N, Scanner scanner) {
            Function<Integer, Integer[]> get = (argN) -> {
                var arr = new Integer[argN.intValue()];
                for (var i = 0; i < argN.intValue(); i++) {
                    arr[i] = scanner.nextInt();
                }
                return arr;
            };
            return get.apply(N);
        }

        // public static int[] getIntArray(int N, Scanner scanner) {
        // Function<int, int[]> get = (argN) -> {
        // var arr = new int[argN.intValue()];
        // for (var i = 0; i < argN.intValue(); i++) {
        // arr[i] = scanner.nextInt();
        // }
        // return arr;
        // };
        // return get.apply(N);
        // }

        private static int toInt(String str) {
            return Integer.parseInt(str);
        }
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