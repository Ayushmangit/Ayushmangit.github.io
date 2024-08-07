// set Nav-open
const btnNavEL = document.querySelector(".button-mobile-nav");
const headerEL = document.querySelector(".header");

const linksEL = document.querySelectorAll("a:link");
linksEL.forEach(function (e) {
  e.addEventListener("click", function () {
    headerEL.classList.remove("nav-open");
  });
});

btnNavEL.addEventListener("click", function () {
  headerEL.classList.toggle("nav-open");
});

// set current year
const yearEL = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEL.textContent = currentYear;

//

// sticky nav
const sectionheroEL = document.querySelector(".section-hero");

const observer = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
      console.log(ent);
    } else if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
      console.log(ent);
    }
  },
  {
    // inside of the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionheroEL);
// smooth scrolling animation

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
  var flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  var isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
const yearlyEl = document.querySelector(".yearBtn");
const monthlyEl = document.querySelector(".monthlyBtn");
const starterEl = document.querySelector(".starter");
const completeEl = document.querySelector(".complete");

yearlyEl.addEventListener("click", function () {
  starterEl.textContent = `${399 * 12}`;
  completeEl.textContent = `${649 * 12}`;
  yearlyEl.classList.add("active");
  monthlyEl.classList.remove("active");
});
monthlyEl.addEventListener("click", function () {
  starterEl.textContent = "399";
  completeEl.textContent = "649";
  yearlyEl.classList.remove("active");
  monthlyEl.classList.add("active");
});
