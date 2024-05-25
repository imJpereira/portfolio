//SOBREMIM
function showContentAndSelectButton(btnId, contentId) {
    $('.sobremim-content').hide();
    $(contentId).show();
    $('.selected').removeClass('selected');
    $(btnId).addClass('selected');      
}

$('#mystory').on('click', function() {
    showContentAndSelectButton('#mystory', '#mystory-content');
})

$('#softskills').on('click', function() {
    showContentAndSelectButton('#softskills', '#softskills-content');
})

$('#language').on('click', function() {
    showContentAndSelectButton('#language', '#language-content');
})

showContentAndSelectButton('#mystory', '#mystory-content');


//CONHECIMENTOS
$('.technology-description').hide();
$('.base-box').on('mouseenter', function() {
    const elementId = $(this).attr('id');
    $('.technology-description').stop(true, true).fadeOut();

    let targetElement = null 
    switch (elementId) {
        case 'html':
            targetElement = '.html-knowledge';
            break;
        case 'css':
            targetElement = '.css-knowledge';
            break;
        case 'javascript':
            targetElement = '.javascript-knowledge';
            break;
        case 'nodejs':
            targetElement = '.nodejs-knowledge';
            break;
        case 'mysql':
            targetElement = '.mysql-knowledge';
            break;
        case 'mongodb':
            targetElement = '.mongodb-knowledge';
            break;
        case 'git':
            targetElement = '.git-knowledge';
            break;
        case 'github':
            targetElement = '.github-knowledge';
            break;
        default:
            targetElement = null;
    }

    if (targetElement) $(targetElement).fadeIn();
});

$('.base-box').on('mouseleave',function() {
    $('.technology-description').stop(true, true).fadeOut();
});

//MENU HAMBURGUER
$('.hamburger').on('click', function() {
    
    if ($('#hamburger-checkbox').prop('checked')) {
        $('#hamburger-checkbox').prop('checked', false)
        $('.menu').css('display', 'none')
    } else {
        $('#hamburger-checkbox').prop('checked', true)
        $('.menu').css('display', 'flex')            
    }
});

function esconderMenu() {
    $('#hamburger-checkbox').prop('checked', false);
    $('.menu').css('display', 'none');
}

$(window).resize(function() {
    if ($(window).width() <= 800) {
        $('#menu-list li a').on('click', function() {
            esconderMenu();
        });
    } else {
        $('#menu-list li a').off('click');
    }
}).resize();