
/** サンプルコード */
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.Arrays;

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
        arrayList.sort(Comparator.naturalOrder());// ソート
        // ArrayList -> 配列への変換
        // https://docs.oracle.com/javase/jp/8/docs/api/java/sql/Array.html
        Integer[] placeArray = arrayList.toArray(new Integer[target.size()]);

        /**
         * Arrays
         */
        // ソート
        var N = 100;
        var arr = new int[N][2];
        Arrays.sort(arr, new Comparator<int[]>() {
            public int compare(int[] a, int[] b) {
                if (a[0] == b[0]) {
                    return a[1] - b[1];
                } else {
                    return a[0] - b[0];
                }
            }
        });
    }

    private static int lower_bound(List<Integer> array, int key) {
        return ~Collections.binarySearch(array, key, (x, y) -> x.compareTo(y) >= 0 ? 1 : -1);
    }

    private static int upper_bound(List<Integer> array, int key) {
        return ~Collections.binarySearch(array, key, (x, y) -> x.compareTo(y) > 0 ? 1 : -1);
    }

    public static class AtCoder {
        /**
         * 素数の取得（エラストテネスの篩)
         */
        public static List<Integer> getPrime(int N) {
            var noPrimes = new boolean[N + 1];
            List<Integer> primes = new ArrayList<>();
            for (var i = 2; i <= N; i++) {
                var noPrime = noPrimes[i];
                if (!noPrime) {
                    primes.add(i);
                    for (var j = 2; j * i <= N; j++) {
                        noPrimes[i * j] = true;
                    }
                }
            }
            return primes;
        }

        /**
         * 最大公約数（ユークリッドの互除法）
         */
        private static long gcd(long a, long b) {
            long temp;
            long c = a;
            c *= b;
            while ((temp = a % b) != 0) {
                a = b;
                b = temp;
            }
            return (long) b;
        }

        /**
         * 最小公倍数
         */
        private static long lcm(long a, long b) {
            return (long) gcd(a, b) / (a * b);
        }
    }
}