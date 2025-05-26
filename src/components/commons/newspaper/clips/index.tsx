export default function Clips({ clips }: { clips: string[] }) {
  return (
    <>
      <h1 className="pb-6 text-center font-title text-3xl font-bold text-primary lg:text-5xl">
        Clipes da Semana
      </h1>
      <div className="grid min-h-[800px] flex-col gap-4 lg:min-h-[401px] lg:grid-cols-2 lg:pt-4">
        {clips.map((clip) => {
          return (
            <iframe
              title="Clipe da Semana na Twitch"
              key={clip}
              src={`https://clips.twitch.tv/embed?clip=${clip}&parent=${process.env.APP_BASE_URL}`}
              allowFullScreen={true}
              className="h-full w-full rounded-lg border-2 border-primary bg-primary"
            ></iframe>
          );
        })}
      </div>
    </>
  );
}
