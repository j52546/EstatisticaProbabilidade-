    /*    function criarTabela(){
           var numero = document.getElementById("n").value;
           var i;
           var linha = document.createElement("tr");
           for(i=0;i<numero;i++){
               var lina = document.createElement("td");
           }
        }
        
        document.getElementById("number").onclick = function numero(e){
           
           e.preventDefault();
        }*/
 
 $(function(){
    
    /*================== FUNÇÃO PARA ESCONDER E REMOVER BOTÕES E LINHAS ==========*/
    $('.voltar').click(function(){
        $('.btnCalcular').hide()
    })
     $('.btnCalcular').hide()
    $('.fechar').on('click', function() {
        $('.entrada').val('')
        $('.retaAjustada').remove()
        $('.campos').remove()
        $('.resultadoSomatorio').remove()
        $('.btnCalcular').hide()
       
    })
  
    /*================ CRIAÇÃO TABELA GERAR ==================================*/
    $('.myBtn').on('click', function(){
    $('.btnCalcular').show('fast')
     if($('.campos').length == 0){   
         let qtd = $('.entrada').val()
        if(qtd !== '' && qtd <= 10 && qtd > 0){
             let html = `<tr class="retaAjustada">
                              <th>Xi</th>
                              <th>Yi</th>
                              <th>XiYi</th>
                              <th>Xi²</th>
                              <th>Yi²</th>
                          </tr>`
            $('.cabecalho').append(html)
        for(let i = 0; i < qtd; i++) {
            let html_1 = `<tr class="campos">
                <td class="xi">
                        <input class="form-control ent" type="number"/>
                    </td>
                    <td class="yi">
                        <input class="form-control ent" type="number"/>
                     </td>
                    <td class="xiyi" id="xiyi${i}">
    
                    </td>
                    <td class="xi2" id="xi2${i}">
    
                    </td>
                    <td class="yi2" id="yi2${i}">
                    
                    </td>
                </tr>`
            $('.body-table').append(html_1)
        }
    } else {
        alert('Quantidade de coluna inválida')
    }}
    })

    /*======================== CRIAÇÃO TABELA ENTER =====================*/
    $('.entrada').on('keyup', function(e) {
        
        if(e.keyCode == 13 && $('.campos').length == 0) {
            $('.btnCalcular').show('fast')
            let qtd = $('.entrada').val()
            if(qtd !== '' && qtd <= 10 && qtd > 0){
                 let html = `<tr class="retaAjustada">
                              <th>Xi</th>
                              <th>Yi</th>
                              <th>XiYi</th>
                              <th>Xi²</th>
                              <th>Yi²</th>
                          </tr>`
            $('.cabecalho').append(html)
            for(let i = 0; i < qtd; i++) {
                let html_1 = `<tr class="campos">
                    <td class="xi">
                        <input class="form-control ent" type="number"/>
                    </td>
                    <td class="yi">
                        <input class="form-control ent" type="number"/>
                     </td>
                    <td class="xifi" id="xiyi${i}">
    
                    </td>
                    <td class="xi2" id="xi2${i}">
    
                    </td>
                    <td class="yi2" id="yi2${i}">
                    
                    </td>
                </tr>`
                $('.body-table').append(html_1)
            }
        } else {
            alert('Quantidade de coluna inválida')
        }
        }
    })
    
    /*================= TABELA SOMATÓRIA ========================*/
    $('.btnCalcular').on('click', function() {
        let xiElement = $('.xi input')
        let yiElement = $('.yi input')
        let xi = Array()
        let yi = Array()
        
        if($('.sXi').length == 0) {
            let html = `<tr class="resultadoSomatorio">
                <td class="sXi" id="sXi"></td>
                <td class="sYi" id="sYi"></td>
                <td class="sXiYi" id="sXiYi"></td>
                <td class="sXi2" id="sXi2"></td>
                <td class="sYi2" id="sYi2"></td>
            </tr>`
            $('.body-table').append(html)
        }
       
        for(let i = 0; i < $('.xi input').length; i++) {
            xi.push(xiElement[i].value)
            yi.push(yiElement[i].value)
        }
        
        /*=============== CALCULOS ===================*/
        let n=0
        let contXi=0
        let contYi=0
        let contXiYi=0
        let contXi2=0
        let contYi2=0
        for(let i = 0;i < xi.length; i++) {
           let xiyi = `<span>${xi[i] * yi[i]}</span>`
           let xi2 = `<span>${Math.pow(xi[i], 2)}</span>`
           let yi2 = `<span>${Math.pow(yi[i], 2)}</span>`
           n++
           contXi += Number(xi[i])
           contYi += Number(yi[i])
           contXiYi += Number(xi[i] * yi[i])
           contXi2 += Number(Math.pow(xi[i], 2))
           contYi2 += Number(Math.pow(yi[i], 2))
           $('#xiyi' + i ).html(xiyi)
           $('#xi2' + i ).html(xi2)
           $('#yi2' + i ).html(yi2)
       }
       let somaXi = `<span><b>${contXi}</b></span>`
       let somaYi = `<span><b>${contYi}</b></span>`
       let somaXiYi = `<span><b>${contXiYi}</b></span>`
       let somaXi2 = `<span><b>${contXi2}</b></span>`
       let somaYi2 = `<span><b>${contYi2}</b></span>`
       $('#sXi').html(somaXi)
       $('#sYi').html(somaYi)
       $('#sXiYi').html(somaXiYi)
       $('#sXi2').html(somaXi2)
       $('#sYi2').html(somaYi2)
      
      /*=============== CRIAÇÃO TABELA DE RESULTADOS ================*/ 
       if($('.a').length == 0){
            let html = 
                `<tr class="retaAjustada">
                    <th>A</th>
                    <th>X/N</th>
                    <th>Y/N</th>
                    <th>B</th>
                </tr>`
             $('.cabecalho1').append(html)
               
            let html1 =
                `<tr class="retaAjustada">
                    <td class="a" id="a"></td>
                    <td class="x_" id="x_"></td>
                    <td class="y_" id="y_"></td>
                    <td class="b" id="b"></td>
                </tr>`
            $('.body-table1').append(html1)
        
           /*=================== CALCULOS ===================================*/
            let A = Number((contXiYi-(contXi*contYi)) / ((n*contXi2) - (Math.pow(contXi,2))))
            let X_ = Number(contXi/n)
            let Y_ = Number(contYi/n)
            let B = Number(Y_ - A*X_)
            
            let sA = `<span>${A.toFixed(2)}</span>`
            let sX_ = `<span>${X_.toFixed(2)}</span>`
            let sY_ = `<span>${Y_.toFixed(2)}</span>`
            let sB = `<span>${B.toFixed(2)}</span>`
            $('#a').html(sA)      
            $('#x_').html(sX_)
            $('#y_').html(sY_)
            $('#b').html(sB)
        }
        
    })
})
    
    
