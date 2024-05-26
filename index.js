const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('click',function () {
    alert('Pinche Posser :v')
});

const siBtn = document.querySelector('#siBtn');

siBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    siBtn.style.setProperty('top',randomY+'%');
    siBtn.style.setProperty('left',randomX+'%');
    siBtn.style.setProperty('transform'`traslate(-${randomX}%-${randomY}%)`);
     
})
