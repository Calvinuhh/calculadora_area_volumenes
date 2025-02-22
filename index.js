document.querySelector("#btn").addEventListener("click", () => {
  const selectedOption = document.querySelector("#opciones").value;
  const contenedor_principal = document.querySelector("#contenedor_principal");
  const contenedor_valores = document.querySelector("#contenedor_valores");
  const contenedor_resultados = document.querySelector(
    "#contenedor_resultados"
  );

  if (selectedOption === "rectangulo") {
    contenedor_principal.style.display = "none";

    const title_div = document.createElement("div");
    title_div.style.display = "flex";
    title_div.style.width = "400px";
    title_div.style.margin = "0 auto";

    const back_btn = document.createElement("button");
    back_btn.textContent = "<==";
    back_btn.style.fontFamily = "Franklin Gothic Medium";

    back_btn.addEventListener("click", () => {
      contenedor_valores.style.display = "none";
      contenedor_principal.style.display = "flex";
      contenedor_valores.innerHTML = "";
    });

    const titulo = document.createElement("h2");
    createTitle(titulo, "Rectangulo");

    title_div.appendChild(back_btn);
    title_div.appendChild(titulo);

    const base = document.createElement("label");
    createLabel(base, "base", "Base: ");

    const baseInput = document.createElement("input");
    createInput(baseInput, "base", "base");

    const altura = document.createElement("label");
    createLabel(altura, "altura", "Altura: ");

    const alturaInput = document.createElement("input");
    createInput(alturaInput, "altura", "altura");

    const ancho = document.createElement("label");
    createLabel(ancho, "ancho", "Ancho: ");

    const anchoInput = document.createElement("input");
    createInput(anchoInput, "ancho", "ancho");

    const btn = document.createElement("button");
    btn.style.width = "120px";
    btn.style.margin = "0 auto";
    btn.textContent = "Calcular";
    btn.style.marginTop = "50px";
    btn.style.fontFamily = "Franklin Gothic Medium";
    btn.style.fontSize = "20px";
    btn.style.height = "30px";

    btn.addEventListener("click", () => {
      if (baseInput.value !== "" && alturaInput.value !== "") {
        contenedor_valores.style.display = "none";
        contenedor_resultados.style.display = "flex";

        const back_btn = document.createElement("button");
        back_btn.textContent = "<==";
        back_btn.style.fontFamily = "Franklin Gothic Medium";
        back_btn.style.fontSize = "20px";
        back_btn.style.width = "100px";
        back_btn.style.margin = "0 auto";
        back_btn.style.marginBottom = "100px";
        back_btn.addEventListener("click", () => {
          contenedor_resultados.style.display = "none";
          contenedor_valores.style.display = "none";
          contenedor_principal.style.display = "flex";
          contenedor_valores.innerHTML = "";
          contenedor_resultados.innerHTML = "";
        });

        const perimetro = document.createElement("h2");
        createTitleResult(
          perimetro,
          "Perimetro: ",
          perimetroCuadrado(baseInput.value, alturaInput.value)
        );
        const area = document.createElement("h2");
        createTitleResult(
          area,
          "Area: ",
          areaCuadrado(baseInput.value, alturaInput.value)
        );
        const ancho = document.createElement("h2");
        createTitleResult(
          ancho,
          "Volumen: ",
          volumenCuadrado(baseInput.value, alturaInput.value, anchoInput.value)
        );

        contenedor_resultados.appendChild(back_btn);
        contenedor_resultados.appendChild(perimetro);
        contenedor_resultados.appendChild(area);
        contenedor_resultados.appendChild(ancho);
      }
    });

    contenedor_valores.appendChild(title_div);
    contenedor_valores.appendChild(base);
    contenedor_valores.appendChild(baseInput);
    contenedor_valores.appendChild(altura);
    contenedor_valores.appendChild(alturaInput);
    contenedor_valores.appendChild(ancho);
    contenedor_valores.appendChild(anchoInput);
    contenedor_valores.appendChild(btn);

    contenedor_valores.style.display = "flex";
    contenedor_valores.style.flexDirection = "column";
    contenedor_valores.style.gap = "20px";
  } else if (selectedOption === "cuadrado") {
    contenedor_principal.style.display = "none";

    const title_div = document.createElement("div");
    title_div.style.display = "flex";
    title_div.style.width = "400px";
    title_div.style.margin = "0 auto";

    const back_btn = document.createElement("button");
    back_btn.textContent = "<==";
    back_btn.style.fontFamily = "Franklin Gothic Medium";
    back_btn.addEventListener("click", () => {
      contenedor_valores.style.display = "none";
      contenedor_principal.style.display = "flex";
      contenedor_valores.innerHTML = "";
    });

    const titulo = document.createElement("h2");
    createTitle(titulo, "Cuadrado");

    title_div.appendChild(back_btn);
    title_div.appendChild(titulo);

    const lado = document.createElement("label");
    createLabel(lado, "lado", "Lado: ");

    const ladoInput = document.createElement("input");
    createInput(ladoInput, "lado", "lado");

    const btn = document.createElement("button");
    btn.style.width = "120px";
    btn.style.margin = "0 auto";
    btn.textContent = "Calcular";
    btn.style.marginTop = "50px";
    btn.style.fontFamily = "Franklin Gothic Medium";
    btn.style.fontSize = "20px";
    btn.style.height = "30px";

    btn.addEventListener("click", () => {
      if (ladoInput.value !== "") {
        contenedor_valores.style.display = "none";
        contenedor_resultados.style.display = "flex";

        const back_btn = document.createElement("button");
        back_btn.textContent = "<==";
        back_btn.style.fontFamily = "Franklin Gothic Medium";
        back_btn.style.fontSize = "20px";
        back_btn.style.width = "100px";
        back_btn.style.margin = "0 auto";
        back_btn.style.marginBottom = "100px";
        back_btn.addEventListener("click", () => {
          contenedor_resultados.style.display = "none";
          contenedor_valores.style.display = "none";
          contenedor_principal.style.display = "flex";
          contenedor_valores.innerHTML = "";
          contenedor_resultados.innerHTML = "";
        });

        const perimetro = document.createElement("h2");
        createTitleResult(
          perimetro,
          "Perimetro: ",
          calcularCuadrado("perimetro", ladoInput.value)
        );
        const area = document.createElement("h2");
        createTitleResult(
          area,
          "Area: ",
          calcularCuadrado("area", ladoInput.value)
        );

        const ancho = document.createElement("h2");
        createTitleResult(
          ancho,
          "Volumen: ",
          calcularCuadrado("volumen", ladoInput.value)
        );

        contenedor_resultados.appendChild(back_btn);
        contenedor_resultados.appendChild(perimetro);
        contenedor_resultados.appendChild(area);
        contenedor_resultados.appendChild(ancho);
      }
    });
    contenedor_valores.appendChild(title_div);
    contenedor_valores.appendChild(lado);
    contenedor_valores.appendChild(ladoInput);
    contenedor_valores.appendChild(btn);

    contenedor_valores.style.display = "flex";
    contenedor_valores.style.flexDirection = "column";
    contenedor_valores.style.gap = "20px";
  } else if (selectedOption === "triangulo") {
    contenedor_principal.style.display = "none";

    const title_div = document.createElement("div");
    title_div.style.display = "flex";
    title_div.style.width = "400px";
    title_div.style.margin = "0 auto";

    const back_btn = document.createElement("button");
    back_btn.textContent = "<==";
    back_btn.style.fontFamily = "Franklin Gothic Medium";
    back_btn.addEventListener("click", () => {
      contenedor_valores.style.display = "none";
      contenedor_principal.style.display = "flex";
      contenedor_valores.innerHTML = "";
    });

    const titulo = document.createElement("h2");
    createTitle(titulo, "Triangulo");

    title_div.appendChild(back_btn);
    title_div.appendChild(titulo);

    const select = document.createElement("select");
    select.setAttribute("name", "triangulo");
    select.style = `
          width: 300px;
          height: 30px;
          margin: 0 auto;
          margin-bottom: 20px;
          margin-top: 100px;
          font-family: 'Franklin Gothic Medium';
          font-size: 18px;
    `;

    const option = document.createElement("option");
    option.setAttribute("disabled", "");
    option.setAttribute("selected", "");
    option.textContent = "Selecciona una opcion";

    const perimetro = document.createElement("option");
    perimetro.value = "perimetro";
    perimetro.textContent = "Petrimetro";

    const area = document.createElement("option");
    area.value = "area";
    area.textContent = "Area";

    select.appendChild(option);
    select.appendChild(perimetro);
    select.appendChild(area);

    const btn = document.createElement("button");
    btn.textContent = "Elegir";
    btn.style = `
    width: 100px;
    margin: 0 auto;
    font-family: 'Franklin Gothic Medium';
    height: 30px;
    font-size: 18px;
    `;

    btn.addEventListener("click", () => {
      if (select.value === "perimetro") {
        contenedor_valores.innerHTML = "";

        const contenedor = document.createElement("div");
        contenedor.style = `
        display: flex; 
        flex-direction: column;
        margin-top: 50px;
        `;

        const contenedorInputs = document.createElement("div");
        contenedorInputs.style = `
        display: flex;
        width: 400px;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
        margin: 0 auto;
        `;

        const back_btn = document.createElement("button");
        back_btn.textContent = "<==";
        back_btn.style.fontFamily = "Franklin Gothic Medium";
        back_btn.style = `
         width: 100px;
         margin: 0 auto;
         height: 30px;
         font-size: 20px;
         margin-bottom: 50px;
        `;

        back_btn.addEventListener("click", () => {
          contenedor_valores.style.display = "none";
          contenedor_principal.style.display = "flex";
          contenedor_valores.innerHTML = "";
        });

        const lado1 = document.createElement("input");
        const lado2 = document.createElement("input");
        const lado3 = document.createElement("input");
        lado1.setAttribute("type", "number");
        lado2.setAttribute("type", "number");
        lado3.setAttribute("type", "number");
        lado1.setAttribute("min", "0");
        lado2.setAttribute("min", "0");
        lado3.setAttribute("min", "0");
        lado1.setAttribute("step", "any");
        lado2.setAttribute("step", "any");
        lado3.setAttribute("step", "any");

        contenedorInputs.appendChild(lado1);
        contenedorInputs.appendChild(lado2);
        contenedorInputs.appendChild(lado3);

        const titulo = document.createElement("h2");
        titulo.style = `
        font-family: 'Franklin Gothic Medium';
        margin: 0 auto;
        margin-bottom: 50px;
        `;
        titulo.textContent = "Ingresa el valor de los 3 lados";

        const btn = document.createElement("button");
        btn.style.width = "120px";
        btn.style.margin = "0 auto";
        btn.textContent = "Calcular";
        btn.style.marginTop = "50px";
        btn.style.fontFamily = "Franklin Gothic Medium";
        btn.style.fontSize = "20px";
        btn.style.height = "30px";

        btn.addEventListener("click", () => {
          if (lado1.value !== "" && lado2.value !== "" && lado3.value !== "") {
            contenedor_valores.style.display = "none";
            contenedor_resultados.style.display = "flex";

            const back_btn = document.createElement("button");
            back_btn.textContent = "<==";
            back_btn.style.fontFamily = "Franklin Gothic Medium";
            back_btn.style.fontSize = "20px";
            back_btn.style.width = "100px";
            back_btn.style.margin = "0 auto";
            back_btn.style.marginBottom = "100px";
            back_btn.addEventListener("click", () => {
              contenedor_resultados.style.display = "none";
              contenedor_valores.style.display = "none";
              contenedor_principal.style.display = "flex";
              contenedor_valores.innerHTML = "";
              contenedor_resultados.innerHTML = "";
            });

            const perimetro = document.createElement("h2");
            createTitleResult(
              perimetro,
              "Perimetro: ",
              petrimetroTriangulo(
                Number(lado1.value),
                Number(lado2.value),
                Number(lado3.value)
              )
            );

            contenedor_resultados.appendChild(back_btn);
            contenedor_resultados.appendChild(perimetro);
          }
        });

        contenedor.appendChild(back_btn);
        contenedor.appendChild(titulo);
        contenedor.appendChild(contenedorInputs);
        contenedor.appendChild(btn);

        contenedor_valores.appendChild(contenedor);
      } else if (select.value === "area") {
        contenedor_valores.innerHTML = "";

        const contenedor = document.createElement("div");
        contenedor.style = `
        display: flex; 
        flex-direction: column;
        margin-top: 50px
        `;

        const base = document.createElement("label");
        createLabel(base, "base", "Base: ");

        const baseInput = document.createElement("input");
        createInput(baseInput, "base", "base");

        const altura = document.createElement("label");
        createLabel(altura, "altura", "Altura: ");

        const alturaInput = document.createElement("input");
        createInput(alturaInput, "altura", "altura");

        const back_btn = document.createElement("button");
        back_btn.textContent = "<==";
        back_btn.style.fontFamily = "Franklin Gothic Medium";
        back_btn.style = `
         width: 100px;
         margin: 0 auto;
         height: 30px;
         font-size: 20px;
         margin-bottom: 50px;
        `;

        back_btn.addEventListener("click", () => {
          contenedor_valores.style.display = "none";
          contenedor_principal.style.display = "flex";
          contenedor_valores.innerHTML = "";
        });

        const btn = document.createElement("button");
        btn.style.width = "120px";
        btn.style.margin = "0 auto";
        btn.textContent = "Calcular";
        btn.style.marginTop = "50px";
        btn.style.fontFamily = "Franklin Gothic Medium";
        btn.style.fontSize = "20px";
        btn.style.height = "30px";

        btn.addEventListener("click", () => {
          if (baseInput.value !== "" && alturaInput.value !== "") {
            contenedor_valores.style.display = "none";
            contenedor_resultados.style.display = "flex";

            const back_btn = document.createElement("button");
            back_btn.textContent = "<==";
            back_btn.style.fontFamily = "Franklin Gothic Medium";
            back_btn.style.fontSize = "20px";
            back_btn.style.width = "100px";
            back_btn.style.margin = "0 auto";
            back_btn.style.marginBottom = "100px";
            back_btn.addEventListener("click", () => {
              contenedor_resultados.style.display = "none";
              contenedor_valores.style.display = "none";
              contenedor_principal.style.display = "flex";
              contenedor_valores.innerHTML = "";
              contenedor_resultados.innerHTML = "";
            });

            const area = document.createElement("h2");
            createTitleResult(
              area,
              "Area: ",
              areaTriangulo(baseInput.value, alturaInput.value)
            );

            contenedor_resultados.appendChild(back_btn);
            contenedor_resultados.appendChild(area);
          }
        });

        contenedor.appendChild(back_btn);
        contenedor.appendChild(base);
        contenedor.appendChild(baseInput);
        contenedor.appendChild(altura);
        contenedor.appendChild(alturaInput);
        contenedor.appendChild(btn);
        contenedor_valores.appendChild(contenedor);
      }
    });

    contenedor_valores.appendChild(title_div);
    contenedor_valores.appendChild(select);
    contenedor_valores.appendChild(btn);

    contenedor_valores.style.display = "flex";
    contenedor_valores.style.flexDirection = "column";
    contenedor_valores.style.gap = "20px";
  }
});

