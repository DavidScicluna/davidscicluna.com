export default {
	translation: {
		page: {
			title: 'David Scicluna • Portfolio',
			description:
				'Hallo! Ik ben David Scicluna, een front-end ontwikkelaar gevestigd in de zonnige Maltese eilanden. Momenteel werken bij Tain | EEZE en als freelancer. Ik ben erg gepassioneerd door technologie; Ik ben dol op het ontwikkelen van ideeën in applicaties en ben toegewijd aan het maken van producten en diensten met uitzonderlijke gebruikerservaring en met moderne technieken voor gebruikersinterfaces. Ik doe mijn best om te blijven leren en mijn kennis op dit gebied uit te breiden, omdat ik geloof dat hoe meer ik leer, hoe beter de ervaring de eindgebruikers zullen hebben. Je kunt me vinden op LinkedIn en GitHub, of contact met me opnemen via e -mail op hello@davidscicluna.com.'
		},
		common: {
			about: [
				`Hallo! Ik ben David Scicluna, een front-end ontwikkelaar gevestigd in de zonnige Maltese eilanden. Momenteel werken op <a href="${
					import.meta.env.VITE_TAIN_URL
				}" target="_blank">Tain</a> | <a href="${
					import.meta.env.VITE_EEZE_URL
				}" target="_blank">EEZE</a> en als freelancer.`,
				'Ik ben erg gepassioneerd door technologie; Ik ben dol op het ontwikkelen van ideeën in applicaties en ben toegewijd aan het maken van producten en diensten met uitzonderlijke gebruikerservaring en met moderne technieken voor gebruikersinterfaces.',
				'Ik doe mijn best om te blijven leren en mijn kennis op dit gebied uit te breiden, omdat ik geloof dat hoe meer ik leer, hoe beter de ervaring de eindgebruikers zullen hebben.',
				`Je kunt me vinden op <a href="${
					import.meta.env.VITE_LINKEDIN_URL
				}" target="_blank">Linkedin</a>, en <a href="${
					import.meta.env.VITE_GITHUB_URL
				}" target="_blank">Github</a>, of neem contact met me op via e -mail op <a href="mailto:${
					import.meta.env.VITE_EMAIL_URL
				}">hello@davidscicluna.com</a>.`
			],
			navItems: { '/': 'Thuis', '/about': 'Over', '/projects': 'Projecten' },
			projects: {
				edb: {
					title: 'The Entertainment Database (EDB)',
					short: 'EDB',
					description:
						"De Entertainment Database (EDB) is een webtoepassing die informatie biedt met betrekking tot de entertainmentindustrie die wordt aangedreven door ThemoviedB API. Dergelijke informatie kan alles zijn van films, tv -programma's en de mensen die het laten gebeuren. EDB biedt gebruikers de mogelijkheid om alle informatie te bekijken, zoals en op te slaan in een lijst. Elk stukje gegevens in EDB is de nieuwste en meest bijgewerkte inhoud met betrekking tot de entertainmentindustrie, waardoor gebruikers met betrouwbare inhoud worden gewaarborgd.",
					links: { web: 'Ga naar EDB', playground: 'Open EDB', git: 'Gitub' }
				},
				concentration: {
					title: 'Concentratie',
					description:
						'Concentratie is een spel bij het matchen van kaart. Om te winnen moet de speler alle kaarten matchen door degenen die hetzelfde pictogram bevatten te koppelen.',
					links: { web: 'Gaan naar concentratie', playground: 'Open concentratie', git: 'Gitub' }
				},
				journal: {
					title: 'logboek',
					description:
						'Journal is een rijke teksteditor waarmee de gebruiker notities kan schrijven en bewerken met tekst, afbeeldingen, links en kleuren.',
					links: { web: 'Ga naar het dagboek', playground: 'Open Journal', git: 'Gitub' }
				},
				clock: {
					title: 'Klok',
					description:
						'Klok is een realtime applicatie waarmee de gebruiker de realtime van elke stad over de hele wereld kan controleren. Men kan alarmen, een stopwatch en een timer instellen.',
					links: { web: 'Naar de klok gaan', playground: 'De klok openen', git: 'Gitub' }
				},
				weather: {
					title: 'Weer',
					description:
						'Het weer is een applicatie waarmee de gebruiker het huidige weer van alle steden over de hele wereld kan doorzoeken.',
					links: { web: 'Ga naar het weer', playground: 'Open weer', git: 'Gitub' }
				},
				calculator: {
					title: 'Rekenmachine',
					description:
						'Calculator is een applicatie waarmee de gebruiker niet-wetenschappelijke berekeningen kan berekenen en in het verleden weergeeft.',
					links: { web: 'Ga naar rekenmachine', playground: 'Open calculator', git: 'Gitub' }
				}
			},
			skills: [
				{
					label: 'Ontwerp',
					skills: [
						'Gebruikersinterfaceontwerp (UI)',
						'Gebruikerservaring (ux)',
						'Responsief webontwerp',
						'Merkontwerp'
					]
				},
				{
					label: 'Technologieën',
					skills: [
						'Hypertext Markup Language (HTML)',
						'Cascading Style Sheets (CSS)',
						'Syntactisch geweldige stijlbladen (sass)',
						'CSS in JS (JSS)',
						'Javascript',
						'Typecript'
					]
				},
				{ label: 'JS Frameworks', skills: ['React JS', 'Vue'] },
				{
					label: 'Bibliotheken',
					skills: ['Chakra ui', 'Materiaal UI (MUI)', 'Redux', 'Draft JS', 'Verhalenboek']
				},
				{ label: 'Testen', skills: ['Grap', 'Jasmine JS'] },
				{
					label: 'Tools & Applications',
					skills: ['Git', 'Garen', 'NPM', 'Eslint', 'Mooier', 'Figma', 'Adobe Experience Design (XD)']
				}
			]
		},
		components: {
			errorBoundary: {
				title: 'Oh nee! 😭',
				subtitle:
					'Helaas ging er iets mis bij het proberen de aanvraag te maken. Vernieuw u opnieuw om het opnieuw te proberen!',
				console: 'Niet -mislukte fout:',
				action: 'Opfrissen'
			},
			logo: { long: 'Davidscicluna', short: 'Ds' }
		},
		layout: {
			internationalizationModal: {
				title: 'Voorkeurstaal',
				subtitle: 'Kies de voorkeurstaal naar keuze uit de onderstaande lijst met talen',
				languages: {
					bg: 'Bulgaars',
					cs: 'Tsjechisch',
					da: 'Deens',
					de: 'Duits',
					el: 'Grieks',
					en: 'Engels',
					es: 'Spaans',
					fr: 'Frans',
					hr: 'Kroatisch',
					hu: 'Hongaars',
					it: 'Italiaans',
					mt: 'Maltees',
					nl: 'Nederlands',
					pl: 'Pools',
					pt: 'Portugees',
					ro: 'Roemeense',
					ru: 'Russisch',
					sr: 'Servisch',
					sv: 'Zweeds',
					tr: 'Turks',
					uk: 'Oekraïens'
				},
				placeholder: "Probeer '{{language}}'",
				cancel: 'Annuleren',
				action: 'Verander taal'
			},
			playgroundModal: {
				title: 'project titel',
				subtitle: 'Projectbeschrijving',
				navigation: {
					open: {
						'aria-label': { tooltip: 'Open Navigation (Tooltip)', button: 'Open navigatie' },
						'tooltip': 'Open navigatie'
					},
					close: {
						'aria-label': { tooltip: 'Verlaat Navigation (Tooltip)', button: 'Verlaat de navigatie' },
						'tooltip': 'Verlaat de navigatie'
					}
				},
				fullscreen: {
					open: {
						'aria-label': { tooltip: 'Open Fullscreen (Tooltip)', button: 'Open het volledige scherm' },
						'tooltip': 'Open het volledige scherm'
					},
					close: {
						'aria-label': { tooltip: 'Exit fullscreen (Tooltip)', button: 'Verlaat volledig scherm' },
						'tooltip': 'Verlaat volledig scherm'
					}
				},
				close: { 'aria-label': 'Sluit de speeltuin', 'tooltip': 'Dichtbij' },
				cancel: 'Annuleren',
				action: 'Openen in nieuw tabblad'
			},
			contact: {
				label: 'Wil je contact opnemen om samen te werken aan een project dat je in gedachten hebt? Klik om te praten!',
				action: 'Laten we praten'
			},
			footer: { copyright: '© {{year}} David Scicluna, alle rechten voorbehouden.' },
			navigation: {
				colorModeIconButton: {
					light: {
						'aria-label': {
							tooltip: 'Schakel naar de donkere modus (Tooltip)',
							button: 'Schakel over naar de donkere modus'
						},
						'tooltip': 'Schakel over naar de donkere modus'
					},
					dark: {
						'aria-label': {
							tooltip: 'Schakel naar de lichtmodus (Tooltip)',
							button: 'Schakel over naar de lichtmodus'
						},
						'tooltip': 'Schakel over naar de lichtmodus'
					}
				},
				internationalizationIconButton: {
					'aria-label': { tooltip: 'Verander taal (tooltip)', button: 'Verander taal' },
					'tooltip': 'Verander taal'
				},
				action: 'Contact opnemen'
			},
			socials: {
				email: {
					'aria-label': {
						tooltip: "Stuur e -mail naar '{{email}}' (tooltip)",
						button: "Stuur e -mail naar '{{email}}'"
					},
					'tooltip': "E -mail: '{{email}}'"
				},
				linkedin: {
					'aria-label': {
						tooltip: 'Open LinkedIn -profielpagina (Tooltip)',
						button: 'Open LinkedIn -profielpagina'
					},
					'tooltip': 'LinkedIn profiel'
				},
				github: {
					'aria-label': {
						tooltip: 'Open GitHub -profielpagina (Tooltip)',
						button: 'Open GitHub -profielpagina'
					},
					'tooltip': 'GitHub -profiel'
				}
			}
		},
		noMatch: {
			title: 'Pagina niet gevonden!',
			subtitle: 'Controleer de URL in de adresbalk en probeer het opnieuw.',
			action1: 'Ga terug naar huis',
			action2: 'Probeer het nog eens'
		},
		splashscreen: { label: 'David Scicluna • Front-end ontwikkelaar', logo: 'Davidscicluna' },
		home: {
			title1: 'Hallo! Ik ben David een gepassioneerde',
			title2: 'Front-end ontwikkelaar',
			subtitle: 'Momenteel gevestigd in de zonnige Maltese eilanden',
			icons: {
				html: { 'aria-label': 'Html (tooltip)', 'label': 'HTML' },
				css: { 'aria-label': 'CSS (tooltip)', 'label': 'CSS' },
				js: { 'aria-label': 'JavaScript (Tooltip)', 'label': 'Javascript' },
				ts: { 'aria-label': 'Typescript (tooltip)', 'label': 'Typecript' },
				react: { 'aria-label': 'React (tooltip)', 'label': 'Reageer' }
			},
			action: 'Contact opnemen'
		},
		about: {
			cover: {
				banner: 'Banner',
				portrait: 'Portret'
			},
			labels: {
				aboutMe: 'Over mij',
				certifications: 'Certificeringen',
				experience: 'Ervaring',
				skills: 'Vaardigheden'
			},
			experiences: [
				{ place: 'Tain | EEZE', role: 'Front-end ontwikkelaar' },
				{ place: 'davidscicluna.com', role: 'Freelance front-end ontwikkelaar' },
				{
					place: 'Ministerie voor Gozo (Office of the CIO)',
					role: 'Front-end ontwikkelaar (fulltime leerling)'
				},
				{
					place: 'Ministerie voor Gozo (Office of the CIO)',
					role: 'Front-end ontwikkelaar (fulltime leerling)'
				},
				{
					place: 'Ministerie voor Gozo (Office of the CIO)',
					role: 'IT Technische ondersteuning (fulltime leerling)'
				}
			],
			certifications: {
				udacity: 'Front-end webontwikkelaar Nanodegree',
				freecodecamp: 'Responsieve webdesigncertificering'
			}
		},
		project: {
			status: 'Work in progress'
		}
	}
};
