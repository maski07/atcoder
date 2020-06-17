# ヒアドュメント形式
filename=200.py

python3 $filename << EOS
X Y 
Z A
EOS
echo ---

python3 $filename << EOS
B C
D E
EOS
echo ---


# 補足 
# sh実行時のargsを読み取って実行する方法もある！！
# for arg in "$@"; do
#     echo "file:". ${arg}
#     python3 200.py < ${arg}
# done