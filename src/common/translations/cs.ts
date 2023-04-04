export default {
	translation: {
		page: {
			title: 'David Scicluna • Portfolio',
			description:
				'Ahoj! Jsem David Scicluna, vývojář front-end se sídlem na Sunny Maltských ostrovech. V současné době pracuje na Tain | EEZE a jako nezávislý pracovník. Jsem velmi vášnivý pro technologii; Miluji vývoj nápadů do aplikací a jsem odhodlán vytvářet produkty a služby s výjimečnými uživatelskými zkušenostmi a s moderními technikami uživatelského rozhraní. Snažím se co nejlépe pokračovat v učení a rozšiřování svých znalostí v této oblasti, protože věřím, že čím více se učím, tím lepší je zkušenost, kterou budou mít koncoví uživatelé. Najdete mě na LinkedIn a GitHubu, nebo mě oslovit e -mailem na hello@davidscicluna.com.'
		},
		common: {
			about: [
				`Ahoj! Jsem David Scicluna, vývojář front-end se sídlem na Sunny Maltských ostrovech. V současné době pracuje na <a href="${
					import.meta.env.VITE_TAIN_URL
				}" target="_blank">Tain</a> | <a href="${
					import.meta.env.VITE_EEZE_URL
				}" target="_blank">EEZE</a> a jako nezávislý.`,
				'Jsem velmi vášnivý pro technologii; Miluji vývoj nápadů do aplikací a jsem odhodlán vytvářet produkty a služby s výjimečným uživatelským zkušeností a s moderními technikami uživatelského rozhraní.',
				'Snažím se co nejlépe pokračovat v učení a rozšiřování svých znalostí v této oblasti, protože věřím, že čím více se učím, tím lepší je zkušenost, kterou budou mít koncoví uživatelé.',
				`Najdete mě na <a href="${import.meta.env.VITE_LINKEDIN_URL}" target="_blank">Linkedin</a> a <a href="${
					import.meta.env.VITE_GITHUB_URL
				}" target="_blank">Github</a>, nebo oslovte mě e -mailem na <a href="mailto:${
					import.meta.env.VITE_EMAIL_URL
				}">hello@davidscicluna.com</a>.`
			],
			navItems: { '/': 'Domov', '/about': 'O', '/projects': 'Projekty' },
			projects: {
				edb: {
					title: 'The Entertainment Database (EDB)',
					short: 'Edb',
					description:
						'Databáze zábavy (EDB) je webová aplikace, která nabízí informace týkající se zábavního průmyslu poháněného API TheMoviedB API. Takové informace mohou být cokoli z filmů, televizních pořadů a lidí, kteří to dělají. EDB nabízí uživatelům možnost zobrazit všechny informace, podobně a uložit je do seznamu. Každá data nalezená v EDB je nejnovějším a nejvíce aktualizovaným obsahem týkajícím se zábavního průmyslu a zajišťuje uživatele s důvěryhodným obsahem.',
					links: { web: 'Jděte na EDB', playground: 'Otevřete EDB', git: 'GitHub' }
				},
				concentration: {
					title: 'Koncentrace',
					description:
						'Koncentrace je hra odpovídající kartě. Pro vítězství musí hráč porovnat všechny karty spárováním těch, které obsahují stejnou ikonu.',
					links: { web: 'Přejít na koncentraci', playground: 'Otevřená koncentrace', git: 'GitHub' }
				},
				journal: {
					title: 'Časopis',
					description:
						'Journal je bohatý textový editor, který umožňuje uživateli psát a upravovat poznámky pomocí textu, obrázků, odkazů a barev.',
					links: { web: 'Přejít do deníku', playground: 'Open Journal', git: 'GitHub' }
				},
				clock: {
					title: 'Hodiny',
					description:
						'Hodiny jsou aplikace v reálném čase, která umožňuje uživateli kontrolovat v reálném čase jakéhokoli města po celém světě. Jeden může nastavit alarmy, stopky a časovač.',
					links: { web: 'Jděte do hodin', playground: 'Otevřené hodiny', git: 'GitHub' }
				},
				weather: {
					title: 'Počasí',
					description:
						'Počasí je aplikace, která uživateli umožňuje prohledat aktuální počasí všech měst po celém světě.',
					links: { web: 'Jít na počasí', playground: 'Otevřené počasí', git: 'GitHub' }
				},
				calculator: {
					title: 'Kalkulačka',
					description:
						'Kalkulačka je aplikace, která uživateli umožňuje vypočítat nevědecké výpočty a zobrazovat minulé výpočty.',
					links: { web: 'Přejít na kalkulačku', playground: 'Otevřená kalkulačka', git: 'GitHub' }
				}
			},
			skills: [
				{
					label: 'Design',
					skills: [
						'Návrh uživatelského rozhraní (UI)',
						'Uživatelská zkušenost (UX)',
						'Responzivní webový design',
						'Branding Design'
					]
				},
				{
					label: 'Technologie',
					skills: [
						'Hypertext Markup Language (HTML)',
						'Kaskádové listy ve stylu (CSS)',
						'Syntakticky úžasné listy stylu (SASS)',
						'CSS v JS (JSS)',
						'JavaScript',
						'Strojopis'
					]
				},
				{ label: 'Frameworks JS', skills: ['React JS', 'VUE'] },
				{ label: 'Knihovny', skills: ['Čakra UI', 'Materiál UI (MUI)', 'Redux', 'Návrh JS', 'Storybook'] },
				{ label: 'Testování', skills: ['Žert', 'Jasmine JS'] },
				{
					label: 'Nástroje a aplikace',
					skills: ['Git', 'Příze', 'NPM', 'Eslint', 'Hezčí', 'Figma', 'Adobe Experience Design (XD)']
				}
			]
		},
		components: {
			errorBoundary: {
				title: 'Ach ne! 😭',
				subtitle:
					'Při pokusu o vykreslení aplikace se bohužel něco pokazilo. Obnovte prosím, abyste to zkusil znovu!',
				console: 'Neochvětená chyba:',
				action: 'Obnovit'
			},
			logo: { long: 'Davidscicluna', short: 'ds' }
		},
		layout: {
			scrollToTop: 'Přejděte nahoru',
			internationalizationModal: {
				title: 'preferovaný jazyk',
				subtitle: 'Vyberte si preferovaný jazyk podle vašeho výběru ze seznamu jazyků níže',
				empty: {
					title: 'Nenalezeny žádné jazyky',
					subtitle: 'Na dotaz "{{query}}" nebyly nalezeny žádné jazyky',
					action: 'Vymazat vyhledávání'
				},
				languages: {
					bg: 'bulharský',
					cs: 'čeština',
					da: 'dánština',
					de: 'Němec',
					el: 'řecký',
					en: 'Angličtina',
					es: 'španělština',
					fr: 'francouzština',
					hr: 'chorvatský',
					hu: 'maďarský',
					it: 'italština',
					mt: 'maltština',
					nl: 'holandský',
					pl: 'polština',
					pt: 'portugalština',
					ro: 'rumunština',
					ru: 'ruština',
					sr: 'srbština',
					sv: 'švédský',
					tr: 'turečtina',
					uk: 'ukrajinština'
				},
				placeholder: "Zkuste '{{language}}'",
				cancel: 'zrušení',
				action: 'Změnit jazyk'
			},
			playgroundModal: {
				title: 'Název projektu',
				subtitle: 'Popis projektu',
				navigation: {
					open: {
						'aria-label': { tooltip: 'Otevřená navigace (pojem)', button: 'Otevřená navigace' },
						'tooltip': 'Otevřená navigace'
					},
					close: {
						'aria-label': { tooltip: 'Výstupní navigace (pojem lid)', button: 'Výstupní navigace' },
						'tooltip': 'Výstupní navigace'
					}
				},
				fullscreen: {
					open: {
						'aria-label': {
							tooltip: 'Otevřete FullScreen (nástroj nástroje)',
							button: 'Otevřete celou obrazovku'
						},
						'tooltip': 'Otevřete celou obrazovku'
					},
					close: {
						'aria-label': { tooltip: 'Exit FullScreen (TOOLTIP)', button: 'Ukončete na plný obrazovku' },
						'tooltip': 'Ukončete na plný obrazovku'
					}
				},
				close: { 'aria-label': 'Blízké hřiště', 'tooltip': 'Zavřít' },
				cancel: 'zrušení',
				action: 'Otevřete se na nové kartě'
			},
			contact: {
				label: 'Chcete se spojit a spolupracovat na projektu, který máte na mysli? Kliknutím promluvíte!',
				action: 'Promluvme si'
			},
			footer: { copyright: '© {{year}} David Scicluna, všechna práva vyhrazena.' },
			navigation: {
				colorModeIconButton: {
					light: {
						'aria-label': {
							tooltip: 'Přepínání do tmavého režimu (popis)',
							button: 'Přepněte do tmavého režimu'
						},
						'tooltip': 'Přepněte do tmavého režimu'
					},
					dark: {
						'aria-label': {
							tooltip: 'Přepínání na režim světla (popis)',
							button: 'Přepněte do režimu světla'
						},
						'tooltip': 'Přepněte do režimu světla'
					}
				},
				internationalizationIconButton: {
					'aria-label': { tooltip: 'Změnit jazyk (pozemní list)', button: 'Změnit jazyk' },
					'tooltip': 'Změnit jazyk'
				},
				action: 'Být v kontaktu'
			},
			socials: {
				email: {
					'aria-label': {
						tooltip: "Odeslat e -mail na '{{email}}' (nástroj)",
						button: "Pošlete e -mail na '{{email}}'"
					},
					'tooltip': "E -mail: '{{email}}'"
				},
				linkedin: {
					'aria-label': {
						tooltip: 'Otevřená stránka profilu profilu LinkedIn (nástroj nástroje)',
						button: 'Otevřená stránka profilu LinkedIn'
					},
					'tooltip': 'Profil LinkedIn'
				},
				github: {
					'aria-label': {
						tooltip: 'Otevřete stránku profilu GitHub (pozemek)',
						button: 'Otevřete stránku profilu GitHub'
					},
					'tooltip': 'GitHub profil'
				}
			}
		},
		noMatch: {
			title: 'Stránka nenalezena!',
			subtitle: 'Zkontrolujte prosím adresu URL v adresním řádku a zkuste to znovu.',
			action1: 'Jdi zpátky domů',
			action2: 'Zkus to znovu'
		},
		splashscreen: { label: 'David Scicluna • Front-End Developer', logo: 'Davidscicluna' },
		home: {
			title1: 'Ahoj! Jsem David vášnivý',
			title2: 'Vývojář front-end',
			subtitle: 'V současné době sídlí na slunných maltských ostrovech',
			icons: {
				html: { 'aria-label': 'Html (pojem)', 'label': 'Html' },
				css: { 'aria-label': 'CSS (pojem)', 'label': 'CSS' },
				js: { 'aria-label': 'JavaScript (pojem)', 'label': 'JavaScript' },
				ts: { 'aria-label': 'Strojopis (pojem)', 'label': 'Strojopis' },
				react: { 'aria-label': 'React (nástroj)', 'label': 'Reagovat' }
			},
			action: 'Být v kontaktu'
		},
		about: {
			cover: {
				banner: 'Prapor',
				portrait: 'Portrét'
			},
			labels: {
				aboutMe: 'O mně',
				certifications: 'Certifikace',
				experience: 'Zkušenosti',
				skills: 'Dovednosti'
			},
			experiences: [
				{ place: 'Tain | EEZE', role: 'Vývojář front-end' },
				{ place: 'davidscicluna.com', role: 'Front-End Developer na volné noze' },
				{
					place: 'Ministerstvo pro Gozo (Office of CIO)',
					role: 'Front-End Developer (Apprentice na plný úvazek)'
				},
				{
					place: 'Ministerstvo pro Gozo (Office of CIO)',
					role: 'Front-End Developer (Apprentice na plný úvazek)'
				},
				{ place: 'Ministerstvo pro Gozo (Office of CIO)', role: 'IT technická podpora (učeň na plný úvazek)' }
			],
			certifications: {
				udacity: 'Front-end webový vývojář Nanodegree',
				freecodecamp: 'Responzivní certifikace webového designu'
			}
		},
		project: {
			status: 'Work in progress'
		}
	}
};
