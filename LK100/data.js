

const BASE_LK100R1 = {
  descricao: "ID FW:",
  descricaoPlaca: {
    titulo: "Terminal Industrial LK100 ARM 7, 4 linha teclado",
    hardware: [
      { label: "CPU:", valor: "72 MHz " },
      { label: "Memória RAM: ", valor: "58 kB  " },
      { label: "Armazenamento:", valor: " SD-Card , eeprom" },
      { label: "Display:", valor: " 122x32 monocromatico (LG122322)" },
      { label: "Teclado:", valor: " 10   " },
      { label: "Rede Ethernet: ", valor: "10/100/1000 Mbps" },
      { label: "RFID: ", valor: "1x 125hz  " },
      { label: "Seriais: ", valor: "1: RS232 - 1:RS232/RS485 " },
      { label: "Entrdas:", valor: " 4 optoacopladas" },
      { label: "Saidas:", valor: " 4 optoacopladas" },
      { label: "Alimentação:", valor: " 12V e 24V" },
      { label: "Balança:", valor: "  modulo de pesagem integrado LK050 opcoinal" },
    ],
  },
  images: {
    visao: "./img/placaR1.png",
    entradas: "./img/entradaR1.png",
    saidas: "./img/saidasR1.png",
    serial: "./img/serialR1.png",
    plc: "./img/serialR1.png",
  }
};

const BASE_LK100R2 = {
  descricao: "ID FW:",
  descricaoPlaca: {
    titulo: "Terminal Industrial LK100 ARM 7, 4 linha teclado",
    hardware: [
      { label: "CPU:", valor: "72 MHz   " },
      { label: "Memória RAM: ", valor: "58 kB  " },
      { label: "Armazenamento:", valor: " SD-Card , eeprom" },
      { label: "Display:", valor: "128x64 monocromatico " },
      { label: "Teclado:", valor: " 10   " },
      { label: "Rede Ethernet: ", valor: "10/100/1000 Mbps" },
      { label: "USB: ", valor: "1x USB 1.0  " },
      { label: "RFID: ", valor: "1x 125hz  " },
      { label: "Seriais: ", valor: "1: RS232 - 1:RS232/RS485 " },
      { label: "Entrdas:", valor: " 4 optoacopladas" },
      { label: "Saidas:", valor: " 4 optoacopladas" },
      { label: "Alimentação:", valor: " 12V e 24V" },
      { label: "Balança:", valor: "  modulo de pesagem integrado LK050 opcoinal" },
    ],
  },
  images: {
    visao: "./img/placaR2.png",
    entradas: "./img/entradaR2.png",
    saidas: "./img/saidasR2.png",
    serial: "./img/serialR2.png",
    plc: "./img/serialR2.png",
  }
};

/* =========================================================
 * NOTAS TÉCNICAS ? VP90[00] LITE HW1
 * ========================================================= */

const VP90_1 = "Versão LITE com funções básicas da VP9000 padrão.";
const VP90_2 = "Utiliza hardware antigo com display menor.";
const VP90_3 = "Memória reduzida comparada à VP9000 padrão.";
const VP90_4 = "Porta 47000 usada para comunicação com visor.";
const VP90_5 = "Porta 49000 usada para integração com sistemas externos.";
const VP90_6 = "Porta 2000 usada para saída contínua de peso.";

const VP9000HW1_LITE = {
  ...BASE_LK100R1,
  fw_id: "VP9000HW1V[versão].bin",
  visao: `
    <b>Características gerais</b><br>
    Verificadora de peso VP90[00] versão LITE<br>
    Saída contínua de peso disponível (${VP90_6})<br><br>
  `,
  portas: [
    { label: "47000 Visor", title: VP90_4 },
    { label: "49000 Integra", title: VP90_5 },
    { label: "2000 Peso OUT", title: VP90_6 }
  ],
  entradas: [
    {
      label: "Sensor de balança",
      title: "1 a 4 entradas digitais configuráveis"
    }
  ],
  saidas: [
    {
      label: "Rejeito",
      title: "1 a 4 saídas digitais configuráveis"
    }
  ],
  serial: [
    "não utilizado",
    "Balança",
  ],
  memoria: [
    "Produtos: 30",
    "Apontamentos: 25"
  ],

  observacoes: [
    { label: "Hardware HW1 com display menor" },
    { label: VP90_1 },
    { label: VP90_3 },
    "VISOR compatível VP1200R8.10",
    "USB não disponível",
    "Gravador de senha e número serial Rev2"
  ]
};

/* =========================================================
 * NOTAS TÉCNICAS ? LK3000 HW1
 * ========================================================= */

const LK3000_1 = "Balança estática com dosagem, funções básicas da LK205 padrão.";
const LK3000_2 = "Hardware antigo, display menor e memória limitada.";
const LK3000_3 = "Três modos de operação das saídas: 0 padrão (dosagem), 1 dosagem com LED, 2 semi manual.";
const LK3000_4 = " usada para comunicação com visor.";
const LK3000_5 = " usada para integração com sistemas externos.";
const LK3000_6 = " usada para saída contínua de peso.";

