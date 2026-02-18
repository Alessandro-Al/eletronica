const BASE_PLC = {
    descricao: "ID FW:",
    images: {
        visao: "./img/placa.png",
    }
};

/* =========================================================
 * LK120 –
 * ========================================================= */
const LK120 = {
    descricao: "ID FW:",
    fw_id: "LK120[REV]-0-BOX.bin",
    visao: `
    <b>Características gerais</b><br>
    • PLC para controle de 3 motores de passo<br>
    • Com driver para 2 encoders<br>
    • Conexão para balança LK050<br>
    • Comunicação via RS485 e rede<br>
  `,
    descricaoPlaca: {
        titulo: "PLC Industrial LK120 ARM 7",
        hardware: [
            { label: "CPU:", valor: "72 MHz" },
            { label: "Memória RAM:", valor: "58 kB interna" },
            { label: "Armazenamento:", valor: "EEPROM" },
            { label: "Rede Ethernet:", valor: "10/100/1000 Mbps" },
            { label: "Seriais:", valor: "2: RS232 - 1: RS485" },
            { label: "Entradas:", valor: "2 encoders" },
            { label: "Saídas:", valor: "3 motores de passo" },
            { label: "Alimentação:", valor: "12V e 24V" },
        ],
    },
    images: {
        visao: "./img/placaLK120.png",
        entradas: "./img/entradaLK120.png",
        serial: "./img/serialLK120.png",
        saidas: "./img/saidaLK120.png",
    },
    entradas: [
        "2 – Encoder",
    ],
    saidas: [
        "3 – Motor de passo",
    ],
    serial: [
        "– RS232",
        "– Balança LK050",
        "– RS485",
    ],
    portas: [
        "47000 – Visor",
    ],
};


/* =========================================================
 * LK050 –
 * ========================================================= */
const LK050 = {
    descricao: "ID FW:",
    fw_id: "LK050[REV].hex",
    visao: `
    <b>Características gerais</b><br>
    • Módulo de pesagem<br>
    • AD de 24 bits até 120 samples por segundo<br>
    • Comunicação via RS232<br>
  `,
    descricaoPlaca: {
        titulo: "Módulo de Pesagem LK050 ARM® Cortex®-M0+",
        hardware: [
            { label: "CPU:", valor: "48 MHz" },
            { label: "Memória RAM:", valor: "32 kB interna" },
            { label: "Seriais:", valor: "1: RS232" },
            { label: "Entradas:", valor: "1 load cell" },
            { label: "Alimentação:", valor: "5V ou 12V configurável" },
            { label: "Conversor A/D:", valor: "24 bits 3.84 ksample" },
        ],
    },
    images: {
        visao: "./img/placaLK050.png",
    },
    entradas: [
        "Load cell",
    ],
    serial: [
        "– RS232",
    ],
};

/* =========================================================
 * LK010 –
 * ========================================================= */
const LK010 = {
    descricao: "ID FW:",
    fw_id: "RFID2_1[OPCOES].BIN",
    visao: `
    <b>Características gerais</b><br>
    • Módulo de leitura de TAG RFID 125 kHz<br>
    • Comunicação via RS232<br>
  `,
    images: {
        visao: "./img/placaLK010.png",
    },
    descricaoPlaca: {
        titulo: "Leitor RFID LK010",
        hardware: [
            { label: "CPU:", valor: "64 MHz" },
            { label: "Memória RAM:", valor: "768 B interna" },
            { label: "Seriais:", valor: "2: RS232" },
            { label: "Entradas:", valor: "1 antena 125 kHz" },
            { label: "Alimentação:", valor: "5V ou 12V configurável" },
            { label: "TAG:", valor: "Vários protocolos" },
        ],
    },
    opcoes: [
        { label: "[] Para CL12000", title: "Envia ID da TAG conforme protocolo dedicado CL12000" },
        { label: "[AS] Para VP", title: "Envia ID da TAG em modalidade ASCII" }
    ],
    entradas: [
        "Antena 125 kHz",
    ],
    serial: [
        "– RS232 Debug",
        "– RS232 Envio de TAG",
    ],
    observacoes: [
        "Para CL é ligado ao LK100R2 versão DROP"
    ],
};


/* =========================================================
 * LK099 –
 * ========================================================= */
const LK099 = {
    descricao: "ID FW:",
    fw_id: "RFID3Q7.BIN",
    visao: `
    <b>Características gerais</b><br>
    • Módulo de leitura de TAG RFID 125 kHz<br>
    • Comunicação via RS485 para rede DROP (não CL12010)<br>
  `,
    descricaoPlaca: {
        titulo: "DROP com Leitor RFID LK099",
        hardware: [
            { label: "CPU:", valor: "64 MHz" },
            { label: "Memória RAM:", valor: "768 B interna" },
            { label: "Seriais:", valor: "1: RS232 - 1: RS485" },
            { label: "Entradas:", valor: "1 antena 125 kHz" },
            { label: "Alimentação:", valor: "5V ou 12V configurável" },
            { label: "TAG:", valor: "Vários protocolos" },
        ],
    },
    images: {
        visao: "./img/placaLK099.png",
        entradas: "./img/entradaLK099.png",
        serial: "./img/serialLK099.png",
        saidas: "./img/saidaLK099.png",
    },
    entradas: [
        "Antena 125 kHz",
        "2 digitais"
    ],
    saidas: [
        { label: "DROP" },
        { label: "Auxiliar" },
    ],
    serial: [
        "– RS232 Debug",
        "– RS485 conexão para CL12010",
    ],
};


/* =========================================================
 * LK070 –
 * ========================================================= */
const LK070 = {
    descricao: "ID FW:",
    fw_id: "",
    descricaoPlaca: {
        titulo: "Leitor de Código de Barras",
        hardware: [
            { label: "CPU:", valor: "Quad-Core ARM A53 @1.2 GHz" },
            { label: "Memória RAM:", valor: "1 GB DDR-SDRAM" },
            { label: "Armazenamento:", valor: "16 GB Flash" },
            { label: "CCD:", valor: "1/2.9″ CMOS Sensor, Sony® Pregius™ IMX273" },
            { label: "Lente:", valor: "Foco digital" },
            { label: "Resolução:", valor: "1456 x 1088 pixels" },
            { label: "Frame Rate:", valor: "> 200 fps" },
            { label: "Seriais:", valor: "1: RS232" },
            { label: "Entrada:", valor: "1: Trigger" },
            { label: "Saídas:", valor: "2 optoacopladas" },
            { label: "Rede Ethernet:", valor: "10/100/1000 Mbps" },
            { label: "Alimentação:", valor: "24V" },
        ],
    },
    images: {
        visao: "./img/placaLK070.png",
    },
    visao: `
    <b>Características gerais</b><br>
    • Leitor de código de barras 1D e 2D<br>
    • Comunicação via RS232 e rede<br>
  `,
};

/* =========================================================
 * DATA – TODAS AS APLICAÇÕES
 * ========================================================= */
const DATA = {
    lk120: LK120,
    lk050: LK050,
    lk010: LK010,
    lk099: LK099,
    lk070: LK070,
};
