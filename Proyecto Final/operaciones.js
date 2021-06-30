function temperaturaC () {
  const temperatura =parseInt(document.getElementById('temperatura').value)
  if (temperatura > 0) {
    const resultado = (temperatura * 9 / 5) + 32
    document.getElementById('resultado').value= (temperatura*9/5)+32;
  }
}

function temperaturaF () {
  const temperatura =parseInt(document.getElementById('temperatura').value)
  if (temperatura > 0) {
    const resultado = (temperatura - 32) * 5 / 9
    document.getElementById('resultado').value= (temperatura-32)*5/9;
  }
}
function limpiaValores () {
  document.getElementById('temperatura').value = '0'
  document.getElementById('resultado').value = '0'
}
