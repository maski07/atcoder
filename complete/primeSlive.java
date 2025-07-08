
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;

class Main {

    public static void main(String[] args) {
        log(primeSlive(5));
        log(primeSlive(3));
        log(primeSlive(6));
        log(primeSlive(4));
        log(primeSlive(2));
        log(primeSlive(8));
        log(primeSlive(10));
        log(primeSlive(15));
        log(primeSlive(17));
        log(primeSlive(23));
        log(primeSlive(21));
    }

    private static boolean primeSlive(int num) {
        System.out.print(num + ":");
        boolean[] prime = new boolean[num + 1];
        Arrays.fill(prime, true);
        prime[0] = prime[1] = false;
        for (int i = 2; i < num; i++) {
            if (prime[i]) {
                for (int j = i + i; j <= num; j += i) {
                    prime[j] = false;
                }
            }
        }

        return prime[num];
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
}
