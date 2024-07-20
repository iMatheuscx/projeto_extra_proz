// Criando um elemento h1, um título e um id para ele
const titulo = document.querySelector("title")
titulo.innerText = "Livraria Mathsix"
titulo.id = "titulo"
const tituloSite = document.createElement("h1");
tituloSite.innerText = "Livraria Mathsix - Os melhores livros em promoções!";
tituloSite.id = "tituloSite"
document.body.appendChild(tituloSite);
// Métodos aprendidos aplicados na página
const produtoAVenda = document.createElement("div");
produtoAVenda.innerHTML =
`<h2 class="livro">Box As Crônicas de Nárnia - Edição de Luxo</h2>
<p class="descricao">
  Mergulhe no mundo de Nárnia nessa nova edição de luxo, com capa dura, fitinho e lateral colorida!
</p>
<p class=preco">
  Por apenas: R$ 249,90!
  Aproveite!!!
</p>
`
const main = document.querySelector("body");
main.appendChild(produtoAVenda);
//Imagem extra adicionada
const imagemProduto = document.createElement("img");
imagemProduto.src = "https://harpercollins.com.br/cdn/shop/files/9786560050419.png";
imagemProduto.width = 300;
imagemProduto.height = 300;
imagemProduto.alt = "Imagem do box As Crônicas de Nárnia - Edição de Luxo";
produtoAVenda.appendChild(imagemProduto);
