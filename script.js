function formulario (){
	var usuario = document.getElementById('usuario').value
	var nome = document.getElementById('Nome').value
	var cpf = document.getElementById('cpf').value


	var linha = '<tr>';
	linha += '<td>' +usuario+ '</td>';

	linha += '<td>' +nome+ '</td>';

	linha += '<td>' +cpf+ '</td>';
	linha += '</tr>'

	tabela.innerHTML += linha;











}