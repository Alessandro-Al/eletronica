
const BASE_LK100 = {
  descricao: "ID FW:",
  descricaoPlaca: {
    titulo: "PLC Industrial LK100 ARM 7",
    hardware: [
      { label: "CPU:", valor: "72 MHz " },
      { label: "Memória RAM: ", valor: "58 kB interna " },
      { label: "Armazenamento:", valor: " SD-Card , eeprom" },
      { label: "Rede Ethernet: ", valor: "10/100/1000 Mbps" },
      { label: "Seriais: ", valor: "3: RS232 - 1:RS232/RS485 " },
      { label: "Entrdas:", valor: " 4 optoacopladas" },
      { label: "Saidas:", valor: " 4 optoacopladas" },
      { label: "Alimentação:", valor: " 12V e 24V" },
      { label: "espandivel:", valor: " ate 80 entrada saida optoacopladas" },
    ],
  },
  images: {
    visao: "./img/placa.png",
    entradas: "./img/entrada.png",
    saidas: "./img/saidas.png",
    serial: "./img/serial.png",
    plc: "./img/plc.png",


  }
};
/* =========================================================
 * LK100R2 – PLC uso geral via IP
 * ========================================================= */

const LK100R2_NOTES = {
  note1: "Cada COM é vista como uma porta de rede. Conectando na porta específica tem acesso completo à serial. A porta 47005 permite acesso a todas entradas e saídas instaladas.",
  note2: "Cada módulo LK101 fornece 8 entradas digitais; cada módulo LK102 fornece 8 saídas digitais."
};

const LK100R2_IP = {
  ...BASE_LK100,
  fw_id: "LK100V2.3-[OPCOES]-PLCIP.bin",
  visao: `
    <b>Características gerais</b><br>
    • PLC de uso geral com comunicação via IP<br>
    • Acesso remoto completo às portas seriais e I/O (${LK100R2_NOTES.note1})<br>
    • Expansível com módulos LK101 (entradas) e LK102 (saídas) (${LK100R2_NOTES.note2})<br>
    • Comunicação Ethernet com múltiplas portas virtuais<br><br>
  `,

  opcoes: [
    "0 – Padrão",
    "1 – Portaria LENKE"
  ],
  portas: [
    "47000 – Visor",
    "47001 – COM1",
    "47002 – COM2",
    "47003 – COM3",
    "47004 – COM4",
    { label: "47005 – I/O", title: LK100R2_NOTES.note1 },
    "USB: Não"
  ],
  entradas: [
    " a 4 – Configurável",
    { label: "Expansível até +80 via módulos LK101", title: LK100R2_NOTES.note2 }
  ],
  saidas: [
    " a 4 – Configurável",
    { label: "Expansível até +80 via módulos LK102", title: LK100R2_NOTES.note2 }
  ],
  serial: [
    " – RS232 / RS485",
    " – RS232",
    " – RS232",
    " – RS232"
  ],
  observacoes: [
    "PLC com acesso total via rede",
    { label: "Cada COM acessível via porta TCP dedicada", title: LK100R2_NOTES.note1 },
    { label: "Suporte a expansão com LK101R2 e LK102R2", title: LK100R2_NOTES.note2 },
  ],
  plc: [
    "LK101R2 – módulo de entradas",
    "LK102R2 – módulo de saídas"
  ]
};
/* =========================================================
 * LK100R2 – PLC uso geral (modo PLC)
 * ========================================================= */

const LK100R2_PLC_NOTES = {
  note1: "PLC de uso geral utilizado nas classificadoras CL3500, CPL e CPN.",
  note2: "Cada módulo LK101 fornece 8 entradas digitais; cada módulo LK102 fornece 8 saídas digitais."
};

const LK100R2_PLC = {
  ...BASE_LK100,
  fw_id: "LK100V2.3-[OPCOES]-PLC.bin",
  visao: `
    <b>Características gerais</b><br>
    • PLC de uso geral para sistemas de classificação (${LK100R2_PLC_NOTES.note1})<br>
    • Comunicação serial RS232 e RS485<br>
    • Entradas e saídas configuráveis localmente<br>
    • Expansível com módulos LK101 e LK102 (${LK100R2_PLC_NOTES.note2})<br><br>
  `,
  portas: [
    "47000 – Visor",
    "USB: Não"
  ],
  entradas: [
    "1 a 4 – Configurável",
    { label: "Expansível até +80 via módulos LK101", title: LK100R2_PLC_NOTES.note2 }
  ],
  saidas: [
    "1 a 4 – Configurável",
    { label: "Expansível até +80 via módulos LK102", title: LK100R2_PLC_NOTES.note2 }
  ],
  serial: [
    " – RS232 / RS485",
    " – RS232 configurável",
    " – RS232 configurável",
    " – RS232 configurável"
  ],
  observacoes: [
    { label: "Uso em classificadoras CL3500, CPL e CPN", title: LK100R2_PLC_NOTES.note1 },
    { label: "Expansível com módulos LK101R2 e LK102R2", title: LK100R2_PLC_NOTES.note2 },
    "Entradas e saídas configuráveis conforme aplicação",
  ],
  plc: [
    "LK101R2 – módulo de entradas",
    "LK102R2 – módulo de saídas"
  ]
};
/* =========================================================
 * LK100R2 – P3 (controlo de 3 balanças – CP12000)
 * ========================================================= */

