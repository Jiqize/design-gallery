# Swiss Research Design System

> **一套"瑞士国际主义 + 研究备忘录"风格的 Markdown→HTML 设计系统。**
> 适用于:调研报告、技术文档、设计稿交付、长篇决策性内容。
> 起源:2026-08 办公 Agent 三家对比调研。

---

## 0. 设计哲学

- **黑白优先**:90% 内容用纯黑/白/灰,1 个强调色(蜜黄)承担全部视觉重量
- **栅格至死**:所有元素对齐到 8/12/24/48 px 网格,绝不"差不多对齐"
- **数字说话**:所有可量化信息带编号,序号零填充(`01` `02` `13`)
- **克制字体**:仅用 1 个无衬线字体族,字号阶梯不超过 8 级
- **留白即内容**:信息密度由留白控制,不是堆字
- **可打印**:任何页面在浏览器打印时输出可读结果

---

## 1. 设计 Tokens

### 1.1 颜色

```css
:root {
  --bg:       #ffffff;   /* 纯白底 */
  --fg:       #000000;   /* 纯黑文字 */
  --muted:    #6b6b6b;   /* 次级文字 */
  --accent:   #fde047;   /* 蜜黄 — 唯一强调色 */
  --line:     #000000;   /* 黑色分隔线 */
  --grid-line:#f0f0f0;  /* 浅灰分隔线 */
}
```

**色比**:
- 黑/白/灰 占 95% 视觉面积
- 蜜黄 占 5%,**仅用于**:当前章节标记 / 关键词高亮 / hover 状态 / 强调数字
- **禁用**:渐变、阴影、圆角 > 6px

### 1.2 字号阶梯(10 级,基于 16px root)

| Token | px | rem | 用途 |
|-------|----|----|------|
| `fs-3xl` | 96 | 6.0 | Hero 大标题(只在首页用) |
| `fs-2xl` | 48 | 3.0 | 文档主标题 `<h1>` |
| `fs-xl` | 32 | 2.0 | 大幅引用 / KPI 数字 |
| `fs-lg` | 22 | 1.4 | Hero 副标题 / Deck |
| `fs-md` | 18 | 1.125 | 正文段落 |
| `fs-base` | 16 | 1.0 | 默认正文字号 |
| `fs-sm` | 13 | 0.8 | 目录条目 / 元信息 |
| `fs-xs` | 11 | 0.7 | 大写小字标签 / uppercase |
| `fs-2xs` | 9 | 0.55 | 最小辅文(几乎不用) |

**字重阶梯**:
- `400` 正文中等
- `700` 强调文字 / 表格头 / 标签
- `900` Hero 标题 / 编号 / 大数字

**字距**:
- 正文 `letter-spacing: 0`
- 全大写标签 `letter-spacing: 0.15-0.25em`(如 `RESEARCH`、`2026 / 08 / 11`)
- 大标题负字距 `letter-spacing: -0.03 ~ -0.05em`

### 1.3 间距系统(8 倍数)

```
4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 · 128
```

**布局最大宽度**:`max-width: 1400px`(内容区)+ `padding: 0 60px`

**阅读宽度**(正文段落):`max-width: 760px`

### 1.4 字体族

```css
font-family: "Helvetica Neue", -apple-system,
             "PingFang SC", "Hiragino Sans GB", sans-serif;
```

**中文环境**:回退到苹方/冬青黑(无衬线)。**避免宋体**——Swiss 风格与衬线字体冲突。

### 1.5 分隔线规则

| 类型 | 样式 | 用途 |
|------|------|------|
| **粗黑线** | `2-6px solid var(--line)` | 顶部 hero / 主区域 / 章节 |
| **细黑线** | `1px solid var(--line)` | 表格 / 段落 / 内部分隔 |
| **浅灰线** | `1px solid var(--grid-line)` | 目录条目 / 表格行间 |
| **虚线** | `1px dashed var(--grid-line)` | 二级条目 / 分隔线 `<hr>` |

