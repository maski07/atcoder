
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
import java.util.HashSet;
import java.util.Set;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            Set<String> uniques = new HashSet<>();
            var maxNum = -1;
            var index = -1;
            for (var i = 0; i < N; i++) {
                var S = scanner.next();
                var T = scanner.nextInt();
                if (!uniques.contains(S)) {
                    uniques.add(S);
                    if (maxNum < T) {
                        maxNum = T;
                        index = i + 1;
                    }
                }
            }
            log(index);
        }
    }

    private static void log(Object object) {
        System.out.println(object);
    }

    private static void log(Object... object) {
        System.out.println(Arrays.toString(object));
    }
}
