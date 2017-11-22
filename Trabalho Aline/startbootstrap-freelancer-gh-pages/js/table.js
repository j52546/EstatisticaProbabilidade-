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
    $('.fechar').on('click', function() {
        $('.entrada').val('')
        $('.campos').remove()
    })
  

    $('.myBtn').on('click', function(){
        let qtd = $('.entrada').val()
        if(qtd !== '' && qtd <= 10 && qtd > 0){
        for(let i = 0; i < qtd; i++) {
            let html = `<tr class="campos">
                <td class="xi">
                        <input class="form-control ent" type="number"/>
                    </td>
                    <td class="yi">
                        <input class="form-control ent" type="number"/>
                     </td>
                    <td class="xifi" id="xifi${i}">
    
                    </td>
                    <td class="xi2" id="xi2${i}">
    
                    </td>
                    <td class="yi2" id="yi2${i}">
                    
                    </td>
                </tr>`
            $('.body-table').append(html)
        }
    } else {
        alert('Quantidade de coluna inválida')
    }
    })


    $('.entrada').on('keyup', function(e) {
        if(e.keyCode == 13) {
            let qtd = $('.entrada').val()
            if(qtd !== '' && qtd <= 10 && qtd > 0){
            for(let i = 0; i < qtd; i++) {
                let html = `<tr class="campos">
                    <td class="xi">
                        <input class="form-control ent" type="number"/>
                    </td>
                    <td class="yi">
                        <input class="form-control ent" type="number"/>
                     </td>
                    <td class="xifi" id="xifi${i}">
    
                    </td>
                    <td class="xi2" id="xi2${i}">
    
                    </td>
                    <td class="yi2" id="yi2${i}">
                    
                    </td>
                </tr>`
                $('.body-table').append(html)
            }
        } else {
            alert('Quantidade de coluna inválida')
        }
        }
    })

    $('.btnCalcular').on('click', function() {
        let xiElement = $('.xi input')
        let yiElement = $('.yi input')
        let xi = Array()
        let yi = Array()
        
        if($('.sXi').length == 0) {
            let html = `<tr>
            <td class="sXi" id="sXi">
            
            </td>
            <td class="sXi" id="sYi"></td>
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
        let cont=0;
       for(let i = 0;i < xi.length; i++) {
           let xifi = `<span>${xi[i] * yi[i]}</span>`
           let xi2 = `<span>${Math.pow(xi[i], 2)}</span>`
           let yi2 = `<span>${Math.pow(yi[i], 2)}</span>`
           cont += Number(xi[i])
           $('#xifi' + i ).html(xifi)
           $('#xi2' + i ).html(xi2)
           $('#yi2' + i ).html(yi2)
       }
       let somaXi = `<span>${cont}</span>`
       $('#sXi').html(somaXi)
    })
   
    })
    
    