---

## 2. 栅格布局

### 2.1 三段式网格(整个文档)

```
┌──────────────────────────────────────────────────────────┐
│  HEADER.hero   (max-width: 1400px, padding: 0 60px)    │
│  ┌─────────┬────────────────────────────────────────┐   │
│  │ ref编号  │   body 内容                             │   │
│  │ (200px)  │   (1fr)                                 │   │
│  └─────────┴────────────────────────────────────────┘   │
├──────────────────────────────────────────────────────────┤
│  LAYOUT  (max-width: 1400px, padding: 40px 60px)        │
│  ┌─────────┬────────────────────────────────────────┐   │
│  │ aside   │   main                                  │   │
│  │ (280px) │   (1fr, max-width 760px 内容)         │   │
│  │ TOC     │                                         │   │
│  └─────────┴────────────────────────────────────────┘   │
└──────────────────────────────────────────────────────────┘
```

### 2.2 断点

| 断点 | 行为 |
|------|------|
| `>= 900px` | 两列(aside + main);hero 双列 |
| `< 900px` | 单列堆叠;hero 双行(ref 在上,body 在下) |
| `@media print` | 隐藏 aside,内容单列;深色变浅 |

---

## 3. 组件库

### 3.1 HERO 头部(每个文档的开头)

**结构**:
```html
<header class="hero">
  <div class="ref">
    <div class="id">003</div>           <!-- 文档编号,88px 巨字 -->
    <div class="kind">                   <!-- 类别 + 日期 + 版本 -->
      <b>RESEARCH</b>2026 / 08 / 11<br>v.1.0
    </div>
  </div>
  <div class="body">
    <div class="pre">
      <span>Comparative Analysis</span>   <!-- 副标签,每项前有 3px 色条 -->
      <span>Internal · 60 seats</span>
    </div>
    <h1>
      <span class="a">办公</span>
      <span class="b">Agent</span>        <!-- b 类:蜜黄背景凸起 -->
      <span class="a">三家对比</span>
    </h1>
    <div class="deck">面向 60 席位...</div> <!-- 一句话副标题 -->
    <div class="strip">                    <!-- 4 列关键信息条 -->
      <div><span class="k">Subject</span><span class="v">三个产品</span></div>
      <div><span class="k">Decision</span><span class="v">推荐 X</span></div>
      ...
    </div>
  </div>
</header>
```
**要点**:
- 顶部 **6px 粗黑线** 作为视觉锚点(`::before` 伪元素)
- **左侧 ref 区**(固定 200px):
  - `.id` 是 88px 大数字,字距 -0.06em,下方接 36px 蜜黄粗短线 (`::after` 伪元素)
  - `.kind` 类别 + 日期 + 版本号,大写小字 + 顶部 1px 黑线分隔
- **右侧 body 区**(1fr):
  - `.pre` 副标签:每项前有 3px 黑色色条(`::before` 伪元素),首项色条变蜜黄
  - 标题字号 **96px**,`display: flex; align-items: baseline` 保证中文/英文/数字 baseline 对齐,`flex-wrap: wrap` 窄屏自动换行
  - `.b` 类(高亮词)用蜜黄背景框 + `padding: 0 14px` + 微上移 4px(`top: -4px`)制造视觉层次
  - `.deck` 副标题 17px,行高 1.55,最大宽 640px,**margin-bottom: 36px** 给 strip 留呼吸空间
- **底部 `.strip` 4 列卡片化**(`gap: 1px; background: var(--line)` 制造分隔线):
  - 每个单元格 `background: #fff` 反衬背景色形成 1px 黑色分隔
  - `.k` 标签前有 **4×4 蜜黄小方块**(`::before` 伪元素)分类标记
  - `.v` 主值 14px bold + `<small>` block 显示副值(独占一行,不被挤压)
  - `min-width: 0; word-break: break-word` 防止长中文标签撑爆

