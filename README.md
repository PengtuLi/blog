## WELCOME

> "Think different." —— Apple Inc.

Hi, thank you for visiting here ;-)

## 目录说明

| 目录 | 网站栏目 | 定位 |
| --- | --- | --- |
| `blog/` | Blog | **成品文章**：一次写完、有明确论点、值得将来重读的东西（按日期组织） |
| `content/paper/` | Paper | 论文阅读：精读 / 泛读 / 科研方法 |
| `content/learning/` | Learning | 学习笔记：课程、语言（`计算机/Python` 等）、单词卡等持续累积的材料 |
| `content/leetcode/` | LeetCode | 刷题笔记leetcode/leetgpu，八股 |
| `content/reflection/` | Reflection | 复盘：`<year>/index.md` 月记 + `<year>/daily.md` 每日思考（单文件按日期追加） |

一句话规则：**会持续累积、没有"写完"那一天的放 `content/`（工作底稿）；一次写完、成文的放 `blog/`（成品）。**

同一件事可以两边都有：`content/` 里是过程笔记，`blog/` 里是最后的成文总结，blog 里可以链接回底稿。

## 复盘路径

1. `content/reflection/<year>/` —— 年度入口：`daily.md` 每日原料 → 月记提炼 → 值得成文的写成 blog
2. 各主题目录下的 `index.md` —— 某个主题是做什么，学过什么、产出了哪篇 blog
3. `blog/` —— 按时间翻成品文章，或通过 tags 检索

## 写作约定

- **tags 分两层**（参照 WordPress category/tag 二分和 Stack Overflow 惯例）：

  **类别层**：少量、稳定、不轻易新增。一篇成品文章属于哪类读物。

  | 类别 | 含义 |
  | --- | --- |
  | `methodology` | 方法论：怎么做事（读代码、写伪代码……） |
  | `project` | 精读/拆解一个具体项目（nano-vllm、nanocode……） |
  | `think` | 非技术的思考与成长记录 |

  **话题层**：按 Stack Overflow 惯例自由新增。一篇涉及什么话题。

  | 轴 | 含义 | 例子 |
  | --- | --- | --- |
  | 主题 | 内容关于什么领域 | `llm` `network` `linux` |
  | 工具 | 以某工具为绝对主角时才用 | `neovim`（配角工具不打 tag，交给全文搜索） |

  判断新文章打什么 tag 的顺序：先定类别（三选一或没有）→ 再标主题 → 只有通篇围绕某个工具才加工具 tag。
  **避免** `code`、`tech`、`misc` 这种什么都能装的 tag——等于没分类。
  命名惯例：全小写，多词用连字符，用最具体的适用 tag。
  新增 tag 直接写在 front matter 里即可，然后顺手在 `blog/tags.yml` 补一行定义（否则 tag 页显示原始字符串）。
  将来类别层文章多到需要细分时，可升级到 Diátaxis 四分类（tutorial / how-to / reference / explanation）。
- **tags 只在 blog 内部生效**（生成 `/blog/tags/xxx` 聚合页）。`content/` 的笔记没有 tag 聚合页，跨目录串联靠**正文用词一致**：写 blog 时提及对应笔记的关键词（如"CS336 里记过"），写笔记时用同样的词，之后本地 `grep` 或编辑器全局搜索就能一次命中两边。
- 新文章放哪不用纠结：模糊地带随便选一个放，之后随时可以挪（目录调整成本几乎为零）。

## License

Released under the **MIT License**.

Copyright © Orion Li
