import React from "react";
import Container from "../components/container";
import MoreStories from "../components/more-stories";
import HeroPost from "../components/hero-post";
import Intro from "../components/intro";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import PostType from "../interfaces/post";


export default function Index() {
  const allPosts = getAllPosts([
    "title",
    "date",
    "slug",
    "author",
    "coverImage",
    "excerpt",
  ])as unknown as PostType[];

  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Head>
        <title>Code Insight | Unveiling the secrets of Web Development</title>
      </Head>
      <Container>
        <Intro />
        {heroPost && (
          <HeroPost
            title={heroPost.title}
            coverImage={heroPost.coverImage}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
        )}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </>
  );
}
