# ヒアドュメント形式
filename=abc196.py

python3 $filename << EOS
33
EOS
if [ $# = 1 ] && [ $1 == 1 ]; then exit; fi
echo "--------"
ython3 $filename << EOS
1333
EOS
if [ $# = 1 ] && [ $1 == 2 ]; then  exit; fi
echo "--------"
python3 $filename << EOS
10000000
EOS
if [ $# = 1 ] && [ $1 == 3 ]; then  exit; fi
echo "--------"
python3 $filename << EOS
3 200
200 100
350 
100 1
EOS

# 入力を外だしして見やすくしたい
# 第1引数は、1ならテストケース1だけを出力させたい