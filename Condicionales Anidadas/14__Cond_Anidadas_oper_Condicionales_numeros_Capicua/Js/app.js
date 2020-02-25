const button = document.getElementById('buttonCap');
button.addEventListener('click', capicua);

function capicua(){
    const NumeroIdentificar = Number(document.getElementById('numeroCap').value);

    let Entero1 = Math.floor(NumeroIdentificar/10);
    let decimal1 = NumeroIdentificar % 10;
    let Entero2 = Math.floor(Entero1/10);
    let decimal2 = Entero1 % 10;
    let Entero3 = Math.floor(Entero2/10);
    let decimal3 = Entero2 % 10;
    let Entero4 = Math.floor(Entero3/10);
    let decimal4 = Entero3 % 10;
    let multidecimal1 = decimal1 * 1;
    let multidecimal2 = decimal2 * 10;
    let multidecimal3 = decimal3 * 100;
    let multidecimal4 = decimal4 * 1000;
    let multInverso2digitosdig1 = decimal1 * 10;
    let multInverso2digitosdig2 = decimal2 * 1
    let MLInv3digitosDig1 = decimal1 * 100;
    let MLInv3digitosDig2 = decimal2 * 10;
    let MLInv3digitosDig3 = decimal3 * 1;
    let MlDecimal4digitos4 = decimal4 * 1;
    let MlDecimal4digitos3 = decimal3 * 10;
    let MlDecimal4digitos2 = decimal2 * 100;
    let MlDecimal4digitos1 = decimal1 * 1000;
    let sumaNormal2DIG = multidecimal1 + multidecimal2;
    let sumaInv2dig = multInverso2digitosdig1 + multInverso2digitosdig2;
    let SumaNormal3dig = sumaNormal2DIG + multidecimal3;
    let SumaInv3dig = MLInv3digitosDig1 + MLInv3digitosDig2 + MLInv3digitosDig3;
    let SumaNormal4dig = SumaNormal3dig + multidecimal4;
    let SumaINV4dig = MlDecimal4digitos1 + MlDecimal4digitos2 + MlDecimal4digitos3 + MlDecimal4digitos4;
    

    if ( NumeroIdentificar < 10){

        let Capicua = `<div class="alert alert-primary mt-2">El número no puede ser capicúa por que solo contiene una cifra</div>`
        Printzn.innerHTML = Capicua;
    } else if (NumeroIdentificar > 9 && NumeroIdentificar < 100) 
    if  (sumaNormal2DIG == sumaInv2dig){

        let Capicua = `<div class="alert alert-primary mt-2">El número inverso es ${sumaInv2dig}. El Número es capicúa</div>`
        Printzn.innerHTML = Capicua;
      
    }else {
        let Capicua = `<div class="alert alert-primary mt-2">El número inverso es ${sumaInv2dig} por lo tanto no es capicúa</div>`
        Printzn.innerHTML = Capicua;
    } else if (NumeroIdentificar > 100 && NumeroIdentificar < 1000)

    if (SumaNormal3dig == SumaInv3dig){
        let Capicua = `<div class="alert alert-primary mt-2">El número inverso es ${SumaInv3dig}. El Número es capicúa</div>`
        Printzn.innerHTML = Capicua;
    } else{
        let Capicua1 = `<div class="alert alert-primary mt-2">El número inverso es ${SumaInv3dig}. El Número es capicúa</div>`
        Printzn.innerHTML = Capicua1;
    }
    if (NumeroIdentificar > 1000 && NumeroIdentificar < 10000)
        if (SumaNormal4dig == SumaINV4dig){
            let Capicua = `<div class="alert alert-primary mt-2">El número inverso es ${SumaINV4dig}. El Número es capicúa</div>`
        Printzn.innerHTML = Capicua;
        } else {
            let Capicua = `<div class="alert alert-primary mt-2">El número inverso es ${SumaINV4dig}. El Número es capicúa</div>`
            Printzn.innerHTML = Capicua;
        }

}