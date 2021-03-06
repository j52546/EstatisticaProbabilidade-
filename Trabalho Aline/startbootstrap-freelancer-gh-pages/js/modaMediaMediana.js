$(document).ready(function() {
		$('#idValores').on('keyup', function() {
			if($('#idValores').val().match(/[a-z\s\t\f]/gi)) {
				let x = $('#idValores').val()
				x = x.split('')
				x.splice(x.length - 1, 1)
				x = x.join('')
				$('#idValores').val(x)
			}
			
		})

		$('.limparMedia').bind('click', function() {
			limparResultados()
		})

		$('#idValores').on('keyup', function(e) {
			if(e.keyCode == 13) {
				calcularMediaModaMediana()   	
			
			}
		
		})

		$('.calcularMedia').bind('click', function() {
			calcularMediaModaMediana()
		})
	})


function calcularMediaModaMediana() {
	                         //MÉDIA
							 let vet = $('#idValores').val()
							 vet = vet.split(',')
			 
							 let med = 0
							 for(let i in vet) {
								 if(!isNaN(vet[i])) {
									 med += Number(vet[i])
									 
								 }
							 }
							 for(let i = 0;i < vet.length; i++) {
								 if(vet[i] == '' || vet[i] == ',') {
									 vet.splice(i, 1)
									 i--
								 }
			 
							 }
						 $('#idValores').val(vet.sort((a,b)=>a-b))
						 let media = (med/vet.length).toFixed(2)
						 
						 //MODA
						 let result = new Set()
						 vet.map((v, i, a) => {
							 let count = 0
							 for(let index = i + 1; index < a.length; index++) {
								 if(v == a[index]) {
									 count++
								 }
							 }
							 if(!Object.keys(result).includes(v)) {
								 result[v] = count
							 }
							 
							 
						 })
						 let maior = 0
						 for(let i in result) {
							 if(result[i] > maior) {
								 maior = result[i]
							 }
						 }
						 let resultado = []
						 for(let moda in result) {
							 if(maior == result[moda]) {
								 resultado.push(moda)
							 }
						 }
						 let moda = resultado
						 
						 //MEDIANA
						 let mediana = 0
						 
						 if(vet.sort((a,b)=>a-b).length % 2 == 0) {
							 let x = vet[(vet.length / 2) - 1]
							 let y = vet[(vet.length/2)]
							 mediana = (parseInt(x) + parseInt(y)) / 2
						 } else {
							 mediana = vet[Math.floor((vet.sort((a,b)=>a-b).length / 2))]
						 }
			 
						 let resultadoHTML = `<div class="resultadoMediaModaMediana"><h3>Mediana: ${mediana}</h3><br />
											 <h3>Moda: ${moda}</h3><br />
											 <h3>Média: ${media}</h3><br /></div>`
			 
						 if($('.resultadoMediaModaMediana').length == 1) {
							 $('.resultadoMediaModaMediana').remove()
							 $('#idValores').after(resultadoHTML)
						 } else {
							 $('#idValores').after(resultadoHTML)
						 }
						 
}

function limparResultados() {
	$('#idValores').val('')
	$('.resultadoMediaModaMediana').slideUp('fast')
}