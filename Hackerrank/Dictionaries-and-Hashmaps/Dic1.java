import java.io.*;
import java.math.*;
import java.security.*;
import java.text.*;
import java.util.*;
import java.util.concurrent.*;
import java.util.function.*;
import java.util.regex.*;
import java.util.stream.*;
import static java.util.stream.Collectors.joining;
import static java.util.stream.Collectors.toList;

class Result {

    /*
     * Complete the 'checkMagazine' function below.
     *
     * The function accepts following parameters:
     * 1. STRING_ARRAY magazine
     * 2. STRING_ARRAY note
     */
    public static void checkMagazine(List<String> magazine, List<String> note) {
        Map<String, Integer> haveToUse = new HashMap<>();
        // Write your code here
        note.forEach(word -> {
            if (haveToUse.containsKey(word)) {
                haveToUse.put(word, haveToUse.get(word) + 1);
            } else {
                haveToUse.put(word, 1);
            }
        });
        magazine.forEach(word -> {
            if (haveToUse.containsKey(word.toString())) {
                haveToUse.put(word, haveToUse.get(word) - 1);
            }
        });
        for (Map.Entry<String, Integer> value : haveToUse.entrySet()) {
            if (value.getValue() > 0) {
                System.out.println("No");
                return;
            }
        }
        System.out.println("Yes");
    }

    /**
     * Terminated due to timeout[Test case 11]
     */
    public static void checkMagazine1(List<String> magazine, List<String> note) {
        // Write your code here
        magazine.forEach(value -> {
            var index = note.indexOf(value);
            if (index != -1) {
                note.remove(index);
            }
        });
        if (note.size() > 0) {
            System.out.println("No");
        } else {
            System.out.println("Yes");
        }
    }
}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));

        String[] firstMultipleInput = bufferedReader.readLine().replaceAll("\\s+$", "").split(" ");

        int m = Integer.parseInt(firstMultipleInput[0]);

        int n = Integer.parseInt(firstMultipleInput[1]);

        List<String> magazine = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                .collect(toList());

        List<String> note = Stream.of(bufferedReader.readLine().replaceAll("\\s+$", "").split(" "))
                .collect(toList());

        Result.checkMagazine(magazine, note);

        bufferedReader.close();
    }
}
