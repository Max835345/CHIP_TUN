ymaps.ready(init);

function init() {
    myMap = new ymaps.Map("map", {
        center: [43.115542, 131.885494,361],
        zoom: 15,
    }, {
    }),
    myPlacemark = new ymaps.Placemark([43.115542, 131.885494, 361],{
        balloonContentHeader: "",
        balloonContentBody: "",
        balloonContentFooter: "",
        hintContent: "Мы тут"
    });
    
myMap.geoObjects.add(myPlacemark);
    
}


const roudtabs = document.querySelectorAll('.tabs__button');
    
roudtabs.forEach(roudtab => {
    roudtab.addEventListener('click', () =>{
        const targetId = roudtab.getAttribute('data-target');
        const targetTable = document.getElementById(targetId);
        targetTable.classList.toggle('tabs__item');
        targetTable.classList.toggle('tabs__item__active');
    });
});