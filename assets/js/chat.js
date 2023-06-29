const timeElement = document.querySelector('#curTime');
const chatElement = document.querySelector('.whatsapp-click');
const closeElement = document.querySelector('#closeModal');
const WaModal = document.querySelector('.whatsapp-modal');
const clickChat = document.querySelector('.wm-chat-block');

const sendTo = '+2347011655197';
const initText = 'Hello, I would like to employ your service';
const url = `https://api.whatsapp.com/send?phone=${sendTo}&text=${initText}`;

const openWAModal = () => {
    const d = new Date(); // for now
    const h = d.getHours(); // => 9
    const m = String(d.getMinutes()).padStart(2, '0'); // =>  30
    timeElement.innerHTML = h + ':' + m;
    
    if(WaModal.style.opacity > 0) {
        WaModal.style.opacity = 0;
        return;      
    }
    WaModal.style.opacity = 1;
}

chatElement.addEventListener('click', openWAModal);
closeElement.addEventListener('click', openWAModal);
clickChat.addEventListener('click', ()=>{window.open(url, '_blank')})