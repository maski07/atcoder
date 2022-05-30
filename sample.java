
/** サンプルコード */
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

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
        // ArrayList -> 配列への変換
        Integer[] placeArray = arrayList.toArray(new Integer[target.size()]);
        /**
         * 配列 https://docs.oracle.com/javase/jp/8/docs/api/java/sql/Array.html
         */
    }

    private static int lower_bound(List<Integer> array, int key) {
        return ~Collections.binarySearch(array, key, (x, y) -> x.compareTo(y) >= 0 ? 1 : -1);
    }

    private static int upper_bound(List<Integer> array, int key) {
        return ~Collections.binarySearch(array, key, (x, y) -> x.compareTo(y) > 0 ? 1 : -1);
    }

    public static class AtCoder {
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
        public static 
    }
}