import { map } from '@windy/map';

const boatInfoTJV =
{
    62: {
      boatName: 'Alla Grande Pirelli',
      skipperNames: 'Ambrogio BECCARIA & Nicolas ANDRIEU',
      category: 'class40'
    },
    78: {
      boatName: 'IBSA',
      skipperNames: 'Alberto BONA & Pablo SANTURDE DEL ARCO',
      category: 'class40'
    },
    64: {
      boatName: 'Amarris',
      skipperNames: 'Achille NEBOUT & Gildas MAHE',
      category: 'class40'
    },
    85: {
      boatName: 'Legallais',
      skipperNames: 'Fabien DELAHAYE & Corentin DOUGUET',
      category: 'class40'
    },
    66: {
      boatName: 'Café Joyeux',
      skipperNames: "Nicolas D'ESTAIS & Léo DEBIESSE",
      category: 'class40'
    },
    93: {
      boatName: 'Project Rescue Ocean',
      skipperNames: 'Axel TRÉHIN & Gwenaël RIOU',
      category: 'class40'
    },
    80: {
      boatName: 'Inter Invest',
      skipperNames: 'Matthieu PERRAUT & Kevin BLOCH',
      category: 'class40'
    },
    77: {
      boatName: 'Groupe SNEF',
      skipperNames: 'Xavier MACAIRE & Pierre LEBOUCHER',
      category: 'class40'
    },
    81: {
      boatName: 'La Boulangère Bio',
      skipperNames: 'Amélie GRASSI & Anne-Claire LE BERRE',
      category: 'class40'
    },
    69: {
      boatName: 'Crédit Mutuel',
      skipperNames: 'Ian LIPINSKI & Antoine CARPENTIER',
      category: 'class40'
    },
    76: {
      boatName: 'Everial',
      skipperNames: 'Erwan LE DRAOULEC & Tanguy LEGLATIN',
      category: 'class40'
    },
    102: {
      boatName: 'Vogue Avec Un Crohn',
      skipperNames: 'Pierre-Louis ATTWELL & Maxime BENSA',
      category: 'class40'
    },
    96: {
      boatName: 'Seafrigo - Sogestran',
      skipperNames: 'Cédric CHATEAU & Guillaume PIROUELLE',
      category: 'class40'
    },
    100: {
      boatName: 'Tquila',
      skipperNames: 'Alister RICHARDSON & Brian THOMPSON',
      category: 'class40'
    },
    79: {
      boatName: 'Influence 2',
      skipperNames: 'Andrea FORNARO & Benoît HANTZPERG',
      category: 'class40'
    },
    63: {
      boatName: 'Alternative Sailing - Constructions Du Belon',
      skipperNames: 'Estelle GRECK & Mathieu JONES',
      category: 'class40'
    },
    68: {
      boatName: 'Centrakor',
      skipperNames: 'Mikael MERGUI & Ludovic  MÉCHIN',
      category: 'class40'
    },
    92: {
      boatName: 'Sign For Com',
      skipperNames: 'Lennart BURKE & Melwin FINK',
      category: 'class40'
    },
    103: {
      boatName: 'Wasabiii',
      skipperNames: 'Stéphane BODIN & Swann HAYEWSKI',
      category: 'class40'
    },
    65: {
      boatName: 'AMIPI - Tombelaine Coquillages',
      skipperNames: 'Baptiste HULIN & Arthur HUBERT',
      category: 'class40'
    },
    75: {
      boatName: 'Edenred',
      skipperNames: 'Emmanuel LE ROCH & Basile BOURGNON',
      category: 'class40'
    },
    67: {
      boatName: 'Captain Alternance',
      skipperNames: 'Keni PIPEROL & Thomas JOURDREN',
      category: 'class40'
    },
    104: {
      boatName: 'Team Zeiss-weeecycling',
      skipperNames: 'Thimoté POLET & Pierrick LETOUZE',
      category: 'class40'
    },
    86: {
      boatName: "L'envol-kermarrec Promotion",
      skipperNames: 'Anatole FACON & Alice VALIERGUE',
      category: 'class40'
    },
    74: {
      boatName: 'P - Eden Park - Les Papillons Du Ciel',
      skipperNames: 'Nicolas BOMBRUN & Paul BRANDEL',
      category: 'class40'
    },
    73: {
      boatName: 'Google Chrome',
      skipperNames: 'Kieran LE BORGNE & Basile BUISSON',
      category: 'class40'
    },
    90: {
      boatName: 'P - Mussulo 40',
      skipperNames: 'Jose Guilherme CALDAS & Gustavo PEIXOTO',
      category: 'class40'
    },
    88: {
      boatName: 'P - Vogue Le Monde',
      skipperNames: 'Benoit LEQUIN & Stéphane HUNOT',
      category: 'class40'
    },
    101: {
      boatName: 'P - Trimcontrol',
      skipperNames: 'Alexandre LE GALLAIS & Carlo VROON',
      category: 'class40'
    },
    82: {
      boatName: 'La Manche #Evidence Nautique',
      skipperNames: 'Nicolas JOSSIER & Alexis LOISON',
      category: 'class40'
    },
    91: {
      boatName: 'Nestenn - Entrepreneurs Pour La Planète',
      skipperNames: 'Jules BONNIER & Robin FOLLIN',
      category: 'class40'
    },
    97: {
      boatName: 'P - Sotraplant TRS',
      skipperNames: 'Matthieu FOULQUIER-GAZAGNES & Michel MILANESE',
      category: 'class40'
    },
    70: {
      boatName: 'Crosscall',
      skipperNames: 'Aurélien DUCROZ & Vincent RIOU',
      category: 'class40'
    },
    83: {
      boatName: 'P - Label Emmaüs',
      skipperNames: 'Jérôme LESIEUR & Damien JENNER',
      category: 'class40'
    },
    98: {
      boatName: 'ENGIE - DFDS - Brittany Ferries',
      skipperNames: 'Pamela LEE & Tiphaine RAGUENEAU',
      category: 'class40'
    },
    87: {
      boatName: 'P - Martinique Tchalian',
      skipperNames: 'Hervé JEAN-MARIE & Jean-Yves AGLAE',
      category: 'class40'
    },
    84: {
      boatName: 'P - Le Bleuet De France',
      skipperNames: 'Charlotte CORMOULS-HOULES & Claire-Victoire DE FLEURIAN',
      category: 'class40'
    },
    94: {
      boatName: 'Qwanza',
      skipperNames: 'Goulven MARIE & Nicolas BATTESTI',
      category: 'class40'
    },
    99: {
      boatName: 'The Sea Cleaners - Univerre - Ensm',
      skipperNames: 'Renaud COURBON & François CHAMPION',
      category: 'class40'
    },
    71: {
      boatName: 'Curium Life Forward',
      skipperNames: 'Marc LEPESQUEUX & Renaud DEHARENG',
      category: 'class40'
    },
    89: {
      boatName: 'Movember',
      skipperNames: 'Bertrand GUILLONNEAU & Kito DE PAVANT',
      category: 'class40'
    },
    61: {
      boatName: 'Acrobatica',
      skipperNames: 'Alberto RIVA & Jean MARRE',
      category: 'class40'
    },
    72: {
      boatName: 'Dékuple',
      skipperNames: 'William MATHELIN-MOREAUX & Pietro LUCIANI',
      category: 'class40'
    },
    95: {
      boatName: 'P - Rêve À Perte De Vue',
      skipperNames: 'Joël PARIS & Jérôme RAGIMBEAU',
      category: 'class40'
    },
    29: {
      boatName: 'FOR PEOPLE',
      skipperNames: 'Thomas RUYANT & Morgan LAGRAVIERE',
      category: 'imoca'
    },
    23: {
      boatName: 'Charal',
      skipperNames: 'Jérémie BEYOU & Franck CAMMAS',
      category: 'imoca'
    },
    40: {
      boatName: 'Initiatives Coeur',
      skipperNames: 'Sam DAVIES & Jack BOUTTELL',
      category: 'imoca'
    },
    53: {
      boatName: 'Paprec Arkéa',
      skipperNames: 'Yoann RICHOMME & Yann ELIES',
      category: 'imoca'
    },
    58: {
      boatName: 'Teamwork.net',
      skipperNames: 'Justine METTRAUX & Julien VILLION',
      category: 'imoca'
    },
    30: {
      boatName: 'FOR THE PLANET',
      skipperNames: 'Sam GOODCHILD & Antoine KOCH',
      category: 'imoca'
    },
    47: {
      boatName: 'Malizia - Seaexplorer',
      skipperNames: 'Boris HERRMANN & William HARRIS',
      category: 'imoca'
    },
    46: {
      boatName: 'Maître CoQ V',
      skipperNames: 'Yannick BESTAVEN & Julien PULVE',
      category: 'imoca'
    },
    35: {
      boatName: 'Groupe Dubreuil',
      skipperNames: 'Sébastien SIMON & Iker MARTINEZ',
      category: 'imoca'
    },
    43: {
      boatName: "L'occitane En Provence",
      skipperNames: 'Clarisse CRÉMER & Alan ROBERTS',
      category: 'imoca'
    },
    36: {
      boatName: 'GUYOT environnement - Water Family',
      skipperNames: 'Benjamin DUTREUX & Corentin  HOREAU',
      category: 'imoca'
    },
    59: {
      boatName: 'V and B - Monbana - Mayenne',
      skipperNames: 'Maxime SOREL & Christopher PRATT',
      category: 'imoca'
    },
    34: {
      boatName: 'Groupe APICIL',
      skipperNames: 'Damien SEGUIN & Laurent  BOURGUES',
      category: 'imoca'
    },
    55: {
      boatName: 'Prysmian Group',
      skipperNames: 'Giancarlo PEDOTE & Gaston MORVAN',
      category: 'imoca'
    },
    31: {
      boatName: 'Fortinet - Best Western',
      skipperNames: 'Romain ATTANASIO & Loïs BERREHAR',
      category: 'imoca'
    },
    48: {
      boatName: 'Medallia',
      skipperNames: 'Pip HARE & Nick BUBB',
      category: 'imoca'
    },
    41: {
      boatName: 'La Mie Câline',
      skipperNames: 'Arnaud BOISSIÈRES & Gérald VÉNIARD',
      category: 'imoca'
    },
    21: {
      boatName: 'Biotherm',
      skipperNames: 'Paul MEILHAT & Mariana LOBATO',
      category: 'imoca'
    },
    27: {
      boatName: 'DMG MORI Global One',
      skipperNames: 'Kojiro SHIRAISHI & Thierry DUPREY DU VORSENT',
      category: 'imoca'
    },
    37: {
      boatName: 'Hublot',
      skipperNames: 'Alan ROURA & Simon KOSTER',
      category: 'imoca'
    },
    24: {
      boatName: 'Coup de Pouce - Giffard Manutention',
      skipperNames: 'Manuel COUSIN & Clément GIRAUD',
      category: 'imoca'
    },
    25: {
      boatName: 'Devenir',
      skipperNames: 'Violette DORANGE & Damien GUILLOU',
      category: 'imoca'
    },
    22: {
      boatName: 'Bureau Vallée',
      skipperNames: 'Louis BURTON & Davy BEAUDART',
      category: 'imoca'
    },
    42: {
      boatName: 'LAZARE',
      skipperNames: 'Tanguy LE TURQUAIS & Félix DE NAVACELLE',
      category: 'imoca'
    },
    33: {
      boatName: 'freelance.com',
      skipperNames: 'Guirec SOUDEE & Roland JOURDAIN',
      category: 'imoca'
    },
    39: {
      boatName: 'MAIL BOXES ETC. (MBE)',
      skipperNames: 'Conrad COLMAN & Fabio MUZZOLINI',
      category: 'imoca'
    },
    45: {
      boatName: 'MACSF',
      skipperNames: 'Isabelle JOSCHKE & Pierre BRASSEUR',
      category: 'imoca'
    },
    28: {
      boatName: 'Fives Group - Lantana Environnement',
      skipperNames: 'Louis DUC & Rémi AUBRUN',
      category: 'imoca'
    },
    51: {
      boatName: 'Nexans - Art et Fenêtres',
      skipperNames: 'Fabrice AMEDEO & Andreas BADEN',
      category: 'imoca'
    },
    32: {
      boatName: 'Foussier - Mon Courtier Energie',
      skipperNames: 'Sébastien MARSSET & Sophie FAGUET',
      category: 'imoca'
    },
    49: {
      boatName: 'Monnoyeur - Duo for a job',
      skipperNames: 'Benjamin FERRE & Pierre LE ROY',
      category: 'imoca'
    },
    54: {
      boatName: 'Partage',
      skipperNames: 'François GUIFFANT & Aymeric BELLOIR',
      category: 'imoca'
    },
    50: {
      boatName: 'New Europe',
      skipperNames: 'Szabolcs WEÖRES & Irina GRACHEVA',
      category: 'imoca'
    },
    38: {
      boatName: 'HUMAN Immobilier',
      skipperNames: 'Antoine CORNIC & Jean-Charles LURO',
      category: 'imoca'
    },
    26: {
      boatName: "D'Ieteren Group",
      skipperNames: 'Denis VAN WEYNBERGH & Gilles BUEKENHOUT',
      category: 'imoca'
    },
    57: {
      boatName: 'STAND AS ONE',
      skipperNames: 'Eric BELLION & Martin LE PAPE',
      category: 'imoca'
    },
    52: {
      boatName: 'Oliver Heer Ocean Racing',
      skipperNames: 'Oliver HEER & Nils PALMIERI',
      category: 'imoca'
    },
    56: {
      boatName: 'Singchain Team Haikou',
      skipperNames: 'Jingkun XU & Mike GOLDING',
      category: 'imoca'
    },
    20: {
      boatName: 'Be Water Positive',
      skipperNames: 'Scott SHAWYER & Nick MOLONEY',
      category: 'imoca'
    },
    44: {
      boatName: 'MACIF Santé Prévoyance',
      skipperNames: 'Charlie DALIN & Pascal BIDEGORRY',
      category: 'imoca'
    },
    14: {
      boatName: 'Solidaires En Peloton',
      skipperNames: 'Thibaut VAUCHEL-CAMUS & Quentin VLAMYNCK',
      category: 'ocean fifty'
    },
    15: {
      boatName: 'Viabilis Océans',
      skipperNames: 'Pierre QUIROGA & Ronan TREUSSART',
      category: 'ocean fifty'
    },
    13: {
      boatName: 'REALITES',
      skipperNames: 'Fabrice CAHIERC & Aymeric CHAPPELLIER',
      category: 'ocean fifty'
    },
    10: {
      boatName: 'KOESIO',
      skipperNames: 'Erwan LE ROUX & Audrey OGEREAU',
      category: 'ocean fifty'
    },
    11: {
      boatName: 'Le Rire Médecin - Lamotte',
      skipperNames: 'Luke BERRY & Antoine JOUBERT',
      category: 'ocean fifty'
    },
    12: {
      boatName: 'Primonial',
      skipperNames: 'Sébastien ROGUES & Jean-Baptiste GELLÉE',
      category: 'ocean fifty'
    },
    5: {
      boatName: 'SVR Lazartigue',
      skipperNames: 'François GABART & Tom LAPERCHE',
      category: 'ultim'
    },
    2: {
      boatName: 'Maxi Banque Populaire XI',
      skipperNames: "Armel LE CLÉAC'H & Sébastien JOSSE",
      category: 'ultim'
    },
    3: {
      boatName: 'Maxi Edmond de Rothschild',
      skipperNames: 'Charles CAUDRELIER & Erwan ISRAËL',
      category: 'ultim'
    },
    4: {
      boatName: 'SODEBO Ultim 3',
      skipperNames: 'Thomas COVILLE & Thomas ROUXEL',
      category: 'ultim'
    },
    1: {
      boatName: 'ACTUAL Ultim 3',
      skipperNames: 'Anthony MARCHAND & Thierry CHABAGNY',
      category: 'ultim'
    }
  }

