import java.util.Scanner;
import java.lang.Math;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.ArrayList;

class Main {
    public static void main(String[] args) {
        char c = 'b';
        int i = 0;
        int n = 'c' | 'd';
        System.out.println(n);
        System.out.println(Character.getNumericValue(c));
        switch (c) {
            case 'a':
                i++;
            case 'e':
                i++;
                break;
            case 'f':
                i++;
                break;
            case 'b':
                i++;
            case 'c' | 'd':
                // System.out.print("なぜとおる？");
                i++;
            default:
                System.out.println(c);
        }
        System.out.println(i);
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