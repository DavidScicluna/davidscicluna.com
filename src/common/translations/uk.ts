export default {
	translation: {
		page: {
			title: 'Девід Скіклуна • Портфоліо',
			description:
				'Привіт! Я Девід Скіклуна, передній розробник, що базується на Сонячних Мальтійських островах. В даний час працює в Tain | EEZE і як фрілансер. Я дуже захоплююсь технологіями; Я люблю розробляти ідеї в додатки і прагну створювати продукти та послуги з винятковим досвідом користувачів та сучасними методами інтерфейсу користувача. Я намагаюся зробити все можливе, щоб продовжувати вивчати та розширювати свої знання в цій галузі, оскільки я вважаю, що чим більше я навчаюсь, тим краще досвід, який матимуть кінцеві користувачі. Ви можете знайти мене на LinkedIn та Github, або звернутися до мене електронною поштою hello@davidscicluna.com.'
		},
		common: {
			about: [
				`Привіт! Я Девід Скіклуна, передній розробник, що базується на Сонячних Мальтійських островах. В даний час працює в <a href="${
					import.meta.env.VITE_TAIN_URL
				}" target="_blank">Tain</a> | <a href="${
					import.meta.env.VITE_EEZE_URL
				}" target="_blank">EEZE</a> і як фрілансер.`,
				'Я дуже захоплююсь технологіями; Я люблю розробляти ідеї в додатки і прагну створювати продукти та послуги з винятковим досвідом користувачів та сучасними методами інтерфейсу користувача.',
				'Я намагаюся зробити все можливе, щоб продовжувати вивчати та розширювати свої знання в цій галузі, оскільки я вважаю, що чим більше я навчаюсь, тим краще досвід, який матимуть кінцеві користувачі.',
				`Ви можете знайти мене на <a href="${
					import.meta.env.VITE_LINKEDIN_URL
				}" target="_blank">Linkedin</a>, і <a href="${
					import.meta.env.VITE_GITHUB_URL
				}" target="_blank">Github</a>, або зверніться до мене електронною поштою за адресою <a href="mailto:${
					import.meta.env.VITE_EMAIL_URL
				}">hello@davidscicluna.com</a>.`
			],
			navItems: { '/': 'Домашній', '/about': 'Про', '/projects': 'Проекти' },
			projects: {
				edb: {
					title: 'База даних розваг (EDB)',
					short: 'EDB',
					description:
						'База даних розваг (EDB) - це веб -додаток, яка пропонує інформацію, пов’язану з індустрією розваг, що працює на API API. Така інформація може бути будь -якою з фільмів, телевізійних шоу та людей, які роблять це. EDB пропонує користувачам можливість переглянути всю інформацію, як, наприклад, зберігати її у списку. Кожен фрагмент даних, знайдені в EDB, - це останній та найбільш оновлений вміст, що стосується індустрії розваг, гарантуючи користувачів із надійним контентом.',
					links: { web: 'Перейдіть до EDB', playground: 'Відкрити EDB', git: 'Гітб' }
				},
				concentration: {
					title: 'Концентрація',
					description:
						'Концентрація - це гра для відповідності карт. Щоб виграти, гравець повинен відповідати всім картам, поєднавши ті, що містять однакову значок.',
					links: { web: 'Перейти до концентрації', playground: 'Відкрита концентрація', git: 'Гітб' }
				},
				journal: {
					title: 'Журнал',
					description:
						'Журнал - це багатий текстовий редактор, який дозволяє користувачеві писати та редагувати нотатки за допомогою тексту, зображень, посилань та кольорів.',
					links: { web: 'Перейдіть до журналу', playground: 'Відкритий журнал', git: 'Гітб' }
				},
				clock: {
					title: 'Годинник',
					description:
						'Clock-це програма в режимі реального часу, яка дозволяє користувачеві перевіряти в режимі реального часу будь-якого міста у всьому світі. Можна встановити тривогу, секундомір та таймер.',
					links: { web: 'Перейдіть на годинник', playground: 'Відкритий годинник', git: 'Гітб' }
				},
				weather: {
					title: 'Вигадка',
					description:
						'Погода - це програма, яка дозволяє користувачеві шукати поточну погоду всіх міст у всьому світі.',
					links: { web: 'Ідіть до погоди', playground: 'Відкрита погода', git: 'Гітб' }
				},
				calculator: {
					title: 'Калькулятор',
					description:
						'Калькулятор-це програма, яка дозволяє користувачеві обчислювати несудію обчислення та відображати минулі розрахунки.',
					links: { web: 'Перейдіть до калькулятора', playground: 'Відкрийте калькулятор', git: 'Гітб' }
				}
			},
			skills: [
				{
					label: 'Дизайн',
					skills: [
						'Дизайн інтерфейсу користувача (інтерфейс UI)',
						'Досвід користувача (UX)',
						'Чуйний веб -дизайн',
						'Дизайн брендингу'
					]
				},
				{
					label: 'Технології',
					skills: [
						'Мова розмітки гіпертексту (HTML)',
						'Каскадні листи (CSS)',
						'Синтаксично дивовижні аркуші стилів (SASS)',
						'CSS в JS (JSS)',
						'JavaScript',
						'Машинопис'
					]
				},
				{ label: 'JS Frameworks', skills: ['React JS', 'Богослужіння'] },
				{
					label: 'Бібліотека',
					skills: ['Ui чакри', 'Матеріальний інтерфейс (MUI)', 'Redux', 'Проект js', 'Розповідь']
				},
				{ label: 'Тестування', skills: ['Жарт', 'Жасмін JS'] },
				{
					label: 'Інструменти та програми',
					skills: ['Гайт', 'Пряжа', 'NPM', 'Еслін', 'Гарніший', 'Фігма', 'Дизайн Adobe Experience (XD)']
				}
			]
		},
		components: {
			errorBoundary: {
				title: 'О ні! 😭',
				subtitle:
					'На жаль, щось пішло не так, коли намагається надати заявку. Будь ласка, оновіть, щоб спробувати ще раз!',
				console: 'Помилка з уваги:',
				action: 'Оновлювати'
			},
			logo: { long: 'davidscicluna', short: 'DS' }
		},
		layout: {
			internationalizationModal: {
				title: 'Бажана мова',
				subtitle: 'Виберіть бажану мову на ваш вибір зі списку мов нижче',
				languages: {
					bg: 'Болгарський',
					cs: 'Чеський',
					da: 'Датський',
					de: 'Німецький',
					el: 'Грецький',
					en: 'Англійська мова',
					es: 'Іспанська мова',
					fr: 'Французький',
					hr: 'Хорватський',
					hu: 'Угорський',
					it: 'Італійський',
					mt: 'Мальтійський',
					nl: 'Голландський',
					pl: 'Польський',
					pt: 'Португальський',
					ro: 'Румунський',
					ru: 'російський',
					sr: 'Сербський',
					sv: 'Шведський',
					tr: 'Турецький',
					uk: 'Український'
				},
				placeholder: "Спробуйте '{{language}}'",
				cancel: 'Скасувати',
				action: 'Змінити мову'
			},
			playgroundModal: {
				title: 'Назва проекту',
				subtitle: 'Опис проекту',
				navigation: {
					open: {
						'aria-label': { tooltip: 'Відкрита навігація (підказка)', button: 'Відкрита навігація' },
						'tooltip': 'Відкрита навігація'
					},
					close: {
						'aria-label': { tooltip: 'Вихід з навігації (підказка)', button: 'Вихід з навігації' },
						'tooltip': 'Вихід з навігації'
					}
				},
				fullscreen: {
					open: {
						'aria-label': {
							tooltip: 'Відкрийте повноекранний (підказка)',
							button: 'Відкрийте повноекранний'
						},
						'tooltip': 'Відкрийте повноекранний'
					},
					close: {
						'aria-label': { tooltip: 'Вихід з повного екрану (підказка)', button: 'Вийти на повне екран' },
						'tooltip': 'Вийти на повне екран'
					}
				},
				close: { 'aria-label': 'Близький майданчик', 'tooltip': 'Закривати' },
				cancel: 'Скасувати',
				action: 'Відкрийте на вкладці Нова'
			},
			contact: {
				label: 'Хочете зв’язатися, щоб співпрацювати над проектом, який ви маєте на увазі? Клацніть, щоб поговорити!',
				action: 'Давай поговоримо'
			},
			footer: { copyright: '© {{year}} David Scicluna, всі права захищені.' },
			navigation: {
				colorModeIconButton: {
					light: {
						'aria-label': {
							tooltip: 'Перейдіть у темний режим (підказка)',
							button: 'Перейдіть у темний режим'
						},
						'tooltip': 'Перейдіть у темний режим'
					},
					dark: {
						'aria-label': {
							tooltip: 'Перейдіть у режим світла (підказка)',
							button: 'Перейдіть у режим світла'
						},
						'tooltip': 'Перейдіть у режим світла'
					}
				},
				internationalizationIconButton: {
					'aria-label': { tooltip: 'Змінити мову (підказка)', button: 'Змінити мову' },
					'tooltip': 'Змінити мову'
				},
				action: "Будемо на зв'язку"
			},
			socials: {
				email: {
					'aria-label': {
						tooltip: "Надіслати електронну пошту на '{{email}}' (підказка)",
						button: "Надіслати електронну пошту на '{{email}}'"
					},
					'tooltip': "Електронна пошта: '{{email}}'"
				},
				linkedin: {
					'aria-label': {
						tooltip: 'Відкрийте сторінку профілю LinkedIn (підказка)',
						button: 'Відкрийте сторінку профілю LinkedIn'
					},
					'tooltip': 'Профіль LinkedIn'
				},
				github: {
					'aria-label': {
						tooltip: 'Відкрийте сторінку профілю Github (підказка)',
						button: 'Відкрийте сторінку профілю Github'
					},
					'tooltip': 'Профіль Github'
				}
			}
		},
		noMatch: {
			title: 'Сторінку не знайдено!',
			subtitle: 'Будь ласка, перевірте URL -адресу в адресному рядку та повторіть спробу.',
			action1: 'Повертайся додому',
			action2: 'Спробуйте ще раз'
		},
		splashscreen: { label: 'Девід Скіклуна • Передній розробник', logo: 'davidscicluna' },
		home: {
			title1: 'Привіт! Я Давид пристрасний',
			title2: 'Передній розробник',
			subtitle: 'В даний час базується на Сонячних Мальтійських островах',
			icons: {
				html: { 'aria-label': 'HTML (підказка)', 'label': 'HTML' },
				css: { 'aria-label': 'CSS (підказка)', 'label': 'CSS' },
				js: { 'aria-label': 'JavaScript (підказка)', 'label': 'JavaScript' },
				ts: { 'aria-label': 'TypeScript (підказка)', 'label': 'Машинопис' },
				react: { 'aria-label': 'React (підказка)', 'label': 'Реагувати' }
			},
			action: "Будемо на зв'язку"
		},
		about: {
			cover: {
				banner: 'Банер',
				portrait: 'Портрет'
			},
			labels: {
				aboutMe: 'Про мене',
				certifications: 'Сертифікати',
				experience: 'Досвід',
				skills: 'Навички'
			},
			experiences: [
				{ place: 'Tain | EEZE', role: 'Передній розробник' },
				{ place: 'davidscicluna.com', role: 'Позаштатний розробник переднього кінця' },
				{ place: 'Міністерство Гозо (Управління CIO)', role: 'Передній розробник (штатний учень)' },
				{ place: 'Міністерство Гозо (Управління CIO)', role: 'Передній розробник (штатний учень)' },
				{ place: 'Міністерство Гозо (Управління CIO)', role: 'ІТ-технічна підтримка (штатний учень)' }
			],
			certifications: { udacity: 'Передній веб-розробник Nanodegree', freecodecamp: 'Сертифікація веб -дизайну' }
		}
	}
};
