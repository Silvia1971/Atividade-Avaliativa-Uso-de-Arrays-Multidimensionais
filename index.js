var item  = [];

function adiciona() 
{
    var id = document.getElementById("id");
    var desc = document.getElementById("descricao");
    var qtd = document.getElementById("qtd");
    var valor = document.getElementById("valor");
    
    var itens = [];
    itens.push(id.value);
    itens.push(desc.value);
    itens.push(qtd.value);
    itens.push(valor.value);

    item.push(itens);
    
    mostrar();
    limparTxt();
    preencheCarrinho();
}

function preencheCarrinho()
{
    var carrinho = document.getElementById("car");
    carrinho.innerHTML = item.length;
}

function mostrar()
{
    var lista = document.getElementById("lista");
    var total = 0;
    var tamanho = item.length;
    var text = "";
    var celula = "";

    text = "<ul>";
    for (row = 0; row < tamanho; row++) {
        celula = "";
        for(col = 0; col < item[row].length; col++){
        celula +=  " - " +  item[row][col]; 
        console.log(celula);
        }
        var totInd= parseFloat(item[row][2]) * parseFloat(item[row][3]);
        celula += "- Total: " + totInd;
        total += totInd;
        text += `<li>${celula}</li>`;
    }
    text += "</ul>";
    text += "<strong>Total Geral: "+total +"</strong>";

    lista.innerHTML = text;
}

function mostrarTabela()
{
    var lista = document.getElementById("lista");
    var total = 0;
    var tamanho = item.length;
    var text = "";
    var celula="";
    text = "<table>";
    
    for (row = 0; row < tamanho; row++) {
        text += "<tr>";        
        celula = "";
        for(col=0; col<item[row].length; col++){
        celula += ' - ' + item[row][col];
        console.log(celula);
        }
        var totInd= parseFloat(item[row][2]) * parseFloat(item[row][3]);
        total += totInd;
        text += "<td>" + celula + "</td>";
        text += "</tr>";
    }    
    text += "<tr><td>TOTAL: R$"+total+"</td></tr>";
    text += "</table>";

    lista.innerHTML = text;
}

function apagar()
{
    item.pop();
    mostrar();
    limparTxt();
    preencheCarrinho();
}

function limpar()
{
    item = [];
    mostrar();
    limparTxt();
    preencheCarrinho();
}

function limparTxt()
{
    var id = document.getElementById("id");
    var descricao = document.getElementById("descricao");
    var qtd = document.getElementById("qtd");
    var valor = document.getElementById("valor");

    id.value = "";
    descricao.value = "";
    qtd.value = "";
    valor.value = "";
}