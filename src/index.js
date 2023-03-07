import "./styles.css"
import QR from '../images/image-qr-code.png'

document.documentElement.lang = navigator.language;
document.title = "QR CODE Frontend Mentor"

const qrCode = new Image();
qrCode.src =  QR;
qrCode.alt = "QR Code for Front-end Mentor";
qrCode.classList += 'qrCode';

let intro = document.createElement("h1");
intro.textContent = "Improve your front-end skills by building projects"
intro.classList += 'cardHeading'

let intro2 = document.createElement("p");
intro2.textContent = "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
intro2.classList += 'attribution'

const cardContainer = document.createElement("div");
cardContainer.classList += "cardContainer"

let card  = document.createElement("div");
card.classList += 'card'

let newline = document.createElement("br");

document.body.appendChild(cardContainer);
cardContainer.appendChild(card)
card.appendChild(qrCode);
card.appendChild(intro);
card.appendChild(newline);
card.appendChild(intro2);
