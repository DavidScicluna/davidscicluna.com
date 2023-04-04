export default {
	translation: {
		page: {
			title: 'David Scicluna • Портфолио',
			description:
				'Здравейте! Аз съм Дейвид Scicluna, разработчик на предния край, базиран на слънчевите малтийски острови. В момента работи в Tain | EEZE и като фрийлансър. Много съм страстен по отношение на технологиите; Обичам да разработвам идеи в приложения и се ангажирам да създавам продукти и услуги с изключително потребителско изживяване и със съвременни техники на потребителски интерфейс. Опитвам се да продължа да уча и да разширявам знанията си в тази област, тъй като вярвам, че колкото повече науча, толкова по-добър опит ще има крайните потребители. Можете да ме намерите в LinkedIn и GitHub или да се свържете с мен по имейл на hello@davidscicluna.com.'
		},
		common: {
			about: [
				`Здравейте! Аз съм Дейвид Scicluna, разработчик на предния край, базиран на слънчевите малтийски острови. В момента работи на <a href="${
					import.meta.env.VITE_TAIN_URL
				}" target="_blank">Tain</a> | <a href="${
					import.meta.env.VITE_EEZE_URL
				}" target="_blank">EEZE</a> и като фрийлансър.`,
				'Много съм страстен по отношение на технологиите; Обичам да разработвам идеи в приложения и се ангажирам да създавам продукти и услуги с изключително потребителско изживяване и със съвременни техники на потребителски интерфейс.',
				'Опитвам се да продължа да уча и да разширявам знанията си в тази област, тъй като вярвам, че колкото повече науча, толкова по-добър опит ще има крайните потребители.',
				`Можете да ме намерите на <a href="${
					import.meta.env.VITE_LINKEDIN_URL
				}" target="_blank">Linkedin</a> и <a href="${
					import.meta.env.VITE_GITHUB_URL
				}" target="_blank">Github</a> или се свържете с мен по имейл на <a href="mailto:${
					import.meta.env.VITE_EMAIL_URL
				}">hello@davidscicluna.com</a>.`
			],
			navItems: { '/': 'У дома', '/about': 'относно', '/projects': 'Проекти' },
			projects: {
				edb: {
					title: 'Базата данни за развлечения (EDB)',
					short: 'Edb',
					description:
						'Базата данни за развлечения (EDB) е уеб приложение, което предлага информация, свързана с развлекателната индустрия, захранвана от API на TheMoViedB. Такава информация може да бъде всичко - от филми, телевизионни предавания и хората, които я правят. EDB предлага на потребителите възможността да преглеждат цялата информация, като и да я запазят в списък. Всяка част от данните, открити в EDB, е най -новото и най -актуализирано съдържание относно индустрията за развлечения, като се гарантира на потребителите с надеждно съдържание.',
					links: { web: 'Отидете в EDB', playground: 'Отворете EDB', git: 'Github' }
				},
				concentration: {
					title: 'Концентрация',
					description:
						'Концентрацията е игра за съвпадение на карти. За да спечели, играчът трябва да съответства на всички карти, като сдвои тези, които съдържат една и съща икона.',
					links: { web: 'Отидете на концентрация', playground: 'Отворена концентрация', git: 'Github' }
				},
				journal: {
					title: 'Journal',
					description:
						'Journal е богат текстов редактор, който позволява на потребителя да пише и редактира бележки с текст, изображения, връзки и цветове.',
					links: { web: 'Отидете на Journal', playground: 'Отворен журнал', git: 'Github' }
				},
				clock: {
					title: 'Часовник',
					description:
						'Clock е приложение в реално време, което позволява на потребителя да проверява в реално време на всеки град по света. Човек може да зададе аларми, хронометър и таймер.',
					links: { web: 'Отидете на Clock', playground: 'Отворен часовник', git: 'Github' }
				},
				weather: {
					title: 'Метеорологично време',
					description:
						'Времето е приложение, което позволява на потребителя да търси текущото време на всички градове по света.',
					links: { web: 'Отидете на времето', playground: 'Отворено време', git: 'Github' }
				},
				calculator: {
					title: 'Калкулатор',
					description:
						'Калкулаторът е приложение, което позволява на потребителя да изчислява ненаучните изчисления и показва минали изчисления.',
					links: { web: 'Отидете на калкулатор', playground: 'Отворете калкулатор', git: 'Github' }
				}
			},
			skills: [
				{
					label: 'Дизайн',
					skills: [
						'Дизайн на потребителския интерфейс (UI)',
						'Потребителски опит (UX)',
						'Отзивчив уеб дизайн',
						'Дизайн на брандиране'
					]
				},
				{
					label: 'Технологии',
					skills: [
						'Език на хипертекст на маркиране (HTML)',
						'Каскадни листове в стил (CSS)',
						'Синтактично страхотни листове в стил (sass)',
						'CSS в JS (JSS)',
						'JavaScript',
						'TypeScript'
					]
				},
				{ label: 'JS рамки', skills: ['React JS', 'Vue'] },
				{
					label: 'Библиотеки',
					skills: [
						'Chakra ui',
						'Материалния потребителски интерфейс (MUI)',
						'Redux',
						'Проект JS',
						'Книга с разкази'
					]
				},
				{ label: 'Тестване', skills: ['Шега', 'Жасмин JS'] },
				{
					label: 'Инструменти и приложения',
					skills: ['Git', 'Прежда', 'Npm', 'Eslint', 'По-хубава', 'Фигма', 'Adobe Experience Design (XD)']
				}
			]
		},
		components: {
			errorBoundary: {
				title: 'О, не! 😭',
				subtitle:
					'За съжаление, нещо се обърка, когато се опитваше да направи приложението. Моля, обновете, за да опитате отново!',
				console: 'Uncuugh Error:',
				action: 'Опресняване'
			},
			logo: { long: 'Davidscicluna', short: 'ds' }
		},
		layout: {
			scrollToTop: 'Превъртете до върха',
			internationalizationModal: {
				title: 'предпочитан език',
				subtitle: 'Изберете предпочитания език по ваш избор от списъка с езици по -долу',
				languages: {
					bg: 'български',
					cs: 'Чех',
					da: 'Датски',
					de: 'Немски',
					el: 'Гръцки',
					en: 'Английски',
					es: 'Испански',
					fr: 'Френски',
					hr: 'Хърватски',
					hu: 'Унгарски',
					it: 'Италиански',
					mt: 'Малтийски',
					nl: 'Холандски',
					pl: 'Лак',
					pt: 'Португалски',
					ro: 'Румънски',
					ru: 'Руски',
					sr: 'Сръбски',
					sv: 'Шведски',
					tr: 'Турски',
					uk: 'Украински'
				},
				placeholder: "Опитайте '{{language}}'",
				cancel: 'Отказ',
				action: 'Смени езика'
			},
			playgroundModal: {
				title: 'Заглавие на Проекта',
				subtitle: 'Описание на проекта',
				navigation: {
					open: {
						'aria-label': { tooltip: 'Отворена навигация (ToolTip)', button: 'Отворена навигация' },
						'tooltip': 'Отворена навигация'
					},
					close: {
						'aria-label': { tooltip: 'Излезте от навигация (подсказка)', button: 'Излезте от навигация' },
						'tooltip': 'Излезте от навигация'
					}
				},
				fullscreen: {
					open: {
						'aria-label': { tooltip: 'Отворете цял екран (ToolTip)', button: 'Отворете цял екран' },
						'tooltip': 'Отворете цял екран'
					},
					close: {
						'aria-label': { tooltip: 'Излезте от цял екран (ToolTip)', button: 'Излезте от цял екран' },
						'tooltip': 'Излезте от цял екран'
					}
				},
				close: { 'aria-label': 'Затворете детската площадка', 'tooltip': 'Близо' },
				cancel: 'Отказ',
				action: 'Отворен в нов раздел'
			},
			contact: {
				label: 'Искате ли да се свържете, за да си сътрудничите по проект, който имате предвид? Щракнете, за да говорите!',
				action: 'Нека да говорим'
			},
			footer: { copyright: '© {{year}} Дейвид Scicluna, всички права запазени.' },
			navigation: {
				colorModeIconButton: {
					light: {
						'aria-label': {
							tooltip: 'Превключете в режим на тъмен (подсказка)',
							button: 'Превключете в тъмен режим'
						},
						'tooltip': 'Превключете в тъмен режим'
					},
					dark: {
						'aria-label': {
							tooltip: 'Превключете в режим на светлина (подсказка)',
							button: 'Превключете в режим на светлина'
						},
						'tooltip': 'Превключете в режим на светлина'
					}
				},
				internationalizationIconButton: {
					'aria-label': { tooltip: 'Променете езика (ToolTip)', button: 'Смени езика' },
					'tooltip': 'Смени езика'
				},
				action: 'Свържете се'
			},
			socials: {
				email: {
					'aria-label': {
						tooltip: "Изпратете имейл до '{{email}}' (ToolTip)",
						button: "Изпратете имейл до '{{email}}'"
					},
					'tooltip': "Имейл: '{{email}}'"
				},
				linkedin: {
					'aria-label': {
						tooltip: 'Отворете страницата на профила в LinkedIn (ToolTip)',
						button: 'Отворете страницата на профила в LinkedIn'
					},
					'tooltip': 'Профил на LinkedIn'
				},
				github: {
					'aria-label': {
						tooltip: 'Отворете страницата на профила на GitHub (ToolTip)',
						button: 'Отворете страницата на профила на GitHub'
					},
					'tooltip': 'Профил на GitHub'
				}
			}
		},
		noMatch: {
			title: 'Страницата не е намерена!',
			subtitle: 'Моля, проверете URL адреса в адресната лента и опитайте отново.',
			action1: 'Върнете се у дома',
			action2: 'Опитай пак'
		},
		splashscreen: { label: 'David Scicluna • Преден разработчик', logo: 'Davidscicluna' },
		home: {
			title1: 'Здравейте! Аз съм Дейвид страстен',
			title2: 'Преден разработчик',
			subtitle: 'В момента базиран на слънчевите малтийски острови',
			icons: {
				html: { 'aria-label': 'HTML (ToolTip)', 'label': 'Html' },
				css: { 'aria-label': 'CSS (ToolTip)', 'label': 'CSS' },
				js: { 'aria-label': 'JavaScript (TOULTIP)', 'label': 'JavaScript' },
				ts: { 'aria-label': 'TypeScript (ToolTip)', 'label': 'TypeScript' },
				react: { 'aria-label': 'React (ToolTip)', 'label': 'Реагиране' }
			},
			action: 'Свържете се'
		},
		about: {
			cover: {
				banner: 'Банер',
				portrait: 'Портрет'
			},
			labels: {
				aboutMe: 'За мен',
				certifications: 'Сертификати',
				experience: 'Опит',
				skills: 'Умения'
			},
			experiences: [
				{ place: 'Tain | EEZE', role: 'Преден разработчик' },
				{ place: 'davidscicluna.com', role: 'Фронт за свободна практика' },
				{
					place: 'Министерство на Гозо (Служба на CIO)',
					role: 'Преден разработчик (чирак на пълен работен ден)'
				},
				{
					place: 'Министерство на Гозо (Служба на CIO)',
					role: 'Преден разработчик (чирак на пълен работен ден)'
				},
				{
					place: 'Министерство на Гозо (Служба на CIO)',
					role: 'ИТ техническа поддръжка (чирак на пълен работен ден)'
				}
			],
			certifications: {
				udacity: 'Преден уеб разработчик Nanodegree',
				freecodecamp: 'Отзивчиво сертифициране на уеб дизайн'
			}
		},
		project: {
			status: 'Work in progress'
		}
	}
};
