export default {
	translation: {
		page: {
			title: 'David Scicluna • Portfolio',
			description:
				'Hallo! Ich bin David Scicluna, ein Front-End-Entwickler mit Sitz auf den sonnigen maltesischen Inseln. Derzeit arbeitet bei Tain | EEZE und als Freiberufler. Ich bin sehr leidenschaftlich für Technologie. Ich liebe es, Ideen in Anwendungen zu entwickeln, und bin verpflichtet, Produkte und Dienste mit außergewöhnlicher Benutzererfahrung und mit modernen Benutzeroberflächentechniken zu erstellen. Ich versuche mein Bestes, um mein Wissen auf diesem Gebiet weiter zu lernen und zu erweitern, da ich glaube, je mehr ich lerne, desto besser die Erfahrung, die die Endbenutzer haben werden. Sie finden mich auf LinkedIn und Github oder wenden Sie sich per E -Mail an hello@davidscicluna.com.'
		},
		common: {
			about: [
				`Hallo! Ich bin David Scicluna, ein Front-End-Entwickler mit Sitz auf den sonnigen maltesischen Inseln. Derzeit arbeitet bei <a href="${
					import.meta.env.VITE_TAIN_URL
				}" target="_blank">Tain</a> | <a href="${
					import.meta.env.VITE_EEZE_URL
				}" target="_blank">EEZE</a> und als Freiberufler.`,
				'Ich bin sehr leidenschaftlich für Technologie. Ich liebe es, Ideen in Anwendungen zu entwickeln, und bin verpflichtet, Produkte und Dienste mit außergewöhnlicher Benutzererfahrung und mit modernen Benutzeroberflächentechniken zu erstellen.',
				'Ich versuche mein Bestes, um mein Wissen auf diesem Gebiet weiter zu lernen und zu erweitern, da ich glaube, je mehr ich lerne, desto besser die Erfahrung, die die Endbenutzer haben werden.',
				`Sie finden mich auf <a href="${
					import.meta.env.VITE_LINKEDIN_URL
				}" target="_blank">Linkedin</a> und <a href="${
					import.meta.env.VITE_GITHUB_URL
				}" target="_blank">Github</a> oder greifen Sie mich per E -Mail unter <a href="mailto:${
					import.meta.env.VITE_EMAIL_URL
				}">hello@davidscicluna.com</a>.`
			],
			navItems: { '/': 'Heim', '/about': 'Um', '/projects': 'Projekte' },
			projects: {
				edb: {
					title: 'Die Unterhaltungsdatenbank (EDB)',
					short: 'EDB',
					description:
						'Die Entertainment Database (EDB) ist eine Webanwendung, die Informationen zur Unterhaltungsindustrie bietet, die von der themeviedB -API betrieben werden. Solche Informationen können alles aus Filmen, Fernsehsendungen und den Menschen sein, die dies ermöglichen. EDB bietet den Benutzern die Möglichkeit, alle Informationen wie wie in einer Liste zu speichern. Jedes in EDB gefundene Daten ist der neueste und aktualisierte Inhalt der Unterhaltungsindustrie, um den Nutzern mit vertrauenswürdigen Inhalten zu gewährleisten.',
					links: { web: 'Gehen Sie zu EDB', playground: 'Öffnen Sie EDB', git: 'Github' }
				},
				concentration: {
					title: 'Konzentration',
					description:
						'Konzentration ist ein kartenübereinstimmendes Spiel. Um zu gewinnen, muss der Spieler alle Karten mit denjenigen kombinieren, die das gleiche Symbol enthalten.',
					links: { web: 'Konzentration gehen', playground: 'Offene Konzentration', git: 'Github' }
				},
				journal: {
					title: 'Tagebuch',
					description:
						'Journal ist ein reicher Texteditor, mit dem der Benutzer Notizen mit Text, Bildern, Links und Farben schreiben und bearbeiten kann.',
					links: { web: 'Gehen Sie zum Journal', playground: 'Open Journal', git: 'Github' }
				},
				clock: {
					title: 'Uhr',
					description:
						'Clock ist eine Echtzeit-Anwendung, mit der der Benutzer Echtzeit jeder Stadt auf der ganzen Welt überprüfen kann. Man kann Alarme, eine Stoppuhr und einen Timer einstellen.',
					links: { web: 'Gehen Sie zur Uhr', playground: 'Offene Uhr', git: 'Github' }
				},
				weather: {
					title: 'Wetter',
					description:
						'Das Wetter ist eine Anwendung, mit der der Benutzer das aktuelle Wetter aller Städte auf der ganzen Welt durchsucht.',
					links: { web: 'Gehen Sie zum Wetter', playground: 'Offenes Wetter', git: 'Github' }
				},
				calculator: {
					title: 'Taschenrechner',
					description:
						'Der Taschenrechner ist eine Anwendung, mit der der Benutzer nichtwissenschaftliche Berechnungen berechnet und frühere Berechnungen anzeichnet.',
					links: { web: 'Gehen Sie zum Taschenrechner', playground: 'Taschenrechner offen', git: 'Github' }
				}
			},
			skills: [
				{
					label: 'Design',
					skills: [
						'Benutzeroberfläche Design (UI)',
						'Benutzererfahrung (UX)',
						'Sich anpassendes Webdesign',
						'Branding -Design'
					]
				},
				{
					label: 'Technologien',
					skills: [
						'Hypertext Markup Sprache (HTML)',
						'Cascading Style Sheets (CSS)',
						'Syntaktisch großartige Stilblätter (SASS)',
						'CSS in JS (JSS)',
						'JavaScript',
						'Typoskript'
					]
				},
				{ label: 'JS Frameworks', skills: ['Reagieren js', 'Vue'] },
				{
					label: 'Bibliotheken',
					skills: ['Chakra ui', 'Material UI (MUI)', 'Redux', 'Entwurf JS', 'Storybook']
				},
				{ label: 'Testen', skills: ['Scherz', 'Jasmine JS'] },
				{
					label: 'Tools und Anwendungen',
					skills: ['Git', 'Garn', 'NPM', 'Eslint', 'Hübscher', 'Figma', 'Adobe Experience Design (XD)']
				}
			]
		},
		components: {
			errorBoundary: {
				title: 'Ach nein! 😭',
				subtitle:
					'Leider ist etwas schief gelaufen, als er versuchte, die Bewerbung zu rendern. Bitte aktualisieren Sie es, um es erneut zu versuchen!',
				console: 'Unbefundter Fehler:',
				action: 'Aktualisierung'
			},
			logo: { long: 'Davidscicluna', short: 'ds' }
		},
		layout: {
			internationalizationModal: {
				title: 'Bevorzugte Sprache',
				subtitle: 'Wählen Sie die bevorzugte Sprache Ihrer Wahl aus der Liste der Sprachen unten aus',
				languages: {
					bg: 'bulgarisch',
					cs: 'Tschechisch',
					da: 'dänisch',
					de: 'Deutsch',
					el: 'griechisch',
					en: 'Englisch',
					es: 'Spanisch',
					fr: 'Französisch',
					hr: 'kroatisch',
					hu: 'ungarisch',
					it: 'Italienisch',
					mt: 'maltesisch',
					nl: 'Niederländisch',
					pl: 'Polieren',
					pt: 'Portugiesisch',
					ro: 'rumänisch',
					ru: 'Russisch',
					sr: 'serbisch',
					sv: 'Schwedisch',
					tr: 'Türkisch',
					uk: 'ukrainisch'
				},
				placeholder: "Versuchen Sie '{{language}}'",
				cancel: 'Stornieren',
				action: 'Sprache ändern'
			},
			playgroundModal: {
				title: 'Projekttitel',
				subtitle: 'Projektbeschreibung',
				navigation: {
					open: {
						'aria-label': { tooltip: 'Offene Navigation (Tooltip)', button: 'Offene Navigation' },
						'tooltip': 'Offene Navigation'
					},
					close: {
						'aria-label': { tooltip: 'Ausgangsnavigation (Tooltip)', button: 'Navigation verlassen' },
						'tooltip': 'Navigation verlassen'
					}
				},
				fullscreen: {
					open: {
						'aria-label': { tooltip: 'Öffnen Sie Vollbild (Tooltip)', button: 'Fullscreen öffnen' },
						'tooltip': 'Fullscreen öffnen'
					},
					close: {
						'aria-label': { tooltip: 'Vollbild (Tooltip) beenden', button: 'Vollbild beenden' },
						'tooltip': 'Vollbild beenden'
					}
				},
				close: { 'aria-label': 'Schließen Spielplatz', 'tooltip': 'Schließen' },
				cancel: 'Stornieren',
				action: 'Offen in neuer Registerkarte'
			},
			contact: {
				label: 'Möchten Sie Kontakt aufnehmen, um an einem Projekt zusammenzuarbeiten, das Sie im Sinn haben? Klicken Sie hier, um zu sprechen!',
				action: 'Lass uns reden'
			},
			footer: { copyright: '© {{year}} David Scicluna, alle Rechte vorbehalten.' },
			navigation: {
				colorModeIconButton: {
					light: {
						'aria-label': {
							tooltip: 'Wechseln Sie in den Dunklen Modus (Tooltip)',
							button: 'Wechseln Sie zum Dunklen Modus'
						},
						'tooltip': 'Wechseln Sie zum Dunklen Modus'
					},
					dark: {
						'aria-label': {
							tooltip: 'Wechseln Sie in den Lichtmodus (Tooltip)',
							button: 'Wechseln Sie in den Lichtmodus'
						},
						'tooltip': 'Wechseln Sie in den Lichtmodus'
					}
				},
				internationalizationIconButton: {
					'aria-label': { tooltip: 'Sprache ändern (Tooltip)', button: 'Sprache ändern' },
					'tooltip': 'Sprache ändern'
				},
				action: 'In Kontakt kommen'
			},
			socials: {
				email: {
					'aria-label': {
						tooltip: "Senden Sie eine E -Mail an '{{email}}' (Tooltip)",
						button: "Senden Sie eine E -Mail an '{{email}}'"
					},
					'tooltip': "E -Mail: '{{email}}'"
				},
				linkedin: {
					'aria-label': {
						tooltip: 'Öffnen Sie die LinkedIn -Profilseite (Tooltip)',
						button: 'Öffnen Sie die LinkedIn -Profilseite'
					},
					'tooltip': 'LinkedIn Profil'
				},
				github: {
					'aria-label': {
						tooltip: 'Öffnen Sie die Seite "GitHub -Profil (Tooltip)',
						button: 'Öffnen Sie die Seite GitHub -Profil'
					},
					'tooltip': 'GitHub -Profil'
				}
			}
		},
		noMatch: {
			title: 'Seite nicht gefunden!',
			subtitle: 'Bitte überprüfen Sie die URL in der Adressleiste und versuchen Sie es erneut.',
			action1: 'Wieder nach Hause gehen',
			action2: 'Versuchen Sie es erneut'
		},
		splashscreen: { label: 'David Scicluna • Front-End-Entwickler', logo: 'Davidscicluna' },
		home: {
			title1: 'Hallo! Ich bin David eine leidenschaftliche',
			title2: 'Entwickler für Benutzeroberflächen',
			subtitle: 'Derzeit auf den sonnigen maltesischen Inseln ansässig',
			icons: {
				html: { 'aria-label': 'HTML (Tooltip)', 'label': 'Html' },
				css: { 'aria-label': 'CSS (Tooltip)', 'label': 'CSS' },
				js: { 'aria-label': 'JavaScript (Tooltip)', 'label': 'JavaScript' },
				ts: { 'aria-label': 'TypeScript (Tooltip)', 'label': 'Typoskript' },
				react: { 'aria-label': 'Reagieren (Tooltip)', 'label': 'Reagieren' }
			},
			action: 'In Kontakt kommen'
		},
		about: {
			cover: {
				banner: 'Banner',
				portrait: 'Porträt'
			},
			labels: {
				aboutMe: 'Über mich',
				certifications: 'Zertifizierungen',
				experience: 'Erfahrung',
				skills: 'Fähigkeiten'
			},
			experiences: [
				{ place: 'Tain | EEZE', role: 'Entwickler für Benutzeroberflächen' },
				{ place: 'davidscicluna.com', role: 'Freiberuflicher Front-End-Entwickler' },
				{ place: 'Ministerium für Gozo (Büro des CIO)', role: 'Front-End-Entwickler (Vollzeit-Lehrling)' },
				{ place: 'Ministerium für Gozo (Büro des CIO)', role: 'Front-End-Entwickler (Vollzeit-Lehrling)' },
				{ place: 'Ministerium für Gozo (Büro des CIO)', role: 'IT-technische Support (Vollzeit-Lehrling)' }
			],
			certifications: {
				udacity: 'Front-End-Webentwickler NanodeGree',
				freecodecamp: 'Responsive Web Design -Zertifizierung'
			}
		},
		project: {
			status: 'Work in progress'
		}
	}
};
