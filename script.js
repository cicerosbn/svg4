/* =====================================================
   🔹 REFERÊNCIAS
===================================================== */

const torre = document.getElementById("torre");
const apto = document.getElementById("apto");
const form = document.getElementById("consultaForm");
const resultado = document.getElementById("resultado");

const cardTipoConsulta = document.getElementById("cardTipoConsulta");
const cardConsulta = document.getElementById("cardConsulta");
const cardMapaPesquisa = document.getElementById("cardMapaPesquisa");
const cardLocalizacao = document.getElementById("cardLocalizacao");

const btnConsultaTorre = document.getElementById("btnConsultaTorre");
const btnPesquisarMapa = document.getElementById("btnPesquisarMapa");
const btnRetornar = document.getElementById("btnRetornar");
const containerRetornar = document.getElementById("containerRetornar");

const feedbackMapaErro = document.getElementById("feedbackMapaErro");

const mapaConsultaWrapper = document.getElementById("mapaConsultaWrapper");
const cardMapaPesquisaWrapper = cardMapaPesquisa.querySelector(".mapa-wrapper");
const svgMapa = document.getElementById("svgMapa");

const tooltip = document.getElementById("tooltipVaga");

/* =====================================================
   🔹 ESTADO
===================================================== */

function setState(state) {

  cardTipoConsulta.classList.add("hidden");
  cardConsulta.classList.add("hidden");
  cardMapaPesquisa.classList.add("hidden");
  cardLocalizacao.classList.add("hidden");

  if (state === "HOME") {
    cardTipoConsulta.classList.remove("hidden");
    containerRetornar.classList.add("hidden");
  }

  if (state === "CONSULTA") {
    cardConsulta.classList.remove("hidden");
    containerRetornar.classList.remove("hidden");
  }

  if (state === "MAPA") {
    cardMapaPesquisa.classList.remove("hidden");
    containerRetornar.classList.remove("hidden");
    moverMapaParaPesquisa();
  }
}

/* =====================================================
   🔹 MOVER MAPA ENTRE CARDS
===================================================== */

function moverMapaParaConsulta() {
  mapaConsultaWrapper.appendChild(svgMapa);
}

function moverMapaParaPesquisa() {
  cardMapaPesquisaWrapper.appendChild(svgMapa);
}

/* =====================================================
   🔹 RESET
===================================================== */

function resetarMapa() {
  svgMapa.querySelectorAll("[id^='vaga']").forEach(el => {
    el.style.fill = "";
    el.style.opacity = "";
    el.classList.remove("vaga-hover");
  });

  feedbackMapaErro.classList.add("hidden");
}

function limparSelecaoMapa() {
  if (vagaSelecionadaMapa) {
    vagaSelecionadaMapa.style.fill = "";
    vagaSelecionadaMapa.style.opacity = "";
    vagaSelecionadaMapa = null;
  }
  tooltip.classList.add("hidden");
}

function limparConsultaVisual() {
  resultado.innerHTML = "";
  resetarMapa();
  limparSelecaoMapa();
  cardLocalizacao.classList.add("hidden");
}

function resetApplication() {
  torre.value = "";
  apto.innerHTML = '<option value="">Selecione</option>';
  apto.disabled = true;
  limparConsultaVisual();
  moverMapaParaPesquisa();
  setState("HOME");
}

/* =====================================================
   🔹 LISTENERS DE MODO
===================================================== */

btnConsultaTorre.addEventListener("click", () => {
  setState("CONSULTA");
});

btnPesquisarMapa.addEventListener("click", () => {
  setState("MAPA");
});

btnRetornar.addEventListener("click", () => {
  resetApplication();
});

/* =====================================================
   🔹 DADOS
===================================================== */

const apartamentos = (() => {
  const a = [];
  for (let i = 1; i <= 8; i++) a.push(String(i));
  for (let andar = 1; andar <= 17; andar++)
    for (let f = 1; f <= 8; f++)
      a.push(`${andar}${String(f).padStart(2, "0")}`);
  return a;
})();

