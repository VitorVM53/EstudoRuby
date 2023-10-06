function ordenaTermos(str1,str2){ // põe os termos do polin sequencia, ex: 9cd+3bc => 3bc+9cd
    let letrasA = str1.replace(/[0-9,-]/g, '');
    let letrasB = str2.replace(/[0-9,-]/g, '');
    return letrasA.localeCompare(letrasB);
}

function ordenaString(str) { // ordena a parte literal de um termo, ex: 5cda => 5acd
    const letras = str.split('');
    const letrasOrdenadas = letras.sort();
    const stringOrdenada = letrasOrdenadas.join('');
    return stringOrdenada;
}

function coeficiente(str) { // retorna o coeficiente de um termo, ex: 10ax = > 10
   let coeficiente = str.replace(/[^0-9,-]/g, '');
   if(coeficiente==''){
    coeficiente = '1';
   }
   return parseInt(coeficiente);    
}

function parteLiteral(str) { // retorna a parte literal de um termo, ex: 10ax = > ax
    let literais = ordenaString(str.replace(/[0-9,-]/g, ''));
    return literais;
}

function poliArray(str) { //transforma um polinomio (string) em um array
    let termosAux = str.replace(/-/g, "=-")  //para o sinal - não desaparecer do coeficiente negativo   
    let termos = termosAux.split(/[+,=]/); //transformando em array
    for(let i=0; i<termos.length; i++) {  
    termos[i]=termos[i].replace(/\s/g,'') // tirando possíveis entradas vazias da string $EVITAERRO
    }
    if(termos[0]==''){ // caso primeiro termo seja negativo, vai corrigir o array termos[0] ser vazio
    let termosAux2 = termos.shift();
    }
    return termos;
}

function converteString(arr) { //transforma um array em string novamente
    let aux = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i]=='0'){
            aux=aux+1;
        }
    }
    if(aux == arr.length){
        let st='0';
        return st
    } else {
        let semZeros = arr.filter(s => s!='0'); //remove todos as entradas nulas do array
        if(parteLiteral(semZeros[0])==''){
            let termoInd = semZeros.shift();
            semZeros.push(termoInd);
        }
        let aux2 = semZeros.join('+');
        let st = aux2.replaceAll("+-","-") 
        return st    
    }
}

function reduzPolinomio(str) {

    let termos = poliArray(str)
    let novosTermos = termos

    for (let i = 0; i < termos.length; i++) {
        let coefI = coeficiente(termos[i])
        let varI = parteLiteral(termos[i]);
        for(let j=0; j<termos.length;j++){
            if(i<j){
                let varJ = parteLiteral(termos[j]);
                let coefJ = coeficiente(termos[j]); 
                if(varJ==varI){
                    coefI += coefJ
                    if(coefI!=0){
                        termos[i]= coefI+varJ}
                    else {
                        termos[i]= '0'
                    }
                    novosTermos[j]='0'
                }   
            }    
        }
    }
    novosTermos.sort(ordenaTermos);   
    return converteString(novosTermos);
}

let p = '7bcd+12-67y+212adf-12dcb+17cdb-300afd+12xy-x'
console.log(reduzPolinomio(p))