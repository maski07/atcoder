import java.util.Scanner;
import java.lang.Math;
import java.util.Arrays;

class Main {
    private static void log(Object object) {
        System.out.println(object);
    }

    private static int toInt(String str) {
        return Integer.parseInt(str);
    }

    public static void main(String[] args) {
        try (var scanner = new Scanner(System.in)) {
            var abc = scanner.nextLine();
            solve(abc);
        }
    }

    private static void solve(String abc_str) {
        var abcs = abc_str.split("");
        var abc = Integer.parseInt(abcs[0] + abcs[1] + abcs[2]);
        var bca = Integer.parseInt(abcs[1] + abcs[2] + abcs[0]);
        var cab = Integer.parseInt(abcs[2] + abcs[0] + abcs[1]);
        log(abc + bca + cab);
    }
}