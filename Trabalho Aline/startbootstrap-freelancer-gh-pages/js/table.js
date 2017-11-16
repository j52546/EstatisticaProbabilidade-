        function criarTabela(){
           var numero = document.getElementById("n").value;
           var i;
           var linha = document.createElement("tr");
           for(i=0;i<numero;i++){
               var lina = document.createElement("td");
           }
        }
        
        document.getElementById("number").onclick = function numero(e){
           
           e.preventDefault();
        }
 
 $(function(){
    $('.myBtn').on('click', function(){
        let qtd = $('.entrada').val()
        if(qtd !== '' && qtd <= 10 && qtd > 0){
        for(let i = 0; i < qtd; i++) {
            let html = `<tr>
                <td class="xi">
                    <input class="form-control" type="number"/>
                </td>
                <td class="yi">
                    <input class="form-control" type="number"/>
                 </td>
                <td>

                </td>
                <td>

                </td>
                <td>
                
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
                let html = `<tr>
                    <td class="xi">
                        <input class="form-control" type="number"/>
                    </td>
                    <td class="yi">
                        <input class="form-control" type="number"/>
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
        for(let i = 0; i < $('.xi input').length; i++) {
            xi.push(xiElement[i].value)
            yi.push(yiElement[i].value)
        }
       for(let i = 0;i < xi.length; i++) {
           let xifi = `<span>${xi[i] * yi[i]}</span>`
           let xi2 = `<span>${Math.pow(xi[i], 2)}</span>`
           let yi2 = `<span>${Math.pow(yi[i], 2)}</span>`
           $('#xifi' + i ).html(xifi)
           $('#xi2' + i ).html(xi2)
           $('#yi2' + i ).html(yi2)
           
           
       }

    })
 })