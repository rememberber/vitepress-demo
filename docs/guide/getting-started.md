# 快速开始

## 安装

创建一个新的 VitePress 站点非常简单。首先，创建并进入一个新目录：

```bash
mkdir my-docs
cd my-docs
```

然后初始化项目：

```bash
npm init
npm install -D vitepress
```

## 目录结构

推荐的目录结构如下：

```
.
├── docs
│   ├── .vitepress
│   │   └── config.ts
│   ├── guide
│   │   ├── index.md
│   │   └── getting-started.md
│   └── index.md
└── package.json
```

## 开发

启动开发服务器：

```bash
npm run docs:dev
```

构建生产版本：

```bash
npm run docs:build
```