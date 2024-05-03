// pour le Side bar
function toggleHidden(params) {
    let hide = document.querySelector(' #hide');
    hide.classList.toggle("hidden",);
}
// pour les pages
function toggleDownPages(params) {
 let pages = document.querySelector(' #pages');
    pages.classList.toggle("hidden");    
}
// pour les authentification
function toggleDownAuthentification(params) {
 let authentification = document.querySelector(' #authentification');
    authentification.classList.toggle("hidden");    
}
// pour les components
function toggleDownComponents(params) {
 let components = document.querySelector(' #components');
    components.classList.toggle("hidden");    
}
// pour les Menu Level
function toggleDownMenuLevel(params) {
 let menuLevel = document.querySelector(' #menuLevel');
    menuLevel.classList.toggle("hidden");    
}

    function toggleDownMenuLevel1(params) {
    let level1 = document.querySelector(' #level1');
       level1.classList.createElement("div");    
   }

   function toggleDownMenuLevel2(params) {
    let level2 = document.querySelector(' #level2');
       level2.classList.toggle("");    
   }
   function toggleDownMenuLevel3(params) {
    let navLevel = document.querySelector(' #navLevel');
       navLevel.classList.toggle("hidden");    
   }


function elementForPage(html) {
 var templatePage = document.createElement("templatePages");

    templatePage.innerHTML = html.trim();

    return templatePage.content.firstElementChild;
}

// pour le changement de plan

function togglePlan(params) {
    let plan = document.createElement("plan")
    plan.classList.toggle("hidden");
}

// pour le profile
 function toggleProfile(params) {
    let profile = document.createElement("profile")
    profile.classList.toggle("hidden");
}
//pour le menu
function toggleMenu(params) {
    let menu = document.createElement("menu")
    menu.classList.toggle("hidden");
}

// pour le changement de plan