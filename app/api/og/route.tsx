import { ImageResponse } from "@vercel/og";
import { NextRequest } from "next/server";

export const runtime = "experimental-edge";

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl;
  const title =
    searchParams.get("title") ?? "Unveiling the secrets of Web Development";
  const bgImage =
    searchParams.get("bgImage") ??
    "http://www.code-insights.dev/assets/blog/creative-ways-of-use-reducer/cover.png"; 

  const username = searchParams.get("username");
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundImage: `url('${bgImage}')`,
        }}
      >
        <div tw="flex bg-gray-50 bg-opacity-70">
          <div tw="flex flex-col md:flex-row w-full py-12 px-4 md:items-center justify-between p-8">
            <h2 tw="flex flex-col text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 text-left">
              <span tw="text-5xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-8">
              {title}
              </span>
              <span>// code-insights.dev</span>
            </h2>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 600,
    }
  );
}
