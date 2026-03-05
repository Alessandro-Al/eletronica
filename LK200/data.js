/* =========================================================
 * BASE LK200
 * ========================================================= */

const I1 = " FW[SUBFW]HW[_]BAL[_][x][Versão]-[OPCOES].hex  [x] onde aplicável ";
const I2 = " HW2 = placa antiga versão 2  -  HW3 = placa nova versão 3 e 4   :   BAL0=HBM  -  BAL1=LK050  -  BAL2=LK100R2(+3 LK050)";
const I3 = " OPCOES cada aplicação tem as suas especificas. ";

const A = "Gravador serial Rev 4 tem opção pagamento parcelado: tem parâmetro a mais para definir numero de parcela do pagamento. Se for 0 é liberado";
const B = "é possível combinar varias opções simplesmente somando o valor de cada opção.(onde as opções não entram em conflito no uso dos recursos)";
const C = " -> precisa do sinal para habilitar as saídas, sem isso os acionamentos não funcionam.";
const D = "Não confundir o nome do FW com o nome da maquina, pode coincidir ou não: exemplo VP9010 não é padrão e versão especial de SW, cada venda tem que definir claramente qual verso do SW vai usar e isso tem que constar na OP.";

const BASE_LK200 = {
  descricao: "ID FW:",


  descricaoPlaca: {
    titulo: "Terminal Industrial LK200 ARM 7, 5'' teclado",
    hardware: [
      { label: "CPU:", valor: "70Mhz  " },
      { label: "Memória RAM: ", valor: "8M baterizado" },
      { label: "Armazenamento:", valor: " SD-Card , eeprom" },
      { label: "Display:", valor: " 5'' monocromatico LCD240x128 " },
      { label: "Teclado:", valor: " 16 piexoeletrico  " },
      { label: "Rede Ethernet: ", valor: "10/100/1000 Mbps" },
      { label: "USB: ", valor: "1x USB 1.0  " },
      { label: "Seriais: ", valor: "3: RS232 - 1:RS232/RS485 " },
      { label: "Entrdas:", valor: " 4 optoacopladas" },
      { label: "Saidas:", valor: " 8 optoacopladas" },
      { label: "Alimentação:", valor: " 5V e 24V" },
      { label: "Balança:", valor: "  modulo de pesagem integrado LK050 opcoinal" },

      { label: "Nome aplicação:", valor: I1 },
      { label: "HW:", valor: I2 },
      { label: "SUBFW:", valor: I3 },

    ],
  },


  images: {
    visao: "./img/placa.png",
    entradas: "./img/entrada.png",
    saidas: "./img/saidas.png",
    serial: "./img/serial.png",
    plc: "./img/serial.png",
  }
};

/* ================= VP1200 ================= */

const V1 = "impressora automaticamente é colocada na porta livre. B=Balança C1 leitor primário C2 secundário";
const V2 = "essa opção força descrição VP9000, e simula as funções de velocidade da VP9000 com integração da VP1200";
const V3 = "sensor aplicador e opcional, e tem 3 modalidade (ver manual para detalhe)";
const V5 = "ver tabela de configuração saídas para maior detalhes. Aux padrão função Sorter";
const V6 = "a opção 4 habilita leitor RFId para tara das caixa, na porta serial. e pode ser o plc LK010 ou outros compatíveis";
const V4 = "VP9000I deriva da VP1200 e tem integração  com banco de dados";

const PERFIL_VERIFICADORA = {
  portas: [
    { label: "47000 – Visor ", title: " >= VP1200R8.22" },
    "49000 – Integra",
    "USB Sim C1"
  ],
  saidas: [
    { label: "Rejeito" },
    { label: "Aplicador" },
    { label: "LED Verde" },
    { label: "LED Vermelho" },
    { label: "Motor ON", title: " Liga esteira da balança" },
    { label: "AUX1 / SPEED", title: V5 },
    { label: "AUX2 / Rej / RjAux" },
    { label: "AUX3 / Esteira" }
  ],
  entradas: [
    { label: "Sensor presença caixa" },
    { label: "Sensor Rejeito (opcional)", title: "  Configura por parametrto ou tempo ou sensor" },
    { label: "Esteira ON ", title: C },
    { label: "Sensor Aplicador (opcional)", title: V3 }
  ],
  serial: [
    { label: "B/C1/C2", title: " Balança/Barcode/Printer" },
    { label: "B/C1/C2", title: " Balança/Barcode/Printer" },
    { label: "B ", title: "Balança so para VP (BAL0=HBM - BAL1=LK050  )" },
    { label: "Printer/Barcode/Balança", title: V1 },
  ],
  subfw: [
    { label: "[00] (padrão): 2 leitores de entrada C1 C2", title: V1 },
    "[15]: 1 leitor de entrada (C1) + 1 saída (C2)"
  ],
  memoria: [
    "produtos: 500 (HW3)  150 HW2",
    "apontamentos: 8000 (HW3) 3000 HW2",
    "7700 VP1215",
    "Label 8-4000",
    "LabelVirt  6000",
  ],
  opcoes: [
    "0 standard",
    "1 BRF",
    "2 PRINT NET  client",
    { label: "4 RfId", title: V6 },
    { label: "8 set velocidade", title: V2 },
    "16 compare C1, C2",
    "32 limita porta NET 49000",
    "64 DDMMAA data",
  ],
};