const LK100_P3_1 = "COM1 conecta o LK100 ao LK200 (envio do peso consolidado). COM2, COM3 e COM4 conectam até 3 módulos LK050 em sequência.";
const LK100R2_P3 = {
  ...BASE_LK100,
  fw_id: "LK100V[versão]-[OPCOES]-P3.bin",
  visao: `
    <b>Características gerais</b><br>
    • PLC para controlo de até 3 plataformas de pesagem<br>
    • Usado na classificadora aérea CP12000<br>
    • Consolida múltiplos pesos em um único valor<br>
    • Comunicação com LK200 via serial (${LK100_P3_1})<br>
    • VISOR compatível: LK100_3B_1.8<br><br>
  `,
  opcoes: [
    "0 – padrão",
    "1 – 1 gancho entre balanças"
  ],
  portas: [
    "47000 – Visor",
    "USB: Não"
  ],

  entradas: [
    " sensor de pesagem",
 
  ],
  serial: [
    { label: " – RS232 OUT (para LK200)", title: LK100_P3_1 },
    { label: " – RS232 IN (balança LK050)", title: LK100_P3_1 },
    { label: " – RS232 IN (balança LK050)", title: LK100_P3_1 },
    { label: " – RS232 IN (balança LK050)", title: LK100_P3_1 }
  ],
  observacoes: [
    "PLC dedicado ao sistema CP12000",
    { label: "Integra até 3 módulos de pesagem LK050", title: LK100_P3_1 },
    "Converte múltiplos pesos em um único valor sequencial",
    "VISOR: LK100_3B_1.8",
    "Gravador de senha e número serial Rev2"
  ],
  plc: [
    "LK050 – módulo de pesagem"
  ]
};
/* =========================================================
 * NOTAS TÉCNICAS – LK100R2 Quality (Qty)
 * ========================================================= */

const QTY_1 = "COMx conecta ao COM1 do LK200 (CL3500). Cada estação usa uma porta serial configurável.";
const QTY_2 = "Cada módulo LK101 fornece 8 entradas e cada LK102 fornece 8 saídas. Sistema máximo: 4 estações, 6 botões e 6 LEDs por estação (24 entradas e 24 saídas).";
const QTY_3 = "Configuração Bx-Ey: x = número de botões (4 ou 6), y = número de estações (2 ou 4). Valores intermediários devem usar o valor superior.";

const LK100R2_QTY = {

  ...BASE_LK100,
  fw_id: "LK100V[versão]-[OPCOES]-Qty.bin",
  visao: `
    <b>Características gerais</b><br>
    • PLC LK100R2 para controlo de qualidade da CL3500<br>
    • Suporte a até 4 estações de trabalho<br>
    • Suporte a até 6 botões e 6 LEDs por estação (${QTY_2})<br>
    • Comunicação serial com LK200 (${QTY_1})<br><br>
  `,

  opcoes: [
    { label: "Bx-Ey – configuração de botões e estações", title: QTY_3 },
    "x = número de botões (4 ou 6)",
    "y = número de estações (2 ou 4)"
  ],

  portas: [
    "47000 – Visor",
    { label: "COM1 a COM4 – comunicação com LK200", title: QTY_1 }
  ],

  entradas: [
    " a 4 – sensores das estações",
    { label: "Entradas via módulos LK101 (botões)", title: QTY_2 }
  ],

  saidas: [
    " a 4 – comportas das estações",
    { label: "Saídas via módulos LK102 (LEDs)", title: QTY_2 }
  ],

  serial: [
    { label: "COM1 a COM4 – ligação ao LK200", title: QTY_1 }
  ],

  memoria: [
    "Controla estações em tempo real",
    "Sem armazenamento interno de produtos"
  ],

  plc: [
    "LK101",
    "LK102"
  ],

  observacoes: [
    "Uso exclusivo com CL3500",
    { label: "Expansível com módulos LK101 e LK102", title: QTY_2 },
    "Gravador de senha e número serial Rev2"
  ]

};
/* =========================================================
 * NOTAS TÉCNICAS – LK100R2 DROP
 * ========================================================= */

