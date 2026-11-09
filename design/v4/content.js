/* Content for the site. Edit text here; index.html only renders it.

   Sources: Google Scholar (papers, abstracts), my CVs, and facts I confirmed
   in writing. Rules:
   - Never add a fact, number, role or result I haven't confirmed.
   - {{NEEDS: ...}} shows on the page as a visible gold marker. Replace every
     one before sending the link to anyone; the page counts what's left.
   - Removed until confirmed: "thesis-based", "presented to university
     leadership", the REU "12%" figure, "1,200+ students", the Nov 19 YSU
     Showcase talk. Dropped for good: citation counts and h-index. */
var SITE = {
  name: 'Erfan Nasirzadeh Orang',
  position: 'M.S. student and graduate research assistant, Youngstown State University',
  email: 'enorang@student.ysu.edu',
  scholar: 'https://scholar.google.com/citations?user=zrKHVW4AAAAJ&hl=en',
  linkedin: 'https://www.linkedin.com/in/erfan-nasirzadeh-orang/',
  github: '',            /* {{NEEDS: GitHub profile URL, if you want it linked}} */
  cv: 'cv.pdf',
  headshot: 'assets/headshot.jpg',

  seeking: 'Seeking a PhD position · available to start Fall 2027 or Spring 2028',
  areas: [
    { id: 'sciml',     name: 'Scientific ML & uncertainty' },
    { id: 'vis',       name: 'Visualization & neuro ML' },
    { id: 'photonics', name: 'Photonics' }
  ],
  /* A short notice under the seeking line. Hidden automatically after `until`. */
  notice: { text: 'Presenting at IEEE VIS 2026 in Boston, Nov 9–13. If you\'ll be there, I\'d love to meet.', until: '2026-11-14' },

  abstract: "I'm an M.S. student and graduate research assistant at Youngstown State University. I build machine learning for physical systems, and one question keeps coming back: how much should we trust what the model says? I've asked it in a quantum optics lab, in a photonics collaboration on peacock feathers that lase, with uncertainty-aware surrogate models for batteries and wind turbines, and now in testing whether a brain-prediction model can stand in for an fMRI study. I want to keep asking it at PhD depth.",

  /* DRAFT: Erfan rewrites these. Tuned to ML/UQ, perception/vis and biophotonics/imaging labs. */
  questions: [
    { area: 'sciml', q: 'When a Gaussian process or another surrogate stands in for an expensive simulation, how can we tell where its error bars hold up, especially in operating regimes it was not trained on, and use that to choose the next simulation to run?' },
    { area: 'vis', q: 'Can neural encoding models give perception researchers a cheap first pass on a study design, and how should we flag which predicted effects to trust before running people in a scanner?' },
    { area: 'vis', q: 'How should a model\'s uncertainty be shown so that scientists actually change their decisions because of it?' },
    { area: 'photonics', q: 'In disordered biological photonic structures, can nanoscale imaging and emission spectra be combined to tell real optical feedback apart from amplified spontaneous emission, and say how sure we are?' }
  ],

  /* Project sections, in page order. #optics is supporting background, so it comes last. */
  projects: [
    { id: 'sciml', area: 'Scientific ML & uncertainty', title: 'Surrogate models that say where they are unsure',
      keywords: 'Gaussian process regression · surrogate modeling · uncertainty quantification · SHAP',
      summary: 'Fast machine learning stand-ins for slow physics simulations, built to report how much to trust each prediction.',
      question: 'Can machine learning surrogates replace slow CFD and thermal simulations of battery cooling and a wind turbine, and tell us where their predictions are reliable?',
      did: [
        "In Dr. Kyosung Choo's group, working day to day with his PhD students, I trained surrogate models (XGBoost, random forest and Gaussian process regression) on simulation data, and used SHAP and nested cross-validation to interpret them and estimate their uncertainty.",
        '{{NEEDS: your part on each paper in 2–3 plain sentences: battery (JTAC) and wind turbine}}'
      ],
      found: [
        'Battery thermal management (JTAC, 2026): a four-model benchmark, with Gaussian process regression for uncertainty and SHAP for attribution.',
        '{{NEEDS: one sentence on what each paper found}}'
      ],
      next: [
        'An upcoming collaboration with Dr. Andrew Cooksy (SDSU) on uncertainty in FEMvib, an open-source finite-element vibrational solver.'
      ],
      earlier: "Before this, at a Williams College REU in Summer 2024, I worked on generative machine learning for data assimilation with mentors from Caltech, CUNY and NYU: I applied optimal transport to atmospheric data and helped build a conditional sampling algorithm for forecasting. {{NEEDS: confirm or rewrite your part at the REU}}",
      figure: { src: 'assets/fig-sciml.png', caption: 'Re-plotted result from the battery or wind turbine study.', credit: '', needs: 'a re-plotted figure (I\'ll skip the publisher\'s version)' },
      pubs: ['jtac', 'wind'] },

    { id: 'vis', area: 'Visualization & neuro ML', title: 'Can a brain model stand in for a brain scan?',
      keywords: 'neural encoding · fMRI · visualization perception · computational imaging',
      summary: 'Testing whether a model that predicts brain responses can replicate an expensive fMRI study of how people read charts.',
      question: "Can a neural encoding model (Meta's TRIBE v2) replicate the results of a published fMRI study on how people perceive visualizations?",
      did: [
        'First author, as a graduate research assistant with Dr. Zack While. I evaluated TRIBE v2 against the published study, comparing its predicted cortical responses with the human results, using PyTorch on an HPC cluster.',
        '{{NEEDS: who did what: study design, code, analysis, writing}}'
      ],
      found: [
        'TRIBE v2 matched the direction of 11 of 14 reported effects, concentrated in visual regions.'
      ],
      next: [
        'Presenting it at IEEE VIS 2026 in Boston: a talk at the VISxVISION workshop and a poster at the main conference, which the poster session chair invited.',
        'Qualitative coding with a PhD student on embedded interactive information displays (in preparation). {{NEEDS: your part on EIID in 1–2 sentences}}'
      ],
      figure: { src: 'assets/fig-vis.png', caption: 'From my paper, arXiv:2609.15685.', credit: 'Nasirzadeh Orang & While, 2026.', needs: 'the figure file from your arXiv paper, and which figure number' },
      pubs: ['vis'] },

    { id: 'photonics', area: 'Photonics', title: 'Peacock feathers that lase',
      keywords: 'biophotonics · nanoscale imaging · laser emission · computational imaging',
      summary: 'Peacock tail feathers infused with a laser dye can lase. I helped image the natural structures behind it.',
      question: 'Can the natural photonic structures in peacock feathers provide the optical feedback for laser emission, and what is the spectral fingerprint of that emission?',
      did: [
        "As an imaging lab intern in YSU's Physics and Biology departments (Fall 2023), I trained and was certified on AFM, SEM and TEM.",
        'I built a tool to line up two very different imaging methods before drawing any conclusion about the nanostructure.',
        'I worked with collaborators at Florida Polytechnic University on optical measurements of the rhodamine 6G–infused samples.',
        '{{NEEDS: confirm which samples you imaged and what the alignment tool did, in 1–2 sentences}}'
      ],
      found: [
        '{{NEEDS: one sentence on what the Scientific Reports paper found}}',
        'The paper was covered by Science, The Business Journal and Florida Polytechnic University.'
      ],
      next: [
        'A follow-up in Proc. SPIE (2026) on optical feedback from biological photonic structures supporting ASE and laser emission.'
      ],
      figure: { src: 'assets/fig-photonics.png', caption: 'From the Scientific Reports paper.', credit: 'Fiorito III et al., Sci. Rep. 15, 20938 (2025), CC BY.', needs: 'the figure file and its number in the paper' },
      pubs: ['scirep', 'spie'] },

    { id: 'optics', area: 'Supporting background', title: 'Quantum optics: check the measurement first',
      keywords: 'Zeeman EIT · laser spectroscopy · signal processing',
      summary: 'My first research home, and where I learned to check how a measurement was made before trusting a model of it.',
      question: 'What drives the asymmetry in Zeeman electromagnetically induced transparency signals when the laser is chirped? {{NEEDS: confirm or rewrite the question}}',
      did: [
        "In Dr. Michael Crescimanno's quantum optics lab (2022–2025), I ran laser experiments and did modeling and signal processing in Python and MATLAB.",
        'I wrote automated checks for laser power and magnetic-field drift before trusting a model of chirp asymmetry.',
        '{{NEEDS: anything else that was specifically yours}}'
      ],
      found: [
        '{{NEEDS: one sentence on what the JOSA B paper found}}',
        'I presented the work as posters at APS DAMOP 2024 and the NCHC annual conference in 2025.'
      ],
      next: [
        'This is supporting background rather than a direction I\'m applying in. The habit of checking the measurement carried into every project after it.'
      ],
      figure: { sketch: 'eit', caption: 'Schematic, not data: a narrow transparency window inside an absorption line, the signature of EIT.' },
      pubs: ['josab'] }
  ],

  /* Table 1: methods by project, from my CVs. */
  methods: {
    cols: [['optics','Zeeman EIT'],['photonics','Feather lasing'],['reu','REU'],['sciml','Surrogates'],['vis','TRIBE v2']],
    rows: [
      ['Laser experiments, signal processing (Python, MATLAB)', ['optics']],
      ['AFM, SEM and TEM imaging', ['photonics']],
      ['Optimal transport, generative ML', ['reu']],
      ['XGBoost, random forest', ['sciml']],
      ['Gaussian process regression', ['sciml']],
      ['SHAP, nested cross-validation', ['sciml']],
      ['Neural encoding models (PyTorch, HPC)', ['vis']]
    ]
  },

  /* Research lines for Figure 1 and the timeline. Teaching lives in background. */
  lines: [
    { id: 'optics',    name: 'Quantum optics',              short: 'Optics',    color: '#6b9bd1' },
    { id: 'photonics', name: 'Photonics',                   short: 'Photonics', color: '#d0679a' },
    { id: 'sciml',     name: 'Scientific ML & uncertainty', short: 'Sci ML',    color: '#e0a03a' },
    { id: 'vis',       name: 'Visualization & neuro ML',    short: 'Vis',       color: '#4fb78a' }
  ],

  /* Dated events. kind: 'did' (work started), 'came' (an outcome), 'mile' (a degree milestone).
     from: the work an outcome came out of. soon: in the future. at: decimal year, for ordering. */
  events: [
    { id:'bs',       at:2022.64, when:'Aug 2022',     kind:'mile', label:'Starts B.S.', text:'Started the B.S. in Computer Science with Honors at YSU.' },
    { id:'lab',      at:2022.79, when:'Oct 2022',     kind:'did',  line:'optics',    label:'Joins optics lab', text:"Joined Dr. Michael Crescimanno's quantum optics lab." },
    { id:'imaging',  at:2023.62, when:'Fall 2023',    kind:'did',  line:'photonics', label:'Imaging internship', text:'Imaging lab internship: AFM, SEM and TEM; the peacock feather collaboration.' },
    { id:'reu',      at:2024.42, when:'Summer 2024',  kind:'did',  line:'sciml',     label:'Williams REU', text:'REU at Williams College: generative ML and optimal transport for data assimilation.' },
    { id:'damop',    at:2024.46, when:'Jun 2024',     kind:'came', line:'optics',    from:'lab', label:'DAMOP poster', text:'Poster at the 55th APS DAMOP meeting, Fort Worth.', url:'https://meetings.aps.org/Meeting/DAMOP24/Session/S00.38' },
    { id:'josab',    at:2025.12, when:'Feb 2025',     kind:'came', line:'optics',    from:'lab', label:'JOSA B paper', text:'JOSA B paper on chirp asymmetry in Zeeman EIT.', url:'https://doi.org/10.1364/JOSAB.544782' },
    { id:'scirep',   at:2025.54, when:'Jul 2025',     kind:'came', line:'photonics', from:'imaging', label:'Scientific Reports', text:'Scientific Reports paper on laser emission from peafowl tail feathers.', url:'https://doi.org/10.1038/s41598-025-04039-8' },
    { id:'press',    at:2025.56, when:'Jul–Aug 2025', kind:'came', line:'photonics', from:'imaging', label:'In Science', text:'Covered by Science, The Business Journal and Florida Polytechnic University.', url:'https://www.science.org/content/article/peacock-feathers-can-be-lasers' },
    { id:'choo',     at:2025.66, when:'2025–26',      kind:'did',  line:'sciml',     label:'Surrogate models', text:"Uncertainty-aware surrogate models in Dr. Kyosung Choo's group." },
    { id:'nchc',     at:2025.7,  when:'Sep 2025',     kind:'came', line:'optics',    from:'lab', label:'NCHC poster', text:'Poster at the 59th NCHC annual conference, San Diego.', url:'https://whova.com/embedded/session/ljaLfAB8LfI24MKXCkafQuyu4pv52OeNgt0nutcUXIw%3D/4820076/' },
    { id:'egls',     at:2025.78, when:'Oct 2025',     kind:'came', line:'photonics', from:'imaging', label:'APS EGLS talk', text:'Talk at the APS Eastern Great Lakes Section and MIAAPT joint meeting, Ypsilanti.', url:'https://meetings.aps.org/Meeting/EGLSF25/Session/F02.3' },
    { id:'gra',      at:2026.35, when:'May 2026',     kind:'did',  line:'vis',       label:'Joins While lab', text:'Graduate research assistant with Dr. Zack While: the TRIBE v2 replication.' },
    { id:'grad',     at:2026.37, when:'May 2026',     kind:'mile', label:'B.S. with Honors', text:'Graduated: B.S. in Computer Science with Honors, Honors Scholar with Distinction.' },
    /* {{NEEDS: JTAC publication month}}; placed in 2026 until then */
    { id:'jtac',     at:2026.45, when:'2026',         kind:'came', line:'sciml',     from:'choo', label:'JTAC paper', text:'JTAC paper on ML surrogates for battery thermal management.', url:'https://doi.org/10.1007/s10973-026-16179-8' },
    { id:'wind',     at:2026.6,  when:'Aug 2026',     kind:'came', line:'sciml',     from:'choo', label:'Wind paper submitted', text:'Wind turbine paper submitted to Part A: Journal of Power and Energy (under review).' },
    { id:'ms',       at:2026.64, when:'Aug 2026',     kind:'mile', label:'Starts M.S.', text:'Started the M.S. in Computing & Information Systems, fully funded (stipend and full tuition remission).' },
    { id:'eiid',     at:2026.66, when:'Fall 2026',    kind:'did',  line:'vis',       label:'EIID coding', text:'Qualitative coding on embedded interactive information displays (in preparation).' },
    { id:'vispaper', at:2026.7,  when:'Sep 2026',     kind:'came', line:'vis',       from:'gra', label:'VIS paper accepted', text:'First-author paper accepted at VISxVISION, IEEE VIS 2026, and posted on arXiv.', url:'https://arxiv.org/abs/2609.15685' },
    { id:'spie',     at:2026.78, when:'Oct 2026',     kind:'came', line:'photonics', from:'imaging', label:'SPIE paper', text:'Follow-up paper in Proc. SPIE 14207.', url:'https://doi.org/10.1117/12.3112389' },
    { id:'travel',   at:2026.81, when:'Oct 2026',     kind:'came', line:'vis',       from:'gra', label:'Travel awards', text:'YSU Student USE Fund award and YSU Foundation support for travel to IEEE VIS.' },
    { id:'femvib',   at:2026.83, when:'Upcoming',     kind:'did',  line:'sciml',     soon:true, label:'FEMvib (upcoming)', text:'Upcoming collaboration with Dr. Andrew Cooksy (SDSU) on uncertainty in FEMvib.' },
    { id:'visboston',at:2026.86, when:'Nov 9–13',     kind:'came', line:'vis',       from:'gra', soon:true, label:'IEEE VIS, Boston', text:'Workshop talk and invited poster at IEEE VIS 2026, Boston.' }
  ],

  /* Periods are date ranges only; events are placed by their own date. */
  periods: [
    { label:'2022–23',     sub:'B.S. year one',      start:2022.5,  end:2023.4 },
    { label:'2023–24',     sub:'B.S. year two',      start:2023.4,  end:2024.4 },
    { label:'Summer 2024', sub:'REU',                start:2024.4,  end:2024.63 },
    { label:'2024–25',     sub:'B.S. year three',    start:2024.63, end:2025.4 },
    { label:'Summer 2025', sub:'',                   start:2025.4,  end:2025.63 },
    { label:'2025–26',     sub:'B.S. year four',     start:2025.63, end:2026.35 },
    { label:'Summer 2026', sub:'graduate research',  start:2026.35, end:2026.63 },
    { label:'Fall 2026',   sub:'M.S. year one · now',start:2026.63, end:2027 }
  ],

  pubs: [
    { id:'vis', year:2026, project:'vis', role:'First author',
      title:'Can a Neural Encoding Model Replicate an fMRI Visualization Study?',
      authors:['E. Nasirzadeh Orang','Z. While'],
      venue:'VISxVISION Workshop at IEEE VIS 2026', detail:'arXiv:2609.15685',
      links:[['arXiv','https://arxiv.org/abs/2609.15685'],['VIS program','https://ieeevis.org/year/2026/program/paper/3b9c6999-3420-49c7-a24f-92a1edc21f2a/'],['Supplemental','https://osf.io/8a96x/']],
      bib:'@misc{orang2026neural,\n  title  = {Can a Neural Encoding Model Replicate an fMRI Visualization Study?},\n  author = {Nasirzadeh Orang, Erfan and While, Zack},\n  year   = {2026},\n  eprint = {2609.15685},\n  archivePrefix = {arXiv},\n  note   = {VISxVISION Workshop, IEEE VIS 2026}\n}' },
    { id:'spie', year:2026, project:'photonics', role:'Contributing author',
      title:'Optical feedback from biological photonic structures supporting ASE and laser emission',
      authors:['N. J. Dawson','H. Liu','A. Fiorito III','D. R. Sheffield','B. Bish','E. Nasirzadeh Orang','R. Robinson','M. Giron','M. Crescimanno'],
      venue:'Proc. SPIE 14207, Light in Nature 2026', detail:'142070A',
      links:[['DOI','https://doi.org/10.1117/12.3112389']],
      bib:'@inproceedings{dawson2026optical,\n  title     = {Optical feedback from biological photonic structures supporting ASE and laser emission},\n  author    = {Dawson, N. J. and Liu, H. and Fiorito, III, A. and Sheffield, D. R. and Bish, B. and Nasirzadeh Orang, E. and Robinson, R. and Giron, M. and Crescimanno, M.},\n  booktitle = {Light in Nature 2026},\n  series    = {Proc. SPIE},\n  volume    = {14207},\n  pages     = {142070A},\n  year      = {2026},\n  doi       = {10.1117/12.3112389}\n}' },
    { id:'jtac', year:2026, project:'sciml', role:'Contributing author',
      title:'Machine learning surrogates for Al₂O₃–TiO₂/water hybrid nanofluid battery thermal management under variable heat generation',
      authors:['A. Ulus','I. Uluocak','E. Nasirzadeh Orang','N. Vakili','K. Choo'],
      venue:'Journal of Thermal Analysis and Calorimetry', detail:'2026, 1–19',
      links:[['DOI','https://doi.org/10.1007/s10973-026-16179-8']],
      bib:'@article{ulus2026machine,\n  title   = {Machine learning surrogates for {Al2O3--TiO2}/water hybrid nanofluid battery thermal management under variable heat generation},\n  author  = {Ulus, A. and Uluocak, I. and Nasirzadeh Orang, E. and Vakili, N. and Choo, K.},\n  journal = {Journal of Thermal Analysis and Calorimetry},\n  pages   = {1--19},\n  year    = {2026},\n  doi     = {10.1007/s10973-026-16179-8}\n}' },
    { id:'wind', year:2026, project:'sciml', role:'Contributing author', review:true,
      title:'Operating-regime dependence of turbulence effects on an H-type Darrieus vertical-axis wind turbine using uncertainty-aware surrogate modeling',
      authors:['A. Ulus','I. Uluocak','E. Nasirzadeh Orang','N. Vakili','K. Choo'],
      venue:'Part A: Journal of Power and Energy', detail:'under review',
      links:[['Request a copy','mailto:enorang@student.ysu.edu']] },
    /* Scholar lists the first author as "A Fiorito III". {{NEEDS: confirm against the paper}} */
    { id:'scirep', year:2025, project:'photonics', role:'Contributing author',
      title:'Spectral fingerprint of laser emission from rhodamine 6G–infused male Indian peafowl tail feathers',
      authors:['A. Fiorito III','D. R. Sheffield','H. Liu','E. Nasirzadeh Orang','N. J. Dawson'],
      venue:'Scientific Reports', detail:'15, 20938 (July 2025)',
      links:[['DOI','https://doi.org/10.1038/s41598-025-04039-8'],['In Science','https://www.science.org/content/article/peacock-feathers-can-be-lasers']],
      bib:'@article{fiorito2025spectral,\n  title   = {Spectral fingerprint of laser emission from rhodamine 6G infused male Indian peafowl tail feathers},\n  author  = {Fiorito, III, A. and Sheffield, D. R. and Liu, H. and Nasirzadeh Orang, E. and Dawson, N. J.},\n  journal = {Scientific Reports},\n  volume  = {15},\n  number  = {1},\n  pages   = {20938},\n  year    = {2025},\n  doi     = {10.1038/s41598-025-04039-8}\n}' },
    { id:'josab', year:2025, project:'optics', role:'Contributing author',
      title:'Chirp asymmetry in Zeeman electromagnetically induced transparency',
      authors:['J. Gorkos','K. Grenzig','E. Nasirzadeh Orang','V. Thomas','D. Tighe','M. Crescimanno'],
      venue:'Journal of the Optical Society of America B', detail:'42(2), 404–411 (2025)',
      links:[['DOI','https://doi.org/10.1364/JOSAB.544782']],
      bib:'@article{gorkos2025chirp,\n  title   = {Chirp asymmetry in Zeeman electromagnetically induced transparency},\n  author  = {Gorkos, J. and Grenzig, K. and Nasirzadeh Orang, E. and Thomas, V. and Tighe, D. and Crescimanno, M.},\n  journal = {Journal of the Optical Society of America B},\n  volume  = {42},\n  number  = {2},\n  pages   = {404--411},\n  year    = {2025},\n  doi     = {10.1364/JOSAB.544782}\n}' }
  ],

  talks: [
    { when:'Nov 2026', kind:'Talk + invited poster', soon:true, title:'Can a Neural Encoding Model Replicate an fMRI Visualization Study?', where:'VISxVISION Workshop and main conference poster session, IEEE VIS 2026, Boston, MA' },
    { when:'Oct 2025', kind:'Oral', title:'Spectral fingerprint of laser emission from rhodamine 6G infused male Indian peafowl tail feathers', authors:['E. Nasirzadeh Orang','N. J. Dawson','A. Fiorito','H. Liu','D. R. Sheffield'], where:'Fall 2025 Joint Meeting of the APS Eastern Great Lakes Section and MIAAPT, Ypsilanti, MI · Bulletin of the American Physical Society', url:'https://meetings.aps.org/Meeting/EGLSF25/Session/F02.3' },
    { when:'Sep 2025', kind:'Poster', title:'Chirp asymmetry in Zeeman electromagnetically induced transparency', where:'59th Annual Conference of the National Collegiate Honors Council, San Diego, CA', url:'https://whova.com/embedded/session/ljaLfAB8LfI24MKXCkafQuyu4pv52OeNgt0nutcUXIw%3D/4820076/' },
    { when:'Mar 2025', kind:'Oral', title:'A mathematical model of foot traffic-induced wear on historical staircases', where:'Pi Mu Epsilon Annual Conference, Youngstown State University', url:'https://www.ysumathstat.org/pme/conferences/PME2025tidyProgramFinal_v1-1%20no%20comap.pdf' },
    /* {{NEEDS: full DAMOP author list from the APS page}} */
    { when:'Jun 2024', kind:'Poster', title:'Chirp asymmetry in Zeeman electromagnetically induced transparency', authors:['M. Crescimanno','J. Gorkos','K. Grenzig','V. Thomas','E. Nasirzadeh Orang','et al.'], where:'55th APS DAMOP Meeting, Fort Worth, TX, Session S00.38', url:'https://meetings.aps.org/Meeting/DAMOP24/Session/S00.38' }
  ],

  press: [
    { outlet:'Science (AAAS)', when:'Jul 2025', title:'Peacock feathers can be lasers', url:'https://www.science.org/content/article/peacock-feathers-can-be-lasers' },
    { outlet:'The Business Journal', when:'Aug 2025', title:'Study Detects Lasers in Peacock Tail Feathers', url:'https://businessjournaldaily.com/study-detects-lasers-in-peacock-tail-feathers/' },
    { outlet:'Florida Polytechnic University', when:'Aug 2025', title:'Florida Poly student research uncovers laser light from peacock feathers', url:'https://floridapoly.edu/news/082725-florida-poly-student-research-uncovers-laser-light-from-peacock-feathers/' }
  ],

  background: {
    education: [
      { what:'M.S., Computing & Information Systems', when:'2026–', where:'Youngstown State University · graduate assistantship with stipend and full tuition remission · advisor Dr. Zack While' },
      { what:'B.S., Computer Science with Honors', when:'2022–26', where:'Youngstown State University · minors in Mathematics & Data Analytics · Honors Scholar with Distinction' },
      { what:'Research Experience for Undergraduates', when:'2024', where:'Williams College · generative ML & optimal transport' }
    ],
    other: [
      { what:'YSU Data Mine (Purdue partnership)', when:'Spring 2026', where:'With Dr. Jeffrey Coldren and Dr. G. Jay Kerns: modeling student retention for 1,935 students; presented at YSU STEM Day. {{NEEDS: your part in one sentence}}' },
      { what:'COMAP Mathematical Contest in Modeling', when:'2025', where:'Successful Participant, three-person team; model of wear on historical stairs, presented at the Pi Mu Epsilon conference.', url:'https://academics.ysu.edu/mathematics-and-statistics/comap-modeling-contest' }
    ],
    teaching: [
      { what:'Peer Tutor, Computer Science & Mathematics', when:'2025–26', where:'Programming, data structures, databases, discrete structures, linear algebra, statistics' },
      { what:'Honors Student Teaching Assistant', when:'2024–26', where:'Sokolov Honors College · 65+ students each year' },
      { what:'International Orientation Leader', when:'2023–26', where:'International Programs Office, YSU' }
    ],
    honors: [
      { what:'YSU Student USE Fund award and YSU Foundation travel support, IEEE VIS 2026', when:'2026' },
      { what:"President's List (2 semesters) · Dean's List (4 semesters)", when:'YSU' }
    ]
  }
};

