import { useState } from 'react';

interface CalculatorProps {
  darkMode: boolean;
}

export default function Calculator({ darkMode }: CalculatorProps) {
  const [adSpend, setAdSpend] = useState(5000);
  const [avgOrderValue, setAvgOrderValue] = useState(75);
  const [conversionRate, setConversionRate] = useState(3.5);
  const [profitMargin, setProfitMargin] = useState(40);

  const clicks = Math.round(adSpend / 1.5); // avg CPC
  const conversions = Math.round(clicks * (conversionRate / 100));
  const revenue = conversions * avgOrderValue;
  const roas = (revenue / adSpend).toFixed(2);
  const profit = revenue * (profitMargin / 100) - adSpend;
  const roi = ((profit / adSpend) * 100).toFixed(0);

  return (
    <section id="results" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-4">
            ROI Calculator
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold mb-4">
            See Your Potential{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Returns
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Adjust the sliders to estimate your campaign performance. These are conservative projections based on industry benchmarks.
          </p>
        </div>

        <div className={`max-w-4xl mx-auto rounded-3xl border p-8 sm:p-10 ${darkMode ? 'bg-gray-900/80 border-gray-800' : 'bg-white border-gray-200 shadow-2xl'}`}>
          <div className="grid lg:grid-cols-2 gap-10">
            {/* Inputs */}
            <div className="space-y-8">
              <div>
                <label className="flex justify-between mb-3">
                  <span className="text-sm font-medium">Monthly Ad Spend</span>
                  <span className="text-sm font-bold text-violet-400">${adSpend.toLocaleString()}</span>
                </label>
                <input
                  type="range" min="1000" max="50000" step="500"
                  value={adSpend}
                  onChange={(e) => setAdSpend(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gray-700 accent-violet-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$1,000</span><span>$50,000</span>
                </div>
              </div>

              <div>
                <label className="flex justify-between mb-3">
                  <span className="text-sm font-medium">Average Order Value</span>
                  <span className="text-sm font-bold text-fuchsia-400">${avgOrderValue}</span>
                </label>
                <input
                  type="range" min="20" max="500" step="5"
                  value={avgOrderValue}
                  onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gray-700 accent-fuchsia-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$20</span><span>$500</span>
                </div>
              </div>

              <div>
                <label className="flex justify-between mb-3">
                  <span className="text-sm font-medium">Conversion Rate</span>
                  <span className="text-sm font-bold text-cyan-400">{conversionRate}%</span>
                </label>
                <input
                  type="range" min="1" max="10" step="0.5"
                  value={conversionRate}
                  onChange={(e) => setConversionRate(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gray-700 accent-cyan-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>1%</span><span>10%</span>
                </div>
              </div>

              <div>
                <label className="flex justify-between mb-3">
                  <span className="text-sm font-medium">Profit Margin</span>
                  <span className="text-sm font-bold text-amber-400">{profitMargin}%</span>
                </label>
                <input
                  type="range" min="10" max="80" step="5"
                  value={profitMargin}
                  onChange={(e) => setProfitMargin(Number(e.target.value))}
                  className="w-full h-2 rounded-full appearance-none cursor-pointer bg-gray-700 accent-amber-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>10%</span><span>80%</span>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="space-y-4">
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                <div className="text-sm text-gray-400 mb-1">Monthly Revenue</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
                  ${revenue.toLocaleString()}
                </div>
              </div>
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                <div className="text-sm text-gray-400 mb-1">ROAS (Return on Ad Spend)</div>
                <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                  {roas}x
                </div>
              </div>
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                <div className="text-sm text-gray-400 mb-1">Monthly Profit</div>
                <div className={`text-3xl font-bold ${profit > 0 ? 'bg-gradient-to-r from-green-400 to-emerald-400' : 'bg-gradient-to-r from-red-400 to-orange-400'} bg-clip-text text-transparent`}>
                  ${profit.toLocaleString()}
                </div>
              </div>
              <div className={`p-6 rounded-2xl ${darkMode ? 'bg-gray-800/50' : 'bg-gray-50'}`}>
                <div className="text-sm text-gray-400 mb-1">ROI</div>
                <div className={`text-3xl font-bold ${Number(roi) > 0 ? 'bg-gradient-to-r from-green-400 to-cyan-400' : 'bg-gradient-to-r from-red-400 to-orange-400'} bg-clip-text text-transparent`}>
                  {roi}%
                </div>
              </div>
            </div>
          </div>

          <div className={`mt-8 p-4 rounded-xl text-center text-sm ${darkMode ? 'bg-violet-500/10 text-violet-300' : 'bg-violet-50 text-violet-700'}`}>
            💡 With proper optimization, these numbers can improve by 30-50% over 3 months. <a href="#contact" className="underline font-medium">Let's discuss your campaign →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
