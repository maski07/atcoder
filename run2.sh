# ヒアドュメント形式
filename=abcpra.py

python3 $filename << EOS
3 4 9 0
EOS
echo ---

python3 $filename << EOS
3 4 10 40
EOS
echo ---


# 補足 
# sh実行時のargsを読み取って実行する方法もある！！
# for arg in "$@"; do
#     echo "file:". ${arg}
#     python3 200.py < ${arg}
# done