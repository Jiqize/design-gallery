# ELLE 杂志风数据报告 · 设计系统

> 这是一份**可复用的设计规范**。任何 agent 在生成中文数据复盘报告(单文件 HTML)
> 都可以引用本文档落地视觉风格,而不必从零重新设计。
> 当前主范例:`length-analysis.html`(26 春连衣裙 · 衣长维度分析)。

---

## 1. 核心理念

**杂志专栏 / 编辑稿,而非数据看板。**

数据复盘的视觉气质不是"卡片堆叠的信息面板",也不是"科技感仪表盘",
而是一份**有主编、有专栏作者、有章节节奏的编辑稿**。
读者翻阅时应当感到:这是一份认真做过的复盘,
每一个数字都被摆放在它该有的位置上,并被一句编辑判断所诠释。

具体落地为六条原则:

| 原则 | 含义 | 反例(避免) |
|---|---|---|
| **编辑感** | 像杂志专栏,有标题、副标题、lede 导语、pull quote | 像 Bootstrap admin 模板 |
| **红白对比** | 红色做强语义(强调、警示、增长),黑色做正文,米白做底 | 多色相、彩色卡片、渐变背景 |
| **衬线主导** | 大标题用衬线 italic,数据小字用 sans,反差构成层级 | 全文 sans-serif |
| **数字即文案** | 关键数字用 Playfair Display 衬线大字呈现,不是普通粗体 | 数字塞在小表格里 |
| **留白克制** | 章节之间大量空白,留白节奏本身就是版式 | 把页面塞满 |
| **结构对称** | 章节编号、masthead、footer 收尾形成三段式框架 | 每章风格都不一样 |

---

## 2. 调色板(Red & White Editorial)

### 2.1 角色定义

| Token | HEX | 角色 | 使用场景 |
|---|---|---|---|
| `--red` | `#C8102E` | 主红 · The Red | 强调、关键数字、增长、警示、章节数字、chip 高亮 |
| `--red-deep` | `#8B0A1F` | 深红 · Hover / 锚 | 链接 hover、印刷感加深 |
| `--red-soft` | `#FCE7EA` | 浅红 · Background | 极少数需红底的弱背景块 |
| `--ink` | `#0A0A0A` | 墨色 · 正文 | 主标题、表格首列、规则线 |
| `--ink-2` | `#2A2A2A` | 次墨 · 正文 | 段落正文 |
| `--ink-3` | `#6B6B6B` | 灰墨 · 辅助 | caption、单位、表头小字 |
| `--ink-4` | `#9E9E9E` | 浅灰 · 占位 | 极少用,仅低优先级 hint |
| `--paper` | `#FFFFFF` | 白纸 · 背景 | 默认页面背景 |
| `--paper-warm` | `#FBF8F3` | 暖纸 · 卡片底 | observation 块、表格 hover |
| `--rule` | `#E5E1DA` | 规则线 | 表格行间分割 |
| `--rule-soft` | `#F0EBE1` | 弱规则线 | 二级表格行间 |

### 2.2 红白配的纪律

- **红不能滥用**。一个章节里红色高亮(数字 / chip / 标题 italic)控制在 3 处以内。
- **黑白是主语**。标题、表格数字、规则线全部用墨色或纯黑,红色是点睛。
- **永远不要**用红色做大面积背景色块。除非是 chip / badge / 数字高亮。
- **红色 + 衬线 italic** 是最强组合(`em` 标签用 Cormorant Garamond italic,颜色给 red)。

### 2.3 反例(不要做)

- ❌ 用 `#FF6B6B` 亮粉红 — 破坏杂志感
- ❌ 用红色做 hover 背景
- ❌ 红色 + 绿色上下箭头表示涨/跌 — 用红色 + 灰色即可,红色只强调"故事主角"
- ❌ 加渐变色 — 这是平面印刷物的气质,不是 web app

---

## 3. 字体系统(Serif Lead)

### 3.1 字体角色

| 角色 | 字体 | 字重 | 用途 |
|---|---|---|---|
| **Display Serif** | `Playfair Display` | 700–900 | 封面大标题、关键数字、章节数字 |
| **Display Italic** | `Cormorant Garamond` | 500 italic | 强调 italic(`em` 标签) |
| **Title Serif CN** | `Noto Serif SC` | 700–900 | 二级中文标题、表格首列、首字下沉 |
| **Body Sans** | `Inter` | 400–600 | 数据小字、表头、caption、meta |
| **Body Sans CN** | `Noto Sans SC` | 400–700 | 中文正文辅助(用于表格中文) |

