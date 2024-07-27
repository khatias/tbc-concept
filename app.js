const openIcon =document.getElementById("openIcon")
const dropdownContent = document.getElementById("dropdownContent")
const dropDownIcon = document.getElementById("dropDownIcon")
const header =document.getElementById('header')
const nav = document.getElementById("overLay");


function openNav() {
  if (nav.style.width === "100%") {
    nav.style.width = "0";
    header.style.backgroundColor = ''; 
    openIcon.classList.remove("openmenu");
    openIcon.style.paddingLeft = '8px'
  } else {
    nav.style.width = "100%";
    header.style.backgroundColor = 'rgb(249, 250, 250)';
    openIcon.classList.add("openmenu");
    openIcon.style.paddingLeft = '18px'
  }
}

function toggleDropDown(contentId, iconId, contentClass, iconClass) {
  event.preventDefault()
  const dropdownContent = document.getElementById(contentId);
  const dropdownIcon = document.getElementById(iconId);

  const allDropdownContents = document.querySelectorAll(contentClass);
  const allDropdownIcons = document.querySelectorAll(iconClass);

  allDropdownContents.forEach((content, index) => {
    if (content.id !== contentId) {
      content.style.display = "none";
      content.style.maxHeight = "0";
      allDropdownIcons[index].style.transform = "rotate(0deg)";
    }
  });

  if (dropdownContent.style.display === "flex") {
    dropdownContent.style.display = "none";
    dropdownContent.style.maxHeight = "0";
    dropdownIcon.style.transform = "rotate(0deg)";
    
  } else {
    dropdownContent.style.display = "flex";
    dropdownContent.style.maxHeight = dropdownContent.scrollHeight + "px";
    dropdownIcon.style.transform = "rotate(180deg)";
  }
}


 // Function to toggle the display of a desktop dropdown menu
function desktopDropDown(contentId) {
  var dropdowns = document.querySelectorAll('.desktop-dropdown-content');
  const headerBgImage = document.getElementById('headerBgImage');
  var dropdownButtons = document.querySelectorAll('.dropbtn');
  

  dropdowns.forEach(function(dropdown) {
    if (dropdown.id === contentId) {
      dropdown.style.display = (dropdown.style.display === 'flex') ? 'none' : 'flex';
      
      if (dropdown.style.display === 'flex') {
        headerBgImage.style.display = 'block';  
      } else {
        headerBgImage.style.display = 'none';
      }
    } else {
      dropdown.style.display = 'none';   
    }
  });

  dropdownButtons.forEach(function(button) {
    button.classList.remove('dropdown-active');
  });

  var clickedButton = document.querySelector(`.dropbtn[onclick="desktopDropDown('${contentId}')"]`);
  clickedButton.classList.add('dropdown-active');
}


const products = [
  {
    imgSrc: "asstes/digital.png",
    title: "ციფრული",
    description: "თიბისი კონცეპტის ციფრული ნაკრები განკუთვნილია მათთვის, ვისთვისაც <strong>საბანკო მომსახურებით სარგებლობა ყოველდღიურობის ნაწილია</strong>, ვინც აქტიურად მოიხმარს <strong>არასაბანკო პროდუქტებსა და შეთავაზებებს</strong> და ვისაც ურჩევნია დამოუკიდებლად, <strong>პირადი ბანკირის გარეშე</strong> მართოს საკუთარი ფინანსები და საბანკო ოპერაციები."
  },
  {
    imgSrc: "asstes/premium.png",
    title: "პრემიუმი",
    description: "თიბისი კონცეპტის მომხმარებლებთან ურთიერთობის ერთ-ერთი ფორმატი - <strong>პრემიუმ ნაკრები</strong>, სხვა საბანკო და არასაბანკო უპირატესობებთან ერთად, <strong>პირადი ბანკირის მომსახურებას</strong> გულისხმობს. პირადი ბანკირის მთავარი ამოცანა მომხარებლისთვის ცხოვრების გამარტივება და მისთვის უმაღლესი ხარისხის მომსახურების უზრუნველყოფაა."
  },
  {
    imgSrc: "asstes/360.png",
    title: "360",
    description: "<strong>თიბისი კონცეპტის 360</strong> ნაკრები განკუთვნილია მათთვის, ვისაც სხვა საბანკო და არასაბანკო უპიტარესობებთან ერთად, კიდევ უფრო <strong>მეტი ფინანსური ინსტრუმენტი</strong> და <strong>გაზრდილი შესაძლებლობები</strong> ესაჭიროება."

  }

];

const productsContainer = document.getElementById('products-container');

products.forEach(product => {
  const productCard = document.createElement('div');
  productCard.classList.add('product-card');
  productCard.classList.add('h-scroll-card');

productCard.innerHTML = `
    <img src="${product.imgSrc}" alt="">
    <div class="h-scroll-card-content">
      <h4>${product.title}</h4>
      <p class="product-description">${product.description}</p>
    </div>
  `;

  productsContainer.appendChild(productCard);
});



