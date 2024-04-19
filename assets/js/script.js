//SCROLL REVEAL
window.sr = ScrollReveal({reset: true})

ScrollReveal().reveal('.img-content', { 
    rotate: { x: 0, y: 20, z:0},
    delay: 100
});

ScrollReveal().reveal('.text-content', { 
    rotate: { x: 0, y: 20, z:0},
    delay: 200
});

ScrollReveal().reveal('.title', {
    rotate: { x: 0, y: 20, z:0},
    delay: 100
})

ScrollReveal().reveal('.grid-container', {
    rotate: { x: 0, y: 20, z:0},
    delay: 200
}) 

//JQUERY
$(document).ready(function() {

    //SOBREMIM
    function showContentAndSelectButton(btnId, contentId) {
        $('.sobremim-content').hide();
        $(contentId).show();
        $('.selected').removeClass('selected');
        $(btnId).addClass('selected');      
    }

    $('#mystory').click(function() {
        showContentAndSelectButton('#mystory', '#mystory-content')
    })

    $('#softskills').click(function() {
        showContentAndSelectButton('#softskills', '#softskills-content')
    })

    showContentAndSelectButton('#mystory', '#mystory-content');

    
    //CONHECIMENTOS
    $('.technology-description').hide();
    $('.base-box').mouseenter(function() {
        const elementId = $(this).attr('id');
        $('.technology-description').stop(true, true).fadeOut();

        let targetElement = null 
        switch (elementId) {
            case 'html':
                targetElement = '.html-knowledge'
                break
            case 'css':
                targetElement = '.css-knowledge'
                break
            case 'javascript':
                targetElement = '.javascript-knowledge'
                break
            case 'nodejs':
                targetElement = '.nodejs-knowledge'
                break
            case 'mysql':
                targetElement = '.mysql-knowledge'
                break
            case 'mongodb':
                targetElement = '.mongodb-knowledge'
                break
            case 'git':
                targetElement = '.git-knowledge'
                break
            case 'github':
                targetElement = '.github-knowledge'
        }

        if (targetElement) $(targetElement).fadeIn();
    })

    $('.base-box').mouseleave(function() {
        $('.technology-description').stop(true, true).fadeOut()
    })

});
