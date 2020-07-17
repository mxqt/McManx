const pixelsTag = document.querySelector("pixels")
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


 // when we scroll the page, make things parallax
// we want to move certain tags, based on how far they are from an anchor point
// what is the anchor? well its the middle of the section
// how far should we parallax? well, it's a ratio of the middle distance scrolled to the middle point of the anchor
document.addEventListener("scroll", function () {
    const topViewport = window.pageYOffset
    const midViewport = topViewport + (window.innerHeight / 2)
    

    sectionsTag.forEach (section => {
        const topSection = section.offsetTop
        const midSection = topSection + (section.offsetHeight / 2)

        const distanceToSection = midViewport - midSection

        const parallaxTags = section.querySelectorAll(`[data-parallax]`)

        parallaxTags.forEach(tag => {

            const speed = parseFloat(tag.hasAttribute("data-parallax"))
            tag.style.transform = `translate(0, ${distanceToSection * 0.25}px)`

        })
    })  
    })
  

    