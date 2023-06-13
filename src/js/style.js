window.sr = ScrollReveal ({reset: true});

sr.reveal ('.games',{
    duration:1500,
});

sr.reveal ('.logo-junta',{
    duration: 2000,
    rotate:{x: 100,}
});

// sr.reveal ('.descricao',{duration: 5000});
sr.reveal ('.contato.aberto',{duration: 1500})
sr.reveal ('.free-fire',{duration: 5000})
sr.reveal ('.speed-drifters',{duration: 3000})
sr.reveal ('.clash-of-clans',{duration: 7000})

const descricao = document.querySelector('.descricao');
typeWriter(descricao)

function typeWriter(elemento) {
    const textoArray =elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) =>{
        setTimeout (()=> elemento.innerHTML += letra, 75 * i);
    });
}