function createLabel(element, forAttribute, textContent) {
  element.setAttribute("for", forAttribute);
  element.textContent = textContent;
  element.style.textAlign = "center";
  element.style.fontFamily = "Franklin Gothic Medium";
  element.style.fontSize = "20px";
  element.style.marginTop = "50px";
}

function createInput(element, id, name) {
  element.setAttribute("type", "number");
  element.setAttribute("name", name);
  element.setAttribute("id", id);
  element.setAttribute("min", "0");
  element.setAttribute("step", "any");
  element.style.margin = "0 auto";
  element.style.width = "200px";
  element.style.fontFamily = "Franklin Gothic Medium";
  element.style.height = "20px";
}

function createTitle(element, text) {
  element.textContent = text;
  element.style.margin = "0 auto";
  element.style.fontFamily = "Franklin Gothic Medium";
}

function createTitleResult(element, text, result) {
  element.style.fontFamily = "Franklin Gothic Medium";
  element.style.margin = "0 auto";
  element.style.marginBottom = "50px";
  element.textContent = `${text} ${result}`;
}

function perimetroCuadrado(base, altura) {
  return base * 2 + altura * 2;
}

function areaCuadrado(base, altura) {
  return base * altura;
}

function volumenCuadrado(base, altura, ancho) {
  return base * altura * ancho;
}

function calcularCuadrado(operacion, lado) {
  if (operacion === "perimetro") return lado * 4;
  if (operacion === "area") return lado * lado;
  if (operacion === "volumen") return lado * lado * lado;
}

function petrimetroTriangulo(lado1, lado2, lado3) {
  return lado1 + lado2 + lado3;
}

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
