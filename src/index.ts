import validator from 'validator';

let name: string = 'iago';

if( validator.isLowercase(name)){
    console.log(`A string ${name} é toda minúscula`)
}else{
    console.log(`A string ${name} não é toda minúscula`)
}
