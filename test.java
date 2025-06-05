
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
import java.util.Collections;
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
import java.util.Date;
import java.util.regex.Pattern;

class Main {

    public static void main(String[] args) {
        var input = "aaa,1.111,2025,aaa;bb,2.22,2022,ccc";
        var res = Arrays.stream(input.split(";")).map(x -> {
            var arr = x.split(",");
            return new Car(arr[0], Double.parseDouble(arr[1]), Integer.parseInt(arr[2]), arr[3]);
        })
                .filter(x -> x.manufacturedYear >= 2015)
                .sorted((a, b) -> b.price.compareTo(a.price))
                .map(x -> x.blandName)
                .toArray();
        log(res);
    }

    public static void main8(String[] args) {
        List<String> words = Arrays.asList(
                "apple", "banana", "apple", "orange", "banana", "grape", "melon");
        var res = words.stream()
                .collect(Collectors.groupingBy(x -> x, Collectors.counting()))
                .entrySet()
                .stream()
                .filter(x -> x.getValue() > 1)
                .map(Map.Entry::getKey)
                .collect(Collectors.toList());

        log(res);
    }

    public static void main7(String[] args) {
        List<Integer> nums = Arrays.asList(1, 23, 456, 7890, 12, 9, 1000);
        Map<Integer, List<Integer>> res = nums.stream()
                .collect(Collectors.groupingBy(
                        x -> Integer.toString(x).length()));
        log(res);
    }

    public static void main6(String[] args) {
        List<Integer> nums = Arrays.asList(1, 2, 3, 4, 5, 6, 7);
        Map<Integer, Long> res = nums.stream()
                .collect(Collectors.groupingBy(x -> x % 3, Collectors.counting()));
        log(res);
    }

    public static void main5(String[] args) {
        List<String> words = Arrays.asList(
                "Apple", "banana", "apple", "Banana", "BANANA", "orange");
        Map<String, Long> res = words.stream()
                .map(String::toLowerCase)
                .collect(Collectors.groupingBy(x -> x, Collectors.counting()));

        log(res);
    }

    public static void main4(String[] args) {
        List<String> sentences = Arrays.asList(
                "The quick brown fox",
                "jumps over the lazy dog");
        List<String> res = sentences.stream()
                .flatMap(x -> Arrays.asList(x.split(" ")).stream())
                .sorted()
                .collect(Collectors.toList());
        log(res);
        // log(sentences.stream().sorted().collect(Collectors.toList()));
        // sentences.stream().sorted().forEach(System.out::println);
        List<String> res2 = sentences.stream()
                .flatMap(Pattern.compile("¥¥ ")::splitAsStream)
                .sorted()
                .collect(Collectors.toList());
        log(res2);
    }

    public static void main3(String[] args) {
        List<Integer> input = Arrays.asList(1, 3, 5, 8, 9);
        int res = input.stream().filter(x -> x % 2 == 0).findFirst().orElse(-1);
        // res.ifPresent(System.out::println);

        log(res != -1 ? res : Optional.empty());
    }

    public static void main2(String[] args) {
        List<String> input = Arrays.asList("banana", "ball", "apple", "ant", "cat", "");
        log(input);
        Map<String, List<String>> res = input.stream()
                .filter(x -> x != null && !x.isEmpty())
                .collect(Collectors.groupingBy(x -> x.substring(0)));
        // log(res);

        Collections.sort(input, (x, y) -> {
            return x == null || x.isEmpty() ? 1 : x.compareTo(y);
        });
        // log(input);
        Collections.sort(input);
        log(input);
        Collections.reverse(input); // reverse order
        log(input);
        Collections.sort(input, Collections.reverseOrder()); // descending order
        log(input);

        input.stream().collect(Collectors.groupingBy(x -> x.split("")[0]));
    }

    public static void main1(String[] args) {
        List<String> input = Arrays.asList("Banana", "Apple", "Avocado", "Cherry", "apricot", null, "");

        var res = input.stream()
                .filter(x -> x != null && x.startsWith("A"))
                .collect(Collectors.toList());
        log(res);
    }

    private static void log(Object object) {
        System.out.println(object);
    }

    private static void log(Object... object) {
        System.out.println(Arrays.toString(object));
    }
}

class Car {
    // This should be getter. do it later
    public String blandName;
    public Double price;
    public int manufacturedYear;
    public String carType;

    public Car(String blandName, Double price, int manufacturedYear, String carType) {
        this.blandName = blandName;
        this.price = price;
        this.manufacturedYear = manufacturedYear;
        this.carType = carType;
    }
}
