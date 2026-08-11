# MJ × PAI 立项汇报报告 · 设计系统规范（DESIGN.md）

> 给所有做分册 HTML 的 worker（codex/opencode）：**严格照此执行**。目标是五份分册视觉零偏差，最终可无缝合订。
> 母版基准：`10_品牌价值与人群.html`（甲方已认可）。共享样式：`report.css`。

---

## 0. 最高铁律（零容错 · 这是与品牌方的真实谈判材料）

1. **不重写 CSS**：分册一律 `<link rel="stylesheet" href="report.css">`，复用既有组件类。需要章节专属样式时，写在分册 `<head>` 的小 `<style>` 里、用独立类名，**不得覆盖 report.css 的通用类**。
2. **logo 只用官方 SVG**：从母版 `10_品牌价值与人群.html` 复制封面/页脚那段 `<svg viewBox="0 0 134 10">…</svg>`（或读 `../_素材库/官网素材/logo_official_wordmark.svg`）。深色底用 `fill="#ffffff"`，浅色底用 `fill="#111111"`。🚫 绝不用字体/文字模拟 logo。
3. **字体只用官方 woff2**：report.css 已 `@font-face` 嵌入 `MarcJacobs`（仅拉丁 Bold）。英文标题/数字走 `var(--display)`，中文标题走 `var(--cjk-bold)`（思源黑体/苹方回退）。
4. **图片只用 `_素材库/官网素材/` 里的真实官方图**，路径 `../_素材库/官网素材/xxx`。缺图就留白或用排版处理，🚫 绝不用占位图/盗图/AI 图/竞品图冒充。
5. **数据/文字/链接全部取自对应定稿 .md**，一字不编。小红书链接必须原样（id 不可改不可增）。竞品体量一律用财报真值，禁用 dashboard 裸值。

---

## 1. 视觉原则（MJ 品牌调性）

- **极简 editorial 杂志感**：大量留白、清晰网格、克制。高级感来自空间和排版，不靠装饰。
- **黑白灰为主调 + 唯一强调色 MJ 红 `#C8102E`**：红色只用于点睛（章节号、关键数字、风险项、强调下划线），绝不大面积铺。
- **大图、大字号数字**：封面全屏图、章节用 editorial 大数字制造节奏。
- **grunge/玩味靠内容体现**，版式本身保持克制专业——这是给董事会/品牌方看的提案，不是花哨 PPT。

---

## 2. 配色 / 字体 token（report.css 的 :root）

| 变量 | 值 | 用途 |
|---|---|---|
| `--ink` | #111111 | 主墨色/深色底 |
| `--paper` | #ffffff | 纸白 |
| `--soft` / `--soft2` | #f4f4f2 / #e9e9e6 | 浅灰底/卡片灰 |
| `--line` | #dcdcd8 | 细分隔线 |
| `--mute` / `--mute2` | #6b6b66 / #9a9a93 | 次级/三级文字 |
| `--accent` | **#C8102E** | 唯一强调色（MJ 红），克制使用 |
| `--display` | MarcJacobs→思源/苹方 | 英文标题/数字/eyebrow |
| `--cjk-bold` | 思源黑体/苹方 Bold | 中文标题 |
| `--body` | Arial/Helvetica+中文无衬线 | 正文 |

---

## 3. 组件清单（复用这些类，别造新轮子）