const vagasPorApartamento = {
	
/* TORRE 1*/
"1-2":    { vaga: 372, tipo: "Padrão", area: "10,35" },
"1-3":    { vaga: 384, tipo: "Padrão", area: "10,35" },
"1-6":    { vaga: 397, tipo: "Padrão", area: "10,35" },
"1-7":    { vaga: 424, tipo: "Grande", area: "12,50" },

"1-102":  { vaga: 371, tipo: "Padrão", area: "10,35" },
"1-103":  { vaga: 383, tipo: "Padrão", area: "10,35" },
"1-106":  { vaga: 396, tipo: "Padrão", area: "10,35" },
"1-107":  { vaga: 423, tipo: "Grande", area: "12,50" },

"1-202":  { vaga: 370, tipo: "Padrão", area: "10,35" },
"1-203":  { vaga: 382, tipo: "Padrão", area: "10,35" },
"1-206":  { vaga: 421, tipo: "Grande", area: "12,50" },
"1-207":  { vaga: 422, tipo: "Grande", area: "12,50" },

"1-302":  { vaga: 369, tipo: "Grande", area: "12,50" },
"1-303":  { vaga: 381, tipo: "Padrão", area: "10,35" },
"1-306":  { vaga: 420, tipo: "Grande", area: "12,50" },
"1-307":  { vaga: 395, tipo: "Padrão", area: "10,35" },

"1-402":  { vaga: 368, tipo: "Grande", area: "12,50" },
"1-403":  { vaga: 380, tipo: "Padrão", area: "10,35" },
"1-406":  { vaga: 419, tipo: "Grande", area: "12,50" },
"1-407":  { vaga: 394, tipo: "Padrão", area: "10,35" },

"1-502":  { vaga: 399, tipo: "Padrão", area: "10,35" },
"1-503":  { vaga: 379, tipo: "Padrão", area: "10,35" },
"1-506":  { vaga: 418, tipo: "Grande", area: "12,50" },
"1-507":  { vaga: 393, tipo: "Padrão", area: "10,35" },

"1-602":  { vaga: 398, tipo: "Padrão", area: "10,35" },
"1-603":  { vaga: 378, tipo: "Padrão", area: "10,35" },
"1-606":  { vaga: 417, tipo: "Grande", area: "12,50" },
"1-607":  { vaga: 392, tipo: "Padrão", area: "10,35" },

"1-702":  { vaga: 11,  tipo: "Padrão", area: "10,35" },
"1-703":  { vaga: 377, tipo: "Padrão", area: "10,35" },
"1-706":  { vaga: 416, tipo: "Grande", area: "12,50" },
"1-707":  { vaga: 391, tipo: "Padrão", area: "10,35" },

"1-802":  { vaga: 12,  tipo: "Padrão", area: "10,35" },
"1-803":  { vaga: 376, tipo: "Padrão", area: "10,35" },
"1-806":  { vaga: 415, tipo: "Grande", area: "12,50" },
"1-807":  { vaga: 390, tipo: "Padrão", area: "10,35" },

"1-902":  { vaga: 13,  tipo: "Padrão", area: "10,35" },
"1-903":  { vaga: 375, tipo: "Padrão", area: "10,35" },
"1-906":  { vaga: 414, tipo: "Grande", area: "12,50" },
"1-907":  { vaga: 389, tipo: "Padrão", area: "10,35" },

"1-1002": { vaga: 14,  tipo: "Padrão", area: "10,35" },
"1-1003": { vaga: 374, tipo: "Padrão", area: "10,35" },
"1-1006": { vaga: 413, tipo: "Grande", area: "12,50" },
"1-1007": { vaga: 388, tipo: "Padrão", area: "10,35" },
"1-1008": { vaga: 347, tipo: "PCD", area: "15,50" },

"1-1102": { vaga: 15,  tipo: "Padrão", area: "10,35" },
"1-1103": { vaga: 373, tipo: "Padrão", area: "10,35" },
"1-1106": { vaga: 412, tipo: "Grande", area: "12,50" },
"1-1107": { vaga: 340, tipo: "Padrão", area: "10,35" },
"1-1108": { vaga: 348, tipo: "PCD", area: "15,50" },

"1-1202": { vaga: 16,  tipo: "Padrão", area: "10,35" },
"1-1203": { vaga: 339, tipo: "Grande", area: "12,50" },
"1-1206": { vaga: 411, tipo: "Grande", area: "12,50" },
"1-1207": { vaga: 341, tipo: "Padrão", area: "10,35" },
"1-1208": { vaga: 349, tipo: "PCD", area: "15,50" },

"1-1302": { vaga: 17,  tipo: "Padrão", area: "10,35" },
"1-1303": { vaga: 338, tipo: "Grande", area: "12,50" },
"1-1306": { vaga: 410, tipo: "Grande", area: "12,50" },
"1-1307": { vaga: 342, tipo: "Padrão", area: "10,35" },
"1-1308": { vaga: 350, tipo: "PCD", area: "15,50" },

"1-1402": { vaga: 18,  tipo: "Padrão", area: "10,35" },
"1-1403": { vaga: 337, tipo: "Grande", area: "12,50" },
"1-1406": { vaga: 409, tipo: "Grande", area: "12,50" },
"1-1407": { vaga: 343, tipo: "Padrão", area: "10,35" },
"1-1408": { vaga: 364, tipo: "PCD", area: "15,50" },

"1-1502": { vaga: 19,  tipo: "Padrão", area: "10,35" },
"1-1503": { vaga: 336, tipo: "Grande", area: "12,50" },
"1-1506": { vaga: 387, tipo: "Padrão", area: "10,35" },
"1-1507": { vaga: 344, tipo: "Padrão", area: "10,35" },
"1-1508": { vaga: 365, tipo: "PCD", area: "15,50" },

"1-1602": { vaga: 20,  tipo: "Padrão", area: "10,35" },
"1-1603": { vaga: 335, tipo: "Grande", area: "12,50" },
"1-1606": { vaga: 386, tipo: "Padrão", area: "10,35" },
"1-1607": { vaga: 345, tipo: "Padrão", area: "10,35" },
"1-1608": { vaga: 366, tipo: "PCD", area: "15,50" },

"1-1702": { vaga: 21,  tipo: "Padrão", area: "10,35" },
"1-1703": { vaga: 334, tipo: "Grande", area: "12,50" },
"1-1706": { vaga: 385, tipo: "Padrão", area: "10,35" },
"1-1707": { vaga: 346, tipo: "Padrão", area: "10,35" },
"1-1708": { vaga: 367, tipo: "PCD", area: "15,50" },
  
/* TORRE 2*/
"2-2":    { vaga: 164, tipo: "Padrão", area: "10,35" },
"2-3":    { vaga: 302, tipo: "Padrão", area: "10,35" },
"2-6":    { vaga: 320, tipo: "Grande", area: "12,50" },
"2-7":    { vaga: 333, tipo: "Grande", area: "12,50" },

"2-102":  { vaga: 163, tipo: "Padrão", area: "10,35" },
"2-103":  { vaga: 301, tipo: "Padrão", area: "10,35" },
"2-106":  { vaga: 319, tipo: "Grande", area: "12,50" },
"2-107":  { vaga: 332, tipo: "Grande", area: "12,50" },

"2-202":  { vaga: 162, tipo: "Padrão", area: "10,35" },
"2-203":  { vaga: 300, tipo: "Padrão", area: "10,35" },
"2-206":  { vaga: 318, tipo: "Grande", area: "12,50" },
"2-207":  { vaga: 331, tipo: "Grande", area: "12,50" },

"2-302":  { vaga: 161, tipo: "Padrão", area: "10,35" },
"2-303":  { vaga: 299, tipo: "Padrão", area: "10,35" },
"2-306":  { vaga: 317, tipo: "Grande", area: "12,50" },
"2-307":  { vaga: 330, tipo: "Grande", area: "12,50" },

"2-402":  { vaga: 160, tipo: "Padrão", area: "10,35" },
"2-403":  { vaga: 298, tipo: "Padrão", area: "10,35" },
"2-406":  { vaga: 316, tipo: "Grande", area: "12,50" },
"2-407":  { vaga: 329, tipo: "Grande", area: "12,50" },

"2-502":  { vaga: 159, tipo: "Padrão", area: "10,35" },
"2-503":  { vaga: 297, tipo: "Padrão", area: "10,35" },
"2-506":  { vaga: 315, tipo: "Grande", area: "12,50" },
"2-507":  { vaga: 328, tipo: "Grande", area: "12,50" },

"2-602":  { vaga: 158, tipo: "Padrão", area: "10,35" },
"2-603":  { vaga: 296, tipo: "Padrão", area: "10,35" },
"2-606":  { vaga: 314, tipo: "Grande", area: "12,50" },
"2-607":  { vaga: 327, tipo: "Grande", area: "12,50" },

"2-702":  { vaga: 157, tipo: "Padrão", area: "10,35" },
"2-703":  { vaga: 295, tipo: "Padrão", area: "10,35" },
"2-706":  { vaga: 313, tipo: "Grande", area: "12,50" },
"2-707":  { vaga: 326, tipo: "Grande", area: "12,50" },

"2-802":  { vaga: 156, tipo: "Padrão", area: "10,35" },
"2-803":  { vaga: 294, tipo: "Padrão", area: "10,35" },
"2-806":  { vaga: 312, tipo: "Grande", area: "12,50" },
"2-807":  { vaga: 325, tipo: "Grande", area: "12,50" },

"2-902":  { vaga: 155, tipo: "Padrão", area: "10,35" },
"2-903":  { vaga: 293, tipo: "Padrão", area: "10,35" },
"2-906":  { vaga: 311, tipo: "Grande", area: "12,50" },
"2-907":  { vaga: 324, tipo: "Grande", area: "12,50" },

"2-1002": { vaga: 154, tipo: "Padrão", area: "10,35" },
"2-1003": { vaga: 292, tipo: "Padrão", area: "10,35" },
"2-1006": { vaga: 310, tipo: "Grande", area: "12,50" },
"2-1007": { vaga: 323, tipo: "Grande", area: "12,50" },

"2-1102": { vaga: 153, tipo: "Padrão", area: "10,35" },
"2-1103": { vaga: 291, tipo: "Padrão", area: "10,35" },
"2-1106": { vaga: 309, tipo: "Grande", area: "12,50" },
"2-1107": { vaga: 322, tipo: "Grande", area: "12,50" },
"2-1108": { vaga: 278, tipo: "PCD",    area: "15,50" },

"2-1202": { vaga: 152, tipo: "Padrão", area: "10,35" },
"2-1203": { vaga: 290, tipo: "Padrão", area: "10,35" },
"2-1206": { vaga: 308, tipo: "Grande", area: "12,50" },
"2-1207": { vaga: 321, tipo: "Grande", area: "12,50" },
"2-1208": { vaga: 279, tipo: "PCD",    area: "15,50" },

"2-1302": { vaga: 151, tipo: "Padrão", area: "10,35" },
"2-1303": { vaga: 289, tipo: "Padrão", area: "10,35" },
"2-1306": { vaga: 307, tipo: "Grande", area: "12,50" },
"2-1307": { vaga: 169, tipo: "Grande", area: "12,50" },
"2-1308": { vaga: 280, tipo: "PCD",    area: "15,50" },

"2-1402": { vaga: 150, tipo: "Padrão", area: "10,35" },
"2-1403": { vaga: 288, tipo: "Padrão", area: "10,35" },
"2-1406": { vaga: 306, tipo: "Grande", area: "12,50" },
"2-1407": { vaga: 168, tipo: "Padrão", area: "10,35" },
"2-1408": { vaga: 281, tipo: "PCD",    area: "15,50" },

"2-1502": { vaga: 149, tipo: "Padrão", area: "10,35" },
"2-1503": { vaga: 287, tipo: "Padrão", area: "10,35" },
"2-1506": { vaga: 305, tipo: "Grande", area: "12,50" },
"2-1507": { vaga: 167, tipo: "Padrão", area: "10,35" },
"2-1508": { vaga: 282, tipo: "PCD",    area: "15,50" },

"2-1602": { vaga: 148, tipo: "Padrão", area: "10,35" },
"2-1603": { vaga: 286, tipo: "Padrão", area: "10,35" },
"2-1606": { vaga: 304, tipo: "Padrão", area: "10,35" },
"2-1607": { vaga: 166, tipo: "Padrão", area: "10,35" },
"2-1608": { vaga: 283, tipo: "PCD",    area: "15,50" },

"2-1702": { vaga: 147, tipo: "Padrão", area: "10,35" },
"2-1703": { vaga: 285, tipo: "Padrão", area: "10,35" },
"2-1706": { vaga: 303, tipo: "Padrão", area: "10,35" },
"2-1707": { vaga: 165, tipo: "Padrão", area: "10,35" },
"2-1708": { vaga: 284, tipo: "PCD",    area: "18,50" },

/* TORRE 3*/
"3-2":    { vaga: 235, tipo: "Padrão", area: "10,35" },
"3-3":    { vaga: 124, tipo: "Grande", area: "12,50" },
"3-6":    { vaga: 253, tipo: "Padrão", area: "10,35" },
"3-7":    { vaga: 129, tipo: "Padrão", area: "10,35" },

"3-102":  { vaga: 236, tipo: "Padrão", area: "10,35" },
"3-103":  { vaga: 125, tipo: "Grande", area: "12,50" },
"3-106":  { vaga: 254, tipo: "Padrão", area: "10,35" },
"3-107":  { vaga: 130, tipo: "Padrão", area: "10,35" },

"3-202":  { vaga: 237, tipo: "Padrão", area: "10,35" },
"3-203":  { vaga: 126, tipo: "Grande", area: "12,50" },
"3-206":  { vaga: 255, tipo: "Padrão", area: "10,35" },
"3-207":  { vaga: 131, tipo: "Padrão", area: "10,35" },

"3-302":  { vaga: 238, tipo: "Padrão", area: "10,35" },
"3-303":  { vaga: 127, tipo: "Grande", area: "12,50" },
"3-306":  { vaga: 256, tipo: "Padrão", area: "10,35" },
"3-307":  { vaga: 132, tipo: "Padrão", area: "10,35" },

"3-402":  { vaga: 239, tipo: "Padrão", area: "10,35" },
"3-403":  { vaga: 128, tipo: "Grande", area: "12,50" },
"3-406":  { vaga: 257, tipo: "Padrão", area: "10,35" },
"3-407":  { vaga: 133, tipo: "Padrão", area: "10,35" },

"3-502":  { vaga: 240, tipo: "Padrão", area: "10,35" },
"3-503":  { vaga: 222, tipo: "Padrão", area: "10,35" },
"3-506":  { vaga: 258, tipo: "Padrão", area: "10,35" },
"3-507":  { vaga: 134, tipo: "Padrão", area: "10,35" },

"3-602":  { vaga: 241, tipo: "Padrão", area: "10,35" },
"3-603":  { vaga: 223, tipo: "Padrão", area: "10,35" },
"3-606":  { vaga: 259, tipo: "Padrão", area: "10,35" },
"3-607":  { vaga: 135, tipo: "Padrão", area: "10,35" },

"3-702":  { vaga: 242, tipo: "Grande", area: "12,50" },
"3-703":  { vaga: 224, tipo: "Padrão", area: "10,35" },
"3-706":  { vaga: 260, tipo: "Padrão", area: "10,35" },
"3-707":  { vaga: 136, tipo: "Padrão", area: "10,35" },

"3-802":  { vaga: 243, tipo: "Grande", area: "12,50" },
"3-803":  { vaga: 225, tipo: "Padrão", area: "10,35" },
"3-806":  { vaga: 261, tipo: "Padrão", area: "10,35" },
"3-807":  { vaga: 137, tipo: "Padrão", area: "10,35" },

"3-902":  { vaga: 244, tipo: "Grande", area: "12,50" },
"3-903":  { vaga: 226, tipo: "Padrão", area: "10,35" },
"3-906":  { vaga: 262, tipo: "Padrão", area: "10,35" },
"3-907":  { vaga: 138, tipo: "Padrão", area: "10,35" },

"3-1002": { vaga: 245, tipo: "Grande", area: "12,50" },
"3-1003": { vaga: 227, tipo: "Padrão", area: "10,35" },
"3-1006": { vaga: 263, tipo: "Padrão", area: "10,35" },
"3-1007": { vaga: 139, tipo: "Padrão", area: "10,35" },

"3-1102": { vaga: 246, tipo: "Grande", area: "12,50" },
"3-1103": { vaga: 228, tipo: "Padrão", area: "10,35" },
"3-1106": { vaga: 264, tipo: "Padrão", area: "10,35" },
"3-1107": { vaga: 140, tipo: "Padrão", area: "10,35" },
"3-1108": { vaga: 271, tipo: "PCD",    area: "18,50" },

"3-1202": { vaga: 247, tipo: "Grande", area: "12,50" },
"3-1203": { vaga: 229, tipo: "Padrão", area: "10,35" },
"3-1206": { vaga: 265, tipo: "Padrão", area: "10,35" },
"3-1207": { vaga: 141, tipo: "Padrão", area: "10,35" },
"3-1208": { vaga: 272, tipo: "PCD",    area: "15,50" },

"3-1302": { vaga: 248, tipo: "Grande", area: "12,50" },
"3-1303": { vaga: 230, tipo: "Padrão", area: "10,35" },
"3-1306": { vaga: 266, tipo: "Padrão", area: "10,35" },
"3-1307": { vaga: 142, tipo: "Padrão", area: "10,35" },
"3-1308": { vaga: 273, tipo: "PCD",    area: "15,50" },

"3-1402": { vaga: 249, tipo: "Grande", area: "12,50" },
"3-1403": { vaga: 231, tipo: "Padrão", area: "10,35" },
"3-1406": { vaga: 267, tipo: "Padrão", area: "10,35" },
"3-1407": { vaga: 143, tipo: "Padrão", area: "10,35" },
"3-1408": { vaga: 274, tipo: "PCD",    area: "15,50" },

"3-1502": { vaga: 250, tipo: "Grande", area: "12,50" },
"3-1503": { vaga: 232, tipo: "Padrão", area: "10,35" },
"3-1506": { vaga: 268, tipo: "Padrão", area: "10,35" },
"3-1507": { vaga: 144, tipo: "Padrão", area: "10,35" },
"3-1508": { vaga: 275, tipo: "PCD",    area: "15,50" },

"3-1602": { vaga: 251, tipo: "Padrão", area: "10,35" },
"3-1603": { vaga: 233, tipo: "Padrão", area: "10,35" },
"3-1606": { vaga: 269, tipo: "Padrão", area: "10,35" },
"3-1607": { vaga: 145, tipo: "Padrão", area: "10,35" },
"3-1608": { vaga: 276, tipo: "PCD",    area: "15,50" },

"3-1702": { vaga: 252, tipo: "Padrão", area: "10,35" },
"3-1703": { vaga: 234, tipo: "Padrão", area: "10,35" },
"3-1706": { vaga: 270, tipo: "Padrão", area: "10,35" },
"3-1707": { vaga: 146, tipo: "Paralela", area: "12,19" },
"3-1708": { vaga: 277, tipo: "PCD",    area: "15,50" },  


/* TORRE 4*/
"4-2":    { vaga: 189, tipo: "Padrão", area: "10,35" },
"4-3":    { vaga: 79,  tipo: "Padrão", area: "10,35" },
"4-6":    { vaga: 102, tipo: "Padrão", area: "10,35" },
"4-7":    { vaga: 207, tipo: "Padrão", area: "10,35" },

"4-102":  { vaga: 190, tipo: "Padrão", area: "10,35" },
"4-103":  { vaga: 80,  tipo: "Padrão", area: "10,35" },
"4-106":  { vaga: 103, tipo: "Padrão", area: "10,35" },
"4-107":  { vaga: 208, tipo: "Padrão", area: "10,35" },

"4-202":  { vaga: 191, tipo: "Padrão", area: "10,35" },
"4-203":  { vaga: 81,  tipo: "Padrão", area: "10,35" },
"4-206":  { vaga: 104, tipo: "Padrão", area: "10,35" },
"4-207":  { vaga: 209, tipo: "Padrão", area: "10,35" },

"4-302":  { vaga: 192, tipo: "Padrão", area: "10,35" },
"4-303":  { vaga: 82,  tipo: "Padrão", area: "10,35" },
"4-306":  { vaga: 105, tipo: "Padrão", area: "10,35" },
"4-307":  { vaga: 210, tipo: "Padrão", area: "10,35" },

"4-402":  { vaga: 193, tipo: "Padrão", area: "10,35" },
"4-403":  { vaga: 83,  tipo: "Padrão", area: "10,35" },
"4-406":  { vaga: 106, tipo: "Padrão", area: "10,35" },
"4-407":  { vaga: 211, tipo: "Padrão", area: "10,35" },

"4-502":  { vaga: 194, tipo: "Padrão", area: "10,35" },
"4-503":  { vaga: 84,  tipo: "Padrão", area: "10,35" },
"4-506":  { vaga: 107, tipo: "Padrão", area: "10,35" },
"4-507":  { vaga: 212, tipo: "Padrão", area: "10,35" },

"4-602":  { vaga: 195, tipo: "Padrão", area: "10,35" },
"4-603":  { vaga: 85,  tipo: "Padrão", area: "10,35" },
"4-606":  { vaga: 108, tipo: "Padrão", area: "10,35" },
"4-607":  { vaga: 213, tipo: "Padrão", area: "10,35" },

"4-702":  { vaga: 196, tipo: "Padrão", area: "10,35" },
"4-703":  { vaga: 86,  tipo: "Padrão", area: "10,35" },
"4-706":  { vaga: 109, tipo: "Padrão", area: "10,35" },
"4-707":  { vaga: 214, tipo: "Padrão", area: "10,35" },

"4-802":  { vaga: 197, tipo: "Padrão", area: "10,35" },
"4-803":  { vaga: 87,  tipo: "Padrão", area: "10,35" },
"4-806":  { vaga: 110, tipo: "Padrão", area: "10,35" },
"4-807":  { vaga: 215, tipo: "Padrão", area: "10,35" },

"4-902":  { vaga: 198, tipo: "Padrão", area: "10,35" },
"4-903":  { vaga: 88,  tipo: "Padrão", area: "10,35" },
"4-906":  { vaga: 111, tipo: "Padrão", area: "10,35" },
"4-907":  { vaga: 216, tipo: "Padrão", area: "10,35" },

"4-1002": { vaga: 199, tipo: "Padrão", area: "10,35" },
"4-1003": { vaga: 95,  tipo: "Padrão", area: "10,35" },
"4-1006": { vaga: 112, tipo: "Padrão", area: "10,35" },
"4-1007": { vaga: 217, tipo: "Padrão", area: "10,35" },

"4-1102": { vaga: 200, tipo: "Padrão", area: "10,35" },
"4-1103": { vaga: 96,  tipo: "Padrão", area: "10,35" },
"4-1106": { vaga: 113, tipo: "Padrão", area: "10,35" },
"4-1107": { vaga: 218, tipo: "Padrão", area: "10,35" },
"4-1108": { vaga: 89,  tipo: "PCD",    area: "15,50" },

"4-1202": { vaga: 201, tipo: "Padrão", area: "10,35" },
"4-1203": { vaga: 97,  tipo: "Padrão", area: "10,35" },
"4-1206": { vaga: 114, tipo: "Padrão", area: "10,35" },
"4-1207": { vaga: 219, tipo: "Padrão", area: "10,35" },
"4-1208": { vaga: 90,  tipo: "PCD",    area: "15,50" },

"4-1302": { vaga: 202, tipo: "Padrão", area: "10,35" },
"4-1303": { vaga: 98,  tipo: "Padrão", area: "10,35" },
"4-1306": { vaga: 115, tipo: "Padrão", area: "10,35" },
"4-1307": { vaga: 220, tipo: "Padrão", area: "10,35" },
"4-1308": { vaga: 91,  tipo: "PCD",    area: "15,50" },

"4-1402": { vaga: 203, tipo: "Padrão", area: "10,35" },
"4-1403": { vaga: 99,  tipo: "Padrão", area: "10,35" },
"4-1406": { vaga: 117, tipo: "Grande", area: "12,50" },
"4-1407": { vaga: 221, tipo: "Padrão", area: "10,35" },
"4-1408": { vaga: 92,  tipo: "PCD",    area: "15,50" },

"4-1502": { vaga: 204, tipo: "Padrão", area: "10,35" },
"4-1503": { vaga: 100, tipo: "Padrão", area: "10,35" },
"4-1506": { vaga: 118, tipo: "Grande", area: "12,50" },
"4-1507": { vaga: 121, tipo: "Grande", area: "12,50" },
"4-1508": { vaga: 93,  tipo: "PCD",    area: "15,50" },

"4-1602": { vaga: 205, tipo: "Padrão", area: "10,35" },
"4-1603": { vaga: 101, tipo: "Padrão", area: "10,35" },
"4-1606": { vaga: 119, tipo: "Grande", area: "12,50" },
"4-1607": { vaga: 122, tipo: "Grande", area: "12,50" },
"4-1608": { vaga: 94,  tipo: "PCD",    area: "15,50" },

"4-1702": { vaga: 206, tipo: "Padrão", area: "10,35" },
"4-1703": { vaga: 188, tipo: "Padrão", area: "10,35" },
"4-1706": { vaga: 120, tipo: "Grande", area: "12,50" },
"4-1707": { vaga: 123, tipo: "Grande", area: "12,50" },
"4-1708": { vaga: 116, tipo: "PCD",    area: "18,50" },

/* TORRE 5*/
"5-2":    { vaga: 32,  tipo: "Padrão", area: "10,35" },
"5-3":    { vaga: 36,  tipo: "Padrão", area: "10,35" },
"5-6":    { vaga: 61,  tipo: "Padrão", area: "10,35" },
"5-7":    { vaga: 170, tipo: "Grande", area: "12,50" },

"5-102":  { vaga: 33,  tipo: "Padrão", area: "10,35" },
"5-103":  { vaga: 37,  tipo: "Padrão", area: "10,35" },
"5-106":  { vaga: 62,  tipo: "Padrão", area: "10,35" },
"5-107":  { vaga: 171, tipo: "Grande", area: "12,50" },

"5-202":  { vaga: 34,  tipo: "Padrão", area: "10,35" },
"5-203":  { vaga: 38,  tipo: "Padrão", area: "10,35" },
"5-206":  { vaga: 63,  tipo: "Padrão", area: "10,35" },
"5-207":  { vaga: 172, tipo: "Grande", area: "12,50" },

"5-302":  { vaga: 35,  tipo: "Padrão", area: "10,35" },
"5-303":  { vaga: 39,  tipo: "Padrão", area: "10,35" },
"5-306":  { vaga: 64,  tipo: "Padrão", area: "10,35" },
"5-307":  { vaga: 173, tipo: "Grande", area: "12,50" },

"5-402":  { vaga: 10,  tipo: "Padrão", area: "10,35" },
"5-403":  { vaga: 40,  tipo: "Padrão", area: "10,35" },
"5-406":  { vaga: 65,  tipo: "Padrão", area: "10,35" },
"5-407":  { vaga: 174, tipo: "Grande", area: "12,50" },

"5-502":  { vaga: 351, tipo: "Grande", area: "12,50" },
"5-503":  { vaga: 41,  tipo: "Padrão", area: "10,35" },
"5-506":  { vaga: 66,  tipo: "Padrão", area: "10,35" },
"5-507":  { vaga: 175, tipo: "Padrão", area: "10,35" },

"5-602":  { vaga: 352, tipo: "Grande", area: "12,50" },
"5-603":  { vaga: 42,  tipo: "Padrão", area: "10,35" },
"5-606":  { vaga: 67,  tipo: "Padrão", area: "10,35" },
"5-607":  { vaga: 176, tipo: "Padrão", area: "10,35" },

"5-702":  { vaga: 353, tipo: "Grande", area: "12,50" },
"5-703":  { vaga: 43,  tipo: "Padrão", area: "10,35" },
"5-706":  { vaga: 68,  tipo: "Padrão", area: "10,35" },
"5-707":  { vaga: 177, tipo: "Padrão", area: "10,35" },

"5-802":  { vaga: 354, tipo: "Grande", area: "12,50" },
"5-803":  { vaga: 44,  tipo: "Padrão", area: "10,35" },
"5-806":  { vaga: 69,  tipo: "Padrão", area: "10,35" },
"5-807":  { vaga: 178, tipo: "Padrão", area: "10,35" },

"5-902":  { vaga: 355, tipo: "Grande", area: "12,50" },
"5-903":  { vaga: 45,  tipo: "Paralela", area: "12,19" },
"5-906":  { vaga: 70,  tipo: "Padrão", area: "10,35" },
"5-907":  { vaga: 179, tipo: "Padrão", area: "10,35" },

"5-1002": { vaga: 356, tipo: "Grande", area: "12,50" },
"5-1003": { vaga: 46,  tipo: "Grande", area: "12,50" },
"5-1006": { vaga: 71,  tipo: "Padrão", area: "10,35" },
"5-1007": { vaga: 180, tipo: "Padrão", area: "10,35" },

"5-1102": { vaga: 357, tipo: "Grande", area: "12,50" },
"5-1103": { vaga: 47,  tipo: "Grande", area: "12,50" },
"5-1106": { vaga: 72,  tipo: "Padrão", area: "10,35" },
"5-1107": { vaga: 181, tipo: "Padrão", area: "10,35" },
"5-1108": { vaga: 54, tipo: "PCD", area: "18,50" },

"5-1202": { vaga: 358,  tipo: "Grande",    area: "12,50" },
"5-1203": { vaga: 48, tipo: "Grande", area: "12,50" },
"5-1206": { vaga: 73,  tipo: "Padrão", area: "10,35" },
"5-1207": { vaga: 182,  tipo: "Padrão", area: "10,35" },
"5-1208": { vaga: 55, tipo: "PCD", area: "15,50" },

"5-1302": { vaga: 359,  tipo: "Grande",    area: "12,50" },
"5-1303": { vaga: 49, tipo: "Grande", area: "12,50" },
"5-1306": { vaga: 74,  tipo: "Padrão", area: "10,35" },
"5-1307": { vaga: 183,  tipo: "Padrão", area: "10,35" },
"5-1308": { vaga: 56, tipo: "PCD", area: "15,50" },

"5-1402": { vaga: 360,  tipo: "Grande",    area: "12,50" },
"5-1403": { vaga: 50, tipo: "Grande", area: "12,50" },
"5-1406": { vaga: 75,  tipo: "Padrão", area: "10,35" },
"5-1407": { vaga: 184,  tipo: "Padrão", area: "10,35" },
"5-1408": { vaga: 57, tipo: "PCD", area: "15,50" },

"5-1502": { vaga: 361,  tipo: "Grande",    area: "12,50" },
"5-1503": { vaga: 51, tipo: "Grande", area: "12,50" },
"5-1506": { vaga: 76,  tipo: "Padrão", area: "10,35" },
"5-1507": { vaga: 185,  tipo: "Padrão", area: "10,35" },
"5-1508": { vaga: 58, tipo: "PCD", area: "15,50" },

"5-1602": { vaga: 362,  tipo: "Grande",    area: "12,50" },
"5-1603": { vaga: 52, tipo: "Grande", area: "12,50" },
"5-1606": { vaga: 77,  tipo: "Padrão", area: "10,35" },
"5-1607": { vaga: 186,  tipo: "Padrão", area: "10,35" },
"5-1608": { vaga: 59, tipo: "PCD", area: "15,50" },

"5-1702": { vaga: 363,  tipo: "Grande",    area: "12,50" },
"5-1703": { vaga: 53, tipo: "Grande", area: "12,50" },
"5-1706": { vaga: 78,  tipo: "Padrão", area: "10,35" },
"5-1707": { vaga: 187,  tipo: "Padrão", area: "10,35" },
"5-1708": { vaga: 60, tipo: "PCD", area: "15,50" },
};

