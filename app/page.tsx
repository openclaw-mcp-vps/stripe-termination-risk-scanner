export default function Page() {
  const faqs = [
    {
      q: "How does the risk scanner work?",
      a: "It connects to your Stripe account via API, analyzes transaction patterns, chargeback rates, refund ratios, and business model signals, then uses AI to generate a risk score and actionable recommendations."
    },
    {
      q: "Will this guarantee my Stripe account won't be terminated?",
      a: "No tool can guarantee that, but early detection of risk factors gives you time to remediate issues before Stripe acts. Most terminations follow patterns that are detectable weeks in advance."
    },
    {
      q: "Is my Stripe data secure?",
      a: "Yes. We use read-only Stripe API keys, never store raw transaction data, and all analysis runs over encrypted connections. You can revoke access at any time."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest font-semibold">
          Payment Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Scan Your Business for{" "}
          <span className="text-[#58a6ff]">Stripe Termination Risks</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          AI-powered analysis of your transaction patterns, chargeback rates, and compliance signals — before Stripe pulls the plug on your revenue.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-4 rounded-lg text-base transition-colors"
        >
          Start Scanning — $79/mo
        </a>
        <p className="mt-4 text-xs text-[#484f58]">Cancel anytime. Read-only Stripe access. No data stored.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { label: "Risk Score", desc: "0–100 termination risk score updated daily based on live Stripe data" },
            { label: "Pattern Detection", desc: "Flags chargeback spikes, refund anomalies, and velocity triggers" },
            { label: "Fix Playbook", desc: "Prioritized action items to reduce risk before Stripe notices" }
          ].map((f) => (
            <div key={f.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-[#58a6ff] font-semibold mb-1 text-sm">{f.label}</div>
              <div className="text-[#8b949e] text-sm">{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="bg-[#161b22] border border-[#30363d] rounded-2xl p-8 text-center">
          <div className="text-[#58a6ff] text-sm font-semibold uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$79<span className="text-xl text-[#8b949e] font-normal">/mo</span></div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to protect your Stripe account</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Daily automated risk scans",
              "AI-generated fix recommendations",
              "Chargeback & refund monitoring",
              "Email alerts on risk spikes",
              "Compliance checklist dashboard",
              "Unlimited Stripe accounts"
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg text-sm transition-colors"
          >
            Get Started Now
          </a>
          <p className="mt-3 text-xs text-[#484f58]">Secure checkout via Lemon Squeezy</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{faq.q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{faq.a}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[#484f58] mt-12">&copy; {new Date().getFullYear()} Stripe Termination Risk Scanner. Not affiliated with Stripe, Inc.</p>
      </section>
    </main>
  );
}
