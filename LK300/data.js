/* ================= BASE DE DADOS ================= */

const A = "Gravador serial Rev 4 tem opção pagamento parcelado: tem parâmetro a mais para definir numero de parcela do pagamento. Se for 0 é liberado";
const C = " -> precisa do sinal para habilitar as saídas, sem isso os acionamentos não funcionam.";

const BASE_LK300 = {
  descricao: "ID FW:",
  fw_id: "LK300R5_11",
  descricaoPlaca: {
    titulo: "Terminal Industrial LK300 Cortex-A9, Linux e Android, touchscreen.",
    hardware: [
      { label: "CPU:", valor: " NXP i.MX6 – Cortex-A9 1GHz" },
      { label: "Memória RAM: ", valor: "1024MB DDR3" },
      { label: "GPU:", valor: " Vivante GC880 + GC320 (3D e 2D)" },
      { label: "Armazenamento:", valor: " SD-Card SLC até 512MB, eMMC até 64GB" },
      { label: "Display:", valor: " touchscreen LCD 7” ou 10” (personalizável)" },
      { label: "Rede Ethernet: ", valor: "10/100/1000 Mbps" },
      { label: "USB: ", valor: "2x USB 2.0 (1 Host, 1 OTG)" },
      { label: "Seriais: ", valor: "4: RS232 - 1:RS232/RS485 " },
      { label: "Áudio:", valor: " Headphone / Line Out" },
      { label: "Entrdas:", valor: " 4 optoacopladas" },
      { label: "Saidas:", valor: " 8 optoacopladas" },
      { label: "Alimentação:", valor: " 12-24V" },
      { label: "Sistemas operacionais:", valor: "  Yocto Linux, Debian Linux e Android" },
      { label: "Balança:", valor: "  modulo de pesagem integrado LK050 opcoinal" },
    ],
  },
  portas: [
    "47000 – Visor",
    "49000 – Integra",
    "USB"
  ],
  memoria: [
    "Produtos: 800",
    "Apontamentos: 10.000"
  ],
  images: {
    visao: "./img/placa.png",
    entradas: "./img/entrada.png",
    saidas: "./img/saidas.png",
    serial: "./img/serial.png",
    plc: "./img/serial.png",
  }
};

/* ================= VP1200 ================= */
const VP1200_NOTES = {
  note1: " impressora é via rede se definido IP ou é direcionada na COM4",
  note2: " sensor aplicador e opcional, e tem 3 modalidade (ver manual para detalhe)",
  note3: " ver tabela de configuração saídas para maior detalhes. Aux padrão função Sorter.",
  note4: " usa PLC na serial 4  para controle de aplicador",
};

const PERFIL_VERIFICADORA = {
  subfw: [
    { label: "[00] (padrão): 2 leitores de entrada" },
    { label: "[15]: 1 leitor de entrada (C1) + 1 saída (C2)" }
  ],
  entradas: [
    { label: "Sensor Presença caixa" },
    { label: "Sensor Rejeito (opcional)", title: "Configura por parametrto ou tempo ou sensor" },
    { label: "Esteira ON", title: C },
    { label: "Sensor Aplicador", title: VP1200_NOTES.note2 }
  ],
  saidas: [
    { label: "Rejeito" },
    { label: "Aplicador" },
    { label: "LED Verde" },
    { label: "LED Vermelho" },
    { label: "Motor ON", title: "Liga esteira da balança" },
    { label: "AUX1 / SPEED", title: VP1200_NOTES.note3 },
    { label: "AUX2 / Rej / RjAux" },
    { label: "AUX3 / Esteira" }
  ],
  serial: [
    "DEB",
    "Barcode C1",
    "Barcode C2",
    "LK050",
    { label: "Printer / PLC LK100R2 ", title: VP1200_NOTES.note1 },
  ],
};

const VP1200 = {
  ...BASE_LK300,
  ...PERFIL_VERIFICADORA,
  visao: `
      <b>Características gerais</b><br>
      • Firmware para verificadora dinâmica de peso, com suporte a rejeito, aplicador e integração via rede.<br>
      • VISOR: Compatível C_Visor9_00<br>
    `,
  observacoes: [
    "Gravador de senha e número serial Rev5",
    "USB: Sim (C1)"
  ],

  plc: [
    { label: "LK050 FW ID: lenke_mp_4_3.bin", title: "modulo pesagem  na serial 3" },
    { label: "LK100R2 FW ID: LK100V2.3-PLC.bin", title: VP1200_NOTES.note4 },
  ],
//   dicas: [
//     "Se visor não comunica, verifique porta 47000",
//     "Rejeito não atua → checar tempo mínimo",
//     "Peso instável → aterramento"
//   ],
//   configuracao: `
// <b>Configurações obrigatórias</b><br>
// • Tipo de produto<br>
// • Faixa de peso<br>
// • Tempo de rejeito<br><br>
// <b>Parâmetros críticos</b><br>
// • Delay do sensor<br>
// • Janela de leitura<br>
// • Tempo de esteira
// `,
//   diagnostico: `
// <b>Testes disponíveis</b><br>
// • Teste de entradas<br>
// • Teste de saídas<br>
// • Simulação de produto<br><br>
// <b>Erros comuns</b><br>
// • Sensor invertido<br>
// • Balança não estável
// `,
//   instalacao: {
//     test1: "t1",
//     test2: "t2",
//     test3: "t3",

//   }
};