### 3.2 字号阶梯

```
封面主标题:     120–140 px  (英文 Playfair 900,中文 Noto Serif SC 900)
封面副标题:      18–20 px   (Noto Serif SC, ink-2)
章节数字:      120–140 px  (Playfair 900 italic, red)
章节标题:        48–60 px  (Playfair 900, ink)
章节 lede:       16–18 px  (Noto Serif SC, ink-2)
小节标题:        17–19 px  (Noto Serif SC 700, ink)
正文:            15–16 px  (Noto Serif SC, ink-2)
数据 caption:    10–11 px  (Inter 700, uppercase, 字距 0.22em)
表格数字(关键):  18–28 px  (Playfair 700, tabular-nums)
表格数字(普通):  13–14 px  (Inter 400, tabular-nums)
Pull quote:      28–36 px  (Playfair 700 italic)
Colophon:        32–40 px  (Playfair 900)
```

### 3.3 字距规则

- 全大写 caption:**`letter-spacing: 0.18em ~ 0.24em`**(表头、eyebrow、meta)
- 章节大标题:**`letter-spacing: -0.025em ~ -0.04em`**(负字距让衬线更紧凑)
- 中文衬线标题:**`letter-spacing: 0.04em`**(微正字距,中文需要呼吸)
- 数据数字:**`font-variant-numeric: tabular-nums`**(等宽数字)

### 3.4 引用字体

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;0,800;0,900;1,400;1,700;1,900&family=Inter:wght@300;400;500;600;700&family=Noto+Serif+SC:wght@400;500;700;900&family=Noto+Sans+SC:wght@300;400;500;700&family=Cormorant+Garamond:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">
```

---

## 4. 排版骨架(Triple-Frame)

整份报告由三段式框架构成:**封面 → 编辑笔记 → 章节 → 版权页**。

### 4.1 整体容器

```
max-width: 1180px
margin: 0 auto
左右 padding: 48px(桌面)/ 32px(移动)
```

每个章节内部用 `.page` 容器包住,留 88px 上下 padding。

### 4.2 封面(Cover)

**结构:** 顶部 masthead + 双列 hero + 底部数据 strap

```
┌─────────────────────────────────────────────────────────┐
│ ELLE·季报                              № 26 SPRING      │
│ ————————————————————————————————————————————————————  │
│                                                         │
│ A Quarterly Editorial Brief      副标题 + 数据来源说明  │
│                                                         │
│ Length.                              当长端成为叙事主流  │
│ 衣长维度分析                          ...                │
│                                                         │
│ ————————————————————————————————————————————————————  │
│ Long+Extra   YoY +296%   款效 −32.7%   中长占比 3.8%    │
└─────────────────────────────────────────────────────────┘
```

**关键样式:**

```css
.cover {
  padding: 56px 48px 40px;
  border-bottom: 2px solid var(--ink);
}

.cover-top {
  display: flex; justify-content: space-between;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 28px; margin-bottom: 36px;
}

.masthead {
  font-family: "Playfair Display", serif;
  font-weight: 900;
  font-size: 36px;
  letter-spacing: 0.04em;
}
.masthead .accent { color: var(--red); }

.hero-title {
  font-family: "Playfair Display", "Noto Serif SC", serif;
  font-weight: 900;
  font-size: 132px;
  line-height: 0.92;
  letter-spacing: -0.04em;
}
.hero-title em { /* italic 强调 */
  font-family: "Cormorant Garamond", serif;
  font-style: italic;
  font-weight: 500;
  color: var(--red);
}
.hero-title .cn {
  font-family: "Noto Serif SC", serif;
  font-size: 96px;
  letter-spacing: 0.04em;
  display: block;
  margin-top: 12px;
}

.cover-strap {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--ink);
}
.strap-value {
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 28px;
}
.strap-value .red { color: var(--red); }
```

### 4.3 编辑笔记(Editor's Note)

紧跟封面,左侧 200px 标签 + 右侧 pull quote + dropcap 段落。

```css
.editor-note {
  padding: 64px 48px;
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 48px;
  border-bottom: 1px solid var(--ink);
}

