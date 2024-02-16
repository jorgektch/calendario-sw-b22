//import esLocale from '@fullcalendar/core/locales/es';

const btn = document.getElementsByClassName('fc-today-button');

document.addEventListener('DOMContentLoaded', function() {

    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        handleWindowResize: true,
        buttonText: { today: "Hoy" },
        initialView: 'dayGridMonth',
        events: 
        [
            {
             "title": "🎉 Cumpleaños de JORGE JESUS QUISPE VILLAVERDE",
             "display": "block",
             "start": "2024-12-18",
             "end": "2024-12-18"
            },
            {
             "title": "🎉 Cumpleaños de PAOLO LUIS FLORES CONGORA",
             "display": "block",
             "start": "2024-01-04",
             "end": "2024-01-04"
            },
            {
             "title": "🎉 Cumpleaños de YAYIR FLABIO MATTOS HILARIO",
             "display": "block",
             "start": "2024-04-04",
             "end": "2024-04-04"
            },
            {
             "title": "🎉 Cumpleaños de LUIS EDUARDO CALLE HUAMANTINCO",
             "display": "block",
             "start": "2024-11-03",
             "end": "2024-11-03"
            },
            {
             "title": "🎉 Cumpleaños de SEBASTIAN ANTONIO CUETO SALAZAR",
             "display": "block",
             "start": "2024-02-15",
             "end": "2024-02-15"
            },
            {
             "title": "🎉 Cumpleaños de DAMARIS MARIAN DEL CARPIO MARTINEZ",
             "display": "block",
             "start": "2024-01-10",
             "end": "2024-01-10"
            },
            {
             "title": "🎉 Cumpleaños de DANIEL DAVID LORENZO RAMOS",
             "display": "block",
             "start": "2024-07-31",
             "end": "2024-07-31"
            },
            {
             "title": "🎉 Cumpleaños de RODRIGO JOSE ALVA SÁENZ",
             "display": "block",
             "start": "2024-09-22",
             "end": "2024-09-22"
            },
            {
             "title": "🎉 Cumpleaños de SEBASTIAN SANTIAGO AYALA ALBERCA",
             "display": "block",
             "start": "2024-12-25",
             "end": "2024-12-25"
            },
            {
             "title": "🎉 Cumpleaños de PEDRO JOSUE SOTA RIOS",
             "display": "block",
             "start": "2024-07-15",
             "end": "2024-07-15"
            },
            {
             "title": "🎉 Cumpleaños de RUTH CAMILA ROJAS CASTAÑEDA",
             "display": "block",
             "start": "2024-09-15",
             "end": "2024-09-15"
            },
            {
             "title": "🎉 Cumpleaños de BRAYAN ALEJANDRO ALQUIZAR FLORES",
             "display": "block",
             "start": "2024-10-21",
             "end": "2024-10-21"
            },
            {
             "title": "🎉 Cumpleaños de JEREMY ANDREW ROSILLO RAMÍREZ",
             "display": "block",
             "start": "2024-12-11",
             "end": "2024-12-11"
            },
            {
             "title": "🎉 Cumpleaños de RICHARD MAYCOL TORRES RIVERA",
             "display": "block",
             "start": "2024-11-27",
             "end": "2024-11-27"
            },
            {
             "title": "🎉 Cumpleaños de KARLO ANDRES TORO VARGAS",
             "display": "block",
             "start": "2024-12-02",
             "end": "2024-12-02"
            },
            {
             "title": "🎉 Cumpleaños de OSCAR SEBASTIAN MONZON ARGÜELLES",
             "display": "block",
             "start": "2024-11-25",
             "end": "2024-11-25"
            },
            {
             "title": "🎉 Cumpleaños de ALVARO ANDRES CHAVEZ CCAHUANA",
             "display": "block",
             "start": "2024-11-07",
             "end": "2024-11-07"
            },
            {
             "title": "🎉 Cumpleaños de JESUS STEVAN DIAZ INGOL",
             "display": "block",
             "start": "2024-03-27",
             "end": "2024-03-27"
            },
            {
             "title": "🎉 Cumpleaños de ENMANUEL JOSE OBANDO SALINAS",
             "display": "block",
             "start": "2024-07-19",
             "end": "2024-07-19"
            },
            {
             "title": "🎉 Cumpleaños de HUGO SEBASTIAN ALVAREZ MORA",
             "display": "block",
             "start": "2024-10-29",
             "end": "2024-10-29"
            },
            {
             "title": "🎉 Cumpleaños de ALFREDO JHONATAN BARTOLO HUNGARO",
             "display": "block",
             "start": "2024-06-21",
             "end": "2024-06-21"
            },
            {
             "title": "🎉 Cumpleaños de GERARDO DANIEL LADERA ARIAS",
             "display": "block",
             "start": "2024-03-22",
             "end": "2024-03-22"
            },
            {
             "title": "🎉 Cumpleaños de MATEO ALEJANDRO CHOY RIOS",
             "display": "block",
             "start": "2024-05-22",
             "end": "2024-05-22"
            },
            {
             "title": "🎉 Cumpleaños de ANDRE FABRIZZIO ROMAN SUYO",
             "display": "block",
             "start": "2024-04-16",
             "end": "2024-04-16"
            },
            {
             "title": "🎉 Cumpleaños de SEBASTIAN FERNANDO CASTILLO LAYME",
             "display": "block",
             "start": "2024-06-16",
             "end": "2024-06-16"
            },
            {
             "title": "🎉 Cumpleaños de LUIZ IGNACIO QUINECHE CASANA",
             "display": "block",
             "start": "2024-11-22",
             "end": "2024-11-22"
            },
            {
             "title": "🎉 Cumpleaños de CHRISTIAN GIOVANNI MONTES RAMOS",
             "display": "block",
             "start": "2024-11-21",
             "end": "2024-11-21"
            },
            {
             "title": "🎉 Cumpleaños de SOFIA FERNANDA SARMIENTO QUISPE",
             "display": "block",
             "start": "2024-02-21",
             "end": "2024-02-21"
            },
            {
             "title": "🎉 Cumpleaños de RICARDO ALDAIR CALDERON FLORES",
             "display": "block",
             "start": "2024-09-21",
             "end": "2024-09-21"
            },
            {
             "title": "🎉 Cumpleaños de SEBASTIAN ALBERTO ROJAS ROJAS",
             "display": "block",
             "start": "2024-01-20",
             "end": "2024-01-20"
            },
            {
             "title": "🎉 Cumpleaños de JHORDAN JHOVANY LAUREANO MEZA",
             "display": "block",
             "start": "2024-10-02",
             "end": "2024-10-02"
            },
            {
             "title": "🎉 Cumpleaños de ABRAHAM JOSUE CARBAJAL GUTIERREZ",
             "display": "block",
             "start": "2024-01-03",
             "end": "2024-01-03"
            },
            {
             "title": "🎉 Cumpleaños de DIEGO VALENTINO GAMARRA CHAVEZ",
             "display": "block",
             "start": "2024-01-22",
             "end": "2024-01-22"
            },
            {
             "title": "🎉 Cumpleaños de ALWIN EDU DAVILA RAFFO",
             "display": "block",
             "start": "2024-09-07",
             "end": "2024-09-07"
            },
            {
             "title": "🎉 Cumpleaños de FRANZ ESTEBAN CHIPANA ARELLANO",
             "display": "block",
             "start": "2024-10-26",
             "end": "2024-10-26"
            },
            {
             "title": "🎉 Cumpleaños de PAOLA RAYZA ABAL CARHUANCHO",
             "display": "block",
             "start": "2024-11-14",
             "end": "2024-11-14"
            },
            {
             "title": "🎉 Cumpleaños de JOSE LUIS LA TORRE ROMERO",
             "display": "block",
             "start": "2024-05-28",
             "end": "2024-05-28"
            },
            {
             "title": "🎉 Cumpleaños de BRUNO PUMAPILLO SARMIENTO",
             "display": "block",
             "start": "2024-03-21",
             "end": "2024-03-21"
            },
            {
             "title": "🎉 Cumpleaños de MIGUEL ANGEL VERA ALVA",
             "display": "block",
             "start": "2024-04-26",
             "end": "2024-04-26"
            },
            {
             "title": "🎉 Cumpleaños de JOAR JESUS ARANDA VEGA",
             "display": "block",
             "start": "2024-10-01",
             "end": "2024-10-01"
            },
            {
             "title": "🎉 Cumpleaños de LUIS ALBERTO MACHACA MAMANI",
             "display": "block",
             "start": "2024-05-16",
             "end": "2024-05-16"
            },
            {
             "title": "🎉 Cumpleaños de DAVID EDSON CISNEROS CULACA",
             "display": "block",
             "start": "2024-07-02",
             "end": "2024-07-02"
            },
            {
             "title": "🎉 Cumpleaños de ANDRE ALONSO MALLMA VARGAS",
             "display": "block",
             "start": "2024-01-03",
             "end": "2024-01-03"
            },
            {
             "title": "🎉 Cumpleaños de LAURA CECILIA MENDOZA MORALES",
             "display": "block",
             "start": "2024-05-16",
             "end": "2024-05-16"
            },
            {
             "title": "🎉 Cumpleaños de DENILSON TEOFILO MORALES MALLQUI",
             "display": "block",
             "start": "2024-07-22",
             "end": "2024-07-22"
            },
            {
             "title": "🎉 Cumpleaños de LEONID CALONGOS JARA",
             "display": "block",
             "start": "2024-08-09",
             "end": "2024-08-09"
            },
            {
             "title": "🎉 Cumpleaños de ELVIS GIOVANNI CORONEL CALLUPE",
             "display": "block",
             "start": "2024-08-17",
             "end": "2024-08-17"
            },
            {
             "title": "🎉 Cumpleaños de ADRIAN ALESSANDRO PALACIOS AGUILAR",
             "display": "block",
             "start": "2024-04-17",
             "end": "2024-04-17"
            },
            {
             "title": "🎉 Cumpleaños de ABIGAIL YOMELA LLANA OSORIO",
             "display": "block",
             "start": "2024-06-10",
             "end": "2024-06-10"
            },
            {
             "title": "🎉 Cumpleaños de ANTHONY BRAYAN CAMPOS SARAVIA",
             "display": "block",
             "start": "2024-05-03",
             "end": "2024-05-03"
            },
            {
             "title": "🎉 Cumpleaños de SHAMIR MANTILLA FLORES",
             "display": "block",
             "start": "2024-01-25",
             "end": "2024-01-25"
            },
            {
             "title": "🎉 Cumpleaños de ANGELA LUCIA JARA ESPINOZA",
             "display": "block",
             "start": "2024-03-30",
             "end": "2024-03-30"
            },
            {
             "title": "🎉 Cumpleaños de JHONATAN SAID JARA MAYTA",
             "display": "block",
             "start": "2024-04-01",
             "end": "2024-04-01"
            },
            {
             "title": "🎉 Cumpleaños de JOSE ANTONIO ZEGARRA MEDINA",
             "display": "block",
             "start": "2024-10-08",
             "end": "2024-10-08"
            },
            {
             "title": "🎉 Cumpleaños de JOSE LUIS PARRALES TORRES",
             "display": "block",
             "start": "2024-04-07",
             "end": "2024-04-07"
            },
            {
             "title": "🎉 Cumpleaños de WILSON FABRIZZIO ESPINOZA APONTE",
             "display": "block",
             "start": "2024-07-28",
             "end": "2024-07-28"
            },
            {
             "title": "🎉 Cumpleaños de DIEGO ALONSO CALDERON MATIAS",
             "display": "block",
             "start": "2024-04-03",
             "end": "2024-04-03"
            },
            {
             "title": "🎉 Cumpleaños de MATTHEW ALEXANDRE PARIONA MOLINA",
             "display": "block",
             "start": "2024-09-17",
             "end": "2024-09-17"
            },
            {
             "title": "🎉 Cumpleaños de VILBERTO ALBERTO PATRICIO JULCA",
             "display": "block",
             "start": "2024-11-04",
             "end": "2024-11-04"
            },
            {
             "title": "🎉 Cumpleaños de FRANK KEVIN CONDOR HUARHUACHI",
             "display": "block",
             "start": "2024-01-05",
             "end": "2024-01-05"
            },
            {
             "title": "🎉 Cumpleaños de DIEGO ALONSO GUZMAN ROMERO",
             "display": "block",
             "start": "2024-06-08",
             "end": "2024-06-08"
            },
            {
             "title": "🎉 Cumpleaños de BRAULIO ANDRE SALDAÑA ALARCON",
             "display": "block",
             "start": "2024-03-21",
             "end": "2024-03-21"
            },
            {
             "title": "🎉 Cumpleaños de RENZO ALEXANDER MUNAYCO VIVANCO",
             "display": "block",
             "start": "2024-09-25",
             "end": "2024-09-25"
            },
            {
             "title": "🎉 Cumpleaños de RODRIGO JOAQUIN CALDERON ZUÑIGA",
             "display": "block",
             "start": "2024-10-29",
             "end": "2024-10-29"
            },
            {
             "title": "🎉 Cumpleaños de ERICK MARTIN ALEGRE MAYANGA",
             "display": "block",
             "start": "2024-09-25",
             "end": "2024-09-25"
            },
            {
             "title": "🎉 Cumpleaños de ANDREW GABRIEL SERNA QUIROZ",
             "display": "block",
             "start": "2024-08-17",
             "end": "2024-08-17"
            },
            {
             "title": "🎉 Cumpleaños de LUIS YAZID ARROYO VASQUEZ",
             "display": "block",
             "start": "2024-05-17",
             "end": "2024-05-17"
            },
            {
             "title": "🎉 Cumpleaños de EVER FRANK AVENDAÑO MEZA",
             "display": "block",
             "start": "2024-07-22",
             "end": "2024-07-22"
            },
            {
             "title": "🎉 Cumpleaños de DIEGO ALBERTO SALAZAR GARCIA",
             "display": "block",
             "start": "2024-12-20",
             "end": "2024-12-20"
            },
            {
             "title": "🎉 Cumpleaños de JHON FRANCO RIDOUTT QUIÑONES",
             "display": "block",
             "start": "2024-07-14",
             "end": "2024-07-14"
            },
            {
             "title": "🎉 Cumpleaños de DEYVI PEDRO GOMEZ OLIVAS",
             "display": "block",
             "start": "2024-12-06",
             "end": "2024-12-06"
            },
            {
             "title": "🎉 Cumpleaños de CARLOS DANIEL MENDOZA GOMEZ",
             "display": "block",
             "start": "2024-12-03",
             "end": "2024-12-03"
            },
            {
             "title": "🎉 Cumpleaños de CARLOS ANDRES MONTENEGRO CAJAHUAMAN",
             "display": "block",
             "start": "2024-05-17",
             "end": "2024-05-17"
            },
            {
             "title": "🎉 Cumpleaños de MAX STEVEN ASTUHUAMAN VEGA",
             "display": "block",
             "start": "2024-11-06",
             "end": "2024-11-06"
            },
            {
             "title": "🎉 Cumpleaños de KILTOM ADOLFO PAUCAR",
             "display": "block",
             "start": "2024-08-24",
             "end": "2024-08-24"
            },
            {
             "title": "🎉 Cumpleaños de GIACOMO SALVADOR MADRID RUIZ",
             "display": "block",
             "start": "2024-06-18",
             "end": "2024-06-18"
            },
            {
             "title": "🎉 Cumpleaños de ELEAZAR CENTENO ARANA",
             "display": "block",
             "start": "2024-01-10",
             "end": "2024-01-10"
            },
            {
             "title": "🎉 Cumpleaños de HARUMI NAYELI CONTRERAS QUISPE",
             "display": "block",
             "start": "2024-09-08",
             "end": "2024-09-08"
            },
            {
             "title": "🎉 Cumpleaños de LEONARDO GABRIEL SEGURA PACHERRES",
             "display": "block",
             "start": "2024-03-14",
             "end": "2024-03-14"
            },
            {
             "title": "🎉 Cumpleaños de JOSE BENJAMIN FLORES GOMEZ",
             "display": "block",
             "start": "2024-02-02",
             "end": "2024-02-02"
            },
            {
             "title": "🎉 Cumpleaños de GIOVANNI ALEXANDER ARIAS CHUMPITAZ",
             "display": "block",
             "start": "2024-10-06",
             "end": "2024-10-06"
            },
            {
             "title": "🎉 Cumpleaños de EDGARDO JUAN JULIAN BARBOZA RINCON",
             "display": "block",
             "start": "2024-02-22",
             "end": "2024-02-22"
            },
            {
             "title": "🎉 Cumpleaños de JHAN BRAYAN ZAMIR REYES FABIAN",
             "display": "block",
             "start": "2024-07-19",
             "end": "2024-07-19"
            },
            {
             "title": "🎉 Cumpleaños de JOSHÚA ANDRÉ BARRANTES NAVARRO",
             "display": "block",
             "start": "2024-02-14",
             "end": "2024-02-14"
            },
            {
             "title": "🎉 Cumpleaños de BRUNO GIANCARLO FLORES ALCARRAZ",
             "display": "block",
             "start": "2024-05-14",
             "end": "2024-05-14"
            },
            {
             "title": "🎉 Cumpleaños de GABRIEL OMAR USCAMAYTA SANCHEZ",
             "display": "block",
             "start": "2024-04-18",
             "end": "2024-04-18"
            },
            {
             "title": "🎉 Cumpleaños de BRUNO OMAR CHOCHOCA YARLEQUE",
             "display": "block",
             "start": "2024-12-06",
             "end": "2024-12-06"
            },
            {
             "title": "🎉 Cumpleaños de DARWIN JOSTEIN ROJAS ROJAS",
             "display": "block",
             "start": "2024-08-15",
             "end": "2024-08-15"
            },
            {
             "title": "🎉 Cumpleaños de ERICK MARTIN ESTRADA BRICEÑO",
             "display": "block",
             "start": "2024-11-17",
             "end": "2024-11-17"
            },
            {
             "title": "🎉 Cumpleaños de JOSE LUIS LIMACHI SARMIENTO",
             "display": "block",
             "start": "2024-04-28",
             "end": "2024-04-28"
            },
            {
             "title": "🎉 Cumpleaños de KENNER ALISON TATAJE GUZMAN",
             "display": "block",
             "start": "2024-02-17",
             "end": "2024-02-17"
            },
            {
             "title": "🎉 Cumpleaños de FAVIO ROUILLON HARO",
             "display": "block",
             "start": "2024-12-28",
             "end": "2024-12-28"
            },
            {
             "title": "🎉 Cumpleaños de NICOLAS JEAN CARLOS AVALOS RODRIGUEZ",
             "display": "block",
             "start": "2024-04-13",
             "end": "2024-04-13"
            },
            {
             "title": "🎉 Cumpleaños de JOSE LUIS CHACO FLORES",
             "display": "block",
             "start": "2024-04-01",
             "end": "2024-04-01"
            },
            {
             "title": "🎉 Cumpleaños de MATIAS SEBASTIAN VINCULA NUÑOVERO",
             "display": "block",
             "start": "2024-05-23",
             "end": "2024-05-23"
            },
            {
             "title": "🎉 Cumpleaños de MAXIMO LENNY ROMAN HURTADO",
             "display": "block",
             "start": "2024-09-13",
             "end": "2024-09-13"
            },
            {
             "title": "🎉 Cumpleaños de FRANS ANDRE MALLCO LAURENTE",
             "display": "block",
             "start": "2024-10-27",
             "end": "2024-10-27"
            },
            {
             "title": "🎉 Cumpleaños de RODRIGO DAVALOS BENITO",
             "display": "block",
             "start": "2024-05-21",
             "end": "2024-05-21"
            },
            {
             "title": "🎉 Cumpleaños de JOSE LUIS CHAVEZ GAVE",
             "display": "block",
             "start": "2024-06-22",
             "end": "2024-06-22"
            },
            {
             "title": "🎉 Cumpleaños de CHRISTIAN PIERO GUEVARA LAIZA",
             "display": "block",
             "start": "2024-03-06",
             "end": "2024-03-06"
            },
            {
             "title": "🎉 Cumpleaños de ASTHRI JOANNE PARDAVE JARA",
             "display": "block",
             "start": "2024-05-05",
             "end": "2024-05-05"
            },
            {
             "title": "🎉 Cumpleaños de LEONARDO JUSTO PANTA LABAN",
             "display": "block",
             "start": "2024-08-04",
             "end": "2024-08-04"
            },
            {
             "title": "🎉 Cumpleaños de FABRIZIO GABRIEL RAMIREZ PATIÑO",
             "display": "block",
             "start": "2024-05-20",
             "end": "2024-05-20"
            },
            {
             "title": "🎉 Cumpleaños de YAEL JORGE CHAVEZ BARDALES",
             "display": "block",
             "start": "2024-12-26",
             "end": "2024-12-26"
            },
            {
             "title": "🎉 Cumpleaños de FLAVIO MANUEL SANTOS CHOZO",
             "display": "block",
             "start": "2024-07-24",
             "end": "2024-07-24"
            },
            {
             "title": "🎉 Cumpleaños de MARCO ANTONIO CHUQUIYAURI GARCIA",
             "display": "block",
             "start": "2024-09-24",
             "end": "2024-09-24"
            },
            {
             "title": "🎉 Cumpleaños de LUIS ANTONIO CAYCHO MUÑOZ",
             "display": "block",
             "start": "2024-09-23",
             "end": "2024-09-23"
            },
            {
             "title": "🎉 Cumpleaños de KEVIN MARCELO JARA MEJIA",
             "display": "block",
             "start": "2024-08-16",
             "end": "2024-08-16"
            },
            {
             "title": "🎉 Cumpleaños de YAN LUIS VILLANUEVA OLASCUAGA",
             "display": "block",
             "start": "2024-02-20",
             "end": "2024-02-20"
            },
            {
             "title": "🎉 Cumpleaños de MANUEL ANDRE CHUMPITAZI RUIZ",
             "display": "block",
             "start": "2024-12-26",
             "end": "2024-12-26"
            },
            {
             "title": "🎉 Cumpleaños de ELBERTH CESAR ZARAGOZA TOLENTINO",
             "display": "block",
             "start": "2024-02-25",
             "end": "2024-02-25"
            },
            {
             "title": "🎉 Cumpleaños de DAYANA EUNICE CANCHO RAMIREZ",
             "display": "block",
             "start": "2024-05-03",
             "end": "2024-05-03"
            },
            {
             "title": "🎉 Cumpleaños de PATRICK EFRAIN POSTILLOS ESTRADA",
             "display": "block",
             "start": "2024-09-08",
             "end": "2024-09-08"
            },
            {
             "title": "🎉 Cumpleaños de LUIS DAVID JIMENEZ GUTIERREZ",
             "display": "block",
             "start": "2024-09-11",
             "end": "2024-09-11"
            },
            {
             "title": "🎉 Cumpleaños de RODRIGO ALEXANDER CORNEJO WONG",
             "display": "block",
             "start": "2024-02-27",
             "end": "2024-02-27"
            },
            {
             "title": "🎉 Cumpleaños de WILLS JURGEN PAJUELO BELLO",
             "display": "block",
             "start": "2024-07-10",
             "end": "2024-07-10"
            }
           ]
    });

    btn.textContent = 'XDDDDD';

    calendar.setOption('locale', 'es');
    calendar.render();
});

