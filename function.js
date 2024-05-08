function creaSchedaImageHtml(image) {
    return `<img src="${image.image}" alt="${image.title}" style="width:100%; height:auto;">
            <h3>${image.title}</h3>
            <p>${image.text}</p>`;
}