| 组件类 | 用途 | 出处参考（母版） |
|---|---|---|
| `.cover` + `.bg/.scrim/.inner/.topbar/.logo/.center/.kicker/h1/.h1zh/.csub/.foot/.byline` | 封面（全屏图+logo+大标题+副署） | 母版封面 |
| `.toc` | 章节目录条（深色网格，4 列） | 母版目录 |
| `.sec` + `.eyebrow`（`.no` 章节号） | 章节容器 + 章节眉标 | 各章 |
| `h2`（`.zh` 中文副标）+ `.lede`（导语，`.col-narrow` 限宽） | 章节大标题 + 导语 | 各章 |
| `.verdict` | 结论旗标（如 IP HEALTH = STRONG） | 一章 |
| `.grid2` + `.figure`（`.bw` 黑白滤镜，`figcaption`） | 图文两栏 | 一章 |
| `.layers/.layer`（`.ix/.lt/.en/.ld/.grade.strong`） | 分层条目（三层势能等） | 一章 |
| `.scores/.score`（`.bar i`，`.acc` 红条）+ `.scorelegend` | 评分可视化条 | 一章 |
| `.bignums/.bignum`（`.v/.u/.k/.d`） | editorial 大数字（3 格） | 二章 |
| `.voicewrap/.voicebar`（`.seg s1-s5`）+ `.voicelist` | 占比堆叠条 + 图例 | 二章 |
| `.triptych`（`.figure/.pcap/.pname/.pmeta`） | 产品三联图 | 二章 |
| `.callout`（`.ct/.cd`，红左边线） | 结论强调条 | 各章 |
| `.minds/.mind`（`.mn/.mt/.mc/.me a`） | 标签卡网格（链接走 `.me a`） | 三章 |
| `.gaps/.gap`（`.gn` 红方块/`.gt/.gd`） | 编号要点（差距/风险） | 三章 |
| `.boundary`（`.bx.ok/.bx.no/.by/.bh/.bp`） | 左右对照框（可以/不行） | 三章 |
| `.personas/.persona`（`.sub` 副线白卡/`.ph/.role/.pname/.pnamezh/.page/.pdef/.pbody/.prow/.pk/.pv/.pno`） | 人群画像卡（`.pno` 自带 ✕ 前缀） | 四章 |
| `.whitespace`（`.wl/.wt b/.wf`） | 深色强调块（white space） | 四章 |
| `.compet`（`.ch/.cr/.cb/.en/.cpos/.cnum/.u/.src`） | 竞品坐标行表 | 四章 |
| `.closer`（`.chain/.cstep/.verdictdark`） | 结语（深色，逻辑链+总结判断） | 结语 |
| `.colophon`（`.clogo/.cmeta/.note`） | 页脚（黑 logo+来源声明） | 页脚 |
| `.reveal`（JS 加 `.in`） | 滚动渐显（可选，母版有 IntersectionObserver 脚本） | 全局 |

---

## 4. 分册 HTML 骨架（照抄结构，换内容）

```html
<!DOCTYPE html><html lang="zh-CN"><head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Marc Jacobs 中国 · [章节名] · PAI</title>
<link rel="stylesheet" href="report.css">
</head><body>
  <header class="cover">…官方 SVG logo（白）+ 全屏官方图 + 大标题 + A PROPOSAL BY PAI…</header>
  <nav class="toc">…本册内部小节导航（或保留四大章导航以便合订）…</nav>
  <section class="sec" id="s1"><div class="wrap">…用上面的组件填内容…</div></section>
  …更多 section…
  <section class="sec closer">…结语：逻辑链 + 总结判断…</section>
  <footer class="colophon">…官方 SVG logo（黑）+ 来源声明…</footer>
  <!-- 可选：母版底部的 reveal IntersectionObserver 脚本，原样复制 -->
</body></html>
```

---

## 5. 五分册命名（产出到 `_报告/`）

| 文件 | 对应文件夹 | 状态 |
|---|---|---|
| `10_品牌价值与人群.html` | 10_ | ✅ 母版（已完成） |
| `20_定位与产品.html` | 20_ | 待做（内容定稿后） |
| `30_渠道上市与营销.html` | 30_ | 待做 |
| `40_能力与重塑.html` | 40_ | 待做 |
| `50_决策与谈判后置.html` | 50_ | 待做 |

> 合订：因五册共用 report.css + 同一组件体系，最终可把各册 `<section>` 串进一个壳页，零返工。

---

## 6. worker 交付前自检

- [ ] 只 `<link report.css>`，没重写通用类
- [ ] logo 是官方 SVG（深底白/浅底黑）
- [ ] 图片都来自 `_素材库/官网素材/` 且路径 `../_素材库/官网素材/` 可解析
- [ ] 所有数据/文字/链接取自定稿 .md，无编造；竞品用财报真值
- [ ] 响应式（≤900px）与 A4 打印（report.css 已含）正常
