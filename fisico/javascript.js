function avaliar() {

    let nome = document.getElementById("nome").value;
    let sexo = document.getElementById("sexo").value;

    let glicose = parseFloat(document.getElementById("glicose").value);
    let sistolica = parseFloat(document.getElementById("sistolica").value);
    let diastolica = parseFloat(document.getElementById("diastolica").value);
    let saturacao = parseFloat(document.getElementById("saturacao").value);
    let fc = parseFloat(document.getElementById("fc").value);

    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);
    let cintura = parseFloat(document.getElementById("cintura").value);
    let quadril = parseFloat(document.getElementById("quadril").value);

    if (!nome) {
        document.getElementById("resultado").innerText = "Preencha o nome!";
        return;
    }

    // 🧪 GLICOSE
    let glicoseClass = glicose < 140 ? "Normal" :
                       glicose < 200 ? "Pré-diabetes" : "Diabetes";

    // ❤️ PRESSÃO
    let sistolicaClass = sistolica < 130 ? "Normal" :
                         sistolica < 150 ? "Alta" : "Muito alta";

    let diastolicaClass = diastolica < 85 ? "Normal" :
                          diastolica < 100 ? "Alta" : "Muito alta";

    // 🫁 SATURAÇÃO
    let satClass = saturacao < 95 ? "Baixa" : "Normal";

    // 💓 FC
    let fcClass = fc < 100 ? "Normal" : "Alterada";

    // ⚖️ IMC
    let imc = peso / (altura * altura);
    let imcClass = "";

    if (imc < 25) imcClass = "Normal";
    else if (imc < 30) imcClass = "Sobrepeso";
    else if (imc < 35) imcClass = "Obesidade Grau 1";
    else if (imc < 40) imcClass = "Obesidade Grau 2";
    else imcClass = "Obesidade Grau 3";

    // 📏 CINTURA (RISCO)
    let riscoCintura = "";

    if (sexo == "1") {
        if (cintura < 94) riscoCintura = "Baixo";
        else if (cintura < 102) riscoCintura = "Alto";
        else riscoCintura = "Muito alto";
    } else {
        if (cintura < 80) riscoCintura = "Baixo";
        else if (cintura < 88) riscoCintura = "Alto";
        else riscoCintura = "Muito alto";
    }

    // 🔁 RELAÇÃO CINTURA/QUADRIL
    let rcq = cintura / quadril;
    let rcqClass = "";

    if (sexo == "1") {
        rcqClass = rcq < 1 ? "Baixo" : "Alto";
    } else {
        rcqClass = rcq < 0.85 ? "Baixo" : "Alto";
    }

    // ⚠️ SÍNDROME METABÓLICA (simples)
    let risco = "Baixo";

    if (glicose > 140 && sistolica > 130) {
        risco = "Médio";
    }

    if (glicose > 140 && sistolica > 130 && diastolica > 85) {
        risco = "Alto";
    }

    // 📊 RESULTADO FINAL
    document.getElementById("resultado").innerText =
        "Paciente: " + nome + "\n\n" +

        "🧪 Glicose: " + glicoseClass + "\n" +
        "❤️ PA: " + sistolicaClass + " / " + diastolicaClass + "\n" +
        "🫁 Saturação: " + satClass + "\n" +
        "💓 FC: " + fcClass + "\n\n" +

        "⚖️ IMC: " + imc.toFixed(2) + " - " + imcClass + "\n" +
        "📏 Cintura: " + riscoCintura + "\n" +
        "🔁 RCQ: " + rcq.toFixed(2) + " - " + rcqClass + "\n\n" +

        "⚠️ Risco Metabólico: " + risco;
}