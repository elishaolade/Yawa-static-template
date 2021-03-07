window.addEventListener('load', function(){

    var mHeader = document.querySelector('.m-header');
    var lHeader = document.querySelector('.l-header');
    var menuBtn = document.querySelector('.m-menu');
    var hamburger = document.querySelector('.hamburgermenu');
    var mobileNav = document.querySelector('.sliding-nav');
    var mobileClose = document.querySelector('.m-close-btn');
    var mOverlay = document.querySelector('.m-overlay');
    var detailsWrapper = document.querySelector('.details-wrapper');
    var screenContainers = document.querySelectorAll('.js-max');
    var productsContent = document.querySelector('.featured-products .section__content');
    var products = document.querySelectorAll('.product');
    var posts = document.querySelectorAll('.post');
    const windowWidth = screen.width;

    menuBtn.addEventListener('click', function(){
        // mHeader.classList.toggle('fixed');
        // this.classList.toggle('toggle');
        mobileNav.classList.toggle('toggle');
        mOverlay.classList.toggle('active');
    });
    mOverlay.addEventListener('click',function(){
        mobileNav.classList.toggle('toggle');
        mOverlay.classList.toggle('active');
    });
    mobileClose.addEventListener('click', function() {
        mobileNav.classList.toggle('toggle');
        mOverlay.classList.toggle('active');
    })

    products.forEach(product => {
        product.addEventListener('mouseover', function(){
            product.classList.toggle('zoom');
        });
        product.addEventListener('mouseout', function(){
            product.classList.toggle('zoom');
        });
    })
    
    screenContainers.forEach(container => {
        container.style.maxWidth = windowWidth + 'px';
    })
    // gsap.to('.l-header', {
    //     position: 'fixed',
    //     top: 0,
    //     width: '100%',
    //     scrollTrigger: '',
    //     start: 'bottom'
    // });
    gsap.to('.product', {
        opacity: 1, 
        stagger: .25,
        scrollTrigger: {
          trigger: '.featured-products .section__content',
          start: 'top center'
        }
    });
});

  
