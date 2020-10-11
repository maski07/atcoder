# ヒアドュメント形式
filename=abc174_d_re.py

python3 $filename << EOS
3 3
1 7
3 2
1 7
EOS
# if 0 == 0 ; then 
# exit 
# fi
exit
python3 $filename << EOS
3 2
2 1
2 3
EOS
echo ---
python3 $filename << EOS
3 1
1 0
EOS


# 補足 
# sh実行時のargsを読み取って実行する方法もある
# for arg in "$@"; do
#     echo "file:". ${arg}
#     python3 200.py < ${arg}
# done
