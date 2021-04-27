let selectValue = document.querySelector('#select');
let letOptionEscolha = document.querySelector('#optionEscolha');
let campoSelect = document.querySelector('#campoSelect');
let areaText1 = document.querySelector('#textArea1');
let areaText1Value = areaText1.value;
areaText1.placeholder = `Digite aqui seu texto`;
let areaText2 = document.querySelector('#textArea2');
let radioCodificar = document.querySelector('#btnRadioCodificar');
let radioDecodificar = document.querySelector('#btnRadioDecodificar');
let divContainer = document.querySelector('#container');
let botaoCodificar = document.querySelector('#codificar')
let botaoDecodificar = document.querySelector('#decodificar')


// ---- INÍCIO BOTÕES CODIFICAR/DECODIFICAR -------------
botaoCodificar.style = `
  display: none;
`;
botaoDecodificar.style = `
  display: none;
`;

botaoCodificar.addEventListener('click', function(event){
  codificaTexto();
  event.preventDefault();

  if (areaText1.value == ''){
    alert('Digite um texto.');
    areaText1.focus();
  }
});

botaoDecodificar.addEventListener('click', function(event){
  decodificaTexto();
  event.preventDefault();
})
// ---- FIM BOTÕES CODIFICAR/DECODIFICAR -------------


//  ------------- INÍCIO BOTÕES RADIO ---------------
radioCodificar.addEventListener('click', function(){
  if (selectValue.value == 'optionEscolha'){
    alert('Escolha uma codificação');
    botaoDecodificar.style = `
    display: none;
  `;
  botaoCodificar.style = `
    display: none;
  `;

  radioCodificar.checked = false;
  radioDecodificar.checked = false;

  }
  else {
    botaoDecodificar.style = `
      display: none;
    `;
    botaoCodificar.style = `
      display: flex;
    `;
  }



});

radioDecodificar.addEventListener('click', function(){
  if (selectValue.value == 'optionEscolha'){
    alert('Escolha uma codificação');
    botaoCodificar.style = `
      display: none;
    `;
    botaoDecodificar.style = `
      display: none;
    `;
    
    btnRadioDecodificar.checked = false;
  }
  else {
    botaoCodificar.style = `
      display: none;
    `;
    botaoDecodificar.style = `
      display: flex;
    `;
    
  }

});
//  ------------- FIM BOTÕES RADIO ---------------

// -------- INÍCIO OPTION CIFRA DE CESAR ---------------------
selectValue.addEventListener('change', function() {
  if (selectValue.value == 'optionCifraDeCesar'){
      let inputCampoSelect = document.createElement('input');
      campoSelect.appendChild(inputCampoSelect);

      inputCampoSelect.id='inputCifraCesar';
      inputCampoSelect.placeholder = 'incremento';
      inputCampoSelect.style = `
        width: 80px;
        height: 30px;
        border-radius: 10px;
        display: block;
        margin: 10px 0;
        text.align: center;
        border-color: #252a34;
      `;   
      botaoCodificar.style = `
        display: none;
      `;
      botaoDecodificar.style = `
        display: none
      `;
      

      // let onClickBotaoCodificar = document.createAttribute("onclick");
      // onClickBotaoCodificar.value = "cifraDeCesar(areaText1Value)";
      // botaoCodificar.setAttributeNode(onClickBotaoCodificar);
  }
  else if(selectValue.value == 'optionBase64'){
    removeInput = document.querySelector('#inputCifraCesar');
    removeInput.remove();
    
    botaoCodificar.style = `
    display: none;
  `;
  botaoDecodificar.style = `
    display: none;
  `;
    
  }
  else if(selectValue.value == 'optionEscolha'){
      removeinput1 = document.querySelector('#inputCifraCesar');
      removeinput1.remove();

      botaoCodificar.style = `
        display: none;
      `;
      botaoDecodificar.style = `
        display: none;
      `;
  }
});
// -------- FIM OPTION CIFRA DE CESAR ---------------------


// -------- INÍCIO CODIFICA TEXTO -----------------
function codificaTexto(){
  let caracteresSeparados = areaText1.value.split('');
  
  if (selectValue.value == 'optionBase64'){
    let textoNormal1 = areaText1.value;
    let textoBase64 = btoa(textoNormal1);
    areaText2.innerText = textoBase64;
  }
  else if (selectValue.value == 'optionCifraDeCesar'){
    let incremento = inputCifraCesar.value;
    cifraDeCesarCodifica = [];

    if (incremento == ''){
      alert("Digite o incremento.");
      inputCifraCesar.focus();
    }

    for(let i = 0; i < caracteresSeparados.length; i++) {
        let decimalAscII = caracteresSeparados[i].charCodeAt()+parseInt(incremento);
        cifraDeCesarCodifica.push(String.fromCharCode(decimalAscII));
    }
    let strCesarCodificada = cifraDeCesarCodifica.join('')
    areaText2.innerText = strCesarCodificada;
  }
  else {
    alert('Escolha uma opção');
  }
}
// -------- FIM CODIFICA TEXTO -----------------



// -------- INÍCIO DECODIFICA TEXTO -----------------
function decodificaTexto(){

    let caracteresSeparados = areaText1.value.split('');
    if (selectValue.value == 'optionBase64'){
      let textoNormal2 = areaText1.value;
        let deBase64 = atob(textoNormal2);
        areaText2.innerText = deBase64;
    }
    else if (selectValue.value == 'optionCifraDeCesar'){
      let incremento = inputCifraCesar.value;
      cifraDeCesarCodifica = [];
    
      for(let i = 0; i < caracteresSeparados.length; i++) {
          let decimalAscII = caracteresSeparados[i].charCodeAt()-parseInt(incremento);
          cifraDeCesarCodifica.push(String.fromCharCode(decimalAscII));
      }
      let strCesarCodificada = cifraDeCesarCodifica.join('')
      areaText2.innerText = strCesarCodificada;
    }
    else {
      alert('Escolha uma opção');
    }


}
// -------- FIM DECODIFICA TEXTO -----------------


//-------------- BASE64--------------------------------------
// let string = "DevPleno"
// // Convertendo para Base64
// let emBase64 = btoa(string)
// console.log(emBase64) // Saída: "RGV2UGxlbm8="
// // Voltando para string
// let deBase64 = atob(emBase64)
// console.log(deBase64) // Outputs: "DevPleno"
//-------------- BASE64--------------------------------------