.editor-label {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
  color: var(--red);
}

.pull-quote {
  font-family: "Playfair Display", "Noto Serif SC", serif;
  font-weight: 700;
  font-size: 28px;
  line-height: 1.45;
  margin-bottom: 28px;
}
.pull-quote em { color: var(--red); font-style: italic; }

.dropcap::first-letter {
  font-family: "Playfair Display", serif;
  font-weight: 900;
  font-size: 78px;
  float: left;
  line-height: 0.85;
  padding: 6px 12px 0 0;
  color: var(--red);
}
```

### 4.4 章节(Feature Chapter)

每个章节头部用**罗马数字 + 双列结构**展开。

```
┌────┬──────────────────────────────────────────────────┐
│    │ CHAPTER ONE · CURRENT STATE                      │
│ I  │ 26 春衣长结构现状                                │
│    │ 长款仍是基本盘,超长款效领跑...                   │
└────┴──────────────────────────────────────────────────┘
```

```css
.feature {
  padding: 88px 0;
  border-bottom: 1px solid var(--rule);
}

.feature-head {
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 48px;
  margin-bottom: 56px;
}

.feature-num {
  font-family: "Playfair Display", serif;
  font-weight: 900;
  font-style: italic;
  font-size: 140px;
  line-height: 0.85;
  color: var(--red);
  letter-spacing: -0.04em;
}

.feature-title h2 {
  font-family: "Playfair Display", "Noto Serif SC", serif;
  font-weight: 900;
  font-size: 56px;
  line-height: 1.05;
  letter-spacing: -0.025em;
}
.feature-title h2 em {
  font-family: "Cormorant Garamond", serif;
  font-weight: 500;
  font-style: italic;
  color: var(--red);
}
```

**章节节奏:** 章节之间不要立即接下一章,保留 `88px` 上下 padding,
让每章独立"呼吸"。

### 4.5 版权页(Colophon)

末尾两列结构:左侧大标题、右侧方法论说明。

```css
.colophon {
  padding: 64px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 48px;
  align-items: end;
}

.colophon h3 {
  font-family: "Playfair Display", "Noto Serif SC", serif;
  font-weight: 900;
  font-size: 36px;
}

.footer-bar {
  border-top: 1px solid var(--ink);
  padding: 24px 0 40px;
  display: flex;
  justify-content: space-between;
}
```

---

## 5. 数据呈现组件

### 5.1 Stat Strip(章节大数字带)

顶部 1px 黑线 + 底部 1px 黑线包住,中间 4 列等宽。
关键数字 64px Playfair 黑色,单位 13px Inter 灰色。

```css
.stat-strip {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  border-top: 1px solid var(--ink);
  border-bottom: 1px solid var(--ink);
}

.stat-cell {
  padding: 32px 28px;
  border-right: 1px solid var(--rule);
}
.stat-cell:last-child { border-right: none; }

.stat-cell .label {
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink-3);
}

.stat-cell .value {
  font-family: "Playfair Display", serif;
  font-weight: 800;
  font-size: 64px;
  line-height: 1;
  letter-spacing: -0.03em;
}
.stat-cell .value.red { color: var(--red); }
```

### 5.2 Editorial Table(主表格)

表头全大写 10px、字距 0.16em、灰色;
首列中文衬线粗体;
关键列数字用 Playfair 18px 黑色;
差异列用 italic(`.delta` 类);
品类 chip 1px 黑边 / 红色实心。

```css
table.editorial {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

table.editorial thead th {
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--ink-3);
  text-align: right;
  padding: 14px 12px;
  border-bottom: 1px solid var(--rule);
}
table.editorial thead th:first-child { text-align: left; color: var(--ink); }

table.editorial tbody td {
  padding: 20px 12px;
  border-bottom: 1px solid var(--rule-soft);
  text-align: right;
  font-variant-numeric: tabular-nums;
  color: var(--ink-2);
}
table.editorial tbody td:first-child {
  text-align: left;
  font-family: "Noto Serif SC", serif;
  font-weight: 500;
  color: var(--ink);
}

table.editorial tbody td.lead {
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 18px;
}
table.editorial tbody td.lead.red { color: var(--red); }

