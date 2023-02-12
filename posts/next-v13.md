---
title: 'Next.js 13'
date: '2023-02-12'
---

### New app Directory (Beta)

Today, we're improving the routing and layouts experience in Next.js and aligning with the future of React with the introduction of the app directory. This is a follow-up to the Layouts RFC previously published for community feedback.

The app directory is currently in beta and we do not recommend using it in production yet. You can use Next.js 13 with the pages directory with stable features like the improved next/image and next/link components, and opt into the app directory at your own pace. The pages directory will continue to be supported for the foreseeable future.

The app directory includes support for:

- Layouts: Easily share UI between routes while preserving state and avoiding expensive re-renders.
- Server Components: Making server-first the default for the most dynamic applications.
- Streaming: Display instant loading states and stream in units of UI as they are rendered.
- Support for Data Fetching: async Server Components and extended fetch API enables component-level fetching.

[Official Doc - Next 13](https://nextjs.org/blog/next-13)