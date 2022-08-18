'use strict'
function checkFlexGap(){
    let flex = document.createElement("div");
    flex.style.display = "flex";
    flex.style.flexDirection = "column";
    flex.style.rowGap = "1px";

    flex.appendChild(document.createElement("div"));
    flex.appendChild(document.createElement("div"));

    document.body.appendChild(flex);
    let isSupported = flex.scrollHeight === 1;

    flex.parentNode.removeChild(flex);
    console.log(isSupported);

    if(!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();



const btnNav = document.querySelector('.btn-mobile-nav');
const header = document.querySelector('.header');

btnNav.addEventListener('click', function(){
    header.classList.toggle('nav-open')
})
//smooth scrolling

const allLinks = document.querySelectorAll('a:link');
allLinks.forEach(function (link){
    link.addEventListener('click', function(e){
        e.preventDefault();
        const href = link.getAttribute('href');
        console.log(href);

        //Scroll back to top
        if(href === '#') window.scrollTo({
            top :0,
            behavior: 'smooth',
        });

        //Scroll to other links

        if(href !== '#' && href.startsWith('#')) {
            const sectionEl = document.querySelector(href);
            sectionEl.scrollIntoView({behavior: 'smooth'});
        }

        //Close mobile navigation
        if(link.classList.contains('main-nav-link')){
            header.classList.toggle('nav-open')
        }

    });
});



//smooth scrolling


//Sticky Navigation

const sectionHeroEl = document.querySelector('.section-hero')

const obs = new IntersectionObserver(function(entries){

    const ent = entries[0];

    if (!ent.isIntersecting){
        document.body.classList.add('sticky');
    }

        if (ent.isIntersecting){
            document.body.classList.remove('sticky');
        }

    },
    {
    //In the viewport
    root: null,
    threshold: 0,
    rootMargin: '-80px',
});
obs.observe(sectionHeroEl);








