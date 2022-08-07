
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.function.Function;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.lang.Math;
import java.util.Map;
import java.util.HashMap;

class Main {

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var Q = scanner.nextInt();
            var max = Long.MIN_VALUE;
            var min = Long.MAX_VALUE;
            Map<Long, Long> map = new HashMap<>();
            for (var i = 0; i < Q; i++) {
                var process = scanner.nextInt();
                if (process == 1) {
                    var x = scanner.nextLong();
                    map.put(x, map.getOrDefault(x, 0L) + 1L);
                    max = Math.max(max, x);
                    min = Math.min(min, x);
                } else if (process == 2) {
                    var x = scanner.nextLong();
                    var c = scanner.nextLong();
                    var x_count = map.getOrDefault(x, -1L);
                    var deleted_count = Math.min(c, x_count);
                    var newX = x_count - deleted_count;
                    if (newX == 0 && x_count > 0) {
                        map.remove(x);
                        var keySet = map.keySet();
                        if (keySet.size() > 0) {
                            if (x == max) {
                                max = keySet.stream().mapToLong(v -> v).max().getAsLong();
                            }
                            if (x == min) {
                                min = keySet.stream().mapToLong(v -> v).min().getAsLong();
                            }
                        } else {
                            if (x == max) {
                                max = Long.MIN_VALUE;
                            }
                            if (x == min) {
                                min = Long.MAX_VALUE;
                            }
                        }
                    } else {
                        map.put(x, newX);
                    }
                } else {
                    log(max - min);
                }
            }
        }
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