### 3.2 TOC 侧栏

**结构**:
```html
<aside class="toc">
  <div class="toc-head">目录 · Index</div>  <!-- 大写小字 + 蜜黄 8x8 方块 -->
  <nav><ul><li><ul><li><a>...</a></li></ul></li></ul></nav>
</aside>
```

**要点**:
- `position: sticky; top: 24px`(吸顶)
- 每个目录项前 **24x24 黑底白字编号方块**(active 时变蜜黄)
- hover 时整个链接向右平移 6px
- active 项左侧有 **8x8 黑色实心方块**标记
- 浅灰细线分隔条目
- 自定义滚动条:4px 窄 + 灰色 thumb

### 3.3 标题层级

| 元素 | 样式 | 用途 |
|------|------|------|
| `<h1>` | 48px / weight 900 / 负字距 | 文档标题(只用一个) |
| `<h2>` | 25px / weight 700 / uppercase / 1px 底边线 / 自动前置 `01` 编号 | 顶级章节 |
| `<h3>` | 18px / weight 700 / 3px 左侧色条 + 14px 缩进 | 二级章节 |
| `<h4>` | 13px / weight 700 / uppercase / letter-spacing 0.12em / 灰色 | 辅助标题(几乎不用) |

**自动编号**(`<h2>`):
```js
document.querySelectorAll('main h2').forEach((h, i) => {
  const num = document.createElement('span');
  num.className = 'num';
  num.textContent = String(i + 1).padStart(2, '0');
  h.insertBefore(num, h.firstChild);
});
```

CSS:
```css
main h2 { display: flex; align-items: baseline; gap: 16px; }
main h2 .num {
  font-size: .6em; background: var(--line); color: #fff;
  padding: 4px 10px; min-width: 48px; text-align: center;
  font-variant-numeric: tabular-nums;
}
```

### 3.4 段落与文字

```css
main p { font-size: 18px; line-height: 1.55; max-width: 760px; margin: 0 0 16px; }
main blockquote {
  border-left: 4px solid var(--accent);
  background: #fafafa;
  padding: 10px 18px;
  color: var(--muted);
}
main ul li { padding-left: 4px; }
main ul li::marker { color: var(--line); }
main strong { font-weight: 700; }
main em { color: var(--muted); font-style: italic; }
```

**规则**:
- 段落最大宽度 760px(单屏约 80 字符,最佳可读)
- 引用块左侧 4px 蜜黄条 + 浅灰背景
- 列表标记符号用黑色(`marker` 伪元素)

### 3.5 表格(关键组件)

```css
main table {
  border-collapse: collapse;
  width: 100%;
  border-top: 2px solid var(--line);
  border-bottom: 2px solid var(--line);
}
main th {
  font-size: .75em; text-transform: uppercase; letter-spacing: .06em;
  border-bottom: 2px solid var(--line);
  background: #fafafa;
}
main td { padding: 14px 12px; border-bottom: 1px solid var(--grid-line); }
main tbody tr:nth-child(even) td { background: #fafafa; }
main tbody tr:hover td { background: var(--accent); color: #000; }
main td:first-child { font-weight: 600; }  /* 首列加粗作为标签 */
```

**规则**:
- 上下加粗黑线,**不放外边框**(Swiss 经典)
- 表头全大写小字 + 浅灰底
- **隔行 zebra**(偶数行 `#fafafa`)
- **整行 hover** 变蜜黄(强调"这是可读的数据")
- 首列加粗,作为行标签

### 3.6 代码

```css
main code {
  background: #f5f5f5; padding: 2px 6px;
  font-family: "Menlo", "SF Mono", "Courier New", monospace;
  font-size: .85em; border: 1px solid #ececec;
}
main pre {
  background: #000; color: #fff; padding: 24px;
  font-size: .82em; line-height: 1.55; max-width: 760px;
}
main pre code { background: transparent; border: none; padding: 0; }
```

