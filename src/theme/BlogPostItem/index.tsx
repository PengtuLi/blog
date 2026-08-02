// 本文件是对 Docusaurus 默认主题组件 BlogPostItem 的覆盖（官方叫 swizzle）。
// 只要把这个文件放在 src/theme/BlogPostItem/index.tsx，
// Docusaurus 构建时就会自动用它替换默认实现。
//
// 目的：博客列表页（/blog、/blog/tags）每篇文章只显示
// 标题 + 日期 + 阅读时长，不再显示 truncate 摘要。
// 文章详情页保持默认行为不变。

import React, {type ReactNode} from 'react';
// useBlogPost 是 Docusaurus 提供的 Hook，
// 能拿到当前文章的信息，其中 isBlogPostPage 表示
// 「当前是不是在某篇文章的详情页」。
import {useBlogPost} from '@docusaurus/plugin-content-blog/client';
// 下面四个是默认主题的子组件，我们直接复用：
// Container  - 外层容器（<article> 标签 + 文章元数据）
// Header     - 标题、日期、阅读时长
// Content    - 正文（列表页里就是被 truncate 截断的摘要）
// Footer     - 标签、编辑链接、「阅读更多」按钮
import BlogPostItemContainer from '@theme/BlogPostItem/Container';
import BlogPostItemHeader from '@theme/BlogPostItem/Header';
import BlogPostItemContent from '@theme/BlogPostItem/Content';
import BlogPostItemFooter from '@theme/BlogPostItem/Footer';
import type {Props} from '@theme/BlogPostItem';

export default function BlogPostItem({children, className}: Props): ReactNode {
  const {isBlogPostPage} = useBlogPost();

  // 情况一：列表页（/blog 列表、/blog/tags 标签页）。
  // 只渲染 Header（标题 + 日期 + 阅读时长），
  // 不渲染 Content（摘要）。
  // Footer 仍然保留：文章没有 truncate 标记时它不会输出任何内容，
  // 有 truncate 标记时会在标题下方显示「阅读更多」链接。
  if (!isBlogPostPage) {
    return (
      <BlogPostItemContainer className={className}>
        <BlogPostItemHeader />
        <BlogPostItemFooter />
      </BlogPostItemContainer>
    );
  }

  // 情况二：文章详情页。
  // 与默认主题完全一致：Header + 正文 + Footer，原样输出。
  // children 就是文章的正文内容，由 Docusaurus 传进来。
  return (
    <BlogPostItemContainer className={className}>
      <BlogPostItemHeader />
      <BlogPostItemContent>{children}</BlogPostItemContent>
      <BlogPostItemFooter />
    </BlogPostItemContainer>
  );
}
