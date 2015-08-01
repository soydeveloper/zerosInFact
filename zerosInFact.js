var n = process.argv[2];

if(n!= undefined){

    var result = 1;
    var zeros = 0;

//CALCULAMOS EL FACTORIAL DE n
    for(i=2; i<=n; i++){
        result = result * i;
    }

//MIRAMOS SI EL RESTO DE DIVIDIR ENTRE 10 ES 0.
//EN CADA ITERACION QUITAMOS UNA CIFRA DIVIDIENDO ENTRE 10 Y QUEDANDONOS CON LA PARTE ENTERA.
    while(result>10){
        if(result%10==0)
            zeros++;
        result = (result-(result%10))/10;
    }

    console.log(zeros);
}


