export default {
	translation: {
		page: {
			title: 'David Scicluna • Portofoliu',
			description:
				'Buna ziua! Sunt David Scicluna, un dezvoltator front-end cu sediul în Insulele Maltese însorite. În prezent lucrează la Tain | EEZE și ca freelancer. Sunt foarte pasionat de tehnologie; Îmi place să dezvolt idei în aplicații și mă angajez să creez produse și servicii cu experiență de utilizator excepțională și cu tehnici moderne de interfață utilizator. Încerc tot posibilul să continui să învăț și să-mi extind cunoștințele în acest domeniu, deoarece cred că, cu cât învăț mai mult, cu atât experiența va avea mai bine utilizatorii finali. Mă puteți găsi pe LinkedIn și Github, sau să mă contactați prin e -mail la hello@davidscicluna.com.'
		},
		common: {
			about: [
				`Buna ziua! Sunt David Scicluna, un dezvoltator front-end cu sediul în Insulele Maltese însorite. În prezent lucrează la <a href="${
					import.meta.env.VITE_TAIN_URL
				}" target="_blank">Tain</a> | <a href="${
					import.meta.env.VITE_EEZE_URL
				}" target="_blank">EEZE</a> și ca freelancer.`,
				'Sunt foarte pasionat de tehnologie; Îmi place să dezvolt idei în aplicații și mă angajez să creez produse și servicii cu experiență de utilizator excepțională și cu tehnici moderne de interfață pentru utilizator.',
				'Încerc tot posibilul să continui să învăț și să-mi extind cunoștințele în acest domeniu, deoarece cred că, cu cât învăț mai mult, cu atât experiența va avea mai bine utilizatorii finali.',
				`Mă puteți găsi pe <a href="${
					import.meta.env.VITE_LINKEDIN_URL
				}" target="_blank">Linkedin</a>, și <a href="${
					import.meta.env.VITE_GITHUB_URL
				}" target="_blank">Github</a>, sau ajunge la mine prin e -mail la <a href="mailto:${
					import.meta.env.VITE_EMAIL_URL
				}">hello@davidscicluna.com</a>.`
			],
			navItems: { '/': 'Acasă', '/about': 'Despre', '/projects': 'Proiecte' },
			projects: {
				edb: {
					title: 'Baza de date de divertisment (EDB)',
					short: 'EDB',
					description:
						'Baza de date de divertisment (EDB) este o aplicație web care oferă informații legate de industria de divertisment alimentată de API -ul TheMoviedB. Astfel de informații pot fi orice, de la filme, emisiuni TV și oamenii care o fac să se întâmple. EDB oferă utilizatorilor posibilitatea de a vizualiza toate informațiile, cum ar fi și de a le salva într -o listă. Fiecare date găsite în EDB este cel mai recent și cel mai actualizat conținut cu privire la industria divertismentului, asigurând utilizatorii cu conținut de încredere.',
					links: { web: 'Mergeți la EDB', playground: 'Deschis EDB', git: 'Github' }
				},
				concentration: {
					title: 'Concentraţie',
					description:
						'Concentrarea este un joc de potrivire a cărților. Pentru a câștiga, jucătorul trebuie să se potrivească cu toate cărțile prin asocierea celor care conțin aceeași pictogramă.',
					links: { web: 'Mergeți la concentrare', playground: 'Concentrare deschisă', git: 'Github' }
				},
				journal: {
					title: 'Jurnal',
					description:
						'Journal este un editor de text bogat care permite utilizatorului să scrie și să editeze note cu text, imagini, link -uri și culori.',
					links: { web: 'Mergeți la Jurnal', playground: 'Jurnal deschis', git: 'Github' }
				},
				clock: {
					title: 'Ceas',
					description:
						'Ceasul este o aplicație în timp real care permite utilizatorului să verifice în timp real al oricărui oraș din întreaga lume. Se poate seta alarme, un ceas de stop și un cronometru.',
					links: { web: 'Du -te la ceas', playground: 'Ceas deschis', git: 'Github' }
				},
				weather: {
					title: 'Vreme',
					description:
						'Vremea este o aplicație care permite utilizatorului să caute vremea actuală a tuturor orașelor din întreaga lume.',
					links: { web: 'Du -te la vreme', playground: 'Vreme deschisă', git: 'Github' }
				},
				calculator: {
					title: 'Calculator',
					description:
						'Calculatorul este o aplicație care permite utilizatorului să calculeze calcule non-științifice și să afle calculele anterioare.',
					links: { web: 'Mergeți la calculator', playground: 'Calculator deschis', git: 'Github' }
				}
			},
			skills: [
				{
					label: 'Proiecta',
					skills: [
						'Proiectarea interfeței de utilizator (UI)',
						'Experiența utilizatorului (UX)',
						'Design web receptiv',
						'Design de branding'
					]
				},
				{
					label: 'Tehnologii',
					skills: [
						'Hypertext Markup Language (HTML)',
						'Fișe de stil în cascadă (CSS)',
						'Foi de stil sintetice (SASS)',
						'CSS în JS (JSS)',
						'JavaScript',
						'Tipograf'
					]
				},
				{ label: 'JS Frameworks', skills: ['Reacționează JS', 'Vue'] },
				{
					label: 'Biblioteci',
					skills: ['Chakra ui', 'UI material (Mui)', 'Redux', 'Draft JS', 'Cartea de poveste']
				},
				{ label: 'Testare', skills: ['Glumă', 'Jasmine JS'] },
				{
					label: 'Instrumente și aplicații',
					skills: ['Git', 'Fire', 'NPM', 'Eslint', 'Mai frumos', 'Figma', 'Adobe Experience Design (XD)']
				}
			]
		},
		components: {
			errorBoundary: {
				title: 'Oh nu! 😭',
				subtitle:
					'Din păcate, ceva nu a mers prost atunci când încercați să redați cererea. Vă rugăm să reîmprospătați pentru a încerca din nou!',
				console: 'Eroare necesară:',
				action: 'Reîmprospăta'
			},
			logo: { long: 'Davidscicluna', short: 'DS' }
		},
		layout: {
			internationalizationModal: {
				title: 'Limba preferată',
				subtitle: 'Alegeți limba preferată la alegere din lista de limbi de mai jos',
				languages: {
					bg: 'bulgară',
					cs: 'ceh',
					da: 'danez',
					de: 'limba germana',
					el: 'Grec',
					en: 'Engleză',
					es: 'Spaniolă',
					fr: 'limba franceza',
					hr: 'croat',
					hu: 'Maghiar',
					it: 'Italiană',
					mt: 'Malteză',
					nl: 'Olandez',
					pl: 'Lustrui',
					pt: 'Portugheză',
					ro: 'Română',
					ru: 'Rusă',
					sr: 'sârb',
					sv: 'suedez',
					tr: 'turc',
					uk: 'ucrainean'
				},
				placeholder: 'Încercați „{{language}}”',
				cancel: 'Anulare',
				action: 'Schimbați limbajul'
			},
			playgroundModal: {
				title: 'Titlul proiectului',
				subtitle: 'descrierea proiectului',
				navigation: {
					open: {
						'aria-label': { tooltip: 'Navigare deschisă (Tooltip)', button: 'Navigare deschisă' },
						'tooltip': 'Navigare deschisă'
					},
					close: {
						'aria-label': { tooltip: 'Navigare de ieșire (Tooltip)', button: 'Navigare de ieșire' },
						'tooltip': 'Navigare de ieșire'
					}
				},
				fullscreen: {
					open: {
						'aria-label': {
							tooltip: 'Deschideți ecran complet (Tooltip)',
							button: 'Deschideți ecran complet'
						},
						'tooltip': 'Deschideți ecran complet'
					},
					close: {
						'aria-label': {
							tooltip: 'Ieșiți pe ecran complet (Tooltip)',
							button: 'Ieșiți pe ecran complet'
						},
						'tooltip': 'Ieșiți pe ecran complet'
					}
				},
				close: { 'aria-label': 'Închideți locul de joacă', 'tooltip': 'Închide' },
				cancel: 'Anulare',
				action: 'Deschideți în fila nouă'
			},
			contact: {
				label: 'Vrei să ia legătura pentru a colabora la un proiect pe care îl ai în minte? Faceți clic pentru a vorbi!',
				action: 'Hai să vorbim'
			},
			footer: { copyright: '© {{year}} David Scicluna, toate drepturile rezervate.' },
			navigation: {
				colorModeIconButton: {
					light: {
						'aria-label': {
							tooltip: 'Comutați la modul întunecat (ToolTip)',
							button: 'Treceți la modul întunecat'
						},
						'tooltip': 'Treceți la modul întunecat'
					},
					dark: {
						'aria-label': {
							tooltip: 'Comutați la modul Light (ToolTip)',
							button: 'Treceți la modul de lumină'
						},
						'tooltip': 'Treceți la modul de lumină'
					}
				},
				internationalizationIconButton: {
					'aria-label': { tooltip: 'Schimbați limbajul (Tooltip)', button: 'Schimbați limbajul' },
					'tooltip': 'Schimbați limbajul'
				},
				action: 'Intrați în legătură'
			},
			socials: {
				email: {
					'aria-label': {
						tooltip: 'Trimiteți e -mail la „{{email}}” (Tooltip)',
						button: 'Trimiteți e -mail la „{{email}}”'
					},
					'tooltip': "Email: '{{email}}'"
				},
				linkedin: {
					'aria-label': {
						tooltip: 'Deschideți pagina de profil LinkedIn (ToolTip)',
						button: 'Deschideți pagina de profil LinkedIn'
					},
					'tooltip': 'Profil LinkedIn'
				},
				github: {
					'aria-label': {
						tooltip: 'Deschideți pagina de profil Github (Tooltip)',
						button: 'Deschideți pagina profilului Github'
					},
					'tooltip': 'Profilul Github'
				}
			}
		},
		noMatch: {
			title: 'Pagina nu a fost gasita!',
			subtitle: 'Vă rugăm să verificați adresa URL din bara de adrese și să încercați din nou.',
			action1: 'Du-te înapoi acasă',
			action2: 'Încearcă din nou'
		},
		splashscreen: { label: 'David Scicluna • Dezvoltator front-end', logo: 'Davidscicluna' },
		home: {
			title1: 'Buna ziua! Sunt David un pasionat',
			title2: 'Dezvoltator interfețe',
			subtitle: 'În prezent cu sediul în Insulele Malteze însorite',
			icons: {
				html: { 'aria-label': 'HTML (Tooltip)', 'label': 'Html' },
				css: { 'aria-label': 'CSS (ToolTip)', 'label': 'CSS' },
				js: { 'aria-label': 'JavaScript (Tooltip)', 'label': 'JavaScript' },
				ts: { 'aria-label': 'TypeScript (ToolTip)', 'label': 'Tipograf' },
				react: { 'aria-label': 'React (ToolTip)', 'label': 'Reacţiona' }
			},
			action: 'Intrați în legătură'
		},
		about: {
			cover: {
				banner: 'Banner',
				portrait: 'Portret'
			},
			labels: {
				aboutMe: 'Despre mine',
				certifications: 'Certificări',
				experience: 'Experienţă',
				skills: 'Aptitudini'
			},
			experiences: [
				{ place: 'Tain | EEZE', role: 'Dezvoltator interfețe' },
				{ place: 'davidscicluna.com', role: 'Dezvoltator front-end independent' },
				{ place: 'Ministerul Gozo (Oficiul CIO)', role: 'Dezvoltator front-end (ucenic cu normă întreagă)' },
				{ place: 'Ministerul Gozo (Oficiul CIO)', role: 'Dezvoltator front-end (ucenic cu normă întreagă)' },
				{ place: 'Ministerul Gozo (Oficiul CIO)', role: 'Asistență tehnică IT (ucenic cu normă întreagă)' }
			],
			certifications: {
				udacity: 'Dezvoltatorul web front-end nanodegree',
				freecodecamp: 'Certificare de proiectare web receptivă'
			}
		},
		project: {
			status: 'Work in progress'
		}
	}
};
