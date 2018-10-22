var equations = [
  {
    category: "em", title: "Pythogoras",
    definition: "test formula",
    formula: "c = \\pm\\sqrt{a^2 + b^2} \\quad \\text{[unit]}",
    ref: "anonymous",
    args: [
      { id: "a", sym: "\\bm{a}", def: "\\textit{first variable}" },
      { id: "b", sym: "\\bm{b}", def: "\\textit{second variable}" },
      { id: "c", sym: "\\bm{c}", def: "\\textit{result}", isResult: true },
    ],
    calc: {
      labelwidth: "30px",
      vars: { "a": 1, "b": 2, "c": null },
      expr: "a+b"
    }
  },
  {
    category: "antenna", title: "Parabolic antenna gain",
    definition: "Approximate gain",
    formula: "G = 10\\log_{10}k\\left(\\dfrac{\\pi D}{\\lambda}\\right) \\quad \\text{[dB]}",
    args: [
      { id: "k", sym: "\\bm{k}", def: "\\textit{is the efficiency factor [0.5 - 0.6]}" },
      { id: "D", sym: "\\bm{D}", def: "\\textit{diameter of the parabolic reflector [m]}" },
      { id: "lambda", sym: "\\bm{\\lambda}", def: "\\textit{wavelength of the signal [m]}" },
      { id: "G", sym: "\\bm{G}", def: "\\textit{Gain [dB]}", isResult: true },
    ],
    calc: {
      labelwidth: "30px",
      vars: { k: 1, D: "5", lambda: 6.125, G: null },
      expr: "10*log10(k*pi*D/lambda)"
    }
  }
]