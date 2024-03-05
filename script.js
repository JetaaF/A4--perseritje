// form e 'if'
let dita = 1

if(dita ==1){
    console.log('e hene')
}
else if(dita == 2){
    console.log('e marte')
}
else if(dita == 3){
    console.log('e merkure')
}
else if(dita == 4){
    console.log('e ejte')
}
else if(dita == 5){
    console.log('e premte')
}
else{
    console.log('vikend')
}

let dit = 45
//qitu e switch e merr variablen qe e manipulon
switch(dit) {
    case 1:
        console.log('e hene')
        break;
    case 2:
        console.log('e merte')
        break;
    case 3:
        console.log('e merkure')
        break;
    case 4:
        console.log('e ejte')
        break;
    case 5:
        console.log('e premte')
        break;
    default:
        console.log('vikend')
        break;
}
//  tek 'switch' --default e luan rolin e 'else' ne if-function


//  ne kete rast e kemi dit=45,,
// rezultati do jet 'nuk e dim se cfare dite eshte'
switch(dit){
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log('dite e javes')
        break;
    case 6:
    case 7:
        console.log('vikend')
        break;
    default:
        console.log('nuk e dim se cfare dite eshte')
}
