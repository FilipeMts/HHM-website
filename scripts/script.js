const navBtn = document.querySelector(".navigation-toggler");
const navItems = document.querySelector(".navigation-mobile");
const navList = document.querySelector(".navigation-items");
const arrow = document.querySelector(".arrow");
const aboutBtn =  document.querySelector(".about-button");
const about =  document.querySelector(".about");

//
navBtn.addEventListener("click", () => {
  navItems.style.display = "flex";
  navBtn.style.display = "none";
});

navItems.addEventListener("click", () => {
  navItems.style.display = "none";
  navBtn.style.display = "flex";
});

navList.addEventListener("click", () => {
  navItems.style.display = "none";
});

aboutBtn.addEventListener("click", () => {
  about.style.display = "flex";
  window.scrollTo(0, document.body.scrollHeight);
});

document.querySelector('.close').addEventListener("click", () => {
  about.style.display = "none";
});

//
const scrollFunction = () => {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    arrow.style.display = "flex";
  } else {
    arrow.style.display = "none";
  }
};
window.onscroll = () => { scrollFunction() };

arrow.addEventListener("click", () => {
  window.scrollTo({top:0, left:0, behavior: "smooth"})
});


//
function initMap(value) {
  const mapContainer = document.getElementById('map');

  if (mapContainer) {
    const map = new window.google.maps.Map(mapContainer, {      
      center: { lat: 35.164980, lng: -106.587572 },
      zoom: 10,
      minZoom: 4
    });  

    const hhmICoordinates = {
      lat: 35.164980,
      lng: -106.587572
    };
    
    const marker = new window.google.maps.Marker({
      position: hhmICoordinates,
      map
    });

    map.addListener('click', e => {
      const position = {
        lat: e.latLng.lat(),
        lng: event.latLng.lng(),      
      }
      console.log(position)
      
      new window.google.maps.Marker({
        position,
        map
      });
    });
  };
};