const VP1200 = {
  ...BASE_LK200,
  ...PERFIL_VERIFICADORA,
  fw_id: "VP12[SUBFW]HW[2/3]BAL[0/1]V[versão]-[OPCOES].hex",
  visao: `
      <b>Características gerais</b><br>
      • Firmware para verificadora dinâmica de peso, com suporte a rejeito, aplicador e integração via rede.<br>
      • VISOR: Compatível C_Visor9_00<br>
	    • VP9000I deriva da VP1200 e tem integração  com banco de dados <br><br>
    `,
  observacoes: [
    "Gravador de senha e número serial  " + A,
    "USB: Sim (C1)",
    "PLC: LK010 FW ID:	RFID21AS.BIN  PLC para leitura de RFID da caixa e envia na serial",
    V4
  ],
  plc: [
    { label: "LK050", title: "modulo de pesagem na com2" }
  ]
};

/* =========================================================
 * AP300/15 – Impressora com Aplicador
 * ========================================================= */

const AP300_NOTES = {
  note1: "Herda as configurações da VP1200/15 sem balança."
};

const AP300 = {
  ...BASE_LK200,
  ...PERFIL_VERIFICADORA,
  fw_id: "AP3[SUBFW]HW[2/3]BAL[0/1]V[versão]-[OPCOES].hex",
  visao: `
    <b>Características gerais</b><br>
    • Impressora com aplicador AP300/15<br>
    • Herda perfil principal da VP1200/15 sem balança<br>
    • VISOR compatível: VP1200R8.22<br><br>
  `,
  observacoes: [
    { label: "Gravador de senha e número serial Rev4", title: AP300_NOTES.note1 }
  ],
};

/* =========================================================
 * NOTAS TÉCNICAS – VP9000
 * ========================================================= */

const N1 = "Entrada 2: regulagem dosagem depois da pesagem VP9001; ou regulagem antes da pesagem VP9003. VP9000 aciona saída em função entrada 1.";
const N2 = "As saídas indicadas só estão habilitadas na versão VP9010";
const N3 = "Sinaleiro verde padrão, amarelo na VP9010";
const N4 = "Sensor de esteira ON só é usado na VP9010 e VP9005";
const N5 = "Integração apenas para geração de tabela simples, sem banco de dados";

const VP9000 = {
  ...BASE_LK200,
  fw_id: "VP90[SUBFW]HW[2/3]BAL[0/1]V[versão].hex",

  portas: [
    "47000 – Visor",
    { label: "49000 – TXT ", title: N5 },
    "2306 – Peso OUT"
  ],
  visao: `
      <b>Características gerais</b><br>
      • Verificadora de peso VP9000<br>
      • VISOR compatível VP1200R8.22<br><br>
    `,
  subfw: [
    "00 – padrão",
    "01 – regulagem pós-peso",
    "02 – antiga BT600",
    "03 – regulagem pré-peso",
    "05 – controle PWM",
    "10 – controle de velocidade",
  ],
  entradas: [
    { label: "Sensor Balança" },
    { label: "AUX / Regulagem", title: N1 },
    { label: "Esteira ON", title: N4 },
    { label: "N.A." }
  ],
  saidas: [
    { label: "Rejeito todos / abaixo" },
    { label: "Rejeito acima" },
    { label: "AUX / Regulagem", title: N1 },
    { label: "Regulagem", title: N1 },
    { label: "Motor ON" },
    { label: "Seleciona velocidade", title: N2 },
    { label: "LED Verde / Amarelo", title: N3 },
    { label: "LED Vermelho" }
  ],
  serial: [
    "Peso OUT / Balança",
    "Peso OUT / Balança",
    "Balança",
    "N.A."
  ],

  memoria: [
    "Produtos: 50",
    "Apontamentos: 10000"
  ],

  observacoes: [
    A,
    "USB: Não",
    "Integração simples sem banco de dados",
    "VP9000 não possui integração avançada"
  ]
};

/* =========================================================
 * CP12000 – Classificadora aérea em linha com RF
 * ========================================================= */

const CP12000_NOTES = {
  note1: " define quantas linhas estão ativa fisicamente. O FW serve para 1, 2 ou 3 linhas",
  note2: " o PLC LK100R1 é usado nos drop. O numero de drops varia de um mínimo de 3 ate 50. O drop 0 não derruba mas é o drop de referencia dos tag da balança. ",
  note3: " o PLC LK100R2 só é usado no caso da balança BAL2. O LK100R2 transforma o peso de 3 plataforma em seqüência em um único peso para enviar a o LK200",
  note4: " tem 2 opções de FW LK100R2. 0 ou 1: indica a distancia entre plataforma, 0 são em seguida, 1 tem um espaço de 20cm entre uma e a outra",
  note5: " o visor integra as pesagem com a porta 49000, em arquivo txt em C:\LENKE. E faz o controle da aplicação na porta 47000.",
  note6: " na entrada 4 pode colocar qualquer sinal, para monitorar em tempo real no visor em remoto. Exemplo saída do plcLK100R1 ID0 da balança, para verificar leitura de tag",
  note7: " se I=0 abre a porta 49001 para integração. ",
  note8: " essa função e opcional abre a função DIF e cadastro dos TAG. ",
};

