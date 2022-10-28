import "./index.css"
import PopupWithImage from "../components/PopupWithImage";

const photoGrid = document.querySelector('.photo-grid')
const imagePopup = new PopupWithImage(".popup-image")
imagePopup.setEventListeners()

photoGrid.addEventListener('click', (e)=> {
  if(e.target.classList.contains("photo-grid__item"))
    imagePopup.open(e.target.alt, e.target.src)
})