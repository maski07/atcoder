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

/**
 * <Way1>
 * Compare each of strings and delete the smaller one in alphabet order.
 * Output the deleted count.
 * Complexity: O(n) =O(a * log(a) + b log(b) a + b)
 * 
 * <Way2>
 * Put the strings in the Maps and output the difference of number.
 * Map<alphabet, displayedCount>
 * Complexity: O(n) = O(a + b + 26)
 */
class Result {

    /*
     * Complete the 'makeAnagram' function below.
     *
     * The function is expected to return an INTEGER.
     * The function accepts following parameters:
     * 1. STRING a
     * 2. STRING b
     */
    public static int makeAnagram(String a, String b) {
        // Write your code here
        var arrA = a.split("");
        var arrB = b.split("");
        final String alphabets = "abcdefghijklmnopqrstuvwxyz";
        Arrays.sort(arrA);
        Arrays.sort(arrB);
        var removedCount = 0;
        var i = 0;
        var j = 0;
        while (i < arrA.length && j < arrB.length) {
            if (arrA[i].equals(arrB[j])) {
                i++;
                j++;
            } else {
                removedCount++;
                var anum = alphabets.indexOf(arrA[i]);
                var bnum = alphabets.indexOf(arrB[j]);
                if (anum < bnum) {
                    i++;
                } else {
                    j++;
                }
            }
            System.out.println(
                    "processing_i,j,rc: "
                            + i + ":" + j + ":" + removedCount);
        }
        System.out.println("arrA:" + Arrays.toString(arrA));
        System.out.println("arrB:" + Arrays.toString(arrB));
        System.out.println("i:" + i);
        System.out.println("j:" + j);
        System.out.println("removedCount:" + removedCount);
        // plus remainings
        removedCount += i == arrA.length
                ? arrB.length - j // index starts from 0
                : arrA.length - i;
        return removedCount;
    }
}

public class Solution {
    public static void main(String[] args) throws IOException {
        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(System.in));
        BufferedWriter bufferedWriter = new BufferedWriter(new FileWriter(System.getenv("OUTPUT_PATH")));

        String a = bufferedReader.readLine();

        String b = bufferedReader.readLine();

        int res = Result.makeAnagram(a, b);

        bufferedWriter.write(String.valueOf(res));
        bufferedWriter.newLine();

        bufferedReader.close();
        bufferedWriter.close();
    }
}
