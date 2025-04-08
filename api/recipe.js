export default async function handler(req, res) {
  const keyword = req.query.keyword;
  try {
    const response = await fetch(process.env.RECIPE_URL); // 依赖环境变量
    if (!response.ok) throw new Error("GitHub数据获取失败");
    const recipes = await response.json();
    const result = recipes.find(r => r.name.includes(keyword));
    res.status(200).json(result || { error: "未找到菜谱" });
  } catch (error) {
    res.status(500).json({ error: "服务器错误：" + error.message });
  }
}
