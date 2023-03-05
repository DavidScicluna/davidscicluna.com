export default {
	translation: {
		page: {
			title: 'David Scicluna • Χαρτοφυλάκιο',
			description:
				'Γειά σου! Είμαι ο David Scicluna, ένας προγραμματιστής front-end με έδρα τα ηλιόλουστα νησιά της Μάλτας. Αυτή τη στιγμή εργάζεται στο Tain | EEZE και ως ελεύθερος επαγγελματίας. Είμαι πολύ παθιασμένος με την τεχνολογία. Λατρεύω την ανάπτυξη ιδεών σε εφαρμογές και είμαι δεσμευμένος στη δημιουργία προϊόντων και υπηρεσιών με εξαιρετική εμπειρία χρήστη και με σύγχρονες τεχνικές διεπαφής χρήστη. Προσπαθώ να συνεχίσω να μαθαίνω και να επεκτείνω τις γνώσεις μου σε αυτόν τον τομέα, καθώς πιστεύω ότι όσο περισσότερο μαθαίνω, τόσο καλύτερη είναι η εμπειρία που θα έχουν οι τελικοί χρήστες. Μπορείτε να με βρείτε στο LinkedIn και GitHub, ή να απευθυνθείτε σε μένα μέσω ηλεκτρονικού ταχυδρομείου στο hello@davidscicluna.com.'
		},
		common: {
			about: [
				`Γειά σου! Είμαι ο David Scicluna, ένας προγραμματιστής front-end με έδρα τα ηλιόλουστα νησιά της Μάλτας. Αυτή τη στιγμή λειτουργεί σε <a href="${
					import.meta.env.VITE_TAIN_URL
				}" target="_blank">Tain</a> | <a href="${
					import.meta.env.VITE_EEZE_URL
				}" target="_blank">EEZE</a> Και ως ελεύθερος επαγγελματίας.`,
				'Είμαι πολύ παθιασμένος με την τεχνολογία. Λατρεύω την ανάπτυξη ιδεών σε εφαρμογές και είμαι δεσμευμένος στη δημιουργία προϊόντων και υπηρεσιών με εξαιρετική εμπειρία χρήστη και με σύγχρονες τεχνικές διεπαφής χρήστη.',
				'Προσπαθώ να συνεχίσω να μαθαίνω και να επεκτείνω τις γνώσεις μου σε αυτόν τον τομέα, καθώς πιστεύω ότι όσο περισσότερο μαθαίνω, τόσο καλύτερη είναι η εμπειρία που θα έχουν οι τελικοί χρήστες.',
				`Μπορείτε να με βρείτε στο <a href="${
					import.meta.env.VITE_LINKEDIN_URL
				}" target="_blank">Linkedin</a>, Και <a href="${
					import.meta.env.VITE_GITHUB_URL
				}" target="_blank">Github</a>, ή επικοινωνήστε μαζί μου μέσω ηλεκτρονικού ταχυδρομείου σε <a href="mailto:${
					import.meta.env.VITE_EMAIL_URL
				}">hello@davidscicluna.com</a>.`
			],
			navItems: { '/': 'Σπίτι', '/about': 'Σχετικά με', '/projects': 'Εργα' },
			projects: {
				edb: {
					title: 'Η βάση δεδομένων ψυχαγωγίας (EDB)',
					short: 'EDB',
					description:
						'Η βάση δεδομένων ψυχαγωγίας (EDB) είναι μια εφαρμογή ιστού που προσφέρει πληροφορίες σχετικά με τη βιομηχανία ψυχαγωγίας που υποστηρίζεται από το API ThemoVIEDB. Τέτοιες πληροφορίες μπορεί να είναι οτιδήποτε από ταινίες, τηλεοπτικές εκπομπές και ανθρώπους που το κάνουν να συμβεί. Η EDB προσφέρει στους χρήστες τη δυνατότητα να βλέπουν όλες τις πληροφορίες, όπως και να το αποθηκεύσουν σε μια λίστα. Κάθε κομμάτι δεδομένων που βρίσκεται στο EDB είναι το τελευταίο και πιο ενημερωμένο περιεχόμενο σχετικά με τη βιομηχανία ψυχαγωγίας, εξασφαλίζοντας στους χρήστες με αξιόπιστο περιεχόμενο.',
					links: { web: 'Πηγαίνετε στο EDB', playground: 'Άνοιγμα EDB', git: 'Github' }
				},
				concentration: {
					title: 'Συγκέντρωση',
					description:
						'Η συγκέντρωση είναι ένα παιχνίδι που ταιριάζει με κάρτα. Για να κερδίσει, ο παίκτης πρέπει να ταιριάζει με όλες τις κάρτες συνδυάζοντας αυτά που περιέχουν το ίδιο εικονίδιο.',
					links: { web: 'Μεταβείτε στη συγκέντρωση', playground: 'Ανοικτή συγκέντρωση', git: 'Github' }
				},
				journal: {
					title: 'Εφημερίδα',
					description:
						'Το περιοδικό είναι ένας πλούσιος επεξεργαστής κειμένου που επιτρέπει στον χρήστη να γράφει και να επεξεργάζεται σημειώσεις με κείμενο, εικόνες, συνδέσμους και χρώματα.',
					links: { web: 'Πηγαίνω στο περιοδικό', playground: 'Ανοιχτό περιοδικό', git: 'Github' }
				},
				clock: {
					title: 'Ρολόι',
					description:
						'Το ρολόι είναι μια εφαρμογή σε πραγματικό χρόνο που επιτρέπει στον χρήστη να ελέγχει σε πραγματικό χρόνο οποιασδήποτε πόλης σε όλο τον κόσμο. Κάποιος μπορεί να ορίσει συναγερμούς, χρονόμετρο και χρονοδιακόπτη.',
					links: { web: 'Πηγαίνω στο ρολόι', playground: 'Ανοικτό ρολόι', git: 'Github' }
				},
				weather: {
					title: 'Καιρός',
					description:
						'Ο καιρός είναι μια εφαρμογή που επιτρέπει στον χρήστη να αναζητήσει τον τρέχοντα καιρό όλων των πόλεων σε όλο τον κόσμο.',
					links: { web: 'Πηγαίνετε στον καιρό', playground: 'Ανοικτός καιρός', git: 'Github' }
				},
				calculator: {
					title: 'Αριθμομηχανή',
					description:
						'Ο υπολογιστής είναι μια εφαρμογή που επιτρέπει στον χρήστη να υπολογίζει τους μη επιστημονικούς υπολογισμούς και εμφανίζει προηγούμενες υπολογισμούς.',
					links: { web: 'Μεταβείτε στην αριθμομηχανή', playground: 'Ανοίξτε αριθμομηχανή', git: 'Github' }
				}
			},
			skills: [
				{
					label: 'Σχέδιο',
					skills: [
						'Σχεδιασμός διεπαφής χρήστη (UI)',
						'Εμπειρία χρήστη (UX)',
						'Σχεδιασμός ιστοσελίδων προσαρμοζόμενος σε συσκευές',
						'Σχεδιασμός επωνυμίας'
					]
				},
				{
					label: 'Τεχνολογίες',
					skills: [
						'Γλώσσα σήμανσης υπερκειμένου (HTML)',
						'Φύλλα στυλ (CSS)',
						'Συντακτικά φοβερά φύλλα στυλ (SASS)',
						'CSS στο JS (JSS)',
						'Javascript',
						'Γραφή'
					]
				},
				{ label: 'Πλαίσιο JS', skills: ['React JS', 'Ατενίζω'] },
				{
					label: 'Βιβλιοθήκες',
					skills: ['Τσάκρα ui', 'Υλικό UI (MUI)', 'Ερυθρό', 'Σχέδιο JS', 'Βιβλίο ιστορίας']
				},
				{ label: 'Δοκιμασία', skills: ['Αστείο', 'Jasmine JS'] },
				{
					label: 'Εργαλεία και εφαρμογές',
					skills: ['Γελοιώνω', 'Νήμα', 'NPM', 'Eslint', 'Όμορφος', 'Φίμα', 'Adobe Experience Design (XD)']
				}
			]
		},
		components: {
			errorBoundary: {
				title: 'Ωχ όχι! 😭',
				subtitle:
					'Δυστυχώς, κάτι πήγε στραβά όταν προσπαθεί να κάνει την εφαρμογή. Ανανεώστε για να δοκιμάσετε ξανά!',
				console: 'Σφάλμα UNCHAUGHT:',
				action: 'Φρεσκάρω'
			},
			logo: { long: 'Davidscicluna', short: 'DS' }
		},
		layout: {
			internationalizationModal: {
				title: 'προτιμώμενη γλώσσα',
				subtitle: 'Επιλέξτε την προτιμώμενη γλώσσα της επιλογής σας από τη λίστα των γλωσσών παρακάτω',
				languages: {
					bg: 'Βούλγαρος',
					cs: 'Τσέχος',
					da: 'δανικός',
					de: 'Γερμανός',
					el: 'Ελληνικά',
					en: 'Αγγλικά',
					es: 'Ισπανικά',
					fr: 'γαλλική γλώσσα',
					hr: 'Κροατία',
					hu: 'ουγγρικός',
					it: 'ιταλικός',
					mt: 'μαλτέζος',
					nl: 'Ολλανδός',
					pl: 'Στίλβωση',
					pt: 'Πορτογαλικά',
					ro: 'ρουμανικός',
					ru: 'Ρωσική',
					sr: 'Σέρβος',
					sv: 'Σουηδικά',
					tr: 'τούρκικος',
					uk: 'Ουκρανός'
				},
				placeholder: "Δοκιμάστε '{{language}}'",
				cancel: 'Ματαίωση',
				action: 'Αλλαξε γλώσσα'
			},
			playgroundModal: {
				title: 'Τίτλος Εργασίας',
				subtitle: 'Περιγραφή Έργου',
				navigation: {
					open: {
						'aria-label': { tooltip: 'Άνοιξη πλοήγησης (εργαλείο)', button: 'Ανοικτή πλοήγηση' },
						'tooltip': 'Ανοικτή πλοήγηση'
					},
					close: {
						'aria-label': { tooltip: 'Έξοδος πλοήγησης (εργαλείο)', button: 'Έξοδος πλοήγησης' },
						'tooltip': 'Έξοδος πλοήγησης'
					}
				},
				fullscreen: {
					open: {
						'aria-label': { tooltip: 'Ανοίξτε την πλήρη οθόνη (εργαλείο)', button: 'Ανοίξτε πλήρη οθόνη' },
						'tooltip': 'Ανοίξτε πλήρη οθόνη'
					},
					close: {
						'aria-label': { tooltip: 'Έξοδος πλήρους οθόνης (εργαλείο)', button: 'Έξοδος πλήρους οθόνης' },
						'tooltip': 'Έξοδος πλήρους οθόνης'
					}
				},
				close: { 'aria-label': 'Κλείσιμο παιδικής χαράς', 'tooltip': 'Κλείσε' },
				cancel: 'Ματαίωση',
				action: 'Ανοίξτε σε νέα καρτέλα'
			},
			contact: {
				label: 'Θέλετε να έρθετε σε επαφή για να συνεργαστείτε σε ένα έργο που έχετε κατά νου; Κάντε κλικ για να μιλήσετε!',
				action: 'Ας μιλήσουμε'
			},
			footer: { copyright: '© {{year}} David Scicluna, όλα τα δικαιώματα διατηρούνται.' },
			navigation: {
				colorModeIconButton: {
					light: {
						'aria-label': {
							tooltip: 'Μεταβείτε σε σκοτεινή λειτουργία (εργαλείο)',
							button: 'Μεταβείτε σε σκοτεινή λειτουργία'
						},
						'tooltip': 'Μεταβείτε σε σκοτεινή λειτουργία'
					},
					dark: {
						'aria-label': {
							tooltip: 'Μεταβείτε στη λειτουργία φωτός (εργαλείο)',
							button: 'Μεταβείτε στη λειτουργία φωτός'
						},
						'tooltip': 'Μεταβείτε στη λειτουργία φωτός'
					}
				},
				internationalizationIconButton: {
					'aria-label': { tooltip: 'Αλλαγή γλώσσας (εργαλείο)', button: 'Αλλαξε γλώσσα' },
					'tooltip': 'Αλλαξε γλώσσα'
				},
				action: 'Ερχομαι σε επαφή'
			},
			socials: {
				email: {
					'aria-label': {
						tooltip: "Στείλτε email στο '{{email}}' (ToolTip)",
						button: "Στείλτε email στο '{{email}}'"
					},
					'tooltip': "Email: '{{email}}'"
				},
				linkedin: {
					'aria-label': {
						tooltip: 'Ανοίξτε τη σελίδα προφίλ LinkedIn (εργαλείο)',
						button: 'Ανοίξτε τη σελίδα προφίλ LinkedIn'
					},
					'tooltip': 'Προφίλ LinkedIn'
				},
				github: {
					'aria-label': {
						tooltip: 'Ανοίξτε τη σελίδα προφίλ GitHub (εργαλείο)',
						button: 'Ανοίξτε τη σελίδα προφίλ GitHub'
					},
					'tooltip': 'Προφίλ github'
				}
			}
		},
		noMatch: {
			title: 'Η σελίδα δεν βρέθηκε!',
			subtitle: 'Ελέγξτε τη διεύθυνση URL στη γραμμή διευθύνσεων και δοκιμάστε ξανά.',
			action1: 'Πήγαινε πίσω σπίτι',
			action2: 'Προσπάθησε ξανά'
		},
		splashscreen: { label: 'David Scicluna • Προγραμματιστής Front-end', logo: 'Davidscicluna' },
		home: {
			title1: 'Γειά σου! Είμαι ο Ντέιβιντ ένα παθιασμένο',
			title2: 'Προγραμματιστής front-end',
			subtitle: 'Επί του παρόντος με έδρα τα ηλιόλουστα νησιά της Μάλτας',
			icons: {
				html: { 'aria-label': 'HTML (εργαλειοθήκη)', 'label': 'HTML' },
				css: { 'aria-label': 'CSS (εργαλείο)', 'label': 'CSS' },
				js: { 'aria-label': 'JavaScript (εργαλείο)', 'label': 'Javascript' },
				ts: { 'aria-label': 'TypeScript (εργαλείο)', 'label': 'Γραφή' },
				react: { 'aria-label': 'React (εργαλείο)', 'label': 'Αντιδρώ' }
			},
			action: 'Ερχομαι σε επαφή'
		},
		about: {
			cover: {
				banner: 'Πανό',
				portrait: 'Πορτρέτο'
			},
			labels: {
				aboutMe: 'Σχετικά με μένα',
				certifications: 'Πιστοποιήσεις',
				experience: 'Εμπειρία',
				skills: 'Δεξιότητες'
			},
			experiences: [
				{ place: 'Tain | EEZE', role: 'Προγραμματιστής front-end' },
				{ place: 'davidscicluna.com', role: 'Ανεξάρτητος προγραμματιστής front-end' },
				{
					place: 'Υπουργείο Gozo (Γραφείο του CIO)',
					role: 'Front-end Developer (Μαθητευόμενος πλήρους απασχόλησης)'
				},
				{
					place: 'Υπουργείο Gozo (Γραφείο του CIO)',
					role: 'Front-end Developer (Μαθητευόμενος πλήρους απασχόλησης)'
				},
				{
					place: 'Υπουργείο Gozo (Γραφείο του CIO)',
					role: 'Τεχνική υποστήριξη πληροφορικής (μαθητευόμενος πλήρους απασχόλησης)'
				}
			],
			certifications: {
				udacity: 'Front-end Web Developer NanodeGree',
				freecodecamp: 'Ανταποκρινόμενη πιστοποίηση σχεδιασμού ιστοσελίδων'
			}
		}
	}
};