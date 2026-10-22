import './style.css'

/* ---------- Mobile menu toggle ---------- */
const sidebar = document.getElementById('sidebar')
const overlay = document.getElementById('overlay')
const menuBtn = document.getElementById('menu-btn')
const closeBtn = document.getElementById('close-btn')

function setMenu(open) {
  sidebar.classList.toggle('-translate-x-full', !open)
  overlay.classList.toggle('hidden', !open)
  menuBtn.setAttribute('aria-expanded', String(open))
}
menuBtn.addEventListener('click', () => setMenu(true))
closeBtn.addEventListener('click', () => setMenu(false))
overlay.addEventListener('click', () => setMenu(false))
document.addEventListener('keydown', (e) => e.key === 'Escape' && setMenu(false))

/* ---------- Dark mode toggle (saved in localStorage) ---------- */
const root = document.documentElement
const themeBtn = document.getElementById('theme-btn')

if (localStorage.getItem('theme') === 'dark') root.classList.add('dark')

themeBtn.addEventListener('click', () => {
  const isDark = root.classList.toggle('dark')
  localStorage.setItem('theme', isDark ? 'dark' : 'light')
})

/* ---------- Form demo ---------- */
document.getElementById('user-form').addEventListener('submit', (e) => {
  e.preventDefault()
  const msg = document.getElementById('form-msg')
  msg.textContent = 'User added successfully!'
  e.target.reset()
})
