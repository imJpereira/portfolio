//DOWNLOAD CV
document.getElementById('cv-download').addEventListener('click', () => {
    const fileUrl = '/assets/download/curriculo.pdf'

    const linkDownload = document.createElement('a');
    linkDownload.href = fileUrl;
    linkDownload.download = 'curriculo.pdf';
    document.body.appendChild(linkDownload);
    
    linkDownload.click();

    document.body.removeChild(linkDownload);
});


// LINKTREE
document.getElementById('contact').addEventListener('click', () => {
    const url = 'https://linktr.ee/Joao_Pereira_'
    window.open(url, '_self')
});


// PROJETOS
document.getElementById('password-link').addEventListener( 'click', () => {
    const url = 'https://passmastermind.netlify.app/'
    window.open(url)
});

document.getElementById('password-github').addEventListener( 'click', () => {
    const url = 'https://github.com/imJpereira/password-generator'
    window.open(url)
});

document.getElementById('form-link').addEventListener( 'click', () => {
    const url = 'https://valida-formulario.netlify.app/'
    window.open(url)
});

document.getElementById('form-github').addEventListener( 'click', () => {
    const url = 'https://github.com/imJpereira/form-validation'
    window.open(url)
});

document.getElementById('cpf-link').addEventListener( 'click', () => {
    const url = 'https://cpf-gen.netlify.app/'
    window.open(url)
}); 

document.getElementById('cpf-github').addEventListener( 'click', () => {
    const url = 'https://github.com/imJpereira/gerador-de-cpf'
    window.open(url)
});

document.getElementById('cadastro-github').addEventListener( 'click', () => {
    const url = 'https://github.com/imJpereira/cadastro'
    window.open(url)
});

//MENU HAMBURGER
