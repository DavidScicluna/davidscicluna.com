export default {
	translation: {
		page: {
			title: 'David Scicluna • Portafolio',
			description:
				'¡Hola! Soy David Scicluna, un desarrollador front-end con sede en las soleadas islas maltesas. Actualmente trabajando en Tain | EEZE y como profesional independiente. Me apasiona mucho la tecnología; Me encanta desarrollar ideas en aplicaciones y estoy comprometido a crear productos y servicios con una experiencia de usuario excepcional y con técnicas modernas de interfaz de usuario. Hago todo lo posible para seguir aprendiendo y ampliando mi conocimiento en este campo, ya que creo que cuanto más aprendo, mejor será la experiencia que tendrán los usuarios finales. Puede encontrarme en LinkedIn y GitHub, o comunicarse conmigo por correo electrónico a hello@davidscicluna.com.'
		},
		common: {
			about: [
				`¡Hola! Soy David Scicluna, un desarrollador front-end con sede en las soleadas islas maltesas. Actualmente trabajando en <a href="${process.env.GATSBY_TAIN_URL}" target="_blank">Tain</a> | <a href="${process.env.GATSBY_EEZE_URL}" target="_blank">EEZE</a> y como freelancer.`,
				'Me apasiona mucho la tecnología; Me encanta desarrollar ideas en aplicaciones y estoy comprometido a crear productos y servicios con una experiencia de usuario excepcional y con técnicas modernas de interfaz de usuario.',
				'Hago todo lo posible para seguir aprendiendo y ampliando mi conocimiento en este campo, ya que creo que cuanto más aprendo, mejor será la experiencia que tendrán los usuarios finales.',
				`Puedes encontrarme en <a href="${process.env.GATSBY_LINKEDIN_URL}" target="_blank">Linkedin</a>, y <a href="${process.env.GATSBY_GITHUB_URL}" target="_blank">Github</a>, o comuníquese conmigo por correo electrónico en <a href="mailto:${process.env.GATSBY_EMAIL_URL}">hello@davidscicluna.com</a>.`
			],
			navItems: { '/': 'Hogar', '/about': 'Acerca de', '/projects': 'Proyectos' },
			projects: {
				edb: {
					title: 'La base de datos de entretenimiento (EDB)',
					short: 'EDB',
					description:
						'La base de datos de entretenimiento (EDB) es una aplicación web que ofrece información relacionada con la industria del entretenimiento impulsada por la API de Themoviedb. Dicha información puede ser cualquier cosa, desde películas, programas de televisión y las personas que lo hacen posible. EDB ofrece a los usuarios la capacidad de ver toda la información, como, y guardarla en una lista. Cada datos que se encuentran en EDB es el contenido último y más actualizado con respecto a la industria del entretenimiento, asegurando a los usuarios con contenido confiable.',
					links: { web: 'Ir a edb', playground: 'EDB abierto', git: 'Github' }
				},
				concentration: {
					title: 'Concentración',
					description:
						'La concentración es un juego de emparejamiento de cartas. Para ganar, el jugador tiene que igualar todas las cartas emparejando las que contienen el mismo icono.',
					links: { web: 'Ir a la concentración', playground: 'Concentración abierta', git: 'Github' }
				},
				journal: {
					title: 'Diario',
					description:
						'Journal es un editor de texto rico que permite al usuario escribir y editar notas con texto, imágenes, enlaces y colores.',
					links: { web: 'Ir al diario', playground: 'Diario abierto', git: 'Github' }
				},
				clock: {
					title: 'Reloj',
					description:
						'Clock es una aplicación en tiempo real que permite al usuario verificar en tiempo real de cualquier ciudad de todo el mundo. Uno puede establecer alarmas, un cronómetro y un temporizador.',
					links: { web: 'Ir al reloj', playground: 'Reloj abierto', git: 'Github' }
				},
				weather: {
					title: 'Clima',
					description:
						'El clima es una aplicación que permite al usuario buscar el clima actual de todas las ciudades de todo el mundo.',
					links: { web: 'Ir al clima', playground: 'Clima de apertura', git: 'Github' }
				},
				calculator: {
					title: 'Calculadora',
					description:
						'La calculadora es una aplicación que permite al usuario calcular los cálculos no científicos y muestra los cálculos pasados.',
					links: { web: 'Ir a la calculadora', playground: 'Calculadora abierta', git: 'Github' }
				}
			},
			skills: [
				{
					label: 'Diseño',
					skills: [
						'Diseño de interfaz de usuario (UI)',
						'Experiencia de usuario (UX)',
						'Diseño web adaptable',
						'Diseño de marca'
					]
				},
				{
					label: 'Tecnologías',
					skills: [
						'Lenguaje de marcado de hipertexto (HTML)',
						'Hojas de estilo en cascada (CSS)',
						'Hojas de estilo sintácticamente impresionantes (SASS)',
						'CSS en JS (JSS)',
						'Javascript',
						'Mecanografiada'
					]
				},
				{ label: 'Marcos JS', skills: ['Reaccionar js', 'Vue'] },
				{
					label: 'Bibliotecas',
					skills: ['Chakra ui', 'Material ui (mui)', 'Redux', 'Borrador de JS', 'Libro de cuentos']
				},
				{ label: 'Pruebas', skills: ['Broma', 'Jasmine JS'] },
				{
					label: 'Herramientas y aplicaciones',
					skills: [
						'Git',
						'Hilo',
						'Npm',
						'Eslint',
						'Más bonito',
						'Figma',
						'Diseño de experiencia de Adobe (XD)'
					]
				}
			]
		},
		components: {
			errorBoundary: {
				title: '¡Oh, no! 😭',
				subtitle:
					'Desafortunadamente, algo salió mal al intentar representar la aplicación. ¡Por favor recarga para intentar de nuevo!',
				console: 'Error no abierto:',
				action: 'Actualizar'
			},
			logo: { long: 'Davidscicluna', short: 'ds' }
		},
		layout: {
			scrollToTop: 'Desplácese hasta la parte superior',
			internationalizationModal: {
				title: 'Idioma preferido',
				subtitle: 'Elija el idioma preferido de su elección de la lista de idiomas a continuación',
				empty: {
					title: 'No se encontraron idiomas',
					subtitle: 'No se encontraron idiomas con la consulta "{{query}}"',
					action: 'Borrar búsqueda'
				},
				languages: {
					bg: 'Búlgara',
					cs: 'Checa',
					da: 'Danesa',
					de: 'Alemana',
					el: 'Griega',
					en: 'Inglesa',
					es: 'Española',
					fr: 'Francesa',
					hr: 'croata',
					hu: 'Húngara',
					it: 'Italiana',
					mt: 'Maltesa',
					nl: 'Holandesa',
					pl: 'Polaca',
					pt: 'Portuguesa',
					ro: 'Rumana',
					ru: 'Rusa',
					sr: 'Serbia',
					sv: 'Sueca',
					tr: 'Turca',
					uk: 'Ucrania'
				},
				placeholder: "Prueba '{{language}}'",
				cancel: 'Cancelar',
				action: 'Cambiar idioma'
			},
			playgroundModal: {
				title: 'Título del Proyecto',
				subtitle: 'Descripción del Proyecto',
				navigation: {
					open: {
						'aria-label': {
							tooltip: 'Abra la navegación (información sobre herramientas)',
							button: 'Navegación abierta'
						},
						'tooltip': 'Navegación abierta'
					},
					close: {
						'aria-label': { tooltip: 'Salir de navegación (Insideos)', button: 'Navegación de salida' },
						'tooltip': 'Navegación de salida'
					}
				},
				fullscreen: {
					open: {
						'aria-label': { tooltip: 'Abra Fullscreen (ToolTip)', button: 'Abierto de pantalla completa' },
						'tooltip': 'Abierto de pantalla completa'
					},
					close: {
						'aria-label': { tooltip: 'Salir Fullscreen (ToolTip)', button: 'Salir de pantalla completa' },
						'tooltip': 'Salir de pantalla completa'
					}
				},
				close: { 'aria-label': 'Cerrar el patio de recreo', 'tooltip': 'Cerca' },
				error: {
					title: 'La aplicación no se pudo cargar',
					subtitle: 'Desafortunadamente, algo salió mal al intentar cargar {{project}}',
					project: 'proyecto',
					action: 'Cerca'
				},
				cancel: 'Cancelar',
				action: 'Abrir en una pestaña nueva'
			},
			contact: {
				label: '¿Quieres ponerse en contacto para colaborar en un proyecto que tienes en mente? ¡Haga clic para hablar!',
				action: 'Hablemos'
			},
			footer: { copyright: '© {{year}} David Scicluna, todos los derechos reservados.' },
			navigation: {
				colorModeIconButton: {
					light: {
						'aria-label': {
							tooltip: 'Cambiar al modo oscuro (información sobre herramientas)',
							button: 'Cambiar al modo oscuro'
						},
						'tooltip': 'Cambiar al modo oscuro'
					},
					dark: {
						'aria-label': {
							tooltip: 'Cambiar al modo de luz (información sobre herramientas)',
							button: 'Cambiar al modo de luz'
						},
						'tooltip': 'Cambiar al modo de luz'
					}
				},
				internationalizationIconButton: {
					'aria-label': {
						tooltip: 'Cambiar el idioma (información sobre herramientas)',
						button: 'Cambiar idioma'
					},
					'tooltip': 'Cambiar idioma'
				},
				action: 'Ponerse en contacto'
			},
			socials: {
				email: {
					'aria-label': {
						tooltip: "Enviar correo electrónico a '{{email}}' (ToolTip)",
						button: "Enviar correo electrónico a '{{email}}'"
					},
					'tooltip': "Correo electrónico: '{{email}}'"
				},
				linkedin: {
					'aria-label': {
						tooltip: 'Abra la página de perfil de LinkedIn (ToolTip)',
						button: 'Abra la página de perfil de LinkedIn'
					},
					'tooltip': 'Perfil de Linkedin'
				},
				github: {
					'aria-label': {
						tooltip: 'Abra la página de perfil de GitHub (información sobre herramientas)',
						button: 'Abra la página de perfil de Github'
					},
					'tooltip': 'Perfil de github'
				}
			}
		},
		noMatch: {
			title: '¡Página no encontrada!',
			subtitle: 'Consulte la URL en la barra de direcciones y vuelva a intentarlo.',
			action1: 'Regresar a casa',
			action2: 'Intentar otra vez'
		},
		splashscreen: { label: 'David Scicluna • Desarrollador front-end', logo: 'Davidscicluna' },
		home: {
			title1: '¡Hola! Soy David un apasionado',
			title2: 'Desarrollador frontal',
			subtitle: 'Actualmente con sede en las soleadas islas maltesas',
			icons: {
				html: { 'aria-label': 'HTML (ToolTip)', 'label': 'Html' },
				css: { 'aria-label': 'CSS (ToolTip)', 'label': 'CSS' },
				js: { 'aria-label': 'JavaScript (ToolTip)', 'label': 'Javascript' },
				ts: { 'aria-label': 'TypeScript (ToolTip)', 'label': 'Mecanografiada' },
				react: { 'aria-label': 'Reaccionar (información sobre herramientas)', 'label': 'Reaccionar' }
			},
			action: 'Ponerse en contacto'
		},
		about: {
			cover: {
				banner: 'Bandera',
				portrait: 'Retrato'
			},
			labels: {
				aboutMe: 'Acerca de mí',
				certifications: 'Certificaciones',
				experience: 'Experiencia',
				skills: 'Habilidades'
			},
			experiences: [
				{ place: 'Tain | EEZE', role: 'Desarrollador frontal' },
				{ place: 'davidscicluna.com', role: 'Desarrollador front-end independiente' },
				{
					place: 'Ministerio para Gozo (Oficina del CIO)',
					role: 'Desarrollador front-end (aprendiz de tiempo completo)'
				},
				{
					place: 'Ministerio para Gozo (Oficina del CIO)',
					role: 'Desarrollador front-end (aprendiz de tiempo completo)'
				},
				{
					place: 'Ministerio para Gozo (Oficina del CIO)',
					role: 'Soporte técnico de TI (aprendiz de tiempo completo)'
				}
			],
			certifications: {
				udacity: 'Desarrollador web delantero Nanodegree',
				freecodecamp: 'Certificación de diseño web receptivo'
			}
		},
		project: {
			status: 'Work in progress'
		}
	}
};
