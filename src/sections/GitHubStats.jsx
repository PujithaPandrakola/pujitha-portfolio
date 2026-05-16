const GitHubStats = () => {
  return (

    <section
      className="bg-[#020617] px-6 py-28"
    >

      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-5xl md:text-6xl font-bold text-white mb-20">
          GitHub Activity
        </h1>

        <div className="grid md:grid-cols-2 gap-10">

          {/* STATS */}

          <div className="bg-white/5 border border-cyan-400/20 rounded-3xl p-6">

            <img
              src="https://github-readme-stats.vercel.app/api?username=PujithaPandrakola&show_icons=true&theme=tokyonight"
              alt="github stats"
              className="rounded-2xl w-full"
            />

          </div>

          {/* STREAK */}

          <div className="bg-white/5 border border-cyan-400/20 rounded-3xl p-6">

            <img
              src="https://streak-stats.demolab.com?user=PujithaPandrakola&theme=tokyonight"
              alt="github streak"
              className="rounded-2xl w-full"
            />

          </div>

        </div>

      </div>

    </section>
  )
}

export default GitHubStats