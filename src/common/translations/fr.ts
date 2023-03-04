export default {
	translation: {
		page: {
			title: 'David Scicluna • Portfolio',
			description:
				"Bonjour! Je suis David Scicluna, un développeur frontal basé dans les îles maltaises ensoleillées. Travaille actuellement chez Tain | Eeze et en tant que pigiste. Je suis très passionné par la technologie; J'adore développer des idées en applications et je suis déterminé à créer des produits et services avec une expérience utilisateur exceptionnelle et avec des techniques d'interface utilisateur modernes. Je fais de mon mieux pour continuer à apprendre et à élargir mes connaissances dans ce domaine, car je crois que plus j'en apprends, meilleure est l'expérience que les utilisateurs finaux auront. Vous pouvez me trouver sur LinkedIn et GitHub, ou contacter-moi par e-mail à hello@davidscicluna.com."
		},
		common: {
			about: [
				`Bonjour! Je suis David Scicluna, un développeur frontal basé dans les îles maltaises ensoleillées. Travaillant actuellement à <a href="${
					import.meta.env.VITE_TAIN_URL
				}" target="_blank">Tain</a> | <a href="${
					import.meta.env.VITE_EEZE_URL
				}" target="_blank">EEZE</a> et en tant que pigiste.`,
				"Je suis très passionné par la technologie; J'adore développer des idées en applications et je suis déterminé à créer des produits et services avec une expérience utilisateur exceptionnelle et avec des techniques d'interface utilisateur modernes.",
				"Je fais de mon mieux pour continuer à apprendre et à élargir mes connaissances dans ce domaine, car je crois que plus j'en apprends, meilleure est l'expérience que les utilisateurs finaux auront.",
				`Vous pouvez me trouver sur <a href="${
					import.meta.env.VITE_LINKEDIN_URL
				}" target="_blank">Linkedin</a>, et <a href="${
					import.meta.env.VITE_GITHUB_URL
				}" target="_blank">Github</a>, ou contactez-moi par e-mail à <a href="mailto:${
					import.meta.env.VITE_EMAIL_URL
				}">hello@davidscicluna.com</a>.`
			],
			navItems: { '/': 'Maison', '/about': 'À propos', '/projects': 'Projets' },
			projects: {
				edb: {
					title: 'La base de données de divertissement (EDB)',
					short: 'EDB',
					description:
						"La base de données de divertissement (EDB) est une application Web qui propose des informations liées à l'industrie du divertissement alimentée par l'API Theoviedb. De telles informations peuvent être des films, des émissions de télévision et des personnes qui y arrivent. EDB offre aux utilisateurs la possibilité de visualiser toutes les informations, et de les enregistrer dans une liste. Chaque élément de données trouvé dans EDB est le contenu le plus récent et le plus mis à jour concernant l'industrie du divertissement, assurant des utilisateurs avec du contenu digne de confiance.",
					links: { web: 'Aller à Edb', playground: 'Ouvrir EDB', git: 'Github' }
				},
				concentration: {
					title: 'Concentration',
					description:
						'La concentration est un jeu de correspondance de cartes. Pour gagner, le joueur doit faire correspondre toutes les cartes en jumelant celles qui contiennent la même icône.',
					links: { web: 'Aller à la concentration', playground: 'Concentration ouverte', git: 'Github' }
				},
				journal: {
					title: 'Journal',
					description:
						"Journal est un éditeur de texte riche qui permet à l'utilisateur d'écrire et de modifier des notes avec du texte, des images, des liens et des couleurs.",
					links: { web: 'Aller au journal', playground: 'Journal ouvert', git: 'Github' }
				},
				clock: {
					title: 'Horloge',
					description:
						"Clock est une application en temps réel qui permet à l'utilisateur de vérifier en temps réel de n'importe quelle ville du monde. On peut définir des alarmes, un chronomètre et une minuterie.",
					links: { web: "Aller à l'horloge", playground: 'Horloge ouverte', git: 'Github' }
				},
				weather: {
					title: 'Temps',
					description:
						"La météo est une application qui permet à l'utilisateur de rechercher la météo actuelle de toutes les villes du monde.",
					links: { web: 'Aller à la météo', playground: 'Temps ouvert', git: 'Github' }
				},
				calculator: {
					title: 'Calculatrice',
					description:
						"La calculatrice est une application qui permet à l'utilisateur de calculer les calculs non scientifiques et affiche des calculs passés.",
					links: { web: 'Aller à la calculatrice', playground: 'Calculatrice ouverte', git: 'Github' }
				}
			},
			skills: [
				{
					label: 'Conception',
					skills: [
						"Conception de l'interface utilisateur (UI)",
						'Expérience utilisateur (UX)',
						'Site Web adaptatif',
						'Conception de marque'
					]
				},
				{
					label: 'Les technologies',
					skills: [
						'Langue de balisage hypertexte (HTML)',
						'Feuilles de style en cascade (CSS)',
						'Feuilles de style syntaxiquement géniales (SASS)',
						'CSS dans JS (JSS)',
						'Javascrip',
						'Manuscrit'
					]
				},
				{ label: 'Frameworks js', skills: ['React js', 'Vue'] },
				{
					label: 'Bibliothèques',
					skills: ['Chakra ui', 'Ui matériel (MUI)', 'Redux', 'Draft JS', 'Livre de contes']
				},
				{ label: 'Essai', skills: ['Plaisanter', 'Jasmine JS'] },
				{
					label: 'Outils et applications',
					skills: ['Git', 'Fil', 'NPM', 'Eslint', 'Plus jolie', 'Figure', 'Adobe Experience Design (XD)']
				}
			]
		},
		components: {
			errorBoundary: {
				title: 'Oh non! 😭',
				subtitle:
					"Malheureusement, quelque chose s'est mal passé lorsque vous essayez de rendre la demande. Veuillez actualiser pour réessayer!",
				console: 'Erreur non revêtu:',
				action: 'Rafraîchir'
			},
			logo: { long: 'davidcicluna', short: 'ds' }
		},
		layout: {
			internationalizationModal: {
				title: 'langue préférée',
				subtitle: 'Choisissez la langue préférée de votre choix dans la liste des langues ci-dessous',
				languages: {
					ru: 'russe',
					de: 'Allemande',
					fr: 'Français',
					it: 'Italienne',
					en: 'Anglaise',
					es: 'Espagnole',
					pl: 'polonais',
					uk: 'Ukrainienne',
					ro: 'Roumaine',
					nl: 'Néerlandaise',
					tr: 'Turque',
					el: 'Grecque',
					hu: 'Hongroise',
					sv: 'Suédoise',
					cs: 'tchèque',
					pt: 'Portugais',
					sr: 'serbe',
					bg: 'bulgare',
					hr: 'croate',
					da: 'Danoise',
					mt: 'maltais'
				},
				placeholder: "Essayez '{{language}}'",
				cancel: 'Annuler',
				action: 'Changer de langue'
			},
			playgroundModal: {
				title: 'Titre du projet',
				subtitle: 'Description du projet',
				navigation: {
					open: {
						'aria-label': { tooltip: 'Navigation ouverte (info-bulle)', button: 'Navigation ouverte' },
						'tooltip': 'Navigation ouverte'
					},
					close: {
						'aria-label': { tooltip: 'Navigation de sortie (info-bulle)', button: 'Navigation de sortie' },
						'tooltip': 'Navigation de sortie'
					}
				},
				fullscreen: {
					open: {
						'aria-label': { tooltip: 'Open plein écran (info-bulle)', button: 'Ouvert plein écran' },
						'tooltip': 'Ouvert plein écran'
					},
					close: {
						'aria-label': {
							tooltip: 'Sortir en plein écran (Info-tools)',
							button: 'Quitter le mode plein écran'
						},
						'tooltip': 'Quitter le mode plein écran'
					}
				},
				close: { 'aria-label': 'Aire de jeux fermer', 'tooltip': 'Fermer' },
				cancel: 'Annuler',
				action: 'Ouvrir dans un nouvel onglet'
			},
			contact: {
				label: 'Vous voulez nous contacter pour collaborer sur un projet que vous avez en tête? Cliquez pour parler!',
				action: 'Parlons'
			},
			footer: { copyright: '© {{year}} David Scicluna, tous droits réservés.' },
			navigation: {
				colorModeIconButton: {
					light: {
						'aria-label': {
							tooltip: 'Passer en mode sombre (info-bulle)',
							button: 'Passer en mode sombre'
						},
						'tooltip': 'Passer en mode sombre'
					},
					dark: {
						'aria-label': {
							tooltip: 'Passer en mode lumière (info-bulle)',
							button: 'Passer en mode lumière'
						},
						'tooltip': 'Passer en mode lumière'
					}
				},
				internationalizationIconButton: {
					'aria-label': { tooltip: 'Changer la langue (info-bulle)', button: 'Changer de langue' },
					'tooltip': 'Changer de langue'
				},
				action: 'Entrer en contact'
			},
			socials: {
				email: {
					'aria-label': {
						tooltip: "Envoyer un e-mail à '{{email}}' (Info-tool",
						button: "Envoyer un e-mail à '{{email}}'"
					},
					'tooltip': "Email: '{{email}}'"
				},
				linkedin: {
					'aria-label': {
						tooltip: 'Ouvrir la page de profil LinkedIn (Info-topp)',
						button: 'Ouvrir la page de profil LinkedIn'
					},
					'tooltip': 'Profil LinkedIn'
				},
				github: {
					'aria-label': {
						tooltip: 'Ouvrir la page du profil GitHub (Info-toal)',
						button: 'Page de profil GitHub ouvrir'
					},
					'tooltip': 'Profil GitHub'
				}
			}
		},
		noMatch: {
			title: 'Page non trouvée!',
			subtitle: "Veuillez vérifier l'URL dans la barre d'adresse et réessayer.",
			action1: 'Rentrer à la maison',
			action2: 'Essayer à nouveau'
		},
		splashscreen: { label: 'David Scicluna • Développeur frontal', logo: 'davidcicluna' },
		home: {
			title1: 'Bonjour! Je suis David un passionné',
			title2: 'Développeur frontal',
			subtitle: 'Actuellement basé dans les îles maltaises ensoleillées',
			icons: {
				html: { 'aria-label': 'HTML (Info)', 'label': 'Html' },
				css: { 'aria-label': 'CSS (info-bulle)', 'label': 'CSS' },
				js: { 'aria-label': 'Javascript (info-bulle)', 'label': 'Javascrip' },
				ts: { 'aria-label': 'TypeScript (info-bulle)', 'label': 'Manuscrit' },
				react: { 'aria-label': 'React (info-bulle)', 'label': 'Réagir' }
			},
			action: 'Entrer en contact'
		},
		about: {
			experiences: [
				{ place: 'Tain | Eeze', role: 'Développeur frontal' },
				{ place: 'davidscicluna.com', role: 'Développeur front-end indépendant' },
				{ place: 'Ministère de Gozo (Bureau du CIO)', role: 'Développeur frontal (apprenti à temps plein)' },
				{ place: 'Ministère de Gozo (Bureau du CIO)', role: 'Développeur frontal (apprenti à temps plein)' },
				{
					place: 'Ministère de Gozo (Bureau du CIO)',
					role: 'Assistance technique informatique (apprenti à temps plein)'
				}
			],
			certifications: {
				udacity: 'Développeur Web frontal Nanodegree',
				freecodecamp: 'Certification de conception Web réactive'
			}
		}
	}
};
