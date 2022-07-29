window.sr = ScrollReveal({ reset: true });
sr.reveal(".scroll", { duration: 2000 });

// teste
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = ["Lobato", "Aragão"];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
	if (charIndex < textArray[textArrayIndex].length) {
		if (!cursorSpan.classList.contains("typing"))
			cursorSpan.classList.add("typing");
		typedTextSpan.textContent +=
			textArray[textArrayIndex].charAt(charIndex);
		charIndex++;
		setTimeout(type, typingDelay);
	} else {
		cursorSpan.classList.remove("typing");
		setTimeout(erase, newTextDelay);
	}
}

function erase() {
	if (charIndex > 0) {
		if (!cursorSpan.classList.contains("typing"))
			cursorSpan.classList.add("typing");
		typedTextSpan.textContent = textArray[
			textArrayIndex
		].substring(0, charIndex - 1);
		charIndex--;
		setTimeout(erase, erasingDelay);
	} else {
		cursorSpan.classList.remove("typing");
		textArrayIndex++;
		if (textArrayIndex >= textArray.length)
			textArrayIndex = 0;
		setTimeout(type, typingDelay + 1100);
	}
}

document.addEventListener("DOMContentLoaded", function () {
	// On DOM Load initiate the effect
	if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// teste

// criando cards de tecnologiais

techs.forEach((t) => {
	// console.log(t);

	let tech = document.querySelector(".tech");

	// criando tags
	let techDiv = document.createElement("div");
	let techImg = document.createElement("img");
	let techSec = document.createElement("section");
	let techSpan1 = document.createElement("span");
	let techProgr = document.createElement("progress");
	let techSpan2 = document.createElement("span");

	// criando classes
	techDiv.classList.add("card");
	techSpan1.classList.add("descText");
	techProgr.classList.add("progress");
	techSpan2.classList.add("porcentagem");

	// Add conteudo
	techDiv.style.cssText = `background-image: url(${t.bg}) ;`;
	techImg.src = t.img;
	techSpan1.innerHTML = t.txt;
	techProgr.max = t.progMax;
	techProgr.value = t.progValue;
	techSpan2.innerHTML = t.porc;

	// Add noo dom

	tech.appendChild(techDiv);
	techDiv.appendChild(techImg);
	techDiv.appendChild(techSec);
	techSec.appendChild(techSpan1);
	techSec.appendChild(techProgr);
	techSec.appendChild(techSpan2);
});

// criando cards de tecnologiais

// Criando container de projetos

projetos.forEach((p) => {
	// console.log(p);

	let proj = document.querySelector(".projetosWeb");

	// let projSec = document.createElement("section");

	let projLink = document.createElement("a");
	let projImg = document.createElement("img");
	let projTxt = document.createElement("span");

	projLink.href = p.link;
	// projLink.style.cssText = `background-image: url(${p.img})`;
	projImg.src = p.img;
	projTxt.innerHTML = p.txt;

	proj.appendChild(projLink);
	// projSec.appendChild(projLink);
	projLink.appendChild(projImg);
	projLink.appendChild(projTxt);
});

// Criando container de projetos

// Menu
let btn_mobile = document.querySelector("#btn-mobile");
let hamburguer = document.querySelector("#hamburguer");
let nav = document.querySelector("#nav");

btn_mobile.addEventListener("click", () => {
	if (btn_mobile.classList.toggle("active")) {
		nav.classList.toggle("active");
	} else {
		nav.classList.remove("active");
	}
});

let menuItens = document.querySelectorAll("#menu a");

menuItens.forEach((item) => {
	item.addEventListener("click", (e) => {
		if (e.returnValue == true) {
			nav.classList.remove("active");
		}
	});
});
// Menu
