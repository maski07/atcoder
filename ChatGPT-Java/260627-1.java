
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.ArrayDeque;
/** よく使うやつを定義 */
import java.util.ArrayList;
import java.util.List;
import java.lang.Math;
import java.lang.StackWalker.Option;
import java.math.BigDecimal;
import java.util.Set;
import java.util.HashSet;
import java.util.Map;
import java.util.Optional;
import java.util.PriorityQueue;
import java.util.Queue;
import java.util.HashMap;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.Date;
import java.util.regex.Pattern;

class Main {
    /**
     * https://chatgpt.com/c/685f0b48-4330-8013-a000-e922f04f9a0c
     * Top 10 Java Stream API Coding Questions for your next interview
     */
    public static void main1(String[] args) {
        String[] input = { "apple", "banana", "kiwi", "strawberry", "pear" };
        String result = Collections.max(
                List.of(input),
                Comparator.comparingInt(x -> x.length()));
        log(result);
    }

    /**
     * Question 2: Filter and Sort Even Numbers
     * Barclays in London
     */
    public static void main(String[] args) {
        int[] input = { 5, 3, 8, 2, 1, 4, 6, 7 };
        int[] res = Arrays.stream(input)
                .filter(x -> x % 2 == 0).sorted().toArray();
        System.out.println(Arrays.toString(res));
    }

    /**
     * 
     */
    public static void mainTmp(String[] args) {

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
