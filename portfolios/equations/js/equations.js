var equations = [
  {
    category: "conversion",
    title: "VSWR, reflection coefficient and return  loss",
    formula: " \\begin{aligned} " +
      "VSWR &= \\dfrac{1+S_{11}}{1-S_{11}} = \\dfrac{1+10^{\\frac{-R_L}{20}}}{1-10^{\\frac{-R_L}{20}}} \\\\[15pt]" +
      "S_{11} &= \\dfrac{VSWR-1}{VSWR+1} = 10^{\\frac{-R_L}{20}} \\\\[15pt]" +
      "R_L &= -S_{11} [dB] = -20\\log S_{11} \\\\ &=  -20\\log  \\dfrac{VSWR-1}{VSWR+1} \\quad [dB]" +
      "\\end{aligned} ",
    exchanges: [
      { id: "vswr", sym: "VSWR", def: "\\textit{Voltage standing wave ratio}", format: function (number) { return number.toFixed(3) } },
      { id: "s11", sym: "S_{11}", def: "\\textit{Reflection coefficient}", format: function (number) { return number.toFixed(4) } },
      { id: "rl", sym: "R_L", def: "\\textit{Return loss [dB]}", format: function (number) { return number.toFixed(3) } },
    ],
    calc: {
      labelWidth: "65px",
      vars: { vswr: 1.2, s11: 0.0909, rl: 20.828 },
      expr: [
        ["vswr", "(vswr-1)/(vswr+1)", "-20*log10((vswr-1)/(vswr+1))"],
        ["(1+s11)/(1-s11)", "s11", "-20*log10(s11)"],
        ["(1+10^(-rl/20))/(1-10^(-rl/20))", "10^(-rl/20)", "rl"]
      ]
    }
  },
  {
    category: "antenna",
    title: "Effective isotropic radiated power",
    formula: "EIRP = P_T - L_C + G_A \\quad [dBm]",
    args: [
      { id: "PT", sym: "P_T", def: "\\textit{Output of the transmitter [dBm]}" },
      { id: "LC", sym: "L_C", def: "\\textit{Cable loss [dB]}" },
      { id: "GA", sym: "G_A", def: "\\textit{Antenna gain [dB]}" },
    ],
    yields: [
      { id: "EIRP", sym: "EIRP", def: "\\textit{Effective isotropic radiated power [dBm]}", format: function (number) { return number.toFixed(1) } },
    ],
    calc: {
      labelWidth: "65px",
      vars: { PT: 30, LC: 15, GA: 12 },
      expr: ["PT-LC+GA"]
    }
  },
  {
    category: "propagation, antenna",
    title: "Far field condition of the antenna/aperture",
    formula: "R_{ff} = \\dfrac{2D^2}{\\lambda} = \\dfrac{2D^2f}{c_0} \\times 10^6",
    consts: [
      { id: "c0", sym: "c_0", def: "\\textit{Light speed [m \\negthickspace /\\negthickspace\\negthickspace\\negthickspace s]}" },
    ],
    iargs: [
      { id: "lambda", sym: "\\lambda", def: "\\textit{Free space wavelength [m]}" },
    ],
    args: [
      { id: "D", sym: "D", def: "\\textit{Antenna cross-section aperture [m]}" },
      { id: "f", sym: "f", def: "\\textit{Frequency [MHz]}" },
    ],
    yields: [
      { id: "Rff", sym: "R_{ff}", def: "\\textit{Far field starting range [m]}", format: function (number) { return number.toFixed(3) } },
      { id: "Rffkm", sym: "R_{ff}'", def: "\\textit{Far field starting range [km]}", format: function (number) { return number.toFixed(3) } },
    ],
    calc: {
      labelWidth: "35px",
      vars: { c0: 299792458, f: 300, D: 1 },
      expr: ["2*D^2*f*1E6/c0", "2*D^2*f*1E6/(c0*10^3)"]
    }
  },
  {
    category: "conversion",
    title: "Frequency and wavelength",
    definition: "Free space frequency and wavelength",
    formula: " \\begin{aligned} f &= c_0/(\\lambda\\times10^6) \\quad [MHz] \\\\ \\lambda &= c_0/(f\\times10^6) \\quad [m] \\end{aligned}",
    consts: [
      { id: "c0", sym: "c_0", def: "\\textit{Light speed [m \\negthickspace /\\negthickspace\\negthickspace\\negthickspace s]}" },
    ],
    exchanges: [
      { id: "f", sym: "f", def: "\\textit{Frequency [MHz]}", format: function (number) { return number.toFixed(0) } },
      { id: "lambda", sym: "\\lambda", def: "\\textit{Wavelength [m]}", format: function (number) { return number.toFixed(3) } },
    ],
    calc: {
      labelWidth: "35px",
      vars: { c0: 299792458, f: 300, lambda: 0.010 },
      expr: [
        ["f", "c0/(f*10^6)"],
        ["c0/(lambda*10^6)", "lambda"],
      ]
    }
  },
  {
    category: "conversion",
    title: "Inches and millimeter",
    formula: " \\begin{aligned}1 \\thickspace inch &= 25.4 \\thickspace millimeters \\\\ 1 \\thickspace mm &= 0.03937 \\thickspace inches \\end{aligned}",
    exchanges: [
      { id: "inch", sym: "inch", def: "\\textit{Inches}", format: function (number) { return number.toFixed(6) } },
      { id: "mm", sym: "mm", def: "\\textit{Millimeters}", format: function (number) { return number.toFixed(6) } },
    ],
    calc: {
      labelWidth: "45px",
      vars: { inch: 1, mm: 25.4 },
      expr: [
        ["inch", "25.4*inch"],
        ["0.0393700787*mm", "mm"],
      ]
    }
  },
  {
    category: "conversion",
    title: "Lineer, dB and dBm",
    definition: "Lineer to/from decibel conversion for power",
    formula: " \\begin{aligned}P_{dBm} &= P_{dB} + 30 = 10\\log P + 30\\\\P_{dB} &= P_{dBm} - 30 = 10\\log P \\\\ P &= 10^{P_{dB}/10} = 10^{(P_{dBm}-30)/10} \\end{aligned}",
    exchanges: [
      { id: "PdBm", sym: "P_{dBm}", def: "\\textit{Decibels respect to 1 milliwatt [dBm]}", format: function (number) { return number.toFixed(2) } },
      { id: "PdB", sym: "P_{dB}", def: "\\textit{Decibels respect to 1 watt [dB]}", format: function (number) { return number.toFixed(2) } },
      { id: "P", sym: "P", def: "\\textit{Watt [W]}", format: function (number) { return number.toFixed(2) } },
    ],
    calc: {
      labelWidth: "50px",
      vars: { PdBm: 30, PdB: 0, P: 1 },
      expr: [
        ["PdBm", "PdBm-30", "10^((PdBm-30)/10)"],
        ["PdB+30", "PdB", "10^(PdB/10)"],
        ["10*log10(P)+30", "10*log10(P)", "P"],
      ]
    }
  },
  // {
  //   category: "antenna",
  //   title: "Antenna gain for omnidirectional antennas",
  //   definition: "Approximate gain for butterfly or omnidricational pattern",
  //   formula: "G = \\dfrac{2}{\\cos\\Theta_1-\\cos\\Theta_2}",
  //   ref: { name: "Thomas A. Milligan, Modern Antenna Design, 2nd Ed., Chapter 3, Page 13" },
  //   args: [
  //     { id: "theta1", sym: "\\Theta_1", def: "\\textit{Beam width in first principal plane [deg]}" },
  //     { id: "theta2", sym: "\\Theta_2", def: "\\textit{Beam width in second principal plane [deg]}" },
  //   ],
  //   yields: [
  //     { id: "G", sym: "G", def: "\\textit{Antenna gain []}", format: function (number) { return number.toFixed(2) } },
  //     { id: "G", sym: "G_{dB}", def: "\\textit{Antenna gain [dB]}", format: function (number) { return number.toFixed(1) } },
  //   ],
  //   calc: {
  //     labelWidth: "40px",
  //     vars: { theta1: 35, theta2: 75 },
  //     expr: ["2/(cos(unit(theta1,'deg')) - cos(unit(theta2,'deg')))", "10*log10(2/(cos(unit(theta1,'deg')) - cos(unit(theta2,'deg'))))"]
  //   }
  // },
  {
    category: "antenna",
    title: "Antenna gain for pencil beam antennas",
    definition: "Approximation of gain for $\\cos^n\\theta$ patterns",
    formula: "G = \\dfrac{41.253}{\\Theta_1\\Theta_2}",
    ref: { name: "John D. Kraus, Antennas for All Applications, 3rd Ed., Page 24" },
    args: [
      { id: "theta1", sym: "\\Theta_1", def: "\\textit{Beam width in 1st principal plane [deg]}" },
      { id: "theta2", sym: "\\Theta_2", def: "\\textit{Beam width in 2nd principal plane [deg]}" },
    ],
    yields: [
      { id: "G", sym: "G", def: "\\textit{Antenna gain []}", format: function (number) { return number.toFixed(1) } },
      { id: "G", sym: "G_{dB}", def: "\\textit{Antenna gain [dB]}", format: function (number) { return number.toFixed(0) } },
    ],
    calc: {
      labelWidth: "40px",
      vars: { theta1: 20, theta2: 20 },
      expr: ["41253/(theta1*theta2)", "10*log10(41253/(theta1*theta2))"]
    }
  },
  {
    category: "propagation",
    title: "Path loss",
    definition: "Free space path loss in communication link",
    formula: "\\begin{aligned}L_P &= 32.45 + 20\\log10(fR) \\\\ &\\quad - G_1 - G_2 \\quad [dB]\\end{aligned}",
    ref: { name: "Thomas A. Milligan, Modern Antenna Design, 2nd Ed., Chapter 3, Page 6" },
    args: [
      { id: "f", sym: "f", def: "\\textit{Frequency [MHz]}" },
      { id: "R", sym: "R", def: "\\textit{Distance [km]}" },
      { id: "G1", sym: "G_1", def: "\\textit{Gain of transmitter antenna [dB]}" },
      { id: "G2", sym: "G_2", def: "\\textit{Gain of receiver antenna [dB]}" },
    ],
    yields: [
      { id: "PL", sym: "PL", def: "\\textit{Path loss [dB]}", format: function (number) { return number.toFixed(1) } }
    ],
    calc: {
      labelWidth: "35px",
      vars: { f: 2200, R: 50, G1: 25, G2: 20 },
      expr: ["32.45 + 20*log10(f*R) - G1 - G2"]
    }
  },
  {
    category: "antenna",
    title: "Parabolic reflector antenna approximate gain",
    // definition: "Approximate gain",
    formula: "G = 10\\log_{10}k\\left(\\dfrac{\\pi D}{\\lambda}\\right) \\quad \\text{[dB]}",
    ref: { name: "Electronic-Notes", url: "https://www.electronics-notes.com/articles/antennas-propagation/parabolic-reflector-antenna/antenna-gain-directivity.php" },
    args: [
      { id: "k", sym: "k", def: "\\textit{Antenna efficiency factor [0.5 - 0.6]}" },
      { id: "D", sym: "D", def: "\\textit{Diameter of the parabolic reflector [m]}" },
      { id: "lambda", sym: "\\lambda", def: "\\textit{Wavelength of the signal [m]}" },
    ],
    yields: [
      { id: "G", sym: "G", def: "\\textit{Gain [dB]}", format: function (number) { return number.toFixed(1) } },
    ],
    calc: {
      labelWidth: "30px",
      vars: { k: 0.55, D: 5, lambda: 0.6125 },
      expr: ["10*log10(k*pi*D/lambda)"]
    }
  },
  {
    category: "antenna",
    title: "Power density",
    formula: "S(\\theta,\\phi) = \\dfrac{P_oG(\\theta\\phi)}{4\\pi R^2} \\quad [W/m^2]",
    ref: { name: "Thomas A. Milligan, Modern Antenna Design, 2nd Ed., Chapter 3, Page 4" },
    args: [
      { id: "Po", sym: "P_o", def: "\\textit{Input power [W]}" },
      { id: "G", sym: "G", def: "\\textit{Antenna gain []}" },
      { id: "R", sym: "R", def: "\\textit{Distance [m]}" },
    ],
    yields: [
      { id: "S", sym: "S", def: "\\textit{Power density } \\it{[W\\negthickspace /\\enspace m^2]}", format: function (number) { return number.toExponential(1) } },
      { id: "SdB", sym: "S_{dB}", def: "\\textit{Power density } \\it{[dBW\\negthickspace /\\enspace m^2]}", format: function (number) { return number.toFixed(1) } }
    ],
    calc: {
      labelWidth: "45px",
      vars: { Po: 3, G: 31.62, R: 1E6 },
      expr: ["Po*G/(4*pi*R^2)", "10*log10(Po*G/(4*pi*R^2))"],
    }
  },
  {
    category: "antenna",
    title: "Antenna efficiency",
    formula: "\\eta_e = \\dfrac{P_r}{P_o} = \\int_{0}^{2\\pi}\\int_{0}^{\\pi}\\dfrac{G(\\theta\\phi)}{4\\pi}\\sin\\theta d\\theta d\\phi",
    ref: { name: "Thomas A. Milligan, Modern Antenna Design, 2nd Ed., Chapter 3, Page 4" },
    args: [
      { id: "Pr", sym: "P_r", def: "\\textit{Radiated power [W]}" },
      { id: "Po", sym: "P_o", def: "\\textit{Input power [W]}" },
      { id: "G", sym: "G", def: "\\textit{Antenna gain []}" },
    ],
  },
]