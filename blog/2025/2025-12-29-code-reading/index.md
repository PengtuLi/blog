---
title: "How to Read Code?"
authors: [OrionLi]
tags: ["code"]
---

## 技巧

1. learn from earlier unoptimized version

一个技巧（learned from reading the source code of lamma.cpp）：阅读高度优化的代码以掌握底层概念是一种相当不理想的学习方法。建议通过在GitHub的`karpathy/llama2.c/run.c`的master分支中进行调试来代替。它是故意完全未优化的（即使是矩阵乘法也是最基本的“原始”实现。

同理，对于一个复杂的代码，我们可以找有没有人写出它的一个简要版本代码，或是从该库的早期版本学习。

2. using the working exp and debugger to step into

In general, the starting point would be to get a **working example** and then **use a debugger** to step through the code.

3. start from other's tutorials

对于复杂的项目以及自己不熟悉的领域，可以通过他人的优秀的解析blog以及video，来快速在high level掌控整个项目，以及该项目最重要的概念/函数/类。

4. 不要逐行阅读：80% 的代码是常规逻辑，聚焦 20% 的核心路径。

5. 修改代替阅读：尝试修复一个简单 bug 或实现简单版本/模块替换，实践出真知。

## 最佳实践

### 自顶向下

```
1. 宏观层：架构图 → 了解整体布局
2. 中观层：定位关键模块，理清数据/控制流。
3. 微观层：理解具体算法、边界条件、性能细节。
```

### 5W1H 原则

用问题驱动阅读：
Why：为什么这样设计？（替代方案是什么？）
What：这个模块的核心职责是什么？
Who：谁调用它？它依赖谁？
Where：关键逻辑存在于哪些文件？
When：生命周期何时触发？（初始化/销毁时机）
How：如何处理边界情况？（空输入、超时、并发）
