
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
import java.util.ArrayList;
import java.util.List;

class Main {

    /** ビット全探索 */
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            final int H1 = scanner.nextInt();
            final int W1 = scanner.nextInt();
            var A = new int[H1][W1];
            for (var i = 0; i < H1; i++) {
                for (var j = 0; j < W1; j++) {
                    A[i][j] = scanner.nextInt();
                }
            }
            final int H2 = scanner.nextInt();
            final int W2 = scanner.nextInt();
            var B = new int[H2][W2];
            for (var i = 0; i < H2; i++) {
                for (var j = 0; j < W2; j++) {
                    B[i][j] = scanner.nextInt();
                }
            }
            // ビット全探索
            for (var hs = 0; hs < (1 << H1); hs++) { // 縦軸用bit ex.00001 ~ 10000
                for (var ws = 0; ws < (1 << W1); ws++) { // 横軸用bit
                    List<Integer> arrh = new ArrayList<>();
                    List<Integer> arrw = new ArrayList<>();
                    // ex.01011 のような1が立っているフラグを取り出す。
                    for (var i = 0; i < H1; i++) {
                        if (((hs >> i) & 1) == 1) { // 右シフトした1桁目が1なら利用する
                            arrh.add(i); // 残す行の番号を入れる
                        }
                    }
                    for (var i = 0; i < W1; i++) {
                        if (((ws >> i) & 1) == 1) {
                            arrw.add(i);
                        }
                    }
                    if (arrh.size() != H2
                            || arrw.size() != W2) {
                        continue;
                    }
                    // log("arrh", arrh);
                    // log("arrw", arrw);
                    var found = true;
                    for (var i = 0; i < H2; i++) {
                        var h = arrh.get(i);
                        for (var j = 0; j < W2; j++) {
                            var w = arrw.get(j);
                            // log(h, w);
                            if (A[h][w] != B[i][j]) {
                                found = false;
                            }
                        }
                    }
                    if (found) {
                        log("Yes");
                        return;
                    }
                }
            }
            log("No");
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