const medidasPorTipo = {
  "Padrão": { dimensoes: "4,5m x 2,3m" },
  "Grande": { dimensoes: "5,0m x 2,5m" },
  "Paralela": { dimensoes: "5,3m x 2,3m" },
  "PCD": {
    "15,50": "5,0m x 3,1m",
    "18,50": "5,0m x 3,7m"
  }
};

const corPorTorre = {
  "1": "#FF0000", //vermelho
  "2": "#FFCC00", //amarelo
  "3": "#0066FF", //azul
  "4": "#339933", //verde
  "5": "#FF66FF"  //rosa
};

/* 🔹 índice reverso automático */
const vagasPorNumero = {};
Object.entries(vagasPorApartamento).forEach(([key, value]) => {
  const [torre, apto] = key.split("-");
  vagasPorNumero[value.vaga] = {
    torre,
    apto,
    tipo: value.tipo,
    area: value.area
  };
});

/* =====================================================
   🔹 FORMULÁRIO
===================================================== */

torre.addEventListener("change", () => {
  apto.innerHTML = '<option value="">Selecione</option>';
  apto.disabled = !torre.value;
  limparConsultaVisual();

  if (!torre.value) return;

  apartamentos.forEach(n => {
    apto.add(new Option(n, n));
  });
});

apto.addEventListener("change", limparConsultaVisual);