/* =================  CL3500  ================= */

const CL3500 = {
  ...BASE_LK300,
  entradas: [
    { label: "Balança" },
    { label: "Tara" },
    { label: "Talisca" },

  ],
  saidas: [
    { label: "Braços 1 a 8", title: "Funcionamento sem PLC, utilizando apenas as saídas do LK300" },
    { label: "Até 32 saídas com PLC", title: "Expansão de saídas utilizando PLC LK100R2" }
  ],
  visao: `
      <b>Características gerais</b><br>
      • Classificadora de piso<br>
      • VISOR: Compatível C_Visor9_00<br><br>
    `,
  observacoes: [
    "Máquinas com apenas 8 braços podem dispensar PLC, utiliza somente as saídas do LK300",
    "PLC para controlo de ate 88 entre saídas e entradas",
    "USB: Não"
  ],

  plc: [
    { label: "Modelo: LK100R2 FW ID: LK100V2.3-PLC.bin", title: " na serial 4 " }
  ]

};

/* =================  LK305  ================= */


const LK305_NOTES = {
  note1: " impressora é via rede se definido IP ou é direcionada na COM4",
  note2: " sinal NC normalmente fechado NA normalmente aberto",
  note3: " dosagem ou hopper e selecionada com parâmetro de sistema as saídas de 1 a 8 são controladas conforme modalidade",

};

const LK305 = {
  ...BASE_LK300,
  visao: [
    "Balança estática com dosagem integrada",
    "alimentacao: 110~220 VAC 50/60Hz",
    "consumo: 25 W",
    "protecao: IP66",
    "plataformas: 1 a 4 células de carga",
    "tipo_comunicacao: Ethernet, RS232",
    "dimensoes: 0,5m x 1,6m x 1,1m (LxAxP)",
    "peso: 70 kg",
    "temperatura operacao: +5 a +40°C",
    "pressao atmosferica: 70 a 102 kPa"
  ],

  serial: [
    "DEB",
    "Barcode C1",
    "N.A.",
    "LK050",
    { label: "Printer", title: LK305_NOTES.note1 },
  ],


  entradas: [
    { label: "Aux" },
    { label: "Tare" },
    { label: "Enter" },

  ],
  saidas: [
    { label: "Dosagem NC", title: LK305_NOTES.note2 },
    { label: "Dosagem fina NC" },
    { label: "Dosagem NA", title: LK305_NOTES.note2 },
    { label: "Dosagem fina NA" }
  ],
  observacoes: [
    LK305_NOTES.note3,
    "USB: Sim (C1)"
  ],
  diagnostico: {
  },
  instalacao: [
    "Plataforma nivelada e base estável",
    "Plataforma vazia ao ligar",
    "Conectar cabos corretamente (Plataforma ↔ LK300, impressora opcional)",
    "Verificar aterramento"
  ],
  configuracao: [
    "Inserir jumper interno",
    "Calibrar zero → aguardar estabilização",
    "Colocar peso de calibração → aguardar estabilização",
    "Finalizada a calibração retorna à tela principal"
  ],
  dicas: [
    "Ligar equipamento → tela principal",
    "LOGIN → inserir usuário e senha",
    "COMEÇAR → informar dados de produção: data, turno, lote, produto",
    "Colocar produto → tara pré-programada",
    "Pesagem válida → LED verde aceso",
    "Menu inferior: ZERO / TARA / N.PC / APT / Re_P"
  ],
};

/* =================  SORTER  ================= */

const SORTER = {
  ...BASE_LK300,
  visao: `
      <b>Características gerais</b><br>
      • Tipo: Separador de caixas<br>
      • VISOR: Compatível<br>
    `,
  entradas: [
    { label: "Sensor de caixa" },
    { label: "Desvio 1" },
    { label: "Desvio 2" },
    { label: "Desvio 3" }
  ],
  saidas: [
    { label: "Sem cancela: saídas 1 a 8 (Sorter)" },
    { label: "Com cancela: 1 a 4 – Sorter" },
    { label: "Com cancela: 5 a 8 – Cancela" }
  ],
  serial: [
    "DEB",
    "Barcode 1",
    "Barcode 2"
  ],
  observacoes: [
    "USB: Sim (C1)"
  ]
};

/* =================  AP300  ================= */


const AP300 = {
  ...BASE_LK300,
  ...PERFIL_VERIFICADORA,
  visao: `
      <b>Características gerais</b><br>
      • Tipo: Impressora com aplicador<br>
      • VISOR: Compatível<br><br>
	  <b>SUBFW disponíveis</b><br>
    `,

  observacoes: [
    "Herda todas as configurações da VP1200/15, exceto balança"
  ]
};
/* =================  MC5000  ================= */
const MC5000 = {
  ...BASE_LK300,

  visao: `
      <b>Características gerais</b><br>
`,

  saidas: [
    { label: " a 8 devaidor ou rejeito" },
  ],

  plc: [
    { label: "Modelo: LK005R1 ", title: " na serial 3 conversor 485" },
    { label: "Modelo: LK120R1 FW ID: LK120V[rev]-BOX.bin", title: "via 485" }
  ]

};

/* ================= DATA ================= */
const DATA = {
  vp1200: VP1200,
  cl3500: CL3500,
  lk305: LK305,
  sorter: SORTER,
  ap300: AP300,
  mc5000: MC5000,
};
