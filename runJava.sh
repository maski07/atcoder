# 標準入出力形式 (拡張子なし)
javaFile=abc206_c.java

# 実行
java $javaFile << EOS
5
1 4
2 4
3 4
4 5
EOS
if [ $# = 1 ] && [ $1 == 1 ]; then exit; fi
echo "--------"

java $javaFile << EOS
4
2 4
1 4
2 3
EOS
if [ $# = 1 ] && [ $1 == 2 ]; then  exit; fi
echo "--------"

java $javaFile << EOS
10
9 10
3 10
4 10
8 10
1 10
2 10
7 10
6 10
5 10
EOS
echo "--------"

# python $filename < input2.txt
# echo ---
# python $filename < input3.txt

