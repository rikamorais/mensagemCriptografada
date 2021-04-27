function cifraDeCesar(areaText1Value){

    let caracteresSeparados = areaText1Value.split('');
    let incremento = inputCampoSelect.value;
    let cifraDeCesarCodifica = [];
  
    for(let i = 0; i < caracteresSeparados.length; i++){
      let decimalAscII = caracteresSeparados[i].charCodeAt() + incremento;
      cifraDeCesarCodifica.push(String.fromCharCode(decimalAscII))
    }
    let strCesarCodifica = cifraDeCesarCodifica.join('');
    areaText2 = strCesarCodifica; 
    
  }