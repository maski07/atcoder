import java.util.Scanner;
import java.lang.Math;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.ArrayList;

public class Main {
    private String val;
    private int num;

    public Main(int num) {
        this.num = num;
    }

    public Main() {
        this.val = "test";
        this.num = 10;
    }

    public static void main(String[] args) {
        Main m = new Main(20);

        System.out.println(m.val + ", " + m.num);
    }
}