const CP12000 = {
  ...BASE_LK200,
  fw_id: "CP1200[SUBFW]HW[2/3]BAL[0/1/2]_[I]V[versão]-[OPCOES].hex",
  visao: `
    <b>Características gerais</b><br>
    • Classificadora aérea em linha CP12000 com RF, 1 a 3 linhas para imbaladora automatica<br>
    • VISOR compatível: VisorCP12000R7.1<br>
    • Gravação de produtos, integração via server e visor<br>
    • Opçao DIF: (${CP12000_NOTES.note8})<br>
    • ate 50 drop<br><br>
  `,
  subfw: [
    { label: "0 – Padrão" },
    { label: "1 – DIF", title: CP12000_NOTES.note8 },
    "2 opcao linha seprada nas fx",
  ],
  opcoes: [
    { label: "1,2,3 linhas", title: CP12000_NOTES.note1 }
  ],
  portas: [
    { label: "47000 – Visor", title: CP12000_NOTES.note5 },
    { label: "49000 – Visor" },
    { label: "49001 – Integra", title: CP12000_NOTES.note7 },
    "USB: Não"
  ],
  entradas: [
    { label: "Sensor balança linha A" },
    { label: "Sensor balança linha B" },
    { label: "Sensor balança linha C" },
    { label: "Entrada livre / monitoramento", title: CP12000_NOTES.note6 }
  ],
  saidas: [
    { label: "Vermelho" },
    { label: "Verde" },
  ],
  serial: [
    { label: "Balança linha A" },
    { label: "Balança linha B" },
    { label: "LK005" },
    { label: "Balança linha C" }
  ],
  memoria: [
    "Produtos: 20",
    "Apontamentos: 2000"
  ],
  observacoes: [
    "Gravador de senha e numero serial Rev2",
    "VISOR compatível: LK100 3B Visor 1_8"
  ],
  plc: [
    { label: "LK100R1 FW ID LK100R4_0.hex PLC com 2 leitor RFID, expansível a 3: com mais um PLC LK010", title: CP12000_NOTES.note2 },
    { label: "LK100R2 LK100V1.8-[0/1]-P3.bin PLC para controlo de 3 plataforma de pesagem na mesma linha", title: CP12000_NOTES.note3 + CP12000_NOTES.note4 },
    { label: "LK100V5.0-0-DROP.bin PLC com ate 3 leitor RFID, expansível com 3 PLC LK010" },
    { label: "LK010 FW ID: LK010RFID2_1.BIN", title: "PLC para leitura de um RFID e envia na serial" },
    { label: "LK050 FW ID: LK050R4_3.hex", title: "PLC com modulo de pesagem placa LK050" },
    { label: "LK005: ", title: "conversor RS232 -> RS485 master full duplex" },
  ]
};

/* =========================================================
 * CP1201[0] – Classificadora aérea em linha com RF, qualidade
 * ========================================================= */

const CP12010_NOTES = {
  note1: "Sensor de qualidade vem ligado diretamente no LK200, sem drop qualidade. Preferível não usar essa opção.",
  note2: "O PLC LK099 é usado nos drops. Número mínimo de drops: 3. Drop 0 é referência dos tags da balança.",
  note3: "O PLC LK100R2 só é usado no caso da balança BAL2. Converte o peso das 3 plataformas em sequência em um único peso para enviar ao LK200.",
  note4: "PLC LK100R2 possui 2 opções: 0 = plataformas em sequência; 1 = espaço de 20cm entre plataformas.",
  note5: "O visor integra as pesagens com a porta 49000 em arquivo txt em C:\\LENKE, e controla a aplicação pela porta 47000.",
  note6: "Entrada 4 é para sensor da qualidade no caso de SUBFW = 1.",
  note7: "Nas entradas pode colocar qualquer sinal para monitoramento em tempo real no visor remoto."
};

const CP12010 = {
  ...BASE_LK200,
  fw_id: "CP1201[SUBFW]HW[2/3]BAL[0/1/2]V[versão].hex",
  visao: `
    <b>Características gerais</b><br>
    • Classificadora aérea em linha com RF, 1 linhas. Para embalagem manual. Com qualidade<br>
    • VISOR compatível: VisorCP12010R6_11 <br>
    • Integração com visor<br>
    • Monitoramento remoto e entrada de qualidade (${CP12010_NOTES.note6})<br>
    • ate 50 drop<br><br>
  `,
  subfw: [
    { label: "0 – Padrão" },
    { label: "1 – Sensor Q", title: CP12010_NOTES.note1 }
  ],
  portas: [
    { label: "47000 – Visor", title: CP12010_NOTES.note5 },
    { label: "49000 – Visor" },
    "USB: Não"
  ],
  entradas: [
    { label: "Sensor balança linha A" },
    { label: "Entrada livre", title: CP12010_NOTES.note7 },
    { label: "Entrada livre", title: CP12010_NOTES.note7 },
    { label: "Sensor qualidade", title: CP12010_NOTES.note6 }
  ],
  saidas: [
    { label: "Vermelho" },
    { label: "Verde" },
  ],
  serial: [
    { label: "Balança linha A" },
    { label: "N.A." },
    { label: "LK005" },
    { label: "N.A." }
  ],
  memoria: [
    "Produtos: 20",
    "Apontamentos: 1000"
  ],
  observacoes: [
    " • VISOR compatível:  LK100 3B Visor 1_8"
  ],
  plc: [
    { label: "PLC LK099 FW ID: RFID3Q7.BIN PLC com 1 leitor RFID, 2 entrada e 2 saídas", title: CP12010_NOTES.note2 },
    { label: "PLC LK100R2 FW ID: LK100V1.8-[0/1]-P3.bin PLC para controlo de 3 plataforma de pesagem na mesma linha", title: CP12010_NOTES.note3 + CP12010_NOTES.note4 },
    "LK050 FW ID: LK050R4_3.hex PLC com modulo de pesagem placa LK050",
    "LK005: conversor RS232 -> RS485 master full duplex"
  ]
};

/* =========================================================
 * CPL1200[0] – Classificadora aérea em linha, 1 linha sem RF
 * ========================================================= */