form.addEventListener("submit", e => {
  e.preventDefault();
  limparConsultaVisual();

  if (!torre.value) {
    resultado.innerHTML = `
      <div class="feedback erro">
        <span class="icone">✖</span>
        <span>Informe a torre.</span>
      </div>
    `;
    return;
  }

  if (!apto.value) {
    resultado.innerHTML = `
      <div class="feedback erro">
        <span class="icone">✖</span>
        <span>Informe o apartamento.</span>
      </div>
    `;
    return;
  }
  
  const key = `${torre.value}-${apto.value}`;
  const vaga = vagasPorApartamento[key];

  if (!vaga) {


    resultado.innerHTML = `
      <div class="feedback erro">
        <span class="icone">✖</span>
        <span>O Apartamento ${apto.value} da Torre ${torre.value} não possui vaga.</span>
      </div>`;
    return;
  }
/**/
    const tipo = vaga.tipo;
    const area = vaga.area;
    let iconePCD = "";
	let dimensoes = "";
	
    if (vaga.tipo === "PCD") {
      dimensoes = medidasPorTipo.PCD[area];
      iconePCD = " ♿";
    } else {
      dimensoes = medidasPorTipo[vaga.tipo].dimensoes;
    }
/**/

  resultado.innerHTML = `
    <div class="feedback sucesso">
      <span class="icone">✔</span>
      <span>
        O Apartamento ${apto.value} da Torre ${torre.value}
        possui a vaga nº<strong>${vaga.vaga}</strong> 🚗<br>
        <strong>Tipo:</strong> ${tipo}${iconePCD}<br>
        <strong>Área (m²):</strong> ${vaga.area} (${dimensoes})
      </span>
    </div>`;

  mostrarLocalizacaoVaga(vaga.vaga, torre.value);
});

