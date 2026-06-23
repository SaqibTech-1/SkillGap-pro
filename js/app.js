  /* =======================================================
    SkillGap Pro — Shared Logic
    ======================================================= */

  /* ---------- ROLES DATA ---------- */
  const ROLES = {
    "Frontend Developer":  ["HTML","CSS","JavaScript","Bootstrap","Git","Responsive Design","React","Tailwind","TypeScript","Figma"],
    "Backend Developer":   ["Node.js","Express","SQL","MongoDB","REST API","Git","Authentication","Docker","Linux","Python"],
    "Full Stack Developer":["HTML","CSS","JavaScript","React","Node.js","Express","MongoDB","Git","REST API","Deployment"],
    "Data Analyst":        ["Excel","SQL","Python","Statistics","Tableau","Pandas","Power BI","Data Cleaning","Visualization","R"],
    "UI/UX Designer":      ["Figma","Wireframing","Prototyping","User Research","Adobe XD","Typography","Color Theory","Design Systems","Accessibility","Sketch"],
    "Graphic Designer":    ["Photoshop","Illustrator","Typography","Color Theory","Branding","Layout","InDesign","CorelDraw","Sketching","Creativity"],
    "Digital Marketer":    ["SEO","Google Ads","Facebook Ads","Content Marketing","Analytics","Email Marketing","Social Media","Copywriting","Canva","Strategy"],
    "Cybersecurity Analyst":["Networking","Linux","Python","Cryptography","Penetration Testing","SIEM","Firewalls","Risk Assessment","OWASP","Ethical Hacking"]
  };

  const RECOMMENDATIONS = {
    "Frontend Developer": ["Build 3 real-world React projects","Master Git & GitHub workflows","Learn responsive design with Tailwind","Practice DSA in JavaScript"],
    "Backend Developer": ["Build a complete REST API with auth","Learn database design fundamentals","Deploy a service using Docker","Practice system design basics"],
    "Full Stack Developer": ["Ship a MERN stack project","Learn deployment on Vercel/Render","Add testing to your projects","Understand CI/CD basics"],
    "Data Analyst": ["Learn Tableau or Power BI deeply","Build a portfolio dashboard","Practice SQL on real datasets","Improve storytelling with data"],
    "UI/UX Designer": ["Redesign 3 popular apps","Build a Figma design system","Conduct user interviews","Learn micro-interactions"],
    "Graphic Designer": ["Create a personal brand kit","Practice daily logo challenges","Build a behance portfolio","Study typography pairing"],
    "Digital Marketer": ["Run real ad campaigns","Earn Google Ads certification","Write 10 SEO-optimized articles","Track conversions with analytics"],
    "Cybersecurity Analyst": ["Practice on TryHackMe & HackTheBox","Earn CompTIA Security+ basics","Set up a home lab","Learn one SIEM tool deeply"]
  };

  /* ---------- LS HELPERS ---------- */
  const LS = {
    get:(k,def=null)=>{ try{ return JSON.parse(localStorage.getItem(k)) ?? def; }catch{ return def; } },
    set:(k,v)=>localStorage.setItem(k,JSON.stringify(v)),
    del:(k)=>localStorage.removeItem(k)
  };

  /* ---------- AUTH ---------- */
  function getUsers(){ return LS.get('sgp_users', []); }
  function saveUsers(u){ LS.set('sgp_users', u); }
  function currentUser(){ return LS.get('sgp_session', null); }

  function openAuth(mode='login'){
    switchAuth(mode);
    new bootstrap.Modal(document.getElementById('authModal')).show();
  }
  function switchAuth(mode){
    $('#tabLogin,#tabSignup').removeClass('active');
    $('#loginForm,#signupForm').addClass('d-none').removeClass('d-block');
    if(mode==='login'){ $('#tabLogin').addClass('active'); $('#loginForm').removeClass('d-none').addClass('d-block'); }
    else { $('#tabSignup').addClass('active'); $('#signupForm').removeClass('d-none').addClass('d-block'); }
  }

  function doSignup(){
    const name = $('#suName').val().trim();
    const email = $('#suEmail').val().trim().toLowerCase();
    const pass = $('#suPass').val();
    const pass2 = $('#suPass2').val();
    const role = $('#suRole').val();

    if(!name||!email||!pass||!pass2||!role) return showToast('Please fill all fields','error');
    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showToast('Invalid email format','error');
    if(pass.length<6) return showToast('Password must be at least 6 characters','error');
    if(pass!==pass2) return showToast('Passwords do not match','error');

    const users = getUsers();
    if(users.find(u=>u.email===email)) return showToast('Email already registered','error');
    users.push({ name, email, pass, role, createdAt: Date.now() });
    saveUsers(users);
    LS.set('sgp_session', { name, email, role });
    showToast('Welcome to SkillGap Pro, '+name+'!','success');
    bootstrap.Modal.getInstance(document.getElementById('authModal')).hide();
    refreshAuthUI();
    setTimeout(()=> location.href = 'analyze.html', 500);
  }

  function doLogin(){
    const email = $('#loginEmail').val().trim().toLowerCase();
    const pass = $('#loginPass').val();
    if(!email||!pass) return showToast('Please enter email and password','error');
    const user = getUsers().find(u=>u.email===email && u.pass===pass);
    if(!user) return showToast('Invalid email or password','error');
    LS.set('sgp_session', { name:user.name, email:user.email, role:user.role });
    showToast('Welcome back, '+user.name+'!','success');
    bootstrap.Modal.getInstance(document.getElementById('authModal')).hide();
    refreshAuthUI();
    setTimeout(()=> location.href = 'analyze.html', 500);
  }

  function logout(){
    LS.del('sgp_session');
    showToast('Logged out','warning');
    setTimeout(()=> location.href = 'index.html', 400);
  }

  function refreshAuthUI(){
    const u = currentUser();
    if(u){
      $('#authButtons').addClass('d-none').removeClass('d-flex');
      $('#userButtons').removeClass('d-none').addClass('d-flex');
      $('#userName').text(u.name.split(' ')[0]);
      if($('#aName').length) $('#aName').val(u.name);
    } else {
      $('#authButtons').removeClass('d-none').addClass('d-flex');
      $('#userButtons').addClass('d-none').removeClass('d-flex');
    }
  }

  /* ---------- TOAST ---------- */
  function showToast(msg, type='info'){
    const icons = { success:'check-circle-fill', error:'x-circle-fill', warning:'exclamation-triangle-fill', info:'info-circle-fill' };
    const colors = { success:'#2bd4a8', error:'#ff5c8a', warning:'#ffb547', info:'#5b3df5' };
    const $t = $(`<div class="toast-msg ${type}"><i class="bi bi-${icons[type]}" style="color:${colors[type]};font-size:1.2rem;"></i><span>${escapeHtml(msg)}</span></div>`);
    $('#toastWrap').append($t);
    setTimeout(()=>{ $t.fadeOut(300, ()=>$t.remove()); }, 3200);
  }

  /* ---------- THEME ---------- */
  function applyTheme(t){
    document.documentElement.setAttribute('data-bs-theme', t);
    LS.set('sgp_theme', t);
    $('#themeToggle i').attr('class', t==='dark' ? 'bi bi-sun' : 'bi bi-moon-stars');
  }

  /* ---------- COUNTERS ---------- */
  function runCounters(){
    $('.counter').each(function(){
      const $el = $(this);
      if($el.data('done')) return;
      if(!isInView(this)) return;
      $el.data('done', true);
      const target = +$el.data('target');
      const dur = 1500, start = performance.now();
      function step(now){
        const p = Math.min(1, (now - start)/dur);
        $el.text(Math.floor(p*target).toLocaleString());
        if(p<1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }
  function isInView(el){
    const r = el.getBoundingClientRect();
    return r.top < window.innerHeight - 50 && r.bottom > 0;
  }

  /* ---------- UTILITIES ---------- */
  function escapeHtml(s){ return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c])); }

  /* ---------- PAGE SPECIFIC BINDINGS (on DOM ready) ---------- */
  $(document).ready(function(){
    // hide loader
    setTimeout(()=>document.getElementById('loader')?.classList.add('hide'), 700);

    // AOS
    if(typeof AOS!=='undefined') AOS.init({ duration:800, once:true, offset:60 });

    // year
    $('#year').text(new Date().getFullYear());

    // theme
    applyTheme(LS.get('sgp_theme', 'light'));
    $('#themeToggle').on('click', ()=>{
      const cur = document.documentElement.getAttribute('data-bs-theme');
      applyTheme(cur==='dark'?'light':'dark');
    });

    // auth forms
    $('#signupForm').off('submit').on('submit', function(e){ e.preventDefault(); doSignup(); });
    $('#loginForm').off('submit').on('submit', function(e){ e.preventDefault(); doLogin(); });

    // nav scroll + backtop + active
    $(window).on('scroll', function(){
      const sc = $(this).scrollTop();
      $('#mainNav').toggleClass('scrolled', sc > 30);
      $('#backTop').toggleClass('show', sc > 400);
      // active section for current page
      $('section[id]').each(function(){
        const top = $(this).offset()?.top - 120 || 0;
        const bot = top + $(this).outerHeight();
        if(sc >= top && sc < bot){
          const id = $(this).attr('id');
          $('.nav-link').removeClass('active');
          $(`.nav-link[href="#${id}"]`).addClass('active');
        }
      });
    });
    $('#backTop').on('click', ()=> window.scrollTo({top:0,behavior:'smooth'}));

    // close mobile menu
    $('.nav-link').on('click', function(){
      const target = $(this).attr('href');
      if(target && target.startsWith('#')){
        const $c = $('#navMenu');
        if($c.hasClass('show')){
          const el = document.getElementById('navMenu');
          const bs = bootstrap.Collapse.getInstance(el);
          if(bs) bs.hide();
        }
      }
    });

    // Active link highlighting based on current page
    function setActiveNavLink(){
      const currentPath = window.location.pathname;
      const currentPage = currentPath.substring(currentPath.lastIndexOf('/') + 1) || 'index.html';
      
      // Remove active class from all nav links
      $('.nav-link').removeClass('active');
      
      // Find and activate the matching link
      $('.nav-link').each(function(){
        const href = $(this).attr('href');
        if(href){
          // Handle both relative paths and filenames
          const hrefPage = href.substring(href.lastIndexOf('/') + 1);
          if(hrefPage === currentPage || (currentPage === '' && hrefPage === 'index.html')){
            $(this).addClass('active');
          }
        }
      });
    }
    setActiveNavLink();

    // counters
    $(window).on('scroll resize', runCounters);
    runCounters();

    // auth state
    refreshAuthUI();
  });
