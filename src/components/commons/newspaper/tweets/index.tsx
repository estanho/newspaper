import { unstable_cache } from "next/cache";
import { Suspense } from "react";
import { EmbeddedTweet, TweetNotFound, TweetSkeleton } from "react-tweet";
import { getTweet as _getTweet } from "react-tweet/api";

const getTweet = unstable_cache(
  async (id: string) => _getTweet(id),
  ["tweet"],
  { revalidate: 3600 * 24 }
);

async function TweetPage({ id }: { id: string }) {
  try {
    const tweet = await getTweet(id);
    return tweet ? <EmbeddedTweet tweet={tweet} /> : <TweetNotFound />;
  } catch (error) {
    return <TweetNotFound error={error} />;
  }
}

export default async function Tweets({ tweets }: { tweets: string[] }) {
  return (
    <>
      <h1 className="text-center font-title text-3xl font-bold text-primary lg:text-5xl">
        Tweets da Semana
      </h1>
      <div
        className="grid w-full grid-cols-1 lg:grid-cols-2 lg:gap-2 lg:pt-4"
        data-theme="light"
      >
        <Suspense fallback={<TweetSkeleton />}>
          {tweets.map((_, index) => {
            return (
              <div className="tweet" key={index} data-theme="light">
                <TweetPage id={tweets[index]} />
              </div>
            );
          })}
        </Suspense>
      </div>
    </>
  );
}
