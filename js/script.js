// 定义异步函数，在按钮点击后调用 Python 函数
async function callPythonFunc() {
  const outputArea = document.getElementById("output");

  // 如果 pyodide 尚未加载，循环等待直到加载完成
  while (typeof window.pyodide === "undefined") {
    await new Promise((resolve) => setTimeout(resolve, 100));
  }

  // 获取用户输入的经纬度
  const lat = document.getElementById("lat").value;
  const lon = document.getElementById("lon").value;

  // 构造要执行的 Python 代码（注意：传入的字符串中不应有多余的引号）
  const pythonCode = `
calculate_moon_events('${lat}', '${lon}')
`;

  try {
    // 异步执行 Python 函数
    const result = await window.pyodide.runPythonAsync(pythonCode);
    outputArea.textContent = result;
  } catch (error) {
    outputArea.textContent = "调用 Python 函数出错：" + error;
  }
}

// DOM 加载完成后绑定点击事件
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("calc");
  if (btn) {
    btn.addEventListener("click", callPythonFunc);
  }
});
