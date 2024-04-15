function adicionarItemDia() {
    var lista = document.getElementById("minhaLista");
    var novoItem = document.createElement("li");
    var breakItem = document.createElement("br");
    novoItem.textContent = "Novo Item";
    lista.appendChild(novoItem);
    lista.appendChild(breakItem);
  }
  
  function removerItemDia() {
    var lista = document.getElementById("minhaLista");
    var ultimoItem = lista.lastElementChild;
    if (ultimoItem) {
      lista.removeChild(ultimoItem);
      var ultimoItem2 = lista.lastElementChild;
      lista.removeChild(ultimoItem2);
    }
  }

  function adicionarItemNoite() {
    var lista = document.getElementById("minhaLista2");
    var novoItem = document.createElement("li");
    var breakItem = document.createElement("br");
    novoItem.textContent = "Novo Item";
    lista.appendChild(novoItem);
    lista.appendChild(breakItem);
  }
  
  function removerItemNoite() {
    var lista = document.getElementById("minhaLista2");
    var ultimoItem = lista.lastElementChild;
    if (ultimoItem) {
      lista.removeChild(ultimoItem);
      var ultimoItem2 = lista.lastElementChild;
      lista.removeChild(ultimoItem2);
    }
  }