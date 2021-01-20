const allImages = document.getElementsByTagName("img");


for(image of allImages) {
	image.style['animation-delay'] = -Math.random() * 2 + 's';
}