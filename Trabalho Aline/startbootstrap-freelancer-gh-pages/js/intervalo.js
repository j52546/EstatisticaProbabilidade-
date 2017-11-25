let valoresEsquerda = 0
let valoresDireita = 0
$(function() {

    $('.limpar').hide()

    $('.limpar').bind('click', function() {
        $('.tabelaIntervalo').hide()
        $('.btnCalcularTeste').hide()
        $('.mediaAritmetica').remove()
        $('.limpar').hide()
        $('.entradaIntervalo').val('')
        $('.totalEntradas').remove()
        $('.somaFinal').remove()
                     
    })
    
    $('.tabelaIntervalo').hide()
    $('.btnCalcularTeste').hide()
    $('.entradaIntervalo').on('keydown', function(event){
        if(event.keyCode == 13 && $('.entradaEsquerda').length == 0
            && $('.entradaIntervalo').val() <= 10 && $('.entradaIntervalo').val() > 0) {

            gerarColunas($('.entradaIntervalo').val())
            $('.tabelaIntervalo').show('fast')
            $('.btnCalcularTeste').show('fast')
        }
    })

    $('.gerarIntervalos').on('click', function() {
        if($('.entradaEsquerda').length == 0 && $('.entradaIntervalo').val() <= 10 && $('.entradaIntervalo').val() > 0) {
            gerarColunas($('.entradaIntervalo').val())
            $('.tabelaIntervalo').show('fast')
            $('.btnCalcularTeste').show('fast')
        }
    })

    
    $('.btnCalcularTeste').on('click', function() {
        $('.btnCalcularTeste').hide('fast')
        $('.limpar').show('fast')
        
        valoresEsquerda = retornarValores('entradaEsquerda')
        valoresDireita = retornarValores('entradaDireita')
        valoresFi = retornarValores('entradaFi')
        calcularResultadoFinal(valoresDireita, valoresEsquerda, valoresFi)
        showModaMedianaMedia()
    })

})

function gerarColunas(qtd) {
    for( let i = 0; i < qtd; i++){
    let html = ` <tr class="totalEntradas"><td>
    <input placeholder="x" class="entradaStyle entradaEsquerda"/>----|<input placeholder="y" class="entradaStyle entradaDireita direita"/>
  </td>

  <td>
  <span class=" entradaXi" id="entradaXi${i}"/>
  
  </td>
  
  <td>
  <input class="form-control entradaFi"/>
  
  </td>

   
  <td>
      <span class=" entradaXiFi" id="entradaXiFi${i}"/>
      
  </td>
  <td>
        <span id="entradaFac${i}"></span>
  </td></tr>`

     $('.corpoIntervalo').append(html)

}
    $('.entradaEsquerda').mask('9999')
    $('.entradaDireita').mask('9999')
    

}

function retornarValores(item) {
    let valores = $('.'+item)
    let vetor = Array()

    for( let i = 0; i < valores.length; i++)  vetor.push(valores[i].value)
    return vetor
    
}

function calcularResultadoFinal(direita, esquerda, fi) {
    let totEnter = $('.totalEntradas')
    let totFi = 0
    let totXifi = 0
    for(let i = 0; i < totEnter.length; i ++) {
        let resultXi = (Number(direita[i]) + Number(esquerda[i])) / 2
        totFi += Number(fi[i])
        let resultXiFi = resultXi * Number(fi[i])
        totXifi += resultXiFi
        let htmlFac = `<span>${totFi}</span>`
        let htmlFi = `<span>${resultXi.toFixed(2)}</span>`
        let htmlXiFi = `<span>${resultXiFi.toFixed(2)}</span>`
        $('#entradaXi'+i).html(htmlFi)
        $('#entradaXiFi'+i).html(htmlXiFi)
        $('#entradaFac'+i).html(htmlFac)
        
               
    }

    let htmlFooter = `<tr class="somaFinal"><td>&Sigma;</td><td>***</td>***<td class="somaFi">${totFi}</td><td class="somaXiFi">${totXifi}</td><td>***</td></tr>`
    $('.corpoIntervalo').append(htmlFooter)
   
} 

function showModaMedianaMedia() {
    let xi = $('.somaFinal .somaFi').html()
    let xiFi = $('.somaFinal .somaXiFi').html()
    
    let html = `<h3 style="margin-top: 20px" class="mediaAritmetica">&Sigma; Xi . Fi / &Sigma; Fi = 
    ${(Number(xiFi)/Number(xi)).toFixed(2)}

    </h3>`
    $('.tabelaIntervalo').after(html)
}
