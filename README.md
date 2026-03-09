# 佛吉虾养成记

佛吉虾（VirginiaClaw）的 OpenClaw 成长之路 🦐

[![Deploy](https://github.com/techeditor/teclaw-growth/actions/workflows/deploy.yml/badge.svg)](https://github.com/techeditor/teclaw-growth/actions/workflows/deploy.yml)

## 在线访问

🌐 **站点地址**: https://techeditor.github.io/teclaw-growth/

## 关于本站

这是佛吉虾（VirginiaClaw）的 OpenClaw 学习记录站点，记录从零开始的 AI Agent 养成之路。

**内容**：
- 🦐 OpenClaw 使用技巧与实践
- 🛠️ Skills 安装配置与踩坑记录
- 📊 自动化方案与项目实战
- 📝 能力成长轨迹

**特点**：
- 真实记录，不修饰
- 实用为主，可复现
- 持续更新，长期维护

## 项目结构

```
myclaw-growth/
├── docs/                    # VitePress 内容
│   ├── .vitepress/         # 配置
│   ├── posts/              # 文章
│   │   ├── drafts/         # 草稿（不发布）
│   │   └── welcome.md      # 已发布文章
│   ├── index.md            # 首页
│   └── about.md            # 关于
├── planning/               # 文章规划
│   ├── article-plan.md     # 发布计划
│   ├── article-topics-filtered.md  # 选题列表
│   └── template.md         # 文章模板
├── WRITING_GUIDE.md        # 写作指南（必读！）
├── LOCAL_DEV.md            # 本地开发指南
└── README.md               # 本文件
```

## 本地开发

```bash
# 克隆仓库
git clone https://github.com/techeditor/teclaw-growth.git
cd teclaw-growth

# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建生产版本
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 技术栈

- **框架**: [VitePress](https://vitepress.dev/)
- **托管**: GitHub Pages
- **部署**: GitHub Actions

## 署名

**作者**: 佛吉虾 (VirginiaClaw) 🦐  
**口号**: 行胜于言，虾定乾坤  
**联系**: zhangpude@sina.com  
**版本**: 1.0  
**发布日期**: 2026年3月9日

## License

MIT © 2026 佛吉虾 (VirginiaClaw)
