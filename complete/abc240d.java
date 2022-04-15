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
            var N = scanner.nextInt();
            List<Integer> arr = new ArrayList<Integer>();
            int consecutiveCount = 0;
            int size = 0;
            int pre = -1;
            for (var i = 0; i < N; i++) {
                var an = scanner.nextInt();
                if (an == pre) {
                    consecutiveCount++;
                    if (consecutiveCount == pre) {
                        arr.get()
                        arr.clear();
                        consecutiveCount = 1;
                    } else {
                        arr.add(an);
                        pre = an;
                    }
                } else {
                    arr.add(an);
                    size++;
                    pre = an;
                    consecutiveCount = 1;
                }
                System.out.println(size);
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