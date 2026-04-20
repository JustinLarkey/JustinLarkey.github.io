const { useState, useMemo, useEffect } = React;

function IconShell({ className = '', children, ...props }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} {...props}>
      {children}
    </svg>
  );
}

function Activity(props) { return <IconShell {...props}><path d="M3 12h4l3-9 4 18 3-9h4" /></IconShell>; }
function Settings2(props) { return <IconShell {...props}><path d="M19.4 15a1.7 1.7 0 0 0 .33 1.87l.04.04a2 2 0 1 1-2.83 2.83l-.04-.04a1.7 1.7 0 0 0-1.87-.33 1.7 1.7 0 0 0-1 1.53V22a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.53 1.7 1.7 0 0 0-1.87.33l-.04.04A2 2 0 1 1 4.14 17.9l.04-.04A1.7 1.7 0 0 0 4.5 16a1.7 1.7 0 0 0-1.53-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.53-1 1.7 1.7 0 0 0-.33-1.87l-.04-.04A2 2 0 1 1 7.1 5.26l.04.04A1.7 1.7 0 0 0 9 5.63a1.7 1.7 0 0 0 1-1.53V4a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.53 1.7 1.7 0 0 0 1.87-.33l.04-.04A2 2 0 1 1 19.9 7.1l-.04.04A1.7 1.7 0 0 0 19.5 9c.1.57.42 1.06.88 1.4.47.34 1.04.53 1.62.53H22a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.53 1 1.7 1.7 0 0 0 .03 1.07Z" /><circle cx="12" cy="12" r="3" /></IconShell>; }
function Cpu(props) { return <IconShell {...props}><rect x="8" y="8" width="8" height="8" rx="1" /><path d="M9 1v3M15 1v3M9 20v3M15 20v3M1 9h3M1 15h3M20 9h3M20 15h3" /></IconShell>; }
function Search(props) { return <IconShell {...props}><circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" /></IconShell>; }
function Plus(props) { return <IconShell {...props}><path d="M12 5v14M5 12h14" /></IconShell>; }
function Trash2(props) { return <IconShell {...props}><path d="M3 6h18" /><path d="M8 6V4h8v2" /><path d="M6 6l1 15h10l1-15" /><path d="M10 11v6M14 11v6" /></IconShell>; }
function AlertTriangle(props) { return <IconShell {...props}><path d="M10.3 3.6 1.8 18a1.8 1.8 0 0 0 1.5 2.7h17.4A1.8 1.8 0 0 0 22.2 18L13.7 3.6a1.8 1.8 0 0 0-3.4 0Z" /><path d="M12 9v5" /><path d="M12 17h.01" /></IconShell>; }
function Info(props) { return <IconShell {...props}><circle cx="12" cy="12" r="9" /><path d="M12 10v6" /><path d="M12 7h.01" /></IconShell>; }
function Layers(props) { return <IconShell {...props}><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5" /><path d="m3 17 9 5 9-5" /></IconShell>; }
function Monitor(props) { return <IconShell {...props}><rect x="3" y="4" width="18" height="13" rx="2" /><path d="M8 20h8M12 17v3" /></IconShell>; }
function HardDrive(props) { return <IconShell {...props}><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M7 8h.01M11 8h.01M15 8h.01" /><path d="M3 12h18" /></IconShell>; }
function Sparkles(props) { return <IconShell {...props}><path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Z" /><path d="M5 15l.9 2.6L9 19l-3.1 1.4L5 23l-.9-2.6L1 19l3.1-1.4L5 15Z" /></IconShell>; }
function Loader2(props) { return <IconShell {...props}><path d="M21 12a9 9 0 1 1-3.3-6.9" /></IconShell>; }
function Wand2(props) { return <IconShell {...props}><path d="m15 4 5 5" /><path d="M7 17 17 7" /><path d="m3 21 6-2-4-4-2 6Z" /><path d="m14 5 5-1-1 5" /></IconShell>; }
function Zap(props) { return <IconShell {...props}><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" /></IconShell>; }
function PlusSquare(props) { return <IconShell {...props}><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M12 8v8M8 12h8" /></IconShell>; }
function Laptop(props) { return <IconShell {...props}><path d="M4 17V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v11" /><path d="M2 18h20" /></IconShell>; }
function Box(props) { return <IconShell {...props}><path d="m3 7 9-4 9 4-9 4-9-4Z" /><path d="M3 7v10l9 4 9-4V7" /><path d="M12 11v10" /></IconShell>; }
function Server(props) { return <IconShell {...props}><rect x="3" y="4" width="18" height="6" rx="2" /><rect x="3" y="14" width="18" height="6" rx="2" /><path d="M7 7h.01M7 17h.01M11 7h.01M11 17h.01" /></IconShell>; }

const macModels = [
  // --- NOTEBOOKS (EveryMac GB6 Averages) ---
  { id: 'mba_m1_8', name: "M1 (8-core)", formFactor: "MacBook Air", single: 2335, multi: 8320, gen: 1 },
  { id: 'mba_m2_13', name: "M2 (8-core) 13\"", formFactor: "MacBook Air", single: 2560, multi: 9709, gen: 2 },
  { id: 'mba_m2_15', name: "M2 (8-core) 15\"", formFactor: "MacBook Air", single: 2598, multi: 9787, gen: 2 },
  { id: 'mba_m3', name: "M3 (8-core)", formFactor: "MacBook Air", single: 3090, multi: 12020, gen: 3 },
  { id: 'mba_m4', name: "M4 (10-core)", formFactor: "MacBook Air", single: 3709, multi: 14731, gen: 4 },
  { id: 'mba_m5', name: "M5 (10-core)", formFactor: "MacBook Air", single: 4168, multi: 16934, gen: 5 },
  
  { id: 'mbp_m1_13', name: "M1 (8-core) 13\"", formFactor: "MacBook Pro", single: 2322, multi: 8181, gen: 1 },
  { id: 'mbp_m1p_8', name: "M1 Pro (8-core)", formFactor: "MacBook Pro", single: 2360, multi: 10312, gen: 1 },
  { id: 'mbp_m1p_10', name: "M1 Pro (10-core)", formFactor: "MacBook Pro", single: 2385, multi: 12338, gen: 1 },
  { id: 'mbp_m1m_10', name: "M1 Max (10-core)", formFactor: "MacBook Pro", single: 2378, multi: 12338, gen: 1 },
  
  { id: 'mbp_m2_13', name: "M2 (8-core) 13\"", formFactor: "MacBook Pro", single: 2606, multi: 9658, gen: 2 },
  { id: 'mbp_m2p_10', name: "M2 Pro (10-core)", formFactor: "MacBook Pro", single: 2643, multi: 12344, gen: 2 },
  { id: 'mbp_m2p_12', name: "M2 Pro (12-core)", formFactor: "MacBook Pro", single: 2656, multi: 14446, gen: 2 },
  { id: 'mbp_m2m_12', name: "M2 Max (12-core)", formFactor: "MacBook Pro", single: 2741, multi: 14729, gen: 2 },
  
  { id: 'mbp_m3_14', name: "M3 (8-core) 14\"", formFactor: "MacBook Pro", single: 3092, multi: 11624, gen: 3 },
  { id: 'mbp_m3p_11', name: "M3 Pro (11-core)", formFactor: "MacBook Pro", single: 3088, multi: 13968, gen: 3 },
  { id: 'mbp_m3p_12', name: "M3 Pro (12-core)", formFactor: "MacBook Pro", single: 3099, multi: 15244, gen: 3 },
  { id: 'mbp_m3m_14', name: "M3 Max (14-core)", formFactor: "MacBook Pro", single: 3104, multi: 19145, gen: 3 },
  { id: 'mbp_m3m_16', name: "M3 Max (16-core)", formFactor: "MacBook Pro", single: 3110, multi: 20990, gen: 3 },

  { id: 'mbp_m4', name: "M4 (10-core)", formFactor: "MacBook Pro", single: 3736, multi: 14746, gen: 4 },
  { id: 'mbp_m4p', name: "M4 Pro (14-core)", formFactor: "MacBook Pro", single: 3851, multi: 22490, gen: 4 },
  { id: 'mbp_m4m', name: "M4 Max (16-core)", formFactor: "MacBook Pro", single: 3885, multi: 25702, gen: 4 },
  
  { id: 'mbp_m5', name: "M5 (10-core)", formFactor: "MacBook Pro", single: 4252, multi: 17606, gen: 5 },
  { id: 'mbp_m5p', name: "M5 Pro (18-core)", formFactor: "MacBook Pro", single: 4213, multi: 27915, gen: 5 },
  { id: 'mbp_m5m', name: "M5 Max (18-core)", formFactor: "MacBook Pro", single: 4307, multi: 28978, gen: 5 },

  // --- DESKTOPS (EveryMac GB6 Averages) ---
  { id: 'imac_m1', name: "M1 (8-core)", formFactor: "iMac", single: 2349, multi: 8374, gen: 1 },
  { id: 'imac_m3', name: "M3 (8-core)", formFactor: "iMac", single: 3055, multi: 11676, gen: 3 },
  { id: 'imac_m4_8', name: "M4 (8-core)", formFactor: "iMac", single: 3693, multi: 13638, gen: 4 },
  { id: 'imac_m4_10', name: "M4 (10-core)", formFactor: "iMac", single: 3714, multi: 14570, gen: 4 },
  
  { id: 'mini_m1', name: "M1 (8-core)", formFactor: "Mac mini", single: 2367, multi: 8441, gen: 1 },
  { id: 'mini_m2', name: "M2 (8-core)", formFactor: "Mac mini", single: 2643, multi: 9792, gen: 2 },
  { id: 'mini_m2p_10', name: "M2 Pro (10-core)", formFactor: "Mac mini", single: 2654, multi: 12437, gen: 2 },
  { id: 'mini_m2p_12', name: "M2 Pro (12-core)", formFactor: "Mac mini", single: 2661, multi: 14544, gen: 2 },
  { id: 'mini_m4', name: "M4 (10-core)", formFactor: "Mac mini", single: 3791, multi: 14605, gen: 4 },
  { id: 'mini_m4p_12', name: "M4 Pro (12-core)", formFactor: "Mac mini", single: 3811, multi: 20160, gen: 4 },
  { id: 'mini_m4p_14', name: "M4 Pro (14-core)", formFactor: "Mac mini", single: 3806, multi: 22312, gen: 4 },
  
  { id: 'stu_m1m', name: "M1 Max (10-core)", formFactor: "Mac Studio", single: 2419, multi: 12655, gen: 1 },
  { id: 'stu_m1u', name: "M1 Ultra (20-core)", formFactor: "Mac Studio", single: 2402, multi: 18463, gen: 1 },
  { id: 'stu_m2m', name: "M2 Max (12-core)", formFactor: "Mac Studio", single: 2719, multi: 14777, gen: 2 },
  { id: 'stu_m2u', name: "M2 Ultra (24-core)", formFactor: "Mac Studio", single: 2675, multi: 21196, gen: 2 },
  { id: 'stu_m3u_28', name: "M3 Ultra (28-core)", formFactor: "Mac Studio", single: 3214, multi: 26530, gen: 3 },
  { id: 'stu_m3u_32', name: "M3 Ultra (32-core)", formFactor: "Mac Studio", single: 3201, multi: 27661, gen: 3 },
  { id: 'stu_m4m_14', name: "M4 Max (14-core)", formFactor: "Mac Studio", single: 4011, multi: 23428, gen: 4 },
  { id: 'stu_m4m_16', name: "M4 Max (16-core)", formFactor: "Mac Studio", single: 4016, multi: 25979, gen: 4 },

  { id: 'pro_m2u', name: "M2 Ultra (24-core)", formFactor: "Mac Pro", single: 2766, multi: 21209, gen: 2 }
];

const pluginDatabase = [
  // Logic Pro Stock
  { id: 101, vendor: "Logic Pro", name: "Channel EQ", weight: 5, category: "EQ" },
  { id: 102, vendor: "Logic Pro", name: "Vintage Console EQ", weight: 12, category: "EQ" },
  { id: 103, vendor: "Logic Pro", name: "Vintage Tube EQ", weight: 15, category: "EQ" },
  { id: 104, vendor: "Logic Pro", name: "Compressor", weight: 10, category: "Dynamics" },
  { id: 105, vendor: "Logic Pro", name: "Multipressor", weight: 20, category: "Dynamics" },
  { id: 106, vendor: "Logic Pro", name: "Space Designer", weight: 40, category: "Reverb" },
  { id: 107, vendor: "Logic Pro", name: "ChromaVerb", weight: 35, category: "Reverb" },
  { id: 108, vendor: "Logic Pro", name: "Delay Designer", weight: 15, category: "Delay" },
  { id: 109, vendor: "Logic Pro", name: "Tape Delay", weight: 10, category: "Delay" },
  { id: 110, vendor: "Logic Pro", name: "Alchemy", weight: 120, category: "Synth" },
  { id: 111, vendor: "Logic Pro", name: "Retro Synth", weight: 45, category: "Synth" },
  { id: 112, vendor: "Logic Pro", name: "Amp Designer", weight: 30, category: "Amp Sim" },
  
  // FabFilter
  { id: 200, vendor: "FabFilter", name: "Pro-Q 4", weight: 12, category: "EQ" },
  { id: 201, vendor: "FabFilter", name: "Pro-Q 3", weight: 10, category: "EQ" },
  { id: 215, vendor: "FabFilter", name: "Pro-C 3", weight: 18, category: "Dynamics" },
  { id: 202, vendor: "FabFilter", name: "Pro-C 2", weight: 15, category: "Dynamics" },
  { id: 203, vendor: "FabFilter", name: "Pro-L 2 (4x OS)", weight: 60, category: "Dynamics" },
  { id: 204, vendor: "FabFilter", name: "Pro-MB", weight: 50, category: "Dynamics" },
  { id: 205, vendor: "FabFilter", name: "Saturn 2", weight: 35, category: "Saturation" },
  { id: 206, vendor: "FabFilter", name: "Volcano 3", weight: 40, category: "EQ" },
  { id: 207, vendor: "FabFilter", name: "Timeless 3", weight: 45, category: "Delay" },
  { id: 208, vendor: "FabFilter", name: "Twin 3", weight: 80, category: "Synth" },
  { id: 209, vendor: "FabFilter", name: "Pro-R 2", weight: 40, category: "Reverb" },
  { id: 210, vendor: "FabFilter", name: "Pro-DS", weight: 20, category: "Dynamics" },
  { id: 211, vendor: "FabFilter", name: "Pro-G", weight: 15, category: "Dynamics" },
  { id: 212, vendor: "FabFilter", name: "One", weight: 25, category: "Synth" },
  { id: 213, vendor: "FabFilter", name: "Simplon", weight: 15, category: "EQ" },
  { id: 214, vendor: "FabFilter", name: "Micro", weight: 10, category: "EQ" },

  // Universal Audio (UAD Native / Spark)
  { id: 301, vendor: "UAD", name: "1176 Rev A", weight: 25, category: "Dynamics" },
  { id: 3011, vendor: "UAD", name: "1176LN Rev E", weight: 25, category: "Dynamics" },
  { id: 3012, vendor: "UAD", name: "1176AE", weight: 25, category: "Dynamics" },
  { id: 302, vendor: "UAD", name: "Teletronix LA-2A Silver", weight: 20, category: "Dynamics" },
  { id: 3021, vendor: "UAD", name: "Teletronix LA-2A Gray", weight: 20, category: "Dynamics" },
  { id: 3022, vendor: "UAD", name: "Teletronix LA-2", weight: 20, category: "Dynamics" },
  { id: 303, vendor: "UAD", name: "Pultec EQP-1A", weight: 30, category: "EQ" },
  { id: 3031, vendor: "UAD", name: "Pultec MEQ-5", weight: 30, category: "EQ" },
  { id: 3032, vendor: "UAD", name: "Pultec HLF-3C", weight: 15, category: "EQ" },
  { id: 304, vendor: "UAD", name: "API Vision Channel Strip", weight: 55, category: "Channel Strip", sections: [
    { id: 'api_preamp', label: 'Preamp', weight: 8, enabledByDefault: true },
    { id: 'api_filter', label: 'Filter', weight: 5, enabledByDefault: true },
    { id: 'api_eq', label: 'EQ', weight: 14, enabledByDefault: true },
    { id: 'api_comp', label: 'Compressor', weight: 14, enabledByDefault: true },
    { id: 'api_gate', label: 'Gate/Expander', weight: 8, enabledByDefault: true },
    { id: 'api_output', label: 'Output', weight: 6, enabledByDefault: true }
  ] },
  { id: 305, vendor: "UAD", name: "API 2500 Bus Compressor", weight: 40, category: "Dynamics" },
  { id: 306, vendor: "UAD", name: "Neve 1073 Preamp & EQ", weight: 45, category: "EQ" },
  { id: 307, vendor: "UAD", name: "Studer A800 Tape", weight: 45, category: "Saturation" },
  { id: 308, vendor: "UAD", name: "Lexicon 224 Digital Reverb", weight: 55, category: "Reverb" },
  { id: 309, vendor: "UAD", name: "Capitol Chambers", weight: 90, category: "Reverb" },
  { id: 310, vendor: "UAD", name: "Hitsville Reverb Chambers", weight: 85, category: "Reverb" },
  { id: 311, vendor: "UAD", name: "Galaxy Tape Echo", weight: 35, category: "Delay" },
  { id: 312, vendor: "UAD", name: "Avalon VT-737 Tube Channel", weight: 65, category: "Channel Strip" },
  { id: 313, vendor: "UAD", name: "Distressor", weight: 35, category: "Dynamics" },
  { id: 314, vendor: "UAD", name: "Opal Morphing Synthesizer", weight: 110, category: "Synth" },
  { id: 315, vendor: "UAD", name: "Teletronix LA-3A", weight: 20, category: "Dynamics" },
  { id: 316, vendor: "UAD", name: "Fairchild 670", weight: 45, category: "Dynamics" },
  { id: 3161, vendor: "UAD", name: "Fairchild 660", weight: 40, category: "Dynamics" },
  { id: 317, vendor: "UAD", name: "Brigade Chorus", weight: 25, category: "Delay" },
  { id: 318, vendor: "UAD", name: "Century Tube Channel Strip", weight: 50, category: "Channel Strip", sections: [
    { id: 'century_preamp', label: 'Preamp', weight: 10, enabledByDefault: true },
    { id: 'century_eq', label: 'EQ', weight: 12, enabledByDefault: true },
    { id: 'century_comp', label: 'Compressor', weight: 16, enabledByDefault: true },
    { id: 'century_gate', label: 'Gate', weight: 6, enabledByDefault: true },
    { id: 'century_output', label: 'Output', weight: 6, enabledByDefault: true }
  ] },
  { id: 319, vendor: "UAD", name: "dbx 160 Compressor", weight: 20, category: "Dynamics" },
  { id: 320, vendor: "UAD", name: "Electra 88 Vintage Keyboard Studio", weight: 95, category: "Synth" },
  { id: 321, vendor: "UAD", name: "Hitsville EQ", weight: 35, category: "EQ" },
  { id: 3211, vendor: "UAD", name: "Hitsville Mastering EQ", weight: 40, category: "EQ" },
  { id: 322, vendor: "UAD", name: "Moog Minimoog", weight: 80, category: "Synth" },
  { id: 323, vendor: "UAD", name: "PolyMAX Synth", weight: 70, category: "Synth" },
  { id: 324, vendor: "UAD", name: "Pure Plate Reverb", weight: 40, category: "Reverb" },
  { id: 325, vendor: "UAD", name: "Waterfall Rotary Speaker", weight: 50, category: "Saturation" },
  { id: 326, vendor: "UAD", name: "Waterfall B3 Organ", weight: 85, category: "Synth" },
  { id: 327, vendor: "UAD", name: "Sound City Studios", weight: 100, category: "Reverb" },
  { id: 328, vendor: "UAD", name: "Ampex ATR-102", weight: 55, category: "Mastering" },

  // Waves
  { id: 401, vendor: "Waves", name: "SSL E-Channel", weight: 25, category: "Channel Strip" },
  { id: 402, vendor: "Waves", name: "SSL G-Channel", weight: 25, category: "Channel Strip" },
  { id: 403, vendor: "Waves", name: "SSL G-Equalizer", weight: 15, category: "EQ" },
  { id: 404, vendor: "Waves", name: "SSL G-Master Buss Compressor", weight: 20, category: "Dynamics" },
  { id: 405, vendor: "Waves", name: "SSL EV2 Channel", weight: 30, category: "Channel Strip" },
  { id: 406, vendor: "Waves", name: "CLA-2A", weight: 15, category: "Dynamics" },
  { id: 407, vendor: "Waves", name: "CLA-3A", weight: 15, category: "Dynamics" },
  { id: 408, vendor: "Waves", name: "CLA-76", weight: 15, category: "Dynamics" },
  { id: 409, vendor: "Waves", name: "CLA Epic", weight: 55, category: "Reverb" },
  { id: 410, vendor: "Waves", name: "CLA MixHub", weight: 40, category: "Channel Strip" },
  { id: 411, vendor: "Waves", name: "CLA Vocals", weight: 25, category: "Channel Strip" },
  { id: 412, vendor: "Waves", name: "CLA Guitars", weight: 25, category: "Channel Strip" },
  { id: 413, vendor: "Waves", name: "CLA Bass", weight: 25, category: "Channel Strip" },
  { id: 414, vendor: "Waves", name: "CLA Drums", weight: 25, category: "Channel Strip" },
  { id: 415, vendor: "Waves", name: "CLA Unplugged", weight: 25, category: "Channel Strip" },
  { id: 416, vendor: "Waves", name: "CLA Effects", weight: 30, category: "Delay" },
  { id: 417, vendor: "Waves", name: "CLA MixDown", weight: 30, category: "Mastering" },
  { id: 418, vendor: "Waves", name: "Renaissance Vox (R-Vox)", weight: 10, category: "Dynamics" },
  { id: 419, vendor: "Waves", name: "Renaissance Bass (R-Bass)", weight: 15, category: "Saturation" },
  { id: 420, vendor: "Waves", name: "Renaissance Axx (R-Axx)", weight: 10, category: "Dynamics" },
  { id: 421, vendor: "Waves", name: "Renaissance Compressor (R-Comp)", weight: 10, category: "Dynamics" },
  { id: 422, vendor: "Waves", name: "Renaissance Equalizer (R-EQ)", weight: 10, category: "EQ" },
  { id: 423, vendor: "Waves", name: "Renaissance DeEsser", weight: 12, category: "Dynamics" },
  { id: 424, vendor: "Waves", name: "Renaissance Reverb (R-Verb)", weight: 20, category: "Reverb" },
  { id: 425, vendor: "Waves", name: "Renaissance Channel", weight: 25, category: "Channel Strip" },
  { id: 426, vendor: "Waves", name: "L1 Ultramaximizer", weight: 15, category: "Dynamics" },
  { id: 427, vendor: "Waves", name: "L2 Ultramaximizer", weight: 20, category: "Dynamics" },
  { id: 428, vendor: "Waves", name: "L3 Ultramaximizer", weight: 30, category: "Mastering" },
  { id: 429, vendor: "Waves", name: "L3 Multimaximizer", weight: 40, category: "Mastering" },
  { id: 430, vendor: "Waves", name: "L3-LL Ultramaximizer", weight: 25, category: "Mastering" },
  { id: 431, vendor: "Waves", name: "L3-LL Multimaximizer", weight: 35, category: "Mastering" },
  { id: 432, vendor: "Waves", name: "L3-16 Multimaximizer", weight: 50, category: "Mastering" },
  { id: 433, vendor: "Waves", name: "Abbey Road TG Mastering Chain", weight: 130, category: "Mastering" },
  { id: 434, vendor: "Waves", name: "Abbey Road Chambers", weight: 70, category: "Reverb" },
  { id: 435, vendor: "Waves", name: "Abbey Road Reverb Plates", weight: 65, category: "Reverb" },
  { id: 436, vendor: "Waves", name: "Abbey Road RS124 Compressor", weight: 35, category: "Dynamics" },
  { id: 437, vendor: "Waves", name: "Abbey Road Saturator", weight: 40, category: "Saturation" },
  { id: 438, vendor: "Waves", name: "Abbey Road Vinyl", weight: 45, category: "Saturation" },
  { id: 439, vendor: "Waves", name: "EMI TG12345 Channel", weight: 35, category: "Channel Strip" },
  { id: 440, vendor: "Waves", name: "J37 Tape", weight: 45, category: "Saturation" },
  { id: 441, vendor: "Waves", name: "Reel ADT", weight: 35, category: "Delay" },
  { id: 442, vendor: "Waves", name: "REDD", weight: 30, category: "EQ" },
  { id: 443, vendor: "Waves", name: "RS56 Passive EQ", weight: 25, category: "EQ" },
  { id: 444, vendor: "Waves", name: "H-Comp", weight: 20, category: "Dynamics" },
  { id: 445, vendor: "Waves", name: "H-Delay", weight: 20, category: "Delay" },
  { id: 446, vendor: "Waves", name: "H-EQ", weight: 25, category: "EQ" },
  { id: 447, vendor: "Waves", name: "H-Reverb", weight: 65, category: "Reverb" },
  { id: 448, vendor: "Waves", name: "V-Comp", weight: 25, category: "Dynamics" },
  { id: 449, vendor: "Waves", name: "V-EQ3", weight: 20, category: "EQ" },
  { id: 450, vendor: "Waves", name: "V-EQ4", weight: 20, category: "EQ" },
  { id: 451, vendor: "Waves", name: "API 2500", weight: 25, category: "Dynamics" },
  { id: 452, vendor: "Waves", name: "API 550A", weight: 20, category: "EQ" },
  { id: 453, vendor: "Waves", name: "API 550B", weight: 20, category: "EQ" },
  { id: 454, vendor: "Waves", name: "API 560", weight: 20, category: "EQ" },
  { id: 455, vendor: "Waves", name: "C1 Compressor", weight: 10, category: "Dynamics" },
  { id: 456, vendor: "Waves", name: "C4 Multiband Parametric", weight: 25, category: "Dynamics" },
  { id: 457, vendor: "Waves", name: "C6 Multiband Compressor", weight: 30, category: "Dynamics" },
  { id: 458, vendor: "Waves", name: "F6 Floating-Band Dynamic EQ", weight: 35, category: "EQ" },
  { id: 459, vendor: "Waves", name: "Vocal Rider", weight: 30, category: "Dynamics" },
  { id: 460, vendor: "Waves", name: "Bass Rider", weight: 30, category: "Dynamics" },
  { id: 461, vendor: "Waves", name: "Sibilance", weight: 25, category: "Dynamics" },
  { id: 462, vendor: "Waves", name: "DeEsser", weight: 10, category: "Dynamics" },
  { id: 463, vendor: "Waves", name: "Waves Tune", weight: 20, category: "Pitch" },
  { id: 464, vendor: "Waves", name: "Waves Tune Real-Time", weight: 35, category: "Pitch" },
  { id: 465, vendor: "Waves", name: "Vocal Bender", weight: 25, category: "Pitch" },
  { id: 466, vendor: "Waves", name: "Silk Vocal", weight: 35, category: "Channel Strip" },
  { id: 467, vendor: "Waves", name: "Clarity Vx", weight: 80, category: "Restoration" },
  { id: 468, vendor: "Waves", name: "Clarity Vx Pro", weight: 120, category: "Restoration" },
  { id: 469, vendor: "Waves", name: "Clarity Vx DeReverb", weight: 80, category: "Restoration" },
  { id: 470, vendor: "Waves", name: "Scheps Omni Channel", weight: 35, category: "Channel Strip" },
  { id: 471, vendor: "Waves", name: "Scheps 73", weight: 30, category: "EQ" },
  { id: 472, vendor: "Waves", name: "Scheps Parallel Particles", weight: 35, category: "Saturation" },
  { id: 473, vendor: "Waves", name: "JJP Vocals", weight: 25, category: "Channel Strip" },
  { id: 474, vendor: "Waves", name: "JJP Bass", weight: 25, category: "Channel Strip" },
  { id: 475, vendor: "Waves", name: "JJP Drums", weight: 25, category: "Channel Strip" },
  { id: 476, vendor: "Waves", name: "JJP Guitars", weight: 25, category: "Channel Strip" },
  { id: 477, vendor: "Waves", name: "JJP Strings & Keys", weight: 25, category: "Channel Strip" },
  { id: 478, vendor: "Waves", name: "JJP Cymbals & Percussion", weight: 25, category: "Channel Strip" },
  { id: 479, vendor: "Waves", name: "Eddie Kramer Vocal Channel", weight: 25, category: "Channel Strip" },
  { id: 480, vendor: "Waves", name: "Eddie Kramer Bass Channel", weight: 25, category: "Channel Strip" },
  { id: 481, vendor: "Waves", name: "Eddie Kramer Drum Channel", weight: 25, category: "Channel Strip" },
  { id: 482, vendor: "Waves", name: "Eddie Kramer Guitar Channel", weight: 25, category: "Channel Strip" },
  { id: 483, vendor: "Waves", name: "Eddie Kramer Effects Channel", weight: 30, category: "Delay" },
  { id: 484, vendor: "Waves", name: "Kramer Master Tape", weight: 40, category: "Saturation" },
  { id: 485, vendor: "Waves", name: "Kramer PIE Compressor", weight: 25, category: "Dynamics" },
  { id: 486, vendor: "Waves", name: "Kramer HLS Channel", weight: 25, category: "EQ" },
  { id: 487, vendor: "Waves", name: "Manny Marroquin EQ", weight: 25, category: "EQ" },
  { id: 488, vendor: "Waves", name: "Manny Marroquin Reverb", weight: 40, category: "Reverb" },
  { id: 489, vendor: "Waves", name: "Manny Marroquin Delay", weight: 35, category: "Delay" },
  { id: 490, vendor: "Waves", name: "Manny Marroquin Distortion", weight: 30, category: "Saturation" },
  { id: 491, vendor: "Waves", name: "Manny Marroquin Triple D", weight: 30, category: "Dynamics" },
  { id: 492, vendor: "Waves", name: "Manny Marroquin Tone Shaper", weight: 35, category: "Mastering" },
  { id: 493, vendor: "Waves", name: "Greg Wells VoiceCentric", weight: 35, category: "Channel Strip" },
  { id: 494, vendor: "Waves", name: "Greg Wells MixCentric", weight: 35, category: "Mastering" },
  { id: 495, vendor: "Waves", name: "Greg Wells PianoCentric", weight: 35, category: "Channel Strip" },
  { id: 496, vendor: "Waves", name: "Greg Wells ToneCentric", weight: 35, category: "Saturation" },
  { id: 497, vendor: "Waves", name: "PuigChild Compressor", weight: 25, category: "Dynamics" },
  { id: 498, vendor: "Waves", name: "PuigTec EQs", weight: 20, category: "EQ" },
  { id: 499, vendor: "Waves", name: "Magma Tube Channel Strip", weight: 40, category: "Channel Strip" },
  { id: 500, vendor: "Waves", name: "Magma Springs", weight: 45, category: "Reverb" },
  { id: 501, vendor: "Waves", name: "BB Tubes", weight: 30, category: "Saturation" },
  { id: 502, vendor: "Waves", name: "MDMX Overdrive", weight: 25, category: "Saturation" },
  { id: 503, vendor: "Waves", name: "Berzerk Distortion", weight: 25, category: "Saturation" },
  { id: 504, vendor: "Waves", name: "Aphex Vintage Aural Exciter", weight: 20, category: "Saturation" },
  { id: 505, vendor: "Waves", name: "Cobalt Saphira", weight: 25, category: "Saturation" },
  { id: 506, vendor: "Waves", name: "Vitamin Sonic Enhancer", weight: 35, category: "Mastering" },
  { id: 507, vendor: "Waves", name: "InPhase", weight: 20, category: "Mastering" },
  { id: 508, vendor: "Waves", name: "Center", weight: 15, category: "Mastering" },
  { id: 509, vendor: "Waves", name: "S1 Stereo Imager", weight: 15, category: "Mastering" },
  { id: 510, vendor: "Waves", name: "PAZ Analyzer", weight: 15, category: "Mastering" },
  { id: 511, vendor: "Waves", name: "WLM Plus Loudness Meter", weight: 20, category: "Mastering" },
  { id: 512, vendor: "Waves", name: "Abbey Road Studio 3", weight: 80, category: "Mastering" },
  { id: 513, vendor: "Waves", name: "Nx Ocean Way Nashville", weight: 80, category: "Mastering" },
  { id: 514, vendor: "Waves", name: "Nx Germano Studios New York", weight: 80, category: "Mastering" },
  { id: 515, vendor: "Waves", name: "CLA Nx", weight: 80, category: "Mastering" },
  { id: 516, vendor: "Waves", name: "Nx Virtual Mix Room", weight: 75, category: "Mastering" },
  { id: 517, vendor: "Waves", name: "MaxxBass", weight: 15, category: "Saturation" },
  { id: 518, vendor: "Waves", name: "Submarine", weight: 25, category: "Saturation" },
  { id: 519, vendor: "Waves", name: "LoAir", weight: 15, category: "Saturation" },
  { id: 520, vendor: "Waves", name: "MV2", weight: 15, category: "Dynamics" },
  { id: 521, vendor: "Waves", name: "MaxxVolume", weight: 20, category: "Dynamics" },
  { id: 522, vendor: "Waves", name: "Smack Attack", weight: 20, category: "Dynamics" },
  { id: 523, vendor: "Waves", name: "Torque", weight: 25, category: "Pitch" },
  { id: 524, vendor: "Waves", name: "Doubler", weight: 20, category: "Delay" },
  { id: 525, vendor: "Waves", name: "SuperTap", weight: 20, category: "Delay" },
  { id: 526, vendor: "Waves", name: "Enigma", weight: 25, category: "Delay" },
  { id: 527, vendor: "Waves", name: "MetaFlanger", weight: 20, category: "Delay" },
  { id: 528, vendor: "Waves", name: "MondoMod", weight: 20, category: "Delay" },
  { id: 529, vendor: "Waves", name: "Brauer Motion", weight: 35, category: "Delay" },
  { id: 530, vendor: "Waves", name: "TrueVerb", weight: 25, category: "Reverb" },
  { id: 531, vendor: "Waves", name: "IR1 Convolution Reverb", weight: 50, category: "Reverb" },
  { id: 532, vendor: "Waves", name: "Q10 Equalizer", weight: 10, category: "EQ" },
  { id: 533, vendor: "Waves", name: "Linear Phase EQ", weight: 30, category: "EQ" },
  { id: 534, vendor: "Waves", name: "Linear Phase Multiband Compressor", weight: 35, category: "Dynamics" },
  { id: 535, vendor: "Waves", name: "X-Noise", weight: 30, category: "Restoration" },
  { id: 536, vendor: "Waves", name: "Z-Noise", weight: 35, category: "Restoration" },
  { id: 537, vendor: "Waves", name: "WNS Noise Suppressor", weight: 45, category: "Restoration" },
  { id: 538, vendor: "Waves", name: "Infected Mushroom Pusher", weight: 40, category: "Mastering" },
  { id: 539, vendor: "Waves", name: "OVox Vocal ReSynthesis", weight: 60, category: "Synth" },
  { id: 540, vendor: "Waves", name: "Element 2.0", weight: 45, category: "Synth" },
  { id: 541, vendor: "Waves", name: "Codex Wavetable Synth", weight: 50, category: "Synth" },
  { id: 542, vendor: "Waves", name: "Flow Motion FM Synth", weight: 55, category: "Synth" },

  // Slate Digital
  { id: 601, vendor: "Slate Digital", name: "Virtual Mix Rack (Empty)", weight: 10, category: "Channel Strip" },
  { id: 602, vendor: "Slate Digital", name: "VMR (Typical 4-Module)", weight: 45, category: "Channel Strip" },
  { id: 603, vendor: "Slate Digital", name: "Virtual Tape Machines (VTM)", weight: 35, category: "Saturation" },
  { id: 604, vendor: "Slate Digital", name: "Virtual Buss Compressors (VBC)", weight: 40, category: "Dynamics" },
  { id: 605, vendor: "Slate Digital", name: "Infinity EQ", weight: 15, category: "EQ" },
  { id: 606, vendor: "Slate Digital", name: "FG-X 2 Mastering Console", weight: 80, category: "Mastering" },
  { id: 607, vendor: "Slate Digital", name: "Fresh Air", weight: 15, category: "EQ" },
  { id: 608, vendor: "Slate Digital", name: "VerbSuite Classics", weight: 60, category: "Reverb" },
  { id: 609, vendor: "Slate Digital", name: "Repeater Delay", weight: 35, category: "Delay" },
  { id: 610, vendor: "Slate Digital", name: "Murda Melodies", weight: 55, category: "Pitch" },
  { id: 611, vendor: "Slate Digital", name: "Metatune", weight: 45, category: "Pitch" },
  { id: 612, vendor: "Slate Digital", name: "FG-Bomber", weight: 30, category: "Dynamics" },
  { id: 613, vendor: "Slate Digital", name: "Custom Opto", weight: 25, category: "Dynamics" },
  { id: 614, vendor: "Slate Digital", name: "FG-Stress", weight: 35, category: "Dynamics" },
  { id: 615, vendor: "Slate Digital", name: "FG-A", weight: 20, category: "EQ" },
  { id: 616, vendor: "Slate Digital", name: "FG-S", weight: 20, category: "EQ" },
  { id: 617, vendor: "Slate Digital", name: "FG-N", weight: 20, category: "EQ" },
  { id: 618, vendor: "Slate Digital", name: "Custom Series EQ", weight: 25, category: "EQ" },
  { id: 619, vendor: "Slate Digital", name: "Custom Series Lift", weight: 20, category: "Mastering" },
  { id: 620, vendor: "Slate Digital", name: "VTC London", weight: 25, category: "Saturation" },
  { id: 621, vendor: "Slate Digital", name: "VTC New York", weight: 25, category: "Saturation" },
  { id: 622, vendor: "Slate Digital", name: "VTC Hollywood", weight: 25, category: "Saturation" },
  { id: 623, vendor: "Slate Digital", name: "Gate Classic", weight: 15, category: "Dynamics" },
  { id: 624, vendor: "Slate Digital", name: "Eiosis AirEQ Premium", weight: 30, category: "EQ" },
  { id: 625, vendor: "Slate Digital", name: "Eiosis E2Deesser", weight: 35, category: "Dynamics" },
  { id: 626, vendor: "Slate Digital", name: "Storch Filter", weight: 40, category: "EQ" },
  { id: 627, vendor: "Slate Digital", name: "MO-TT", weight: 45, category: "Dynamics" },

  // iZotope
  { id: 701, vendor: "iZotope", name: "Ozone 11 Maximizer", weight: 150, category: "Mastering" },
  { id: 702, vendor: "iZotope", name: "Ozone 11 Vintage EQ", weight: 40, category: "EQ" },
  { id: 703, vendor: "iZotope", name: "Ozone 11 Imager", weight: 45, category: "Mastering" },
  { id: 704, vendor: "iZotope", name: "RX 11 Voice De-noise", weight: 110, category: "Restoration" },
  { id: 705, vendor: "iZotope", name: "RX 11 Mouth De-click", weight: 80, category: "Restoration" },
  { id: 706, vendor: "iZotope", name: "Neutron 4 (Full Strip)", weight: 120, category: "Channel Strip", sections: [
    { id: 'neutron_eq', label: 'EQ', weight: 24, enabledByDefault: true },
    { id: 'neutron_comp', label: 'Compressor', weight: 24, enabledByDefault: true },
    { id: 'neutron_gate', label: 'Gate', weight: 16, enabledByDefault: true },
    { id: 'neutron_exciter', label: 'Exciter', weight: 18, enabledByDefault: true },
    { id: 'neutron_transient', label: 'Transient', weight: 18, enabledByDefault: true },
    { id: 'neutron_limiter', label: 'Limiter', weight: 20, enabledByDefault: true }
  ] },
  { id: 707, vendor: "iZotope", name: "Nectar 4", weight: 100, category: "Channel Strip", sections: [
    { id: 'nectar_pitch', label: 'Pitch', weight: 16, enabledByDefault: true },
    { id: 'nectar_eq', label: 'EQ', weight: 18, enabledByDefault: true },
    { id: 'nectar_comp', label: 'Compression', weight: 20, enabledByDefault: true },
    { id: 'nectar_deesser', label: 'De-esser', weight: 10, enabledByDefault: true },
    { id: 'nectar_saturator', label: 'Saturation', weight: 18, enabledByDefault: true },
    { id: 'nectar_reverbdelay', label: 'Reverb/Delay', weight: 18, enabledByDefault: true }
  ] },
  { id: 708, vendor: "iZotope", name: "VocalSynth 2", weight: 90, category: "Pitch" },

  // Others
  { id: 801, vendor: "Oeksound", name: "Soothe2", weight: 100, category: "Dynamics" },
  { id: 802, vendor: "Oeksound", name: "Spiff", weight: 95, category: "Dynamics" },
  { id: 803, vendor: "Soundtheory", name: "Gullfoss", weight: 90, category: "EQ" },
  { id: 804, vendor: "Valhalla", name: "VintageVerb", weight: 30, category: "Reverb" },
  { id: 805, vendor: "Valhalla", name: "Supermassive", weight: 35, category: "Reverb" },
  { id: 806, vendor: "Soundtoys", name: "Decapitator", weight: 40, category: "Saturation" },
  { id: 807, vendor: "Soundtoys", name: "EchoBoy", weight: 45, category: "Delay" },
  { id: 808, vendor: "Neural DSP", name: "Archetype Gojira", weight: 220, category: "Amp Sim" },
  { id: 809, vendor: "Arturia", name: "Pigments", weight: 170, category: "Synth" },
  { id: 810, vendor: "Xfer", name: "Serum", weight: 130, category: "Synth" },
  { id: 811, vendor: "Spectrasonics", name: "Omnisphere 2", weight: 160, category: "Synth" }
];

const categoryStyles = {
  "EQ": { backgroundColor: 'rgba(96, 165, 250, 0.10)', color: '#90e0ef', borderColor: 'rgba(96, 165, 250, 0.22)' },
  "Dynamics": { backgroundColor: 'rgba(148, 163, 184, 0.10)', color: '#f0f0f0', borderColor: 'rgba(148, 163, 184, 0.18)' },
  "Mastering": { backgroundColor: 'rgba(0, 191, 255, 0.10)', color: '#00bfff', borderColor: 'rgba(0, 191, 255, 0.22)' },
  "Restoration": { backgroundColor: 'rgba(247, 178, 103, 0.10)', color: '#f7b267', borderColor: 'rgba(247, 178, 103, 0.22)' },
  "Channel Strip": { backgroundColor: 'rgba(148, 163, 184, 0.10)', color: '#f0f0f0', borderColor: 'rgba(148, 163, 184, 0.18)' },
  "Delay": { backgroundColor: 'rgba(96, 165, 250, 0.10)', color: '#90e0ef', borderColor: 'rgba(96, 165, 250, 0.22)' },
  "Reverb": { backgroundColor: 'rgba(0, 191, 255, 0.10)', color: '#00bfff', borderColor: 'rgba(0, 191, 255, 0.22)' },
  "Saturation": { backgroundColor: 'rgba(247, 178, 103, 0.10)', color: '#f7b267', borderColor: 'rgba(247, 178, 103, 0.22)' },
  "Pitch": { backgroundColor: 'rgba(96, 165, 250, 0.10)', color: '#90e0ef', borderColor: 'rgba(96, 165, 250, 0.22)' },
  "Amp Sim": { backgroundColor: 'rgba(247, 178, 103, 0.10)', color: '#f7b267', borderColor: 'rgba(247, 178, 103, 0.22)' },
  "Synth": { backgroundColor: 'rgba(96, 165, 250, 0.10)', color: '#90e0ef', borderColor: 'rgba(96, 165, 250, 0.22)' },
  "Sampler": { backgroundColor: 'rgba(96, 165, 250, 0.10)', color: '#90e0ef', borderColor: 'rgba(96, 165, 250, 0.22)' },
};

function App() {
  const showHeaderLogo = false;

  useEffect(() => {
    const elementsToReveal = document.querySelectorAll('.pluginbench-reveal:not(.is-visible)');
    if (!elementsToReveal.length) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          obs.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.15
    });

    elementsToReveal.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [chains]);

  const pageContainerStyle = {
    maxWidth: '80rem',
    margin: '0 auto',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem'
  };

  const [selectedFormFactor, setSelectedFormFactor] = useState('MacBook Pro');
  const [selectedMacId, setSelectedMacId] = useState('mbp_m4p');
  const [sampleRate, setSampleRate] = useState(1.09);
  const [bufferSize, setBufferSize] = useState(1.2);
  const [cpuBudget, setCpuBudget] = useState(80);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('vendor');
  const [chains, setChains] = useState([{ id: 'chain-1', name: 'Track 1', format: 'stereo', instances: 1, plugins: [] }]);
  const [activeChainId, setActiveChainId] = useState('chain-1');

  const activeChain = chains.find(c => c.id === activeChainId) || chains[0];
  const uniqueFormFactors = useMemo(() => [...new Set(macModels.map(m => m.formFactor))], []);
  const availableMacs = useMemo(() => macModels.filter(m => m.formFactor === selectedFormFactor), [selectedFormFactor]);
  
  const selectedMac = useMemo(() => {
    return macModels.find(m => m.id === selectedMacId) || availableMacs[0] || macModels[0];
  }, [selectedMacId, availableMacs]);

  const getHardwareIcon = (formFactor) => {
    switch (formFactor) {
      case 'MacBook Air':
      case 'MacBook Pro': return <img src="macbook.svg" alt="MacBook" className="w-4 h-4" />;
      case 'iMac': return <img src="desktopcomputer.svg" alt="iMac" className="w-4 h-4" />;
      case 'Mac mini': return <img src="macmini.svg" alt="Mac mini" className="w-4 h-4" />;
      case 'Mac Studio': return <img src="macstudio.svg" alt="Mac Studio" className="w-4 h-4" />;
      case 'Mac Pro': return <img src="macpro.gen3.svg" alt="Mac Pro" className="w-4 h-4" />;
      default: return <img src="desktopcomputer.svg" alt="Computer" className="w-4 h-4" />;
    }
  };

  const handleFormFactorChange = (e) => {
    const newFf = e.target.value;
    setSelectedFormFactor(newFf);
    const firstInNewFf = macModels.find(m => m.formFactor === newFf);
    if (firstInNewFf) setSelectedMacId(firstInNewFf.id);
  };

  const filteredPlugins = useMemo(() => {
    if (!searchQuery.trim()) return [];
    let result = pluginDatabase;
    const query = searchQuery.toLowerCase();
    result = result.filter(p => {
      const vendorMatchStr = p.vendor.toLowerCase() === 'uad' ? 'uad universal audio' : p.vendor.toLowerCase();
      return p.name.toLowerCase().includes(query) || vendorMatchStr.includes(query) || p.category.toLowerCase().includes(query);
    });
    return result.sort((a, b) => {
      if (sortBy === 'vendor') return a.vendor.localeCompare(b.vendor) || a.name.localeCompare(b.name);
      if (sortBy === 'category') return a.category.localeCompare(b.category) || a.name.localeCompare(b.name);
      return a.name.localeCompare(b.name);
    });
  }, [searchQuery, sortBy]);

  const buildPluginInstance = (plugin) => {
    const sectionStates = plugin.sections
      ? Object.fromEntries(plugin.sections.map(section => [section.id, section.enabledByDefault !== false]))
      : null;

    return {
      ...plugin,
      uniqueId: crypto.randomUUID(),
      ...(sectionStates ? { moduleStates: sectionStates } : {})
    };
  };

  const getPluginEffectiveWeight = (plugin) => {
    if (!plugin.sections || plugin.sections.length === 0) {
      return plugin.weight;
    }

    return plugin.sections.reduce((sum, section) => {
      const enabled = plugin.moduleStates?.[section.id] ?? (section.enabledByDefault !== false);
      return enabled ? sum + section.weight : sum;
    }, 0);
  };

  const createNewChain = () => {
    const newId = crypto.randomUUID();
    setChains([...chains, { id: newId, name: `Track ${chains.length + 1}`, format: 'stereo', instances: 1, plugins: [] }]);
    setActiveChainId(newId);
  };

  const removeChain = (id) => {
    if (chains.length === 1) return;
    const newChains = chains.filter(c => c.id !== id);
    setChains(newChains);
    if (activeChainId === id) setActiveChainId(newChains[newChains.length - 1].id);
  };

  const updateActiveChainFormat = (format) => setChains(chains.map(c => c.id === activeChainId ? { ...c, format } : c));
  const updateActiveChainInstances = (instances) => setChains(chains.map(c => c.id === activeChainId ? { ...c, instances } : c));
  const addPluginToActive = (plugin) => setChains(chains.map(c => c.id === activeChainId ? { ...c, plugins: [...c.plugins, buildPluginInstance(plugin)] } : c));
  const removePluginFromActive = (uniqueId) => setChains(chains.map(c => c.id === activeChainId ? { ...c, plugins: c.plugins.filter(p => p.uniqueId !== uniqueId) } : c));
  const clearActiveChain = () => setChains(chains.map(c => c.id === activeChainId ? { ...c, plugins: [] } : c));
  const togglePluginSectionInActive = (uniqueId, sectionId) => setChains(chains.map(c => c.id === activeChainId ? {
    ...c,
    plugins: c.plugins.map(p => {
      if (p.uniqueId !== uniqueId || !p.sections) {
        return p;
      }
      const currentState = p.moduleStates?.[sectionId] ?? true;
      return {
        ...p,
        moduleStates: {
          ...(p.moduleStates || {}),
          [sectionId]: !currentState
        }
      };
    })
  } : c));

  const getFormatMultiplier = (format) => format === 'mono' ? 0.6 : 1.0;
  const getPluginActualCost = (baseWeight, format) => baseWeight * sampleRate * bufferSize * getFormatMultiplier(format);
  const getChainSingleInstanceCost = (chain) => chain.plugins.reduce((acc, p) => acc + getPluginActualCost(getPluginEffectiveWeight(p), chain.format), 0);
  const getChainTotalCost = (chain) => getChainSingleInstanceCost(chain) * (chain.instances || 1);

  const sessionTotalCost = useMemo(() => chains.reduce((acc, c) => acc + getChainTotalCost(c), 0), [chains, sampleRate, bufferSize]);
  const activeChainSingleCost = getChainSingleInstanceCost(activeChain);
  const heaviestChainCost = useMemo(() => Math.max(0, ...chains.map(c => getChainSingleInstanceCost(c))), [chains, sampleRate, bufferSize]);

  const getMacPerformance = (mac) => {
    const multiPercent = mac.multi > 0 ? (sessionTotalCost / mac.multi) * 100 : 0;
    const singlePercent = mac.single > 0 ? (heaviestChainCost / mac.single) * 100 : 0;
    const bottleneckPercent = Math.max(multiPercent, singlePercent);
    return {
      multiPercent,
      singlePercent,
      bottleneckPercent,
      bottleneckType: singlePercent >= multiPercent ? 'Single' : 'Multi',
      overBudget: bottleneckPercent > cpuBudget,
      overSingle: singlePercent > cpuBudget,
      overMulti: multiPercent > cpuBudget
    };
  };

  const selectedMacPerformance = useMemo(
    () => getMacPerformance(selectedMac),
    [selectedMac, sessionTotalCost, heaviestChainCost, cpuBudget]
  );

  const singleCorePercent = selectedMacPerformance.singlePercent;
  const multiCorePercent = selectedMacPerformance.multiPercent;
  const willGlitchSingle = selectedMacPerformance.overSingle;
  const willGlitchMulti = selectedMacPerformance.overMulti;
  const remainingBudget = Math.max(0, ((selectedMac.multi * cpuBudget) / 100) - sessionTotalCost);
  const maxAdditionalInstances = activeChainSingleCost > 0 ? Math.floor(remainingBudget / activeChainSingleCost) : 0;
  const sortedMacModels = [...macModels].sort((a, b) => a.multi - b.multi);

  const normalizedLoad = selectedMac.multi > 0 ? Math.min(sessionTotalCost / selectedMac.multi, 1) : 0;
  const chainDensity = Math.min(activeChain.plugins.length / 12, 1);
  const reactiveGlowAlpha = Math.min(0.26, 0.04 + normalizedLoad * 0.18 + chainDensity * 0.06);
  const reactiveOverlayOpacity = reactiveGlowAlpha.toFixed(3);
  const reactiveOverlayShiftY = `${(chainDensity * 20).toFixed(1)}px`;

  return (
    <div
      className="pluginbench-reactive-bg min-h-screen selection:bg-[rgba(0,191,255,0.25)]"
    >
      <div
        className="pluginbench-reactive-bg-layer"
        style={{
          opacity: reactiveOverlayOpacity,
          transform: `translate3d(0, ${reactiveOverlayShiftY}, 0)`
        }}
        aria-hidden="true"
      />
      <div className="pluginbench-reactive-bg-content">
      <header className="pluginbench-reveal border-b border-[#333333] bg-[rgba(30,30,30,0.88)] backdrop-blur sticky top-0 z-50" style={{ '--pluginbench-reveal-delay': '0.00s' }}>
        <div className="h-16 flex items-center justify-between" style={pageContainerStyle}>
          <div className="flex items-center gap-3 text-[#00bfff]">
            {showHeaderLogo && (
              <img
                src="pluginbench_refinedaaaa.svg"
                alt="PluginBench logo"
                className="w-7 h-7 md:w-8 md:h-8 shrink-0"
                style={{ opacity: 0.95, filter: 'drop-shadow(0 0 10px rgba(0, 191, 255, 0.24))' }}
              />
            )}
            <h1 className="inline-flex items-baseline gap-1.5 text-xl font-black tracking-tight leading-none text-[#f0f0f0]">PluginBench <span className="text-base font-bold leading-none text-[#90e0ef]">(Beta)</span></h1>
          </div>
        </div>
      </header>

      <main className="py-8 space-y-6" style={pageContainerStyle}>
        <section className="pluginbench-reveal bg-[#1e1e1e] border border-[#333333] rounded-2xl p-5 shadow-xl" style={{ '--pluginbench-reveal-delay': '0.06s' }}>
          <div className="flex items-center gap-2 text-[#aaaaaa] mb-4 pb-4 border-b border-[#333333]">
            <img src="gearshape.svg" alt="Settings" className="w-4 h-4" style={{ opacity: 0.85 }} />
            <h2 className="text-sm font-bold uppercase tracking-wider">Global Environment Settings</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-medium text-[#aaaaaa] uppercase tracking-wider block">Computer</label>
              <div className="relative flex items-center">
                <select value={selectedFormFactor} onChange={handleFormFactorChange} className="w-full appearance-none bg-[#121212] border border-[#333333] text-[#f0f0f0] rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#00bfff] transition-all">
                  {uniqueFormFactors.map(ff => <option key={ff} value={ff}>{ff}</option>)}
                </select>
                <div className="absolute left-3 pointer-events-none text-[#aaaaaa]">{getHardwareIcon(selectedFormFactor)}</div>
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-[#aaaaaa] uppercase tracking-wider block">Processor (CPU)</label>
              <div className="relative flex items-center">
                <select value={selectedMacId} onChange={(e) => setSelectedMacId(e.target.value)} className="w-full appearance-none bg-[#121212] border border-[#333333] text-[#f0f0f0] rounded-lg pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#00bfff] transition-all">
                  {[5, 4, 3, 2, 1].map(gen => {
                    const genMacs = availableMacs.filter(m => m.gen === gen);
                    if (genMacs.length === 0) return null;
                    return <optgroup key={gen} label={`M${gen} Series`}>{genMacs.map(m => <option key={m.id} value={m.id}>{m.name}</option>)}</optgroup>;
                  })}
                </select>
                  <img src="cpu.svg" alt="CPU" className="w-4 h-4 absolute left-3 pointer-events-none" style={{ opacity: 0.667 }} />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-[#aaaaaa] uppercase tracking-wider block">Sample Rate</label>
              <select value={sampleRate} onChange={(e) => setSampleRate(parseFloat(e.target.value))} className="w-full appearance-none bg-[#121212] border border-[#333333] text-[#f0f0f0] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#00bfff] transition-all">
                <option value={1}>44.1 kHz</option>
                <option value={1.09}>48 kHz</option>
                <option value={2}>88.2 kHz</option>
                <option value={2.18}>96 kHz</option>
                <option value={4.35}>192 kHz</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-xs font-medium text-[#aaaaaa] uppercase tracking-wider block">Buffer Size</label>
              <select value={bufferSize} onChange={(e) => setBufferSize(parseFloat(e.target.value))} className="w-full appearance-none bg-[#121212] border border-[#333333] text-[#f0f0f0] rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#00bfff] transition-all">
                <option value={3.0}>32 Samples</option>
                <option value={2.0}>64 Samples</option>
                <option value={1.5}>128 Samples</option>
                <option value={1.2}>256 Samples</option>
                <option value={1.0}>512 Samples</option>
                <option value={0.85}>1024 Samples</option>
                <option value={0.70}>2048 Samples</option>
              </select>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between"><label className="text-xs font-medium text-[#aaaaaa] uppercase tracking-wider block">CPU Ceiling</label><span className="text-xs font-bold text-[#00bfff]">{cpuBudget}%</span></div>
              <div className="h-[42px] flex items-center">
                <input type="range" min="50" max="100" step="5" value={cpuBudget} onChange={(e) => setCpuBudget(parseFloat(e.target.value))} className="w-full h-2 bg-[#252525] rounded-lg appearance-none cursor-pointer accent-[#00bfff]" />
              </div>
            </div>
          </div>
          <div className="mt-6 pt-4 border-t border-[#333333] flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#aaaaaa]">
              <img src="info.circle.svg" alt="Info" className="w-4 h-4 shrink-0" style={{ opacity: 0.85 }} />
              <p>Math calibrated using <strong>Geekbench 6</strong> averages from <strong>EveryMac</strong> for <strong className="text-[#f0f0f0]">{selectedMac.name} {selectedMac.formFactor}</strong>.</p>
            </div>
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <section className="pluginbench-reveal lg:col-span-4 bg-neutral-900 border border-neutral-800 rounded-2xl flex flex-col overflow-hidden h-[600px] lg:h-[750px]" style={{ '--pluginbench-reveal-delay': '0.12s' }}>
            <div className="px-4 pt-6 pb-4 border-b border-neutral-800 bg-neutral-900 shrink-0">
              <div className="flex items-center gap-2 text-neutral-400 mb-4"><img src="waveform.badge.magnifyingglass.svg" alt="Search" className="w-6 h-6" style={{ opacity: 0.85 }} /><h2 className="text-sm font-bold uppercase tracking-wider text-neutral-300">Library</h2></div>
              <div className="relative mb-3">
                <input type="text" placeholder="Search plugins..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} className="w-full bg-neutral-950 border border-neutral-700 text-white rounded-lg pl-9 pr-4 py-2 text-sm focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 outline-none" />
                <img src="magnifyingglass-small.svg" alt="Search" className="w-3 h-3 absolute left-3 top-1/2 -translate-y-1/2" style={{ opacity: 0.85 }} />
              </div>
              <div className="flex gap-2">
                <button onClick={() => setSortBy('vendor')} className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md transition-all ${sortBy === 'vendor' ? 'bg-neutral-700 text-white' : 'text-neutral-500 hover:text-neutral-300'}`}>Vendor</button>
                <button onClick={() => setSortBy('name')} className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md transition-all ${sortBy === 'name' ? 'bg-neutral-700 text-white' : 'text-neutral-500 hover:text-neutral-300'}`}>Name</button>
                <button onClick={() => setSortBy('category')} className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md transition-all ${sortBy === 'category' ? 'bg-neutral-700 text-white' : 'text-neutral-500 hover:text-neutral-300'}`}>Type</button>
              </div>
            </div>
            <div className="overflow-y-auto p-2 flex-1">
              {searchQuery.trim() === '' ? <div className="h-full flex flex-col items-center justify-center text-neutral-500 py-10 px-6"><img src="magnifyingglass-med.svg" alt="Search" className="w-10 h-10 mb-4 opacity-20" /><p className="text-sm">Start typing to browse {pluginDatabase.length} plugins.</p></div> : 
               filteredPlugins.map((plugin, idx, arr) => {
                 const showHeader = sortBy === 'vendor' && (idx === 0 || arr[idx-1].vendor !== plugin.vendor);
                 return <React.Fragment key={plugin.id}>{showHeader && <div className="px-3 pt-4 pb-1 text-xs font-bold text-neutral-500 uppercase tracking-widest sticky top-0 bg-neutral-900/90 backdrop-blur z-10">{plugin.vendor}</div>}
                   <button onClick={() => addPluginToActive(plugin)} className="w-full text-left group flex items-center justify-between p-3 rounded-lg hover:bg-neutral-800 transition-all border border-transparent hover:border-neutral-700">
                     <div className="flex flex-col min-w-0 pr-2">{sortBy !== 'vendor' && <span className="text-[10px] text-neutral-500">{plugin.vendor}</span>}<span className="text-sm font-medium truncate group-hover:text-cyan-400">{plugin.name}</span></div>
                     <div className="flex items-center gap-3 shrink-0"><span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full border" style={categoryStyles[plugin.category]}>{plugin.category}</span><div className="w-8 h-8 rounded bg-neutral-950 border border-neutral-800 flex items-center justify-center group-hover:bg-cyan-500 transition-all"><Plus className="w-4 h-4 text-neutral-400 group-hover:text-neutral-950" /></div></div>
                   </button>
                 </React.Fragment>;
               })
              }
            </div>
          </section>

          <section className="pluginbench-reveal lg:col-span-4 relative rounded-2xl flex flex-col overflow-hidden shadow-2xl h-[600px] lg:h-[750px] bg-neutral-900/40 backdrop-blur-2xl border border-white/10" style={{ '--pluginbench-reveal-delay': '0.18s' }}>
            <div className="pt-3 border-b border-white/10 bg-black/20 shrink-0 relative z-10">
              <div className="flex overflow-x-auto scrollbar-none border-b border-white/5">
                {chains.map(chain => (
                  <button key={chain.id} onClick={() => setActiveChainId(chain.id)} className={`px-4 py-3 text-sm transition-all flex items-center gap-2 border-b-2 ${activeChainId === chain.id ? 'border-cyan-400 text-white bg-white/10' : 'border-transparent text-neutral-400 hover:bg-white/5'}`}>
                    {chain.name} {chain.instances > 1 && <span className="text-[10px] text-cyan-300 font-bold">x{chain.instances}</span>}
                    <span className="bg-black/40 px-1.5 py-0.5 rounded text-[10px]">{chain.plugins.length}</span>
                  </button>
                ))}
                <button onClick={createNewChain} className="px-4 py-3 text-sm text-neutral-500 hover:text-cyan-400 transition-colors flex items-center gap-1"><Plus className="w-4 h-4" /> New</button>
              </div>
              <div className="p-4 flex flex-col gap-4">
                <div className="flex justify-between items-center"><input type="text" value={activeChain.name} onChange={(e) => setChains(chains.map(c => c.id === activeChainId ? { ...c, name: e.target.value } : c))} className="bg-transparent text-lg font-bold text-white outline-none w-1/2 hover:bg-white/10 rounded px-1 -ml-1 transition-all" />
                  <div className="flex items-center gap-1 bg-black/30 p-1 rounded-lg border border-white/10">
                    <button onClick={() => updateActiveChainFormat('mono')} className={`text-[10px] uppercase px-2 py-1 rounded font-bold transition-all ${activeChain.format === 'mono' ? 'bg-cyan-500/30 text-cyan-200 shadow-lg' : 'text-neutral-500'}`}>Mono</button>
                    <button onClick={() => updateActiveChainFormat('stereo')} className={`text-[10px] uppercase px-2 py-1 rounded font-bold transition-all ${activeChain.format === 'stereo' ? 'bg-cyan-500/30 text-cyan-200 shadow-lg' : 'text-neutral-500'}`}>Stereo</button>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button onClick={clearActiveChain} disabled={activeChain.plugins.length === 0} className="text-xs font-bold text-neutral-300 bg-neutral-800/70 px-3 py-1.5 rounded border border-white/10 transition-all hover:bg-neutral-700 disabled:opacity-40">CLEAR CHAIN</button>
                  <div className="flex items-center bg-black/30 border border-white/10 rounded-md px-2 py-1.5"><span className="text-[10px] font-bold text-neutral-500 uppercase mr-2">Chains:</span>
                    <select value={activeChain.instances} onChange={(e) => updateActiveChainInstances(parseInt(e.target.value))} className="bg-transparent text-xs font-bold text-white outline-none cursor-pointer">
                      {Array.from({ length: 20 }, (_, i) => i + 1).map(n => <option key={n} value={n} className="bg-neutral-900">{n}</option>)}
                    </select>
                  </div>
                  <button onClick={() => removeChain(activeChain.id)} disabled={chains.length === 1} className="text-red-400 bg-red-500/10 p-2 rounded hover:bg-red-500/30 transition-all border border-red-500/20 disabled:opacity-30"><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
            </div>
            <div className="overflow-y-auto p-4 flex-1 scrollbar-thin relative z-10">
              {activeChain.plugins.length === 0 ? <div className="h-full flex flex-col items-center justify-center text-neutral-400 space-y-4 border-2 border-dashed border-white/10 rounded-xl bg-black/10 backdrop-blur-sm"><img src="square.3.layers.3d.svg" alt="Layers" className="w-10 h-10 opacity-20" /><p className="text-sm">Signal chain is empty.</p></div> : 
               <div className="space-y-3">{activeChain.plugins.map((plugin, index) => {
                 const cost = getPluginActualCost(getPluginEffectiveWeight(plugin), activeChain.format);
                 return <div key={plugin.uniqueId} className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-xl p-4 flex items-center justify-between shadow-xl transition-all hover:bg-white/10">
                   <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/10 group-hover:bg-cyan-400 transition-colors" />
                   <div className="flex flex-col min-w-0 pr-4 pl-2"><span className="text-[10px] text-neutral-400">#{index + 1} &middot; {plugin.vendor}</span><span className="text-sm font-bold text-white truncate">{plugin.name}</span>{plugin.sections?.length > 0 && <div className="mt-2 flex flex-wrap gap-2">{plugin.sections.map(section => {const sectionEnabled = plugin.moduleStates?.[section.id] ?? (section.enabledByDefault !== false); return <label key={section.id} className="inline-flex items-center gap-1.5 text-[10px] text-neutral-400 bg-black/30 border border-white/10 rounded px-2 py-1 cursor-pointer hover:border-cyan-500/40"><input type="checkbox" checked={sectionEnabled} onChange={() => togglePluginSectionInActive(plugin.uniqueId, section.id)} className="h-3 w-3 accent-cyan-400 cursor-pointer" /><span>{section.label}</span></label>;})}</div>}</div>
                   <div className="flex items-center gap-4 shrink-0"><div className="text-right flex flex-col"><span className="text-[10px] font-mono text-neutral-500 uppercase">Weight</span><span className="text-sm font-mono text-cyan-300 font-bold">{cost.toFixed(1)}</span></div><button onClick={() => removePluginFromActive(plugin.uniqueId)} className="p-2 text-neutral-500 hover:text-red-400 transition-colors"><Trash2 className="w-4 h-4" /></button></div>
                 </div>;
               })}</div>
              }
            </div>
          </section>

          <section className="pluginbench-reveal lg:col-span-4 bg-neutral-900 border border-neutral-800 rounded-2xl p-6 flex flex-col shadow-xl h-[600px] lg:h-[750px]" style={{ '--pluginbench-reveal-delay': '0.24s' }}>
            <div className="flex items-center gap-2 text-neutral-400 mb-6 border-b border-neutral-800 pb-4 shrink-0"><img src="cpu.svg" alt="CPU" className="w-4 h-4" style={{ opacity: 0.85 }} /><h2 className="text-sm font-bold uppercase tracking-wider text-neutral-300">Performance</h2></div>
            <div className="flex-1 space-y-8 overflow-y-auto pr-2">
              <div>
                <div className="flex justify-between items-end mb-2"><div><h3 className="text-sm font-medium text-neutral-300">Session Total</h3><p className="text-[10px] text-neutral-500">Multi-core utilization across {chains.length} tracks.</p></div><span className={`text-xl font-mono font-bold ${willGlitchMulti ? 'text-red-400' : 'text-purple-400'}`}>{multiCorePercent.toFixed(1)}%</span></div>
                <div className="h-3 w-full bg-neutral-950 border border-neutral-800 rounded-full overflow-hidden relative"><div className="absolute top-0 bottom-0 w-0.5 bg-neutral-600 z-20" style={{ left: `${cpuBudget}%` }} /><div className={`h-full transition-all duration-500 ${willGlitchMulti ? 'bg-red-500' : multiCorePercent > cpuBudget * 0.8 ? 'bg-amber-500' : 'bg-purple-500'}`} style={{ width: `${Math.min(multiCorePercent, 100)}%` }} /></div>
              </div>
              <div>
                <div className="flex justify-between items-end mb-2"><div><h3 className="text-sm font-medium text-neutral-300">Single-Core Peak</h3><p className="text-[10px] text-neutral-500">The heaviest audio path bottleneck.</p></div><span className={`text-xl font-mono font-bold ${willGlitchSingle ? 'text-red-400' : 'text-cyan-400'}`}>{singleCorePercent.toFixed(1)}%</span></div>
                <div className="h-3 w-full bg-neutral-950 border border-neutral-800 rounded-full overflow-hidden relative"><div className="absolute top-0 bottom-0 w-0.5 bg-neutral-600 z-20" style={{ left: `${cpuBudget}%` }} /><div className={`h-full transition-all duration-500 ${willGlitchSingle ? 'bg-red-500' : singleCorePercent > cpuBudget * 0.8 ? 'bg-yellow-500' : 'bg-cyan-500'}`} style={{ width: `${Math.min(singleCorePercent, 100)}%` }} /></div>
              </div>
              <div className="bg-neutral-950 border border-neutral-800 rounded-xl p-5 text-center flex flex-col justify-center min-h-[140px] shadow-inner">
                <h3 className="text-[10px] font-bold text-neutral-500 uppercase tracking-widest mb-2">Remaining Room</h3>
                {activeChain.plugins.length === 0 ? <p className="text-xs italic text-neutral-600">Add plugins to test headroom.</p> : willGlitchMulti || willGlitchSingle ? <div className="text-4xl font-black text-red-500">0</div> : 
                 <div className="flex flex-col items-center"><div className="text-5xl font-black text-white font-mono tracking-tighter flex items-center gap-3"><PlusSquare className="w-6 h-6 text-neutral-700" />{maxAdditionalInstances}</div><p className="text-[10px] text-neutral-500 uppercase tracking-widest mt-2">More instances of <strong className="text-cyan-400">"{activeChain.name}"</strong></p></div>
                }
              </div>
            </div>
          </section>
        </div>

        {sessionTotalCost > 0 && (
          <section className="pluginbench-reveal bg-neutral-900 border border-neutral-800 rounded-2xl p-6 shadow-2xl mt-6" style={{ '--pluginbench-reveal-delay': '0.30s' }}>
            <div className="flex items-center gap-2 text-neutral-400 mb-6 border-b border-neutral-800 pb-4"><HardDrive className="w-5 h-5" /><h2 className="text-base font-bold text-white tracking-wide">Hardware Comparison</h2></div>
            <div className="overflow-x-auto"><div className="min-w-[700px] space-y-1 py-2">{sortedMacModels.map(mac => {
              const perf = getMacPerformance(mac);
              return <div key={mac.id} className={`group flex items-center gap-4 py-2 px-3 rounded-lg transition-colors ${selectedMacId === mac.id ? 'bg-neutral-950 ring-1 ring-purple-500/50 shadow-lg' : 'hover:bg-neutral-800/50'}`}>
                <div className="w-64 flex flex-col"><span className={`text-sm font-bold ${selectedMacId === mac.id ? 'text-purple-400' : 'text-neutral-200'}`}>{mac.name}</span><span className="text-[10px] font-mono text-neutral-500">{mac.formFactor} &middot; {mac.multi} Multi Units</span></div>
                <div className="w-32 text-right pr-4 border-r border-neutral-800 shrink-0">
                  <span className={`text-sm font-mono font-bold ${perf.overBudget ? 'text-red-500' : 'text-neutral-300'}`}>{perf.bottleneckPercent.toFixed(1)}%</span>
                  <span className="text-[10px] text-neutral-500 ml-1">{perf.bottleneckType}</span>
                </div>
                <div className="flex-1 h-2 bg-neutral-800 rounded overflow-hidden"><div className={`h-full transition-all duration-1000 ${perf.overBudget ? 'bg-red-500/50' : 'bg-purple-500/80'}`} style={{ width: `${Math.min(perf.bottleneckPercent, 100)}%` }} /></div>
                {selectedMacId === mac.id && <div className="text-[10px] font-bold text-purple-400 px-2 py-1 bg-purple-500/10 rounded">SELECTED</div>}
              </div>;
            })}</div></div>
          </section>
        )}
      </main>

      <footer className="pluginbench-reveal border-t border-neutral-900 bg-transparent mt-12 py-8 text-[10px] text-neutral-600 uppercase tracking-widest" style={{ '--pluginbench-reveal-delay': '0.36s' }}>
        <div className="flex flex-wrap items-start gap-4" style={pageContainerStyle}>
          <div>PluginBench &copy; 2026</div>
          <div className="text-right ml-auto">
            <div>
              Data sourced from <a href="https://everymac.com/mac-benchmarks/index-mac-benchmarks.html" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline transition-colors">EveryMac Geekbench 6 charts</a> &bull; Made by <a href="https://twitter.com/TheLarkShark" target="_blank" rel="noopener noreferrer" className="text-cyan-500 hover:underline transition-colors">Lark</a>
            </div>
            <div className="mt-1 text-[9px] text-neutral-600 normal-case tracking-normal">
              (actually, he used Google Gemini and GitHub Copilot, but he had the idea so that's what counts)
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}

const pluginBenchRoot = document.getElementById('pluginbench-root');
if (pluginBenchRoot) {
  ReactDOM.createRoot(pluginBenchRoot).render(<App />);
}