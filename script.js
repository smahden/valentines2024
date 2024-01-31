const envelope = document.querySelector('.envelope-wrapper');


envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});





const container = document.querySelector('.container');
const yesBtn = document.querySelector('button.yes-btn');
const noBtn = document.querySelector('button.no-btn');
const containerRect = container.getBoundingClientRect();
const noBtnRect = noBtn.getBoundingClientRect();



yesBtn.addEventListener('click', () =>{

    document.getElementById('image').style.opacity = 1;
});

noBtn.addEventListener('mouseover', () =>{
    const i = Math.floor(Math.random() * (containerRect.width - noBtnRect.width))+1;
    const j = Math.floor(Math.random() * (containerRect.height - noBtnRect.height))+1;

    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});
