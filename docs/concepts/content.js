/* Shared content for every design concept. One source of facts:
   Google Scholar (Oct 2026) for papers, abstracts and citations; the CV for the rest.
   Edit here and every concept updates. */
var SITE = {
  name: 'Erfan Nasirzadeh Orang',
  first: 'Erfan',
  email: 'enorang@student.ysu.edu',
  scholar: 'https://scholar.google.com/citations?user=zrKHVW4AAAAJ&hl=en',
  linkedin: 'https://www.linkedin.com/in/erfan-nasirzadeh-orang/',
  cv: '../cv.pdf',
  place: 'Youngstown, OH',
  role: 'M.S. student and graduate research assistant, Youngstown State University',
  now: 'Presenting at IEEE VIS 2026 · Boston · Nov 9–13',
  nowAt: 2026.81, /* "today" on the time axis: late Oct 2026 */
  headline: 'Teaching models to say how sure they are.',
  dek: "I'm Erfan, an M.S. student and graduate research assistant at Youngstown State University. I build machine learning for physical systems, from lasers and photonic structures to batteries, wind turbines and the human brain, with one recurring question: how much should we trust what the model says?",
  metrics: { citations: 4, h: 1, i10: 0, asOf: 'Oct 2026' },

  story: [
    "I came to Youngstown as an international student, and my first research home was a quantum optics lab full of lasers, vapor cells and noisy signals.",
    "That lab, Dr. Michael Crescimanno's, taught me the habit that still drives everything I do: before you believe a result, check how the measurement was made. I wrote automated checks for laser power and magnetic-field drift before trusting a model of chirp asymmetry in Zeeman EIT, and that work became my first paper.",
    "The same habit followed me into a collaboration on peacock tail feathers that turn out to lase. I built a tool to line up two very different imaging methods before drawing any conclusion about the nanostructure, and the paper ended up in Scientific Reports and in Science's news pages.",
    "From there I moved toward machine learning, first at a Williams College REU on generative models and optimal transport, then on surrogate models for batteries and wind turbines, where I used Gaussian process regression for the thing I care about most: not just a prediction, but an honest error bar around it.",
    "Now, with Dr. Zack While, I ask the same question about the brain: can a neural encoding model stand in for an expensive fMRI study of how people read charts? It matched the direction of 11 of 14 published effects. I'm also starting on the uncertainty side of an open-source finite-element vibrational solver with Dr. Andrew Cooksy at SDSU.",
    "Next, I want to do this at PhD depth: building ML for science that knows when it doesn't know."
  ],

  /* Research threads. Colors are suggestions; each concept may remap them. */
  threads: [
    { id: 'optics',    name: 'Quantum optics',              short: 'Optics',    color: '#3b82c4', blurb: 'Zeeman electromagnetically induced transparency, signal processing and stability checks in the lab.' },
    { id: 'photonics', name: 'Biological photonics',        short: 'Photonics', color: '#c2417a', blurb: 'Laser and amplified spontaneous emission from biological photonic structures such as peacock feathers.' },
    { id: 'ml',        name: 'Scientific ML & uncertainty', short: 'Sci ML',    color: '#d98a1c', blurb: 'Gaussian process regression and uncertainty-aware surrogate models for batteries, wind turbines and vibrational spectroscopy.' },
    { id: 'vis',       name: 'Visualization & neuro ML',    short: 'Vis',       color: '#2f9e6e', blurb: 'Testing whether neural encoding models like TRIBE v2 can replicate fMRI findings about how people perceive charts.' },
    { id: 'teach',     name: 'Math, teaching & service',    short: 'Teaching',  color: '#7a6fb0', blurb: 'Mathematical modeling, tutoring and honors teaching alongside the research.' }
  ],

  /* Milestones. until: when ongoing work ended (decimal year). kind: 'did' (work) or 'came' (an outcome). at: decimal year for plotting.
     label: short station name. text: full sentence (may contain links). */
  events: [
    { id:'bs',      at:2022.64, until:2026.37, when:'Aug 2022',     kind:'did',  thread:'teach',     label:'Starts B.S. in CS', text:'Started the B.S. in Computer Science with Honors at YSU.' },
    { id:'lab',     at:2022.79, until:2025.4, when:'Oct 2022',     kind:'did',  thread:'optics',    label:'Joins optics lab', text:"Joined Dr. Michael Crescimanno's quantum optics lab: laser experiments on Zeeman EIT, with modeling and signal processing in Python and MATLAB." },
    { id:'imaging', at:2023.62, until:2023.95, when:'Fall 2023',    kind:'did',  thread:'photonics', label:'Imaging lab intern', text:'Imaging Lab Technician Intern in Physics & Biology: trained and certified on AFM, SEM and TEM; optical measurements of rhodamine 6G–infused peafowl feathers with Florida Polytechnic University; nanoscale imaging of gold nanoparticles for a master\'s thesis project.' },
    { id:'reu',     at:2024.42, until:2024.62, when:'Summer 2024',  kind:'did',  thread:'ml',        label:'Williams REU', text:'REU at Williams College on generative ML for data assimilation, with mentors from Caltech, CUNY and NYU. Applied optimal transport to atmospheric data and helped build a conditional sampling algorithm for forecasting.' },
    { id:'damop',   at:2024.46, when:'Jun 2024',     kind:'came', thread:'optics',    label:'DAMOP poster', text:'Poster at the 55th APS DAMOP meeting, Fort Worth.', url:'https://meetings.aps.org/Meeting/DAMOP24/Session/S00.38' },
    { id:'reu12',   at:2024.62, when:'Aug 2024',     kind:'came', thread:'ml',        label:'12% accuracy gain', text:'A 12% improvement in predictive accuracy for our weather models.' },
    { id:'hta',     at:2024.64, until:2026.37, when:'Aug 2024',     kind:'did',  thread:'teach',     label:'Honors TA', text:'Honors Student Teaching Assistant at the Sokolov Honors College, guiding 65+ honors students each year.' },
    { id:'mcm',     at:2025.08, when:'Early 2025',   kind:'did',  thread:'teach',     label:'COMAP MCM', text:'COMAP Mathematical Contest in Modeling: a three-person team model of wear on historical stairs.' },
    { id:'josab',   at:2025.12, when:'Feb 2025',     kind:'came', thread:'optics',    label:'JOSA B paper', text:'JOSA B paper on chirp asymmetry in Zeeman EIT, my first publication.', url:'https://doi.org/10.1364/JOSAB.544782', pub:'josab' },
    { id:'mcmres',  at:2025.16, when:'2025',         kind:'came', thread:'teach',     label:'MCM Successful Participant', text:'COMAP MCM Successful Participant.', url:'https://academics.ysu.edu/mathematics-and-statistics/comap-modeling-contest' },
    { id:'pme',     at:2025.2,  when:'Mar 2025',     kind:'came', thread:'teach',     label:'Pi Mu Epsilon talk', text:'Talk on the stair-wear model at the Pi Mu Epsilon conference, YSU.', url:'https://www.ysumathstat.org/pme/conferences/PME2025tidyProgramFinal_v1-1%20no%20comap.pdf' },
    { id:'scirep',  at:2025.45, when:'2025',         kind:'came', thread:'photonics', label:'Scientific Reports', text:'Scientific Reports paper on laser emission from peafowl tail feathers, cited 4 times.', url:'https://doi.org/10.1038/s41598-025-04039-8', pub:'scirep' },
    { id:'press',   at:2025.56, when:'Jul–Aug 2025', kind:'came', thread:'photonics', label:'In Science', text:'Covered by Science, The Business Journal and Florida Poly News.', url:'https://www.science.org/content/article/peacock-feathers-can-be-lasers' },
    { id:'tutor',   at:2025.64, until:2026.37, when:'Aug 2025',     kind:'did',  thread:'teach',     label:'Peer tutor', text:'Peer tutor in computer science and mathematics.' },
    { id:'choo',    at:2025.66, until:2026.6, when:'2025–26',      kind:'did',  thread:'ml',        label:'ML surrogates', text:"With Dr. Kyosung Choo's group: trained XGBoost, random forest and GPR surrogates on CFD and thermal-system data for battery cooling and a Darrieus wind turbine, with SHAP and nested cross-validation." },
    { id:'nchc',    at:2025.7,  when:'Sep 2025',     kind:'came', thread:'optics',    label:'NCHC poster', text:'Poster at the 59th NCHC annual conference, San Diego.', url:'https://whova.com/embedded/session/ljaLfAB8LfI24MKXCkafQuyu4pv52OeNgt0nutcUXIw%3D/4820076/' },
    { id:'egls',    at:2025.78, when:'Oct 2025',     kind:'came', thread:'photonics', label:'APS EGLS talk', text:'Talk at the APS Eastern Great Lakes Section and MIAAPT joint meeting, Ypsilanti.', url:'https://meetings.aps.org/Meeting/EGLSF25/Session/F02.3' },
    { id:'datamine',at:2026.05, until:2026.37, when:'Spring 2026',  kind:'did',  thread:'ml',        label:'YSU Data Mine', text:'YSU Data Mine (Purdue partnership) with Dr. Jeffrey Coldren and Dr. G. Jay Kerns: retention modeling for 1,935 students.' },
    { id:'dmres',   at:2026.3,  when:'Spring 2026',  kind:'came', thread:'ml',        label:'STEM Day results', text:'Data Mine findings presented at YSU STEM Day and to university leadership.' },
    { id:'gra',     at:2026.35, until:2026.9, when:'May 2026',     kind:'did',  thread:'vis',       label:'Joins While lab', text:"Graduate research assistant with Dr. Zack While: tested whether Meta's TRIBE v2 neural encoding model can replicate a published fMRI study of how people read charts, in PyTorch on an HPC cluster." },
    { id:'grad',    at:2026.37, when:'May 2026',     kind:'came', thread:'teach',     label:'B.S. with Honors', text:'B.S. in Computer Science with Honors, Honors Scholar with Distinction.' },
    { id:'jtac',    at:2026.45, when:'2026',         kind:'came', thread:'ml',        label:'JTAC paper', text:'JTAC paper on ML surrogates for battery thermal management.', url:'https://doi.org/10.1007/s10973-026-16179-8', pub:'jtac' },
    { id:'11of14',  at:2026.52, when:'Summer 2026',  kind:'came', thread:'vis',       label:'11 of 14 effects', text:'The model matched the direction of 11 of 14 reported cortical effects.' },
    { id:'ms',      at:2026.64, until:2026.9, when:'Aug 2026',     kind:'did',  thread:'teach',     label:'Starts M.S.', text:'Started the thesis-based M.S. in Computing & Information Systems, fully funded.' },
    { id:'wind',    at:2026.6,  when:'Aug 2026',     kind:'came', thread:'ml',        label:'Wind paper submitted', text:'Wind turbine surrogate paper submitted to Part A: Journal of Power and Energy (under review).', pub:'wind' },
    { id:'eiid',    at:2026.66, until:2026.9, when:'Fall 2026',    kind:'did',  thread:'vis',       label:'EIID coding', text:'Qualitative coding on embedded interactive information displays, with a PhD student (in preparation).' },
    { id:'vispaper',at:2026.7,  when:'Sep 2026',     kind:'came', thread:'vis',       label:'VIS paper accepted', text:'First-author paper accepted at VISxVISION, IEEE VIS 2026, and posted on arXiv.', url:'https://arxiv.org/abs/2609.15685', pub:'vis' },
    { id:'femvib',  at:2026.74, until:2026.9, when:'Fall 2026',    kind:'did',  thread:'ml',        label:'FEMvib (starting)', text:'Starting on uncertainty in Kriging-interpolated potential energy surfaces for FEMvib, with Dr. Andrew Cooksy (SDSU).' },
    { id:'spie',    at:2026.78, when:'Oct 2026',     kind:'came', thread:'photonics', label:'SPIE paper', text:'Follow-up paper in Proc. SPIE 14207, Light in Nature 2026.', url:'https://doi.org/10.1117/12.3112389', pub:'spie' },
    { id:'visboston',at:2026.86,when:'Nov 9–13',     kind:'came', thread:'vis',       label:'IEEE VIS, Boston', text:'Workshop talk and invited poster at IEEE VIS 2026, Boston. Supported by the YSU Foundation and a Student USE Fund award.', soon:true },
    { id:'showcase',at:2026.88, when:'Nov 19',       kind:'came', thread:'vis',       label:'YSU Showcase talk', text:'Talk at the YSU Graduate Research & Creative Showcase.', soon:true }
  ],

  /* Year-by-year periods (used by the narrative concepts). Event ids grouped. */
  periods: [
    { label:'2022–23',     sub:'B.S. year one · quantum optics lab',      start:2022.6,  end:2023.5,  did:['bs','lab'],              came:['damop','josab','nchc'] },
    { label:'2023–24',     sub:'B.S. year two · imaging lab',             start:2023.5,  end:2024.4,  did:['imaging'],               came:['scirep','press','egls','spie'] },
    { label:'Summer 2024', sub:'REU · Williams College',                   start:2024.4,  end:2024.62, did:['reu'],                   came:['reu12'] },
    { label:'2024–25',     sub:'B.S. year three · modeling & teaching',   start:2024.62, end:2025.4,  did:['hta','mcm'],             came:['mcmres','pme'] },
    { label:'2025–26',     sub:'B.S. year four · ML surrogates & data',   start:2025.6,  end:2026.35, did:['choo','datamine','tutor'], came:['jtac','wind','dmres','grad'] },
    { label:'Summer 2026', sub:'Graduate research · neural encoding',     start:2026.35, end:2026.62, did:['gra'],                   came:['11of14','vispaper'] },
    { label:'Fall 2026',   sub:'M.S. year one · now',                     start:2026.62, end:2026.9,  did:['ms','eiid','femvib'],    came:['visboston','showcase'] }
  ],

  pubs: [
    { id:'vis', year:2026, thread:'vis', first:true,
      title:'Can a Neural Encoding Model Replicate an fMRI Visualization Study?',
      authors:['E. Nasirzadeh Orang','Z. While'],
      venue:'IEEE VIS 2026 · VISxVISION Workshop', detail:'arXiv:2609.15685',
      note:'TRIBE v2 matched the direction of 11 of 14 reported cortical effects, concentrated in visual regions.',
      links:[['arXiv','https://arxiv.org/abs/2609.15685'],['VIS program','https://ieeevis.org/year/2026/program/paper/3b9c6999-3420-49c7-a24f-92a1edc21f2a/'],['Supplemental','https://osf.io/8a96x/']],
      bib:'@misc{orang2026neural,\n  title  = {Can a Neural Encoding Model Replicate an fMRI Visualization Study?},\n  author = {Nasirzadeh Orang, Erfan and While, Zack},\n  year   = {2026},\n  eprint = {2609.15685},\n  archivePrefix = {arXiv},\n  note   = {VISxVISION Workshop, IEEE VIS 2026}\n}' },
    { id:'spie', year:2026, thread:'photonics',
      title:'Optical feedback from biological photonic structures supporting ASE and laser emission',
      authors:['N. J. Dawson','H. Liu','A. Fiorito','D. R. Sheffield','B. Bish','E. Nasirzadeh Orang','R. Robinson','M. Giron','M. Crescimanno'],
      venue:'Proc. SPIE 14207 · Light in Nature 2026', detail:'142070A',
      links:[['DOI','https://doi.org/10.1117/12.3112389']],
      bib:'@inproceedings{dawson2026optical,\n  title     = {Optical feedback from biological photonic structures supporting ASE and laser emission},\n  author    = {Dawson, N. J. and Liu, H. and Fiorito, A. and Sheffield, D. R. and Bish, B. and Nasirzadeh Orang, E. and Robinson, R. and Giron, M. and Crescimanno, M.},\n  booktitle = {Light in Nature 2026},\n  series    = {Proc. SPIE},\n  volume    = {14207},\n  pages     = {142070A},\n  year      = {2026},\n  doi       = {10.1117/12.3112389}\n}' },
    { id:'jtac', year:2026, thread:'ml',
      title:'Machine learning surrogates for Al₂O₃–TiO₂/water hybrid nanofluid battery thermal management under variable heat generation',
      authors:['A. Ulus','I. Uluocak','E. Nasirzadeh Orang','N. Vakili','K. Choo'],
      venue:'Journal of Thermal Analysis and Calorimetry', detail:'2026, 1–19',
      note:'Four-model benchmark; Gaussian process regression for uncertainty, SHAP for attribution.',
      links:[['DOI','https://doi.org/10.1007/s10973-026-16179-8']],
      bib:'@article{ulus2026machine,\n  title   = {Machine learning surrogates for {Al2O3--TiO2}/water hybrid nanofluid battery thermal management under variable heat generation},\n  author  = {Ulus, A. and Uluocak, I. and Nasirzadeh Orang, E. and Vakili, N. and Choo, K.},\n  journal = {Journal of Thermal Analysis and Calorimetry},\n  pages   = {1--19},\n  year    = {2026},\n  doi     = {10.1007/s10973-026-16179-8}\n}' },
    { id:'wind', year:2026, thread:'ml', review:true,
      title:'Operating-regime dependence of turbulence effects on an H-type Darrieus vertical-axis wind turbine using uncertainty-aware surrogate modeling',
      authors:['A. Ulus','I. Uluocak','E. Nasirzadeh Orang','N. Vakili','K. Choo'],
      venue:'Part A: Journal of Power and Energy', detail:'under review',
      links:[['Request a copy','mailto:enorang@student.ysu.edu']] },
    { id:'scirep', year:2025, thread:'photonics', cites:4,
      title:'Spectral fingerprint of laser emission from rhodamine 6G–infused male Indian peafowl tail feathers',
      authors:['A. Fiorito','D. R. Sheffield','H. Liu','E. Nasirzadeh Orang','N. J. Dawson'],
      venue:'Scientific Reports', detail:'15, 20938 (2025)',
      links:[['DOI','https://doi.org/10.1038/s41598-025-04039-8'],['In Science','https://www.science.org/content/article/peacock-feathers-can-be-lasers']],
      bib:'@article{fiorito2025spectral,\n  title   = {Spectral fingerprint of laser emission from rhodamine 6G infused male Indian peafowl tail feathers},\n  author  = {Fiorito, A. and Sheffield, D. R. and Liu, H. and Nasirzadeh Orang, E. and Dawson, N. J.},\n  journal = {Scientific Reports},\n  volume  = {15},\n  number  = {1},\n  pages   = {20938},\n  year    = {2025},\n  doi     = {10.1038/s41598-025-04039-8}\n}' },
    { id:'josab', year:2025, thread:'optics',
      title:'Chirp asymmetry in Zeeman electromagnetically induced transparency',
      authors:['J. Gorkos','K. Grenzig','E. Nasirzadeh Orang','V. Thomas','D. Tighe','M. Crescimanno'],
      venue:'Journal of the Optical Society of America B', detail:'42(2), 404–411 (2025)',
      links:[['DOI','https://doi.org/10.1364/JOSAB.544782']],
      bib:'@article{gorkos2025chirp,\n  title   = {Chirp asymmetry in Zeeman electromagnetically induced transparency},\n  author  = {Gorkos, J. and Grenzig, K. and Nasirzadeh Orang, E. and Thomas, V. and Tighe, D. and Crescimanno, M.},\n  journal = {Journal of the Optical Society of America B},\n  volume  = {42},\n  number  = {2},\n  pages   = {404--411},\n  year    = {2025},\n  doi     = {10.1364/JOSAB.544782}\n}' }
  ],

  talks: [
    { when:'Nov 2026', kind:'Talk + poster', soon:true, title:'Can a Neural Encoding Model Replicate an fMRI Visualization Study?', where:'VISxVISION Workshop and main conference poster, IEEE VIS 2026, Boston, MA' },
    { when:'Oct 2025', kind:'Oral', title:'Spectral fingerprint of laser emission from rhodamine 6G infused male Indian peafowl tail feathers', authors:['E. Nasirzadeh Orang','N. J. Dawson','A. Fiorito','H. Liu','R. Scheffield'], where:'Fall 2025 Joint Meeting of the APS Eastern Great Lakes Section and MIAAPT, Ypsilanti, MI · Bulletin of the American Physical Society', url:'https://meetings.aps.org/Meeting/EGLSF25/Session/F02.3' },
    { when:'Sep 2025', kind:'Poster', title:'Chirp asymmetry in Zeeman electromagnetically induced transparency', where:'59th Annual Conference of the National Collegiate Honors Council, San Diego, CA', url:'https://whova.com/embedded/session/ljaLfAB8LfI24MKXCkafQuyu4pv52OeNgt0nutcUXIw%3D/4820076/' },
    { when:'Mar 2025', kind:'Oral', title:'A mathematical model of foot traffic-induced wear on historical staircases', where:'Pi Mu Epsilon Annual Conference, Youngstown State University', url:'https://www.ysumathstat.org/pme/conferences/PME2025tidyProgramFinal_v1-1%20no%20comap.pdf' },
    { when:'Jun 2024', kind:'Poster', title:'Chirp asymmetry in Zeeman electromagnetically induced transparency', authors:['M. Crescimanno','J. Gorkos','K. Grenzig','V. Thomas','E. Nasirzadeh Orang','et al.'], where:'55th APS DAMOP Meeting, Fort Worth, TX, Session S00.38', url:'https://meetings.aps.org/Meeting/DAMOP24/Session/S00.38' }
  ],

  press: [
    { outlet:'Science (AAAS)', when:'Jul 2025', title:'Peacock feathers can be lasers', url:'https://www.science.org/content/article/peacock-feathers-can-be-lasers' },
    { outlet:'The Business Journal', when:'Aug 2025', title:'Study Detects Lasers in Peacock Tail Feathers', url:'https://businessjournaldaily.com/study-detects-lasers-in-peacock-tail-feathers/' },
    { outlet:'Florida Polytechnic University', when:'Aug 2025', title:'Florida Poly student research uncovers laser light from peacock feathers', url:'https://floridapoly.edu/news/082725-florida-poly-student-research-uncovers-laser-light-from-peacock-feathers/' }
  ],

  education: [
    { what:'M.S., Computing & Information Systems', when:'2026–', where:'Youngstown State University · thesis-based, fully funded GRA with Dr. Zack While' },
    { what:'B.S., Computer Science with Honors', when:'2022–26', where:'Youngstown State University · minors in Mathematics & Data Analytics · Honors Scholar with Distinction' },
    { what:'Research Experience for Undergraduates', when:'2024', where:'Williams College · generative ML & optimal transport' }
  ],
  honors: [
    { what:"President's List (2 semesters) · Dean's List (4 semesters)", when:'YSU' },
    { what:'COMAP MCM, Successful Participant', when:'2025' },
    { what:'Peer Tutor, CS & Mathematics', when:'2025–26' },
    { what:'Honors Student Teaching Assistant, 65+ students each year', when:'2024–26' },
    { what:'International Orientation Leader, 1,200+ incoming students', when:'2023–26' }
  ],
  seeking: "I'm looking for PhD opportunities in scientific machine learning, uncertainty quantification, computational imaging and visualization. If you'll be at IEEE VIS in Boston, I'd love to say hi."
};

