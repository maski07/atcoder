# ヒアドュメント形式
filename=abc079.py

python3 $filename << EOS
1222
EOS
echo ---
python3 $filename << EOS
0290
EOS
echo ---
python3 $filename << EOS
3242 
EOS



# 補足 
# sh実行時のargsを読み取って実行する方法もある
# for arg in "$@"; do
#     echo "file:". ${arg}
#     python3 200.py < ${arg}
# done

# 再度ときたい問題
# abc065_C問題 (全探索)