const offers = [
  {
    imgSrc: "asstes/mp-development.png",
    category: "ინვესტიციები",
    title: "MP დეველოპმენტი - აშშ და ევროს ობლიგაციები"
  },
  {
    imgSrc: "asstes/iveria-beach.jpg",
    category: "ჯაზ ფესტივალის შეთავაზებები",
    title: "IVERIA BEACH -დაიბრუნეთ 30%"
  },
  {
    imgSrc: "asstes/tegeta-motors.png",
    category: "ავტო თეგეტა მოტორსი",
    title: "თეგეტა მოტორსი -50% ფასდაკლება"
  },
  {
    imgSrc: "asstes/tegeta-motors-batumi.png",
    category: "ავტო ჯაზ ფესტივალის შეთავაზებები",
    title: "თეგეტა მოტორსი -ბათუმმი"
  },
  {
    imgSrc: "asstes/le-meridien-batumi.png",
    category: "დასვენება ვიზა ჯაზ ფესტივალის შეთავაზებები",
    title: "Le Meridien Batumi -15%-იანი ფასდაკლება"
  },
  {
    imgSrc: "asstes/colloseum-marina-batumi.png",
    category: "დასვენება ვიზა ჯაზ ფესტივალის შეთავაზებები",
    title: "Colosseum Marina Hotel- 15%-iani fasdakleba"
  }
];

const offersContainer = document.getElementById('offers-container');

offers.forEach(offer => {
  const offerCard = document.createElement('div');
  offerCard.classList.add('offer-card');
  offerCard.classList.add('h-scroll-card');

  offerCard.innerHTML = `
    <img src="${offer.imgSrc}" alt="">
    <div class="h-scroll-card-content">
      <p>${offer.category}</p>
      <h4>${offer.title}</h4>
    </div>
  `;

  offersContainer.appendChild(offerCard);

  
});


const awards = [
  {
    imgSrc: "asstes/global-finance.png",
    title: "საუკეთესო პერსონალური საბანკო მომსახურება საქართველოში 2024 ",
    category: "The Global Finance",
  },


  {
    imgSrc: "asstes/euromoney.png",
    title: "საუკეთესო პერსონალური საბანკო მომსახურება საქართველოში 2023",
    category: "Euromeny",
  },

  {
    imgSrc: "asstes/global-finance.png",
    title: "საუკეთესო პერსონალური საბანკო მომსახურება საქართველოში 2022",
    category: "The Global Finance",
  },
  {
    imgSrc: "asstes/the-banker.png",
    title: "საუკეთესო პერსონალური საბანკო მომსახურება საქართველოში 2021",
    category: "The Banker &amp; PWM",
    
  }
];

const awardsContainer = document.getElementById("awards-container")

awards.forEach(award => {
  const awardCard = document.createElement('div');
  awardCard.classList.add('award-card');
  awardCard.classList.add('h-scroll-card');

  awardCard.innerHTML = `
    
    <div class="h-scroll-card-content award-card-content">
    <img src="${award.imgSrc}" alt="">
      <h4>${award.title}</h4>
      <p>${award.category}</p>
      
    </div>
  `;

  awardsContainer.appendChild(awardCard);

  
});


const initSlider = (containerId, scrollbarId, thumbId) => {
  const container = document.getElementById(containerId);
  const slideButtons = document.querySelectorAll(`.${containerId}-button`);
  const sliderScrollbar = document.getElementById(scrollbarId);
  const scrollBarThumb = document.getElementById(thumbId);
  const cards = container.querySelectorAll(".offer-card, .product-card, .award-card"); 
  const maxScrollLeft = container.scrollWidth - container.clientWidth;

  // Calculate the width of one card
  const cardWidth = cards.length > 0 ? cards[0].offsetWidth : 0;

  // Update scrollbar thumb drag
  scrollBarThumb.addEventListener("mousedown", (e) => {
    const startX = e.clientX;
    const thumbPosition = scrollBarThumb.offsetLeft;

    const handleMouseMove = (e) => {
      const deltaX = e.clientX - startX;
      const newThumbPosition = thumbPosition + deltaX;
      const maxThumbPosition = sliderScrollbar.getBoundingClientRect().width - scrollBarThumb.offsetWidth;

      const boundedPosition = Math.max(0, Math.min(maxThumbPosition, newThumbPosition));
      const scrollPosition = (boundedPosition / maxThumbPosition) * maxScrollLeft;

      scrollBarThumb.style.left = `${boundedPosition}px`;
      container.scrollLeft = scrollPosition;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  });

  // Slide Images according to the slide button click
  slideButtons.forEach(button => {
    button.addEventListener("click", () => {
      slideButtons.forEach(btn => btn.classList.remove('active'));
      const direction = button.id.includes("prev") ? -1 : 1;
     
      const scrollAmount = cardWidth * direction;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
      button.classList.add('active');
    });
  });

  let isDragging = false;
  let startX;
  let scrollLeft;

  container.addEventListener('mousedown', (e) => {
    isDragging = true;
    startX = e.pageX - container.offsetLeft;
    scrollLeft = container.scrollLeft;
    e.preventDefault();
  });

  container.addEventListener('mouseleave', () => {
    isDragging = false;
  });

  container.addEventListener('mouseup', () => {
    isDragging = false;
  });

  container.addEventListener('mousemove', (e) => {
    if (!isDragging) return;

    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX);
    container.scrollLeft = scrollLeft - walk;
  });

  // Update scrollbar thumb position based on image scroll
  const updateScrollThumbPosition = () => {
    const scrollPosition = container.scrollLeft;
    const thumbPosition = (scrollPosition / maxScrollLeft) * (sliderScrollbar.clientWidth - scrollBarThumb.offsetWidth);
    scrollBarThumb.style.left = `${thumbPosition}px`;
  };

  container.addEventListener("scroll", updateScrollThumbPosition);
};

// Initialize sliders for offers, products, and awards
window.addEventListener("load", () => {
  initSlider('offers-container', 'offers-sliderScrollBar', 'offers-scrollBarThumb');
  initSlider('products-container', 'products-sliderScrollBar', 'products-scrollBarThumb');
  initSlider('awards-container', 'awards-sliderScrollBar', 'awards-scrollBarThumb');
});
