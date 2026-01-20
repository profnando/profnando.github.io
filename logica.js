let bancoSlides = [];

fetch("bd.json")
  .then(res => res.json())
  .then(dados => {
    bancoSlides = dados;
    carregarPorTag("introducao a biologia", "lista-bio-geral");
  });

function criarCard(imgNome, titulo, descricao, link, idconteiner) {
  const col = document.createElement("div");
  col.className = "col-md-4 col-sm-6 mt-3 mb-3 g-3 cartao";

  col.innerHTML = `
    <div class="card h-100" style="width: 18rem;">
      <img src="img/thumb/${imgNome}" class="card-img-top">
      <div class="card-body d-flex flex-column">
        <h5 class="card-title">${titulo}</h5>
        <p class="card-text">${descricao}</p>
        <a target="_blank" href="${link}" class="btn btn-primary mt-auto">Go</a>
      </div>
    </div>
  `;

  document.getElementById(idconteiner).appendChild(col);
}

function carregarPorTag(tag, idContainer) {
  const container = document.getElementById(idContainer);
  container.innerHTML = "";

  const filtrados = bancoSlides.filter(slide =>
    slide.tags.includes(tag)
  );

  filtrados.forEach(slide => {
    criarCard(
      slide.img,
      slide.titulo,
      slide.descricao || "",
      slide.link,
      idContainer
    );
  });
}
