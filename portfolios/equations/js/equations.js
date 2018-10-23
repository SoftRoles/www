var equations = [
  // {
  //   category: "em", title: "Pythogoras",
  //   definition: "test formula",
  //   formula: "c = \\pm\\sqrt{a^2 + b^2} \\quad \\text{[unit]}",
  //   ref: "anonymous",
  //   args: [
  //     { id: "a", sym: "\\bm{a}", def: "\\textit{first variable}" },
  //     { id: "b", sym: "\\bm{b}", def: "\\textit{second variable}" },
  //     { id: "c", sym: "\\bm{c}", def: "\\textit{result}", isResult: true },
  //   ],
  //   calc: {
  //     labelWidth: "30px",
  //     vars: { "a": 1, "b": 2, "c": null },
  //     expr: "a+b"
  //   }
  // },
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
      labelWidth: "30px",
      vars: { k: 1, D: "5", lambda: 6.125, G: null },
      expr: "10*log10(k*pi*D/lambda)"
    }
  },
  {
    category: "antenna",
    title: "Power density",
    formula: "S(\\theta,\\phi) = \\dfrac{P_oG(\\theta\\phi)}{4\\pi R^2} \\quad [W/m^2]",
    ref: "Thomas A. Milligan, Modern Antenna Design, 2nd Ed., Chapter 3, Page 4",
    args: [
      { id: "Po", sym: "P_o", def: "\\textit{Input power [W]}" },
      { id: "G", sym: "G", def: "\\textit{Antenna gain []}" },
      { id: "R", sym: "R", def: "\\textit{Distance [m]}" },
      { id: "S", sym: "S", def: "\\textit{Power density } \\it{[W\\negthickspace /\\enspace m^2]}", resIndex: 1 },
      { id: "SdB", sym: "S", def: "\\textit{Power density } \\it{[dBW\\negthickspace /\\enspace m^2]}", resIndex: 2 }
    ],
    calc: {
      labelWidth: "30px",
      vars: { Po: 3, G: 31.62, R: 1E6, S: null, SdB: null },
      expr: ["Po*G/(4*pi*R^2)", "10*log10(Po*G/(4*pi*R^2))"],
    }
  },
  {
    category: "antenna",
    title: "Antenna efficiency",
    formula: "\\eta_e = \\dfrac{P_r}{P_o} = \\int_{0}^{2\\pi}\\int_{0}^{\\pi}\\dfrac{G(\\theta\\phi)}{4\\pi}\\sin\\theta d\\theta d\\phi",
    ref: "Thomas A. Milligan, Modern Antenna Design, 2nd Ed., Chapter 3, Page 4",
    args: [
      { id: "Pr", sym: "P_r", def: "\\textit{Radiated power [W]}" },
      { id: "Po", sym: "P_o", def: "\\textit{Input power [W]}" },
      { id: "G", sym: "G", def: "\\textit{Antenna gain []}" },
      { id: "eta", sym: "\\eta_e", def: "\\textit{Antenna efficiency []}", isResult: true },
    ],
  },
]