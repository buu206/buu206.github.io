# 田羽峰的个人网站

无需安装依赖的静态网站，包含产品探索、随笔、个人介绍和联系区域，适配手机与电脑。

**在线访问：[田羽峰 · AI 产品经理](https://buu206.github.io/)**

源码仓库：[buu206/buu206.github.io](https://github.com/buu206/buu206.github.io)

## 更新与发布

修改 `dist/` 中的网页文件后，提交并推送到 `main` 分支，GitHub Actions 会自动将 `dist/` 部署到 GitHub Pages。仓库中的文档和托管配置不会作为网站内容发布。

```sh
git add dist
git commit -m "Update website content"
git push origin main
```

可以在仓库的 Actions 页面查看部署进度。GitHub Pages 为公开网站，访客无需登录 ChatGPT。

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
