//SCROLL REVEAL

window.sr = ScrollReveal({reset: true})

ScrollReveal().reveal('.sobremim-img-content', { 
    rotate: { x: 0, y: 20, z:0},
    delay: 200
});

ScrollReveal().reveal('.sobremim-text-content', { 
    rotate: { x: 0, y: 20, z:0},
    delay: 400
});


//AJAX

document.addEventListener('DOMContentLoaded', () => {
    const mystoryButton = document.getElementById('mystory');
    if (mystoryButton) {
        mystoryButton.click();
    }
});

document.addEventListener('click', e => {
    const el = e.target;
    const classList = el.classList;

    if (classList.contains('sobremim-button')) {
        e.preventDefault();
        loadPage(el);
    }
})

getHref = (el) => {
    if (el.id === 'mystory') {
        return 'mystory.html';
    }

    if (el.id === 'softskills') {
        return 'softskills.html';
    }

    return;
}

loadPage = (el) => {

    const href = getHref(el);
    
    fetch(href)
    .then(res => res.text())
    .then(htmlContent => loadResult(htmlContent))
    .catch(e => console.warn(e));
}

loadResult = (htmlContent) => {
    const result = document.getElementById('result');
    result.innerHTML = htmlContent;
}