/* Open items that don't have a visible spot on the page. Shown in the draft panel. */
SITE.pending = [
  'JTAC publication month (DOI page 10.1007/s10973-026-16179-8)',
  'Scientific Reports: does the paper list "A. Fiorito III"? (Scholar does)',
  'Full DAMOP 2024 author list from the APS page',
  'GitHub URL, and whether to link the Squid repo',
  'Headshot file: assets/headshot.jpg',
  'Figure files: assets/fig-vis.png, assets/fig-photonics.png, assets/fig-sciml.png',
  'CV: the LaTeX of the version to use as cv.pdf',
  'Confirm or drop: "thesis-based", "presented to university leadership", REU "12%", "1,200+ students", Nov 19 YSU Showcase talk',
  'Rewrite the four DRAFT research questions'
];

/* Helpers */
SITE.byId = function(list, id){ for (var i = 0; i < list.length; i++) if (list[i].id === id) return list[i]; };
SITE.esc = function(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); };
/* Escape, then turn {{NEEDS: ...}} into a visible marker. */
SITE.txt = function(s){ return SITE.esc(s).replace(/\{\{NEEDS:\s*([^}]*)\}\}/g, '<mark class="needs">Needs Erfan: $1</mark>'); };
SITE.authors = function(list){ return list.map(function(a){ return a === 'E. Nasirzadeh Orang' ? '<b class="me">'+a+'</b>' : SITE.esc(a); }).join(', '); };
SITE.link = function(label, url){ var ext = /^https?:/.test(url);
  return '<a href="'+SITE.esc(url)+'"'+(ext ? ' target="_blank" rel="noopener"' : '')+'>'+SITE.esc(label)+'</a>'; };
SITE.copy = function(text, btn, pre){
  function done(){ var t = btn.textContent; btn.textContent = 'Copied'; setTimeout(function(){ btn.textContent = t; }, 1400); }
  function select(){ if (!pre) return; var r = document.createRange(); r.selectNodeContents(pre); var s = getSelection(); s.removeAllRanges(); s.addRange(r); }
  try { navigator.clipboard.writeText(text).then(done, select); } catch (e) { select(); }
};
