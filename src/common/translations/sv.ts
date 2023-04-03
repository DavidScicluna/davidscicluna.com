export default {
	translation: {
		page: {
			title: 'David Scicluna • Portfölj',
			description:
				'Hallå! Jag är David Scicluna, en front-end-utvecklare baserad på de soliga maltesiska öarna. Arbetar för närvarande på TAIN | EEZE och som frilansare. Jag är mycket passionerad för teknik; Jag älskar att utveckla idéer till applikationer och är engagerad i att skapa produkter och tjänster med exceptionell användarupplevelse och med moderna användargränssnittstekniker. Jag försöker mitt bästa för att fortsätta lära mig och utöka min kunskap på detta område, eftersom jag tror att ju mer jag lär mig, desto bättre är upplevelsen slutanvändarna kommer att ha. Du kan hitta mig på LinkedIn och GitHub, eller nå ut till mig via e -post på hello@davidscicluna.com.'
		},
		common: {
			about: [
				`Hallå! Jag är David Scicluna, en front-end-utvecklare baserad på de soliga maltesiska öarna. Arbetar för närvarande på <a href="${
					import.meta.env.VITE_TAIN_URL
				}" target="_blank">Tain</a> | <a href="${
					import.meta.env.VITE_EEZE_URL
				}" target="_blank">EEZE</a> och som frilansare.`,
				'Jag är mycket passionerad för teknik; Jag älskar att utveckla idéer till applikationer och är engagerad i att skapa produkter och tjänster med exceptionell användarupplevelse och med moderna användargränssnittstekniker.',
				'Jag försöker mitt bästa för att fortsätta lära mig och utöka min kunskap på detta område, eftersom jag tror att ju mer jag lär mig, desto bättre är upplevelsen slutanvändarna kommer att ha.',
				`Du kan hitta mig på <a href="${
					import.meta.env.VITE_LINKEDIN_URL
				}" target="_blank">Linkedin</a> och <a href="${
					import.meta.env.VITE_GITHUB_URL
				}" target="_blank">Github</a>, eller nå ut till mig via e -post på <a href="mailto:${
					import.meta.env.VITE_EMAIL_URL
				}">hello@davidscicluna.com</a>.`
			],
			navItems: { '/': 'Hem', '/about': 'Handla om', '/projects': 'Projekt' },
			projects: {
				edb: {
					title: 'Underhållningsdatabasen (EDB)',
					short: 'Edb',
					description:
						'Underhållningsdatabasen (EDB) är en webbapplikation som erbjuder information relaterad till underhållningsindustrin som drivs av Themoviedb API. Sådan information kan vara allt från filmer, TV -program och de människor som får det att hända. EDB erbjuder användare möjlighet att se all information, som och spara den i en lista. Varje data som finns i EDB är det senaste och mest uppdaterade innehållet om underhållningsindustrin, vilket säkerställer användare med pålitligt innehåll.',
					links: { web: 'Gå till EDB', playground: 'Öppna EDB', git: 'Github' }
				},
				concentration: {
					title: 'Koncentration',
					description:
						'Koncentration är ett kortmatchningsspel. För att vinna måste spelaren matcha alla kort genom att para ihop de som innehåller samma ikon.',
					links: { web: 'Gå till koncentration', playground: 'Öppen koncentration', git: 'Github' }
				},
				journal: {
					title: 'Tidning',
					description:
						'Journal är en rik textredigerare som gör det möjligt för användaren att skriva och redigera anteckningar med text, bilder, länkar och färger.',
					links: { web: 'Gå till journal', playground: 'Open Journal', git: 'Github' }
				},
				clock: {
					title: 'Klocka',
					description:
						'Clock är en realtidsapplikation som gör det möjligt för användaren att kontrollera realtid för alla stadar runt om i världen. Man kan ställa in larm, ett stoppur och en timer.',
					links: { web: 'Gå till klocka', playground: 'Öppen klocka', git: 'Github' }
				},
				weather: {
					title: 'Väder',
					description:
						'Vädret är en applikation som gör det möjligt för användaren att söka i det aktuella vädret i alla städer runt om i världen.',
					links: { web: 'Gå till vädret', playground: 'Öppet väder', git: 'Github' }
				},
				calculator: {
					title: 'Kalkylator',
					description:
						'Kalkylator är en applikation som gör det möjligt för användaren att beräkna icke-vetenskapliga beräkningar och visar tidigare beräkningar.',
					links: { web: 'Gå till miniräknare', playground: 'Öppen miniräknare', git: 'Github' }
				}
			},
			skills: [
				{
					label: 'Design',
					skills: [
						'Användargränssnittsdesign (UI)',
						'Användarupplevelse (UX)',
						'Lyhörd webbdesign',
						'Varumärkesdesign'
					]
				},
				{
					label: 'Teknik',
					skills: [
						'Hypertext Markup Language (HTML)',
						'Kaskadstilark (CSS)',
						'Syntaktiskt fantastiska stilark (SASS)',
						'CSS i JS (JSS)',
						'Javascript',
						'Typskript'
					]
				},
				{ label: 'JS -ramar', skills: ['Reagera JS', 'Vue'] },
				{
					label: 'Bibliotek',
					skills: ['Chakra ui', 'Material UI (MUI)', 'på nytt', 'Utkast till JS', 'Sagobok']
				},
				{ label: 'Testning', skills: ['Skoj', 'Jasmine js'] },
				{
					label: 'Verktyg och applikationer',
					skills: ['Git', 'Garn', 'Npm', 'Eslint', 'Sötare', 'Fikma', 'Adobe Experience Design (XD)']
				}
			]
		},
		components: {
			errorBoundary: {
				title: 'Å nej! 😭',
				subtitle:
					'Tyvärr gick något fel när man försökte återge ansökan. Vänligen uppdatera för att försöka igen!',
				console: 'OCECKLIG FEL:',
				action: 'Uppdatera'
			},
			logo: { long: 'Davidscicluna', short: 'ds' }
		},
		layout: {
			internationalizationModal: {
				title: 'Önskat språk',
				subtitle: 'Välj det föredragna språket du väljer från listan över språk nedan',
				languages: {
					bg: 'Bulgarisk',
					cs: 'Tjeckisk',
					da: 'Dansk',
					de: 'tysk',
					el: 'grekisk',
					en: 'engelsk',
					es: 'Spansk',
					fr: 'Franska',
					hr: 'Kroatisk',
					hu: 'Ungerska',
					it: 'Italienare',
					mt: 'Maltesisk',
					nl: 'Holländsk',
					pl: 'putsa',
					pt: 'Portugisisk',
					ro: 'Rumänsk',
					ru: 'Rysk',
					sr: 'Serbisk',
					sv: 'svenska',
					tr: 'Turkisk',
					uk: 'Ukrainare'
				},
				placeholder: "Försök '{{language}}'",
				cancel: 'Annullera',
				action: 'Ändra språk'
			},
			playgroundModal: {
				title: 'Projekt Titel',
				subtitle: 'projekt beskrivning',
				navigation: {
					open: {
						'aria-label': { tooltip: 'Öppna navigering (ToolTip)', button: 'Öppen navigering' },
						'tooltip': 'Öppen navigering'
					},
					close: {
						'aria-label': { tooltip: 'Utgångsnavigering (ToolTip)', button: 'Utgångsnavigering' },
						'tooltip': 'Utgångsnavigering'
					}
				},
				fullscreen: {
					open: {
						'aria-label': { tooltip: 'Öppna helskärm (ToolTip)', button: 'Öppen helskärm' },
						'tooltip': 'Öppen helskärm'
					},
					close: {
						'aria-label': { tooltip: 'Avsluta helskärm (ToolTip)', button: 'Avfart' },
						'tooltip': 'Avfart'
					}
				},
				close: { 'aria-label': 'Lekplats', 'tooltip': 'Stänga' },
				cancel: 'Annullera',
				action: 'Öppet i ny flik'
			},
			contact: {
				label: 'Vill du komma i kontakt för att samarbeta om ett projekt du har i åtanke? Klicka för att prata!',
				action: 'Låt oss prata'
			},
			footer: { copyright: '© {{year}} David Scicluna, alla rättigheter reserverade.' },
			navigation: {
				colorModeIconButton: {
					light: {
						'aria-label': { tooltip: 'Byt till Dark Mode (ToolTip)', button: 'Byt till mörkt läge' },
						'tooltip': 'Byt till mörkt läge'
					},
					dark: {
						'aria-label': { tooltip: 'Byt till ljusläge (ToolTip)', button: 'Byt till ljusläge' },
						'tooltip': 'Byt till ljusläge'
					}
				},
				internationalizationIconButton: {
					'aria-label': { tooltip: 'Ändra språk (ToolTip)', button: 'Ändra språk' },
					'tooltip': 'Ändra språk'
				},
				action: 'Komma i kontakt'
			},
			socials: {
				email: {
					'aria-label': {
						tooltip: "Skicka e -post till '{{email}}' (ToolTip)",
						button: "Skicka e -post till '{{email}}'"
					},
					'tooltip': "E -post: '{{email}}'"
				},
				linkedin: {
					'aria-label': {
						tooltip: 'Öppna LinkedIn -profilsida (ToolTip)',
						button: 'Öppna LinkedIn -profilsidan'
					},
					'tooltip': 'LinkedIn -profil'
				},
				github: {
					'aria-label': { tooltip: 'Öppna Github -profilsida (ToolTip)', button: 'Öppna github -profilsida' },
					'tooltip': 'Github -profil'
				}
			}
		},
		noMatch: {
			title: 'Sidan hittas inte!',
			subtitle: 'Kontrollera webbadressen i adressfältet och försök igen.',
			action1: 'Åka hem',
			action2: 'Försök igen'
		},
		splashscreen: { label: 'David Scicluna • Front-End-utvecklare', logo: 'Davidscicluna' },
		home: {
			title1: 'Hallå! Jag är David en passionerad',
			title2: 'Front-end',
			subtitle: 'För närvarande baserat på de soliga maltesiska öarna',
			icons: {
				html: { 'aria-label': 'HTML (ToolTip)', 'label': 'Html' },
				css: { 'aria-label': 'CSS (ToolTip)', 'label': 'CSS' },
				js: { 'aria-label': 'JavaScript (ToolTip)', 'label': 'Javascript' },
				ts: { 'aria-label': 'Typskript (verktygstips)', 'label': 'Typskript' },
				react: { 'aria-label': 'Reagera (verktygstips)', 'label': 'Reagera' }
			},
			action: 'Komma i kontakt'
		},
		about: {
			cover: {
				banner: 'Baner',
				portrait: 'Porträtt'
			},
			labels: {
				aboutMe: 'Om mig',
				certifications: 'Certifieringar',
				experience: 'Erfarenhet',
				skills: 'Kompetens'
			},
			experiences: [
				{ place: 'Tain | EEZE', role: 'Front-end' },
				{ place: 'davidscicluna.com', role: 'Frilansfrontutvecklare' },
				{ place: 'Ministeriet för Gozo (CIO: s kontor)', role: 'Front-End-utvecklare (heltidslärling)' },
				{ place: 'Ministeriet för Gozo (CIO: s kontor)', role: 'Front-End-utvecklare (heltidslärling)' },
				{ place: 'Ministeriet för Gozo (CIO: s kontor)', role: 'IT-teknisk support (heltidslärling)' }
			],
			certifications: {
				udacity: 'Front-End Web Developer Nanodegree',
				freecodecamp: 'Lyhörd webbdesigncertifiering'
			}
		},
		project: {
			status: 'Work in progress'
		}
	}
};
