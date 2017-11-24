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
                                <th>QTD</th>
                                <th>Fa</th>
                                <th>Fr</th>
                                <th>Fr(%)</th>
                                <th>Fac</th>
                                <th>Fad</th>
                             </tr>`
                 $('.cabecalho2').append(html)
                 for(let i=0; i<n; i++){
                     let html1 = `<tr class="campos1">
                                    <td class ="qtd">
                                        <input class="form-control ent1" type="number"/>
                                    </td>
                                    <td class ="f">
                                        <input class="form-control ent1" type="number"/>
                                    </td>
                                    <td class ="fr" id ="fr">
                     
                                    </td>
                                    <td class ="frPorc" id ="frPorc">
                     
                                    </td>
                                    <td class ="fac" id ="fac">
                     
                                    </td>
                                    <td class ="fad" id ="fad">
                     
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
         if($('.campos1').length == 0){
             let n = $('.entrada1').val()
             if(n !== '' && n <= 10 && n > 0){
                 let html = `<tr class="retaAjustada1">
                                <th>QTD</th>
                                <th>Fa</th>
                                <th>Fr</th>
                                <th>Fr(%)</th>
                                <th>Fac</th>
                                <th>Fad</th>
                             </tr>`
                 $('.cabecalho2').append(html)
                 for(let i=0; i<n; i++){
                     let html1 = `<tr class="campos1">
                                    <td class ="qtd">
                                        <input class="form-control ent1" type="number"/>
                                    </td>
                                    <td class ="f">
                                        <input class="form-control ent1" type="number"/>
                                    </td>
                                    <td class ="fr" id ="fr">
                     
                                    </td>
                                    <td class ="frPorc" id ="frPorc">
                     
                                    </td>
                                    <td class ="fac" id ="fac">
                     
                                    </td>
                                    <td class ="fad" id ="fad">
                     
                                    </td>
                                  </tr>`
                     $('.body-table2').append(html1)
                 }
                
             }
              else{
                     alert('Quantidade de coluna inválida')
            }
         }
         }
     })
})

