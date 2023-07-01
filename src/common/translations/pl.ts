export default {
	translation: {
		page: {
			title: 'David Scicluna • Portfolio',
			description:
				'Cześć! Jestem David Scicluna, deweloper z frontu z siedzibą na słonecznych wyspach maltańskich. Obecnie pracuje w Tain | EEZE i jako freelancer. Bardzo pasjonuję się technologią; Uwielbiam opracowywać pomysły w aplikacjach i jestem zaangażowany w tworzenie produktów i usług z wyjątkowym doświadczeniem użytkownika oraz nowoczesnymi technikami interfejsu użytkownika. Staram się, aby uczyć się i poszerzyć swoją wiedzę w tej dziedzinie, ponieważ uważam, że im więcej się uczę, tym lepsze doświadczenie będzie miało użytkowników końcowych. Możesz mnie znaleźć na LinkedIn i Github lub skontaktować się ze mną za pośrednictwem e -maila na hello@davidscicluna.com.'
		},
		common: {
			about: [
				`Cześć! Jestem David Scicluna, deweloper z frontu z siedzibą na słonecznych wyspach maltańskich. Obecnie pracuje na <a href="${process.env.GATSBY_TAIN_URL}" target="_blank">Tain</a> | <a href="${process.env.GATSBY_EEZE_URL}" target="_blank">EEZE</a> i jako freelancer.`,
				'Bardzo pasjonuję się technologią; Uwielbiam opracowywać pomysły w aplikacjach i jestem zaangażowany w tworzenie produktów i usług z wyjątkowym doświadczeniem użytkownika oraz nowoczesnymi technikami interfejsu użytkownika.',
				'Staram się, aby uczyć się i poszerzyć swoją wiedzę w tej dziedzinie, ponieważ uważam, że im więcej się uczę, tym lepsze doświadczenie będzie miało użytkowników końcowych.',
				`Możesz mnie znaleźć na <a href="${process.env.GATSBY_LINKEDIN_URL}" target="_blank">Linkedin</a> i <a href="${process.env.GATSBY_GITHUB_URL}" target="_blank">Github</a> lub skontaktuj się ze mną za pośrednictwem e -maila pod adresem <a href="mailto:${process.env.GATSBY_EMAIL_URL}">hello@davidscicluna.com</a>.`
			],
			navItems: { '/': 'Dom', '/about': 'O', '/projects': 'Projektowanie' },
			projects: {
				edb: {
					title: 'The Entertainment Database (EDB)',
					short: 'Edb',
					description:
						'Baza danych Entertainment (EDB) to aplikacja internetowa, która oferuje informacje związane z branżą rozrywkową napędzaną API ThemoviedB. Takie informacje mogą być wszystkim, od filmów, programów telewizyjnych i ludzi, którzy to sprawiają. EDB oferuje użytkownikom możliwość przeglądania wszystkich informacji, takich jak i zapisanie ich na liście. Każde dane znalezione w EDB to najnowsza i najbardziej zaktualizowana treść dotycząca branży rozrywkowej, zapewniając użytkownikom wiarygodne treści.',
					links: { web: 'Idź do EDB', playground: 'Otwórz EDB', git: 'Github' }
				},
				concentration: {
					title: 'Stężenie',
					description:
						'Koncentracja to gra dopasowań do karty. Aby wygrać, gracz musi dopasować wszystkie karty, łącząc te, które zawierają tę samą ikonę.',
					links: { web: 'Przejdź do koncentracji', playground: 'Otwarta koncentracja', git: 'Github' }
				},
				journal: {
					title: 'Dziennik',
					description:
						'Journal jest bogatym edytorem tekstu, który pozwala użytkownikowi pisać i edytować notatki z tekstem, obrazami, linkami i kolorami.',
					links: { web: 'Idź do dziennika', playground: 'Open Journal', git: 'Github' }
				},
				clock: {
					title: 'Zegar',
					description:
						'Clock to aplikacja w czasie rzeczywistym, która pozwala użytkownikowi sprawdzić w czasie rzeczywistym w dowolnym mieście na całym świecie. Można ustawić alarmy, stoper i timer.',
					links: { web: 'Idź do zegara', playground: 'Otwarty zegar', git: 'Github' }
				},
				weather: {
					title: 'Pogoda',
					description:
						'Pogoda to aplikacja, która pozwala użytkownikowi wyszukiwać obecną pogodę wszystkich miast na całym świecie.',
					links: { web: 'Idź na pogodę', playground: 'Otwarta pogoda', git: 'Github' }
				},
				calculator: {
					title: 'Kalkulator',
					description:
						'Kalkulator to aplikacja, która pozwala użytkownikowi obliczyć nienaukowe obliczenia i wyświetla wcześniejsze obliczenia.',
					links: { web: 'Przejdź do kalkulatora', playground: 'Otwórz kalkulator', git: 'Github' }
				}
			},
			skills: [
				{
					label: 'Projekt',
					skills: [
						'Projekt interfejsu użytkownika (interfejs użytkownika)',
						'Doświadczenie użytkownika (UX)',
						'Responsywny projekt strony internetowej',
						'Projekt marki'
					]
				},
				{
					label: 'Technologie',
					skills: [
						'Język znaczników hipertekstu (HTML)',
						'Kaskadowe prześcieradła (CSS)',
						'Składnie niesamowite arkusze stylów (sass)',
						'CSS in JS (JSS)',
						'JavaScript',
						'Maszynopis'
					]
				},
				{ label: 'JS Frameworks', skills: ['React JS', 'Vue'] },
				{
					label: 'Biblioteki',
					skills: [
						'Czakra interfejs użytkownika',
						'Materialny interfejs użytkownika (MUI)',
						'Redux',
						'Draft JS',
						'Storybook'
					]
				},
				{ label: 'Testowanie', skills: ['Żart', 'Jasmine JS'] },
				{
					label: 'Narzędzia i aplikacje',
					skills: ['Git', 'Przędza', 'NPM', 'Eslint', 'Ładniejszy', 'Figma', 'Adobe Experience Design (XD)']
				}
			]
		},
		components: {
			errorBoundary: {
				title: 'O nie! 😭',
				subtitle:
					'Niestety, coś poszło nie tak, próbując renderować aplikację. Proszę odświeżyć, aby spróbować ponownie!',
				console: 'Błąd nieokreślony:',
				action: 'Odświeżać'
			},
			logo: { long: 'DavidScicluna', short: 'ds' }
		},
		layout: {
			scrollToTop: 'Przewiń do góry',
			internationalizationModal: {
				title: 'preferowany język',
				subtitle: 'Wybierz preferowany język wyboru z poniższej listy języków',
				empty: {
					title: 'Nie znaleziono języków',
					subtitle: 'Nie znaleziono języków dla zapytania "{{query}}"',
					action: 'Wyczyść wyszukiwanie'
				},
				languages: {
					bg: 'bułgarski',
					cs: 'Czech',
					da: 'duński',
					de: 'Niemiecki',
					el: 'grecki',
					en: 'język angielski',
					es: 'hiszpański',
					fr: 'Francuski',
					hr: 'chorwacki',
					hu: 'język węgierski',
					it: 'Włoski',
					mt: 'Maltańczycy',
					nl: 'Holenderski',
					pl: 'Polski',
					pt: 'portugalski',
					ro: 'rumuński',
					ru: 'Rosyjski',
					sr: 'serbski',
					sv: 'szwedzki',
					tr: 'turecki',
					uk: 'ukraiński'
				},
				placeholder: "Spróbuj '{{language}}'",
				cancel: 'Anulować',
				action: 'Zmień język'
			},
			playgroundModal: {
				title: 'Tytuł Projektu',
				subtitle: 'Opis Projektu',
				navigation: {
					open: {
						'aria-label': { tooltip: 'Otwarta nawigacja (podpowiedź)', button: 'Otwarta nawigacja' },
						'tooltip': 'Otwarta nawigacja'
					},
					close: {
						'aria-label': { tooltip: 'Wyjdź z nawigacją (podpowiedź)', button: 'Wyjdź z nawigacją' },
						'tooltip': 'Wyjdź z nawigacją'
					}
				},
				fullscreen: {
					open: {
						'aria-label': { tooltip: 'Otwórz pełny ekran (podpowiedź)', button: 'Otwórz pełny ekran' },
						'tooltip': 'Otwórz pełny ekran'
					},
					close: {
						'aria-label': {
							tooltip: 'Wyjdź z pełnym ekranem (podpowiedź)',
							button: 'Wyłączyć tryb pełnoekranowy'
						},
						'tooltip': 'Wyłączyć tryb pełnoekranowy'
					}
				},
				close: { 'aria-label': 'Zamknięty plac zabaw', 'tooltip': 'Zamknąć' },
				error: {
					title: 'Nie udało się załadować aplikacji',
					subtitle: 'Niestety coś poszło nie tak podczas próby załadowania {{project}}',
					project: 'projekt',
					action: 'Zamknąć'
				},
				cancel: 'Anulować',
				action: 'Otwórz w nowej karcie'
			},
			contact: {
				label: 'Chcesz się skontaktować, aby współpracować nad projektem, który masz na myśli? Kliknij, aby porozmawiać!',
				action: 'Porozmawiajmy'
			},
			footer: { copyright: '© {{year}} David Scicluna, Wszelkie prawa zastrzeżone.' },
			navigation: {
				colorModeIconButton: {
					light: {
						'aria-label': {
							tooltip: 'Przełącz tryb ciemności (podpowiedź)',
							button: 'Przejdź na tryb ciemności'
						},
						'tooltip': 'Przejdź na tryb ciemności'
					},
					dark: {
						'aria-label': {
							tooltip: 'Przełącz tryb światła (podpowiedź)',
							button: 'Przejdź na tryb światła'
						},
						'tooltip': 'Przejdź na tryb światła'
					}
				},
				internationalizationIconButton: {
					'aria-label': { tooltip: 'Zmień język (podpowiedź)', button: 'Zmień język' },
					'tooltip': 'Zmień język'
				},
				action: 'Skontaktuj się'
			},
			socials: {
				email: {
					'aria-label': {
						tooltip: 'Wyślij e -mail do „{{email}}” (podpowiedź)',
						button: 'Wyślij e -mail do „{{email}}”'
					},
					'tooltip': 'E -mail: „{{email}}”'
				},
				linkedin: {
					'aria-label': {
						tooltip: 'Otwórz stronę profilu LinkedIn (podpowiedź)',
						button: 'Otwórz stronę profilu LinkedIn'
					},
					'tooltip': 'Profil LinkedIn'
				},
				github: {
					'aria-label': {
						tooltip: 'Otwórz stronę profilu Github (podpowiedź)',
						button: 'Otwórz stronę profilu Github'
					},
					'tooltip': 'Profil github'
				}
			}
		},
		noMatch: {
			title: 'Strona nie znaleziona!',
			subtitle: 'Sprawdź adres URL w pasku adresu i spróbuj ponownie.',
			action1: 'Wróć do domu',
			action2: 'Spróbuj ponownie'
		},
		splashscreen: { label: 'David Scicluna • deweloper front-end', logo: 'DavidScicluna' },
		home: {
			title1: 'Cześć! Jestem pasjonatem Dawida',
			title2: 'Deweloper front-end',
			subtitle: 'Obecnie oparte na słonecznych wyspach maltańskich',
			icons: {
				html: { 'aria-label': 'HTML (podpowiedź)', 'label': 'Html' },
				css: { 'aria-label': 'CSS (podpowiedź)', 'label': 'CSS' },
				js: { 'aria-label': 'JavaScript (podpowiedź)', 'label': 'JavaScript' },
				ts: { 'aria-label': 'TypeScript (podpowiedź)', 'label': 'Maszynopis' },
				react: { 'aria-label': 'React (podpowiedź)', 'label': 'Reagować' }
			},
			action: 'Skontaktuj się'
		},
		about: {
			cover: {
				banner: 'Transparent',
				portrait: 'Portret'
			},
			labels: {
				aboutMe: 'O mnie',
				certifications: 'Certyfikaty',
				experience: 'Doświadczenie',
				skills: 'Umiejętności'
			},
			experiences: [
				{ place: 'Tain | EEZE', role: 'Deweloper front-end' },
				{ place: 'davidscicluna.com', role: 'Niezależny deweloper front-end' },
				{
					place: 'Ministerstwo Gozo (Office of the CIO)',
					role: 'Deweloper front-end (uczeń w pełnym wymiarze godzin)'
				},
				{
					place: 'Ministerstwo Gozo (Office of the CIO)',
					role: 'Deweloper front-end (uczeń w pełnym wymiarze godzin)'
				},
				{
					place: 'Ministerstwo Gozo (Office of the CIO)',
					role: 'Wsparcie techniczne IT (uczeń w pełnym wymiarze godzin)'
				}
			],
			certifications: {
				udacity: 'Nanodegree twórca stron internetowych',
				freecodecamp: 'Responsywny certyfikat projektowania stron internetowych'
			}
		},
		project: {
			status: 'Work in progress'
		}
	}
};
