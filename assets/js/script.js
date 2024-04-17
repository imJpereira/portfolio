//SCROLL REVEAL
window.sr = ScrollReveal({reset: true})

ScrollReveal().reveal('.img-content', { 
    rotate: { x: 0, y: 20, z:0},
    delay: 100
});

ScrollReveal().reveal('.text-content', { 
    rotate: { x: 0, y: 20, z:0},
    delay: 300
});

//JQUERY
$(document).ready(function() {
    function showContentAndSelectButton(btnId, contentId) {
        $('.content').hide();
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
});
