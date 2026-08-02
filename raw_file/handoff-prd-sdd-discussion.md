# Handoff: PRD / 设计文档 / Vibe Coding / SDD 概念讨论

## 背景

用户（中文交流）在 `/Users/tutu/workspace` 下进行了一场**纯概念性问答讨论**，不涉及任何代码仓库或文件产出。讨论主题：传统软件开发 vs vibe coding 时代下 PRD 与设计文档的角色，以及它们与 AI 开发的结合方式。

## 已完成内容

两轮问答已交付（均在对话中，无外部 artifacts）：

1. **第一轮**：分析了 PRD（做什么/为什么）与设计文档（怎么做）的定义与关联；对比了传统开发（文档是人与人对齐的合同）与 vibe coding 时代（文档是写给 AI 的 spec，prompt 是缩水版 PRD）；以"SaaS 订单列表导出 CSV"为例演示了 迷你 PRD → AI 出方案 → 验收标准变测试 的轻量流程。

2. **第二轮**：回答了"这和 SDD 的区别"。核心结论：
   - 上面所述轻量做法本质是 SDD 的雏形/轻量版
   - 正式 SDD（GitHub Spec Kit / AWS Kiro / Tessl）的核心主张：**spec 是唯一真相来源，代码是可再生的编译产物**
   - SDD 标准流程：`/specify → /plan → /tasks → /implement`，外加 constitution
   - 本质区别 = 谁是"源代码"：轻量做法以代码为中心（spec 会漂移过时），SDD 以 spec 为中心（改需求先改 spec 重新生成）
   - 选型建议：原型纯 vibe / 个人项目轻量 spec / 团队长期项目正式 SDD

## 关键立场（保持一致）

- 文档的核心价值（定义问题、记录取舍）在 AI 时代更重要，形式主义形态消亡
- 验收标准和边界条件是 vibe coding 中 ROI 最高的文档内容
- 方法论服务于项目，大多数团队落在"纯 vibe ↔ 正式 SDD"光谱中间，这是合理的

## 下一步可能方向

用户未指定后续任务。可能的延续：深入某个具体工具（Spec Kit / Kiro）的实操、把讨论整理成文章/分享材料、或应用到用户实际项目中。

## Suggested skills

- 若用户想把讨论沉淀为笔记：`obsidian-vault`
- 若用户要做成分享 slides：`academic-pptx-skill`
- 若用户想在实际项目中落地 spec：`brainstorming`（探索需求后产出 spec）

## 注意事项

- 全程使用中文回复
- 无敏感信息需要脱敏
- 无代码 artifacts 需要引用
