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
  } else {
    nav.style.width = "100%";
    header.style.backgroundColor = 'rgb(249, 250, 250)';
    openIcon.classList.add("openmenu");
  }
}

 // Function to toggle the display of a dropdown menu in mobile navigation,
function dropDown(contentId, iconId) {
  const dropdownContent = document.getElementById(contentId);
  const dropdownIcon = document.getElementById(iconId);


  const allDropdownContents = document.querySelectorAll('.dropdown-content');
  const allDropdownIcons = document.querySelectorAll('.drop-down-icon');


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
      headerBgImage.style.display = 'block';
    } else {
      dropdown.style.display = 'none';
    }
  });

  dropdownButtons.forEach(function(button) {
    button.classList.remove('active');
  });

  var clickedButton = document.querySelector(`.dropbtn[onclick="desktopDropDown('${contentId}')"]`);
  clickedButton.classList.add('active');
}