// Table de correspondance pour les numéros de bateau
const boatInfo =
{
    '198': {
        boatName: '(198) OAN International / CFRTM',
        skipperName: 'Diego HERVELLA',
        cat: 'Proto'
    },
    '254': {
        boatName: '(254) 30 jours de mer pour nos héros',
        skipperName: 'Alpha DIAKITE',
        cat: 'Proto'
    },
    '335': {
        boatName: '(335) Atlantique Solutions',
        skipperName: 'Jean-Baptiste DE SANSONETTI',
        cat: 'Proto'
    },
    '346': {
        boatName: '(346) Alice', skipperName: 'Franck LAUVRAY',
        cat: 'Proto'
    },
    '423': {
        boatName: '(423) La maison des plus petits',
        skipperName: 'Edouard BLANCHIER',
        cat: 'Série'
    },
    '427': {
        boatName: '(427) Birvidik', skipperName: 'François LETISSIER',
        cat: 'Proto'
    },
    '429': {
        boatName: '(429) XFLR6 cherche Propergol',
        skipperName: 'Aurélien DHERVILLY',
        cat: 'Proto'
    },
    '431': {
        boatName: '(431) Tip Top Too', skipperName: 'Josep COSTA',
        cat: 'Proto'
    },
    '520': {
        boatName: '(520) Gintonic', skipperName: 'Francesco FARCI',
        cat: 'Série'
    },
    '527': {
        boatName: '(527) Maison Le Roux',
        skipperName: 'Brieuc LE MOUILLOUR',
        cat: 'Série'
    },
    '599': {
        boatName: '(599) Le don du sang', skipperName: 'Olivier LE GOFF',
        cat: 'Série'
    },
    '621': {
        boatName: '(621) Marc SA', skipperName: 'Maël COCHET',
        cat: 'Proto'
    },
    '624': {
        boatName: '(624) Grand Ocean', skipperName: 'Thibault CHOMARD',
        cat: 'Proto'
    },
    '626': {
        boatName: '(626) Quaternaire - développeur de performance durable',
        skipperName: 'Aglaé RIBON',
        cat: 'Série'
    },
    '630': {
        boatName: '(630) James Caird', skipperName: 'Romain VAN ENIS',
        cat: 'Proto'
    },
    '654': {
        boatName: '(654) Borrachudo', skipperName: 'Jonas GOMES',
        cat: 'Série'
    },
    '709': {
        boatName: '(709) Barra', skipperName: 'Marc CLARAMUNT',
        cat: 'Proto'
    },
    '716': {
        boatName: '(716) Hader Solutions', skipperName: 'Benoit ALT',
        cat: 'Proto'
    },
    '719': {
        boatName: '(719) Voiles des Anges', skipperName: 'Piers COPHAM',
        cat: 'Proto'
    },
    '741': {
        boatName: '(741) Piano Atlantique', skipperName: 'Jordan DELRIEU',
        cat: 'Proto'
    },
    '753': {
        boatName: '(753) Actual', skipperName: 'Jacques DELCROIX',
        cat: 'Proto'
    },
    '759': {
        boatName: '(759) Ashika II', skipperName: 'Uroš KRASEVAC',
        cat: 'Proto'
    },
    '787': {
        boatName: '(787) Osons Ici et Maintenant',
        skipperName: 'Hubert MARECHAL',
        cat: 'Proto'
    },
    '814': {
        boatName: '(814) Solidarités International',
        skipperName: 'Romain GAUTREAU',
        cat: 'Proto'
    },
    '833': {
        boatName: '(833) ZOE4LIFE', skipperName: 'Markus BURKHARDT',
        cat: 'Série'
    },
    '837': {
        boatName: '(837) Terminal Leave',
        skipperName: 'Peter GIBBONS - NEFF',
        cat: 'Série'
    },
    '848': {
        boatName: '(848) Elypso-Nitby-Petitfils 848',
        skipperName: 'Xavier CONDROYER',
        cat: 'Série'
    },
    '850': {
        boatName: '(850) Permis de construire - ACIEO',
        skipperName: 'Arnaud RAMBAUD',
        cat: 'Proto'
    },
    '857': {
        boatName: "(857) Ensemble contre le cancer de l'enfant",
        skipperName: 'Jérôme MERKER',
        cat: 'Série'
    },
    '865': {
        boatName: '(865) Maximum', skipperName: 'Gaby BUCAU',
        cat: 'Proto'
    },
    '868': {
        boatName: '(868) Philou', skipperName: "Gaëtan FALC'HUN",
        cat: 'Série'
    },
    '871': {
        boatName: '(871) Vaincre le mélanome',
        skipperName: 'martin OUDET',
        cat: 'Série'
    },
    '879': {
        boatName: '(879) Les Poupoules', skipperName: 'Quentin DEBOIS',
        cat: 'Série'
    },
    '882': {
        boatName: '(882) Napadélis - INVYO', skipperName: 'Thomas CORNU',
        cat: 'Série'
    },
    '886': {
        boatName: '(886) Stinkfoot and the 77',
        skipperName: 'Lucas DE COURREGES',
        cat: 'Série'
    },
    '887': {
        boatName: '(887) Neortex', skipperName: 'Grégoire CHERON',
        cat: 'Série'
    },
    '889': {
        boatName: "(889) Hugo Sarth'Atlantique",
        skipperName: 'Hugo CARDON',
        cat: 'Série'
    },
    '890': {
        boatName: '(890) Soley', skipperName: 'Enora FEREZOU',
        cat: 'Série'
    },
    '893': {
        boatName: '(893) Kalisto et Aérofab',
        skipperName: 'Bruno LEMUNIER',
        cat: 'Série'
    },
    '895': {
        boatName: '(895) Team Pokou', skipperName: 'Frederic BACH',
        cat: 'Série'
    },
    '903': {
        boatName: '(903) Cancer@Work', skipperName: 'Anne LIARDET',
        cat: 'Série'
    },
    '914': {
        boatName: '(914) Petit Tonnerre',
        skipperName: 'Antoine DE VALLAVIEILLE',
        cat: 'Série'
    },
    '915': {
        boatName: '(915) SPC', skipperName: 'Grégoire HUE',
        cat: 'Série'
    },
    '921': {
        boatName: '(921) Barillec Marine - Actemium',
        skipperName: 'Michael GENDEBIEN',
        cat: 'Série'
    },
    '929': {
        boatName: '(929) Diwan', skipperName: 'Thomas ANDRE',
        cat: 'Série'
    },
    '940': {
        boatName: '(940) Esprit Nature', skipperName: 'Antoine TRICOU',
        cat: 'Série'
    },
    '947': {
        boatName: '(947) Utopik', skipperName: 'Damien FLEURY',
        cat: 'Série'
    },
    '951': {
        boatName: '(951) Sleep diSEAses - Bastide Médical',
        skipperName: 'Mathilde DE LA GICLAIS',
        cat: 'Série'
    },
    '958': {
        boatName: '(958) Assurinco / Urban Corail',
        skipperName: 'Matthieu SAPIN',
        cat: 'Proto'
    },
    '962': {
        boatName: '(962) Espérance Banlieues',
        skipperName: 'Alexis ROCHET',
        cat: 'Série'
    },
    '967': {
        boatName: '(967) Celeris Informatique',
        skipperName: 'victor MATHIEU',
        cat: 'Proto'
    },
    '973': {
        boatName: '(973) DUVERGT-FBI-Les Petits Doudous du Scorff Lorient',
        skipperName: 'Arthur PETRUCCI',
        cat: 'Série'
    },
    '980': {
        boatName: '(980) Dimension -Polyant', skipperName: 'Lisa BERGER',
        cat: 'Série'
    },
    '985': {
        boatName: '(985) Blutopia', skipperName: 'Damien DOYOTTE',
        cat: 'Série'
    },
    '987': {
        boatName: '(987) Les Optiministes - Secours Populaire 17',
        skipperName: 'Leo BOTHOREL',
        cat: 'Série'
    },
    '989': {
        boatName: '(989) Région Île de France',
        skipperName: 'Alexandra LUCAS',
        cat: 'Série'
    },
    '990': {
        boatName: '(990) Chorus', skipperName: 'Pierre-Arnaud DESTREMAU',
        cat: 'Série'
    },
    '992': {
        boatName: '(992) Antistene', skipperName: 'Djemila TASSIN',
        cat: 'Série'
    },
    '998': {
        boatName: '(998) race=care', skipperName: 'Luca ROSETTI',
        cat: 'Série'
    },
    '1002': {
        boatName: '(1002) EMB-i-PACK', skipperName: 'Hugo MAHIEU',
        cat: 'Série'
    },
    '1005': {
        boatName: '(1005) Leucémie Espoir Atlantique Famille',
        skipperName: 'Lilian MERCIER',
        cat: 'Série'
    },
    '1006': {
        boatName: '(1006) Kristina II', skipperName: 'Miguel RONDON',
        cat: 'Série'
    },
    '1009': {
        boatName: '(1009) Les Extraordinaires',
        skipperName: 'Titouan QUIVIGER',
        cat: 'Série'
    },
    '1012': {
        boatName: '(1012) Porco Rosso',
        skipperName: 'Alessandro TORRESANI',
        cat: 'Série'
    },
    '1019': {
        boatName: '(1019) Repremar - Shipping Agency Uruguay',
        skipperName: 'Federico WAKSMAN',
        cat: 'Proto'
    },
    '1022': {
        boatName: '(1022) Vitamine', skipperName: 'Hermine LE MINTIER',
        cat: 'Série'
    },
    '1025': {
        boatName: '(1025) Equans', skipperName: 'Ulysse DAVID',
        cat: 'Série'
    },
    '1026': {
        boatName: '(1026) UOUM', skipperName: 'Robinson POZZOLI',
        cat: 'Proto'
    },
    '1028': {
        boatName: '(1028) Mingulay', skipperName: 'Felix OBERLE',
        cat: 'Série'
    },
    '1029': {
        boatName: '(1029) Tars', skipperName: 'Willy MULLER',
        cat: 'Série'
    },
    '1031': {
        boatName: '(1031) Chilowe', skipperName: 'Victoire MARTINET',
        cat: 'Série'
    },
    '1033': {
        boatName: '(1033) Technip Energies - International Coatings',
        skipperName: 'Hugues DE PREMARE',
        cat: 'Série'
    },
    '1034': {
        boatName: '(1034) Clochette', skipperName: 'Peter COOLS',
        cat: 'Série'
    },
    '1038': {
        boatName: '(1038) Faun', skipperName: 'Adrien SIMON',
        cat: 'Série'
    },
    '1039': {
        boatName: '(1039) Audilab', skipperName: 'Philippe BERQUIN',
        cat: 'Série'
    },
    '1040': {
        boatName: '(1040) Corto - Voiles Sans Frontières',
        skipperName: 'Yannick DESCHAND',
        cat: 'Série'
    },
    '1046': {
        boatName: '(1046) DMG MORI Sailing Academy 1',
        skipperName: 'Federico SAMPEI',
        cat: 'Proto'
    },
    '1048': {
        boatName: '(1048) DMG MORI Sailing Academy 2',
        skipperName: 'Laure GALLEY',
        cat: 'Proto'
    },
    '1050': {
        boatName: '(1050) Léa Nature', skipperName: 'Marie GENDRON',
        cat: 'Proto'
    },
    '1051': {
        boatName: '(1051) Bihannic-Allentis', skipperName: 'Yaël POUPON',
        cat: 'Proto'
    },
    '1053': {
        boatName: '(1053) Dagard', skipperName: 'Sasha LANIECE',
        cat: 'Série'
    },
    '1055': {
        boatName: '(1055) Gusta', skipperName: 'Sylvain KARPINSKI',
        cat: 'Série'
    },
    '1056': {
        boatName: '(1056) Da Gousket', skipperName: 'Justin BARADAT',
        cat: 'Série'
    },
    '1057': {
        boatName: '(1057) Aduna', skipperName: 'Christophe NOGUET',
        cat: 'Série'
    },
    '1067': {
        boatName: '(1067) Nicomatic', skipperName: 'Caroline BOULE',
        cat: 'Proto'
    },
    '1068': {
        boatName: '(1068) Frérots TPM', skipperName: 'Thaïs LE CAM',
        cat: 'Proto'
    },
    '1069': {
        boatName: '(1069) Frérots Branchet',
        skipperName: 'Julien LETISSIER',
        cat: 'Proto'
    },
    '1071': {
        boatName: '(1071) ProData', skipperName: 'Witold MALECKI',
        cat: 'Série'
    },
    '1073': {
        boatName: '(1073) Red Hot Mini Pepper',
        skipperName: 'Federico NORMAN',
        cat: 'Série'
    },
    '1081': {
        boatName: '(1081) Xucla', skipperName: 'carlos MANERA PASCUAL',
        cat: 'Proto'
    }
};


