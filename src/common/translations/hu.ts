export default {
	translation: {
		page: {
			title: 'David Scicluna • Portfólió',
			description:
				'Helló! David Scicluna vagyok, a napsütéses máltai szigeteken székhellyel rendelkező front-end fejlesztő. Jelenleg a TAIN -nál dolgozik EEZE és szabadúszóként. Nagyon szenvedélyesen foglalkozom a technológiával; Szeretem az ötletek kidolgozását az alkalmazásokba, és elkötelezett vagyok a kivételes felhasználói élményű termékek és szolgáltatások létrehozása iránt, valamint a modern felhasználói felület technikáival. Minden tőlem telhetőt megpróbálok folytatni, hogy továbbtanuljak és bővítsem tudásomat ezen a területen, mivel azt hiszem, minél többet tanulok, annál jobb a tapasztalatok a végfelhasználók számára. Megtalálhat engem a LinkedIn -en és a GitHub -on, vagy hozzon hozzám e -mailben a hello@davidscicluna.com címen.'
		},
		common: {
			about: [
				`Helló! David Scicluna vagyok, a napsütéses máltai szigeteken székhellyel rendelkező front-end fejlesztő. Jelenleg a <a href="${
					import.meta.env.VITE_TAIN_URL
				}" target="_blank">Tain</a> | <a href="${
					import.meta.env.VITE_EEZE_URL
				}" target="_blank">EEZE</a> és szabadúszóként.`,
				'Nagyon szenvedélyesen foglalkozom a technológiával; Szeretem az ötletek kidolgozását az alkalmazásokba, és elkötelezett vagyok a kivételes felhasználói élményű termékek és szolgáltatások létrehozása iránt, valamint a modern felhasználói felület technikáival.',
				'Minden tőlem telhetőt megpróbálok folytatni, hogy továbbtanuljak és bővítsem tudásomat ezen a területen, mivel azt hiszem, minél többet tanulok, annál jobb a tapasztalatok a végfelhasználók számára.',
				`Megtalálhat engem <a href="${
					import.meta.env.VITE_LINKEDIN_URL
				}" target="_blank">Linkedin</a> és <a href="${
					import.meta.env.VITE_GITHUB_URL
				}" target="_blank">Github</a>, vagy e -mailben lépjen fel velem a <a href="mailto:${
					import.meta.env.VITE_EMAIL_URL
				}">hello@davidscicluna.com</a>.`
			],
			navItems: { '/': 'itthon', '/about': 'Ról ről', '/projects': 'Projektek' },
			projects: {
				edb: {
					title: 'A szórakoztató adatbázis (EDB)',
					short: 'EDB',
					description:
						'A Entertainment Database (EDB) egy olyan webalkalmazás, amely információkat kínál a ThemoViedB API által üzemeltetett szórakoztatóiparhoz. Az ilyen információk bármi lehetnek a filmekből, a TV -műsorokból és az emberekből, akik ezt megtörténik. Az EDB lehetővé teszi a felhasználók számára, hogy megtekintsék az összes információt, és mentsék azt egy listába. Az EDB -ben található minden adat a legújabb és legfrissebb tartalom a szórakoztatóipar vonatkozásában, biztosítva a megbízható tartalommal rendelkező felhasználókat.',
					links: { web: 'Menj az EDB -hez', playground: 'Nyissa meg az EDB -t', git: 'Github' }
				},
				concentration: {
					title: 'Koncentráció',
					description:
						'A koncentráció egy kártya megfelelő játék. A győzelemhez a játékosnak meg kell egyeznie az összes kártyát azáltal, hogy párosítja azokat, amelyek ugyanazt az ikont tartalmazzák.',
					links: { web: 'Menjen koncentrációra', playground: 'Nyitott koncentráció', git: 'Github' }
				},
				journal: {
					title: 'Folyóirat',
					description:
						'A Journal egy gazdag szövegszerkesztő, amely lehetővé teszi a felhasználó számára, hogy jegyzeteket, képeket, linkeket és színeket írjon és szerkeszthessen.',
					links: { web: 'Lépjen a folyóiratba', playground: 'Nyílt folyóirat', git: 'Github' }
				},
				clock: {
					title: 'Óra',
					description:
						'Az óra egy valós idejű alkalmazás, amely lehetővé teszi a felhasználó számára, hogy ellenőrizze a világ bármely városának valós idejét. Be lehet állítani a riasztásokat, a stopper -t és az időzítőt.',
					links: { web: 'Menj órára', playground: 'Nyílt óra', git: 'Github' }
				},
				weather: {
					title: 'Időjárás',
					description:
						'Az időjárás olyan alkalmazás, amely lehetővé teszi a felhasználó számára, hogy a világ minden városának jelenlegi időjárásait keresse.',
					links: { web: 'Menjen időjárásra', playground: 'Nyitott időjárás', git: 'Github' }
				},
				calculator: {
					title: 'Számológép',
					description:
						'A számológép egy olyan alkalmazás, amely lehetővé teszi a felhasználó számára a nem tudományos számítások kiszámítását és a múltbeli számítások megjelenítését.',
					links: { web: 'Lépjen a számológépre', playground: 'Nyissa meg a számológépet', git: 'Github' }
				}
			},
			skills: [
				{
					label: 'Tervezés',
					skills: [
						'Felhasználói felület kialakítása (UI)',
						'Felhasználói élmény (UX)',
						'Reagáló webdesign',
						'Márkanév -tervezés'
					]
				},
				{
					label: 'Technológiák',
					skills: [
						'Hypertext jelölőnyelv (HTML)',
						'Kaszkádás stílusú lapok (CSS)',
						'Szintaktikailag félelmetes stílusú lapok (SASS)',
						'CSS a JS -ben (JSS)',
						'Határirat',
						'Gépelt'
					]
				},
				{ label: 'JS keretek', skills: ['React JS', 'Vue'] },
				{
					label: 'Könyvtárak',
					skills: ['Csakrai ui', 'Anyag felhasználói felület (MUI)', 'Redux', 'JS tervezet', 'Mesekönyv']
				},
				{ label: 'Tesztelés', skills: ['Tréfa', 'Jasmine JS'] },
				{
					label: 'Eszközök és alkalmazások',
					skills: ['Git', 'Fonálás', 'NPM', 'Eslint', 'Szebb', 'Fügemma', 'Adobe Experience Design (XD)']
				}
			]
		},
		components: {
			errorBoundary: {
				title: 'Óh ne! 😭',
				subtitle:
					'Sajnos valami rosszul ment, amikor megpróbálta megjeleníteni az alkalmazást. Kérjük, frissítse újra, hogy megpróbálja újra!',
				console: 'Felmerült hiba:',
				action: 'Frissítés'
			},
			logo: { long: 'DavidScicluna', short: 'DS' }
		},
		layout: {
			internationalizationModal: {
				title: 'Előnyben részesített nyelv',
				subtitle: 'Válassza ki a választott preferált nyelvet az alábbi nyelvek listájából',
				languages: {
					bg: 'bolgár',
					cs: 'cseh',
					da: 'dán',
					de: 'német',
					el: 'görög',
					en: 'angol',
					es: 'spanyol',
					fr: 'Francia',
					hr: 'horvát',
					hu: 'Magyar',
					it: 'olasz',
					mt: 'máltai',
					nl: 'holland',
					pl: 'fényesít',
					pt: 'portugál',
					ro: 'román',
					ru: 'orosz',
					sr: 'szerb',
					sv: 'svéd',
					tr: 'török',
					uk: 'ukrán'
				},
				placeholder: "Próbálja ki a '{{language}}'",
				cancel: 'Megszünteti',
				action: 'Válts nyelvet'
			},
			playgroundModal: {
				title: 'Projekt címe',
				subtitle: 'A projekt leírása',
				navigation: {
					open: {
						'aria-label': { tooltip: 'Nyissa meg a navigációt (eszközTip)', button: 'Nyitott navigáció' },
						'tooltip': 'Nyitott navigáció'
					},
					close: {
						'aria-label': { tooltip: 'Kilépés a navigációból (eszközTip)', button: 'Kilépési navigáció' },
						'tooltip': 'Kilépési navigáció'
					}
				},
				fullscreen: {
					open: {
						'aria-label': {
							tooltip: 'Nyissa meg a FullScreen -t (ToolTIP)',
							button: 'Nyissa meg a teljes képernyőt'
						},
						'tooltip': 'Nyissa meg a teljes képernyőt'
					},
					close: {
						'aria-label': {
							tooltip: 'Kilépés a teljes képernyőn (ToolTIP)',
							button: 'Kilép a teljes képernyőn'
						},
						'tooltip': 'Kilép a teljes képernyőn'
					}
				},
				close: { 'aria-label': 'Közeli játszótér', 'tooltip': 'Bezárás' },
				cancel: 'Megszünteti',
				action: 'Nyissa meg az új lapon'
			},
			contact: {
				label: 'Szeretne felvenni a kapcsolatot, hogy együttműködjön egy olyan projekten, amelyet szem előtt tartott? Kattintson a beszélgetéshez!',
				action: 'Beszéljünk'
			},
			footer: { copyright: '© {{year}} David Scicluna, minden jog fenntartva.' },
			navigation: {
				colorModeIconButton: {
					light: {
						'aria-label': { tooltip: 'Váltás sötét üzemmódra (ToolTip)', button: 'Váltás sötét módra' },
						'tooltip': 'Váltás sötét módra'
					},
					dark: {
						'aria-label': { tooltip: 'Váltás fény módra (eszközTIP)', button: 'Váltás fény módra' },
						'tooltip': 'Váltás fény módra'
					}
				},
				internationalizationIconButton: {
					'aria-label': { tooltip: 'Változtassa meg a nyelvet (eszközTip)', button: 'Válts nyelvet' },
					'tooltip': 'Válts nyelvet'
				},
				action: 'Felveszi a kapcsolatot'
			},
			socials: {
				email: {
					'aria-label': {
						tooltip: "Küldjön e -mailt a '{{email}}' (ToolTIP) címre",
						button: "Küldjön e -mailt a '{{email}}' címre"
					},
					'tooltip': "E -mail: '{{email}}'"
				},
				linkedin: {
					'aria-label': {
						tooltip: 'Nyissa meg a LinkedIn Profile oldalt (ToolTip)',
						button: 'Nyissa meg a LinkedIn profiloldalt'
					},
					'tooltip': 'LinkedIn profil'
				},
				github: {
					'aria-label': {
						tooltip: 'Nyissa meg a GitHub profiloldalt (ToolTip)',
						button: 'Nyissa meg a GitHub profil oldalát'
					},
					'tooltip': 'Github profil'
				}
			}
		},
		noMatch: {
			title: 'Az oldal nem található!',
			subtitle: 'Kérjük, ellenőrizze az URL -t a címsorban, és próbálja újra.',
			action1: 'Menj haza',
			action2: 'Próbáld újra'
		},
		splashscreen: { label: 'David Scicluna • Front-end fejlesztő', logo: 'DavidScicluna' },
		home: {
			title1: 'Helló! David vagyok szenvedélyes',
			title2: 'Front end fejlesztő',
			subtitle: 'Jelenleg a napsütéses máltai szigeteken található',
			icons: {
				html: { 'aria-label': 'HTML (ToolTIP)', 'label': 'Html' },
				css: { 'aria-label': 'CSS (ToolTIP)', 'label': 'CSS' },
				js: { 'aria-label': 'JavaScript (ToolTIP)', 'label': 'Határirat' },
				ts: { 'aria-label': 'TypeScript (ToolTIP)', 'label': 'Gépelt' },
				react: { 'aria-label': 'React (ToolTip)', 'label': 'Reagál' }
			},
			action: 'Felveszi a kapcsolatot'
		},
		about: {
			cover: {
				banner: 'Transzparens',
				portrait: 'Portré'
			},
			labels: {
				aboutMe: 'Rólam',
				certifications: 'Tanúsítások',
				experience: 'Tapasztalat',
				skills: 'Készségek'
			},
			experiences: [
				{ place: 'Tain | EEZE', role: 'Front end fejlesztő' },
				{ place: 'davidscicluna.com', role: 'Szabadúszó front-end fejlesztő' },
				{ place: 'Gozo minisztériuma (a CIO irodája)', role: 'Front-end fejlesztő (teljes munkaidős tanuló)' },
				{ place: 'Gozo minisztériuma (a CIO irodája)', role: 'Front-end fejlesztő (teljes munkaidős tanuló)' },
				{
					place: 'Gozo minisztériuma (a CIO irodája)',
					role: 'IT műszaki támogatás (teljes munkaidős tanítvány)'
				}
			],
			certifications: {
				udacity: 'Front-end webfejlesztő Nanodegree',
				freecodecamp: 'Reagáló webdesign tanúsítás'
			}
		}
	}
};
