# ヒアドュメント形式
filename=abc122_c.py

python3 $filename << EOS
8 3
ACACTACG
3 7
2 3
1 8
EOS
# exit
echo ---
python3 $filename << EOS
8
7 3 5 4 2 1 6 8
3 8 2 5 4 6 7 1
EOS


# 補足 
# sh実行時のargsを読み取って実行する方法もある
# for arg in "$@"; do
#     echo "file:". ${arg}
#     python3 200.py < ${arg}
# done

# 再度ときたい問題
# abc065_C問題 (全探索)

