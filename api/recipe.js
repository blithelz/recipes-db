export default async function handler(req, res) {
  const keyword = req.query.keyword; // 从URL参数获取关键词
  try {
    const response = await fetch(process.env.RECIPE_URL);
    const recipes = await response.json();
    const result = recipes.find(r => r.name.includes(keyword));
    if (result) {
      res.status(200).json(result);
    } else {
      res.status(404).json({ error: "未找到菜谱" });
  } catch (error) {
    res.status(500).json({ error: "服务器错误" });
  }
}
