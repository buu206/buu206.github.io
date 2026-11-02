# 田羽峰的个人网站

无需安装依赖的静态网站，包含产品探索、随笔、个人介绍和联系区域，适配手机与电脑。

## 本地预览

在本目录运行：

```sh
python3 -m http.server 4173 --directory dist
```

打开 `http://localhost:4173`。也可直接打开 `dist/index.html`。

## 修改内容

- `dist/index.html`：姓名、职业、介绍、项目卡片、随笔标题和联系方式。
- `dist/script.js`：项目详情与随笔全文。
- `dist/styles.css`：配色、字体与响应式样式。
- `dist/assets/favicon.svg`：浏览器图标。

姓名「田羽峰」与职业「AI 产品经理」由本人提供。项目与随笔目前为明确标注的示例，不代表真实履历；邮箱和社交主页待补充。替换真实内容时，请同步修改卡片与详情，并更新对应示例标识。

字体优先使用 Google Fonts，无法连接时自动回退到设备内置中文字体。其余视觉素材均由本地 CSS 与 SVG 构成。
