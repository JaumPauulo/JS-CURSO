function leftZero (num) {    //Funçao para adicionar um 0 a esquerda dos segundos no obj Date
    return num >= 10 ? num : `0${num}`;
}

function formataData(data){
    const dia = leftZero(data.getDate());
    const mes = leftZero(data.getMonth() + 1);
    const ano = leftZero(data.getFullYear());
    const hora = leftZero(data.getHours());
    const min = leftZero(data.getMinutes());
    const seg = leftZero(data.getSeconds());

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`
}

const data = new Date();
const BrData = formataData(data);
console.log(BrData);
