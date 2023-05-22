const formatoNumero = (num) => {
  return num.toString().slice(0,5);
}

const formatoNumero1 = (num) => {
  return num.toString().slice(0,1);
}


const formatodetalle = (num) => {
  return num.toString().slice(0,11);
}


const formatocalidad= (num) => {
  return num.toString().slice(0,3);
}

export {
    formatoNumero,
    formatoNumero1,
    formatodetalle,
    formatocalidad
}



