/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

// console.log("Number of sections = " + counter); 

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

// Adding new Section
let newSection = '<section id="section4" data-nav="Section 4"><div class="landing__container"><h2>Section 4</h2><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.</p><p>Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.</p></div></section>';
let main = document.querySelector("main");
main.insertAdjacentHTML("beforeend", newSection);

// Adding the Anchors to the Navbar 
let navList = document.getElementById("navbar__list"); 
let anchorsToAdd = '<li><a href="#section1" class="menu__link">section 1</a></li><li><a href="#section2" class="menu__link">section 2</a></li><li><a href="#section3" class="menu__link">section 3</a></li><li><a href="#section4" class="menu__link">section 4</a></li>';
navList.insertAdjacentHTML("afterbegin", anchorsToAdd);

// Styling the active states when Scrolling
document.addEventListener("scroll", function location(){
    var scrollPos = window.scrollY;
    console.log(scrollPos);
    if(scrollPos >=200 && scrollPos <800 )
        {
            document.getElementById("section1").classList.add("your-active-class");
            document.getElementById("section2").classList.remove("your-active-class");
            document.getElementById("section3").classList.remove("your-active-class");
            document.getElementById("section4").classList.remove("your-active-class");
            document.querySelector("#navbar__list li:nth-child(1) .menu__link").classList.add("active");
            document.querySelector("#navbar__list li:nth-child(2) .menu__link").classList.remove("active");
            document.querySelector("#navbar__list li:nth-child(3) .menu__link").classList.remove("active");
            document.querySelector("#navbar__list li:nth-child(4) .menu__link").classList.remove("active");
        }
        else if(scrollPos >=800 && scrollPos <1500)
        {
            document.getElementById("section2").classList.add("your-active-class");
            document.getElementById("section1").classList.remove("your-active-class");
            document.getElementById("section3").classList.remove("your-active-class");
            document.getElementById("section4").classList.remove("your-active-class");
            document.querySelector("#navbar__list li:nth-child(2) .menu__link").classList.add("active");
            document.querySelector("#navbar__list li:nth-child(1) .menu__link").classList.remove("active");
            document.querySelector("#navbar__list li:nth-child(3) .menu__link").classList.remove("active");
            document.querySelector("#navbar__list li:nth-child(4) .menu__link").classList.remove("active");
        }
        else if(scrollPos >=1500 && scrollPos <2100)
        {
            document.getElementById("section3").classList.add("your-active-class");
            document.getElementById("section1").classList.remove("your-active-class");
            document.getElementById("section2").classList.remove("your-active-class");
            document.getElementById("section4").classList.remove("your-active-class");
            document.querySelector("#navbar__list li:nth-child(3) .menu__link").classList.add("active");
            document.querySelector("#navbar__list li:nth-child(1) .menu__link").classList.remove("active");
            document.querySelector("#navbar__list li:nth-child(2) .menu__link").classList.remove("active");
            document.querySelector("#navbar__list li:nth-child(4) .menu__link").classList.remove("active");
        }
        else if(scrollPos >=2100 )
        {
            document.getElementById("section4").classList.add("your-active-class");
            document.getElementById("section1").classList.remove("your-active-class");
            document.getElementById("section2").classList.remove("your-active-class");
            document.getElementById("section3").classList.remove("your-active-class");
            document.querySelector("#navbar__list li:nth-child(4) .menu__link").classList.add("active");
            document.querySelector("#navbar__list li:nth-child(1) .menu__link").classList.remove("active");
            document.querySelector("#navbar__list li:nth-child(2) .menu__link").classList.remove("active");
            document.querySelector("#navbar__list li:nth-child(3) .menu__link").classList.remove("active");
        }
        else
        {
            document.getElementById("section1").classList.remove("your-active-class");
            document.getElementById("section2").classList.remove("your-active-class");
            document.getElementById("section3").classList.remove("your-active-class");
            document.getElementById("section4").classList.remove("your-active-class");
            document.querySelector("#navbar__list li:nth-child(1) .menu__link").classList.remove("active");
            document.querySelector("#navbar__list li:nth-child(2) .menu__link").classList.remove("active");
            document.querySelector("#navbar__list li:nth-child(3) .menu__link").classList.remove("active");
            document.querySelector("#navbar__list li:nth-child(4) .menu__link").classList.remove("active");
        }
}
);