# ヒアドキュメント形式
filename=200.py
python3 $filename << EOS
a b
EOS
python3 $filename << EOS
a b
EOS
python3 $filename << EOS
a b
EOS

# 補足 
# sh実行時のargsを読み取って実行する方法もある！！
# for arg in "$@"; do
#     echo "file:". ${arg}
#     python3 200.py < ${arg}
# done