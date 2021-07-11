# ヒアドュメント形式
filename=$1

node $filename + 3030
node $filename + << EOS
46979
EOS
node $filename  << EOS
46979
EOS
# if [ $# = 1 ] && [ $1 == 1 ]; then exit; fi
# echo "--------"
# ython3 $filename << EOS
# 1333
# EOS
# if [ $# = 1 ] && [ $1 == 2 ]; then  exit; fi
# echo "--------"
# python3 $filename << EOS
# 10000000
# EOS
# if [ $# = 1 ] && [ $1 == 3 ]; then  exit; fi
# echo "--------"
# python3 $filename << EOS
# 3 200
# 200 100
# 350 
# 100 1
# EOS

# 入力を外だしして見やすくしたい
# 第1引数は、1ならテストケース1だけを出力させたい

# 補足 
# sh実行時のargsを読み取って実行する方法もある
# for arg in "$@"; do
#     echo "file:". ${arg}
#     python3 200.py < ${arg}
# done

# 再度ときたい問題
# abc065_C問題 (全探索)

