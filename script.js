function calcular() {
    var valor = Number(document.getElementById("valor").value);
    var assinante = Number(document.getElementById("assinante").value);
    var pagar;
    var resultado = "";
  
  
    if (assinante == 1) {
      desconto = valor * 0.20;
      pagar = valor - desconto;
      resultado = "O valor do produto de assinante premium com todos os benefícios ficará R$ " + pagar;
    }
  
   else if (assinante == 2) {
      desconto = valor * 0.20;
      pagar = (valor - desconto) + 12;
      resultado = "O valor do produto de assinante gold com todos os benefícios ficará R$ " + pagar;
    }
   
    else if (assinante == 3) {
      desconto = valor * 0.10;
      pagar = (valor - desconto) + 12;
      resultado = "O valor do produto de assinante silver com todos os benefícios ficará R$ " + pagar;
    }

     else if (assinante == 4) {
      pagar = valor + 12;
      resultado = "O valor do produto não terá benefícios e ficará R$ " + pagar;
    }
  
    else{
        resultado ="Insira uma opção válida"
    }
    document.getElementById("resultado").innerHTML = resultado;
  }
  
  
  