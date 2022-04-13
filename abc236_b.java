import java.util.Scanner;
import java.lang.Math;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.ArrayList;

class Main {
    private static void log(Object object) {
        System.out.println(object);
    }

    private static int toInt(String str) {
        return Integer.parseInt(str);
    }

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            int N = scanner.nextInt();
            int[] tmp = new int[N];
            final int cardNum = 4;
            for (int i = 0; i < N * cardNum - 1; i++) {
                int number = scanner.nextInt();
                tmp[number - 1]++;
            }
            for (int i = 0; i < N; i++) {
                if (tmp[i] < cardNum) {
                    System.out.println(i + 1);
                    break;
                }
            }
        }
    }
}
