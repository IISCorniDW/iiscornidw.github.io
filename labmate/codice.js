function verificaCodice() {
  const codiceInserito = document.getElementById('codice').value;
  const codiceCorretto = '062025'; // Modifica questo valore con il codice che desideri
  const risultato = document.getElementById('risultato');

  if (codiceInserito === codiceCorretto) {
    window.location.href = 'pagina2.html';
  } else {
    risultato.innerText = 'Codice errato, riprova!';
  }
}
