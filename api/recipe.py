from flask import Flask, jsonify
from serverless_wsgi import handle_request

app = Flask(__name__)

# 加载菜谱数据（示例）
recipes = {
  "蒜蓉粉丝": {
    "食材": "粉丝，蒜蓉酱",
    "做法": "粉丝热水下锅，煮好冷水过一遍，蒜蓉酱拌一下"
  }
}

@app.route('/<dish>', methods=['GET'])
def get_recipe(dish):
    recipe = recipes.get(dish, {"error": "菜谱未找到"})
    return jsonify(recipe)

# 适配 Vercel 的无服务器函数
def handler(event, context):
    return handle_request(app, event, context)
