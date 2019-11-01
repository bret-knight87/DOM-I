const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])


//nav
const service = (document.getElementsByTagName('a')[0].textContent =
siteContent.nav['nav-item-1']);

const product = (document.getElementsByTagName('a')[1].textContent =
siteContent.nav['nav-item-2']);

const vision = (document.getElementsByTagName('a')[2].textContent =
siteContent.nav['nav-item-3']);

const features = (document.getElementsByTagName('a')[3].textContent =
siteContent.nav['nav-item-4']);

const about = (document.getElementsByTagName('a')[4].textContent =
siteContent.nav['nav-item-5']);

const contact = (document.getElementsByTagName('a')[5].textContent =
siteContent.nav['nav-item-6']);

//cta 

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;

const awesome = document.querySelector('.cta-text h1');
awesome.innerHTML = siteContent['cta']['h1'].replace(/\s/g, '<br/>');

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//main

const mainHead = document.querySelectorAll('.main-content h4');
mainHead[0].textContent = siteContent['main-content']['features-h4'];
mainHead[1].textContent = siteContent['main-content']['about-h4'];
mainHead[2].textContent = siteContent['main-content']['services-h4'];
mainHead[3].textContent = siteContent['main-content']['product-h4'];
mainHead[4].textContent = siteContent['main-content']['vision-h4'];


const mainContent = document.querySelectorAll('.main-content p');
mainContent[0].textContent = siteContent['main-content']['features-content'];
mainContent[1].textContent = siteContent['main-content']['about-content'];
mainContent[2].textContent = siteContent['main-content']['services-content'];
mainContent[3].textContent = siteContent['main-content']['product-content'];
mainContent[4].textContent = siteContent['main-content']['vision-content'];

const mainImg = document.getElementById('middle-img');
mainImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//contact 

const contactHead = document.querySelector('.contact h4');
contactHead.textContent = siteContent.contact['contact-h4'];

const contactP = document.querySelectorAll('.contact p');
siteContent.contact['address'] = '123 Way 456 Street <br> Somewhere, USA';
contactP[0].innerHTML = siteContent.contact['address'];
contactP[1].textContent = siteContent.contact['phone'];
contactP[2].textContent = siteContent.contact['email'];

//footer

const foot = document.getElementsByTagName('footer')[0].textContent =
siteContent.footer['copyright'];

//changes 

const navItems = document.querySelectorAll("nav a");
navItems.forEach(function(element) {
  element.style.color = "green";
});

const navContainer = document.querySelector("nav");

const prependElement = document.createElement("a");
prependElement.textContent = "Bret";
prependElement.style.color = "red";

const appendElement = document.createElement("a");
appendElement.textContent = "Knight";
appendElement.style.color = "red";

navContainer.prepend(prependElement);
navContainer.appendChild(appendElement);


