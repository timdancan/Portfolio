const toggle = document.querySelector('.toggle')
const sidebar = document.querySelector('.sidebar')
const pageLink = sidebar.querySelectorAll('.page-link')

toggle.addEventListener('click', ()=> {
  toggle.classList.toggle('toggle_active')
  sidebar.classList.toggle('sidebar_active')
})

pageLink.forEach(link =>{
  link.addEventListener('click', ()=>{
    sidebar.classList.remove('sidebar_active')
    toggle.classList.remove('toggle_active')
  })
})