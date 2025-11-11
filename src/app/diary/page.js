import Image from 'next/image'
import React from 'react'

const Diary = () => {
  return (
    <div className="min-h-screen mt-20 md:flex md:justify-center bg-[#121212] text-gray-300 px-4 md:px-10 lg:px-32">

      <div className="w-full md:w-[70vw] space-y-12">

        <section className="border-b border-gray-700 pb-6">
          <h1 className="text-2xl font-bold text-white mb-3">📖 Dear Diary</h1>
          <p className="text-gray-400 leading-relaxed">
            There are moments in life that never make it to social media, but they live deeply in our memories quiet thoughts, small victories, little disappointments, and everything in between. This space is for those moments.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            {`I never imagined I’d end up writing a diary on a blog, but here I am sharing a slice of my real, unfiltered life. No fancy edits, no polished updates. Just raw thoughts and honest reflections.`}
          </p>
        </section>

        <section className="border-b border-gray-700 pb-6">
          <h1 className="text-2xl font-bold text-white mb-3">🌱 Where I Started</h1>
          <p className="text-gray-400 leading-relaxed">
            I was born and raised in Chhatrapati Sambhajinagar a quiet, observant kid who mostly kept to himself, surrounded by a few close friends and a head full of dreams. Growing up, I believed that if I followed the usual path, everything would fall into place.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            {`But somewhere along the way, life started unfolding differently than I had imagined. There was a phase when nothing seemed to align with my plans. I felt stuck like I had missed the train everyone else seemed to be on. But sometimes, it's when you feel completely lost that you start discovering who you truly are.`}
          </p>
        </section>

        <section className="border-b border-gray-700 pb-6">
          <h1 className="text-2xl font-bold text-white mb-3">🔄 Turning Point</h1>
          <p className="text-gray-400 leading-relaxed">
            During the lockdown, everything slowed down including my thoughts and plans. I had a lot of time on my hands, but no clear idea of what to do next. It felt like I was just passing the days, hoping something would change on its own.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            {`After graduating in 2022, something inside me shifted. I started thinking deeply about where I was heading. That’s when I realized a career in tech doesn’t always need a fancy degree. What it really needs is curiosity, effort, and the willingness to keep going, even when things get tough. So, I decided to go all in.`}          </p>
        </section>

        <section className="border-b border-gray-700 pb-6">
          <h1 className="text-2xl font-bold text-white mb-3">💻 Rebuilding Myself</h1>
          <p className="text-gray-400 leading-relaxed">
            {`Starting from scratch was overwhelming at first. I didn’t come from a tech background, and everything felt new HTML, CSS, JavaScript, React, Node… it was a whole different world. But I was curious, and that curiosity pushed me forward.`}
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            In my MERN stack classes, I learned step by step how the web works, how frontend connects to backend, and how to build something that actually runs. I still remember how excited I was when my first project worked without errors. It was a small achievement, but it gave me a huge confidence boost.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Over time, I built more projects from portfolios to a fully working e-commerce app. With each one, I not only improved my skills but also proved to myself that I could do this. Now, when I look back at where I started, I feel proud. I may not have taken the usual route, but I built my foundation brick by brick with patience, persistence, and a lot of Google searches.
          </p>
        </section>

        <section className="border-b border-gray-700 pb-6">
          <h1 className="text-2xl font-bold text-white mb-3">{`💭 What’s Next?`}</h1>
          <p className="text-gray-400 leading-relaxed">
            {`I'm currently applying for developer roles and internships. I won’t pretend it’s easy the rejections can hurt, and self-doubt sometimes creeps in. But I’ve come too far to stop now.`}
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            {`This diary will continue as my journey continues whether it’s my first job offer, a failed interview, a trip I loved, or just a random thought on a sleepless night.`}
          </p>
        </section>

        <section className="border-b border-gray-700 pb-6">
          <h1 className="text-2xl font-bold text-white mb-3">❌ Rejections That Taught Me More Than Books</h1>
          <p className="text-gray-400 leading-relaxed">
            {`I’ve applied to dozens of jobs and internships. Some never responded, others sent rejections. At first, it crushed me. But then I realized each “no” made me refine my resume, my portfolio, my code. And every rejection pushed me one step closer to that one yes I’m still chasing.`}
          </p>
        </section>

        <section className="border-b border-gray-700 pb-6">
          <h1 className="text-2xl font-bold text-white mb-3">🌐 My Personal Blog Is Live!</h1>
          <p className="text-gray-400 leading-relaxed">
            {`The blog you’re reading now is something I’m really proud of. It's not just a project it’s my personal space, built with love, lines of code, and stories from my journey. I hope it inspires someone out there who’s still figuring things out.`}
          </p>
        </section>

        <section className="border-b border-gray-700 pb-6">
          <h1 className="text-2xl font-bold text-white mb-3">🛒 SwiftCart — My First Real E-Commerce Project</h1>
          <p className="text-gray-400 leading-relaxed">
            SwiftCart was the turning point for me. It was the first time I truly built something end-to-end authentication, product pages, cart system, payment logic, everything. It wasn’t just a project anymore, it felt like I was building a real product.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            There were days where I got stuck on something as small as a button state, and other days where I built entire features in one sitting. But every line of code taught me something new. SwiftCart gave me confidence. It made me believe <span className="text-white font-medium">“Yes, I can actually do this.”</span>
          </p>
        </section>

        <section className="border-b border-gray-700 pb-6">
          <h1 className="text-2xl font-bold text-white mb-3">🍏 UrbanPick Polishing My Skills</h1>
          <p className="text-gray-400 leading-relaxed">
            UrbanPick came when I realized that functionality is only half of a product experience matters too. So I focused on improving the UI: cleaner layouts, better spacing, meaningful animations, and simpler user flow.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            This project taught me how to think from a user’s perspective, not just a developer’s. How can I make the journey smoother? Faster? Simpler? It refined the way I build.
          </p>
        </section>

        <section className="border-b border-gray-700 pb-6">
          <h1 className="text-2xl font-bold text-white mb-3">🌍 WanderLust Travel Hub — The Project Closest to My Heart</h1>
          <p className="text-gray-400 leading-relaxed">
            WanderLust is different. It wasn’t just code it was memories. Places I’ve visited, moments I’ve lived, roads I’ve walked. And I wanted to create a space where I could share them, not for likes or attention, but because they’re pieces of who I am.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            Building this project reminded me why I love creating to express myself. To tell stories. To build something that feels alive.
          </p>
        </section>

        <section className="border-b border-gray-700 pb-6">
          <h1 className="text-2xl font-bold text-white mb-3">🎤 The Interview That Changed Everything</h1>
          <p className="text-gray-400 leading-relaxed">
            Recently, I had an interview. And unlike many before, this one felt different. I wasn’t nervous I was myself. I talked about what I built, how I think, how I learn. And for the first time, I felt heard.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            The interview went well actually, more than well. I walked out with a quiet smile and a warm feeling in my chest. Something inside me knew… <br/><span className="text-white italic">“This is it.”</span>
          </p>
        </section>

        <section className="pb-6">
          <h1 className="text-2xl font-bold text-white mb-3">📄 Receiving My First Offer Letter</h1>
          <p className="text-gray-400 leading-relaxed">
            And then it happened. I received the offer letter my first job as a Frontend Developer. No words, no caption, no celebration can fully express that moment.
          </p>
          <p className="mt-4 text-gray-400 leading-relaxed">
            It felt like everything the late nights, the doubts, the rejections, the frustration, the small wins all of it finally connected. This is just the beginning.<br/> And I’m ready for what comes next.
          </p>
        </section>

      </div>
    </div>
  )
}

export default Diary;