const CPL1200_NOTES = {
  note1: "Opção 0: pesagens gravadas via integrador na porta 49000; Opção 1: visor grava TXT em C:\\LENKE",
  note2: "Porta 46000 Uruguai tem protocolo específico separado do padrão",
  note3: "HW2 só tem 4 saídas, HW3 até 8; se usar até 8 drops não precisa PLC LK110",
  note4: "Sensor magnético de balança e grupo são opcionais. Linha curta não necessita",
  note5: "PLC LK100R2 é compatível com esta máquina"
};

const CPL12000 = {
  ...BASE_LK200,
  fw_id: "CPL1200[SUBFW]HW[2/3]BAL[0/1]V[versão]-[OPCOES].hex",
  visao: `
    <b>Características gerais</b><br>
    • Classificadora aérea CPL1200[0], 1 linha, sem RF<br>
    • Gravação de pesagem via integrador ou visor (${CPL1200_NOTES.note1})<br>
    • VISOR compatível: CPL12000Visor4.10.exe<br><br>
  `,
  subfw: [
    "0 – Integrador",
    { label: "1 – Visor TXT", title: CPL1200_NOTES.note1 }
  ],
  opcoes: [
    "0 – Padrão",
    { label: "1 – Uruguai", title: CPL1200_NOTES.note2 }
  ],
  portas: [
    { label: "46000 – Uruguai", title: CPL1200_NOTES.note2 },
    "47000 – Visor",
    "49000 – Integra",
    "USB: Não"
  ],
  entradas: [
    "Balança",
    { label: "Magnético BAL", title: CPL1200_NOTES.note4 },
    "Contador grupo 1",
    { label: "Magnético grupo 1", title: CPL1200_NOTES.note4 }
  ],
  saidas: [
    "DROP 1",
    "DROP 2",
    "DROP 3",
    "DROP 4",
    "DROP 5",
    "DROP 6",
    "DROP 7",
    "DROP 8",
    { label: "1 a 20 – via PLC", title: CPL1200_NOTES.note3 }
  ],
  serial: [
    "Balança",
    "PLC",
    "Balança"
  ],
  memoria: [
    "Faixas: 20",
    "Programas: 50",
    "Drops: 20",
    "Produtos: 20",
    "Apontamentos: 10000"
  ],
  observacoes: [
    "Gravador de senha e número serial Rev2"
  ],
  plc: [
    { label: "LK100R1 / LK110 FW ID:LK100_PLC1_2.hex PLC para controlo de ate 24 saídas e 16 entradas", title: CPL1200_NOTES.note3 },
    { label: "LK100R2 FW ID:LK100V2.3-PLC.bin PLC para controlo de ate 80 entradas e saídas", title: CPL1200_NOTES.note5 },
    "LK050 FW ID: LK050R4_3.hex PLC com modulo de pesagem placa LK050",
  ]
};

/* =========================================================
 * CPN1200[0] – Classificadora aérea em curva, 1 linha sem RF com qualidade
 * ========================================================= */

const CPN1200_NOTES = {
  note1: "Opção 0: pesagens gravadas via integrador na porta 49000; Opção 1: visor grava TXT em C:\\LENKE",
  note2: "O sistema em curva tem braços que levantam o peso e cadastra a tara de cada um; braços sincronizados com sensor na entrada 1 do PLC LK100",
  note3: "HW2 só tem 4 saídas, HW3 até 8; se usar até 8 drops sem tara dos braços, não precisa do PLC LK110",
  note4: "Sensor magnético de balança e grupo são opcionais; linha curta não necessita",
  note5: "Sistema permite qualidade via sensor ligado na entrada 2 do PLC",
  note6: "Nova versão de qualidade com sensor de troley e qualidade trabalhando juntos",
  note7: "PLC LK100R2 é compatível com esta máquina"
};

const CPN12000 = {
  ...BASE_LK200,
  fw_id: "CPN1200[SUBFW]HW[2/3]BAL[0/1]V[versão].hex",
  visao: `
    <b>Características gerais</b><br>
    • Classificadora aérea em curva CPN1200[0], 1 linha sem RF<br>
    • Gravação de pesagem via integrador ou visor (${CPN1200_NOTES.note1})<br>
    • Sistema de qualidade com sensor ou troley (${CPN1200_NOTES.note5}, ${CPN1200_NOTES.note6})<br>
    • VISOR compatível: CPN12000Visor5.4.exe<br><br>
  `,
  subfw: [
    "0 – Integrador",
    { label: "1 – Visor TXT", title: CPN1200_NOTES.note1 }
  ],
  portas: [
    "47000 – Visor",
    "49000 – Integra",
    "USB: Não"
  ],
  entradas: [
    "Balança",
    { label: "Magnético BAL", title: CPN1200_NOTES.note4 },
    "Contador grupo 1",
    { label: "Magnético grupo 1", title: CPN1200_NOTES.note4 },
    { label: "LK100 IN – opcional" },
    { label: "1 – Braço tara", title: CPN1200_NOTES.note2 },
    { label: "2 – Qualidade", title: CPN1200_NOTES.note5 },
    { label: "3 – Troley qualidade", title: CPN1200_NOTES.note6 }
  ],
  saidas: [
    "DROP 1",
    "DROP 2",
    "DROP 3",
    "DROP 4",
    "DROP 5",
    "DROP 6",
    "DROP 7",
    "DROP 8",
    { label: "LK100 OUT – 1 a 20 via PLC", title: CPN1200_NOTES.note3 }
  ],
  serial: [
    "Balança",
    "PLC",
    "Balança"
  ],
  memoria: [
    "Faixas: 20",
    "Programas: 30",
    "Drops: 25",
    "Produtos: 20",
    "Apontamentos: 10000"
  ],
  observacoes: [
    "Gravador de senha e número serial Rev2"
  ],
  plc: [
    { label: "LK100R1 / LK110 FW ID: LK100_PLC1_2.hex PLC para controlo de ate 24 saídas e 16 entradas", title: CPN1200_NOTES.note3 },
    { label: "LK100R2 FW ID: LK100V2.3-PLC.bin PLC para controlo de ate 80 entradas e saídas", title: CPN1200_NOTES.note7 },
    "LK050 FW ID: LK050R4_3.hex PLC com modulo de pesagem placa LK050",
  ]
};

