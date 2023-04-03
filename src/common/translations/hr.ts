export default {
	translation: {
		page: {
			title: 'David Scicluna • Portfelj',
			description:
				'Zdravo! Ja sam David Scicluna, prednji programer sa sjedištem na sunčanim malteškim otocima. Trenutno radi u Tain | EEZE i kao freelancer. Jako sam strastven u tehnologiji; Obožavam razvijati ideje u aplikacije i posvećen sam stvaranju proizvoda i usluga s izuzetnim korisničkim iskustvom i modernim tehnikama korisničkog sučelja. Trudim se da nastavim učiti i proširiti svoje znanje na ovom polju, jer vjerujem da što više učim, to će bolje iskustvo imati krajnji korisnici. Možete me pronaći na LinkedIn -u i GitHub -u ili mi se obratiti putem e -maila na hello@davidscicluna.com.'
		},
		common: {
			about: [
				`Zdravo! Ja sam David Scicluna, prednji programer sa sjedištem na sunčanim malteškim otocima. Trenutno radi na <a href="${
					import.meta.env.VITE_TAIN_URL
				}" target="_blank">Tain</a> | <a href="${
					import.meta.env.VITE_EEZE_URL
				}" target="_blank">EEZE</a> i kao freelancer.`,
				'Jako sam strastven u tehnologiji; Obožavam razvijati ideje u aplikacije i posvećen sam stvaranju proizvoda i usluga s izuzetnim korisničkim iskustvom i modernim tehnikama korisničkog sučelja.',
				'Trudim se da nastavim učiti i proširiti svoje znanje na ovom polju, jer vjerujem da što više učim, to će bolje iskustvo imati krajnji korisnici.',
				`Možete me pronaći na <a href="${
					import.meta.env.VITE_LINKEDIN_URL
				}" target="_blank">Linkedin</a> i <a href="${
					import.meta.env.VITE_GITHUB_URL
				}" target="_blank">Github</a>, ili mi se obrati putem e -pošte na <a href="mailto:${
					import.meta.env.VITE_EMAIL_URL
				}">hello@davidscicluna.com</a>.`
			],
			navItems: { '/': 'Dom', '/about': 'Oko', '/projects': 'Projekti' },
			projects: {
				edb: {
					title: 'Baza podataka za zabavu (EDB)',
					short: 'EDB',
					description:
						'Baza podataka za zabavu (EDB) je web aplikacija koja nudi informacije vezane uz industriju zabave koju pokreće API API. Takve informacije mogu biti bilo što od filmova, TV emisija i ljudi koji to čine. EDB nudi korisnicima mogućnost pregledavanja svih informacija, poput i spremanja na popis. Svaki podatak koji se nalazi u EDB -u najnoviji je i najugriženiji sadržaj koji se tiče industrije zabave, osiguravajući korisnicima pouzdanog sadržaja.',
					links: { web: 'Idite na EDB', playground: 'Otvoreni EDB', git: 'Ždrijeb' }
				},
				concentration: {
					title: 'Koncentracija',
					description:
						'Koncentracija je igra koja odgovara kartici. Da bi pobijedio, igrač mora uskladiti sve karte uparivanjem onih koje sadrže istu ikonu.',
					links: { web: 'Idite na koncentraciju', playground: 'Otvorena koncentracija', git: 'Ždrijeb' }
				},
				journal: {
					title: 'Časopis',
					description:
						'Časopis je bogat uređivač teksta koji korisniku omogućuje pisanje i uređivanje bilješki s tekstom, slikama, vezama i bojama.',
					links: { web: 'Idite u časopis', playground: 'Otvoreni časopis', git: 'Ždrijeb' }
				},
				clock: {
					title: 'Sat',
					description:
						'Sat je aplikacija u stvarnom vremenu koja korisniku omogućuje da provjeri u stvarnom vremenu bilo kojeg grada širom svijeta. Može se postaviti alarmi, štopericu i tajmer.',
					links: { web: 'Ići na sat', playground: 'Otvoreni sat', git: 'Ždrijeb' }
				},
				weather: {
					title: 'Vrijeme',
					description:
						'Vrijeme je aplikacija koja korisniku omogućuje pretraživanje trenutnog vremena svih gradova širom svijeta.',
					links: { web: 'Ići na vrijeme', playground: 'Otvoreno vrijeme', git: 'Ždrijeb' }
				},
				calculator: {
					title: 'Kalkulator',
					description:
						'Kalkulator je aplikacija koja korisniku omogućuje izračunavanje neznanstvenih izračuna i prikazuje prošle proračune.',
					links: { web: 'Idite na kalkulator', playground: 'Otvoreni kalkulator', git: 'Ždrijeb' }
				}
			},
			skills: [
				{
					label: 'Oblikovati',
					skills: [
						'Dizajn korisničkog sučelja (UI)',
						'Korisničko iskustvo (UX)',
						'Responzivni web dizajn',
						'Dizajn brendiranja'
					]
				},
				{
					label: 'Tehnologije',
					skills: [
						'Jezik hiperteksta (HTML)',
						'Kaskadni listovi stila (CSS)',
						'Sintaktički fantastični listovi stila (SASS)',
						'CSS u JS (JSS)',
						'Javascript',
						'Pipce script'
					]
				},
				{ label: 'JS okviri', skills: ['React JS', 'Vuka'] },
				{
					label: 'Biblioteke',
					skills: ['Čakra ui', 'Materijalni ui (mui)', 'Reduks', 'Nacrt JS', 'Knjiga pripovjedaka']
				},
				{ label: 'Testiranje', skills: ['Šala', 'Jasmine JS'] },
				{
					label: 'Alati i aplikacije',
					skills: ['Git', 'Pređa', 'NPM', 'Eslint', 'Ljepši', 'Figma', 'Adobe Experience Design (XD)']
				}
			]
		},
		components: {
			errorBoundary: {
				title: 'O ne! 😭',
				subtitle:
					'Nažalost, nešto je pošlo po zlu kada je pokušao podnijeti prijavu. Molim vas osvježite da biste pokušali ponovo!',
				console: 'Uncuught Pogreška:',
				action: 'Osvježiti'
			},
			logo: { long: 'Davidscicluna', short: 'DS' }
		},
		layout: {
			internationalizationModal: {
				title: 'preferirani jezik',
				subtitle: 'Odaberite preferirani jezik po vašem izboru s popisa u nastavku',
				languages: {
					bg: 'Bugarski',
					cs: 'češki',
					da: 'danski',
					de: 'njemački',
					el: 'grčki',
					en: 'Engleski',
					es: 'Španjolski',
					fr: 'francuski',
					hr: 'Hrvatski',
					hu: 'Mađarski',
					it: 'talijanski',
					mt: 'malteški',
					nl: 'Nizozemski',
					pl: 'Polirati',
					pt: 'Portugalski',
					ro: 'Rumun',
					ru: 'ruski',
					sr: 'Srbin',
					sv: 'švedski',
					tr: 'turski',
					uk: 'ukrajinski'
				},
				placeholder: "Pokušajte '{{language}}'",
				cancel: 'Otkazati',
				action: 'Promijeni jezik'
			},
			playgroundModal: {
				title: 'Naziv projekta',
				subtitle: 'Opis projekta',
				navigation: {
					open: {
						'aria-label': { tooltip: 'Otvorena navigacija (ToolTip)', button: 'Otvorena navigacija' },
						'tooltip': 'Otvorena navigacija'
					},
					close: {
						'aria-label': { tooltip: 'Izlazni navigacija (AlatTip)', button: 'Izlazna navigacija' },
						'tooltip': 'Izlazna navigacija'
					}
				},
				fullscreen: {
					open: {
						'aria-label': { tooltip: 'Otvorite cijeli zaslon (ToolTip)', button: 'Otvorite puni zaslon' },
						'tooltip': 'Otvorite puni zaslon'
					},
					close: {
						'aria-label': {
							tooltip: 'Izađite s cijelim zaslonom (ToolTip)',
							button: 'Izađite na cijelom zaslonu'
						},
						'tooltip': 'Izađite na cijelom zaslonu'
					}
				},
				close: { 'aria-label': 'Blisko igralište', 'tooltip': 'Zatvoriti' },
				cancel: 'Otkazati',
				action: 'Otvoreno na novoj kartici'
			},
			contact: {
				label: 'Želite stupiti u kontakt kako biste surađivali na projektu koji imate na umu? Kliknite za razgovor!',
				action: 'Razgovarajmo'
			},
			footer: { copyright: '© {{year}} David Scicluna, sva prava pridržana.' },
			navigation: {
				colorModeIconButton: {
					light: {
						'aria-label': {
							tooltip: 'Prebacite se na tamni način rada (ToolTip)',
							button: 'Prebacite se na tamni način rada'
						},
						'tooltip': 'Prebacite se na tamni način rada'
					},
					dark: {
						'aria-label': {
							tooltip: 'Prebacite na način rada (ToolTip)',
							button: 'Prebacite se na lagani način rada'
						},
						'tooltip': 'Prebacite se na lagani način rada'
					}
				},
				internationalizationIconButton: {
					'aria-label': { tooltip: 'Promijenite jezik (ToolTip)', button: 'Promijeni jezik' },
					'tooltip': 'Promijeni jezik'
				},
				action: 'Stupiti u kontakt'
			},
			socials: {
				email: {
					'aria-label': {
						tooltip: "Pošaljite e -poštu na '{{email}}' (ToolTip)",
						button: "Pošaljite e -poštu na '{{email}}'"
					},
					'tooltip': "E -pošta: '{{email}}'"
				},
				linkedin: {
					'aria-label': {
						tooltip: 'Otvorite stranicu profila LinkedIn (ToolTip)',
						button: 'Otvorite stranicu profila LinkedIn'
					},
					'tooltip': 'LinkedIn profil'
				},
				github: {
					'aria-label': {
						tooltip: 'Otvorite stranicu GitHub profila (ToolTip)',
						button: 'Otvorite stranicu GitHub profila'
					},
					'tooltip': 'Github profil'
				}
			}
		},
		noMatch: {
			title: 'Stranica nije pronađena!',
			subtitle: 'Molimo provjerite URL u adresnoj traci i pokušajte ponovo.',
			action1: 'Vratiti se kući',
			action2: 'Pokušajte ponovo'
		},
		splashscreen: { label: 'David Scicluna • Front-End Developer', logo: 'Davidscicluna' },
		home: {
			title1: 'Zdravo! Ja sam David strastven',
			title2: 'Prednji programer',
			subtitle: 'Trenutno sa sjedištem na sunčanim malteškim otocima',
			icons: {
				html: { 'aria-label': 'HTML (ToolTip)', 'label': 'Html' },
				css: { 'aria-label': 'CSS (ToolTip)', 'label': 'CSS' },
				js: { 'aria-label': 'JavaScript (ToolTip)', 'label': 'Javascript' },
				ts: { 'aria-label': 'TypeScript (ToolTip)', 'label': 'Pipce script' },
				react: { 'aria-label': 'React (ToolTip)', 'label': 'Reagirati' }
			},
			action: 'Stupiti u kontakt'
		},
		about: {
			cover: {
				banner: 'Banner',
				portrait: 'Portret'
			},
			labels: {
				aboutMe: 'O meni',
				certifications: 'Certifikati',
				experience: 'Iskustvo',
				skills: 'Vještine'
			},
			experiences: [
				{ place: 'Tain | EEZE', role: 'Prednji programer' },
				{ place: 'davidscicluna.com', role: 'Slobodni prednji programer' },
				{ place: 'Ministarstvo za Gozo (Ured CIO -a)', role: 'Front-End Developer (stalni pripravnik)' },
				{ place: 'Ministarstvo za Gozo (Ured CIO -a)', role: 'Front-End Developer (stalni pripravnik)' },
				{ place: 'Ministarstvo za Gozo (Ured CIO -a)', role: 'IT tehnička podrška (stalni pripravnik)' }
			],
			certifications: {
				udacity: 'Front-end web programer nanodegree',
				freecodecamp: 'Certifikacija za responzivno'
			}
		},
		project: {
			status: 'Work in progress'
		}
	}
};
