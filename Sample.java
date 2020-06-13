import java.util.*;
public class Sample{
    public static void main(String[] args) {
        String[] arr = args.split("\n")[1].split("''");
    int count = 1;
    for(int i=0; i<arr.length; i++){
        count *= arr[i];
    }
    System.out.println(count);
    }
}

// Main('2\n1000000000 1000000000')
// Main('3\n101 9901 9999990000001')
// Main('31\n4 1 5 9 2 6 5 3 5 8 9 7 9 3 2 3 8 4 6 2 6 4 3 3 8 3 2 7 9 5 0')
