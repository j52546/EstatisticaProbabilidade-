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
 