# 標準入出力形式 (拡張子なし)
filename=abc231b

javaFile=$filename".java"

# 実行
# java $javaFile << EOS
# 5
# snuke
# snuke
# takahashi
# takahashi
# takahashi
# EOS
# if [ $# = 1 ] && [ $1 == 1 ]; then exit; fi
# echo "--------"

# java $javaFile << EOS
# 5
# takahashi
# takahashi
# aoki
# takahashi
# snuke
# EOS
# if [ $# = 1 ] && [ $1 == 2 ]; then  exit; fi
# echo "--------"

java $javaFile << EOS
1
a
EOS

# python $filename < input2.txt
# echo ---
# python $filename < input3.txt

