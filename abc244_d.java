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
            var S1 = scanner.next();
            var S2 = scanner.next();
            var S3 = scanner.next();
            var T1 = scanner.next();
            var T2 = scanner.next();
            var T3 = scanner.next();
            var T = plus(T1, T2, T3);
            if (plus(S1, S2, S3).equals(T)
                    || plus(S2, S3, S1).equals(T)
                    || plus(S3, S1, S2).equals(T)) {
                log("Yes");
            } else {
                log("No");
            }
        }
    }

    private static String plus(String a, String b, String c) {
        return a + b + c;
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