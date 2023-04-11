import React from "react";
import Container from "../../../components/container";
import PostBody from "../../../components/post-body";
import Header from "../../../components/header";
import PostHeader from "../../../components/post-header";
import { getPostBySlug, getAllPosts } from "../../../lib/api";
import markdownToHtml from "../../../lib/markdownToHtml";
import type PostType from "../../../interfaces/post";


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
      images: `http://code-insights/api/og?title=${post.title}&bgImage=https://www.code-insights.dev${post.ogImage.url}`,
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
  const content = await markdownToHtml(post.content || "");

  const title = `${post.title} | Code Insight`;

  return (
      <Container>
        <Header />
        <>
          <article className="mb-32">
            <PostHeader
              title={post.title}
              coverImage={post.coverImage}
              date={post.date}
              author={post.author}
            />
            <PostBody content={content} />
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
