import java.util.Scanner;
import java.lang.Math;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.ArrayList;

/**
 * R G B
 * 何回動かしたら求める形になるのか？の最小回数を求める。
 * 
 * 6パターン
 * R G B 2
 * R B G 1
 * B R G
 * B G R
 * G R B
 * G B R
 * 10^18
 * 
 */
class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            var allNumber = 2 * N + 1;
            var allNumbers = new int[allNumber + 1];
            allNumbers[1] = 1;
            log(1);
            var i = 2;
            while (i <= allNumber) {
                var aoki = scanner.nextInt();
                if (aoki == 0) {
                    break;
                } else {
                    allNumbers[aoki] = 1; // 利用済
                }
                if (allNumbers[i] == 0) {
                    System.out.println(i);
                    allNumbers[i] = 1;
                    i++;
                } else {
                    while (allNumbers[i] == 1) {
                        allNumbers[i] = 1;
                        i++;
                    }
                    System.out.println(i);
                    allNumbers[i] = 1;
                }
                System.out.flush();
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
