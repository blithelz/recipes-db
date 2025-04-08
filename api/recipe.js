export default async function handler(req, res) {
  try {
    console.log("API 请求触发，关键词：", req.query.keyword);
    const response = await fetch(process.env.RECIPE_URL);
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const recipes = await response.json();
    const result = recipes.find(r => r.name.includes(req.query.keyword));
    res.status(200).json(result || { error: "未找到菜谱" });
  } catch (error) {
    console.error("服务器错误：", error);
    res.status(500).json({ error: "系统异常，请稍后再试" });
  }
}
