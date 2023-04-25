import React from "react";
import ReactMarkdown from "react-markdown"
import Code from "../../../components/code";
import { getPostBySlug, getAllPosts } from "../../../lib/api";
import type PostType from "../../../interfaces/post";
import Container from "../../../components/container";
import Header from "../../../components/header";
import PostHeader from "../../../components/post-header";
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
} from '../../../components/mdx/Heading'
import { Text, MDXLink, CodeInline } from '../../../components/mdx/Text'

type Params = {
  slug: string;
};

type Props = {
  params: Params;
};

export async function generateMetadata({ params }) {
  const post = getPostBySlug(params.slug, [
    "title",
    "excerpt",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]) as unknown as PostType;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      images: encodeURI(`http://code-insights.dev/api/og?title=${post.title}&bgImage=http://www.code-insights.dev${post.ogImage.url}`),
    }
  };
}

export default async function Post({ params }: Props) {
  const post = getPostBySlug(params.slug, [
    "title",
    "date",
    "slug",
    "author",
    "content",
    "ogImage",
    "coverImage",
  ]) as unknown as PostType;

  const title = `${post.title} | Code Insight`;

  if(!post.content) return null;

  return (
      <Container>
        <Header />
        <>
          <article className="mb-32">
            <PostHeader
              title={title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <div className="max-w-2xl mx-auto">
              <ReactMarkdown 
                children={post.content} 
                components={{
                  h1: ({node, ...props}) => <Heading1 {...props} />,
                  h2: ({node, ...props}) => <Heading2 {...props} />,
                  h3: ({node, ...props}) => <Heading3 {...props} />,
                  h4: ({node, ...props}) => <Heading4 {...props} />,
                  h5: ({node, ...props}) => <Heading5 {...props} />,
                  h6: ({node, ...props}) => <Heading6 {...props} />,
                  p: ({node, ...props}) => <Text {...props} />,
                  a: ({node, href, ...props}) => <MDXLink {...props} href={href!} className="text-indigo-600" />,
                  code: ({node, inline, className, children, ...props}) => {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <Code lang={match[1]} PreTag="div" children={String(children).replace(/\n$/, '')} />
                    ) : (
                      <CodeInline className={className} {...props} >{children}</CodeInline>
                    )
                  }
                }}
                />
            </div>
          </article>
        </>
      </Container>
  );
}

export async function generateStaticParams() {
  const posts = getAllPosts(["slug"]);

  return posts.map((post) => {
    return {
      slug: post.slug,
    };
  });
}
