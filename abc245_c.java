import java.util.Scanner;
import java.lang.Math;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.function.Function;

class Main {
    private static int Amemo;
    private static int Bmemo;
    private static int K;
    private static boolean answer = false;

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var N = scanner.nextInt();
            K = scanner.nextInt();
            var An = Util.getArray(N, scanner);
            var Bn = Util.getArray(N, scanner);
            Amemo = An[0];
            Bmemo = Bn[0];
            for (var i = 1; i < N; i++) {
                dfs(An[i], Bn[i]);
                if (Amemo == -1 && Bmemo == -1) {
                    log("No");
                    return;
                }
            }
            log("Yes");
        }
    }

    private static void dfs(int An, int Bn) {
        int Acheck = -1;
        int Bcheck = -1;
        // log(Amemo, Bmemo, An, Bn);
        if (Amemo != -1 && Math.abs(Amemo - An) <= K
                || Bmemo != -1 && Math.abs(Bmemo - An) <= K) {
            Acheck = An;
        }
        if (Amemo != -1 && Math.abs(Amemo - Bn) <= K
                || Bmemo != -1 && Math.abs(Bmemo - Bn) <= K) {
            Bcheck = Bn;
        }
        Amemo = Acheck;
        Bmemo = Bcheck;
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

    public static class Util {
        public static int[] getArray(int N, Scanner scanner) {
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