/* =========================================================
 * NOTAS TÉCNICAS – LK205
 * ========================================================= */

const LK_1 = "o peso impresso no barcode da etiqueta é fixo, 6 caractere. Opção 1 usa 5 char. (É melhor usar a opção para isso, e não criar mais um parâmetro que polui mais )";
const LK_2 = "valida data de produção: antes a data era limitada a 180 dia antes, Essa opção permite 1830 dia 5 anos antes. Mas agora é fixo 9999 dia então não serve mais.";
const LK_3 = "a porta 47001 é usada para enviar direto qualquer texto para serial, onde por exemplo é ligada a impressora. Mas na opção 32 é desabilitada.";
const LK_4 = "A balança habilita opção client, e o terminal envia a etiquete a impressora na rede, na porta escolhida.";
const LK_5 = "se usa botoeira as entrada de 1 a 4 funciona como botões para selecionar produto (BOT1...4)";
const LK_6 = "sinal NC normalmente fechado NA normalmente aberto";
const LK_7 = "Impressora e balança pode ser configurada em qualquer porta.  Mas versão LK205 a balança é fixa COM2. E só com modulo homologado LK050";
const LK_8 = "a opção 8 habilita leitor RFId para tara das caixa na porta serial, e pode ser o plc LK010 ou outros compatíveis e para tag do usuário. ";
const LK_9 = "versão Inmetro só permite calibração e troca de parâmetros calibração com JUMPER";
const LK_10 = "dosagem ou hopper e selecionada com parâmetro de sistema as saídas de 1 a 8 são controladas conforme modalidade";

const LK205 = {
  ...BASE_LK200,
  fw_id: "LK20[SUBFW]HW[2/3]BAL[0/1]V[versão]-[OPCOES].hex",
  visao: `
      <b>Características gerais</b><br>
      • Balança estática LK205<br>
      • Dosagem integrada / Hopper (` + LK_10 + `)<br>
      • VISOR compatível >= VP1200R8.10<br><br>
    `,
  subfw: [
    "4 – sem INMETRO",
    { label: "5 – INMETRO ", title: LK_9 }
  ],
  opcoes: [
    "0 – padrão",
    { label: "1 – etiqueta peso", title: LK_1 },
    { label: "2 – data produção ", title: LK_2 },
    { label: "4 – botoeira ", title: LK_5 },
    { label: "8 – RFID ", title: LK_8 },
    "16 – USB ON",
    { label: "32 – etiqueta em rede ", title: LK_4 },
    "64 – dosagem por sensor",
    "128 – peso > 1000 kg",
  ],
  portas: [
    "47000 – Visor",
    "49000 – Integra",
    "49001 – Peso OUT",
    { label: "47001 – Serial texto ", title: LK_3 },
    { label: "USB: Sim", title: " (habilita opção 16)" }
  ],
  entradas: [
    { label: "Dosagem / BOT1", title: LK_5 },
    { label: "Tara / BOT2", title: LK_5 },
    { label: "Enter / BOT3", title: LK_5 },
    { label: "BOT4", title: LK_5 }
  ],
  saidas: [
    { label: "Dosagem NC / Hopper", title: LK_6 },
    { label: "Dosagem fina NC" },
    { label: "Dosagem NA / Hopper", title: LK_6 },
    { label: "Dosagem fina NA" },
    { label: "Peso válido" },
    { label: "TAG TARA", title: LK_8 },
    { label: "TAG USER", title: LK_8 },
    { label: "Peso inválido" }
  ],
  serial: [
    { label: "PRINT / BAL / RFID", title: LK_8 },
    "PRINT / BAL / RFID",
    { label: "BAL (LK205 fixa COM2) ", title: LK_7 },
    "PRINT / BAL / RFID"
  ],
  memoria: [
    "Produtos: 250",
    "Etiqueta: 8 x 4000 ch",
    "Etiqueta virtual: 6000 ch",
    "Apontamentos: 10000 (HW3) / 6000 (HW2)"
  ],
  plc: [
    { label: "LK010 – FW ID RFID21AS.BIN", title: LK_8 },
  ],
  observacoes: [
    { label: "Funçao espscial", title: LK_10 },
    "USB habilita opções específicas",
    "Gravador de senha e número serial Rev4"
  ]
};

/* =========================================================
 * LK204D1 – Dosagem de Ingredientes
 * ========================================================= */

const LK204D1 = {
  ...BASE_LK200,
  fw_id: "LK204HW[2/3]BAL[0/1]V[versão]-D-[OPCOES].hex",
  visao: `
    <b>Características gerais</b><br>
    • Sistema de dosagem de ingredientes (LK204D1)<br>
    • Firmware derivado do LK204<br>
    • Utiliza apenas o perfil principal herdado<br>
    • VISOR compatível: VP1200R8.10<br><br>
  `,
  opcoes: [
    { label: "Herdadas do LK204", title: "Herda as opções do LK204, porém no momento utiliza apenas o perfil principal" }
  ],
  portas: [
    { label: "Herdadas do LK204", title: "Portas seguem o padrão do LK204" }
  ],
  entradas: [
    "AUX",
    "Tara",
    "Enter"
  ],
  saidas: [
    "LED amarelo",
    "LED verde",
    "LED vermelho"
  ],
  serial: [
    { label: "Herdada do LK204", title: "Configuração serial segue o LK204 padrão" }
  ],
  memoria: [
    { label: "Herdada do LK204", title: "Memória segue o firmware base LK204" }
  ],
  observacoes: [
    "Firmware específico para dosagem de ingredientes",
    "Gravador de senha e número serial Rev2"
  ],
};

