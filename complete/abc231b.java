import java.util.Scanner;
import java.lang.Math;
import java.util.HashMap;
import java.util.Map;

class Main {
    public static void main(String[] args) {
        var scanner = new Scanner(System.in);
        var N = scanner.nextInt();
        Map<String, Integer> map = new HashMap<>();
        for (var i = 0; i < N; i++) {
            var name = scanner.next();
            map.put(name, map.containsKey(name) ? map.get(name) + 1 : 1);
        }
        var ansName = "none";
        var ansValue = 0;
        for (Map.Entry<String, Integer> entry : map.entrySet()) {
            var name = entry.getKey();
            var count = entry.getValue();
            if (count > ansValue) {
                ansValue = count;
                ansName = name;
            }
        }
        System.out.println(ansName);
    }
}