export default {
	translation: {
		page: {
			title: 'David Scicluna • Portfolio',
			description:
				"Hello! I'm David Scicluna, a Front-end Developer based in the sunny Maltese islands. Currently working at Tain | EEZE and as a freelancer. I am very passionate about technology; I love developing ideas into applications and am committed to creating products and services with exceptional user experience and with modern user interface techniques. I try my best to keep on learning and expanding my knowledge in this field, as I believe that the more I learn, the better the experience the end-users will have. You can find me on Linkedin, and Github, or reach out to me via email at hello@davidscicluna.com."
		},
		common: {
			about: [
				`Hello! I'm David Scicluna, a Front-end Developer based in the sunny Maltese islands. Currently working at <a href="${
					import.meta.env.VITE_TAIN_URL
				}" target="_blank">Tain</a> | <a href="${
					import.meta.env.VITE_EEZE_URL
				}" target="_blank">EEZE</a> and as a freelancer.`,
				'I am very passionate about technology; I love developing ideas into applications and am committed to creating products and services with exceptional user experience and with modern user interface techniques.',
				'I try my best to keep on learning and expanding my knowledge in this field, as I believe that the more I learn, the better the experience the end-users will have.',
				`You can find me on <a href="${
					import.meta.env.VITE_LINKEDIN_URL
				}" target="_blank">Linkedin</a>, and <a href="${
					import.meta.env.VITE_GITHUB_URL
				}" target="_blank">Github</a>, or reach out to me via email at <a href="mailto:${
					import.meta.env.VITE_EMAIL_URL
				}">hello@davidscicluna.com</a>.`
			],
			navItems: {
				'/': 'Home',
				'/about': 'About',
				'/projects': 'Projects'
			},
			projects: {
				edb: {
					title: 'The Entertainment Database (EDB)',
					short: 'EDB',
					description:
						'The Entertainment Database (EDB) is a web application that offers information related to the entertainment industry powered by themoviedb API. Such information can be anything from Movies, TV Shows, and the People that make it happen. EDB offers users the ability to view all the information, like, and save it into a list. Every piece of data found in EDB is the latest and most updated content concerning the entertainment industry, ensuring users with trustworthy content.',
					links: {
						web: 'Go To EDB',
						playground: 'Open EDB',
						git: 'Github'
					}
				},
				concentration: {
					title: 'Concentration',
					description:
						'Concentration is a card matching game. To win, the player has to match all the cards by pairing the ones that contain the same icon.',
					links: {
						web: 'Go To Concentration',
						playground: 'Open Concentration',
						git: 'Github'
					}
				},
				journal: {
					title: 'Journal',
					description:
						'Journal is a rich text editor that allows the user to write and edit notes with text, images, links & colors.',
					links: {
						web: 'Go To Journal',
						playground: 'Open Journal',
						git: 'Github'
					}
				},
				clock: {
					title: 'Clock',
					description:
						'Clock is a real-time application that allows the user to check real-time of any city around the world. One can set alarms, a stopwatch, and a timer.',
					links: {
						web: 'Go To Clock',
						playground: 'Open Clock',
						git: 'Github'
					}
				},
				weather: {
					title: 'Weather',
					description:
						'Weather is an application that allows the user to search the current weather of all cities around the world.',
					links: {
						web: 'Go To Weather',
						playground: 'Open Weather',
						git: 'Github'
					}
				},
				calculator: {
					title: 'Calculator',
					description:
						'Calculator is an application that allows the user to calculate non-scientific calculations and displays past calculations.',
					links: {
						web: 'Go To Calculator',
						playground: 'Open Calculator',
						git: 'Github'
					}
				}
			},
			skills: [
				{
					label: 'Design',
					skills: [
						'User Interface Design (UI)',
						'User Experience (UX)',
						'Responsive Web Design',
						'Branding Design'
					]
				},
				{
					label: 'Technologies',
					skills: [
						'HyperText Markup Language (HTML)',
						'Cascading Style Sheets (CSS)',
						'Syntactically Awesome Style Sheets (SASS)',
						'CSS in JS (JSS)',
						'Javascript',
						'Typescript'
					]
				},
				{
					label: 'JS Frameworks',
					skills: ['React JS', 'Vue']
				},
				{
					label: 'Libraries',
					skills: ['Chakra UI', 'Material UI (MUI)', 'Redux', 'Draft JS', 'Storybook']
				},
				{
					label: 'Testing',
					skills: ['Jest', 'Jasmine JS']
				},
				{
					label: 'Tools & Applications',
					skills: ['Git', 'Yarn', 'NPM', 'ESLint', 'Prettier', 'Figma', 'Adobe Experience Design (XD)']
				}
			]
		},
		components: {
			errorBoundary: {
				title: 'Oh no! 😭',
				subtitle:
					'Unfortunately, something went wrong when trying to render the application. Please refresh to try again!',
				console: 'Uncaught error:',
				action: 'Refresh'
			},
			logo: {
				long: 'davidscicluna',
				short: 'ds'
			}
		},
		layout: {
			scrollToTop: 'Scroll to the top',
			internationalizationModal: {
				title: 'Preferred Language',
				subtitle: 'Pick the preferred language of your choice from the list of languages below',
				languages: {
					bg: 'Bulgarian',
					cs: 'Czech',
					da: 'Danish',
					de: 'German',
					el: 'Greek',
					en: 'English',
					es: 'Spanish',
					fr: 'French',
					hr: 'Croatian',
					hu: 'Hungarian',
					it: 'Italian',
					mt: 'Maltese',
					nl: 'Dutch',
					pl: 'Polish',
					pt: 'Portuguese',
					ro: 'Romanian',
					ru: 'Russian',
					sr: 'Serbian',
					sv: 'Swedish',
					tr: 'Turkish',
					uk: 'Ukrainian'
				},
				placeholder: "Try '{{language}}'",
				cancel: 'Cancel',
				action: 'Change Language'
			},
			playgroundModal: {
				title: 'Project Title',
				subtitle: 'Project Description',
				navigation: {
					open: {
						'aria-label': {
							tooltip: 'Open Navigation (tooltip)',
							button: 'Open Navigation'
						},
						'tooltip': 'Open Navigation'
					},
					close: {
						'aria-label': {
							tooltip: 'Exit Navigation (tooltip)',
							button: 'Exit Navigation'
						},
						'tooltip': 'Exit Navigation'
					}
				},
				fullscreen: {
					open: {
						'aria-label': {
							tooltip: 'Open Fullscreen (tooltip)',
							button: 'Open Fullscreen'
						},
						'tooltip': 'Open Fullscreen'
					},
					close: {
						'aria-label': {
							tooltip: 'Exit Fullscreen (tooltip)',
							button: 'Exit Fullscreen'
						},
						'tooltip': 'Exit Fullscreen'
					}
				},
				close: {
					'aria-label': 'Close Playground',
					'tooltip': 'Close'
				},
				cancel: 'Cancel',
				action: 'Open in new tab'
			},
			contact: {
				label: 'Want to get in touch to collaborate on a project you have in mind? Click to talk!',
				action: "Let's talk"
			},
			footer: {
				copyright: '© {{year}} David Scicluna, All rights reserved.'
			},
			navigation: {
				colorModeIconButton: {
					light: {
						'aria-label': {
							tooltip: 'Switch to Dark Mode (tooltip)',
							button: 'Switch to Dark Mode'
						},
						'tooltip': 'Switch to Dark Mode'
					},
					dark: {
						'aria-label': {
							tooltip: 'Switch to Light Mode (tooltip)',
							button: 'Switch to Light Mode'
						},
						'tooltip': 'Switch to Light Mode'
					}
				},
				internationalizationIconButton: {
					'aria-label': {
						tooltip: 'Change Language (tooltip)',
						button: 'Change Language'
					},
					'tooltip': 'Change Language'
				},
				action: 'Get in Touch'
			},
			socials: {
				email: {
					'aria-label': {
						tooltip: "Send email to '{{email}}' (tooltip)",
						button: "Send email to '{{email}}'"
					},
					'tooltip': "Email: '{{email}}'"
				},
				linkedin: {
					'aria-label': {
						tooltip: 'Open Linkedin Profile Page (tooltip)',
						button: 'Open Linkedin Profile Page'
					},
					'tooltip': 'Linkedin Profile'
				},
				github: {
					'aria-label': {
						tooltip: 'Open Github Profile Page (tooltip)',
						button: 'Open Github Profile Page'
					},
					'tooltip': 'Github Profile'
				}
			}
		},
		noMatch: {
			title: 'Page not found!',
			subtitle: 'Please check the URL in the address bar and try again.',
			action1: 'Go back home',
			action2: 'Try again'
		},
		splashscreen: {
			label: 'David Scicluna • Front-End Developer',
			logo: 'davidscicluna'
		},
		home: {
			title1: "Hello! I'm David a passionate",
			title2: 'Front-End Developer',
			subtitle: 'Currently based in the sunny Maltese Islands',
			icons: {
				html: {
					'aria-label': 'HTML (tooltip)',
					'label': 'HTML'
				},
				css: {
					'aria-label': 'CSS (tooltip)',
					'label': 'CSS'
				},
				js: {
					'aria-label': 'Javascript (tooltip)',
					'label': 'Javascript'
				},
				ts: {
					'aria-label': 'Typescript (tooltip)',
					'label': 'Typescript'
				},
				react: {
					'aria-label': 'React (tooltip)',
					'label': 'React'
				}
			},
			action: 'Get in touch'
		},
		about: {
			cover: {
				banner: 'Banner',
				portrait: 'Portrait'
			},
			labels: {
				aboutMe: 'About Me',
				certifications: 'Certifications',
				experience: 'Experience',
				skills: 'Skills'
			},
			experiences: [
				{
					place: 'Tain | EEZE',
					role: 'Front-End Developer'
				},
				{
					place: 'davidscicluna.com',
					role: 'Freelance Front-End Developer'
				},
				{
					place: 'Ministry For Gozo (Office of the CIO)',
					role: 'Front-End Developer (Full-Time Apprentice)'
				},
				{
					place: 'Ministry For Gozo (Office of the CIO)',
					role: 'Front-End Developer (Full-Time Apprentice)'
				},
				{
					place: 'Ministry For Gozo (Office of the CIO)',
					role: 'IT Technical Support (Full-Time Apprentice)'
				}
			],
			certifications: {
				udacity: 'Front-End Web Developer Nanodegree',
				freecodecamp: 'Responsive Web Design Certification'
			}
		},
		project: {
			status: 'Work in progress'
		}
	}
};
