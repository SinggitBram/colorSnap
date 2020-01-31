alert ('How to Play' + '\n' + '1. tekan tombol start' + '\n' + '2. perhatikan kotak warna' + '\n' + '3. ketika kotak berwarna putih klik tombol stop')

const badan = document.body

badan.addEventListener('mousemove', function(event){
    const xPos = Math.round((event.clientX / window.innerWidth) * 255);
    const yPos = Math.round((event.clientY / window.innerHeight) * 255);    
    document.body.style.backgroundColor= 'rgb('+ xPos +','+ yPos +',125)'
})

let counter = 0
const warna = [
    'Maroon',
    'White',
    'Red',
    'Orange',
    'Yellow',
    'Olive',
    'White',
    'Green',
    'Purple',
    'Fuchsia',
    'Lime',
    'Teal',
    'Aqua',
    'Blue',
    'Navy',
    'Black',
    'White'
]

const kotakWarna = document.querySelector('.kotak')
const tombolMulai = document.querySelector('#tombolMulai')
const tombolStop = document.querySelector('#tombolStop')

function acakWarna() {
    let acak = Math.round(Math.random() * 17)
    kotakWarna.style.backgroundColor = warna[acak]
}
tombolMulai.addEventListener('click', function(){
    setInterval(acakWarna,600)
})

tombolStop.addEventListener('click', function(){
    if(kotakWarna.style.backgroundColor !== 'white'){
        alert(`maaf kamu kalah, score kamu adalah ${counter}`)
        counter = 1
    }else{
        counter++
        hitung.innerHTML = counter
    }
})

const hitung = document.querySelector('#counter')