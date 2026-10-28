/* Shared building blocks for the compact versions. Reads only SITE (content.js);
   everything shown is either stored there or counted from it. */
var K = (function(S){
  var E = S.esc, T = S.txt;
  /* short venue names for tight spaces (abbreviations only, no new facts) */
  var SHORT = { vis:'IEEE VIS 2026 workshop', spie:'Proc. SPIE', jtac:'J. Thermal Anal. Calorim.', wind:'Part A: J. Power & Energy', scirep:'Scientific Reports', josab:'JOSA B' };

  function needs(t){ return /\{\{NEEDS/.test(t); }
  function proj(id){ return S.byId(S.projects, id); }
  function pub(id){ return S.byId(S.pubs, id); }
  function areaProjects(){ return S.areas.map(function(a){ return proj(a.id); }); }

  /* what each project says, at different lengths */
  function part(p){ return p.did[0]; }
  /* the finding itself, even when it's still a gap: never swap in press or talks */
  function result(p){ return p.found[0]; }
  function nextOf(p){ return p.next[0]; }
  function questionFor(area){ return S.questions.filter(function(q){ return q.area===area; }); }

  var firsts = S.pubs.filter(function(p){ return /first/i.test(p.role); });
  var contrib = S.pubs.filter(function(p){ return !/first/i.test(p.role); });

  /* counted facts for "at a glance" lists */
  function glance(){
    var f = firsts[0];
    var pubVenues = contrib.filter(function(p){ return !p.review; }).map(function(p){ return SHORT[p.id]; });
    var review = contrib.filter(function(p){ return p.review; }).length;
    return [
      '<b>First-author paper</b> at '+E(f.venue)+': '+link(f, '<i>'+E(f.title)+'</i>'),
      '<b>Contributing author</b> on '+contrib.length+' more: '+E(pubVenues.join(', '))+(review?', and '+review+' under review':''),
      'A paper I contributed to was <b>covered by Science</b> ('+E(S.press[0].when)+')',
      '<b>Methods:</b> '+E(S.methods.rows.map(function(r){ return r[0].replace(/\s*\(.*\)/,''); }).join(' · '))
    ];
  }
  function link(p, inner){ var u = p.links && p.links[0] ? p.links[0][1] : '#'; return '<a href="'+E(u)+'"'+(/^https?:/.test(u)?' target="_blank" rel="noopener"':'')+'>'+inner+'</a>'; }

  function head(o){
    o = o || {};
    var ini = S.name.split(' ').map(function(w){ return w[0]; }).join('').slice(0,2);
    var b = '<a class="btn primary" href="'+E(S.cv)+'" target="_blank" rel="noopener">CV (PDF)</a>'+
      '<a class="btn" href="mailto:'+E(S.email)+'">Email</a>'+
      '<a class="btn" href="'+E(S.scholar)+'" target="_blank" rel="noopener">Scholar</a>'+
      (o.noLinkedIn?'':'<a class="btn" href="'+E(S.linkedin)+'" target="_blank" rel="noopener">LinkedIn</a>')+
      (S.github?'<a class="btn" href="'+E(S.github)+'" target="_blank" rel="noopener">GitHub</a>':'');
    return '<div class="id"><div class="avatar" data-avatar>'+E(ini)+'</div><div><h1>'+E(S.name)+'</h1><p class="pos">'+T(S.position)+'</p></div></div>'+
      '<div class="seek" id="seeking"><i></i>'+T(S.seeking)+'</div>'+
      (o.noBtns?'':'<div class="btns">'+b+'</div>');
  }
  function notice(){ return (S.notice && new Date() < new Date(S.notice.until)) ? '<p class="notice"><b>Next:</b> '+T(S.notice.text)+'</p>' : ''; }

  function pubItem(p, o){
    o = o || {};
    var i = S.pubs.indexOf(p), first = /first/i.test(p.role);
    var acts = (p.links||[]).map(function(l){ return S.link(l[0],l[1]).replace('<a ','<a class="chip" '); }).join('')+
      (p.bib?'<button class="chip" type="button" data-cite="'+i+'">Cite</button>':'')+
      (o.part?'<a class="chip" href="'+o.part+'">My part</a>':'');
    return '<div class="pubi"><div class="t">'+link(p, E(p.title))+' <span class="role'+(first?' first':'')+'">'+E(p.role)+'</span></div>'+
      '<div class="m">'+(o.noAuthors?'':S.authors(p.authors)+' · ')+'<i>'+E(p.venue)+'</i>, '+E(p.detail)+'</div>'+
      (o.noActs?'':'<div class="acts">'+acts+'</div>')+
      (p.bib?'<pre class="bib" hidden id="cite-'+i+'">'+E(p.bib)+'</pre>':'')+'</div>';
  }
  function recent(n){
    return S.events.filter(function(e){ return e.kind==='came' || e.soon; }).sort(function(a,b){ return b.at-a.at; }).slice(0,n);
  }

  /* wiring shared by all versions */
  function wire(){
    document.querySelectorAll('[data-avatar]').forEach(function(av){
      var img = new Image(); img.alt = S.name;
      img.onload = function(){ av.textContent=''; av.appendChild(img); }; img.src = S.headshot;
    });
    document.addEventListener('click', function(e){
      var b = e.target.closest('[data-cite]'); if(!b) return;
      var pre = document.getElementById('cite-'+b.dataset.cite); if(!pre) return;
      if (pre.hidden){ pre.hidden=false; b.textContent='Copy BibTeX'; }
      else S.copy(S.pubs[+b.dataset.cite].bib, b, pre);
    });
    var marks = document.querySelectorAll('mark.needs'), n = marks.length + (S.pending||[]).length, k = 0;
    if (n){ var d = document.createElement('button'); d.type='button'; d.className='draft';
      d.innerHTML = 'Draft · <b>'+marks.length+'</b> on page · '+S.pending.length+' in content.js';
      d.title = 'Jump to the next spot that needs Erfan';
      d.onclick = function(){ var m=document.querySelectorAll('mark.needs'); if(!m.length) return; var el=m[k++%m.length]; var det=el.closest('details'); if(det) det.open=true; el.scrollIntoView({block:'center'}); };
      document.body.appendChild(d); }
  }

  return { E:E, T:T, SHORT:SHORT, needs:needs, proj:proj, pub:pub, areaProjects:areaProjects, part:part, result:result, nextOf:nextOf,
    questionFor:questionFor, firsts:firsts, contrib:contrib, glance:glance, head:head, notice:notice, pubItem:pubItem, recent:recent, wire:wire, link:link };
})(SITE);
