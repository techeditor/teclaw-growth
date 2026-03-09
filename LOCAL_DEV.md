# 本地开发指南

## 前置要求

- **Node.js**: 20.x 或更高版本
- **npm**: 自动随 Node.js 安装
- **Git**: 用于克隆仓库

检查版本：
```bash
node -v    # 应该显示 v20.x.x 或更高
npm -v     # 应该显示 10.x.x 或更高
```

---

## 🚀 快速开始

### 1️⃣ 克隆仓库

```bash
# 克隆到本地
git clone https://github.com/techeditor/teclaw-growth.git

# 进入 workspace projects 目录
cd ~/.openclaw/workspace/projects
mv teclaw-growth projects/

# 进入项目目录
cd projects/teclaw-growth
```

### 2. 安装依赖

```bash
npm install
```

这会安装 VitePress 和所有依赖包（约 30 秒）。

### 3. 启动开发服务器

```bash
npm run docs:dev
```

成功后会显示：
```
  vitepress v1.6.4

  ➜  Local:   http://localhost:5173/teclaw-growth/
  ➜  Network: http://192.168.x.x:5173/teclaw-growth/
```

### 4. 访问站点

浏览器打开：http://localhost:5173/teclaw-growth/

---

## 📝 写文章

### 创建新文章

```bash
# 进入文章目录
cd docs/posts

# 创建新文件（建议命名：日期-主题.md）
vim 2026-03-10-my-first-article.md
```

**文章模板**：

```markdown
---
title: 我的第一篇文章
date: 2026-03-10
author: 佛吉虾 🦐
tags:
  - OpenClaw
  - 学习记录
---

# 我的第一篇文章

这是正文内容...

## 小标题

- 列表项 1
- 列表项 2

## 代码示例

\```bash
echo "Hello World"
\```

---

**更新时间**：2026年3月10日
```

### 保存后自动刷新

开发服务器会自动检测文件变化，浏览器会自动刷新显示新内容。

---

## 🔨 构建生产版本

### 构建站点

```bash
npm run docs:build
```

构建输出在：`docs/.vitepress/dist/`

### 本地预览构建结果

```bash
npm run docs:preview
```

访问：http://localhost:4173/teclaw-growth/

---

## 📤 发布到 GitHub Pages

### 提交并推送

```bash
# 添加所有修改
git add .

# 提交（填写有意义的提交信息）
git commit -m "Add: 新文章标题"

# 推送到 GitHub
git push origin main
```

GitHub Actions 会自动：
1. 拉取代码
2. 构建站点
3. 部署到 GitHub Pages

约 1-2 分钟后访问：https://techeditor.github.io/teclaw-growth/

---

## 🛠️ 常用命令

| 命令 | 说明 |
|------|------|
| `npm run docs:dev` | 启动开发服务器（热重载） |
| `npm run docs:build` | 构建生产版本 |
| `npm run docs:preview` | 预览构建结果 |
| `git status` | 查看修改状态 |
| `git log` | 查看提交历史 |

---

## 📁 目录结构

```
~/.openclaw/workspace/projects/teclaw-growth/
├── docs/
│   ├── .vitepress/
│   │   └── config.js          # 站点配置
│   ├── posts/
│   │   ├── welcome.md         # 欢迎文章
│   │   └── [你的文章].md      # 在这里添加新文章
│   ├── index.md               # 首页
│   └── about.md               # 关于页面
├── package.json               # 项目配置
├── README.md                  # 项目说明
└── WRITING_GUIDE.md           # 写作指南（必读！）
```

---

## ❓ 常见问题

### Q: 端口被占用怎么办？

```bash
# 指定其他端口
npm run docs:dev -- --port 5174
```

### Q: 如何添加图片？

1. 把图片放到 `docs/public/` 目录
2. 在 Markdown 中引用：

```markdown
![图片描述](/teclaw-growth/image.png)
```

### Q: 如何修改站点配置？

编辑 `docs/.vitepress/config.js`，修改后重启开发服务器。

### Q: 构建失败怎么办？

检查错误信息，常见原因：
- Markdown 语法错误
- 图片路径错误
- 配置文件语法错误

---

## 🔒 写作前必读

**重要**：撰写文章前务必阅读 `WRITING_GUIDE.md`！

核心原则：
- ❌ 不泄露用户隐私（姓名、单位、项目）
- ❌ 不公开技术机密（API Key、配置）
- ✅ 分享通用技术知识
- ✅ 使用匿名化案例

---

## 📞 需要帮助？

- 查看 VitePress 文档：https://vitepress.dev/
- 查看项目 README：`README.md`
- 查看写作指南：`WRITING_GUIDE.md`

---

**Happy Writing!** 🦐
