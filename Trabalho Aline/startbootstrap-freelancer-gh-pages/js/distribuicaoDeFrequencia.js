$(function(){
   
    /*================== FUNÇÃO PARA ESCONDER E REMOVER BOTÕES E LINHAS ==========*/
    $('.voltar1').click(function(){
        $('.btnCalcular1').hide()
    })
    $('.btnCalcular1').hide()
    $('.fechar1').on('click',function(){ 
        $('.entrada1').val('')
        $('.retaAjustada1').remove()
        $('.campos1').remove()
        $('.resultadoSomatorio1').remove()
        $('.btnCalcular1').hide()
    })
    
     /*================ CRIAÇÃO TABELA GERAR ==================================*/
     $('.myBtn1').on('click',function (){
         $('.btnCalcular1').show('fast')
         if($('.campos1').length == 0){
             let n = $('.entrada1').val()
             if(n !== '' && n <= 10 && n > 0){
                 let html = `<tr class="retaAjustada1">
                                <th>Elementos</th>
                                <th>Fa</th>
                                <th>Fr</th>
                                <th>Fr(%)</th>
                                <th>Fac</th>
                                <th>Fad</th>
                             </tr>`
                 $('.cabecalho2').append(html)
                 for(let i=0; i<n; i++){
                     let html1 = `<tr class="campos1">
                                    <td class ="elementos">
                                        <input class="form-control ent1"/>
                                    </td>
                                    <td class ="f">
                                        <input class="form-control ent1" type="number"/>
                                    </td>
                                   <td class="fr" id ="fr${i}">
                     
                                    </td>
                                    <td class="frPorc" id="frPorc${i}">
                     
                                    </td>
                                    <td class="fac" id="fac${i}">
                     
                                    </td>
                                    <td class="fad" id="fad${i}">
                     
                                    </td>
                                  </tr>`
                     $('.body-table2').append(html1)
                 }
                
             }
              else{
                     alert('Quantidade de coluna inválida')
            }
         }
     })  
     
     /*======================== CRIAÇÃO TABELA ENTER =====================*/
     $('.entrada1').on('keyup',function(e){
         if(e.keyCode == 13 && $('.campos1').length == 0){
              $('.btnCalcular1').show('fast')
             let n = $('.entrada1').val()
             if(n !== '' && n <= 10 && n > 0){
                 let html = `<tr class="retaAjustada1">
                                <th>Elementos</th>
                                <th>Fa</th>
                                <th>Fr</th>
                                <th>Fr(%)</th>
                                <th>Fac</th>
                                <th>Fad</th>
                             </tr>`
                 $('.cabecalho2').append(html)
                 for(let i=0; i<n; i++){
                     let html1 = `<tr class="campos1">
                                    <td class="elementos">
                                        <input class="form-control ent1" type="number"/>
                                    </td>
                                    <td class="f">
                                        <input class="form-control ent1" type="number"/>
                                    </td>
                                    <td class="fr" id="fr${i}">
                     
                                    </td>
                                    <td class="frPorc" id="frPorc${i}">
                     
                                    </td>
                                    <td class="fac" id="fac${i}">
                     
                                    </td>
                                    <td class="fad" id="fad${i}">
                     
                                    </td>
                                  </tr>`
                     $('.body-table2').append(html1)
                 }
                
             }
              else{
                     alert('Quantidade de coluna inválida')
            }
         }
     })
     
      /*================= TABELA SOMATÓRIA ========================*/
      $('.btnCalcular1').on('click',function(){
          let fElement = $('.f input')
          let fa = Array()
          
          if($('.sF').length == 0){
              let html = `<tr class="resultadoSomatorio1">
                                <td class="sElementos" id="sElementos">Total</td>
                                <td class="sF" id="sF"></td>
                                <td class="sFr" id="sFr"></td>
                                <td class="sFrPorc" id="sFrPorc"></td>
                                <td class="sFac" id="sFac"> ----- </td>
                                <td class="sFad" id="sFad"> ----- </td>
                          </tr>`
              $('.body-table2').append(html)
          }
          
          for(let i=0; i<$('.f input').length; i++){
              fa.push(fElement[i].value)
          }
          
        /*=============== CALCULOS ===================*/
        let contF = 0
        let contFr = 0
        let contFrPorc = 0
        
        /*======================== Somatorio de FA e FAC ======================*/
        for(let i=0; i<fa.length; i++){
            contF += Number(fa[i])
            let fac = `<span>${contF}</span>`
            $('#fac' + i).html(fac)
        }  
        let somaF = `<span><b>${contF}</b></span>`
        $('#sF').html(somaF)
        
        /*================ FAD  FR e FR(%) e Somatórios ===============================*/
        let contF1 = contF
        
        for(let i=0; i<fa.length; i++){
            if(i == 0){
                 let fad = `<span>${contF1}</span>`
                 $('#fad' + i).html(fad)
             }
             else {
                contF1 -= fa[i-1]
                let fad = `<span>${contF1}</span>`
                $('#fad' + i).html(fad)
             }
                let fr = fa[i] / contF
                let frPorc = fr * 100
                contFr += Number(fa[i] / contF)
                contFrPorc += Number(frPorc)
               
                $('#fr' + i).html(fr.toFixed(2))
                $('#frPorc' + i).html(frPorc.toFixed(2) + ' %')
            
             
    }
        let somaFr = `<span><b>${contFr}</b></span>`
        let somaFrPorc = `<span><b>${Math.ceil(contFrPorc)} %</b></span>`
        $('#sFr').html(somaFr)
        $('#sFrPorc').html(somaFrPorc)
      
      
      })
})

