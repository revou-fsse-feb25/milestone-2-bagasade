//Ambil random komputer
function getComputerChoice() {
    const comp = Math.random();
    if(comp < 0.34) return 'rock';
    if(comp >= 0.34 && comp < 0.67) return 'scissor';
    return 'paper';
}


//atur rule nya
function getResult(comp, player) {
    if(player == comp)return 'DRAW';
    let result = '';
    switch(player){
        case 'rock':
            switch(comp) {
                case 'paper':
                    result = 'LOSE';
                    break;
                case 'scissor':
                    result = 'WIN';
                    break;
            }
    }

    switch(player) {
        case 'paper':
            switch(comp) {
                case 'rock':
                    result = 'WIN';
                    break;
                case 'scissor':
                    result = 'LOSE';
                    break;
            }
    }

    switch(player) {
        case 'scissor':
            switch(comp) {
                case 'rock':
                    result = 'LOSE';
                    break;
                case 'paper':
                    result = 'WIN';
                    break;
            }
            break;
    }
    return result;
}
//     if(player == 'rock') return (comp == 'scissor')?'WIN':'LOSE';
//     if(player == 'paper') return (comp == 'rock')?'WIN':'LOSE';
//     if(player == 'scissor') return (comp == 'rock')?'LOSE':'WIN';
// }

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const computerChoice = getComputerChoice();
        const playerChoice = pil.className;
        const result = getResult(computerChoice, playerChoice);
        const imgComputer = document.querySelector('.img-komputer')
        imgComputer.setAttribute('src', '../assets/' + computerChoice + '.png');

        const info = document.querySelector('.info');
        info.innerHTML = result;
    })
})