**规则**:
- 行内代码:浅灰底 + 极细边框 + 等宽字体
- 代码块:黑底白字,**无圆角**,直边矩形
- 代码块不超出 760px 阅读宽度

### 3.7 STRIP 卡片化(hero 底部信息条)

**结构**:
```html
<div class="strip">
  <div>
    <span class="k">Subject</span>
    <span class="v">WorkBuddy · TRAE Work · 千问办公
      <small>三个产品</small>
    </span>
  </div>
  <div><span class="k">Decision</span><span class="v">WorkBuddy SaaS<small>3-yr TCO ~¥50 万</small></span></div>
  <div><span class="k">Focus</span><span class="v">办公自动化<small>+ 数据分析</small></span></div>
  <div><span class="k">Scope</span><span class="v">生态 · HTML 部署 · TCO</span></div>
</div>
```

**CSS**(关键技术:`gap: 1px` 制造分隔线):
```css
header.hero .strip{
  display:grid;grid-template-columns:repeat(4,1fr);gap:1px;
  background:var(--line);border-top:1px solid var(--line);margin-top:auto;
}
header.hero .strip > div{
  background:#fff;padding:14px 16px;
  display:flex;flex-direction:column;gap:8px;min-width:0;
}
header.hero .strip .k{
  font-size:10px;font-weight:700;letter-spacing:.2em;text-transform:uppercase;color:var(--muted);
  display:flex;align-items:center;gap:6px;
}
header.hero .strip .k::before{content:"";width:4px;height:4px;background:var(--accent);flex-shrink:0}
header.hero .strip .v{font-size:14px;font-weight:700;color:#000;line-height:1.4;word-break:break-word}
header.hero .strip .v small{
  display:block;font-weight:400;color:var(--muted);font-size:11px;
  margin-top:4px;letter-spacing:0;line-height:1.4;word-break:break-word;
}
```

**要点**:
- **关键技巧**:`gap: 1px; background: var(--line)` + 子元素 `background: #fff` — 用父背景色当分隔线,无需 `border-right`,避免半格宽 bug
- `<small>` **必须 `display: block`**,否则在窄列里会 inline 挤在主文字旁导致文字重叠
- `min-width: 0` 是 grid 子元素收缩所必需(默认 `min-width: auto` 会阻止收缩)
- `word-break: break-word` 处理长中文标签(如"WorkBuddy · TRAE Work · 千问办公")自动换行

---


### 3.8 图片 / 图表样式

文档中的图片(截图、示意图、数据图)是 Swiss 风格的延伸——保持几何精确、留白克制、不装饰。

#### 3.8.1 HTML 结构

```html
<!-- 普通截图 -->
<figure class="shot">
  <img src="screenshots/dashboard.png" alt="WorkBuddy 主界面截图">
  <figcaption>WorkBuddy 主界面 · 任务面板</figcaption>
</figure>

<!-- 多图网格(对比场景) -->
<div class="grid">
  <figure class="shot"><img src="a.png" alt=""><figcaption>方案 A</figcaption></figure>
  <figure class="shot"><img src="b.png" alt=""><figcaption>方案 B</figcaption></figure>
  <figure class="shot"><img src="c.png" alt=""><figcaption>方案 C</figcaption></figure>
</div>

<!-- 数据图(伪 SVG / Canvas / 真实截图) -->
<figure class="chart">
  <img src="chart-tco.png" alt="3 家 3 年 TCO 对比柱状图">
  <figcaption>60 席位 × 36 月 TCO 对比(单位:万元)</figcaption>
</figure>
```

#### 3.8.2 CSS

