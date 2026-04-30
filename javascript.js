    function avaliar() {
 // 🧑 DADOS PESSOAIS
    let nome = document.getElementById("nome").value;
    let idade = Number(document.getElementById("idade").value);
    let sexo = document.getElementById("sexo").value;

    // 🏥 PARÂMETROS CLÍNICOS
    let glicose = Number(document.getElementById("glicose").value);
    let sistolica = Number(document.getElementById("sistolica").value);
    let diastolica = Number(document.getElementById("diastolica").value);
    let saturacao = Number(document.getElementById("saturacao").value);
    let fc = Number(document.getElementById("fc").value);

    // 📏 COMPOSIÇÃO CORPORAL
    let peso = Number(document.getElementById("peso").value);
    let altura = Number(document.getElementById("altura").value);
    let cintura = Number(document.getElementById("cintura").value);
    let quadril = Number(document.getElementById("quadril").value);

    // 🏃 AVALIAÇÃO FUNCIONAL
    let tempo = Number(document.getElementById("tempo").value);
    let flex = Number(document.getElementById("flexibilidade").value);
    let direita = Number(document.getElementById("direita").value);
    let esquerda = Number(document.getElementById("esquerda").value);
    let eqD = Number(document.getElementById("equilibrioD").value);
    let eqE = Number(document.getElementById("equilibrioE").value);
    let marcha = Number(document.getElementById("marcha").value);

    // =========================
    // 🧪 CLASSIFICAÇÕES
    // =========================

    // GLICOSE
    let classGlicose = "";
    if (glicose < 140) classGlicose = "Normal";
    else if (glicose <= 200) classGlicose = "Pré-diabetes";
    else classGlicose = "Diabetes";

    // PRESSÃO
    let classSistolica = "";
    if (sistolica < 130) classSistolica = "Normal";
    else if (sistolica < 150) classSistolica = "Alta";
    else classSistolica = "Muito alta";

    let classDiastolica = "";
    if (diastolica < 85) classDiastolica = "Normal";
    else if (diastolica < 100) classDiastolica = "Alta";
    else classDiastolica = "Muito alta";

    // SATURAÇÃO
    let classSat = saturacao >= 95 ? "Normal" : "Baixa";

    // FREQUÊNCIA CARDÍACA
    let classFC = fc < 100 ? "Normal" : "Alterada";

    // IMC
    let imc = peso / (altura * altura);
    let classIMC = "";

    if (imc < 25) classIMC = "Normal";
    else if (imc < 30) classIMC = "Sobrepeso";
    else if (imc < 35) classIMC = "Obesidade Grau 1";
    else if (imc < 40) classIMC = "Obesidade Grau 2";
    else classIMC = "Obesidade Grau 3";

    // CINTURA (RISCO)
    let riscoCintura = "";

    if (sexo == "1") {
        if (cintura < 94) riscoCintura = "Baixo";
        else if (cintura < 102) riscoCintura = "Alto";
        else riscoCintura = "Muito Alto";
    } else if (sexo == "2") {
        if (cintura < 80) riscoCintura = "Baixo";
        else if (cintura < 88) riscoCintura = "Alto";
        else riscoCintura = "Muito Alto";
    }

    // RCQ
    let rcq = cintura / quadril;
    let classRCQ = "";

    if (sexo == "1") {
        classRCQ = rcq < 1 ? "Baixo" : "Alto";
    } else if (sexo == "2") {
        classRCQ = rcq < 0.85 ? "Baixo" : "Alto";
    }

    // =========================
    // 🏃 FUNCIONAL
    // =========================

    let resultadoFuncional = "\n🏃 Avaliação Funcional:\n";

    resultadoFuncional += "Flexibilidade: " + (flex > 0 ? "Boa" : "Regular") + "\n";
    resultadoFuncional += "Mobilidade Ombro D: " + (direita > 0 ? "Boa" : "Limitada") + "\n";
    resultadoFuncional += "Mobilidade Ombro E: " + (esquerda > 0 ? "Boa" : "Limitada") + "\n";
    resultadoFuncional += "Equilíbrio D: " + (eqD >= 15 ? "Bom" : "Ruim") + "\n";
    resultadoFuncional += "Equilíbrio E: " + (eqE >= 15 ? "Bom" : "Ruim") + "\n";
    resultadoFuncional += "Marcha: " + (marcha >= 20 ? "Boa" : "Baixa") + "\n";

    // =========================
    // 📊 RESULTADO FINAL
    // =========================

    let resultadoFinal = "";

    resultadoFinal += "Paciente: " + nome + "\n\n";

    resultadoFinal += "🧪 Glicose: " + classGlicose + "\n";
    resultadoFinal += "❤️ Pressão: " + classSistolica + " / " + classDiastolica + "\n";
    resultadoFinal += "🫁 Saturação: " + classSat + "\n";
    resultadoFinal += "💓 Frequência Cardíaca: " + classFC + "\n\n";

    resultadoFinal += "⚖️ IMC: " + imc.toFixed(2) + " - " + classIMC + "\n";
    resultadoFinal += "📏 Risco Cintura: " + riscoCintura + "\n";
    resultadoFinal += "🔁 RCQ: " + rcq.toFixed(2) + " - " + classRCQ + "\n";

    resultadoFinal += resultadoFuncional;

    // MOSTRAR RESULTADO
    document.getElementById("resultado").textContent = resultadoFinal;
}