const LK3000HW1 = {
  ...BASE_LK100R1,
  fw_id: "LK3000HW1V[versão]-[OPCOES].bin",
  visao: `
    <b>Características gerais</b><br>
    Balança estática com dosagem LK3000 HW1<br>
    Funções básicas da LK205 padrão<br>
  `,
  opcoes: [
    "0 - padrão",
    "1 - LED",
    "2 - Mix / semi manual"
  ],
  portas: [
    { label: "47000 Visor", title: LK3000_4 },
    { label: "49000 Integra", title: LK3000_5 },
    { label: "2000 Peso OUT", title: LK3000_6 }
  ],
  saidas: [
    { label: "Dosagem NC ", title: "normalmente fechado" },
    "Dosagem fina NC",
    "Dosagem NA / LED verde",
    { label: "Dosagem fina NA", title: " normalmente aberto" },
  ],
  serial: [
    "não utilizado",
    "Balança",
  ],
  memoria: [
    "Produtos: 30",
    "Apontamentos: 8"
  ],
  observacoes: [
    { label: LK3000_2 },
    { label: "Três modos de operação das saídas" },
    "Saída contínua de peso disponível",
    "VISOR compatível VP1200R8.10",
    "USB não disponível",
    "Gravador de senha e número serial Rev2"
  ]
};

/* =========================================================
 * NOTAS TÉCNICAS ? CA12000 HW1
 * ========================================================= */

const CA12000_1 = "Contador de frango simples, funções básicas.";
const CA12000_2 = "Hardware antigo com memória limitada.";
const CA12000_3 = "Saídas controlam gancho e frango, sem comunicação serial.";

const CA12000HW1 = {
  ...BASE_LK100R1,
  fw_id: "CA12000HW1V[versão].bin",
  visao: `
    <b>Características gerais</b><br>
    Contador de frango CA12000 HW1<br>
    Controle de gancho e frango atraves do visor<br><br>
  `,
  portas: [
    "47000 - Visor",
    "49000 - Integra"
  ],
  entradas: [
    "não utilizado",
    "Gancho",
    "Frango",
    "Frango"
  ],
  memoria: [
    "Apontamentos: 25"
  ],
  observacoes: [
    { label: "Hardware antigo, memória limitada" },
    "VISOR compatível VP1200R8.10",
    "USB não disponível",
    "Gravador de senha e número serial Rev2"
  ]
};

/* =========================================================
 * NOTAS TÉCNICAS ? VF8000 HW2
 * ========================================================= */

const VF8000_1 = "Verificadora de fluxo com funções básicas.";
const VF8000_2 = "Hardware novo com display maior.";
const VF8000_3 = "Controle de fluxo via encoder, sem comunicação serial.";

const VF8000HW2 = {

  ...BASE_LK100R2,
  fw_id: "VF8000HW2V[versão].bin",
  visao: `
    <b>Características gerais</b><br>
    Verificadora de fluxo VF8000 HW2<br>
    Hardware novo, display maior<br>
    Controle via encoder<br> 
    Impressao via comunicação serial ou rede<br><br>
  `,
  portas: [
    "47000 - Visor",
    "49000 - Integra"
  ],
  entradas: [
    "no use",
    "Encoder"
  ],
  serial: [
    "Print",
    "BAL",
  ],
  memoria: [
    "Produtos: 30",
    "Apontamentos: 25"
  ],
  observacoes: [
    "VISOR compatível VP1200R8.10",
    "USB não disponível",
    "Gravador de senha e número serial Rev2"
  ]
};

/* =========================================================
 * NOTAS TÉCNICAS ? LK250 HW2
 * ========================================================= */

const LK250_1 = "tem as funções básica da LK205 padrão display menor, memória limitada";
const LK250_2 = "tem diferentes funcionalidade no uso das saídas dosagem ou hopper  ";
const LK250_3 = "Saídas configuráveis para dosagem, hopper ou led conforme programação.";

const LK250HW2 = {

  ...BASE_LK100R2,
  fw_id: "LK250HW2V[versão]-[OPCOES].bin",

  visao: `
    <b>Características gerais</b><br>
    Balança estática LK250 HW2 para dosagem e hopper<br>
    Funções básicas da LK205<br>
  `,



  opcoes: [
    "0 - padrão",
    "1 - peso > 500kg"
  ],

  portas: [
    "47000 - Visor",
    "49000 - Integra",
    "uSDcard - Sim"
  ],



  saidas: [
    { label: " a 4 : dosagem / hopper / led", title: LK250_3 }
  ],

  serial: [
    "---",
    "BAL",
  ],

  memoria: [
    "Produtos: 30",
    "Apontamentos: 10000 na uSDcard"
  ],



  observacoes: [
    { label: LK250_1 },
    { label: "Hardware novo com uSDcard" },
    { label: "Saídas configuráveis", title: LK250_3 },
    "VISOR compatível VP1200R8.10",
    "USB não disponível",
    "Gravador de senha e número serial Rev2"
  ]

};

/* =========================================================
 * DATA â TODAS AS APLICAÃÃES LK200
 * ========================================================= */
const DATA = {
  vp9000: VP9000HW1_LITE,
  lk3000: LK3000HW1,
  ca12000: CA12000HW1,
  vf8000: VF8000HW2,
  lk250: LK250HW2,
};