```css
/* === 图片 figure 通用 === */
figure{margin:32px 0;max-width:760px}
figure img{
  display:block;width:100%;height:auto;
  border:1px solid var(--line);
  background:#fafafa;
}
figcaption{
  font-size:11px;letter-spacing:.06em;text-transform:uppercase;
  color:var(--muted);font-weight:700;
  margin-top:10px;padding-top:10px;
  border-top:1px solid var(--line);
}

/* === 单图(可加 border 强调) === */
figure.shot img{
  border:2px solid var(--line);
}

/* === 屏幕截图(加底色 + 细灰边,模拟浏览器窗口) === */
figure.screen img{
  background:#fff;
  border:1px solid var(--grid-line);
  box-shadow:0 1px 0 var(--line);  /* 仅 1px 阴影,绝不加深 */
}

/* === 多图网格(对比) === */
.grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin:32px 0;max-width:760px}
.grid figure{margin:0}
.grid img{height:160px;object-fit:cover;object-position:top}

/* === 数据图(图宽 + 居中 + 加粗) === */
figure.chart{
  background:#fff;border:2px solid var(--line);
  padding:24px;margin:40px 0;
}
figure.chart img{border:none}
figure.chart figcaption{margin-top:20px;text-align:right}

/* === 数据可视化(色块风格 — 柱状图) === */
figure.bars{display:flex;align-items:flex-end;gap:12px;height:240px;
  padding:0 16px;border-bottom:2px solid var(--line);
  max-width:760px;margin:48px 0 56px;
}
figure.bars .bar{
  flex:1;background:var(--line);position:relative;
  transition:background .2s;min-height:1px;
}
figure.bars .bar:hover{background:var(--accent)}
figure.bars .bar::after{
  content:attr(data-label);position:absolute;bottom:-48px;left:50%;
  transform:translateX(-50%);font-size:11px;
  letter-spacing:.06em;text-transform:uppercase;font-weight:700;color:var(--fg);
  white-space:nowrap;line-height:1.3;
}
figure.bars .bar .v{
  position:absolute;top:-26px;left:50%;transform:translateX(-50%);
  font-size:14px;font-weight:700;color:#000;
}
/* 柱状图状态修饰类(v1.3) */
figure.bars .bar.warn{background:var(--accent);outline:2px solid var(--line);outline-offset:-2px}
figure.bars .bar.warn::before{content:"AVOID";position:absolute;top:-46px;left:50%;transform:translateX(-50%);font-size:9px;letter-spacing:.15em;font-weight:900;color:#000;background:#fff;border:1px solid var(--line);padding:2px 6px}
figure.bars .bar.warn:hover{background:#fef9c3}
figure.bars .bar.ok{background:var(--accent)}
figure.bars .bar.ok:hover{background:#fef9c3}
```

#### 3.8.3 配色规则(数据图用色)

| 用途 | 颜色 | 用法 |
|------|------|------|
| 主数据柱/线 | `#000000` (黑) | 默认主体 |
| 强调(被推荐方 / 当前项) | `#fde047` (蜜黄) | 高亮 1 项 |
| 背景 / 次要参考 | `#fafafa` 或 `#f0f0f0` | 非重点数据 |
| 文字 / 数值 | `#000000` (黑) | 数据标签 |
| 辅助轴 / 网格 | `#f0f0f0` (浅灰) | 1px 细线 |

**禁用**:
- 渐变色数据柱(`#000 → #aaa`)
- 多色数据(每个数据点不同颜色,除非真在表达分类)
- 饼图(几乎所有场景都不需要)
- 3D 效果 / 阴影 / 圆角
- emoji 图标代替数据

#### 3.8.4 引用图片的方式

**优先**:截图(PNG) — 真实、可验证、不会因渲染问题变形

**其次**:纯 CSS 柱状 / 折线 / 表格 — 报告里数据图用 `<figure class="bars">` 内联 CSS 柱状图更轻

**避免**:
- 嵌入大型 SVG(导出 PDF 时可能出问题)
- 嵌入外部图片 URL(打印 / 离线时失效)
- 用 mermaid / echarts 渲染依赖 JS 的图(打印失效)

