var Enter = document.getElementById('nova-tarefa');
    Enter.addEventListener('keyup', (e) => {

    if (e.key == "Enter") {
        criarTemplate()
    }
})

function criarTemplate(){
    var modeloTemplate = document.getElementById("modeLi");
    var novoTemplate = modeloTemplate.content.cloneNode(true);
    var lista = document.getElementById("lista");
    var listaItem = novoTemplate.querySelector("li");
    var conteudo = document.getElementById("nova-tarefa");

    if (conteudo.value == ""){
        alert ("ESPAÇO VAZIO!!!")
    }
    else {
        var numeroDeItens = lista.children.length;
        if (numeroDeItens % 2 == 0){  
            listaItem.style.backgroundColor = "Pink"
        }    
        if (numeroDeItens % 3 == 0){  
            listaItem.style.backgroundColor = "aqua"
        }   
        listaItem.append(conteudo.value);
        lista.appendChild(novoTemplate);
        conteudo.value = "";
    }
}
function removerItem(elemento){

elemento.parentElement.remove();

}
