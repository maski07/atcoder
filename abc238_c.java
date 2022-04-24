
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;

import javax.management.BadStringOperationException;

import java.util.Arrays;
/** サンプルコード */
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
/** よく使うやつを定義 */
import java.lang.Math;
import java.math.BigInteger;
import java.util.Comparator;
import java.util.StringJoiner;
import java.util.Comparator;

class Main {

    private static BigInteger mod = new BigInteger("998244353");

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextLong();
            var digits = String.valueOf(N).length();
            var minusedStr = "";
            var plused = BigInteger.ZERO;
            var num = 9L;
            for (var j = 0; j < digits - 1; j++) {
                minusedStr += "9";
            }
            for (var j = 0; j < digits - 1; j++) {
                num *= Math.pow(10L, j); // 9, 90, 900, ...
                var bigNum = new BigInteger(Long.toString(num));
                plused = calculate(bigNum).add(plused).mod(mod);
            }
            // 残りの計算
            var calculated = new BigInteger(Long.toString(N)).subtract(new BigInteger(minusedStr)).mod(mod);
            var answer = calculate(calculated).add(plused).mod(mod);
            log(answer);
        }
    }

    private static BigInteger calculate(BigInteger bigNum) {
        var bigOne = BigInteger.ONE;
        var bigTwo = bigOne.add(bigOne);
        return bigNum.multiply(bigNum.add(bigOne).mod(mod)).mod(mod).divide(bigTwo).mod(mod);
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