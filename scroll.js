const bodyTag = document.querySelector("body")
const sectionsTag = document.querySelectorAll("section")
const clientTag = document.querySelector("div.client")
const pageTag = document.querySelector("div.page")
const headerTag = document.querySelector("header")


//when scroll page// check wether we have passed

document.addEventListener("scroll", function () {

    const pixels = window.pageYOffset

    sectionsTag.forEach(section => {
    if (section.offsetTop - 545 <= pixels) {

    clientTag.innerHTML = section.getAttribute("data-client")

      if (section.hasAttribute("data-is-dark")) {
          clientTag.classList.add("white")

        

        } else {
            clientTag.classList.remove("white")
        }
     }

     if (section.offsetTop - 60 <= pixels) {

        clientTag.innerHTML = section.getAttribute("data-client")
    
          if (section.hasAttribute("data-is-dark")) {
              headerTag.classList.add("white")
    
            } else {
                headerTag.classList.remove("white")
            }
         }

     })
 })


    