const livro = [
{id: "0", texto: [" luz sobre o deus adormecido ilumina o momento em que Psiquê assume o seu destino, surge na vida de toda mulher que parte em busca da auto-realização surge um novo princípio do amor no qual o encontro do feminino com o masculino.", "no qual o encontro do feminino com o masculino. As páginas são bem bonitas e coloridas e os instrumentos são apresentados por músicos jovens, que já fazem bonito no palco. Acabei de ler e agora me deu uma vontade de ouvir uma orquestra se apresentar…", "Além disso, revela detalhes de como se toca cada um deles e de como o maestro, com movimentos precisos, comanda tudo isso. Mesmo tendo que enfrentar a polícia, os que não tinham direito de participar do carnaval à francesa faziam sua própria festa nas ruas", "Mas quem disse que o povo ficou sem pular carnaval? Mesmo tendo que enfrentar a polícia, os que não tinham direito de participar do carnaval à francesa faziam sua própria festa nas ruas. Batucavam e vestiam fantasias.", "Batucavam e vestiam fantasias. Mas quem disse que o povo ficou sem pular carnaval? Mesmo tendo que enfrentar a polícia, Mesmo tendo que enfrentar a polícia, os que não tinham direito de participar do carnaval à francesa faziam sua própria festa nas ruas."]},
{id: "1", texto: [" A deusa assume então o papel da Mãe Terrível a madrasta ou bruxa dos contos de fada Embora nenhuma das tarefas tenha sido executada sem o auxílio das forças mágicas", "ou do próprio Cupido pois os auxiliares (formigas, junco, águia e torre) simbolizam as forças interiores da alma feminina, que não tinham direito de participar do carnaval à francesa faziam sua própria festa nas ruas. Batucavam e vestiam fantasias.", "Mas quem disse que o povo ficou sem pular carnaval? Mesmo tendo que enfrentar a polícia, os que não tinham direito de participar do carnaval à francesa faziam sua própria festa nas ruas. Batucavam e vestiam fantasias.", "Eram os chamados cordões, em que entrava qualquer um e todos os tipos de música eram cantados. Uma farra, Nessa época, também apareceram os ranchos.", "Ao contrário dos cordões, eles eram grupos fechados e organizados: escolhiam um tema para desfilar e criavam fantasias e músicas ligadas a esse tema."]},
{id: "2", texto: ["Filho, pode ir, mas quando estiver distante e não mais enxergar o Pai, pare e espere! E assim seguimos caminhando, certo momento eu virei para a linha do trem e caminhei por alguns metros por ali.", "Quando ele se virou e não me viu, e era um lugar descampado, se eu estivesse atrás dele, ele iria me ver mesmo que distante, se pôs a chorar.", "Quando o avistei, balancei os braços e gritei, Filho, o Pai está aqui", "Isso parece com o que as escolas de samba fazem hoje? Pois é por aí mesmo! Os ranchos estão na origem das escolas de samba, assim como os cordões são os avós dos blocos de carnaval atuais. Dá para acreditar?", "Puxa, contar para vocês essa história só me deu mais vontade de cair na folia desde já! Então, peço licença para vestir minha fantasia e participar também dessa festa!"]},
{id: "3", texto: ["Borboleta azul raspa este céu de mansinho insegura e frágil. As Borboletas azuis nunca morrem, sempre haverá uma borboleta Azul e vai ser aquela um dia eu te dei.", "Quero asas de borboleta azul, para que eu encontre o caminho do vento o caminho da noite, a janela do tempo, o caminho de mim.", "Elas são fracas, não mais valem pra nada Borboleta azul seu choro ninguém escuta", "Animada com a chegada do Natal, Diná teve a ideia de presentear seus amigos com algo que ela mesma preparasse. Como Rex e Zíper são bem gulosos, resolveu que a surpresa seria comestível! Foi atrás de sua tia, uma velha dinossaura cozinheira de mão cheia, e arranjou uma receita rápida e fácil.", "Por muitos anos procurei atalhos para os problemas da minha vida e meus esforços foram em vão, até que chegou o dia em que percebi que estava procurando nos lugares errados, fora de mim."]},
{id: "4", texto: ["É uma história que fala de amor proibido, da falta de sorte e do destino. Cada um de nós traz consigo o seu passado, como as folhas de um livro que conhecemos de cor, mas que os amigos só conseguem ler o título.", "Estamos próximos da arte em tudo que é verdadeiro, A arte, como todo o resto, vale o que alguém está preparado a pagar por ela", "A presença dele de volta em sua vida simbolizava o retorno de uma paz profunda, a interrupção de uma dor que havia se instalado nos seus ossos.", "Quem sabe tem precisado lidar com uma baixa autoestima, ou com a autoconfiança abalada; talvez com a sensação de que precisa matar um leão por dia, ou dar murro em ponta de faca para a vida engrenar.", "É possível que venha atraindo relacionamentos nocivos, ou venha enfrentando dificuldades físicas e emocionais que se arrastam durante um longo tempo."]},
];

const letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "z", "y", "w"];


let livroEscolhido;
let paginaEscolhida;
let letraEscolhida;
let numJogadores;
let inputJogador;
let jogador1;
let jogador2;

function jogarAgora(){
   alert("Escolha um livro");
   numJogadores = document.getElementById("numJogadores").value;
   console.log(numJogadores)
   //console.log(typeof numJogadores)
   if (numJogadores == '1'){
        Jogador1 = `<p> Aposta jogador: <input id="aposta1" type="number"></p><br/>`;
        document.getElementById("apostaJogador1").innerHTML += Jogador1;
    }
    if (numJogadores == '2') {
        Jogador1 = `<p> Aposta jogador 1: <input id="aposta1" type="number"></p><br/>`;
        Jogador2 = `<p> Aposta jogador 2: <input id="aposta2" type="number"></p><br/>`;
        document.getElementById("apostaJogador1").innerHTML += Jogador1;
        document.getElementById("apostaJogador2").innerHTML += Jogador2;
    }
};

    function funcaoLivro(n){
        livroEscolhido = livro[n];
        alert("Estou sorteando uma página deste livro.");
        paginaEscolhida = (Math.floor(Math.random() * livroEscolhido.texto.length));
        letraEscolhida = letras[Math.floor(Math.random() * letras.length)]
        document.getElementById("respostaPagina").innerHTML += `<br /><p>${livroEscolhido.texto[paginaEscolhida]}</p><br />`;
        document.getElementById("respostaLetraSorteada").innerHTML = `"${letraEscolhida}"<br>`;
        document.getElementById("paginaSorteada1").innerHTML = `"Numero da página sorteada: ${paginaEscolhida + 1}"<br>`;
    }

    let apostaJogador1;
    let apostaJogador2;

     function palpite(){
        let respostaVencedor = document.getElementById("respostaVencedor"); 
        if (numJogadores == '1'){
            apostaJogador1 = Number(document.getElementById("aposta1").value); 
        } 
        if (numJogadores == '2'){
            apostaJogador1 = Number(document.getElementById("aposta1").value); 
            apostaJogador2 = Number(document.getElementById("aposta2").value); 
        }

        let vezesLetra = 0;
        [...livroEscolhido.texto[paginaEscolhida]].forEach(letra => {
            if (letra == letraEscolhida) {
                vezesLetra++;
            }
        })       
        
        console.log(apostaJogador1)
        console.log(apostaJogador2)

        if (numJogadores == '1'){
            if ( apostaJogador1 == vezesLetra){
                respostaVencedor.innerHTML= `<p> Você acertou! Parabéns jogador campo 1.</p>`;
            } else if (apostaJogador1 != vezesLetra) {
                respostaVencedor.innerHTML=`<p> Você errou! Tente novamente.</p>`;
            } 
        }

        if (numJogadores == '2'){
            if ( apostaJogador1 == vezesLetra){
                respostaVencedor.innerHTML= `<p> Você acertou! Parabéns jogador campo 1.</p>`;
            } else if (apostaJogador1 != vezesLetra) {
                respostaVencedor.innerHTML=`<p> Você errou! Tente novamente.</p>`;
            } 
            if (apostaJogador2 == vezesLetra){
                respostaVencedor.innerHTML= `<p> Você acertou! Parabéns jogador campo 2.</p>`;
            } else if (apostaJogador2 != vezesLetra) {
                respostaVencedor.innerHTML=`<p> Sem vencedor! Tente novamente.</p>`;
            } 
            if (apostaJogador1 == vezesLetra && apostaJogador2 == vezesLetra){
                respostaVencedor.innerHTML=`<p> Empate! Parabéns aos dois jogadores.</p>`;
            }
        }
        document.getElementById("vezezRealLetra").innerHTML= `A letra apareceu ${vezesLetra}`
  }

 
  function alteraCor(cor){
      return function(){
          document.body.style.backgroundColor = cor;
      }
  }
  let vermelho = alteraCor("red");
  document.getElementById("vermelho").onclick = vermelho;
  