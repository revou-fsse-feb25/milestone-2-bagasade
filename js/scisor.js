//Ambil random komputer
function getPilihanComputer() {
    const comp = Math.random();
    if(comp < 0.34) return 'batu';
    if(comp >= 0.34 && comp < 0.67) return 'gunting';
    return 'kertas';
}


//atur rule nya
function getHasil(comp, player) {
    if(player == comp)return 'DRAW'
    if(player == 'batu') return (comp == 'gunting')?'WIN':'LOSE';
    if(player == 'kertas') return (comp == 'batu')?'WIN':'LOSE';
    if(player == 'gunting') return (comp == 'batu')?'LOSE':'WIN';
}

const pilihan = document.querySelectorAll('li img');
pilihan.forEach(function(pil){
    pil.addEventListener('click', function(){
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className;
        const hasil = getHasil(pilihanComputer, pilihanPlayer);
        const imgComputer = document.querySelector('.img-komputer')
        imgComputer.setAttribute('src', '../assets/' + pilihanComputer + '.png');

        const info = document.querySelector('.info');
        info.innerHTML = hasil;
    })
})
