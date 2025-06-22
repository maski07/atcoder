
/** 既存メソッドで使用 */
import java.util.Scanner;
import java.util.Arrays;
import java.util.Collections;
import java.util.Comparator;
/** よく使うやつを定義 */
import java.util.ArrayList;
import java.util.List;
import java.lang.Math;
import java.sql.Timestamp;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Set;
import java.util.stream.Collector;
import java.util.stream.Collectors;
import java.util.HashSet;
import java.util.Map;
import java.util.HashMap;

class Main {
    public static void main(String[] args) {
        List<StockDetail> stockDetails = CallAPIs.callStackDetailApi();
        // Convert to Map for merging with TradingDetail Object
        Map<String, StockDetail> stockMap = stockDetails
                .stream()
                .collect(Collectors.toMap(x -> x.identifier, s -> s));
        List<TradingDetail> tradingDetails = CallAPIs.callTradingApi();
        ;
        List<Response> responses = tradingDetails.stream()
                // get data as of yesterday
                .filter(x -> x.transactionTimestamp
                        .isAfter(LocalDate.now().atStartOfDay().minusDays(1)))
                .collect(Collectors.groupingBy(x -> x.identifier))
                .entrySet()
                .stream()
                // yesterdayの最終価格とtodayの最新価格の差異を取得
                .map(x -> {
                    List<TradingDetail> tradingDetail = x.getValue();

                    // 昨日の価格がない場合（システムダウンや取引停止など）は、できればさらに前日の価格を取得するべき。
                    List<TradingDetail> onlyYesterdays = tradingDetail.stream().filter(
                            y -> y.transactionTimestamp.isBefore(LocalDate.now().atStartOfDay()))
                            .toList();

                    Long yesterdayLastPrice = 0L;
                    if (!onlyYesterdays.isEmpty()) {
                        TradingDetail yesterday = Collections.max(
                                onlyYesterdays,
                                Comparator.comparing(obj -> obj.transactionTimestamp));

                        if (yesterday != null) {
                            yesterdayLastPrice = yesterday.stockPrice;
                        }
                    }
                    Long todaysLatest = Collections.max(tradingDetail,
                            Comparator.comparing(obj -> obj.transactionTimestamp)).stockPrice;

                    Long diff = todaysLatest - yesterdayLastPrice;

                    TradingDetail result = new TradingDetail(
                            tradingDetail.stream().findFirst().get().identifier,
                            LocalDateTime.now(),
                            diff);

                    return result;
                })
                .map(x -> {
                    StockDetail stockDetail = stockMap.get(x.identifier);
                    if (stockDetail == null) {
                        return null;
                    }
                    var response = new Response(
                            stockDetail.identifier,
                            stockDetail.issuerName,
                            stockDetail.ticker,
                            stockDetail.exchangeName,
                            x.stockPrice);
                    return response;
                }).filter(x -> x != null).toList();

        answer(responses);
    }

    public static void answer(List<Response> responses) {
        for (var res : responses) {
            System.out.println(res.identifier());
            System.out.println(res.exchangeName());
            System.out.println(res.issuerName());
            System.out.println(res.stockPrice());
            System.out.println(res.ticker());
            System.out.println("---------------");
        }
    }
}

class CallAPIs {

    private CallAPIs() {
    }

    public static List<StockDetail> callStackDetailApi() {
        return StockDetail.getInstance();
    }

    public static List<TradingDetail> callTradingApi() {
        return TradingDetail.getInstance();
    }
}

record Response(
        String identifier,
        String issuerName,
        String ticker,
        String exchangeName,
        Long stockPrice) {
}

/**
 * Stock Detail API
 */
public class StockDetail {
    public String identifier;
    public String issuerName;
    public String ticker;
    public String exchangeName;

    private StockDetail() {
    }

    public static List<StockDetail> getInstance() {
        List<StockDetail> list = new ArrayList<>();

        {
            StockDetail instance = new StockDetail();
            instance.identifier = "StockA";
            instance.issuerName = "IssueeA";
            instance.ticker = "TickerA";
            instance.exchangeName = "ExchangeNameA";
            list.add(instance);
        }
        {
            StockDetail instance = new StockDetail();
            instance.identifier = "StockB";
            instance.issuerName = "IssueeB";
            instance.ticker = "TickerB";
            instance.exchangeName = "ExchangeNameB";
            list.add(instance);
        }
        {
            StockDetail instance = new StockDetail();
            instance.identifier = "StockC";
            instance.issuerName = "IssueeC";
            instance.ticker = "TickerC";
            instance.exchangeName = "ExchangeNameC";
            list.add(instance);
        }
        return list;
    }
}

/*
 * Stock Detail API
 */
class TradingDetail {
    public String identifier;
    /**
     * I shoudn't use Data and Timestam object in Java
     * - It is mutable, which can lead to unexpected side effects.
     * - It is not thread-safe.
     * - It does not represent time zones.
     */
    public LocalDateTime transactionTimestamp;
    public Long stockPrice;

    public TradingDetail() {
    }

    public TradingDetail(String identifier,
            LocalDateTime transactionTimestamp,
            Long stockPrice) {
        this.identifier = identifier;
        this.transactionTimestamp = transactionTimestamp;
        this.stockPrice = stockPrice;
    }

    public static List<TradingDetail> getInstance() {
        List<TradingDetail> list = new ArrayList<>();

        {
            TradingDetail instance = new TradingDetail();
            instance.identifier = "StockA";
            instance.transactionTimestamp = LocalDateTime.now();
            instance.stockPrice = 10000L;
            list.add(instance);
        }
        {
            TradingDetail instance = new TradingDetail();
            instance.identifier = "StockA";
            instance.transactionTimestamp = LocalDateTime.now().minusDays(0);
            instance.stockPrice = 20000L;
            list.add(instance);
        }
        {
            TradingDetail instance = new TradingDetail();
            instance.identifier = "StockB";
            instance.transactionTimestamp = LocalDateTime.now().minusDays(0);
            instance.stockPrice = 20000L;
            list.add(instance);
        }
        {
            TradingDetail instance = new TradingDetail();
            instance.identifier = "StockB";
            instance.transactionTimestamp = LocalDateTime.now().minusDays(1).minusHours(1);
            instance.stockPrice = 15000L;
            list.add(instance);
        }
        {
            TradingDetail instance = new TradingDetail();
            instance.identifier = "StockB";
            instance.transactionTimestamp = LocalDateTime.now().minusDays(1).minusHours(2);
            instance.stockPrice = 10000L;
            list.add(instance);
        }
        {
            TradingDetail instance = new TradingDetail();
            instance.identifier = "StockC";
            instance.transactionTimestamp = LocalDateTime.now().minusDays(0);
            instance.stockPrice = 10000L;
            list.add(instance);
        }
        {
            TradingDetail instance = new TradingDetail();
            instance.identifier = "StockC";
            instance.transactionTimestamp = LocalDateTime.now().minusDays(1);
            instance.stockPrice = 10000L;
            list.add(instance);
        }
        return list;
    }
}
