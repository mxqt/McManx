const headerTag = document.querySelector("header")
const sectionsTag = document.querySelectorAll("section")


sectionsTag.forEach(section => {
    if (section.offsetTop - 70 <= pixels) {

 clientTag.innerHTML = section.getAttribute("data-client")

  if (section.hasAttribute("data-is-dark")) {
      headerTag.classList.add("white")

    } else {
        headerTag.classList.remove("white")
    }
 }
 })