/* =====================================================
   🔹 LOCALIZAÇÃO CONSULTA
===================================================== */

function mostrarLocalizacaoVaga(numeroVaga, torreSelecionada) {

  moverMapaParaConsulta();
  cardLocalizacao.classList.remove("hidden");

  const elemento = svgMapa.querySelector(`#vaga${numeroVaga}`);

  if (!elemento) {
    feedbackMapaErro.classList.remove("hidden");
    return;
  }

  elemento.style.fill = corPorTorre[torreSelecionada];
  elemento.style.opacity = "0.9";

  setTimeout(() => {
    elemento.scrollIntoView({ behavior: "smooth", block: "center" });
  }, 1500);


/* pisca */
  setTimeout(() => {

  // começar a piscar
  elemento.classList.add("vaga-piscando");

  // parar após 1,2 segundos
  setTimeout(() => {
    elemento.classList.remove("vaga-piscando");
    //elemento.style.opacity = "0.9"; opacidade
  }, 1200);

}, 2500); // espera 2,5 segundos antes de começar a piscar

/* pisca */
}

/* =====================================================
   🔹 INTERAÇÃO MAPA (modo MAPA apenas)
===================================================== */
let vagaSelecionadaMapa = null;

svgMapa.addEventListener("mouseover", e => {
  if (cardMapaPesquisa.classList.contains("hidden")) return;

  if (e.target.id?.startsWith("vaga")) {
    if (vagaSelecionadaMapa !== e.target) {
      e.target.classList.add("vaga-hover");
    }
  }
});

