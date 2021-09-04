/* Script */
const closeBtn = document.querySelector('#close-btn')
const aside = document.querySelector('aside')
const openBtn = document.querySelector('#open-btn')
const tabNav = document.querySelector('#tab-nav')

closeBtn.addEventListener('click', function(){
    aside.classList.add('hide-aside')
    openBtn.removeAttribute('hidden')
    openBtn.classList.add('show-menu')
    tabNav.classList.remove('sidenav-opened')
    tabNav.classList.add('sidenav-closed')
})

openBtn.addEventListener('click', function(){
    aside.classList.remove('hide-aside')
    openBtn.setAttribute('hidden', 'true')
    tabNav.classList.add('sidenav-opened')
    tabNav.classList.remove('sidenav-closed')
})