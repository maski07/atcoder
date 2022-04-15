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
            var a = scanner.nextInt();
            var b = scanner.nextInt();
            if (a == b + 1
                    || a + 1 == b
                    || (a == 10 && b == 1)
                    || (a == 1 && b == 10)) {
                log("Yes");
            } else {
                log("No");
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