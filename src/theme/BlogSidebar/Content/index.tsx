/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React, {memo, type ReactNode} from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import {useThemeConfig} from '@docusaurus/theme-common';
import {groupBlogSidebarItemsByYear} from '@docusaurus/plugin-content-blog/client';
import Heading from '@theme/Heading';
import type {Props} from '@theme/BlogSidebar/Content';

function SidebarYearGroup({
  year,
  yearGroupHeadingClassName,
  children,
}: {
  year: string;
  yearGroupHeadingClassName?: string;
  children: ReactNode;
}): ReactNode {
  return (
    <div role="group">
      <Heading as="h3" className={yearGroupHeadingClassName}>
        {year}
      </Heading>
      {children}
    </div>
  );
}

function BlogSidebarContent({
  items,
  ListComponent,
  yearGroupHeadingClassName,
}: Props): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  const pinnedPermalinks: string[] =
    (siteConfig.customFields?.pinnedBlogPosts as string[]) ?? [];

  const pinnedItems = items.filter((item) =>
    pinnedPermalinks.includes(item.permalink),
  );
  const normalItems = items.filter(
    (item) => !pinnedPermalinks.includes(item.permalink),
  );

  const {blog} = useThemeConfig();

  return (
    <>
      {pinnedItems.length > 0 && (
        <div role="group">
          <Heading as="h3" className={yearGroupHeadingClassName}>
            Pinned
          </Heading>
          <ListComponent items={pinnedItems} />
        </div>
      )}
      {blog.sidebar.groupByYear ? (
        groupBlogSidebarItemsByYear(normalItems).map(([year, yearItems]) => (
          <SidebarYearGroup
            key={year}
            year={year}
            yearGroupHeadingClassName={yearGroupHeadingClassName}>
            <ListComponent items={yearItems} />
          </SidebarYearGroup>
        ))
      ) : (
        <ListComponent items={normalItems} />
      )}
    </>
  );
}

export default memo(BlogSidebarContent);
