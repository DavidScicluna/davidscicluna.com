export default {
	translation: {
		page: {
			title: 'David Scicluna • Portefølje',
			description:
				'Hej! Jeg er David Scicluna, en front-end-udvikler med base på de solrige maltesiske øer. Arbejder i øjeblikket på Tain | EEZE og som freelancer. Jeg brænder meget for teknologi; Jeg elsker at udvikle ideer til applikationer og er forpligtet til at skabe produkter og tjenester med enestående brugeroplevelse og med moderne brugergrænsefladeteknikker. Jeg prøver mit bedste for at fortsætte med at lære og udvide min viden på dette felt, da jeg tror, at jo mere jeg lærer, jo bedre er oplevelsen, som slutbrugerne har. Du kan finde mig på LinkedIn og Github eller nå ud til mig via e -mail på hello@davidscicluna.com.'
		},
		common: {
			about: [
				`Hej! Jeg er David Scicluna, en front-end-udvikler med base på de solrige maltesiske øer. Arbejder i øjeblikket på <a href="${
					import.meta.env.VITE_TAIN_URL
				}" target="_blank">Tain</a> | <a href="${
					import.meta.env.VITE_EEZE_URL
				}" target="_blank">EEZE</a> og som freelancer.`,
				'Jeg brænder meget for teknologi; Jeg elsker at udvikle ideer til applikationer og er forpligtet til at skabe produkter og tjenester med enestående brugeroplevelse og med moderne brugergrænsefladeteknikker.',
				'Jeg prøver mit bedste for at fortsætte med at lære og udvide min viden på dette felt, da jeg tror, at jo mere jeg lærer, jo bedre er oplevelsen, som slutbrugerne har.',
				`Du kan finde mig på <a href="${
					import.meta.env.VITE_LINKEDIN_URL
				}" target="_blank">Linkedin</a> og <a href="${
					import.meta.env.VITE_GITHUB_URL
				}" target="_blank">Github</a>, eller nå ud til mig via e -mail på <a href="mailto:${
					import.meta.env.VITE_EMAIL_URL
				}">hello@davidscicluna.com</a>.`
			],
			navItems: { '/': 'Hjem', '/about': 'Om', '/projects': 'Projekter' },
			projects: {
				edb: {
					title: 'Underholdningsdatabasen (EDB)',
					short: 'EDB',
					description:
						'Entertainment Database (EDB) er en webapplikation, der tilbyder information relateret til underholdningsindustrien drevet af Themoviedb API. Sådanne oplysninger kan være alt fra film, tv -shows og de mennesker, der får det til at ske. EDB tilbyder brugerne mulighed for at se alle oplysninger, som og gemme dem på en liste. Hvert stykke data, der findes i EDB, er det nyeste og mest opdaterede indhold vedrørende underholdningsindustrien, hvilket sikrer brugere med pålidelige indhold.',
					links: { web: 'Gå til EDB', playground: 'Åbn EDB', git: 'GitHub' }
				},
				concentration: {
					title: 'Koncentration',
					description:
						'Koncentration er et kort matchende spil. For at vinde skal spilleren matche alle kortene ved at parre dem, der indeholder det samme ikon.',
					links: { web: 'Gå til koncentration', playground: 'Åben koncentration', git: 'GitHub' }
				},
				journal: {
					title: 'Tidsskrift',
					description:
						'Journal er en rig teksteditor, der giver brugeren mulighed for at skrive og redigere noter med tekst, billeder, links og farver.',
					links: { web: 'Gå til Journal', playground: 'Åben tidsskrift', git: 'GitHub' }
				},
				clock: {
					title: 'Ur',
					description:
						'Ur er en realtidsapplikation, der giver brugeren mulighed for at kontrollere realtid i enhver by rundt om i verden. Man kan indstille alarmer, et stopur og en timer.',
					links: { web: 'Gå til uret', playground: 'Åben ur', git: 'GitHub' }
				},
				weather: {
					title: 'Vejr',
					description:
						'Vejret er en applikation, der giver brugeren mulighed for at søge på det aktuelle vejr i alle byer rundt om i verden.',
					links: { web: 'Gå til vejret', playground: 'Åbent vejr', git: 'GitHub' }
				},
				calculator: {
					title: 'Lommeregner',
					description:
						'Lommeregner er en applikation, der giver brugeren mulighed for at beregne ikke-videnskabelige beregninger og viser tidligere beregninger.',
					links: { web: 'Gå til lommeregner', playground: 'Åben lommeregner', git: 'GitHub' }
				}
			},
			skills: [
				{
					label: 'Design',
					skills: [
						'Brugergrænsefladedesign (UI)',
						'Brugeroplevelse (UX)',
						'Responsivt webdesign',
						'Branding design'
					]
				},
				{
					label: 'Teknologier',
					skills: [
						'Hypertext Markup Language (HTML)',
						'Cascading Style Sheets (CSS)',
						'Syntaktisk fantastiske stilark (SASS)',
						'CSS i JS (JSS)',
						'JavaScript',
						'TypeScript'
					]
				},
				{ label: 'JS -rammer', skills: ['React JS', 'Vue'] },
				{
					label: 'Biblioteker',
					skills: ['Chakra UI', 'Material UI (MUI)', 'Redux', 'Udkast til JS', 'Historiebog']
				},
				{ label: 'Testning', skills: ['Jest', 'Jasmine JS'] },
				{
					label: 'Værktøjer og applikationer',
					skills: ['Git', 'Garn', 'Npm', 'Eslint', 'Smukkere', 'Figma', 'Adobe Experience Design (XD)']
				}
			]
		},
		components: {
			errorBoundary: {
				title: 'Åh nej! 😭',
				subtitle:
					'Desværre gik noget galt, når man prøvede at gengive applikationen. Opdater venligst for at prøve igen!',
				console: 'Uovertruffen fejl:',
				action: 'Opdater'
			},
			logo: { long: 'Davidscicluna', short: 'ds' }
		},
		layout: {
			internationalizationModal: {
				title: 'foretrukne sprog',
				subtitle: 'Vælg det foretrukne sprog efter eget valg fra listen over sprog nedenfor',
				languages: {
					bg: 'Bulgarsk',
					cs: 'Tjekkisk',
					da: 'dansk',
					de: 'tysk',
					el: 'Græsk',
					en: 'engelsk',
					es: 'spansk',
					fr: 'fransk',
					hr: 'Kroatisk',
					hu: 'Ungarsk',
					it: 'Italiensk',
					mt: 'Maltesisk',
					nl: 'hollandsk',
					pl: 'Polere',
					pt: 'Portugisisk',
					ro: 'Rumænsk',
					ru: 'Russisk',
					sr: 'Serbisk',
					sv: 'Svensk',
					tr: 'tyrkisk',
					uk: 'Ukrainsk'
				},
				placeholder: "Prøv '{{language}}'",
				cancel: 'Afbestille',
				action: 'Skift sprog'
			},
			playgroundModal: {
				title: 'Projekt titel',
				subtitle: 'Projekt Beskrivelse',
				navigation: {
					open: {
						'aria-label': { tooltip: 'Åben navigation (værktøjstip)', button: 'Åben navigation' },
						'tooltip': 'Åben navigation'
					},
					close: {
						'aria-label': { tooltip: 'Exit Navigation (værktøjstip)', button: 'Afslut navigation' },
						'tooltip': 'Afslut navigation'
					}
				},
				fullscreen: {
					open: {
						'aria-label': { tooltip: 'Åben fuldskærm (værktøjstip)', button: 'Åbn fuldskærm' },
						'tooltip': 'Åbn fuldskærm'
					},
					close: {
						'aria-label': { tooltip: 'Afslut fuldskærm (værktøjstip)', button: 'Afslut fuldskærm' },
						'tooltip': 'Afslut fuldskærm'
					}
				},
				close: { 'aria-label': 'Luk legeplads', 'tooltip': 'Tæt' },
				cancel: 'Afbestille',
				action: 'Åben i ny fane'
			},
			contact: {
				label: 'Vil du komme i kontakt for at samarbejde om et projekt, du har i tankerne? Klik for at tale!',
				action: 'Lad os tale'
			},
			footer: { copyright: '© {{year}} David Scicluna, alle rettigheder forbeholdes.' },
			navigation: {
				colorModeIconButton: {
					light: {
						'aria-label': {
							tooltip: 'Skift til Dark Mode (værktøjstip)',
							button: 'Skift til mørk tilstand'
						},
						'tooltip': 'Skift til mørk tilstand'
					},
					dark: {
						'aria-label': {
							tooltip: 'Skift til lystilstand (værktøjstip)',
							button: 'Skift til lystilstand'
						},
						'tooltip': 'Skift til lystilstand'
					}
				},
				internationalizationIconButton: {
					'aria-label': { tooltip: 'Skift sprog (værktøjstip)', button: 'Skift sprog' },
					'tooltip': 'Skift sprog'
				},
				action: 'Kom i kontakt'
			},
			socials: {
				email: {
					'aria-label': {
						tooltip: "Send e -mail til '{{email}}' (værktøjstip)",
						button: "Send e -mail til '{{email}}'"
					},
					'tooltip': "E -mail: '{{email}}'"
				},
				linkedin: {
					'aria-label': {
						tooltip: 'Open LinkedIn Profile Page (Tooltip)',
						button: 'Åbn LinkedIn -profilside'
					},
					'tooltip': 'LinkedIn -profil'
				},
				github: {
					'aria-label': {
						tooltip: 'Åbn Github Profile Side (værktøjstip)',
						button: 'Åbn Github -profilsiden'
					},
					'tooltip': 'GitHub -profil'
				}
			}
		},
		noMatch: {
			title: 'Siden blev ikke fundet!',
			subtitle: "Kontroller URL'en i adresselinjen, og prøv igen.",
			action1: 'Tag hjem igen',
			action2: 'Prøv igen'
		},
		splashscreen: { label: 'David Scicluna • Front-end-udvikler', logo: 'Davidscicluna' },
		home: {
			title1: 'Hej! Jeg er David en lidenskabelig',
			title2: 'Front-end-udvikler',
			subtitle: 'I øjeblikket baseret på de solrige maltesiske øer',
			icons: {
				html: { 'aria-label': 'HTML (værktøjstip)', 'label': 'Html' },
				css: { 'aria-label': 'CSS (værktøjstip)', 'label': 'CSS' },
				js: { 'aria-label': 'JavaScript (værktøjstip)', 'label': 'JavaScript' },
				ts: { 'aria-label': 'TypeScript (værktøjstip)', 'label': 'TypeScript' },
				react: { 'aria-label': 'React (værktøjstip)', 'label': 'Reagere' }
			},
			action: 'Kom i kontakt'
		},
		about: {
			cover: {
				banner: 'Banner',
				portrait: 'Portræt'
			},
			labels: {
				aboutMe: 'Om mig',
				certifications: 'Certificeringer',
				experience: 'Erfaring',
				skills: 'Færdigheder'
			},
			experiences: [
				{ place: 'Tain | EEZE', role: 'Front-end-udvikler' },
				{ place: 'davidscicluna.com', role: 'Freelance front-end-udvikler' },
				{ place: 'Ministeriet for Gozo (Office of the CIO)', role: 'Front-end Developer (fuldtids lærling)' },
				{ place: 'Ministeriet for Gozo (Office of the CIO)', role: 'Front-end Developer (fuldtids lærling)' },
				{ place: 'Ministeriet for Gozo (Office of the CIO)', role: 'IT teknisk support (fuldtids lærling)' }
			],
			certifications: {
				udacity: 'Front-end webudvikler Nanodegree',
				freecodecamp: 'Responsiv webdesigncertificering'
			}
		}
	}
};
