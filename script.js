const info = document.getElementById('info')
const infoh1 = document.getElementById('infoh1')
const infop = document.getElementById('infop')

const sun = document.getElementById('sun')
const venus = document.getElementById('venus')
const mercury = document.getElementById('mercury')
const moon = document.getElementById('moon')
const earth = document.getElementById('earth')
const mars = document.getElementById('mars')
const jupiter = document.getElementById('jupiter')
const saturn = document.getElementById('saturn')
const urenus = document.getElementById('urenus')
const neptune = document.getElementById('neptune')


sun.addEventListener("click",function(){
    infoh1.innerHTML = "Sun";
    
    infop.innerHTML = "149.6 million km from Earth. The star is at the center of our solar system, source of light, heat, and energy for life on Earth."
    info.className = 'slide-in-right'

    setTimeout(() => {
        info.className = ''
    }, 1000);
    
})

mercury.addEventListener("click",function(){
    infoh1.innerHTML = "Mercury";
    
    infop.innerHTML = "77 million km from Earth. Fastest orbit, extreme temperature fluctuations between day and night."
    info.className = 'slide-in-right'

    setTimeout(() => {
        info.className = ''
    }, 1000);
    
})

venus.addEventListener("click",function(){
    infoh1.innerHTML = "Venus";
    
    infop.innerHTML = "261 million km from earth. Thick atmosphere of carbon dioxide traps heat, creating a runaway greenhouse effect."
    info.className = 'slide-in-right'

    setTimeout(() => {
        info.className = ''
    }, 1000);
})

moon.addEventListener("click",function(){
    infoh1.innerHTML = "Moon";
    
    infop.innerHTML = "approximately 405,500 km from Earth. Earth's natural satellite, tidal effects, phases from crescent to full, key for lunar exploration."
    info.className = 'slide-in-right'

    setTimeout(() => {
        info.className = ''
    }, 1000);
})

earth.addEventListener("click",function(){
    infoh1.innerHTML = "Earth";
    
    infop.innerHTML = "Home Sweet Home"
    info.className = 'slide-in-right'

    setTimeout(() => {
        info.className = ''
    }, 1000);
})

mars.addEventListener("click",function(){
    infoh1.innerHTML = "Mars";
    
    infop.innerHTML = " 54.6 million km from Earth. Potential for past or present life, exploration target for colonization."
    info.className = 'slide-in-right'

    setTimeout(() => {
        info.className = ''
    }, 1000);
})

jupiter.addEventListener("click",function(){
    infoh1.innerHTML = "Jupiter";
    
    infop.innerHTML = "968 million km from Earth. Great Red Spot, largest planet, powerful magnetic field."
    info.className = 'slide-in-right'

    setTimeout(() => {
        info.className = ''
    }, 1000);
})

saturn.addEventListener("click",function(){
    infoh1.innerHTML = "Saturn";
    
    infop.innerHTML = "1.6 billion km from Earth. Spectacular ring system made of ice and dust particles."
    info.className = 'slide-in-right'

    setTimeout(() => {
        info.className = ''
    }, 1000);
})

urenus.addEventListener("click",function(){
    infoh1.innerHTML = "Urenus";
    
    infop.innerHTML = "3.2 billion km from Earth. Tilted rotational axis, unique among the planets."
    info.className = 'slide-in-right'

    setTimeout(() => {
        info.className = ''
    }, 1000);
})

neptune.addEventListener("click",function(){
    infoh1.innerHTML = "Neptune";
    
    infop.innerHTML = "4.7 billion km from Earth. Deep blue color, strong winds, discovery through mathematical prediction before visual observation."
    info.className = 'slide-in-right'

    setTimeout(() => {
        info.className = ''
    }, 1000);
})


