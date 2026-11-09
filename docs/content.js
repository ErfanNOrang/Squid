/* wv7 "Venn" content. Edit text here; index.html only draws it.
   Rules: no invented facts. Anything unconfirmed is marked NEEDS and shows up gold on the page.

   Each tile:
     id      short key
     zone    which circles it sits in: 'P' physics, 'M' machine learning, 'V' visualization
             (e.g. 'PM' = physics + ML overlap). Only used for the mobile list grouping.
     x, y    tile center on the 1000 x 800 Venn canvas (see the circle centers in VENN below)
     doodle  one of: eit, peak, feather, gp, battery, turbine, solver, micro, ot, brain, chart, notes
     title   handwritten title on the tile (keep it short, 2 to 5 words)
     tag     small label under the doodle
     panel   what opens when the tile is clicked */
var VENN = {
  circles: [
    { id:'P', label:'Physics',                 cx:500, cy:300, r:260, color:'rgba(181,173,106,.62)' },
    { id:'M', label:'Machine Learning',        cx:360, cy:520, r:260, color:'rgba(125,142,160,.62)' },
    { id:'V', label:'Visualization & Perception', cx:640, cy:520, r:260, color:'rgba(176,127,134,.62)' }
  ],
  center: ['B.S. COMPUTER SCI', 'M.S. CIS', 'PHD · NEXT']
};

var SITE = {
  name: 'Erfan Nasirzadeh Orang',
  shortName: 'Erfan Orang',
  hello: ['I am a', 'Scientific ML', 'Researcher'],
  ket: '|PHYS⟩ + |ML⟩ + |VIS⟩',
  sub: 'expertise as an interdisciplinary scientist',
  seeking: 'Seeking a PhD position · Fall 2027 or Spring 2028',
  email: 'enorang@student.ysu.edu',
  scholar: 'https://scholar.google.com/citations?user=zrKHVW4AAAAJ&hl=en',
  linkedin: 'https://www.linkedin.com/in/erfan-nasirzadeh-orang/',
  cv: 'cv.pdf',
  headshot: '',          /* NEEDS: put your photo at assets/headshot.jpg and write 'assets/headshot.jpg' here */
  notice: 'Presenting at IEEE VIS 2026 in Boston, Nov 9–13. If you\'ll be there, I\'d love to meet.'
};