const BoatIcon = L.divIcon({
    html: `<svg  viewBox="0 0 14 14" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;">
            <path d="M4.784,13.635c0,0 -0.106,-2.924 0.006,-4.379c0.115,-1.502 0.318,-3.151 0.686,-4.632c0.163,-0.654 0.45,-1.623 0.755,-2.44c0.202,-0.54 0.407,-1.021 0.554,-1.352c0.038,-0.085 0.122,-0.139 0.215,-0.139c0.092,0 0.176,0.054 0.214,0.139c0.151,0.342 0.361,0.835 0.555,1.352c0.305,0.817 0.592,1.786 0.755,2.44c0.368,1.481 0.571,3.13 0.686,4.632c0.112,1.455 0.006,4.379 0.006,4.379l-4.432,0Z" style="fill:#002efc;"/><path d="M5.481,12.731c0,0 -0.073,-3.048 0.003,-4.22c0.06,-0.909 0.886,-3.522 1.293,-4.764c0.03,-0.098 0.121,-0.165 0.223,-0.165c0.103,0 0.193,0.067 0.224,0.164c0.406,1.243 1.232,3.856 1.292,4.765c0.076,1.172 0.003,4.22 0.003,4.22l-3.038,0Z" style="fill:#fff;fill-opacity:0.846008;"/>
        </svg>`,
    iconSize: [24, 24],
    iconAnchor: [12, 12],
});

