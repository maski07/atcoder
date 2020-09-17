# ヒアドュメント形式
filename=abc159_d.py

python3 $filename << EOS
5
1 1 2 1 2
EOS
# exit
echo ---
python3 $filename << EOS
4
1 2 3 4
EOS
exit
echo ---
python3 $filename << EOS
5
3 3 3 3 3
EOS
echo ---
python3 $filename << EOS
8
1 2 1 4 2 1 4 1
EOS


# 補足 
# sh実行時のargsを読み取って実行する方法もある
# for arg in "$@"; do
#     echo "file:". ${arg}
#     python3 200.py < ${arg}
# done