table.editorial tbody td .chip {
  display: inline-block;
  padding: 3px 10px;
  font-size: 10px;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  font-weight: 700;
  border: 1px solid var(--ink);
  color: var(--ink);
}
table.editorial tbody td .chip.red { background: var(--red); color: #fff; border-color: var(--red); }
table.editorial tbody td .chip.muted { border-color: var(--ink-4); color: var(--ink-3); }

.delta { font-family: "Playfair Display", serif; font-style: italic; font-weight: 700; }
.delta.up { color: var(--red); }
.delta.down { color: var(--ink-3); }
```

### 5.3 Top10 Table(榜单表)

排名用 Playfair italic 28px 红色,货号用 Inter 600 + 字距,
品类列用全大写 11px、字距 0.16em。
数字列右对齐、Playfair 700 20px。

```css
table.top10 tbody td.rank {
  font-family: "Playfair Display", serif;
  font-weight: 800;
  font-style: italic;
  font-size: 28px;
  color: var(--red);
  width: 56px;
}

table.top10 tbody td.amt {
  text-align: right;
  font-family: "Playfair Display", serif;
  font-weight: 700;
  font-size: 20px;
  color: var(--ink);
}
```

### 5.4 Findings Grid(三点发现)

每章末尾用三栏等宽收尾,左红序号(FINDING 01) + 中文衬线粗体小标题 + 短段落。

```css
.findings {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  border-top: 1px solid var(--ink);
  border-bottom: 1px solid var(--ink);
}

.finding {
  padding: 36px 32px 36px 0;
  border-right: 1px solid var(--rule);
}
.finding:not(:first-child) { padding-left: 32px; }

.finding .no {
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 14px;
  color: var(--red);
  letter-spacing: 0.08em;
}

.finding h4 {
  font-family: "Noto Serif SC", serif;
  font-weight: 900;
  font-size: 19px;
  line-height: 1.4;
}
```

### 5.5 Observation Block(方法论/口径说明)

3px 红色左竖线 + 暖白底,内含 ⚠ 红色 tag + 段落。

```css
.observation {
  border-left: 3px solid var(--red);
  padding: 20px 28px;
  margin: 32px 0;
  background: var(--paper-warm);
}
.observation .tag {
  font-size: 10px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--red);
  font-weight: 700;
  margin-bottom: 8px;
}
```

### 5.6 Quote Block(居中引语)

章节中段用 quote block 做"编辑点睛",
三段式:上下 1px 黑线 + 居中衬线 italic 大字 + 下方 attribute caption。

```css
.quote-block {
  padding: 48px 0;
  text-align: center;
  border-top: 1px solid var(--ink);
  border-bottom: 1px solid var(--ink);
  margin: 48px 0;
}
.quote-block blockquote {
  font-family: "Playfair Display", "Noto Serif SC", serif;
  font-weight: 700;
  font-style: italic;
  font-size: 36px;
  line-height: 1.35;
  max-width: 880px;
  margin: 0 auto;
}
.quote-block blockquote .red { color: var(--red); }
.quote-block .attr {
  font-size: 11px;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--ink-3);
  margin-top: 24px;
}
```

### 5.7 Numbered Editorial List(编号列表)

风险 / 追问清单用 `decimal-leading-zero` 计数器,
左侧 56px Playfair italic 红色编号,右侧中文衬线粗体标题 + 段落。

```css
ol.editorial { list-style: none; counter-reset: ed; padding: 0; }
ol.editorial > li {
  counter-increment: ed;
  display: grid;
  grid-template-columns: 56px 1fr;
  gap: 24px;
  padding: 24px 0;
  border-bottom: 1px solid var(--rule);
}
ol.editorial > li::before {
  content: counter(ed, decimal-leading-zero);
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-weight: 500;
  font-size: 28px;
  color: var(--red);
}
```

### 5.8 Risk List(Badge 列表)

风险章节用 badge + 双列布局。
badge 三种:**red 实心**、**ink 实心**、**outline 描边**。

```css
.risk-list li {
  display: grid;
  grid-template-columns: 90px 1fr;
  gap: 28px;
  padding: 24px 0;
  border-bottom: 1px solid var(--rule);
}
.badge {
  display: inline-block;
  padding: 4px 10px;
  font-size: 10px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
}
.badge.red { background: var(--red); color: #fff; }
.badge.ink { background: var(--ink); color: #fff; }
.badge.outline { border: 1px solid var(--ink); color: var(--ink); background: transparent; }
```

---

## 6. 章节模板(可直接复用)

每个章节的内部结构都可以套这个骨架:

```html
<section class="page feature">
  <div class="feature-head">
    <div class="feature-num">I</div>
    <div class="feature-title">
      <div class="feature-eyebrow">Chapter One · Current State</div>
      <h2>章节主标题<em>强调</em></h2>
      <p class="lede">一段 lede 导语,简述本章要回答的核心问题。</p>
    </div>
  </div>

  <!-- 1. Stat strip(可选,大数字带) -->
  <div class="stat-strip">...</div>

  <!-- 2. 主表格 -->
  <div class="table-block">
    <div class="table-caption">
      <div class="title">Table 01 · 主题</div>
      <div class="note">注脚</div>
    </div>
    <table class="editorial">...</table>
  </div>

  <!-- 3. 发现 / 要点 -->
  <div class="findings">...</div>

  <!-- 4. 方法论 / observation(可选) -->
  <div class="observation">...</div>

  <!-- 5. Quote block(可选,编辑点睛) -->
  <div class="quote-block">...</div>

  <!-- 6. 编号列表(风险 / 追问) -->
  <ol class="editorial">...</ol>
</section>
```

---

## 7. 红白配色的语义规则

| 场景 | 用什么颜色 | 备注 |
|---|---|---|
| 标题主语 | `--ink` 黑 | 默认,所有标题主色 |
| 强调 italic | `--red` + Cormorant Garamond | 红色 italic 是最强组合 |
| 增长 / 正向 | `--red` | 超长增长 +296% 这种 |
| 下滑 / 负向 | `--ink-3` 灰墨 | **不要用红色**,让下滑"安静地退场" |
| 警示 | `--red` 实心 badge | 风险章节的红 badge |
| 中性 / 占位 | `--ink-4` 浅灰 | chip muted |
| 章节编号 | `--red` italic | 罗马数字超大红色 |
| 方法论 / 口径 | `--red` 3px 竖线 | observation 块 |
| 关键数据 | `--red` Playfair 700 | 表格 lead.red |
| 默认数字 | `--ink` Playfair 700 | 表格 lead |

**关键纪律:下滑用灰,不用红。** 红色永远留给"故事主角"(增长、强调、警示)。
否则红色变成"什么都重要 = 什么都不重要"。

---

## 8. 响应式

```css
@media (max-width: 920px) {
  .cover, .editor-note { padding-left: 32px; padding-right: 32px; }
  .page { padding: 0 32px; }
  .hero { grid-template-columns: 1fr; gap: 32px; }
  .hero-title { font-size: 80px; }
  .hero-title .cn { font-size: 60px; }
  .feature-head { grid-template-columns: 80px 1fr; gap: 24px; }
  .feature-num { font-size: 96px; }
  .feature-title h2 { font-size: 36px; }
  .stat-strip { grid-template-columns: repeat(2, 1fr); }
  .findings { grid-template-columns: 1fr; }
  .finding { border-right: none; border-bottom: 1px solid var(--rule); padding: 28px 0; }
  .two-col { grid-template-columns: 1fr; gap: 32px; }
  .cover-strap { grid-template-columns: repeat(2, 1fr); }
  .colophon { grid-template-columns: 1fr; }
}
```

---

## 9. 落盘清单(复用步骤)

当另一个 agent 要复用此设计系统时:

1. **复制 HTML 模板**:拿 `length-analysis.html` 当骨架,
   删掉章节内容,保留封面 + 编辑笔记 + 章节框架 + colophon。
2. **替换 `:root` 变量**:如果换成其他品牌色,只改 `--red` 一个值即可。
3. **保留字体引用**:Google Fonts 链接整段保留,字体是这套设计的灵魂。
4. **保留结构组件**:`.feature` / `.stat-strip` / `.editorial table` / `.findings` /
   `.observation` / `.quote-block` / `.risk-list` / `.colophon` 这 8 个组件是核心,
   一律复用,不要重新发明。
5. **章节数变化时**:罗马数字 `I`–`VII` 改成对应 `I`–`IV` 或 `I`–`VIII` 即可。
6. **不要做的事**:不要换字体、不要换主红、不要加渐变、不要引入新色相、不要做圆角阴影。

---

## 10. 反例 / 不要做

下面这些是已踩过的坑,新 agent 必须避免:

| 反例 | 为什么不要 |
|---|---|
| 卡片圆角 20px + 阴影 | 这是 SaaS 仪表盘语言,不是杂志语言 |
| 渐变色背景 | 杂志是印刷物,不需要 web 渐变 |
| 红色 hover 背景 | 红色太抢,只用来强调语义 |
| 上下箭头(↑↓)用绿/红 | 用 italic 衬线 + 颜色变化更编辑感 |
| emoji 做装饰(📊📈) | 用 ⚠、№、· 等排版符号代替 |
| 整页统一 sans-serif | 衬线主导是这套设计的核心,丢了就变成普通报告 |
| 把所有数据都高亮红色 | 红色泛滥=没有重点 |
| 用深色模式 / 黑色背景 | 杂志风默认是白纸 + 墨色,黑色背景是 web app |
| 给章节加图标(icon) | 杂志专栏不用图标,用编号和 lede 替代 |
| 数据表用斑马纹背景 | 太"工具感",用 1px 极浅规则线 + hover 暖白即可 |

---

## 11. 范例引用

当前版本完整范例:

- `/length-analysis.html`(26 春连衣裙 · 衣长维度分析 · 主范例)
- 同目录 `color-analysis.html` / `fabric-analysis.html` /
  `price-band-analysis.html` / `style-rating-analysis.html`
  可作为多报告复用同一系统的参照。

如果 agent 在生成新报告时不确定样式,优先对照 `length-analysis.html` 的结构。

---

## 13. 图片与图卡系统 (Image & Lookbook System)

### 13.1 美学法则: 避免“电商网店感”

在数据报告中引入商品图或竞品参考图时，必须恪守以下四条规范，否则会瞬间将“高定杂志”降级为“淘宝列表”:

1. **直角矩形 (Strict Rectangles)**: 禁用 `border-radius` 圆角，保持印刷画册的整齐切割感。
2. **3:4 Portrait 比例**: 采用服装杂志标准的 3:4 比例或 16:9 展厅比例 (`aspect-ratio: 3/4; object-fit: cover;`)。
3. **1px 墨色边框 (Paper Frame)**: 图片外层使用 1px 细线包裹 (`border: 1px solid var(--ink)` 或 `1px solid var(--rule)`)，内边距留出纸感缝隙。
4. **FIG 编辑标与元数据 (Editorial Captions)**: 每张图片必须附带 `FIG.01` 衬线编号、红字 Tag、商品名称/货号与销额数据，作为“事实证据”而非装饰贴图。

### 13.2 图片组件代码规范

```css
/* 单图卡片 */
.figure-card {
  border: 1px solid var(--ink);
  background: var(--paper-warm);
  padding: 12px;
  position: relative;
}

.figure-card .img-wrap {
  width: 100%;
  aspect-ratio: 3 / 4;
  overflow: hidden;
  border: 1px solid var(--rule-soft);
  background: #f0ece1;
}

.figure-card .img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.figure-card:hover .img-wrap img {
  transform: scale(1.03);
}

.figure-card .caption {
  margin-top: 12px;
  padding-top: 8px;
  border-top: 1px solid var(--rule);
}

.figure-card .fig-no {
  font-family: "Playfair Display", serif;
  font-style: italic;
  font-size: 12px;
  color: var(--red);
  letter-spacing: 0.08em;
}

.figure-card .fig-title {
  font-family: "Noto Serif SC", serif;
  font-weight: 700;
  font-size: 14px;
  color: var(--ink);
  margin: 4px 0;
}

.figure-card .fig-meta {
  font-size: 11px;
  color: var(--ink-3);
  letter-spacing: 0.04em;
}

/* 竞品 Lookbook 4列图墙 */
.gallery-4 {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 32px 0;
}
```

---

## 14. 一句话总结

> **白纸 + 墨色 + 一抹杂志红, 衬线大字 + italic 强调 + 3:4 典雅 Lookbook 画廊。**
> 数字是主角, 排版是舞台, 图片是沉淀的沉浸线索。