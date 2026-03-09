# 佛吉虾养成记 - 博客系统方案

**GitHub 仓库**: https://github.com/techeditor/  
**项目名称**: fojixia-growth（建议）

---

## 📊 方案对比

### 方案A: GitHub Pages + Jekyll/Hugo（推荐）⭐⭐⭐⭐⭐

**优点**:
- ✅ 完全免费
- ✅ 与 GitHub 深度集成
- ✅ 自动部署（推送即发布）
- ✅ 支持自定义域名
- ✅ 版本控制天然集成
- ✅ 社区活跃，主题丰富
- ✅ Markdown 原生支持
- ✅ 无需维护服务器

**缺点**:
- ⚠️ 静态网站（无后端）
- ⚠️ 功能相对简单

**成本**: $0

**推荐理由**: 
- 最适合技术博客
- 写作流程：本地写 MD → Git push → 自动发布
- 完美契合我们的工作流程

---

### 方案B: AWS Amplify（托管静态站点）⭐⭐⭐⭐

**优点**:
- ✅ AWS 生态集成
- ✅ 自动构建和部署
- ✅ CDN 加速
- ✅ 支持 SSR（如需要）
- ✅ 自定义域名和 SSL

**缺点**:
- ⚠️ 有一定成本
- ⚠️ 配置相对复杂

**成本**: ~$1-5/月（取决于流量）

**适合**: 如果未来需要更多功能（评论、搜索等）

---

### 方案C: Medium / Dev.to（现成平台）⭐⭐⭐

**优点**:
- ✅ 零配置，立即可用
- ✅ 内置读者群体
- ✅ SEO 优化好
- ✅ 社交功能完善

**缺点**:
- ❌ 无法完全自定义
- ❌ 受平台限制
- ❌ 可能有广告
- ❌ 数据不完全归自己

**成本**: $0

**适合**: 快速开始，后续可迁移

---

### 方案D: WordPress on AWS（完全自建）⭐⭐

**优点**:
- ✅ 功能最强大
- ✅ 完全自定义
- ✅ 丰富的插件

**缺点**:
- ❌ 需要维护服务器
- ❌ 成本较高
- ❌ 复杂度高
- ❌ 需要定期更新

**成本**: ~$10-30/月（EC2 + RDS + 域名）

**不推荐**: 维护成本高，不值得

---

## 🏆 推荐方案：GitHub Pages + Jekyll

### 为什么选这个？

1. **完美适配我们的工作流**:
   ```
   写作 → Git commit → Push → 自动发布
   ```

2. **版本控制天然集成**:
   - 每次修改都有记录
   - 可以回退到任何版本
   - 审阅流程通过 Pull Request

3. **零成本、零维护**:
   - 不需要服务器
   - 不需要数据库
   - GitHub 负责托管和部署

4. **技术博客标准选择**:
   - Kubernetes、TensorFlow 等大项目都用
   - 简洁、专业

---

## 🔧 实施方案

### 步骤1: 创建仓库

**仓库名**: `techeditor/fojixia-growth`（或 `fojixia-blog`）

**结构**:
```
fojixia-growth/
├── _config.yml          # Jekyll 配置
├── _posts/              # 文章目录
│   └── 2026-03-16-dcv-vs-vnc.md
├── _layouts/            # 页面布局
├── assets/              # 图片、CSS
├── about.md             # 关于页面
└── README.md            # 项目说明
```

### 步骤2: 选择主题

**推荐主题**:

**A. Minimal Mistakes（最推荐）** ⭐⭐⭐⭐⭐
- GitHub: https://github.com/mmistakes/minimal-mistakes
- 特点: 简洁、现代、功能完整
- 支持: 代码高亮、搜索、分类、标签
- 案例: 大量技术博客使用

**B. Just the Docs（文档风格）** ⭐⭐⭐⭐
- GitHub: https://github.com/just-the-docs/just-the-docs
- 特点: 文档风格，导航清晰
- 适合: 系列文章

**C. Chirpy（现代设计）** ⭐⭐⭐⭐
- GitHub: https://github.com/cotes2020/jekyll-theme-chirpy
- 特点: 现代、暗色模式、目录树
- 适合: 技术博客

### 步骤3: 配置 GitHub Pages

**在仓库设置中**:
1. Settings → Pages
2. Source: Deploy from a branch
3. Branch: `main` / `docs` (root)
4. 保存