let markers = [];
let lines = [];

let showSerie = true;
let showProto = true;

let showUltim = true;
let showClass40 = true;
let showImoca = true;
let showOceanFifty = true;

const updateIconStyle = () => {
    for (const marker of markers) {
        if (marker._icon) {
            marker._icon.style.transformOrigin = '12px 12px';
            const heading = marker._icon.getAttribute('data-heading');
            if (marker._icon.style.transform.indexOf('rotateZ') === -1) {
                marker._icon.style.transform = `${marker._icon.style.transform} rotateZ(${heading || 0
                    }deg)`;
            }
        }
    }
};

const load = () => {
    fetch('https://raw.githubusercontent.com/globe-coder/minitransat-tracker/master/boats_result.json')
        .then(response => response.json())
        .then(result => result.result)
        .then(result => {
            let hue = 0;

            for (const boatNumber of Object.keys(result)) {
                hue = (hue + 60) % 360;

                const boat = result[boatNumber];
                const boatDetails = boatInfo[boatNumber];

                if ((showSerie && boatDetails.cat === 'Série') || (showProto && boatDetails.cat === 'Proto')) {
                    const layer = L.polyline(boat.track, {
                        color: `hsl(${hue}, 100%, 45%)`,
                        weight: 2,
                        opacity: 0.5,
                    }).addTo(map);
    
                    layer.on('mouseover', () => layer.setStyle({ opacity: 1, weight: 4 }));
    
                    layer.on('mouseout', () => layer.setStyle({ opacity: 0.5, weight: 2 }));

                    const marker = L.marker(boat.track[boat.track.length - 1], {
                        icon: BoatIcon,
                    }).addTo(map);

                    markers.push(marker);
                    marker._icon.setAttribute('data-heading', boat.heading);

                    // Convertir le timestamp en date et heure
                    const timestamp = new Date(boat.timestamp * 1000); // Multipliez par 1000 car le timestamp est en secondes

                    // Créez le contenu HTML personnalisé pour la popup
                    const popupContent = `
                        <div>
                            <strong>Nom du Bateau:</strong> ${boatDetails.boatName}<br>
                            <strong>Nom du Skipper:</strong> ${boatDetails.skipperName}<br>
                            <strong>Catégorie:</strong> ${boatDetails.cat}<br>
                            <strong>Cap:</strong> ${boat.heading}<br>
                            <strong>Dist. au but:</strong> ${boat.dtf}<br>
                            <strong>Dist. au premier:</strong> ${boat.dtl}<br>
                            <strong>Vitesse:</strong> ${boat.speed}<br>
                            <strong>Dernière mise à jour:</strong> ${timestamp.toLocaleString()}<br>
                        </div>
                    `;

                    marker.bindPopup(popupContent);

                    marker.on('click', () => {
                        layer.setStyle({ weight: 4, opacity: 1 });
                    });

                    marker.on('mouseover', () => layer.setStyle({ weight: 4, opacity: 1 }));
                    marker.on('mouseout', () => {
                        if (!marker._icon.classList.contains('leaflet-popup-target')) {
                            layer.setStyle({ weight: 2, opacity: 0.5 });
                        }
                    });

                    lines.push(layer);

                    updateIconStyle();
                }
            }
        })
        .catch(console.error);
};

