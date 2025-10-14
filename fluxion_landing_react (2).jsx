import React from "react";

export default function FluxionLanding() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-slate-900 via-slate-900 to-sky-950 text-slate-100 antialiased">
      <header className="w-full max-w-4xl px-6 py-6">
        <h1 className="text-3xl font-bold tracking-tight">Fluxion <span className="text-sky-400">FLX</span></h1>
        <p className="text-sm text-slate-400">Where value flows endlessly</p>
        <nav className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-slate-300">
          <a href="https://tradefluxion.com" className="hover:text-white">Home</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#tokenomics" className="hover:text-white">Tokenomics</a>
          <a href="#roadmap" className="hover:text-white">Roadmap</a>
          <a href="#team" className="hover:text-white">Team</a>
          <a href="#contact" className="px-3 py-1 bg-sky-500 rounded text-slate-900 font-semibold hover:opacity-90">Join</a>
        </nav>
      </header>

      <main className="w-full max-w-4xl px-6 py-10">
        <section>
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">Fluxion — <span className="text-sky-400">Where value flows</span> endlessly.</h2>
          <p className="mt-6 text-slate-300">Fluxion (FLX) is a next-generation, energy-efficient token built for continuous liquidity, community governance, and sustainable growth. Stake for yield, vote in the DAO, and watch value circulate — not stagnate.</p>

          <div className="mt-8 flex justify-center gap-4">
            <a href="https://tradefluxion.com/buy" className="px-5 py-3 bg-sky-500 text-slate-900 rounded-lg font-semibold shadow">Buy / Explore FLX</a>
            <a href="https://tradefluxion.com/whitepaper" className="px-5 py-3 border border-slate-700 rounded-lg text-slate-300 hover:text-white">Whitepaper</a>
          </div>

          <div className="mt-6 flex justify-center gap-2 text-xs text-slate-400">
            <span className="px-2 py-1 bg-slate-800 rounded">Chain: Optimism</span>
            <span className="px-2 py-1 bg-slate-800 rounded">Standard: ERC-20</span>
          </div>
        </section>

        <section id="about" className="mt-16 bg-gradient-to-b from-slate-800/30 to-transparent rounded-xl p-8">
          <h3 className="text-2xl font-bold">About Fluxion</h3>
          <p className="mt-4 text-slate-300">Fluxion keeps value in motion. Automated liquidity rewards, strategic burns, and staking utilities make FLX thrive through participation. The treasury funds grants and ecosystem growth, while holders shape priorities through an on-chain DAO.</p>
        </section>

        <section id="tokenomics" className="mt-12">
          <h3 className="text-2xl font-bold">Tokenomics</h3>
          <ul className="mt-4 space-y-2 text-slate-300">
            <li><strong>Total supply:</strong> 1,000,000,000 FLX</li>
            <li><strong>Initial circulating:</strong> 200,000,000 FLX (20%)</li>
            <li><strong>Community & liquidity:</strong> 40% (400M)</li>
            <li><strong>Treasury (grants):</strong> 20% (200M)</li>
            <li><strong>Staking rewards:</strong> 18% (180M)</li>
          </ul>
        </section>

        <section id="roadmap" className="mt-12 p-6 rounded-xl bg-gradient-to-r from-slate-800/30 to-transparent">
          <h3 className="text-2xl font-bold">Roadmap (12 months)</h3>
          <ol className="mt-4 space-y-3 text-slate-300 list-decimal list-inside">
            <li>Smart contract deployment and audit.</li>
            <li>Private sale, airdrops, and DEX listing.</li>
            <li>Staking pools and DAO launch.</li>
            <li>Community grants and transparency reports.</li>
            <li>Cross-chain bridge and exchange listings.</li>
          </ol>
        </section>

        <section id="contact" className="mt-12 p-8 rounded-xl bg-slate-900/50 flex flex-col items-center gap-4">
          <h4 className="text-xl font-bold">Join the Flow</h4>
          <p className="text-slate-300">Follow Fluxion for updates, staking, and DAO news.</p>
          <div className="flex gap-4">
            <a href="https://tradefluxion.com/discord" className="px-4 py-2 bg-sky-500 rounded font-semibold text-slate-900">Discord</a>
            <a href="https://x.com/tradefluxion" target="_blank" rel="noopener noreferrer" className="px-4 py-2 border border-slate-700 rounded text-slate-300">Follow on X</a>
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t border-slate-800 py-6 text-center text-sm text-slate-500 w-full">
        <div>© {new Date().getFullYear()} <a href="https://tradefluxion.com" className="text-sky-400 hover:underline">tradefluxion.com</a> • Not financial advice. Smart contracts audited & verified before launch.</div>
      </footer>
    </div>
  );
}
