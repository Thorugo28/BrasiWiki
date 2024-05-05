document.addEventListener('DOMContentLoaded', (event) => {

    //Vetor com o nome dos arquivos com as imagens dos estadios
    var imagens = ['Maracana.webp', 'SaoJanuario.jpg', 'NiltonSantos.webp', 'BeiraRio.png', 'ArenadoGremio.webp', 'ArenaMRV.webp', 'Mineirao.png', 'AllianzParque.jpg', 'NeoQuimica.png ', 'Morumbis.png', 'NabiAbi.png', 'ArenaFonteNova.webp', 'Barradao.jpg', 'Castelao.jpg', 'ArenaDaBaixada.png', 'AlfredoJaconi.png', 'HeribertoHulse.png', 'ArenaPantanal.jpg', 'AntonioAccioly.jpg']; // Adicione mais imagens conforme necessário
        var indiceAtual = 0;

        //função para alterar a imagem de fundo do estádio
        function trocarImagemDeFundo() {
            var div = document.getElementById('image_bg');
            indiceAtual = (indiceAtual + 1) % imagens.length;
            div.style.backgroundImage = "url('../Estádios/" + imagens[indiceAtual] + "')";
        }

        // Troque a imagem de fundo a cada 5 segundos 
        setInterval(trocarImagemDeFundo, 5000);


        //Movimentação dos cards dos times

        function map(val, minA, maxA, minB, maxB) {
            return minB + ((val - minA) * (maxB - minB)) / (maxA - minA);
          }
          
          function Card3D(card, ev) {
            let img = card.querySelector('img');
            let imgRect = card.getBoundingClientRect();
            let width = imgRect.width;
            let height = imgRect.height;
            let mouseX = ev.offsetX;
            let mouseY = ev.offsetY;
            let rotateY = map(mouseX, 0, 180, -25, 25);
            let rotateX = map(mouseY, 0, 250, 25, -25);
            let brightness = map(mouseY, 0, 250, 1.5, 0.3);
            
            card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.2)`;
            card.style.filter = `brightness(${brightness})`;
          }
          
          var cards = document.querySelectorAll('.card');
          
          cards.forEach((card) => {
            card.addEventListener('mousemove', (ev) => {
              Card3D(card, ev);
            });
            
            card.addEventListener('mouseleave', (ev) => {
              let img = card.querySelector('img');
              
              card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
              card.style.filter = 'brightness(1)';
            });
          });
    
    });


