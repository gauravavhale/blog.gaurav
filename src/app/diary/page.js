import Image from 'next/image'
import React from 'react'

const Diary = () => {
  return (
    <div className="min-h-screen mt-20 md:flex md:justify-center bg-[#121212] text-gray-300 px-4 md:px-10 lg:px-32">

      <div className="w-full md:w-[70vw] space-y-12">

        {/* Section Block */}
        <section className="border-b border-gray-700 pb-6">
          <h1 className="text-2xl font-bold text-white mb-3">📖 Dear Diary</h1>
          <p className="text-gray-400 leading-relaxed">
            There are moments in life that never make it to social media, but they live deeply in our memories quiet thoughts, small victories, little disappointments, and everything in between. This space is for those moments.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            {`I never imagined I’d end up writing a diary on a blog, but here I am — sharing a slice of my real, unfiltered life. No fancy edits, no polished updates. Just raw thoughts and honest reflections.`}
          </p>
        </section>

        {/* Where I Started */}
        <section className="border-b border-gray-700 pb-6">
          <h1 className="text-2xl font-bold text-white mb-3">🌱 Where I Started</h1>
          <p className="text-gray-400 leading-relaxed">
            I was born and raised in Chhatrapati Sambhajinagar a quiet, observant kid who mostly kept to himself, surrounded by a few close friends and a head full of dreams. Growing up, I believed that if I followed the usual path, everything would fall into place.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            {`But somewhere along the way, life started unfolding differently than I had imagined. There was a phase when nothing seemed to align with my plans. I felt stuck like I had missed the train everyone else seemed to be on. But sometimes, it's when you feel completely lost that you start discovering who you truly are.`}
          </p>
        </section>

        {/* Turning Point */}
        <section className="border-b border-gray-700 pb-6">
          <h1 className="text-2xl font-bold text-white mb-3">🔄 Turning Point</h1>
          <p className="text-gray-400 leading-relaxed">
            During the lockdown, everything slowed down including my thoughts and plans. I had a lot of time on my hands, but no clear idea of what to do next. It felt like I was just passing the days, hoping something would change on its own.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            {`After graduating in 2022, something inside me shifted. I started thinking deeply about where I was heading. That’s when I realized a career in tech doesn’t always need a fancy degree. What it really needs is curiosity, effort, and the willingness to keep going, even when things get tough. So, I decided to go all in.`}          </p>
        </section>

        {/* Rebuilding Myself */}
        <section className="border-b border-gray-700 pb-6">
          <h1 className="text-2xl font-bold text-white mb-3">💻 Rebuilding Myself</h1>
          <p className="text-gray-400 leading-relaxed">
            {`Starting from scratch was overwhelming at first. I didn’t come from a tech background, and everything felt new — HTML, CSS, JavaScript, React, Node… it was a whole different world. But I was curious, and that curiosity pushed me forward.`}
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            In my MERN stack classes, I learned step by step how the web works, how frontend connects to backend, and how to build something that actually runs. I still remember how excited I was when my first project worked without errors. It was a small achievement, but it gave me a huge confidence boost.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Over time, I built more projects — from portfolios to a fully working e-commerce app. With each one, I not only improved my skills but also proved to myself that I could do this. Now, when I look back at where I started, I feel proud. I may not have taken the usual route, but I built my foundation brick by brick — with patience, persistence, and a lot of Google searches.
          </p>
        </section>

        {/* What's Next */}
        <section className="border-b border-gray-700 pb-6">
          <h1 className="text-2xl font-bold text-white mb-3">{`💭 What’s Next?`}</h1>
          <p className="text-gray-400 leading-relaxed">
            {`I'm currently applying for developer roles and internships. I won’t pretend it’s easy — the rejections can hurt, and self-doubt sometimes creeps in. But I’ve come too far to stop now.`}
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            {`This diary will continue as my journey continues — whether it’s my first job offer, a failed interview, a trip I loved, or just a random thought on a sleepless night.`}
          </p>
        </section>

        {/* Rejections */}
        <section className="border-b border-gray-700 pb-6">
          <h1 className="text-2xl font-bold text-white mb-3">❌ Rejections That Taught Me More Than Books</h1>
          <p className="text-gray-400 leading-relaxed">
            {`I’ve applied to dozens of jobs and internships. Some never responded, others sent rejections. At first, it crushed me. But then I realized — each “no” made me refine my resume, my portfolio, my code. And every rejection pushed me one step closer to that one yes I’m still chasing.`}
          </p>
        </section>

        {/* Personal Blog */}
        <section className="pb-6">
          <h1 className="text-2xl font-bold text-white mb-3">🌐 My Personal Blog Is Live!</h1>
          <p className="text-gray-400 leading-relaxed">
            {`The blog you’re reading now is something I’m really proud of. It's not just a project — it’s my personal space, built with love, lines of code, and stories from my journey. I hope it inspires someone out there who’s still figuring things out.`}
          </p>
        </section>

      </div>
    </div>
  )
}

export default Diary;

