
const toggleTag = document.querySelector("a.toggle-nav")
const mainTag = document.querySelector("main")
const navTag = document.querySelector("nav")


// when i click the toggle tag, toggle a class of open on the main tag
toggleTag.addEventListener("click", function(){
  mainTag.classList.toggle("open")
  navTag.classList.toggle("open")


  if (mainTag.classList.contains("open")) {
    toggleTag.innerHTML = `close`

  } else (
    toggleTag.innerHTML = "info"
  )
})