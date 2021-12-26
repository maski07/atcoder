# 標準入出力形式 (拡張子なし)
filename=200

javaFile=$filename + ".java"
classFile=$filename + ".class"

# コンパイル
javac $javaFile $classFile

# 実行
java $javaFile <  << EOS
46979
EOS
echo "--------"

java $javaFile <  << EOS
46979
EOS
echo "--------"

java $javaFile <  << EOS
46979
EOS

# コンパイルクラス削除
delete $classFile

# python $filename < input2.txt
# echo ---
# python $filename < input3.txt