const DROP_1 = "COM0 usa RS485 para comunicação com LK200.";
const DROP_2 = "COM1 a COM3 são usadas para conectar PLCs LK010, um para cada linha.";
const DROP_3 = "Controla até 3 linhas independentes (A, B, C), cada uma com seu próprio sistema de DROP.";

const LK100R2_DROP = {

  ...BASE_LK100,
  fw_id: "LK100V[versão]-[OPCOES]-DROP.bin",
  visao: `
    <b>Características gerais</b><br>
    • PLC LK100R2 para controlo de DROP em classificadoras CP12000<br>
    • Suporte a até 3 linhas independentes (${DROP_3})<br>
    • Comunicação RS485 com LK200 (${DROP_1})<br>
    • Expansão via PLCs LK010 (${DROP_2})<br><br>
  `,

  portas: [
    "47000 – Visor",
    { label: "COM1 – RS485 comunicação LK200", title: DROP_1 },
    { label: "COM2 a COM4 – conexão PLC LK010", title: DROP_2 }
  ],

  entradas: [
    "1 – sinal da embaladora",
    "Outras entradas não utilizadas"
  ],

  saidas: [
    " – DROP linha A",
    " – DROP linha B",
    " – DROP linha C"
  ],

  serial: [
    { label: " – RS485 LK200", title: DROP_1 },
    { label: " – LK010 linha A", title: DROP_2 },
    { label: " – LK010 linha B", title: DROP_2 },
    { label: " – LK010 linha C", title: DROP_2 }
  ],

  memoria: [
    "Operação em tempo real",
    "Sem armazenamento interno de produtos"
  ],

  plc: [
    { label: "LK010R2", title: DROP_2 },
  ],

  observacoes: [
    { label: "Suporte até 3 linhas independentes", title: DROP_3 },

    { label: "Cada linha usa um PLC LK010 dedicado", title: DROP_2 },
    "Gravador de senha e número serial Rev2"
  ]

};
/* =========================================================
 * NOTAS TÉCNICAS – LK100R2 TCL
 * ========================================================= */

const TCL_1 = "COM0 conecta o PLC LK100R2 ao LK200 da classificadora.";
const TCL_2 = "COM1 a COM3 conectam até 3 balanças LK050.";
const TCL_3 = "Cada balança utiliza 4 saídas para classificação: direita, esquerda e 2 comportas.";
const TCL_4 = "Se usar apenas 1 balança, não é necessário módulo LK102.";
const TCL_5 = "Módulos LK102 são usados para expansão das saídas de classificação.";

const LK100R2_TCL = {

  ...BASE_LK100,
  fw_id: "LK100V[versão]-[OPCOES]-TCL.bin",

  visao: `
    <b>Características gerais</b><br>
    • PLC LK100R2 para classificadora TCL3500<br>
    • Suporte até 3 balanças LK050<br>
    • Comunicação com LK200 (${TCL_1})<br>
    • Expansão de saídas via LK102 (${TCL_5})<br>
    • Cada balança usa 4 saídas (${TCL_3})<br><br>
  `,




  portas: [
    "47000 – Visor",

  ],

  entradas: [
    "Entradas via balanças LK050",
    "Não possui entradas diretas locais"
  ],

  saidas: [
    "BAL1 – 4 saídas (direita, esquerda, comporta 1, comporta 2)",
    "BAL2 – 4 saídas via LK102",
    "BAL3 – 4 saídas via LK102"
  ],

  serial: [
    { label: " – LK200 classificadora", title: TCL_1 },
    { label: " – LK050 balança 1", title: TCL_2 },
    { label: " – LK050 balança 2", title: TCL_2 },
    { label: " – LK050 balança 3", title: TCL_2 }
  ],

  memoria: [
    "Operação em tempo real",
    "Sem armazenamento interno de produtos"
  ],

  plc: [
    "LK102 – expansão de saídas",
    { label: "LK050 – balanças conectadas", title: TCL_2 }
  ],

  observacoes: [
    { label: "Suporte até 3 balanças", title: TCL_2 },
    { label: "Cada balança usa 4 saídas", title: TCL_3 },
    { label: "LK102 necessário para múltiplas balanças", title: TCL_5 },
    { label: "Se apenas 1 balança, LK102 não é necessário", title: TCL_4 },
    "VISOR compatível",
    "Gravador de senha e número serial Rev2"
  ]

};


/* =========================================================
 * DATA â TODAS AS APLICAÃÃES LK200
 * ========================================================= */
const DATA = {
  ip: LK100R2_IP,
  lk100cl: LK100R2_PLC,
  bal3: LK100R2_P3,
  quality: LK100R2_QTY,
  drop: LK100R2_DROP,
  tcl: LK100R2_TCL
};