export default {
	translation: {
		page: {
			title: 'David Scicluna • Portföy',
			description:
				"Merhaba! Ben güneşli Malta adalarında bulunan bir ön uç geliştirici olan David Scicluna. Şu anda Tain'de çalışıyor | EEZE ve serbest çalışan olarak. Teknoloji konusunda çok tutkuluyum; Uygulamalara fikir geliştirmeyi seviyorum ve olağanüstü kullanıcı deneyimi ve modern kullanıcı arayüzü teknikleriyle ürün ve hizmetler oluşturmaya kararlıyım. Bu alandaki bilgimi öğrenmeye ve genişletmeye devam etmek için elimden geleni yapıyorum, çünkü ne kadar çok öğrenirsem, son kullanıcıların deneyimine o kadar iyi olur. Beni LinkedIn ve GitHub'da bulabilir veya hello@davidscicluna.com adresinden e -posta yoluyla bana ulaşabilirsiniz."
		},
		common: {
			about: [
				`Merhaba! Ben güneşli Malta adalarında bulunan bir ön uç geliştirici olan David Scicluna. Şu anda <a href="${
					import.meta.env.VITE_TAIN_URL
				}" target="_blank">Tain</a> | <a href="${
					import.meta.env.VITE_EEZE_URL
				}" target="_blank">EEZE</a> ve serbest çalışan olarak.`,
				'Teknoloji konusunda çok tutkuluyum; Uygulamalara fikir geliştirmeyi seviyorum ve olağanüstü kullanıcı deneyimi ve modern kullanıcı arayüzü teknikleriyle ürün ve hizmetler oluşturmaya kararlıyım.',
				'Bu alandaki bilgimi öğrenmeye ve genişletmeye devam etmek için elimden geleni yapıyorum, çünkü ne kadar çok öğrenirsem, son kullanıcıların deneyimine o kadar iyi olur.',
				`Beni <a href="${import.meta.env.VITE_LINKEDIN_URL}" target="_blank">Linkedin</a> ve <a href="${
					import.meta.env.VITE_GITHUB_URL
				}" target="_blank">Github</a> veya <a href="mailto:${
					import.meta.env.VITE_EMAIL_URL
				}">hello@davidscicluna.com</a>.`
			],
			navItems: { '/': 'Ev', '/about': 'Hakkında', '/projects': 'Projeler' },
			projects: {
				edb: {
					title: 'Eğlence Veritabanı (EDB)',
					short: 'EDB',
					description:
						"Eğlence Veritabanı (EDB), ThemoviedB API'sı tarafından desteklenen eğlence endüstrisi ile ilgili bilgiler sunan bir web uygulamasıdır. Bu tür bilgiler filmlerden, TV şovlarından ve bunu gerçekleştiren insanlardan herhangi bir şey olabilir. EDB, kullanıcılara tüm bilgileri görüntüleme ve bir listeye kaydetme olanağı sunar. EDB'de bulunan her veri parçası, eğlence endüstrisi ile ilgili en son ve en güncel içeriktir ve kullanıcıları güvenilir içeriğe sahip sağlar.",
					links: { web: "EDB'ye git", playground: "EDB'yi açık", git: 'Gitithub' }
				},
				concentration: {
					title: 'Konsantrasyon',
					description:
						'Konsantrasyon bir kart eşleştirme oyunudur. Kazanmak için, oyuncu aynı simgeyi içerenleri eşleştirerek tüm kartları eşleştirmelidir.',
					links: { web: 'Konsantrasyona Git', playground: 'Açık konsantrasyon', git: 'Gitithub' }
				},
				journal: {
					title: 'Dergi',
					description:
						'Journal, kullanıcının metin, resimler, bağlantılar ve renklerle notlar yazmasına ve düzenlemesine izin veren zengin bir metin düzenleyicisidir.',
					links: { web: 'Dergiye git', playground: 'Açık dergi', git: 'Gitithub' }
				},
				clock: {
					title: 'Saat',
					description:
						'Saat, kullanıcının dünyadaki herhangi bir şehrin gerçek zamanlı kontrol etmesini sağlayan gerçek zamanlı bir uygulamadır. Alarm, kronometre ve bir zamanlayıcı ayarlanabilir.',
					links: { web: 'Saate Git', playground: 'Açık saat', git: 'Gitithub' }
				},
				weather: {
					title: 'Hava durumu',
					description:
						'Hava durumu, kullanıcının dünyadaki tüm şehirlerin mevcut hava durumunu aramasını sağlayan bir uygulamadır.',
					links: { web: "Hava Durumu'na Git", playground: 'Açık hava', git: 'Gitithub' }
				},
				calculator: {
					title: 'Hesap makinesi',
					description:
						'Hesap makinesi, kullanıcının bilimsel olmayan hesaplamaları hesaplamasını ve geçmiş hesaplamaları göstermesini sağlayan bir uygulamadır.',
					links: { web: 'Hesap makinesine git', playground: 'Hesap Makinesi', git: 'Gitithub' }
				}
			},
			skills: [
				{
					label: 'Tasarım',
					skills: [
						'Kullanıcı Arayüz Tasarımı (UI)',
						'Kullanıcı Deneyimi (UX)',
						'Duyarlı Web Tasarımı',
						'Marka tasarımı'
					]
				},
				{
					label: 'Teknolojiler',
					skills: [
						'Köprü Metin İşaretleme Dili (HTML)',
						'Basamaklı Stil Sayfaları (CSS)',
						'Sözdizimsel harika stil sayfaları (Sass)',
						"JS'de CSS (JSS)",
						'Javascript',
						'TypeScript'
					]
				},
				{ label: 'JS çerçeveleri', skills: ['JS React', 'Vue'] },
				{
					label: 'Kütüphaneler',
					skills: ['Çakra UI', 'Malzeme kullanıcı arayüzü (MUI)', 'Redux', 'Taslak JS', 'Hikaye kitabı']
				},
				{ label: 'Test yapmak', skills: ['Alay', 'Yasemin JS'] },
				{
					label: 'Araçlar ve Uygulamalar',
					skills: ['Git', 'İplik', 'NPM', 'Esint', 'Daha güzel', 'Figür', 'Adobe Deneyim Tasarımı (XD)']
				}
			]
		},
		components: {
			errorBoundary: {
				title: 'Oh hayır! 😭',
				subtitle:
					'Ne yazık ki, uygulamayı oluşturmaya çalışırken bir şeyler ters gitti. Lütfen tekrar denemek için yenileyin!',
				console: 'Kaçınılmaz Hata:',
				action: 'Yenilemek'
			},
			logo: { long: 'Davidscicluna', short: 'ds' }
		},
		layout: {
			internationalizationModal: {
				title: 'tercih edilen dil',
				subtitle: 'Aşağıdaki diller listesinden seçtiğiniz tercih edilen dili seçin',
				languages: {
					bg: 'Bulgarca',
					cs: 'Çek',
					da: 'Danimarkalı',
					de: 'Almanca',
					el: 'Yunan',
					en: 'İngilizce',
					es: 'İspanyol',
					fr: 'Fransızca',
					hr: 'Hırvat',
					hu: 'Macarca',
					it: 'İtalyan',
					mt: 'Maltalı',
					nl: 'Flemenkçe',
					pl: 'Lehçe',
					pt: 'Portekizce',
					ro: 'Romanya',
					ru: 'Rusça',
					sr: 'Sırpça',
					sv: 'İsveççe',
					tr: 'Türkçe',
					uk: 'Ukrayna'
				},
				placeholder: "'{{language}}' dene",
				cancel: 'İptal etmek',
				action: 'Dili değiştir'
			},
			playgroundModal: {
				title: 'Proje Başlığı',
				subtitle: 'Proje Açıklaması',
				navigation: {
					open: {
						'aria-label': { tooltip: 'Açık Gezinme (Araç İpucu)', button: 'Açık navigasyon' },
						'tooltip': 'Açık navigasyon'
					},
					close: {
						'aria-label': { tooltip: 'Çıkış Gezinme (Araç İpucu)', button: 'Çıkış Gezinme' },
						'tooltip': 'Çıkış Gezinme'
					}
				},
				fullscreen: {
					open: {
						'aria-label': { tooltip: 'Tam ekran açın (araç ipucu)', button: 'Tam Ekran Aç' },
						'tooltip': 'Tam Ekran Aç'
					},
					close: {
						'aria-label': { tooltip: "FullScreen'den Çıkın (Araç İpucu)", button: 'Tam ekrandan çık' },
						'tooltip': 'Tam ekrandan çık'
					}
				},
				close: { 'aria-label': 'Kapat Oyun Alanı', 'tooltip': 'Kapalı' },
				cancel: 'İptal etmek',
				action: 'Yeni sekmede aç'
			},
			contact: {
				label: 'Aklınızdaki bir proje üzerinde işbirliği yapmak için iletişime geçmek ister misiniz? Konuşmak için tıklayın!',
				action: 'Hadi Konuşalım'
			},
			footer: { copyright: '© {{year}} David Scicluna, tüm hakları saklıdır.' },
			navigation: {
				colorModeIconButton: {
					light: {
						'aria-label': { tooltip: 'Karanlık moda geç (araç ipucu)', button: 'Karanlık moda geç' },
						'tooltip': 'Karanlık moda geç'
					},
					dark: {
						'aria-label': { tooltip: 'Işık moduna geçin (araç ipucu)', button: 'Işık moduna geç' },
						'tooltip': 'Işık moduna geç'
					}
				},
				internationalizationIconButton: {
					'aria-label': { tooltip: 'Dilini Değiştir (Araç İpucu)', button: 'Dili değiştir' },
					'tooltip': 'Dili değiştir'
				},
				action: 'Temasta olmak'
			},
			socials: {
				email: {
					'aria-label': {
						tooltip: "'{{email}}' adresine e -posta gönderin (araç ipucu)",
						button: "'{{email}}' e e -posta gönderin"
					},
					'tooltip': "E -posta: '{{email}}'"
				},
				linkedin: {
					'aria-label': {
						tooltip: 'LinkedIn Profil Sayfasını Aç (Araç İpucu)',
						button: 'LinkedIn profil sayfasını açın'
					},
					'tooltip': 'LinkedIn Profili'
				},
				github: {
					'aria-label': {
						tooltip: 'Github Profil Sayfasını Aç (Araç İpucu)',
						button: 'Github Profil Sayfasını Aç'
					},
					'tooltip': 'Github Profili'
				}
			}
		},
		noMatch: {
			title: 'Sayfa bulunamadı!',
			subtitle: "Lütfen adres çubuğundaki URL'yi kontrol edin ve tekrar deneyin.",
			action1: 'Eve geri dön',
			action2: 'Tekrar deneyin'
		},
		splashscreen: { label: 'David Scicluna • Ön uç geliştirici', logo: 'Davidscicluna' },
		home: {
			title1: 'Merhaba! Ben David Tutkulu',
			title2: 'Ön uç geliştirici',
			subtitle: 'Şu anda güneşli Malta adalarında bulunan',
			icons: {
				html: { 'aria-label': 'Html (araç ipucu)', 'label': 'HTML' },
				css: { 'aria-label': 'CSS (araç ipucu)', 'label': 'CSS' },
				js: { 'aria-label': 'JavaScript (araç ipucu)', 'label': 'Javascript' },
				ts: { 'aria-label': 'TypeScript (araç ipucu)', 'label': 'TypeScript' },
				react: { 'aria-label': 'React (araç ipucu)', 'label': 'Tepki' }
			},
			action: 'Temasta olmak'
		},
		about: {
			cover: {
				banner: 'Banner',
				portrait: 'Vesika'
			},
			labels: {
				aboutMe: 'Benim hakkımda',
				certifications: 'Sertifikalar',
				experience: 'Deneyim',
				skills: 'Yetenekler'
			},
			experiences: [
				{ place: 'Tain | EEZE', role: 'Ön uç geliştirici' },
				{ place: 'davidscicluna.com', role: 'Serbest ön uç geliştirici' },
				{ place: 'Gozo Bakanlığı (CIO Ofisi)', role: 'Ön uç geliştirici (tam zamanlı çırak)' },
				{ place: 'Gozo Bakanlığı (CIO Ofisi)', role: 'Ön uç geliştirici (tam zamanlı çırak)' },
				{ place: 'Gozo Bakanlığı (CIO Ofisi)', role: 'BT teknik desteği (tam zamanlı çırak)' }
			],
			certifications: {
				udacity: 'Ön uç web geliştiricisi Nanodegree',
				freecodecamp: 'Duyarlı Web Tasarım Sertifikasyonu'
			}
		}
	}
};
