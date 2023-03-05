export default {
	translation: {
		page: {
			title: 'Дэвид Скиклуна • Портфолио',
			description:
				'Привет! Я Дэвид Скиклуна, фронтальный застройщик, базирующийся на солнечных мальтийских островах. В настоящее время работает в Tain | EEZE и как фрилансер. Я очень увлечен технологиями; Я люблю разрабатывать идеи в приложениях и привержен созданию продуктов и услуг с исключительным пользовательским опытом и с современными методами пользовательского интерфейса. Я стараюсь изо всех сил, чтобы продолжать изучать и расширять свои знания в этой области, так как я считаю, что чем больше я учусь, тем лучше, чем у конечных пользователей. Вы можете найти меня на LinkedIn и GitHub, или обратиться ко мне по электронной почте hello@davidscicluna.com.'
		},
		common: {
			about: [
				`Привет! Я Дэвид Скиклуна, фронтальный застройщик, базирующийся на солнечных мальтийских островах. В настоящее время работает в <a href="${
					import.meta.env.VITE_TAIN_URL
				}" target="_blank">Tain</a> | <a href="${
					import.meta.env.VITE_EEZE_URL
				}" target="_blank">EEZE</a> и как фрилансер.`,
				'Я очень увлечен технологиями; Я люблю разрабатывать идеи в приложениях и привержен созданию продуктов и услуг с исключительным пользовательским опытом и с современными методами пользовательского интерфейса.',
				'Я стараюсь изо всех сил, чтобы продолжать изучать и расширять свои знания в этой области, так как я считаю, что чем больше я учусь, тем лучше, чем у конечных пользователей.',
				`Вы можете найти меня на <a href="${
					import.meta.env.VITE_LINKEDIN_URL
				}" target="_blank">Linkedin</a> и <a href="${
					import.meta.env.VITE_GITHUB_URL
				}" target="_blank">Github</a>, или обратитесь ко мне по электронной почте по адресу <a href="mailto:${
					import.meta.env.VITE_EMAIL_URL
				}">hello@davidscicluna.com</a>.`
			],
			navItems: { '/': 'Дом', '/about': 'О', '/projects': 'Проекты' },
			projects: {
				edb: {
					title: 'Развлекательная база данных (EDB)',
					short: 'Edb',
					description:
						'Развлекательная база данных (EDB) - это веб -приложение, которое предлагает информацию, связанную с индустрией развлечений, работающей на API TheMoviedB. Такая информация может быть чем угодно от фильмов, телешоу и людей, которые делают это. EDB предлагает пользователям возможность просматривать всю информацию, например, и сохранить ее в список. Каждая часть данных, найденных в EDB, является последним и наиболее обновленным контентом, касающимся индустрии развлечений, обеспечивающих пользователям надежного контента.',
					links: { web: 'Перейти в Эдб', playground: 'Открыть Edb', git: 'GitHub' }
				},
				concentration: {
					title: 'Концентрация',
					description:
						'Концентрация - это игра для совпадения карт. Чтобы выиграть, игрок должен соответствовать всем картам, сочиняя те, которые содержат один и тот же значок.',
					links: { web: 'Перейти к концентрации', playground: 'Открытая концентрация', git: 'GitHub' }
				},
				journal: {
					title: 'Журнал',
					description:
						'Журнал - это богатый текстовый редактор, который позволяет пользователю писать и редактировать заметки с помощью текста, изображений, ссылок и цветов.',
					links: { web: 'Перейти в журнал', playground: 'Открытый журнал', git: 'GitHub' }
				},
				clock: {
					title: 'Часы',
					description:
						'Часы-это приложение в реальном времени, которое позволяет пользователю проверять в режиме реального времени любого города по всему миру. Можно установить тревоги, секундомер и таймер.',
					links: { web: 'Перейти к часам', playground: 'Открытые часы', git: 'GitHub' }
				},
				weather: {
					title: 'Погода',
					description:
						'Погода - это приложение, которое позволяет пользователю искать текущую погоду во всех городах по всему миру.',
					links: { web: 'Иди в погоду', playground: 'Открытая погода', git: 'GitHub' }
				},
				calculator: {
					title: 'Калькулятор',
					description:
						'Калькулятор-это приложение, которое позволяет пользователю рассчитать ненаучные вычисления и отображать прошлые расчеты.',
					links: { web: 'Перейти к калькулятору', playground: 'Открытый калькулятор', git: 'GitHub' }
				}
			},
			skills: [
				{
					label: 'Дизайн',
					skills: [
						'Дизайн пользовательского интерфейса (пользовательский интерфейс)',
						'Пользовательский опыт (UX)',
						'Отзывчивый веб -дизайн',
						'Дизайн брендинга'
					]
				},
				{
					label: 'Технологии',
					skills: [
						'Гипертекстовая разметка языка (HTML)',
						'Каскадные листы в стиле (CSS)',
						'Синтаксически потрясающие стиливые листы (sass)',
						'CSS в JS (JSS)',
						'JavaScript',
						'Машинопись'
					]
				},
				{ label: 'JS Frameworks', skills: ['React JS', 'Vue'] },
				{
					label: 'Библиотеки',
					skills: ['Чакра UI', 'Материал UI (MUI)', 'Redux', 'Проект JS', 'Сборник рассказов']
				},
				{ label: 'Тестирование', skills: ['Шутка', 'Жасмин JS'] },
				{
					label: 'Инструменты и приложения',
					skills: ['Git', 'Пряжа', 'Npm', 'Эслинт', 'Красивее', 'Фигма', 'Adobe Experience Design (XD)']
				}
			]
		},
		components: {
			errorBoundary: {
				title: 'О, нет! 😭',
				subtitle:
					'К сожалению, что -то пошло не так при попытке представить заявку. Пожалуйста, обновитесь, чтобы попробовать еще раз!',
				console: 'Ошибка непредуденной:',
				action: 'Обновлять'
			},
			logo: { long: 'Davidscicluna', short: 'дюймовый' }
		},
		layout: {
			internationalizationModal: {
				title: 'предпочтительный язык',
				subtitle: 'Выберите предпочтительный язык по вашему выбору из списка языков ниже',
				languages: {
					bg: 'болгарский',
					cs: 'Чешский',
					da: 'Датский',
					de: 'Немецкий',
					el: 'Греческий',
					en: 'Английский',
					es: 'испанский',
					fr: 'Французский',
					hr: 'хорватский',
					hu: 'Венгерский',
					it: 'Итальянский',
					mt: 'Мальтийский',
					nl: 'Голландский',
					pl: 'Лак',
					pt: 'португальский',
					ro: 'румынский',
					ru: 'Русский',
					sr: 'сербский',
					sv: 'Шведский',
					tr: 'турецкий',
					uk: 'украинец'
				},
				placeholder: "Попробуйте '{{language}}'",
				cancel: 'Отмена',
				action: 'Изменение языка'
			},
			playgroundModal: {
				title: 'Название Проекта',
				subtitle: 'Описание Проекта',
				navigation: {
					open: {
						'aria-label': { tooltip: 'Открытая навигация (подсказка)', button: 'Открытая навигация' },
						'tooltip': 'Открытая навигация'
					},
					close: {
						'aria-label': { tooltip: 'Навигация на выход (подсказка)', button: 'Выход навигации' },
						'tooltip': 'Выход навигации'
					}
				},
				fullscreen: {
					open: {
						'aria-label': { tooltip: 'Открыть полноэкранный (подсказка)', button: 'Открыть полноэкранный' },
						'tooltip': 'Открыть полноэкранный'
					},
					close: {
						'aria-label': {
							tooltip: 'Выход полноэкранной (подсказка)',
							button: 'Выход полноэкранного экрана'
						},
						'tooltip': 'Выход полноэкранного экрана'
					}
				},
				close: { 'aria-label': 'Близкая игровая площадка', 'tooltip': 'Закрывать' },
				cancel: 'Отмена',
				action: 'Открыто в новой вкладке'
			},
			contact: {
				label: 'Хотите связаться, чтобы сотрудничать с проектом, который вы имеете в виду? Нажмите, чтобы поговорить!',
				action: 'Давай поговорим'
			},
			footer: { copyright: '© {{year}} Дэвид Скиклуна, все права защищены.' },
			navigation: {
				colorModeIconButton: {
					light: {
						'aria-label': {
							tooltip: 'Переключитесь в Dark Mode (подсказка)',
							button: 'Переключиться в темный режим'
						},
						'tooltip': 'Переключиться в темный режим'
					},
					dark: {
						'aria-label': {
							tooltip: 'Переключитесь в режим света (подсказка)',
							button: 'Переключиться в режим света'
						},
						'tooltip': 'Переключиться в режим света'
					}
				},
				internationalizationIconButton: {
					'aria-label': { tooltip: 'Изменение языка (подсказка инструментов)', button: 'Изменение языка' },
					'tooltip': 'Изменение языка'
				},
				action: 'Связаться'
			},
			socials: {
				email: {
					'aria-label': {
						tooltip: "Отправить электронное письмо в '{{email}}' (подсказка)",
						button: "Отправить электронное письмо в '{{email}}'"
					},
					'tooltip': "Электронная почта: '{{email}}'"
				},
				linkedin: {
					'aria-label': {
						tooltip: 'Откройте страницу профиля LinkedIn (подсказка)',
						button: 'Открыть страницу профиля LinkedIn'
					},
					'tooltip': 'LinkedIn Profile'
				},
				github: {
					'aria-label': {
						tooltip: 'Откройте страницу профиля GitHub (подсказка)',
						button: 'Открыть страницу профиля GitHub'
					},
					'tooltip': 'GitHub Profile'
				}
			}
		},
		noMatch: {
			title: 'Страница не найдена!',
			subtitle: 'Пожалуйста, проверьте URL -адрес в адресной строке и попробуйте еще раз.',
			action1: 'Возвращайся домой',
			action2: 'Попробуйте еще раз'
		},
		splashscreen: { label: 'Дэвид Скиклуна • Фронт-элитный разработчик', logo: 'Davidscicluna' },
		home: {
			title1: 'Привет! Я Дэвид страстный',
			title2: 'Разработчик фронт',
			subtitle: 'В настоящее время базируется на солнечных мальтийских островах',
			icons: {
				html: { 'aria-label': 'HTML (подсказка)', 'label': 'HTML' },
				css: { 'aria-label': 'CSS (подсказка)', 'label': 'CSS' },
				js: { 'aria-label': 'JavaScript (подсказка)', 'label': 'JavaScript' },
				ts: { 'aria-label': 'TypeScript (подсказка)', 'label': 'Машинопись' },
				react: { 'aria-label': 'Реагировать (подсказка)', 'label': 'Реагировать' }
			},
			action: 'Связаться'
		},
		about: {
			cover: {
				banner: 'Баннер',
				portrait: 'Портрет'
			},
			labels: {
				aboutMe: 'Обо мне',
				certifications: 'Сертификаты',
				experience: 'Опыт',
				skills: 'Навыки'
			},
			experiences: [
				{ place: 'Tain | EEZE', role: 'Разработчик фронт' },
				{ place: 'davidscicluna.com', role: 'Freelance Front-End Developer' },
				{
					place: 'Министерство Гозо (офис ИТ -директора)',
					role: 'Застройщик фронта (ученик полный рабочий день)'
				},
				{
					place: 'Министерство Гозо (офис ИТ -директора)',
					role: 'Застройщик фронта (ученик полный рабочий день)'
				},
				{
					place: 'Министерство Гозо (офис ИТ -директора)',
					role: 'ИТ-техническая поддержка (ученик на полный рабочий день)'
				}
			],
			certifications: {
				udacity: 'Фронт-элитный веб-разработчик nanodegree',
				freecodecamp: 'Адаптивная сертификация веб -дизайна'
			}
		}
	}
};