/* =========================================================
 * NOTAS TÉCNICAS – CL3500
 * ========================================================= */

const CL_1 = "a porta do PLC é fixa COM1, mas pode usar COM3 habilitando a opção 2.";
const CL_2 = "pode usar 1 PLC LK110 para até 12 braços, ou 2 PLC LK110 para 16 braços (COM1 e COM3), ou 1 LK100R2 + EXP para qualquer número de braços.";
const CL_3 = "a entrada 2 é sensor de tara da esteira, mas ao usar sensores de qualidade (opção 5), as entradas 2, 3 e 4 passam a ser qualidade. Não pode usar TARA.";
const CL_4 = "com apenas 8 braços, dispensa PLC e usa as saídas do LK200. Não é permitido usar PLC e LK200 ao mesmo tempo.";
const CL_5 = "a qualidade pode ser feita via PLC externo pela serial ou usando sensores na esteira nas entradas 2, 3 e 4.";
const CL_6 = "o menu 'apaga histórico produção' passa a exigir senha de usuário.";

const CL3500 = {
  ...BASE_LK200,

  fw_id: "CL350[SUBFW]HW[2/3]BAL[0/1]V[versão]-[OPCOES].hex",

  visao: `
    <b>Características gerais</b><br>
    • Classificadora de piso CL3500<br>
    • Gravação de pesagem<br>
    • Qualidade por sensores ou PLC externo (${CL_5})<br>
    • VISOR compatível: VisorCL3500R7_13 / VisorCL3501R7_13<br><br>
  `,

  subfw: [
    "0 – Integrador",
    "1 – Visor TXT"
  ],

  opcoes: [
    "0 – padrão",
    { label: "1 – qualidade COM0", title: CL_5 },
    { label: "2 – usa COM3 para PLC", title: CL_1 },
    { label: "4 + 1 – qualidade com sensor", title: CL_5 },
    { label: "8 – apaga histórico produção", title: CL_6 }
  ],

  portas: [
    "47000 – Visor",
    "49000 – Integra",
    "USB: não"
  ],

  entradas: [
    "Balança",
    { label: "Tara / SENS1", title: CL_3 },
    { label: "SENS2" },
    { label: "SENS3" }
  ],

  saidas: [
    "Braço 1",
    "Braço 2",
    "Braço 3",
    "Braço 4",
    "Braço 5",
    "Braço 6",
    "Braço 7",
    "Braço 8",
    { label: "1 a 32 – via PLC", title: CL_4 }
  ],

  serial: [
    "QUAL / BAL",
    "PLC",
    "BAL",
    { label: "PLC", title: CL_1 }
  ],

  memoria: [
    "Faixas: 22 (30 com opção 1)",
    "Programas: 20",
    "Produtos: 20 (10 com opção 1)",
    "Apontamentos: 10000"
  ],

  observacoes: [
    { label: "Uso sem PLC (até 8 braços)", title: CL_4 },
    "Gravador de senha e número serial Rev2"
  ],

  plc: [
    { label: "LK100R1 / LK110 FW: LK100_PLC1_2.hex", title: CL_2 },
    "LK100R2  + EXP FW: LK100V2.3-PLC.bin",
    "QUAL LK100R2 FW: LK100V1.4-B[4/6]-E[2/4]-Qty.bin",
  ]
};

/* =========================================================
 * SORTER – Separador de Caixas
 * ========================================================= */

const SORTER = {
  ...BASE_LK200,

  fw_id: "SORTERHW[2/3]V[versão]-[OPCOES].hex",

  visao: `
    <b>Características gerais</b><br>
    • Separador de caixas (SORTER)<br>
    • Operação com ou sem cancela<br>
    • Integração via rede (Integra)<br>
    • VISOR compatível: SORTERVisor4.4<br><br>
  `,



  opcoes: [
    "0 – com cancela",
    "1 – sem cancela"
  ],

  portas: [
    "47000 – Visor",
    "49000 – Integra",
    "USB: não"
  ],

  entradas: [
    "Sensor de caixa",
    "Desvio",
    "Desvio",
    "Desvio"
  ],

  saidas: [
    { label: "Sem cancela: saídas 1 a 8", title: "Configuração onde todas as saídas são usadas como sorter" },
    { label: "Com cancela: saídas 1 a 4 sorter / 5 a 8 cancela", title: "As saídas 5 a 8 são dedicadas ao controle das cancelas" }
  ],

  serial: [
    "Barcode",
    "Barcode",
    "N.A.",
    "N.A."
  ],

  memoria: [
    "Produtos: 500",
    "Apontamentos: 10000"
  ],

  observacoes: [
    "Separador de caixas dedicado",
    "Gravador de senha e número serial Rev2"
  ],

};


/* =========================================================
 * VF9000 – Verificadora de Fluxo
 * ========================================================= */

