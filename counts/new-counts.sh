###
 # @Author: Tina Huang
 # @Date: 2024-08-01 14:35:36
 # @LastEditors: Tina Huang
 # @LastEditTime: 2024-08-01 14:57:22
 # @Description: 
### 

echo "目标的文件名：$1，目标模版名为：$2";
echo "创建新的模版统计组件....";
cp count-template-kn.html count-template-$1.html
sed -i '' "s/个人知识库体系 · 第二大脑/$2/g" count-template-$1.html

echo "创建成功！";