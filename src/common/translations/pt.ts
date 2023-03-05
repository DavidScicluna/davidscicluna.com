export default {
	translation: {
		page: {
			title: 'David Scicluna • Portfólio',
			description:
				'Olá! Sou David Scicluna, desenvolvedor de front-end nas ilhas ensolaradas maltitas. Atualmente trabalhando na Tain | EEZE e como freelancer. Sou muito apaixonado por tecnologia; Adoro desenvolver idéias em aplicativos e estou comprometido em criar produtos e serviços com experiência excepcional do usuário e com técnicas modernas de interface do usuário. Eu tento o meu melhor para continuar aprendendo e expandindo meu conhecimento nesse campo, pois acredito que quanto mais eu aprendo, melhor a experiência que os usuários finais terão. Você pode me encontrar no LinkedIn e Github, ou entrar em contato comigo por e -mail para hello@davidscicluna.com.'
		},
		common: {
			about: [
				`Olá! Sou David Scicluna, desenvolvedor de front-end nas ilhas ensolaradas maltitas. Atualmente trabalhando em <a href="${
					import.meta.env.VITE_TAIN_URL
				}" target="_blank">Tain</a> | <a href="${
					import.meta.env.VITE_EEZE_URL
				}" target="_blank">EEZE</a> e como freelancer.`,
				'Sou muito apaixonado por tecnologia; Adoro desenvolver idéias em aplicativos e estou comprometido em criar produtos e serviços com experiência excepcional do usuário e com técnicas modernas de interface do usuário.',
				'Eu tento o meu melhor para continuar aprendendo e expandindo meu conhecimento nesse campo, pois acredito que quanto mais eu aprendo, melhor a experiência que os usuários finais terão.',
				`Você pode me encontrar em <a href="${
					import.meta.env.VITE_LINKEDIN_URL
				}" target="_blank">Linkedin</a> e <a href="${
					import.meta.env.VITE_GITHUB_URL
				}" target="_blank">Github</a>, ou entre em contato comigo por e -mail em <a href="mailto:${
					import.meta.env.VITE_EMAIL_URL
				}">hello@davidscicluna.com</a>.`
			],
			navItems: { '/': 'Lar', '/about': 'Sobre', '/projects': 'Projetos' },
			projects: {
				edb: {
					title: 'O banco de dados de entretenimento (EDB)',
					short: 'Edb',
					description:
						'O Banco de Dados de Entertainment (EDB) é um aplicativo da Web que oferece informações relacionadas à indústria de entretenimento alimentada pela API Themoviedb. Essas informações podem ser qualquer coisa, desde filmes, programas de TV e pessoas que fazem isso acontecer. O EDB oferece aos usuários a capacidade de visualizar todas as informações, como e salvá -las em uma lista. Todos os dados encontrados no EDB são o conteúdo mais recente e mais atualizado sobre o setor de entretenimento, garantindo aos usuários conteúdo confiável.',
					links: { web: 'Vá para Edb', playground: 'Open EDB', git: 'Github' }
				},
				concentration: {
					title: 'Concentração',
					description:
						'A concentração é um jogo de correspondência de cartas. Para vencer, o jogador precisa combinar todas as cartas emparelhando as que contêm o mesmo ícone.',
					links: { web: 'Vá para a concentração', playground: 'Concentração aberta', git: 'Github' }
				},
				journal: {
					title: 'Diária',
					description:
						'O Journal é um editor de texto rico que permite ao usuário escrever e editar notas com texto, imagens, links e cores.',
					links: { web: 'Vá para o diário', playground: 'Jornal aberto', git: 'Github' }
				},
				clock: {
					title: 'Relógio',
					description:
						'O relógio é um aplicativo em tempo real que permite ao usuário verificar em tempo real de qualquer cidade em todo o mundo. Pode -se definir alarmes, um cronômetro e um cronômetro.',
					links: { web: 'Vá para o relógio', playground: 'Relógio aberto', git: 'Github' }
				},
				weather: {
					title: 'Clima',
					description:
						'O clima é um aplicativo que permite ao usuário pesquisar o clima atual de todas as cidades em todo o mundo.',
					links: { web: 'Vá para o tempo', playground: 'Clima aberto', git: 'Github' }
				},
				calculator: {
					title: 'Calculadora',
					description:
						'A calculadora é um aplicativo que permite ao usuário calcular cálculos não científicos e exibe cálculos passados.',
					links: { web: 'Vá para a calculadora', playground: 'Calculadora aberta', git: 'Github' }
				}
			},
			skills: [
				{
					label: 'Projeto',
					skills: [
						'Design da interface do usuário (interface do usuário)',
						'Experiência do usuário (UX)',
						'Web design responsivo',
						'Design de marca'
					]
				},
				{
					label: 'Tecnologias',
					skills: [
						'Linguagem de marcação de hipertexto (html)',
						'Folhas de estilo em cascata (CSS)',
						'Folhas de estilo sintaticamente impressionantes (SASS)',
						'CSS em JS (JSS)',
						'JavaScript',
						'TypeScript'
					]
				},
				{ label: 'Estruturas JS', skills: ['Reaja js', 'Vue'] },
				{
					label: 'Bibliotecas',
					skills: ['Ui de chakra', 'Ui material (mui)', 'Restaurada', 'Draft JS', 'Livro de histórias']
				},
				{ label: 'Teste', skills: ['Jove', 'Jasmine JS'] },
				{
					label: 'Ferramentas e aplicações',
					skills: [
						'Git',
						'Fio',
						'Npm',
						'Eslint',
						'Mais bonito',
						'Figma',
						'Projeto de experiência da Adobe (XD)'
					]
				}
			]
		},
		components: {
			errorBoundary: {
				title: 'Oh não! 😭',
				subtitle:
					'Infelizmente, algo deu errado ao tentar renderizar o aplicativo. Por favor, atualize para tentar novamente!',
				console: 'Erro não capturado:',
				action: 'Atualizar'
			},
			logo: { long: 'DavidScicluna', short: 'ds' }
		},
		layout: {
			internationalizationModal: {
				title: 'língua preferida',
				subtitle: 'Escolha o idioma preferido de sua escolha na lista de idiomas abaixo',
				languages: {
					bg: 'Búlgara',
					cs: 'Tcheca',
					da: 'dinamarquês',
					de: 'Alemã',
					el: 'Grega',
					en: 'Inglês',
					es: 'Espanhola',
					fr: 'Francesa',
					hr: 'croata',
					hu: 'Húngara',
					it: 'Italiana',
					mt: 'maltês',
					nl: 'Holandês',
					pl: 'polonês',
					pt: 'Português',
					ro: 'Romena',
					ru: 'Russa',
					sr: 'Sérvia',
					sv: 'Sueca',
					tr: 'Turca',
					uk: 'Ucraniana'
				},
				placeholder: "Tente '{{language}}'",
				cancel: 'Cancelar',
				action: 'Mudar idioma'
			},
			playgroundModal: {
				title: 'título do projeto',
				subtitle: 'Descrição do Projeto',
				navigation: {
					open: {
						'aria-label': {
							tooltip: 'Aberta de navegação (dica de ferramenta)',
							button: 'Navegação aberta'
						},
						'tooltip': 'Navegação aberta'
					},
					close: {
						'aria-label': {
							tooltip: 'Navegação de saída (dica de ferramenta)',
							button: 'Saída de navegação'
						},
						'tooltip': 'Saída de navegação'
					}
				},
				fullscreen: {
					open: {
						'aria-label': {
							tooltip: 'Abra a tela cheia (dica de ferramenta)',
							button: 'Abra a tela cheia'
						},
						'tooltip': 'Abra a tela cheia'
					},
					close: {
						'aria-label': {
							tooltip: 'Saia de tela cheia (dica de ferramenta)',
							button: 'Saia de tela cheia'
						},
						'tooltip': 'Saia de tela cheia'
					}
				},
				close: { 'aria-label': 'Fechar o playground', 'tooltip': 'Fechar' },
				cancel: 'Cancelar',
				action: 'Abrir na nova guia'
			},
			contact: {
				label: 'Quer entrar em contato para colaborar em um projeto que você tem em mente? Clique para falar!',
				action: 'Vamos conversar'
			},
			footer: { copyright: '© {{year}} David Scicluna, todos os direitos reservados.' },
			navigation: {
				colorModeIconButton: {
					light: {
						'aria-label': { tooltip: 'Mudar para o Modo Dark (ToolTip)', button: 'Mudar para o Modo Dark' },
						'tooltip': 'Mudar para o Modo Dark'
					},
					dark: {
						'aria-label': {
							tooltip: 'Mudar para o modo de luz (dica de ferramenta)',
							button: 'Mudar para o modo de luz'
						},
						'tooltip': 'Mudar para o modo de luz'
					}
				},
				internationalizationIconButton: {
					'aria-label': { tooltip: 'Alterar a linguagem (ToolTip)', button: 'Mudar idioma' },
					'tooltip': 'Mudar idioma'
				},
				action: 'Entrar em contato'
			},
			socials: {
				email: {
					'aria-label': {
						tooltip: "Envie email para '{{email}}' (ToolTip)",
						button: "Envie email para '{{email}}'"
					},
					'tooltip': "E -mail: '{{email}}'"
				},
				linkedin: {
					'aria-label': {
						tooltip: 'Página de perfil do Open LinkedIn (ToolTip)',
						button: 'Página de perfil do LinkedIn aberto'
					},
					'tooltip': 'Perfil do linkedIn'
				},
				github: {
					'aria-label': {
						tooltip: 'Abra a página de perfil do GitHub (dica de ferramenta)',
						button: 'Página de perfil do GitHub abrir'
					},
					'tooltip': 'Perfil do GitHub'
				}
			}
		},
		noMatch: {
			title: 'Página não encontrada!',
			subtitle: 'Verifique o URL na barra de endereços e tente novamente.',
			action1: 'Volto para casa',
			action2: 'Tente novamente'
		},
		splashscreen: { label: 'David Scicluna • Desenvolvedor de front-end', logo: 'DavidScicluna' },
		home: {
			title1: 'Olá! Eu sou um apaixonado',
			title2: 'Desenvolvedor front-end',
			subtitle: 'Atualmente sediado nas ilhas ensolaradas de Maltese',
			icons: {
				html: { 'aria-label': 'HTML (ToolTip)', 'label': 'Html' },
				css: { 'aria-label': 'CSS (dica de ferramenta)', 'label': 'CSS' },
				js: { 'aria-label': 'JavaScript (ToolTip)', 'label': 'JavaScript' },
				ts: { 'aria-label': 'TypeScript (ToolTip)', 'label': 'TypeScript' },
				react: { 'aria-label': 'Reação (dica de ferramenta)', 'label': 'Reagir' }
			},
			action: 'Entrar em contato'
		},
		about: {
			cover: {
				banner: 'Bandeira',
				portrait: 'Retrato'
			},
			labels: {
				aboutMe: 'Sobre mim',
				certifications: 'Certificações',
				experience: 'Experiência',
				skills: 'Habilidades'
			},
			experiences: [
				{ place: 'Tain | EEZE', role: 'Desenvolvedor front-end' },
				{ place: 'davidscicluna.com', role: 'Desenvolvedor de front-end freelance' },
				{
					place: 'Ministério para Gozo (Escritório do CIO)',
					role: 'Desenvolvedor de front-end (aprendiz de tempo integral)'
				},
				{
					place: 'Ministério para Gozo (Escritório do CIO)',
					role: 'Desenvolvedor de front-end (aprendiz de tempo integral)'
				},
				{
					place: 'Ministério para Gozo (Escritório do CIO)',
					role: 'Suporte técnico de TI (aprendiz de tempo integral)'
				}
			],
			certifications: {
				udacity: 'Nanodegree do desenvolvedor da web front-end',
				freecodecamp: 'Certificação responsiva da web design'
			}
		}
	}
};