**Markdown 用 pandoc 转 HTML 时**:
```bash
pandoc input.md -o output.html --standalone --embed-resources
# 配合 --embed-resources 嵌入图片为 base64,生成单文件可分享 HTML
```

#### 3.8.5 要点

- **必有边框**:所有 `<img>` 默认 `border: 1px solid var(--line)`(强对比),截图类用 `2px`,数据图用 `2px`+padding 包裹
- **必有 caption**:`<figcaption>` 大写小字 + 顶部 1px 黑线,与正文段落明确分离
- **最大宽度 760px**:与正文同宽,避免图比文宽造成视觉跳跃
- **多图必用网格**:`.grid` 三等分 + 16px gap,横向对比场景(方案 A/B/C,前后版本对比等)
- **数据图必有数值标签**:柱子顶部或数据点旁显示原始数字,不依赖 Y 轴刻度
- **可打印**:图片在 `@media print` 下不裁切(`page-break-inside: avoid`)

```css
@media print{
  figure{page-break-inside:avoid}
  figure img{max-width:100%}
}
```

---
## 4. 滚动高亮交互

```js
// 侧栏目录跟随滚动高亮当前章节
const links = document.querySelectorAll('aside.toc a[href^="#"]');
const targets = Array.from(links).map(a => {
  const id = a.getAttribute('href').slice(1);
  return { link: a, target: document.getElementById(id) };
}).filter(x => x.target);

function update() {
  const y = window.scrollY + 200;
  let cur = null;
  for (const t of targets) {
    if (t.target.offsetTop <= y) cur = t;
  }
  links.forEach(a => a.classList.remove('active'));
  if (cur) cur.link.classList.add('active');
}
window.addEventListener('scroll', update, { passive: true });
update();
```

**CSS**:
```css
html { scroll-behavior: smooth; }
aside.toc a.active .num { background: var(--accent); color: #000; }
aside.toc a.active { font-weight: 700; }
aside.toc a.active::before {
  content: ""; position: absolute; left: -16px; top: 50%;
  transform: translateY(-50%); width: 8px; height: 8px;
  background: var(--line);
}
```

---

## 5. 转换工具链

### 5.1 Markdown → HTML 一键脚本

```bash
# 1. 用 pandoc 生成带 TOC 的 HTML 骨架
pandoc input.md -o output.html \
  --standalone \
  --embed-resources \
  --metadata title="文档标题" \
  --toc --toc-depth=2

# 2. 注入 Swiss 风格 CSS 替换 <style>...</style>
# 3. 在 <body> 后注入 <header class="hero"> + <div class="layout">
# 4. 把 pandoc 生成的 <nav id="TOC"> 包进 <aside class="toc">
# 5. 在 <body> 末尾注入滚动高亮 JS
```

### 5.2 工作流 checklist

新建一个 Swiss 风文档时:
- [ ] 准备 markdown(每章用 `##` 二级标题)
- [ ] pandoc 生成 HTML 骨架
- [ ] 注入 CSS(可直接复制本文档的 tokens)
- [ ] 写 hero 头部(ref + pre + h1 + deck + strip)
- [ ] 把 pandoc TOC 包进 `<aside class="toc">`
- [ ] 正文放进 `<main>`
- [ ] 注入滚动高亮 + 自动编号 JS
- [ ] 浏览器打开检查
- [ ] 调整字号 / 间距到满意

### 5.3 pandoc 必加参数

```bash
pandoc input.md -o output.html \
  --standalone \            # 生成完整 HTML
  --embed-resources \       # 内嵌 CSS/图片
  --toc --toc-depth=2 \     # 生成 TOC,二级深度
  --metadata title="..."    # <title> 标签
```

---

## 6. 反模式(禁止做这些)

