const img = document.getElementById('color28').getElementsByTagName('img');
const arr = [];

for (let i = 0; i < img.length; i++) {
    const image = {
        src: img[i].src,
        alt: img[i].alt,
        title: img[i].alt
    }

    arr.push(image);
}

console.log(JSON.stringify(arr))