const VF9000 = {
  ...BASE_LK200,

  fw_id: "VF9000HW[2/3]BAL[0/1]V[versão]-.hex",

  visao: `
    <b>Características gerais</b><br>
    • Verificadora de fluxo VF9000<br>
    • Firmware derivado da VP9000<br>
    • Utiliza apenas o perfil principal herdado<br>
    • VISOR compatível: VP1200R8.10<br><br>
  `,

  portas: [
    "47000 – Visor",
    "49000 – Integra",
    { label: "USB", title: "USB não disponível" }
  ],

  entradas: [
    "1 – Encoder",
    { label: "2 a 4", title: "Entradas herdadas da VP9000" }
  ],



  serial: [
    { label: " a 3 BAL" }
  ],

  memoria: [
    "Produtos: 50",
    "Apontamentos: 10000"
  ],

  observacoes: [
    "Firmware específico para verificadora de fluxo",
    "Gravador de senha e número serial Rev2"
  ],

};

/* =========================================================
 * APT3000 – Apontamento Automático
 * ========================================================= */

const APT3000_NOTES = {
  note1: "Impressora automaticamente é colocada na porta livre. COM2 não disponível. C1 leitor primário, C2 secundário.",
  note2: "Herda as configurações da VP1200 Rev8 sem balança, mas usa apenas o perfil principal quando necessário para o apontamento automático.",
  note3: "C1 leitor primário, C2 leitor secundário."
};

const APT3000 = {
  ...BASE_LK200,

  fw_id: "APT3000HW[2/3]V[versão]-0.hex",

  visao: `
    <b>Características gerais</b><br>
    • Apontamento automático APT3000<br>
    • Menu interno / Sinaleiro<br>
    • Herda perfil principal da VP1200 Rev8 sem balança<br>
    • VISOR compatível: VP1200R8.10<br><br>
  `,


  portas: [
    "47000 – Visor",
    "49000 – Integra",
    { label: "USB", title: "Sim, C1" }
  ],

  entradas: [
    { label: "1 – Caixa (barcode)" },
    "2 – Rejeito (opcional)",
    { label: "3 – Esteira ON", title: C },
    "4 – Aplicador"
  ],

  saidas: [
    "Rejeito",
    "Aplicador",
    "LED Verde",
    "LED Vermelho",
    "Motor ON (só HW3)",
    "AUX1 / SPEED",
    "AUX2 / Rejeito",
    "AUX3 / Esteira"
  ],

  serial: [
    { label: "C1/C2", title: APT3000_NOTES.note3 },
    "C1/C2",
    "N.A.",
    { label: "Printer", title: APT3000_NOTES.note1 }
  ],

  memoria: [
    "Produtos: 500 HW3 / 250 HW2",
    "Apontamentos: 10000 HW3 / 7300 HW2"
  ],

  observacoes: [
    APT3000_NOTES.note2,
    "Gravador de senha e número serial Rev2"
  ],

};




/* =========================================================
 * TCL3500 – Classificadora de piso Target
 * ========================================================= */

const TCL3500_NOTES = {
  note1: "PLC para controlo de 3 conjuntos de balanças.",
  note2: "Gravador de senha e número serial Rev2."
};

const TCL3500 = {
  ...BASE_LK200,

  fw_id: "TCL3500HW3BAL2V[versão].hex",

  visao: `
    <b>Características gerais</b><br>
    • Classificadora de piso Target TCL3500<br>
    • Controle de até 4 braços + 1 lavagem<br>
    • VISOR compatível: TCL3500_1_3.exe<br><br>
  `,

  portas: [
    "47000 – Visor",
    "49000 – Integra",
    { label: "USB: Não", title: "Sem conexão USB" }
  ],

  entradas: [
    { label: "N.A.", title: "Nenhuma entrada configurada" }
  ],

  saidas: [
    "Braço 1",
    "Braço 2",
    "Braço 3",
    "Braço 4",
    "",
    "",
    "",
    "Lavagem"
  ],

  serial: [
    "LK100R2",
    "LK100R2",
    "LK100R2"
  ],

  memoria: [
    "Produtos: 20",
    "Apontamentos: 10000"
  ],

  observacoes: [
    { label: "PLC: LK100R2+LK102", title: TCL3500_NOTES.note1 },
    { label: "Gravador de senha e número serial Rev2", title: TCL3500_NOTES.note2 }
  ],

  plc: [
    { label: "LK100R2", title: TCL3500_NOTES.note1 },
    { label: "LK102", title: "expansão 8 saidas" },
  ]
};

/* =========================================================
 * PLT1200 – Paletização Automática
 * ========================================================= */

const PLT1200_NOTES = {
  note1: "Herde as configurações da VP1200 Rev8 sem balança, mas só usa o principal no momento.",
  note2: "Ver APT3000 para detalhes de serial e configuração C1/C2."
};

const PLT1200 = {
  ...BASE_LK200,

  fw_id: "PLT1200HW[2/3]V[versão]-0.hex",

  visao: `
    <b>Características gerais</b><br>
    • Paletização Automática PLT1200<br>
    • Menu interno e sinaleiro<br>
    • VISOR compatível: VP1200R8.10<br><br>
  `,


  portas: [
    "47000 – Visor",
    "49000 – Integra",
    { label: "USB: Sim (C1)", title: "Conexão USB habilitada para C1" }
  ],

  entradas: [
    { label: "Caixa (barcode)" },
    { label: "Rejeito (opcional)" },
    { label: "Esteira ON", title: C },
    { label: "Aplicador" }
  ],

  saidas: [
    "Rejeito",
    "Aplicador",
    "Verde",
    "Vermelho",
    "Motor ON",
    "AUX1 / SPEED",
    "AUX2 / Rejeito",
    "AUX3 / Esteira"
  ],

  serial: [
    "C1/C2",
    "C1/C2",
    "N.A.",
    { label: "Printer", title: PLT1200_NOTES.note2 }
  ],

  memoria: [
    "Produtos: 500 (HW3) / 250 (HW2)",
    "Apontamentos: 10000 (HW3) / 7000 (HW2)"
  ],

  observacoes: [
    { label: "Gravador de senha e número serial Rev2", title: PLT1200_NOTES.note1 },
    "USB habilita operações específicas"
  ],

};

