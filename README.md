# 田羽峰的个人网站

无需安装依赖的静态网站，包含关于我、产品探索、工具索引、文章和联系五个页面，适配手机与电脑。视觉参考用户确认的 https://ai-max2000.github.io/personal-articles-web/：浅蓝桌面、白色窗口、左侧分类导航、右侧个人卡片、蓝色交互和底部快捷搜索。

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

- `dist/index.html`：窗口结构、页面内容、个人头像、项目卡片与外部链接。
- `dist/script.js`：项目详情、随笔全文、页面切换、快捷搜索和复制链接。
- `dist/styles.css`：配色、字体与响应式样式。
- `dist/assets/`：浏览器图标与历史版本视觉素材。当前个人卡片与收起状态的小头像使用本人提供的 `tian-yufeng-avatar.jpg` 原图，裁切通过 CSS 完成。
- `VISUALS.md`：旧版 AI 配图的生成记录；当前页面不引用该图。

姓名「田羽峰」与职业「AI 产品经理」由本人提供。开源项目与概念项目按实际情况标注，文章直接跳转至本人提供的公众号链接；邮箱等其他联系方式待补充。替换真实内容时，请同步修改卡片与详情，并更新对应示例标识。

显示标题使用设备内置的宋体，正文使用本地无衬线字体。所有资源均为本地文件，无第三方字体或图片请求。页面可通过 #about、#product、#tool、#notes、#contact 直接访问；浏览器前进和后退可还原页面。按 ⌘K 或 Ctrl+K 搜索页面、文章和项目；支持方向键选择、Enter 打开、Esc 关闭。产品分类、文章摘要展开、详情阅读、侧栏收起与复制主页链接均已实现。

Landscape Sketch 项目名称、介绍及儿童游乐园日景图来自 [buu206/landscape-sketch-skill](https://github.com/buu206/landscape-sketch-skill) 的 README，图片原路径为 `docs/assets/playground-day-marker.jpg`，以 MIT License 开源；本地展示资源为 `dist/assets/landscape-sketch-day.jpg`。三篇文章均链接至本人提供的公众号原文。
