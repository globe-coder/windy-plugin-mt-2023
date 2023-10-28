import { map } from '@windy/map';

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
        cat: 'Série'
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
                console.log(boat)

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

    map.setView([28.600, -17.700], 8);
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