**自动部署**: 推送到 main 分支即自动部署

### 步骤4: 自定义域名（可选）

**如果有域名**（如 `fojixia.tech`）:
1. 在域名 DNS 添加 CNAME 记录
2. 在 GitHub Pages 设置中添加自定义域名
3. 启用 HTTPS

**没有域名**: 使用 `techeditor.github.io/fojixia-growth`

### 步骤5: 写作流程

```bash
# 1. 创建新文章
cd fojixia-growth
vim _posts/2026-03-16-dcv-vs-vnc.md

# 2. 本地预览（可选）
bundle exec jekyll serve

# 3. 提交和发布
git add .
git commit -m "publish: 远程桌面大作战：DCV vs VNC"
git push origin main

# 4. 自动部署（约1-2分钟）
# 访问 https://techeditor.github.io/fojixia-growth
```

---

## 📝 文章格式示例

**文件名**: `_posts/2026-03-16-dcv-vs-vnc.md`

**Front Matter**:
```yaml
---
layout: post
title: "远程桌面大作战：DCV vs VNC"
date: 2026-03-16 10:00:00 +0800
categories: [技术实战, 系统运维]
tags: [DCV, VNC, 远程桌面, AWS]
author: 佛吉虾
description: "记录 DCV Virtual Session 配置全过程，包括 nice-xdcv 缺失问题的发现和解决"
---

# 远程桌面大作战：DCV vs VNC

[文章正文...]
```

---

## 🚀 快速开始方案

### 方案1: 使用模板（最快）⭐⭐⭐⭐⭐

**步骤**:
1. Fork Minimal Mistakes 仓库
2. 重命名为 `fojixia-growth`
3. 修改 `_config.yml`
4. 删除示例文章
5. 添加第一篇文章
6. 启用 GitHub Pages

**时间**: 30分钟

---

### 方案2: 从零配置

**步骤**:
1. 创建空仓库
2. 安装 Jekyll 本地环境
3. 创建基础结构
4. 选择主题
5. 配置

**时间**: 2-4小时

---

## 💡 备选方案：先用 Medium，后迁移

**过渡方案**:
1. 第一批文章发布到 Medium（快速开始）
2. 同时准备 GitHub Pages
3. 1-2个月后迁移

**优点**:
- 立即可用
- 有内置读者
- 不影响后续迁移

**缺点**:
- 需要迁移工作
- 数据不完全归自己

---

## 📊 成本对比

| 方案 | 初始成本 | 月成本 | 维护成本 |
|------|---------|--------|---------|
| GitHub Pages | $0 | $0 | 极低 |
| AWS Amplify | $0 | $1-5 | 低 |
| Medium | $0 | $0 | 无 |
| WordPress on AWS | $50 | $20-30 | 高 |

---

## 🎯 最终推荐

### 推荐方案：GitHub Pages + Minimal Mistakes

**理由**:
1. **零成本** - 完全免费
2. **零维护** - GitHub 负责托管
3. **完美集成** - Git 工作流天然契合
4. **专业** - 技术博客标准选择
5. **可扩展** - 未来可以迁移到 Amplify

**行动计划**:
1. **现在**: 创建仓库 `techeditor/fojixia-growth`
2. **今天**: Fork Minimal Mistakes 模板
3. **明天**: 配置 GitHub Pages
4. **3月16日**: 发布第一篇

---

## 📚 参考资源

**GitHub Pages 文档**:
- https://pages.github.com/

**Jekyll 文档**:
- https://jekyllrb.com/

**Minimal Mistakes 主题**:
- https://mmistakes.github.io/minimal-mistakes/

**成功案例**:
- TensorFlow: https://www.tensorflow.org/
- Kubernetes: https://kubernetes.io/
- 大量个人技术博客

---

## ✅ 下一步行动

**需要张濮决定**:
1. 是否使用 GitHub Pages？
2. 是否需要自定义域名？
3. 是否现在创建仓库？

**我可以协助**:
1. 配置 GitHub Pages
2. 选择和配置主题
3. 测试发布流程
4. 编写部署文档

---

**创建时间**: 2026-03-08  
**推荐方案**: GitHub Pages + Minimal Mistakes ⭐⭐⭐⭐⭐  
**成本**: $0/月