var TILES = [
  /* Physics only */
  { id:'eit', zone:'P', x:385, y:172, doodle:'eit', title:'Zeeman EIT', tag:'JOSA B 2025',
    panel:{ area:'Quantum optics · 2022–25', q:'What drives the asymmetry in Zeeman EIT signals when the laser is chirped?',
      did:"Laser experiments, modeling and signal processing in Python and MATLAB in Dr. Michael Crescimanno's lab. I wrote automated checks for laser power and magnetic-field drift before trusting a model of the chirp asymmetry.",
      found:'Published in JOSA B (2025). Posters at APS DAMOP 2024 and NCHC 2025.',
      links:[['JOSA B paper','https://doi.org/10.1364/JOSAB.544782'],['DAMOP poster','https://meetings.aps.org/Meeting/DAMOP24/Session/S00.38']] } },
  { id:'feather', zone:'P', x:525, y:118, doodle:'feather', title:'Peacock Feather Lasers', tag:'Sci. Rep. 2025',
    panel:{ area:'Photonics · 2023–', q:'Can the natural photonic structures in peacock feathers provide the optical feedback for laser emission?',
      did:'Imaging lab intern in YSU Physics and Biology: trained and certified on AFM, SEM and TEM. Worked with Florida Polytechnic University on optical measurements of rhodamine 6G–infused samples.',
      found:'Scientific Reports (2025), covered by Science, The Business Journal and Florida Polytechnic University. Talk at APS EGLS 2025.',
      links:[['Paper','https://doi.org/10.1038/s41598-025-04039-8'],['In Science','https://www.science.org/content/article/peacock-feathers-can-be-lasers']] } },
  { id:'spie', zone:'P', x:662, y:205, doodle:'peak', title:'ASE vs. Lasing', tag:'Proc. SPIE 2026',
    panel:{ area:'Photonics · 2026', q:'How do biological photonic structures provide optical feedback that supports ASE and laser emission?',
      did:'Contributing author on the follow-up to the feather work.',
      found:'Proc. SPIE 14207, Light in Nature 2026, 142070A.',
      links:[['Paper','https://doi.org/10.1117/12.3112389']] } },

  /* Physics + ML */
  { id:'jtac', zone:'PM', x:292, y:330, doodle:'battery', title:'Battery Surrogates', tag:'JTAC 2026',
    panel:{ area:'Scientific ML · 2025–26', q:'Can ML surrogates replace slow CFD and thermal simulations of battery cooling, and say where they are reliable?',
      did:"In Dr. Kyosung Choo's group, working with his PhD students: XGBoost, random forest and Gaussian process regression on simulation data, with SHAP and nested cross-validation.",
      found:'A four-model benchmark with GPR for uncertainty and SHAP for attribution (Journal of Thermal Analysis and Calorimetry, 2026).',
      links:[['Paper','https://doi.org/10.1007/s10973-026-16179-8']] } },
  { id:'wind', zone:'PM', x:300, y:458, doodle:'turbine', title:'Wind Turbines', tag:'under review',
    panel:{ area:'Scientific ML · 2026', q:'How do turbulence effects on an H-type Darrieus vertical-axis wind turbine depend on operating regime?',
      did:'Contributing author: uncertainty-aware surrogate modeling of the turbine simulations.',
      found:'Submitted to Part A: Journal of Power and Energy (under review).',
      links:[['Request a copy','mailto:enorang@student.ysu.edu']] } },
  { id:'femvib', zone:'PM', x:432, y:350, doodle:'solver', title:'FEMvib (soon)', tag:'upcoming',
    panel:{ area:'Scientific ML · upcoming', q:'Where can we trust the predictions of a finite-element vibrational solver?',
      did:'An upcoming collaboration with Dr. Andrew Cooksy (SDSU) on uncertainty in FEMvib, an open-source finite-element vibrational solver.',
      found:'Upcoming.', links:[] } },

  /* Physics + Vis */
  { id:'imaging', zone:'PV', x:700, y:360, doodle:'micro', title:'Nanoscale Imaging', tag:'AFM · SEM · TEM',
    panel:{ area:'Imaging · 2023', q:'How do you compare two very different views of the same nanostructure?',
      did:'Built a tool to line up two very different imaging methods before drawing any conclusion about the feather nanostructure.',
      found:'Part of the Scientific Reports study. NEEDS: one sentence on what the alignment tool did.',
      links:[] } },

  /* ML + Vis */
  { id:'tribe', zone:'MV', x:500, y:628, doodle:'brain', title:'Brain Model vs fMRI', tag:'IEEE VIS 2026',
    panel:{ area:'Visualization & neuro ML · 2026–', q:"Can a neural encoding model (Meta's TRIBE v2) replicate a published fMRI study of how people perceive visualizations?",
      did:'First author, with Dr. Zack While. I compared TRIBE v2\'s predicted cortical responses with the human results, using PyTorch on an HPC cluster.',
      found:'TRIBE v2 matched the direction of 11 of 14 reported effects, concentrated in visual regions. Talk at VISxVISION and an invited poster at IEEE VIS 2026.',
      links:[['arXiv','https://arxiv.org/abs/2609.15685'],['VIS program','https://ieeevis.org/year/2026/program/paper/3b9c6999-3420-49c7-a24f-92a1edc21f2a/'],['Supplemental','https://osf.io/8a96x/']] } },

  /* ML only */
  { id:'reu', zone:'M', x:212, y:598, doodle:'ot', title:'Optimal Transport', tag:'Williams REU 2024',
    panel:{ area:'Generative ML · Summer 2024', q:'Can generative ML help with data assimilation for forecasting?',
      did:'At a Williams College REU with mentors from Caltech, CUNY and NYU: applied optimal transport to atmospheric data and helped build a conditional sampling algorithm. NEEDS: confirm your part.',
      found:'NEEDS: one sentence on the outcome.', links:[] } },
  { id:'datamine', zone:'M', x:300, y:722, doodle:'chart', title:'Student Retention', tag:'YSU Data Mine',
    panel:{ area:'Data science · Spring 2026', q:'Can we model student retention for 1,935 YSU students?',
      did:'With Dr. Jeffrey Coldren and Dr. G. Jay Kerns (YSU Data Mine, Purdue partnership). NEEDS: your part in one sentence.',
      found:'Presented at YSU STEM Day.', links:[] } },

  /* Vis only */
  { id:'eiid', zone:'V', x:792, y:610, doodle:'notes', title:'Embedded Displays', tag:'in preparation',
    panel:{ area:'HCI · Fall 2026', q:'How do people use embedded interactive information displays?',
      did:'Qualitative coding with a PhD student. NEEDS: your part in 1–2 sentences.',
      found:'Paper in preparation.', links:[] } }
];
