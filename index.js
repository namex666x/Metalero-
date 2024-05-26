const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('click',function () {
    alert('Pinche Posser :v')
});

const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('mouseover',function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    yesBtn.style.setProperty('top',randomY+'%');
    yesBtn.style.setProperty('left',randomX+'%');
    yesBtn.style.setProperty('transform'`traslate(-${randomX}%-${randomY}%)`);
     
})
