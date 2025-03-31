const tabHome = document.getElementById("tab-home")
const tabProfile = document.getElementById("tab-profile")
const tabContact = document.getElementById("tab-contact")
const tabDinner = document.getElementById("tab-dinner")

const navHome = document.getElementById("nav-home")
const navProfile = document.getElementById("nav-profile")
const navContact = document.getElementById("nav-contact")
const navDinner = document.getElementById("nav-dinner")

tabHome.addEventListener("click", () => {
  navHome.classList.remove("d-none")
  tabHome.classList.add("active")

  navProfile.classList.add("d-none")
  navContact.classList.add("d-none")
  navDinner.classList.add("d-none")

  tabProfile.classList.remove("active")
  tabContact.classList.remove("active")
  tabDinner.classList.remove("active")
});


tabProfile.addEventListener("click", () => {
  navProfile.classList.remove("d-none")
  tabProfile.classList.add("active")

  navHome.classList.add("d-none")
  navContact.classList.add("d-none")
  navDinner.classList.add("d-none")

  tabHome.classList.remove("active")
  tabContact.classList.remove("active")
  tabDinner.classList.remove("active")
});

tabContact.addEventListener("click", () => {
  navContact.classList.remove("d-none")
  tabContact.classList.add("active")
  
  navHome.classList.add("d-none")
  navProfile.classList.add("d-none")
  navDinner.classList.add("d-none")

  tabHome.classList.remove("active")
  tabProfile.classList.remove("active")
  tabDinner.classList.remove("active")
});


tabDinner.addEventListener("click", () => {
  navDinner.classList.remove("d-none")
  tabDinner.classList.add("active")
  
  
  navProfile.classList.add("d-none")
  navHome.classList.add("d-none")
  navContact.classList.add("d-none")

  
  tabHome.classList.remove("active")
  tabProfile.classList.remove("active")
  tabContact.classList.remove("active")
});