export function formatarData(dataISOString: string) {
  // Criar um objeto Date a partir da string ISOString
  var data = new Date(dataISOString);

  // Extrair os componentes da data
  var dia = ("0" + data.getDate()).slice(-2); // Adiciona o zero à esquerda para garantir dois dígitos
  var mes = ("0" + (data.getMonth() + 1)).slice(-2); // Os meses começam em zero, então adicionamos 1
  var ano = data.getFullYear();
  var horas = ("0" + data.getHours()).slice(-2);
  var minutos = ("0" + data.getMinutes()).slice(-2);

  // Montar a string formatada
  var dataFormatada = dia + "/" + mes + "/" + ano /* + " " + horas + ":" + minutos*/;

  return dataFormatada;
}


export function formatarMoeda(valor: number) {
  // Formata o valor como moeda em real brasileiro
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
}