const loadTJV = () => {
    fetch('https://raw.githubusercontent.com/globe-coder/minitransat-tracker/master/boats_result_TJV.json')
        .then(response => response.json())
        .then(result => result.result)
        .then(result => {
            let hue = 0;

            for (const boatNumber of Object.keys(result)) {
                hue = (hue + 60) % 360;

                const boat = result[boatNumber];
                const boatDetails = boatInfoTJV[boatNumber];

                if ((showImoca && boatDetails.category === 'imoca') || (showClass40 && boatDetails.category === 'class40')
                || (showOceanFifty && boatDetails.category === 'ocean fifty') || (showUltim && boatDetails.category === 'ultim')) {

                    const layer = L.polyline(boat.track, {
                        color: `hsl(${hue}, 100%, 45%)`,
                        weight: 2,
                        opacity: 0.5,
                    }).addTo(map);

                    layer.on('mouseover', () => layer.setStyle({ opacity: 1, weight: 4 }));

                    layer.on('mouseout', () => layer.setStyle({ opacity: 0.5, weight: 2 }));

                    const marker = L.marker(boat.track[boat.track.length - 1], {
                        icon: BoatIcon,
                    }).addTo(map);

                    markers.push(marker);
                    marker._icon.setAttribute('data-heading', boat.heading);

                    // Convertir le timestamp en date et heure
                    const timestamp = new Date(boat.timestamp * 1000); // Multipliez par 1000 car le timestamp est en secondes

                    // Créez le contenu HTML personnalisé pour la popup
                    const popupContent = `
                        <div>
                            <strong>Nom du Bateau:</strong> ${boatDetails.boatName}<br>
                            <strong>Nom des Skippers:</strong> ${boatDetails.skipperNames}<br>
                            <strong>Catégorie:</strong> ${boatDetails.category}<br>
                            <strong>Cap:</strong> ${boat.heading}<br>
                            <strong>Dist. au but:</strong> ${boat.dtf}<br>
                            <strong>Dist. au premier:</strong> ${boat.dtl}<br>
                            <strong>Vitesse:</strong> ${boat.speed}<br>
                            <strong>Dernière mise à jour:</strong> ${timestamp.toLocaleString()}<br>
                        </div>
                    `;

                    marker.bindPopup(popupContent);

                    marker.on('click', () => {
                        layer.setStyle({ weight: 4, opacity: 1 });
                    });

                    marker.on('mouseover', () => layer.setStyle({ weight: 4, opacity: 1 }));
                    marker.on('mouseout', () => {
                        if (!marker._icon.classList.contains('leaflet-popup-target')) {
                            layer.setStyle({ weight: 2, opacity: 0.5 });
                        }
                    });

                    lines.push(layer);

                    updateIconStyle();
                }

            }
        })
        .catch(console.error);
};

