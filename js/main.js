const navBtn = document.querySelector('.nav-icon-btn')
const navIcon = document.querySelector('.nav-icon')
const nav = document.querySelector('.header__top-row')

navBtn.onclick = () => {
  navIcon.classList.toggle('nav-icon--active')
  nav.classList.toggle('header__top-row--mobile')
  document.body.classList.toggle('no-scroll')
}

// Yandex Map

ymaps.ready(init)

function init() {
  const myMap = new ymaps.Map('map', {
    center: [59.943543, 30.338928],
    zoom: 16,
  })

  var myPlacemark = new ymaps.Placemark(
    [59.943543, 30.338928],
    {},
    {
      iconLayout: 'default#image',
      iconImageHref: './../img/location-pin.svg',
      iconImageSize: [40, 40],
      iconImageOffset: [-20, -40],
    }
  )
  myMap.geoObjects.add(myPlacemark)
}
