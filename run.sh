# ヒアドュメント形式
filename=abc173_c.py

python3 $filename << EOS
4
2 2 1 3
EOS
exit
echo ---
python3 $filename << EOS
7
1 1 1 1 1 1 1
EOS


# 補足 
# sh実行時のargsを読み取って実行する方法もある
# for arg in "$@"; do
#     echo "file:". ${arg}
#     python3 200.py < ${arg}
# done

