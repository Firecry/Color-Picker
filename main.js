gamma = document.getElementById('gamma')
lightness = document.getElementById('lightness')
background = document.getElementById('main')
setInterval(()=>{
    background.style.backgroundColor = `hsl(${gamma.value}, 100%, ${lightness.value}%)`
    document.getElementById('gammatext').innerHTML = `${gamma.value}°`
    document.getElementById('lightnesstext').innerHTML = `${lightness.value}%`
},10)