/* =========================================================
 * BT600 – Balança Tendal
 * ========================================================= */

const BT600_NOTES = {
  note1: "Se for usar balança externa de terceiro usar opção BAL1.",
  note2: "Essa opção requer uma letra do martelo fixa antes de entrar.",
  note3: "Nas configurações do FW: escolher onde e qual balança vai ser usada, e onde liga impressora.",
  note4: "Habilita envio de peso na porta 2306.",
  note5: "Rejeito funciona como da VP9000, mas na BT por padrão não usa.",
  note6: "Tem modalidade de pesagem com e sem sensor e estática e dinâmica."
};

const BT600 = {
  ...BASE_LK200,

  fw_id: "BT600HW[2/3]BAL[0/1]V[versão]-[OPCOES].hex",

  visao: `
    <b>Características gerais</b><br>
    • Balança Tendal BT600<br>
    • VISOR compatível: VP1200R8.22<br>
    • Gravador de senha e número serial Rev2<br><br>
  `,


  opcoes: [
    "0 – padrão",
    { label: "1 – Controle câmera" },
    { label: "2 – Envia peso na rede", title: BT600_NOTES.note4 },
    { label: "4 – Martelo", title: BT600_NOTES.note2 }
  ],

  portas: [
    "47000 – Visor",
    "49000 – Integra",
    { label: "2306 – Peso OUT", title: BT600_NOTES.note4 }
  ],

  entradas: [
    { label: "Balança opcional", title: BT600_NOTES.note6 },
    { label: "AUX opcional" },
    "N.A.",
    "N.A."
  ],

  saidas: [
    { label: "Rejeito", title: BT600_NOTES.note5 },
    { label: "Rejeito", title: BT600_NOTES.note5 },
    "AUX",
    "Apontado",
    "Sistema ON",
    "Peso estável"
  ],

  serial: [
    "BAL / EXT / PRT / BC",
    "BAL / EXT / PRT / BC",
    "BAL",
    "BAL / EXT / PRT / BC",
  ],

  memoria: [
    "Produtos: 50",
    "Apontamentos: 10000"
  ],

  observacoes: [
    { label: "FW ID", title: BT600_NOTES.note1 },
    { label: "Configuração", title: BT600_NOTES.note3 },
    "Gravador de senha e número serial Rev2"
  ],


};

/* =========================================================
 * BT200 – Balança Tendal para inspeção
 * ========================================================= */

const BT200_NOTES = {
  note1: "Para não estar incluído nas diretivas de opção BT, está muito desatualizado."
};

const BT200 = {
  ...BASE_LK200,

  fw_id: "BT200C015.V3.4.hex",

  visao: `
    <b>Características gerais</b><br>
    • Balança Tendal BT200 para inspeção<br>
    • VISOR compatível: N.A.<br>
    • Gravador de senha e número serial Rev2<br><br>
  `,


  portas: [
    "47000 – Visor",
    "49000 – Integra"
  ],

  entradas: [
    { label: "N.A.", title: "Não aplicável" }
  ],

  saidas: [
    { label: "N.A.", title: "Não aplicável" }
  ],

  serial: [
    "0 – BAL / EXT",
    "1 – BAL / EXT",
    "2 – BAL"
  ],

  memoria: [
    "Produtos: 50",
    "Apontamentos: 10000"
  ],

  observacoes: [
    { label: "Observação", title: BT200_NOTES.note1 }
  ],



};

/* =========================================================
 * BT601 – Balança Tendal com pistola de gordura
 * ========================================================= */

const BT601_NOTES = {
  note1: "Para não estar incluído nas diretivas de opção BT, está muito desatualizado."
};

const BT601 = {
  ...BASE_LK200,

  fw_id: "BT601HW3C015.V1.1.hex",

  visao: `
    <b>Características gerais</b><br>
    • Balança Tendal BT601 com pistola de gordura<br>
    • VISOR compatível: N.A.<br>
    • Gravador de senha e número serial Rev2<br><br>
  `,



  portas: [
    "47000 – Visor",
    "49000 – Integra"
  ],

  entradas: [
    { label: "N.A.", title: "Não aplicável" }
  ],

  saidas: [
    { label: "N.A.", title: "Não aplicável" }
  ],

  serial: [
    "BAL / EXT",
    "BAL / EXT",
    "BAL"
  ],

  memoria: [
    "Produtos: 50",
    "Apontamentos: 10000"
  ],

  observacoes: [
    { label: "Observação", title: BT601_NOTES.note1 }
  ],


};

/* =========================================================
 * DATA – TODAS AS APLICAÇÕES LK200
 * ========================================================= */
const DATA = {
  vp1200: VP1200,
  vp9000: VP9000,
  sorter: SORTER,
  cl3500: CL3500,
  lk205: LK205,
  cp12000: CP12000,
  cp12010: CP12010,
  cpl12000: CPL12000,
  cpn12000: CPN12000,
  vf9000: VF9000,
  plt1200: PLT1200,
  apt3000: APT3000,
  bt600: BT600,
  bt200: BT200,
  bt601: BT601,
  ap300: AP300,
  lk_205d1: LK204D1,
  tcl_3500: TCL3500,
  /* ================= BB600 ================= */
  bb600: {
    title: "BB600",
    subtitle: "Balança Bancada",
    versao: "—",
    fw_id: "BB600HW[2/3].hex"
  },

};