svgMapa.addEventListener("mouseout", e => {
  if (cardMapaPesquisa.classList.contains("hidden")) return;

  if (e.target.id?.startsWith("vaga")) {
    e.target.classList.remove("vaga-hover");
  }
});

svgMapa.addEventListener("click", e => {

  if (cardMapaPesquisa.classList.contains("hidden")) return;

  if (e.target.id?.startsWith("vaga")) {

    const numero = e.target.id.replace("vaga", "");
    const dados = vagasPorNumero[numero];
    if (!dados) return;

    limparSelecaoMapa();

	vagaSelecionadaMapa = e.target;
	// remover hover antes de pintar
	vagaSelecionadaMapa.classList.remove("vaga-hover");
	vagaSelecionadaMapa.style.fill = corPorTorre[dados.torre];
	vagaSelecionadaMapa.style.opacity = "0.9";

	let dimensoes = "";
	let iconePCD = "";

	if (dados.tipo === "PCD") {
	  dimensoes = medidasPorTipo.PCD[dados.area];
	  iconePCD = " ♿";
	} else {
	  dimensoes = medidasPorTipo[dados.tipo].dimensoes;
	}

	tooltip.innerHTML = `
	  🚘 <strong>Vaga nº${numero}</strong><br>
	  🏢 <strong>Torre ${dados.torre} - Apt. ${dados.apto}</strong><br>
	  ↔️ <strong>Tipo:</strong> ${dados.tipo}${iconePCD}<br>
	  📐 <strong>Área:</strong> ${dados.area} ${dimensoes ? `(${dimensoes})` : ""}
	`;


    tooltip.style.left = e.pageX + 10 + "px";
    tooltip.style.top = e.pageY + 10 + "px";
    tooltip.classList.remove("hidden");

  } else {
    limparSelecaoMapa();
  }
});

document.addEventListener("click", e => {
  if (cardMapaPesquisa.classList.contains("hidden")) return;

  if (!e.target.closest("#svgMapa")) {
    limparSelecaoMapa();
  }
});

/* =====================================================
   🔹 INICIALIZAÇÃO
===================================================== */

setState("HOME");