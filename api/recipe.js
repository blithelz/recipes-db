export default async function handler(req, res) {
  console.log("API 请求已触发"); // 强制输出日志
  try {
    const keyword = req.query.keyword;
    console.log("用户输入的关键词：", keyword); // 记录用户输入
    const response = await fetch(process.env.RECIPE_URL);
    console.log("GitHub 数据请求完成，状态码：", response.status);
    // ... 其他代码
  } catch (error) {
    console.error("服务器错误：", error); // 记录错误
    res.status(500).json({ error: "系统错误" });
  }
}
