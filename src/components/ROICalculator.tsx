import { useState } from 'react';

export default function ROICalculator() {
  const [isOpen, setIsOpen] = useState(false);
  const [monthlyBudget, setMonthlyBudget] = useState(5000);
  const [avgOrderValue, setAvgOrderValue] = useState(100);
  const [conversionRate, setConversionRate] = useState(2);
  const [profitMargin, setProfitMargin] = useState(30);

  const calculations = {
    clicks: Math.round(monthlyBudget / 1.5),
    conversions: Math.round((monthlyBudget / 1.5) * (conversionRate / 100)),
    revenue: Math.round((monthlyBudget / 1.5) * (conversionRate / 100) * avgOrderValue),
    profit: Math.round((monthlyBudget / 1.5) * (conversionRate / 100) * avgOrderValue * (profitMargin / 100) - monthlyBudget),
    roas: ((monthlyBudget / 1.5) * (conversionRate / 100) * avgOrderValue / monthlyBudget).toFixed(2),
    roi: (((monthlyBudget / 1.5) * (conversionRate / 100) * avgOrderValue * (profitMargin / 100) - monthlyBudget) / monthlyBudget * 100).toFixed(0)
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="w-full py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
      >
        🧮 Open ROI Calculator
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-slate-900 rounded-2xl border border-blue-500/20 shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-gradient-to-r from-blue-600 to-cyan-600 p-6 flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white">Marketing ROI Calculator</h2>
                <p className="text-white/80 text-sm mt-1">See your potential returns</p>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="p-8 space-y-8">
              {/* Inputs */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Monthly Ad Budget: <span className="text-blue-400">${monthlyBudget.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="100000"
                    step="1000"
                    value={monthlyBudget}
                    onChange={(e) => setMonthlyBudget(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Average Order Value: <span className="text-blue-400">${avgOrderValue}</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="1000"
                    step="10"
                    value={avgOrderValue}
                    onChange={(e) => setAvgOrderValue(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Conversion Rate: <span className="text-blue-400">{conversionRate}%</span>
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="10"
                    step="0.5"
                    value={conversionRate}
                    onChange={(e) => setConversionRate(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-300 mb-2">
                    Profit Margin: <span className="text-blue-400">{profitMargin}%</span>
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="80"
                    step="5"
                    value={profitMargin}
                    onChange={(e) => setProfitMargin(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>

              {/* Results */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-blue-500/20 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                    {calculations.roas}x
                  </div>
                  <div className="text-slate-400">ROAS</div>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/20 rounded-xl p-6 text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                    ${calculations.revenue.toLocaleString()}
                  </div>
                  <div className="text-slate-400">Monthly Revenue</div>
                </div>
                <div className={`bg-gradient-to-br ${calculations.profit > 0 ? 'from-green-500/10 to-emerald-500/10 border-green-500/20' : 'from-red-500/10 to-pink-500/10 border-red-500/20'} border rounded-xl p-6 text-center`}>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${calculations.profit > 0 ? 'from-green-400 to-emerald-400' : 'from-red-400 to-pink-400'} bg-clip-text text-transparent mb-2`}>
                    ${calculations.profit.toLocaleString()}
                  </div>
                  <div className="text-slate-400">Monthly Profit</div>
                </div>
              </div>

              {/* Details */}
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-4">Detailed Breakdown</h3>
                <div className="space-y-3">
                  <div className="flex justify-between text-slate-300">
                    <span>Estimated Clicks:</span>
                    <span className="font-semibold">{calculations.clicks.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>Estimated Conversions:</span>
                    <span className="font-semibold">{calculations.conversions}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>ROI:</span>
                    <span className={`font-semibold ${Number(calculations.roi) > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {calculations.roi}%
                    </span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="text-center">
                <p className="text-slate-400 mb-4">Ready to achieve these results?</p>
                <a
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-xl font-bold hover:shadow-lg hover:shadow-blue-500/30 transition-all"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
