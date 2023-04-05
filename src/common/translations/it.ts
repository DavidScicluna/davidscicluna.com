export default {
	translation: {
		page: {
			title: 'David Scicluna • Portfolio',
			description:
				"Ciao! Sono David Scicluna, uno sviluppatore di front-end con sede nelle soleggiate isole maltesi. Attualmente lavora in Tain | EEZE e come libero professionista. Sono molto appassionato di tecnologia; Adoro sviluppare idee in applicazioni e mi impegno a creare prodotti e servizi con un'esperienza utente eccezionale e con le moderne tecniche di interfaccia utente. Faccio del mio meglio per continuare ad apprendere ed espandere le mie conoscenze in questo campo, poiché credo che più imparo, migliore sarà l'esperienza che gli utenti finali avranno. Puoi trovarmi su LinkedIn e GitHub o contattami via e -mail all'indirizzo hello@davidscicluna.com."
		},
		common: {
			about: [
				`Ciao! Sono David Scicluna, uno sviluppatore di front-end con sede nelle soleggiate isole maltesi. Attualmente lavora su <a href="${
					import.meta.env.VITE_TAIN_URL
				}" target="_blank">Tain</a> | <a href="${
					import.meta.env.VITE_EEZE_URL
				}" target="_blank">EEZE</a> e come libero professionista.`,
				"Sono molto appassionato di tecnologia; Adoro sviluppare idee in applicazioni e mi impegno a creare prodotti e servizi con un'esperienza utente eccezionale e con le moderne tecniche di interfaccia utente.",
				"Faccio del mio meglio per continuare ad apprendere ed espandere le mie conoscenze in questo campo, poiché credo che più imparo, migliore sarà l'esperienza che gli utenti finali avranno.",
				`Puoi trovarmi su <a href="${
					import.meta.env.VITE_LINKEDIN_URL
				}" target="_blank">Linkedin</a> e <a href="${
					import.meta.env.VITE_GITHUB_URL
				}" target="_blank">Github</a> o contattami via e -mail all'indirizzo <a href="mailto:${
					import.meta.env.VITE_EMAIL_URL
				}">hello@davidscicluna.com</a>.`
			],
			navItems: { '/': 'Casa', '/about': 'Di', '/projects': 'Progetti' },
			projects: {
				edb: {
					title: 'Il database di intrattenimento (EDB)',
					short: 'EDB',
					description:
						"Il database di intrattenimento (EDB) è un'applicazione Web che offre informazioni relative al settore dell'intrattenimento alimentato dall'API THEOVIEDB. Tali informazioni possono essere qualsiasi cosa da film, programmi TV e persone che lo fanno accadere. EDB offre agli utenti la possibilità di visualizzare tutte le informazioni, come, e salvarle in un elenco. Ogni pezzo di dati trovati in EDB è gli ultimi e più aggiornati contenuti riguardanti il settore dell'intrattenimento, garantendo agli utenti con contenuti affidabili.",
					links: { web: 'Vai a EDB', playground: 'Open EDB', git: 'Github' }
				},
				concentration: {
					title: 'Concentrazione',
					description:
						'La concentrazione è un gioco di abbinamento con carta. Per vincere, il giocatore deve abbinare tutte le carte abbinando quelle che contengono la stessa icona.',
					links: { web: 'Vai alla concentrazione', playground: 'Concentrazione aperta', git: 'Github' }
				},
				journal: {
					title: 'rivista',
					description:
						"Journal è un ricco editor di testo che consente all'utente di scrivere e modificare note con testo, immagini, collegamenti e colori.",
					links: { web: 'Vai al diario', playground: 'Diario aperto', git: 'Github' }
				},
				clock: {
					title: 'Orologio',
					description:
						"L'orologio è un'applicazione in tempo reale che consente all'utente di controllare in tempo reale di qualsiasi città in tutto il mondo. Si possono impostare allarmi, un cronometro e un timer.",
					links: { web: "Vai all'orologio", playground: 'Orologio aperto', git: 'Github' }
				},
				weather: {
					title: 'Tempo atmosferico',
					description:
						"Il tempo è un'applicazione che consente all'utente di cercare il tempo attuale di tutte le città di tutto il mondo.",
					links: { web: 'Vai al tempo', playground: 'Tempo aperto', git: 'Github' }
				},
				calculator: {
					title: 'Calcolatrice',
					description:
						"Il calcolatore è un'applicazione che consente all'utente di calcolare i calcoli non scientifici e visualizzare i calcoli passati.",
					links: { web: 'Vai al calcolatore', playground: 'Calcolatrice aperta', git: 'Github' }
				}
			},
			skills: [
				{
					label: 'Progetto',
					skills: [
						"Design dell'interfaccia utente (UI)",
						'Esperienza utente (UX)',
						'Web design reattivo',
						'Design del branding'
					]
				},
				{
					label: 'Tecnologie',
					skills: [
						'Lingua di markup ipertestuale (HTML)',
						'Fogli in stile a cascata (CSS)',
						'Fogli di stile sintatticamente fantastici (SASS)',
						'CSS in JS (JSS)',
						'JavaScript',
						'Dattiloscritto'
					]
				},
				{ label: 'Framework JS', skills: ['Reagire js', 'Vue'] },
				{
					label: 'Biblioteche',
					skills: ['Chakra Ui', 'UI materiale (MUI)', 'Redux', 'Draft JS', 'Libro di storia']
				},
				{ label: 'Test', skills: ['Scherzo', 'Jasmine JS'] },
				{
					label: 'Strumenti e applicazioni',
					skills: ['Idiota', 'Filato', 'Npm', 'Eslint', 'Più bello', 'Figma', 'Adobe Experience Design (XD)']
				}
			]
		},
		components: {
			errorBoundary: {
				title: 'Oh no! 😭',
				subtitle:
					"Sfortunatamente, qualcosa è andato storto quando si cerca di rendere l'applicazione. Si prega di aggiornare per riprovare!",
				console: 'Errore non accumulato:',
				action: 'ricaricare'
			},
			logo: { long: 'Davidscicluna', short: 'ds' }
		},
		layout: {
			scrollToTop: "Scorri verso l'alto",
			internationalizationModal: {
				title: 'Lingua preferita',
				subtitle: "Scegli la lingua preferita di tua scelta dall'elenco delle lingue di seguito",
				empty: {
					title: 'Nessuna lingua trovata',
					subtitle: 'Nessuna lingua trovata con la query "{{query}}"',
					action: 'Cancella ricerca'
				},
				languages: {
					bg: 'Bulgara',
					cs: 'Ceca',
					da: 'danese',
					de: 'Tedesca',
					el: 'Greca',
					en: 'Inglese',
					es: 'Spagnola',
					fr: 'francese',
					hr: 'Croata',
					hu: 'ungherese',
					it: 'Italiana',
					mt: 'maltese',
					nl: 'Olandese',
					pl: 'Polacca',
					pt: 'portoghese',
					ro: 'Rumena',
					ru: 'Russa',
					sr: 'Serba',
					sv: 'svedese',
					tr: 'Turca',
					uk: 'Ucraina'
				},
				placeholder: "Prova '{{language}}'",
				cancel: 'Annulla',
				action: 'Cambia lingua'
			},
			playgroundModal: {
				title: 'titolo del progetto',
				subtitle: 'descrizione del progetto',
				navigation: {
					open: {
						'aria-label': { tooltip: 'Open Navigation (ToolTip)', button: 'Navigazione aperta' },
						'tooltip': 'Navigazione aperta'
					},
					close: {
						'aria-label': { tooltip: 'Exit Navigation (ToolTip)', button: 'Navigazione di uscita' },
						'tooltip': 'Navigazione di uscita'
					}
				},
				fullscreen: {
					open: {
						'aria-label': { tooltip: 'Open FullScreen (ToolTip)', button: 'Aperto a schermo intero' },
						'tooltip': 'Aperto a schermo intero'
					},
					close: {
						'aria-label': {
							tooltip: 'Exit FullScreen (ToolTip)',
							button: 'Esci dalla modalità schermo intero'
						},
						'tooltip': 'Esci dalla modalità schermo intero'
					}
				},
				close: { 'aria-label': 'Close Playground', 'tooltip': 'Vicina' },
				error: {
					title: "Impossibile caricare l'app",
					subtitle: 'Sfortunatamente, qualcosa è andato storto durante il tentativo di caricare {{project}}',
					project: 'progetto',
					action: 'Vicino'
				},
				cancel: 'Annulla',
				action: 'Apri in una nuova scheda'
			},
			contact: {
				label: 'Vuoi metterti in contatto per collaborare a un progetto che hai in mente? Clicca per parlare!',
				action: 'Parliamo'
			},
			footer: { copyright: '© {{year}} David Scicluna, tutti i diritti riservati.' },
			navigation: {
				colorModeIconButton: {
					light: {
						'aria-label': {
							tooltip: 'Passa alla modalità Dark (ToolTip)',
							button: 'Passa alla modalità oscura'
						},
						'tooltip': 'Passa alla modalità oscura'
					},
					dark: {
						'aria-label': {
							tooltip: 'Passa alla modalità Light (Tooltip)',
							button: 'Passa alla modalità luce'
						},
						'tooltip': 'Passa alla modalità luce'
					}
				},
				internationalizationIconButton: {
					'aria-label': { tooltip: 'Cambia lingua (ToolTip)', button: 'Cambia lingua' },
					'tooltip': 'Cambia lingua'
				},
				action: 'Mettiti in contatto'
			},
			socials: {
				email: {
					'aria-label': {
						tooltip: "Invia e -mail a '{{email}}' (ToolTip)",
						button: "Invia e -mail a '{{email}}'"
					},
					'tooltip': "Email: '{{email}}'"
				},
				linkedin: {
					'aria-label': {
						tooltip: 'Apri Pagina del profilo LinkedIn (ToolTip)',
						button: 'Apri pagina del profilo LinkedIn'
					},
					'tooltip': 'Profilo LinkedIn'
				},
				github: {
					'aria-label': {
						tooltip: 'Apri Pagina del profilo GitHub (ToolTip)',
						button: 'Apri pagina del profilo GitHub'
					},
					'tooltip': 'Profilo github'
				}
			}
		},
		noMatch: {
			title: 'Pagina non trovata!',
			subtitle: "Controlla l'URL nella barra degli indirizzi e riprova.",
			action1: 'Torna a casa',
			action2: 'Riprova'
		},
		splashscreen: { label: 'David Scicluna • sviluppatore front-end', logo: 'Davidscicluna' },
		home: {
			title1: 'Ciao! Sono David un appassionato',
			title2: 'Sviluppatore Front End',
			subtitle: 'Attualmente con sede nelle sole isole maltesi',
			icons: {
				html: { 'aria-label': 'HTML (ToolTip)', 'label': 'Html' },
				css: { 'aria-label': 'CSS (ToolTip)', 'label': 'CSS' },
				js: { 'aria-label': 'JavaScript (ToolTip)', 'label': 'JavaScript' },
				ts: { 'aria-label': 'TypeScript (ToolTip)', 'label': 'Dattiloscritto' },
				react: { 'aria-label': 'React (ToolTip)', 'label': 'Reagire' }
			},
			action: 'Mettiti in contatto'
		},
		about: {
			cover: {
				banner: 'Banner',
				portrait: 'Ritratto'
			},
			labels: {
				aboutMe: 'Su di me',
				certifications: 'Certificazioni',
				experience: 'Esperienza',
				skills: 'Competenze'
			},
			experiences: [
				{ place: 'Tain | EEZE', role: 'Sviluppatore Front End' },
				{ place: 'davidscicluna.com', role: 'Sviluppatore frontale freelance' },
				{
					place: 'Ministero per Gozo (ufficio del CIO)',
					role: 'Sviluppatore front-end (apprendista a tempo pieno)'
				},
				{
					place: 'Ministero per Gozo (ufficio del CIO)',
					role: 'Sviluppatore front-end (apprendista a tempo pieno)'
				},
				{
					place: 'Ministero per Gozo (ufficio del CIO)',
					role: 'Supporto tecnico IT (apprendista a tempo pieno)'
				}
			],
			certifications: {
				udacity: 'Sviluppatore Web front-end Nanodegree',
				freecodecamp: 'Certificazione reattiva di web design'
			}
		},
		project: {
			status: 'Work in progress'
		}
	}
};
