# ヒアドュメント形式
filename=abcpra.py

python3 $filename << EOS
?tc????
coder
EOS

echo ---
python3 $filename << EOS
??p??d??
abc
EOS



# 補足 
# sh実行時のargsを読み取って実行する方法もある
# for arg in "$@"; do
#     echo "file:". ${arg}
#     python3 200.py < ${arg}
# done

# 再度ときたい問題
# abc065_C問題 (全探索)

