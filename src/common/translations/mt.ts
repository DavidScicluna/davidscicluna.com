export default {
	translation: {
		page: {
			title: 'David Scicluna • Portafoll',
			description:
				"Bongu! Jien David Scicluna, żviluppatur front-end ibbażat fil-Gżejjer Sunny Maltese. Bħalissa qed jaħdem f'Tain | EEZE u bħala freelancer. Jiena passjonat ħafna dwar it-teknoloġija; Inħobb niżviluppa ideat f'applikazzjonijiet u ninsab impenjat li noħloq prodotti u servizzi b'esperjenza eċċezzjonali ta 'l-utent u ma' tekniki moderni ta 'interface ta' l-utent. Nipprova l-almu tiegħi biex nibqa 'nitgħallem u nespandi l-għarfien tiegħi f'dan il-qasam, billi nemmen li iktar ma nitgħallem, aħjar tkun l-esperjenza li l-utenti finali se jkollhom. Tista 'ssibni fuq LinkedIn, u Github, jew tasal lili permezz ta' email fuq hello@davidscicluna.com."
		},
		common: {
			about: [
				`Bongu! Jien David Scicluna, żviluppatur front-end ibbażat fil-Gżejjer Sunny Maltese. Bħalissa qed jaħdem f <a href="${
					import.meta.env.VITE_TAIN_URL
				}" target="_blank">Tain</a> | <a href="${
					import.meta.env.VITE_EEZE_URL
				}" target="_blank">EEZE</a> u bħala freelancer.`,
				"Jiena passjonat ħafna dwar it-teknoloġija; Inħobb niżviluppa ideat f'applikazzjonijiet u ninsab impenjat li noħloq prodotti u servizzi b'esperjenza eċċezzjonali ta 'l-utent u ma' tekniki moderni ta 'interface ta' l-utent.",
				"Nipprova l-almu tiegħi biex nibqa 'nitgħallem u nespandi l-għarfien tiegħi f'dan il-qasam, billi nemmen li iktar ma nitgħallem, aħjar tkun l-esperjenza li l-utenti finali se jkollhom.",
				`Tista 'ssibni fuq <a href="${
					import.meta.env.VITE_LINKEDIN_URL
				}" target="_blank">Linkedin</a>, u <a href="${
					import.meta.env.VITE_GITHUB_URL
				}" target="_blank">Github</a>, jew aqbad lili permezz ta 'email fuq <a href="mailto:${
					import.meta.env.VITE_EMAIL_URL
				}">hello@davidscicluna.com</a>.`
			],
			navItems: { '/': 'Id-dar', '/about': 'Madwar', '/projects': 'Proġetti' },
			projects: {
				edb: {
					title: 'Id-Dejtabejż tad-Divertiment (EDB)',
					short: 'EDB',
					description:
						"Id-database tad-divertiment (EDB) hija applikazzjoni tal-web li toffri informazzjoni relatata mal-industrija tad-divertiment mħaddma mill-API ThemoViedB. Informazzjoni bħal din tista 'tkun xi ħaġa minn films, programmi tat-TV, u n-nies li jagħmlu dan iseħħ. EDB joffri lill-utenti l-abbiltà li jaraw l-informazzjoni kollha, bħal, u jsalvawha f'lista. Kull biċċa ta 'dejta misjuba fl-EDB hija l-aħħar u l-iktar kontenut aġġornat dwar l-industrija tad-divertiment, li jiżgura lill-utenti b'kontenut ta' min jafdaha.",
					links: { web: 'Mur għand EDB', playground: 'EDB miftuħ', git: 'Github' }
				},
				concentration: {
					title: 'Konċentrazzjoni',
					description:
						'Il-konċentrazzjoni hija logħba li taqbel mal-karti. Biex tirbaħ, il-plejer irid jaqbel mal-karti kollha billi jqabbad dawk li fihom l-istess ikona.',
					links: { web: 'Mur għall-konċentrazzjoni', playground: 'Konċentrazzjoni miftuħa', git: 'Github' }
				},
				journal: {
					title: 'Ġurnal',
					description:
						'Il-Ġurnal huwa editur ta ’test rikk li jippermetti lill-utent jikteb u jeditja noti b’test, immaġini, links u kuluri.',
					links: { web: 'Mur fil-Ġurnal', playground: 'Ġurnal Miftuħ', git: 'Github' }
				},
				clock: {
					title: 'Arloġġ',
					description:
						"L-arloġġ huwa applikazzjoni f'ħin reali li tippermetti lill-utent jiċċekkja f'ħin reali ta 'kwalunkwe belt madwar id-dinja. Wieħed jista 'jistabbilixxi allarmi, kronometru, u tajmer.",
					links: { web: 'Mur fl-arloġġ', playground: 'Arloġġ miftuħ', git: 'Github' }
				},
				weather: {
					title: 'Temp',
					description:
						'It-temp huwa applikazzjoni li tippermetti lill-utent ifittex it-temp attwali tal-ibliet kollha madwar id-dinja.',
					links: { web: 'Mur fit-temp', playground: 'Temp miftuħ', git: 'Github' }
				},
				calculator: {
					title: 'Kalkulatur',
					description:
						'Il-kalkulatur huwa applikazzjoni li tippermetti lill-utent jikkalkula kalkoli mhux xjentifiċi u juri kalkoli tal-passat.',
					links: { web: 'Mur fil-Kalkulatur', playground: 'Kalkulatur miftuħ', git: 'Github' }
				}
			},
			skills: [
				{
					label: 'Disinn',
					skills: [
						'Disinn tal-Interfaċċa tal-Utent (UI)',
						'Esperjenza tal-Utent (UX)',
						'Disinn tal-Web Responsive',
						'Disinn tal-marka'
					]
				},
				{
					label: 'Teknoloġiji',
					skills: [
						"Lingwa ta 'Markup ta' Hypertext (HTML)",
						'Folji tal-istil tal-kaskata (CSS)',
						"Folji tal-Istil Sintattikament tal-Biża '(SASS)",
						"CSS f'JS (JSS)",
						'JavaScript',
						'TypeScript'
					]
				},
				{ label: 'Oqfsa JS', skills: ['React JS', 'Vue'] },
				{
					label: 'Libreriji',
					skills: ['Chakra ui', 'UI Materjal (MUI)', 'Redux', "Abbozz ta 'JS", 'Storybook']
				},
				{ label: 'Ittestjar', skills: ['Jest', 'Jasmine JS'] },
				{
					label: 'Għodda u Applikazzjonijiet',
					skills: ['Git', 'Ħjut', 'NPM', 'Eslint', 'Aktar isbaħ', 'Figma', 'Adobe Experience Design (XD)']
				}
			]
		},
		components: {
			errorBoundary: {
				title: 'Oh le! 😭',
				subtitle:
					"Sfortunatament, xi ħaġa marret ħażin meta ppruvat tirrendi l-applikazzjoni. Jekk jogħġbok iġedded biex terġa 'tipprova!",
				console: 'Żball maqbud:',
				action: 'Aġġornament'
			},
			logo: { long: 'Davidscicluna', short: 'ds' }
		},
		layout: {
			scrollToTop: 'Skrollja lejn il-quċċata',
			internationalizationModal: {
				title: 'Lingwa preferuta',
				subtitle: 'Agħżel il-lingwa preferuta tal-għażla tiegħek mil-lista tal-lingwi hawn taħt',
				empty: {
					title: 'L-ebda Lingwi misjuba',
					subtitle: 'L-ebda lingwa ma nstabet bil-mistoqsija "{{query}}"',
					action: 'Tiftix ċar'
				},
				languages: {
					bg: 'Bulgaru',
					cs: 'Ċek',
					da: 'Daniż',
					de: 'Ġermaniż',
					el: 'Grieg',
					en: 'Ingliż',
					es: 'Spanjol',
					fr: 'Franċiż',
					hr: 'Kroat',
					hu: 'Ungeriż',
					it: 'Taljan',
					mt: 'Malti',
					nl: 'Olandiż',
					pl: 'Pollakk',
					pt: 'Portugiż',
					ro: 'Rumen',
					ru: 'Russu',
					sr: 'Serb',
					sv: 'Svediż',
					tr: 'Tork',
					uk: 'Ukraina'
				},
				placeholder: 'Ipprova "{{language}}"',
				cancel: 'Ikkanċella',
				action: 'Ibdel il-lingwa'
			},
			playgroundModal: {
				title: 'Titlu tal-Proġett',
				subtitle: 'Deskrizzjoni tal-Proġett',
				navigation: {
					open: {
						'aria-label': { tooltip: 'Navigazzjoni Miftuħa (Tooltip)', button: 'Navigazzjoni miftuħa' },
						'tooltip': 'Navigazzjoni miftuħa'
					},
					close: {
						'aria-label': { tooltip: 'Navigazzjoni tal-Ħruġ (Tooltip)', button: 'Ħruġ tan-navigazzjoni' },
						'tooltip': 'Ħruġ tan-navigazzjoni'
					}
				},
				fullscreen: {
					open: {
						'aria-label': { tooltip: 'Iftaħ FullScreen (Tooltip)', button: 'Iftaħ il-fullscreen' },
						'tooltip': 'Iftaħ il-fullscreen'
					},
					close: {
						'aria-label': { tooltip: 'Ħruġ FullScreen (Tooltip)', button: 'Ħruġ fullscreen' },
						'tooltip': 'Ħruġ fullscreen'
					}
				},
				close: { 'aria-label': 'Playground mill-qrib', 'tooltip': 'Viċin' },
				error: {
					title: 'App naqset milli tgħabbi',
					subtitle: 'Sfortunatament, xi ħaġa marret ħażin meta ppruvat tagħbija {{project}}',
					project: 'proġett',
					action: 'Agħlaq'
				},
				cancel: 'Ikkanċella',
				action: 'Miftuħ fit-tab Ġdid'
			},
			contact: {
				label: "Trid tagħmel kuntatt biex tikkollabora fuq proġett li għandek f'moħħok? Ikklikkja biex titkellem!",
				action: 'Ejja nitkellmu'
			},
			footer: { copyright: '© {{year}} David Scicluna, id-drittijiet kollha riżervati.' },
			navigation: {
				colorModeIconButton: {
					light: {
						'aria-label': {
							tooltip: 'Aqleb għall-modalità skura (tooltip)',
							button: 'Aqleb għall-modalità skura'
						},
						'tooltip': 'Aqleb għall-modalità skura'
					},
					dark: {
						'aria-label': {
							tooltip: 'Aqleb għall-modalità tad-dawl (tooltip)',
							button: 'Aqleb għall-Modalità Dawl'
						},
						'tooltip': 'Aqleb għall-Modalità Dawl'
					}
				},
				internationalizationIconButton: {
					'aria-label': { tooltip: 'Ibdel il-Lingwa (Tooltip)', button: 'Ibdel il-lingwa' },
					'tooltip': 'Ibdel il-lingwa'
				},
				action: 'Ikkuntattjani'
			},
			socials: {
				email: {
					'aria-label': {
						tooltip: "Ibgħat email lil '{{email}}' (tooltip)",
						button: "Ibgħat email lil '{{email}}'"
					},
					'tooltip': 'Email: "{{email}}"'
				},
				linkedin: {
					'aria-label': {
						tooltip: 'Iftaħ il-paġna tal-profil LinkedIn (Tooltip)',
						button: 'Iftaħ il-paġna tal-profil LinkedIn'
					},
					'tooltip': 'Profil LinkedIn'
				},
				github: {
					'aria-label': {
						tooltip: 'Iftaħ il-Paġna tal-Profil Github (Tooltip)',
						button: 'Iftaħ il-paġna tal-profil github'
					},
					'tooltip': 'Profil github'
				}
			}
		},
		noMatch: {
			title: 'Paġna ma nstabx!',
			subtitle: "Jekk jogħġbok iċċekkja l-URL fil-bar tal-indirizz u erġa 'pprova.",
			action1: 'Mur lura d-dar',
			action2: "Erġa 'pprova"
		},
		splashscreen: { label: 'David Scicluna • Front-End Developer', logo: 'Davidscicluna' },
		home: {
			title1: 'Bongu! Jien David Passjonat',
			title2: 'Żviluppatur front-end',
			subtitle: 'Bħalissa bbażata fil-Gżejjer Sunny Malti',
			icons: {
				html: { 'aria-label': 'HTML (Tooltip)', 'label': 'Html' },
				css: { 'aria-label': 'CSS (Tooltip)', 'label': 'CSS' },
				js: { 'aria-label': 'JavaScript (Tooltip)', 'label': 'JavaScript' },
				ts: { 'aria-label': 'Typecript (tooltip)', 'label': 'TypeScript' },
				react: { 'aria-label': 'React (Tooltip)', 'label': 'Tirreaġixxi' }
			},
			action: 'Ikkuntattjani'
		},
		about: {
			cover: {
				banner: 'Banner',
				portrait: 'Ritratt'
			},
			labels: {
				aboutMe: 'Dwari',
				certifications: 'Ċertifikazzjonijiet',
				experience: 'Esperjenza',
				skills: 'Ħiliet'
			},
			experiences: [
				{ place: 'Tain | EEZE', role: 'Żviluppatur front-end' },
				{ place: 'davidscicluna.com', role: 'Freelance Front-End Developer' },
				{ place: 'Ministeru għal Gozo (Uffiċċju tas-CIO)', role: 'Front-End Developer (Full-Time Apprentice)' },
				{ place: 'Ministeru għal Gozo (Uffiċċju tas-CIO)', role: 'Front-End Developer (Full-Time Apprentice)' },
				{
					place: 'Ministeru għal Gozo (Uffiċċju tas-CIO)',
					role: 'Appoġġ Tekniku tal-IT (Apprentice Full-Time)'
				}
			],
			certifications: {
				udacity: 'Front-End Web Developer Nanodegree',
				freecodecamp: 'Ċertifikazzjoni tad-Disinn tal-Web Responsiva'
			}
		},
		project: {
			status: 'Work in progress'
		}
	}
};
