export default async function handler(req, res) {
  try {
    // 1. 直接使用 fetch 的流式响应（减少内存占用）
    const response = await fetch(process.env.RECIPE_URL);
    const recipes = await response.json();
    const keyword = req.query.keyword;
    
    // 2. 使用快速匹配算法（如 startsWith 代替 includes）
    const result = recipes.find(r => r.name.startsWith(keyword));
    
    res.status(200).json(result || { error: "未找到" });
  } catch (error) {
    res.status(500).json({ error: "请求失败" });
  }
}
