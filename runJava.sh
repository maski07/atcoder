# 標準入出力形式 (拡張子なし)
javaFile=abc232_b2.java

# 実行
java $javaFile << EOS
abc
ijk
EOS
if [ $# = 1 ] && [ $1 == 1 ]; then exit; fi
echo "--------"

java $javaFile << EOS
a
z
EOS
if [ $# = 1 ] && [ $1 == 2 ]; then  exit; fi
echo "--------"

java $javaFile << EOS
qqp
ppq
EOS
echo "--------"

java $javaFile << EOS
atcoder
atcoder
EOS

# python $filename < input2.txt
# echo ---
# python $filename < input3.txt

