import java.util.*;

class Main {
    public static void main(String[] $) {
        Scanner s = new Scanner(System.in);
        int n = s.nextInt(), m = s.nextInt();
        long[] dp = new long[100001];
        Arrays.fill(dp, 1, 100001, Long.MAX_VALUE);
        for (int q = 0; q < n; ++q) {
            int w = s.nextInt(), v = s.nextInt();
            for (int i = 100000; i >= v; --i) {
                // System.out.println(Arrays.toString(new Object[] { dp[i], dp[i - w], w }));
                if (dp[i - v] != Long.MAX_VALUE) {
                    if (v == 30) {
                        System.out.println(Arrays.toString(new Object[] { i, v, w, dp[i], dp[i - w], dp[i - v] }));
                    }
                    dp[i] = Math.min(dp[i], dp[i - v] + w);
                    if (v == 30) {
                        System.out.println(dp[i]);
                    }
                }
            }
        }
        for (int i = 100000; i >= 0; --i) {
            if (dp[i] <= m) {
                System.out.println(i);
                return;
            }
        }
    }
}
