let musicas = [
    {titulo: 'Awful', artista: 'Josh Pan', src: 'musicas/Awful - josh pan.mp3', img: 'imagens/hip-hop1.jpg' },

    {titulo: 'Nine Lives', artista: 'Unicorn Heads', src: 'musicas/Nine Lives - Unicorn Heads.mp3', img: 'imagens/hip-hop3.jpg' },

    {titulo: 'Bay Street Billionaires', artista: 'Squasdda B', src: 'musicas/Bay Street Billionaires - Squadda B (1).mp3', img: 'imagens/hip-hop2.jpg' },

    {titulo: 'Sunset n Beachz', artista: 'Ofshabe', src: 'musicas/Sunset n Beachz - Ofshane.mp3', img: 'imagens/hip-hop4.jpg' }


    
];


let musica = document.querySelector('audio');
let index_musica = 0;

let duracao_musica = document.querySelector('.fim')
let imagem  = document.querySelector('img')
duracao_musica.textContent = segundos_para_minutos(Math.floor(musica.duration));
let nome_da_musica = document.querySelector('.descricao h2');
let nome_do_artista = document.querySelector('.descricao i');

rendenrizar_musica(index_musica);

//eventos
document.querySelector('.botao_play').addEventListener('click',tocar_musica); //adiciona o evento de click para o botão

document.querySelector('.botao_pause').addEventListener('click',pausar_musica);

musica.addEventListener('timeupdate', atualizar_barra)

document.querySelector('.anterior').addEventListener('click', ()=> {
    index_musica--;
    if(index_musica<0){
        index_musica = 3;
    }
    rendenrizar_musica(index_musica);
    tocar_musica();
});

document.querySelector('.proxima').addEventListener('click', ()=> {
    index_musica++;
    if(index_musica > 3){
        index_musica = 0;
    }
    rendenrizar_musica(index_musica);
    tocar_musica();
});

//funções
function rendenrizar_musica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', ()=>{
        nome_da_musica.textContent = musicas[index].titulo;
        nome_do_artista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracao_musica.textContent = segundos_para_minutos(Math.floor(musica.duration));
    });
}


function tocar_musica(){
    musica.play();
    document.querySelector('.botao_pause').style.display = 'block'; //muda botao de play para pause
    document.querySelector('.botao_play').style.display = 'none'; 
}


function pausar_musica(){
    musica.pause();
    document.querySelector('.botao_pause').style.display = 'none'; 
    document.querySelector('.botao_play').style.display = 'block'; 
}

function atualizar_barra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime/musica.duration)*100) + "%";

    let tempo_decorrido = document.querySelector('.inicio');
    tempo_decorrido.textContent = segundos_para_minutos(Math.floor(musica.currentTime));
    
}

function segundos_para_minutos(segundos){
    let campo_minutos = Math.floor(segundos/60);
    let campo_segundos = segundos % 60;
    if(campo_segundos < 10){
        campo_segundos = "0" + campo_segundos;
    }
    return campo_minutos + ":" + campo_segundos;
}