const remove = () => {
    markers.forEach(l => map.removeLayer(l));
    lines.forEach(l => map.removeLayer(l));
    markers = [];
    lines = [];
};

let hasHooks = false;

export const onopen = () => {
    if (hasHooks) {
        return;
    }

    load();

    map.on('zoom', updateIconStyle);
    map.on('zoomend', updateIconStyle);
    map.on('viewreset', updateIconStyle);
    hasHooks = true;

    map.setView([20.400, -49.700], 5);
};

export const onmount = (node, refs) => {
    // Whenever your plugin is mounted, all elements with 'data-ref'
    // attributes are exposed in this.refs object
    refs.serie.onclick = () => {
        showSerie = true;
        showProto= false;
        remove();
        load();
        map.setView([20.400, -49.700], 5);
    }
    refs.proto.onclick = () => {
        showSerie = false;
        showProto= true;
        remove();
        load();
        map.setView([20.400, -49.700], 5);
    }
    refs.all.onclick = () => {
        showSerie = true;
        showProto= true;
        remove();
        load();
        map.setView([20.400, -49.700], 5);
    }

    refs.TJV.onclick = () => {
        showClass40 = true;
        showImoca = true;
        showOceanFifty = true;
        showUltim = true;
        remove();
        loadTJV();
        map.setView([27.400, -35.700], 4);
    }

    refs.class40.onclick = () => {
        showClass40 = true;
        showImoca = false;
        showOceanFifty = false;
        showUltim = false;
        remove();
        loadTJV();
        map.setView([36.400, -16.700], 5);
    }

    refs.imoca.onclick = () => {
        showClass40 = false;
        showImoca = true;
        showOceanFifty = false;
        showUltim = false;
        remove();
        loadTJV();
        map.setView([43.400, -16.700], 5);
    }

    refs.oceanFifty.onclick = () => {
        showClass40 = false;
        showImoca = false;
        showOceanFifty = true;
        showUltim = false;
        remove();
        loadTJV();
        map.setView([36.400, -16.700], 5);
    }

    refs.ultim.onclick = () => {
        showClass40 = false;
        showImoca = false;
        showOceanFifty = false;
        showUltim = true;
        remove();
        loadTJV();
        map.setView([-8.400, -24.700], 5);
    }
};

export const ondestroy = () => {
    if (!hasHooks) {
        return;
    }

    remove();
    map.off('zoom', updateIconStyle);
    map.off('zoomend', updateIconStyle);
    map.off('viewreset', updateIconStyle);
    hasHooks = false;
};