/* Small helpers shared by the concepts. */
SITE.thread = function(id){ for(var i=0;i<SITE.threads.length;i++) if(SITE.threads[i].id===id) return SITE.threads[i]; };
SITE.event = function(id){ for(var i=0;i<SITE.events.length;i++) if(SITE.events[i].id===id) return SITE.events[i]; };
SITE.pub = function(id){ for(var i=0;i<SITE.pubs.length;i++) if(SITE.pubs[i].id===id) return SITE.pubs[i]; };
SITE.esc = function(s){ return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;'); };
SITE.authors = function(list, tag){ tag = tag || 'b';
  return list.map(function(a){ return a==='E. Nasirzadeh Orang' ? '<'+tag+' class="me">'+a+'</'+tag+'>' : SITE.esc(a); }).join(', '); };
SITE.link = function(label, url){ var ext = /^https?:/.test(url);
  return '<a href="'+SITE.esc(url)+'"'+(ext?' target="_blank" rel="noopener"':'')+'>'+SITE.esc(label)+'</a>'; };
/* Copy text from inside a click handler, falling back to selecting it. */
SITE.copy = function(text, btn, pre){
  function done(){ var t=btn.textContent; btn.textContent='Copied'; setTimeout(function(){btn.textContent=t;},1400); }
  function select(){ if(!pre) return; var r=document.createRange(); r.selectNodeContents(pre); var s=getSelection(); s.removeAllRanges(); s.addRange(r); }
  try { navigator.clipboard.writeText(text).then(done, select); } catch(e){ select(); }
};
