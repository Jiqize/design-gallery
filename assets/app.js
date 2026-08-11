(function() {
  const INITIAL_DATA = {
  "updatedAt": "2026-08-11T22:47:50.358Z",
  "systems": [
    {
      "id": "elle-27-dress-recap",
      "name": "ELLE 27春连衣裙复盘设计系统",
      "slug": "elle-27-dress-recap",
      "description": "> 这是一份**可复用的设计规范**。任何 agent 在生成中文数据复盘报告(单文件 HTML) > 都可以引用本文档落地视觉风格,而不必从零重新设计。 > 当前主范例:`length-analysis.html`(26 春连衣裙 · 衣长维度分析)。 ---",
      "genre": {
        "type": "editorial-stage",
        "name": "Editorial & Stage Spec",
        "label": "电子杂志 & 舞台构图",
        "warning": "⚠️ 构图提示: 此系统包含强烈的杂志构图语法与舞台版式范式（如不对称分栏、大字号/页码、图注井）。请在 Slide/封面/汇报中保留其戏剧情感，切勿降级为三等分通用 SaaS 卡片！",
        "suitableFor": "PPT/Slide, 杂志封面, 汇报大图, 特色页面",
        "unsuitableFor": "长篇产品说明书, 密集后台数据列表"
      },
      "tags": [
        "Glassmorphism",
        "Editorial",
        "Bento"
      ],
      "palette": [
        "#C8102E",
        "#8B0A1F",
        "#FCE7EA",
        "#0A0A0A",
        "#2A2A2A",
        "#6B6B6B",
        "#9E9E9E",
        "#FFFFFF"
      ],
      "designMdPath": "/Users/lianglei/Projects/code/design-gallery/systems/elle-27-dress-recap/DESIGN.md",
      "previewHtmlPath": "systems/elle-27-dress-recap/preview.html",
      "createdAt": "2026-08-11"
    },
    {
      "id": "editorial-style",
      "name": "Editorial Style",
      "slug": "editorial-style",
      "description": "定制设计系统",
      "genre": {
        "type": "editorial-stage",
        "name": "Editorial & Stage Spec",
        "label": "电子杂志 & 舞台构图",
        "warning": "⚠️ 构图提示: 此系统包含强烈的杂志构图语法与舞台版式范式（如不对称分栏、大字号/页码、图注井）。请在 Slide/封面/汇报中保留其戏剧情感，切勿降级为三等分通用 SaaS 卡片！",
        "suitableFor": "PPT/Slide, 杂志封面, 汇报大图, 特色页面",
        "unsuitableFor": "长篇产品说明书, 密集后台数据列表"
      },
      "tags": [
        "Minimalist",
        "Dark Mode",
        "Editorial",
        "Bento"
      ],
      "palette": [
        "#F1EFEA",
        "#E8E5DE",
        "#0A0A0B",
        "#6A665F",
        "#8A3D2E",
        "#243B53",
        "#FFFFFF"
      ],
      "designMdPath": "/Users/lianglei/Projects/code/design-gallery/systems/editorial-style/DESIGN.md",
      "previewHtmlPath": "systems/editorial-style/preview.html",
      "createdAt": "2026-08-11"
    },
    {
      "id": "product-analytics-dashboard",
      "name": "新品推广数据工作台",
      "slug": "product-analytics-dashboard",
      "description": "状态：第二轮前端设计工艺与经营总览指标联动已实现并锁定视觉基线 日期：2026-07-24 视觉依据：`设计参考/IMG_8540.JPG` 至 `设计参考/IMG_8545.JPG`",
      "genre": {
        "type": "product-dashboard",
        "name": "Product & Dashboard Spec",
        "label": "产品 & 精密数据工作台",
        "warning": "💡 构图提示: 适用于高信息密度的 SaaS 工作台与数据分析仪表盘。注重 1px 网格、侧边栏上下文与清晰的数据面板。",
        "suitableFor": "SaaS 后台, 数据仪表盘, 知识库系统",
        "unsuitableFor": "大图沉浸式杂志封面"
      },
      "tags": [
        "Bento"
      ],
      "palette": [
        "#EEEDE9",
        "#F8F7F4",
        "#FFFFFF",
        "#181A18",
        "#747770",
        "#F07B2D",
        "#3B86D1",
        "#2F9B68"
      ],
      "designMdPath": "/Users/lianglei/Projects/code/design-gallery/systems/product-analytics-dashboard/DESIGN.md",
      "previewHtmlPath": "systems/product-analytics-dashboard/preview.html",
      "createdAt": "2026-08-11"
    },
    {
      "id": "pop-art-style",
      "name": "Pop Art Style",
      "slug": "pop-art-style",
      "description": "定制设计系统",
      "genre": {
        "type": "editorial-stage",
        "name": "Editorial & Stage Spec",
        "label": "电子杂志 & 舞台构图",
        "warning": "⚠️ 构图提示: 此系统包含强烈的杂志构图语法与舞台版式范式（如不对称分栏、大字号/页码、图注井）。请在 Slide/封面/汇报中保留其戏剧情感，切勿降级为三等分通用 SaaS 卡片！",
        "suitableFor": "PPT/Slide, 杂志封面, 汇报大图, 特色页面",
        "unsuitableFor": "长篇产品说明书, 密集后台数据列表"
      },
      "tags": [
        "Editorial",
        "Bento"
      ],
      "palette": [
        "#FFF2C9",
        "#F6BCD0",
        "#111111",
        "#4E4536",
        "#ED2D31",
        "#1769C2",
        "#FFFFFF"
      ],
      "designMdPath": "/Users/lianglei/Projects/code/design-gallery/systems/pop-art-style/DESIGN.md",
      "previewHtmlPath": "systems/pop-art-style/preview.html",
      "createdAt": "2026-08-11"
    },
    {
      "id": "art-deco-style",
      "name": "Art Deco Style",
      "slug": "art-deco-style",
      "description": "定制设计系统",
      "genre": {
        "type": "editorial-stage",
        "name": "Editorial & Stage Spec",
        "label": "电子杂志 & 舞台构图",
        "warning": "⚠️ 构图提示: 此系统包含强烈的杂志构图语法与舞台版式范式（如不对称分栏、大字号/页码、图注井）。请在 Slide/封面/汇报中保留其戏剧情感，切勿降级为三等分通用 SaaS 卡片！",
        "suitableFor": "PPT/Slide, 杂志封面, 汇报大图, 特色页面",
        "unsuitableFor": "长篇产品说明书, 密集后台数据列表"
      },
      "tags": [
        "Dark Mode",
        "Editorial",
        "Bento"
      ],
      "palette": [
        "#101112",
        "#1B1B1B",
        "#F1E8D6",
        "#B9AE99",
        "#C7A25B",
        "#6E1425"
      ],
      "designMdPath": "/Users/lianglei/Projects/code/design-gallery/systems/art-deco-style/DESIGN.md",
      "previewHtmlPath": "systems/art-deco-style/preview.html",
      "createdAt": "2026-08-11"
    },
    {
      "id": "brutalism-style",
      "name": "Brutalism Style",
      "slug": "brutalism-style",
      "description": "定制设计系统",
      "genre": {
        "type": "editorial-stage",
        "name": "Editorial & Stage Spec",
        "label": "电子杂志 & 舞台构图",
        "warning": "⚠️ 构图提示: 此系统包含强烈的杂志构图语法与舞台版式范式（如不对称分栏、大字号/页码、图注井）。请在 Slide/封面/汇报中保留其戏剧情感，切勿降级为三等分通用 SaaS 卡片！",
        "suitableFor": "PPT/Slide, 杂志封面, 汇报大图, 特色页面",
        "unsuitableFor": "长篇产品说明书, 密集后台数据列表"
      },
      "tags": [
        "Glassmorphism",
        "Editorial",
        "Bento"
      ],
      "palette": [
        "#F5F5F2",
        "#DCDCDC",
        "#080808",
        "#444444",
        "#2448FF",
        "#FF2B2B",
        "#FFFFFF"
      ],
      "designMdPath": "/Users/lianglei/Projects/code/design-gallery/systems/brutalism-style/DESIGN.md",
      "previewHtmlPath": "systems/brutalism-style/preview.html",
      "createdAt": "2026-08-11"
    },
    {
      "id": "memphis-style",
      "name": "Memphis Style",
      "slug": "memphis-style",
      "description": "定制设计系统",
      "genre": {
        "type": "editorial-stage",
        "name": "Editorial & Stage Spec",
        "label": "电子杂志 & 舞台构图",
        "warning": "⚠️ 构图提示: 此系统包含强烈的杂志构图语法与舞台版式范式（如不对称分栏、大字号/页码、图注井）。请在 Slide/封面/汇报中保留其戏剧情感，切勿降级为三等分通用 SaaS 卡片！",
        "suitableFor": "PPT/Slide, 杂志封面, 汇报大图, 特色页面",
        "unsuitableFor": "长篇产品说明书, 密集后台数据列表"
      },
      "tags": [
        "Bento"
      ],
      "palette": [
        "#FFF3DF",
        "#DCCCF0",
        "#282436",
        "#6C6676",
        "#F16D5F",
        "#21A9A1",
        "#FFFFFF"
      ],
      "designMdPath": "/Users/lianglei/Projects/code/design-gallery/systems/memphis-style/DESIGN.md",
      "previewHtmlPath": "systems/memphis-style/preview.html",
      "createdAt": "2026-08-11"
    },
    {
      "id": "y2k-cyber-style",
      "name": "Y2K Cyber Style",
      "slug": "y2k-cyber-style",
      "description": "定制设计系统",
      "genre": {
        "type": "editorial-stage",
        "name": "Editorial & Stage Spec",
        "label": "电子杂志 & 舞台构图",
        "warning": "⚠️ 构图提示: 此系统包含强烈的杂志构图语法与舞台版式范式（如不对称分栏、大字号/页码、图注井）。请在 Slide/封面/汇报中保留其戏剧情感，切勿降级为三等分通用 SaaS 卡片！",
        "suitableFor": "PPT/Slide, 杂志封面, 汇报大图, 特色页面",
        "unsuitableFor": "长篇产品说明书, 密集后台数据列表"
      },
      "tags": [
        "Minimalist",
        "Dark Mode",
        "Glassmorphism",
        "Bento"
      ],
      "palette": [
        "#081329",
        "#172F59",
        "#EAF8FF",
        "#A7BDD5",
        "#65E8FF",
        "#FF72D6",
        "#071327"
      ],
      "designMdPath": "/Users/lianglei/Projects/code/design-gallery/systems/y2k-cyber-style/DESIGN.md",
      "previewHtmlPath": "systems/y2k-cyber-style/preview.html",
      "createdAt": "2026-08-11"
    },
    {
      "id": "bauhaus-style",
      "name": "Bauhaus Style",
      "slug": "bauhaus-style",
      "description": "定制设计系统",
      "genre": {
        "type": "editorial-stage",
        "name": "Editorial & Stage Spec",
        "label": "电子杂志 & 舞台构图",
        "warning": "⚠️ 构图提示: 此系统包含强烈的杂志构图语法与舞台版式范式（如不对称分栏、大字号/页码、图注井）。请在 Slide/封面/汇报中保留其戏剧情感，切勿降级为三等分通用 SaaS 卡片！",
        "suitableFor": "PPT/Slide, 杂志封面, 汇报大图, 特色页面",
        "unsuitableFor": "长篇产品说明书, 密集后台数据列表"
      },
      "tags": [
        "Glassmorphism",
        "Editorial",
        "Bento"
      ],
      "palette": [
        "#F3EFE4",
        "#E7E0D0",
        "#111111",
        "#5E5A52",
        "#D8342A",
        "#1749B4",
        "#FFFFFF"
      ],
      "designMdPath": "/Users/lianglei/Projects/code/design-gallery/systems/bauhaus-style/DESIGN.md",
      "previewHtmlPath": "systems/bauhaus-style/preview.html",
      "createdAt": "2026-08-11"
    },
    {
      "id": "marc-jacobs-report",
      "name": "Marc Jacobs Report",
      "slug": "marc-jacobs-report",
      "description": "> 给所有做分册 HTML 的 worker（codex/opencode）：**严格照此执行**。目标是五份分册视觉零偏差，最终可无缝合订。 > 母版基准：`10_品牌价值与人群.html`（甲方已认可）。共享样式：`report.css`。 ---",
      "genre": {
        "type": "editorial-stage",
        "name": "Editorial & Stage Spec",
        "label": "电子杂志 & 舞台构图",
        "warning": "⚠️ 构图提示: 此系统包含强烈的杂志构图语法与舞台版式范式（如不对称分栏、大字号/页码、图注井）。请在 Slide/封面/汇报中保留其戏剧情感，切勿降级为三等分通用 SaaS 卡片！",
        "suitableFor": "PPT/Slide, 杂志封面, 汇报大图, 特色页面",
        "unsuitableFor": "长篇产品说明书, 密集后台数据列表"
      },
      "tags": [
        "Minimalist",
        "Dark Mode",
        "Editorial",
        "Bento"
      ],
      "palette": [
        "#FFFFFF",
        "#111111",
        "#C8102E",
        "#F4F4F2",
        "#E9E9E6",
        "#DCDCD8",
        "#6B6B66",
        "#9A9A93"
      ],
      "designMdPath": "/Users/lianglei/Projects/code/design-gallery/systems/marc-jacobs-report/DESIGN.md",
      "previewHtmlPath": "systems/marc-jacobs-report/preview.html",
      "createdAt": "2026-08-11"
    },
    {
      "id": "lovable-system",
      "name": "Lovable System",
      "slug": "lovable-system",
      "description": "## 1. Visual Theme & Atmosphere Lovable's website radiates warmth through restraint. The entire page sits on a creamy, parchment-toned background (`#f",
      "genre": {
        "type": "editorial-stage",
        "name": "Editorial & Stage Spec",
        "label": "电子杂志 & 舞台构图",
        "warning": "⚠️ 构图提示: 此系统包含强烈的杂志构图语法与舞台版式范式（如不对称分栏、大字号/页码、图注井）。请在 Slide/封面/汇报中保留其戏剧情感，切勿降级为三等分通用 SaaS 卡片！",
        "suitableFor": "PPT/Slide, 杂志封面, 汇报大图, 特色页面",
        "unsuitableFor": "长篇产品说明书, 密集后台数据列表"
      },
      "tags": [
        "Minimalist",
        "Dark Mode",
        "Glassmorphism",
        "Editorial",
        "Bento"
      ],
      "palette": [
        "#F7F4ED",
        "#1C1C1C",
        "#ECEAE4",
        "#FCFBF8",
        "#5F5F5D",
        "#3B82F6",
        "#FFFFFF"
      ],
      "designMdPath": "/Users/lianglei/Projects/code/design-gallery/systems/lovable-system/DESIGN.md",
      "previewHtmlPath": "systems/lovable-system/preview.html",
      "createdAt": "2026-08-11"
    },
    {
      "id": "fashion-monitor",
      "name": "Fashion Monitor",
      "slug": "fashion-monitor",
      "description": "定制设计系统",
      "genre": {
        "type": "editorial-stage",
        "name": "Editorial & Stage Spec",
        "label": "电子杂志 & 舞台构图",
        "warning": "⚠️ 构图提示: 此系统包含强烈的杂志构图语法与舞台版式范式（如不对称分栏、大字号/页码、图注井）。请在 Slide/封面/汇报中保留其戏剧情感，切勿降级为三等分通用 SaaS 卡片！",
        "suitableFor": "PPT/Slide, 杂志封面, 汇报大图, 特色页面",
        "unsuitableFor": "长篇产品说明书, 密集后台数据列表"
      },
      "tags": [
        "Dark Mode",
        "Glassmorphism",
        "Editorial",
        "Bento",
        "Fashion"
      ],
      "palette": [
        "#0A0A0A",
        "#F5F4F0",
        "#FFFFFF",
        "#D8D6CF",
        "#676560",
        "#9D1028",
        "#395C78"
      ],
      "designMdPath": "/Users/lianglei/Projects/code/design-gallery/systems/fashion-monitor/DESIGN.md",
      "previewHtmlPath": "systems/fashion-monitor/preview.html",
      "createdAt": "2026-08-11"
    },
    {
      "id": "swiss-research-system",
      "name": "Swiss Research System",
      "slug": "swiss-research-system",
      "description": "- **黑白优先**:90% 内容用纯黑/白/灰,1 个强调色(蜜黄)承担全部视觉重量 - **栅格至死**:所有元素对齐到 8/12/24/48 px 网格,绝不\"差不多对齐\" - **数字说话**:所有可量化信息带编号,序号零填充(`01` `02` `13`) - **克制字体**:仅用 1 ",
      "genre": {
        "type": "product-dashboard",
        "name": "Product & Dashboard Spec",
        "label": "产品 & 精密数据工作台",
        "warning": "💡 构图提示: 适用于高信息密度的 SaaS 工作台与数据分析仪表盘。注重 1px 网格、侧边栏上下文与清晰的数据面板。",
        "suitableFor": "SaaS 后台, 数据仪表盘, 知识库系统",
        "unsuitableFor": "大图沉浸式杂志封面"
      },
      "tags": [
        "Minimalist",
        "Glassmorphism",
        "Editorial",
        "Bento"
      ],
      "palette": [
        "#FFFFFF",
        "#000000",
        "#6B6B6B",
        "#FDE047",
        "#F0F0F0",
        "#FFF",
        "#FAFAFA",
        "#000"
      ],
      "designMdPath": "/Users/lianglei/Projects/code/design-gallery/systems/swiss-research-system/DESIGN.md",
      "previewHtmlPath": "systems/swiss-research-system/preview.html",
      "createdAt": "2026-08-11"
    },
    {
      "id": "cyberpunk-neon",
      "name": "Cyberpunk Neon",
      "slug": "cyberpunk-neon",
      "description": "Dark background with glowing neon accents, high-contrast futuristic UI components, glassmorphism, an",
      "tags": [
        "Dark Mode",
        "Glassmorphism",
        "Editorial"
      ],
      "palette": [
        "#0D0D11",
        "#16161F",
        "#FF0055",
        "#00F0FF",
        "#FFE600",
        "#F0F0F5"
      ],
      "designMdPath": "/Users/lianglei/Projects/code/design-gallery/systems/cyberpunk-neon/DESIGN.md",
      "previewHtmlPath": "systems/cyberpunk-neon/preview.html",
      "createdAt": "2026-08-11"
    },
    {
      "id": "swiss-minimalism",
      "name": "Swiss Minimalism",
      "slug": "swiss-minimalism",
      "description": "Swiss Minimalism emphasizes clarity, order, and precise typography. Neutral base with high-contrast accent colors, strict grid structure, generous whi",
      "genre": {
        "type": "universal-system",
        "name": "Universal Design System",
        "label": "通用 UI 视觉规范",
        "warning": "💡 构图提示: 通用 UI 设计规范。严格遵循其 Color Tokens、字号阶梯、边框质感与 Hover 状态。",
        "suitableFor": "通用 Web 应用, 落地页, 移动端 UI",
        "unsuitableFor": "无限制"
      },
      "tags": [
        "Minimalist",
        "Editorial",
        "Bento"
      ],
      "palette": [
        "#FFFFFF",
        "#F4F4F6",
        "#111111",
        "#666666",
        "#FF3333",
        "#E5E5E7"
      ],
      "designMdPath": "/Users/lianglei/Projects/code/design-gallery/systems/swiss-minimalism/DESIGN.md",
      "previewHtmlPath": "systems/swiss-minimalism/preview.html",
      "createdAt": "2026-08-11"
    }
  ]
};

  let galleryData = INITIAL_DATA;
  let favorites = getStoredFavorites();

  // State Filters
  let currentNavFilter = 'all'; // 'all' | 'favorites'
  let currentGenreFilter = 'all'; // 'all' | 'editorial-stage' | 'product-dashboard' | 'universal-system'
  let currentTag = null;
  let searchQuery = '';

  async function init() {
    try {
      const res = await fetch('data.json');
      if (res.ok) {
        galleryData = await res.json();
      }
    } catch (e) {
      console.warn("Using fallback gallery data:", e);
    }

    setupEvents();
    renderAll();
  }

  function getStoredFavorites() {
    try {
      const stored = localStorage.getItem('design_gallery_favorites');
      return stored ? JSON.parse(stored) : [];
    } catch (e) {
      return [];
    }
  }

  function saveFavorites() {
    try {
      localStorage.setItem('design_gallery_favorites', JSON.stringify(favorites));
    } catch (e) {}
  }

  function isFavorite(id) {
    return favorites.includes(id);
  }

  window.toggleFavorite = function(id, event) {
    if (event) event.stopPropagation();
    const idx = favorites.indexOf(id);
    if (idx >= 0) {
      favorites.splice(idx, 1);
      showToast("已从收藏中移除");
    } else {
      favorites.push(id);
      showToast("★ 已添加到收藏");
    }
    saveFavorites();
    renderAll();
  };

  function renderAll() {
    const allSystems = galleryData.systems || [];
    
    // Calculate Statistics
    const totalCount = allSystems.length;
    const favCount = allSystems.filter(s => isFavorite(s.id)).length;

    document.getElementById('statTotal').innerHTML = `${totalCount} <small>已收录规范</small>`;
    document.getElementById('statStarred').innerHTML = `${favCount} <small>已收藏项目</small>`;
    document.getElementById('countAll').innerText = totalCount;
    document.getElementById('countFav').innerText = favCount;

    // Filter Logic
    let filtered = allSystems.filter(s => {
      // 1. Nav filter
      if (currentNavFilter === 'favorites' && !isFavorite(s.id)) return false;
      // 2. Genre filter
      if (currentGenreFilter !== 'all') {
        const itemGenreType = (s.genre && s.genre.type) || 'universal-system';
        if (itemGenreType !== currentGenreFilter) return false;
      }
      // 3. Tag filter
      if (currentTag && !(s.tags || []).includes(currentTag)) return false;
      // 4. Search query
      if (searchQuery) {
        const q = searchQuery.toLowerCase();
        const matchName = s.name.toLowerCase().includes(q);
        const matchDesc = (s.description || '').toLowerCase().includes(q);
        const matchGenre = (s.genre && s.genre.label || '').toLowerCase().includes(q);
        const matchTags = (s.tags || []).some(t => t.toLowerCase().includes(q));
        if (!matchName && !matchDesc && !matchGenre && !matchTags) return false;
      }
      return true;
    });

    renderSidebarTags(allSystems);
    renderQuickIndex(allSystems);
    renderGrid(filtered);
    updateHeaderViewTitle(filtered.length);
  }

  function renderSidebarTags(allSystems) {
    const tagsCloud = document.getElementById('tagsCloud');
    if (!tagsCloud) return;

    const tagCounts = {};
    allSystems.forEach(s => {
      (s.tags || []).forEach(t => {
        tagCounts[t] = (tagCounts[t] || 0) + 1;
      });
    });

    const tags = Object.keys(tagCounts);
    if (tags.length === 0) {
      tagsCloud.innerHTML = `<span style="font-size:11px; color:var(--muted)">暂无标签</span>`;
      return;
    }

    tagsCloud.innerHTML = tags.map(t => {
      const activeClass = (currentTag === t) ? 'active' : '';
      return `<button class="tag-btn ${activeClass}" onclick="selectTag('${escapeHtml(t)}')">${escapeHtml(t)} (${tagCounts[t]})</button>`;
    }).join('');
  }

  window.selectTag = function(tag) {
    if (currentTag === tag) {
      currentTag = null; // toggle off
    } else {
      currentTag = tag;
    }
    renderAll();
  };

  function renderQuickIndex(allSystems) {
    const list = document.getElementById('quickIndexList');
    if (!list) return;

    list.innerHTML = allSystems.map((s, idx) => {
      const numStr = String(idx + 1).padStart(2, '0');
      const star = isFavorite(s.id) ? '★ ' : '';
      return `
        <li onclick="scrollToCard('${s.id}')">
          <span><b>${numStr}</b> ${star}${escapeHtml(s.name)}</span>
          <span style="color:var(--muted)">→</span>
        </li>
      `;
    }).join('');
  }

  window.scrollToCard = function(id) {
    const cardEl = document.querySelector(`.card[data-id="${id}"]`);
    if (cardEl) {
      cardEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      cardEl.style.borderColor = 'var(--accent)';
      cardEl.style.borderWidth = '2px';
      setTimeout(() => {
        cardEl.style.borderColor = '';
        cardEl.style.borderWidth = '';
      }, 1500);
    }
  };

  function renderGrid(systems) {
    const grid = document.getElementById('systemsGrid');
    if (!grid) return;

    if (systems.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; padding: 60px 20px; text-align: center; border: 1px dashed var(--line);">
          <div style="font-size:24px; font-weight:900; margin-bottom:8px;">未找到匹配的设计系统</div>
          <div style="font-size:13px; color:var(--muted);">可以尝试调整搜索条件或清除侧边栏筛选</div>
        </div>
      `;
      return;
    }

    grid.innerHTML = systems.map((item, idx) => {
      const numStr = String(idx + 1).padStart(2, '0');
      const favClass = isFavorite(item.id) ? 'is-fav' : '';
      const favText = isFavorite(item.id) ? '★' : '☆';
      const genreLabel = (item.genre && item.genre.label) ? item.genre.label : '通用 UI 规范';

      const paletteMarkup = (item.palette || []).map(c =>
        `<div class="palette-swatch" style="background:${c};" title="${c}"></div>`
      ).join('');

      const tagsMarkup = (item.tags || []).map(t =>
        `<span class="card-tag-item">${escapeHtml(t)}</span>`
      ).join('');

      return `
        <div class="card" data-id="${item.id}">
          <div>
            <div class="card-top">
              <span class="card-index-tag">${numStr}</span>
              <button class="fav-btn ${favClass}" onclick="toggleFavorite('${item.id}', event)" title="收藏此风格">
                ${favText}
              </button>
            </div>

            <div>
              <span class="card-genre-badge">${escapeHtml(genreLabel)}</span>
            </div>

            <h3 class="card-title">${escapeHtml(item.name)}</h3>
            <p class="card-desc">${escapeHtml(item.description || '暂无详细描述')}</p>
            <div class="card-tags">${tagsMarkup}</div>
          </div>

          <div>
            <div class="palette-strip">${paletteMarkup}</div>

            <div class="card-actions">
              <button class="btn-swiss" onclick="copyAgentPromptById('${item.id}')">
                复制引用
              </button>

              <button class="btn-swiss" onclick="openMdViewer('${escapeHtml(item.designMdPath)}', '${escapeHtml(item.name)}')">
                查看文档
              </button>

              <a class="btn-swiss btn-primary" href="${item.previewHtmlPath}" target="_blank" style="grid-column: 1 / -1;">
                打开 Showcase 预览 →
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  function updateHeaderViewTitle(count) {
    const heading = document.getElementById('viewHeading');
    const subtext = document.getElementById('viewSubtext');
    const resetBtn = document.getElementById('resetFilterBtn');

    const isFiltered = (currentNavFilter !== 'all') || (currentGenreFilter !== 'all') || currentTag || searchQuery;

    if (resetBtn) {
      resetBtn.style.display = isFiltered ? 'inline-block' : 'none';
    }

    let titleText = "全部设计系统";
    if (currentNavFilter === 'favorites') titleText = "我的收藏 FAVORITES";
    if (currentGenreFilter !== 'all') {
      const genreNames = {
        'editorial-stage': '电子杂志 & 舞台',
        'product-dashboard': '产品 & 数据工作台',
        'universal-system': '通用 UI 规范'
      };
      titleText += ` · 范式 [${genreNames[currentGenreFilter] || currentGenreFilter}]`;
    }
    if (currentTag) titleText += ` · 标签 [${currentTag}]`;
    if (searchQuery) titleText += ` · 搜索 "${searchQuery}"`;

    if (heading) heading.innerText = titleText;
    if (subtext) subtext.innerText = `找到 ${count} 项结果`;
  }

  function setupEvents() {
    // Nav filter switching
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
      item.addEventListener('click', () => {
        navItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        currentNavFilter = item.getAttribute('data-filter');
        renderAll();
      });
    });

    // Genre filter switching
    const genreItems = document.querySelectorAll('.genre-item');
    genreItems.forEach(item => {
      item.addEventListener('click', () => {
        genreItems.forEach(i => i.classList.remove('active'));
        item.classList.add('active');
        currentGenreFilter = item.getAttribute('data-genre');
        renderAll();
      });
    });

    // Search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        renderAll();
      });
    }

    // Reset filter button
    const resetBtn = document.getElementById('resetFilterBtn');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        currentNavFilter = 'all';
        currentGenreFilter = 'all';
        currentTag = null;
        searchQuery = '';
        if (searchInput) searchInput.value = '';
        
        navItems.forEach(i => {
          if (i.getAttribute('data-filter') === 'all') i.classList.add('active');
          else i.classList.remove('active');
        });
        genreItems.forEach(i => {
          if (i.getAttribute('data-genre') === 'all') i.classList.add('active');
          else i.classList.remove('active');
        });
        renderAll();
      });
    }

    // Modal Close
    const closeBtn = document.getElementById('closeMdModalBtn');
    const modal = document.getElementById('mdModal');
    if (closeBtn && modal) {
      closeBtn.addEventListener('click', () => modal.classList.remove('open'));
      modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
      });
    }
  }

  window.copyAgentPromptById = function(id) {
    const item = (galleryData.systems || []).find(s => s.id === id);
    if (!item) return;

    let promptText = `Please reference and strictly implement the design system defined at: ${item.designMdPath}`;
    if (item.genre && item.genre.warning) {
      promptText += `\n\n[Layout & Framing Guidance]:\n${item.genre.warning}\n推荐适用场景: ${item.genre.suitableFor}`;
    }

    navigator.clipboard.writeText(promptText).then(() => {
      showToast("已复制 Agent 引用指令与范式避坑说明！");
    }).catch(() => {
      prompt("请手动复制引用指令与范式：", promptText);
    });
  };

  window.openMdViewer = async function(mdPath, title) {
    const modal = document.getElementById('mdModal');
    const modalTitle = document.getElementById('mdModalTitle');
    const modalCode = document.getElementById('mdModalCode');

    if (!modal || !modalCode) return;

    if (modalTitle) modalTitle.innerText = title;
    modalCode.innerText = "Loading DESIGN.md content...";
    modal.classList.add('open');

    try {
      const res = await fetch(mdPath);
      if (res.ok) {
        const text = await res.text();
        modalCode.innerText = text;
      } else {
        modalCode.innerText = `# Absolute Path:\n${mdPath}\n\n(提示: 浏览器本地 file:// 安全机制限制直接 fetch 外部磁盘路径，你可以直接用编辑器或 Agent 打开此绝对路径文件。)`;
      }
    } catch (e) {
      modalCode.innerText = `# Absolute Path:\n${mdPath}\n\n(提示: 浏览器本地 file:// 安全机制限制直接 fetch 外部磁盘路径，你可以直接用编辑器或 Agent 打开此绝对路径文件。)`;
    }
  };

  function showToast(msg) {
    let toast = document.getElementById('toastNotice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastNotice';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.innerText = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2500);
  }

  function escapeHtml(str) {
    return (str || '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }

  document.addEventListener('DOMContentLoaded', init);
})();
