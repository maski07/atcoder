
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
/** よく使うやつを定義 */
import java.util.ArrayList;
import java.util.List;
import java.lang.Math;
import java.util.Set;
import java.util.function.Function;
import java.util.HashSet;
import java.util.Iterator;
import java.util.Map;
import java.util.HashMap;

// https://www.ambitionbox.com/interviews/aristocrat-interview-questions?page=3

class Main {
    public static class Node<T> {
        public Node<T> left;
        public Node<T> right;
        public T val;

        public Node(T val) {
            this(val, null, null);
        }

        public Node(T val, Node<T> left, Node<T> right) {
            this.val = val;
            this.left = left;
            this.right = right;
        }
    }

    public static Node<Integer> sumTreeConverstion(Node<Integer> root) {
        if (root == null || root.val == -1) {
            return new Node(0);
        }
        // log("root.val:" + root.val);
        Node<Integer> left = sumTreeConverstion(root.left);
        Node<Integer> right = sumTreeConverstion(root.right);
        root.val = root.val + left.val + right.val;

        return root;
    }

    public static Node<Integer> sumTreeConverstion1(Node<Integer> root) {
        if (root == null || root.val == -1) {
            return null;
        }
        // log("root.val:" + root.val);
        Node<Integer> left = sumTreeConverstion(root.left);
        Node<Integer> right = sumTreeConverstion(root.right);

        int currVal = 0;
        if (root.left != null) {
            currVal += root.left.val;
            // System.out.print("root.left.val: " + root.left.val);
        }
        if (root.right != null) {
            currVal += root.right.val;
            // System.out.print(",root.right.val: " + root.right.val);
        }
        // System.out.println(",currVal: " + currVal);
        Node<Integer> curr = new Node(currVal, left, right);

        return curr;
    }

    public static void getValuesFromTree(Node<Integer> root, List<Integer> list) {
        if (root == null || root.val == -1) {
            return;
        }
        list.add(root.val);
        sumTreeConverstion(root.left);
        sumTreeConverstion(root.right);
    }

    public static void outputAllNode(Node<Integer> root) {
        if (root == null || root.val == -1) {
            return;
        }
        log(root.val);
        outputAllNode(root.left);
        outputAllNode(root.right);
    }

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        Node<Integer> root = buildTree(splitWords(scanner.nextLine()).iterator(), Integer::parseInt);
        scanner.close();
        log("--- input start");
        outputAllNode(root);
        log("--- input end");
        Node<Integer> res = sumTreeConverstion(root);
        outputAllNode(res);
    }

    public static <T> Node<T> buildTree(Iterator<String> iter, Function<String, T> f) {
        String val = iter.next();
        if (val.equals("x"))
            return null;
        // log("buildTree val:" + val);
        Node<T> left = buildTree(iter, f);
        Node<T> right = buildTree(iter, f);
        return new Node<T>(f.apply(val), left, right);
    }

    public static List<String> splitWords(String s) {
        return s.isEmpty() ? List.of() : Arrays.asList(s.split(" "));
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