| ❌ 禁止 | 理由 |
|---------|------|
| 圆角 > 6px | Swiss 风格要求直边 |
| 阴影 / 渐变背景 | 文档不需要"卡片感" |
| 多种强调色 | 只用蜜黄 |
| 衬线字体 | 与 Swiss 调性冲突 |
| emoji 作装饰 | 用编号、表格、方块代替 |
| 全大写正文 | 仅用于 `<h4>`、`.k`、标签 |
| 字号 > 96px | 96px 是 hero 上限 |
| 居中对齐正文 | 全部左对齐 + max-width 760px |
| emoji 图标作列表 marker | 留空或用 `›` `▸` 这种极简字符 |
| 表格加外边框 | 上下粗线即可,左右不要 |

---

## 7. 验收 checklist

完成一份 Swiss 风文档时,逐项确认:

- [ ] 整页只有 5 种颜色:白 / 黑 / 浅灰 / 中灰 / 蜜黄
- [ ] 字号不超过 8 级
- [ ] Hero 顶部 6px 粗黑线
- [ ] Hero 标题单行 baseline 对齐
- [ ] TOC 侧栏吸顶 + 当前章节蜜黄高亮
- [ ] 每个 H2 有 `01`-`13` 编号方块
- [ ] 表格首列加粗,隔行 zebra,hover 变蜜黄
- [ ] 段落最大宽度 760px
- [ ] 引用块左侧 4px 蜜黄条
- [ ] 代码块黑底白字无圆角
- [ ] 打印时侧栏隐藏
- [ ] < 900px 自动单列堆叠

---

## 8. 复用模板(可复制)

把以下 HTML 复制到任何 markdown 文档的开头,即可获得 Swiss 风:

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<title>文档标题</title>
<style>:root{--bg:#ffffff;--fg:#000000;--muted:#6b6b6b;--accent:#fde047;--line:#000;--grid-line:#f0f0f0}
*{box-sizing:border-box}html{scroll-behavior:smooth}
body{margin:0;font-family:"Helvetica Neue",-apple-system,"PingFang SC",sans-serif;background:var(--bg);color:var(--fg);line-height:1.55}
/* 此处粘贴 1-4 章所有 CSS */
</style>
</head>
<body>
<header class="hero">
  <!-- 粘贴 3.1 的 hero 结构 -->
</header>
<div class="layout">
<aside class="toc">
  <!-- 粘贴 3.2 的 TOC 结构 -->
</aside>
<main>
  <!-- 这里放 pandoc 生成的主内容 -->
</main>
</div>
<script>
  /* 粘贴 3.3 / 4 的 JS */
</script>
</body>
</html>
```

---

- **v1.0** — 2026-08-11 起源:办公 Agent 三家对比调研,首次定义全部 token 与 7 个组件
- **v1.1** — 2026-08-11 新增 §3.7 STRIP 卡片化(hero 底部信息条),记录 `gap: 1px` 背景线分隔 + `<small>` block 显示副值技巧,修复 strip 中 DECISION/FOCUS/SCOPE 标题与值文字重叠的 bug
- **v1.2** — 2026-08-11 新增 §3.8 图片/图表样式,提供 figure / grid / chart / bars 四种 HTML 结构与完整 CSS,定义数据图配色规则(黑主色 + 蜜黄强调),说明 pandoc --embed-resources 嵌入 base64 实现单文件 HTML
- **v1.3** — 2026-08-11 全组件精修批次:H2 字号 25→30px 层级更清,H3 左侧色条换蜜黄,行内 `<code>` 加蜜黄下划线(背景透明),表格首列加 4px 蜜黄小色块(Swiss 经典标记),`<figcaption>` 加 `<span class="hl">` 关键标签胶囊;柱状图加 `.warn`(蜜黄 + AVOID 徽章)和 `.ok`(蜜黄)状态修饰类
- 维护:任何调整先更新本 design.md,再应用到具体文档
- 复用原则:**新文档继承所有 token 和组件规则**,特例需在 design.md 增补章节