
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
import java.util.Deque;
import java.util.ArrayDeque;
/** よく使うやつを定義 */
import java.util.ArrayList;
import java.util.List;
import java.lang.Math;
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;

class Main {

    /**
     * 回答パターン
     * ・Nの1の部分だけをビット全探索をして、最後に0を特定の位置に戻して出力する
     * ・1~Nまでの2進数でNと同じ位置にある1のところだけ取り出して出力する
     * 
     * 1010 & 1011 = 1010 = 11
     * (1001) & 1011 = 1001 = 9
     * (1000) & 1011 = 1000 = 8
     * (0111) & 1011 = 0011 = 3
     */
    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            int N = scanner.nextInt();
            Deque<Integer> ans = ArrayDeque<>();
            for (int s = N;; s = (s - 1) & N) {
                ans.add(s);
                if(s == 0){
                    break;
                }
            }
            var output = String.join("¥n", ans);
            log(output);
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
