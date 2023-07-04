import Meta from '@/components/Meta';
import Layout from '@/containers/Layout';
import Providers from '@/containers/Providers';
// TODO: Extract all type imports to be like ↓
import type { AppProps } from 'next/app';

// Importing Main Fonts (Raleway)
import '@fontsource/raleway/700.css';
import '@fontsource/raleway/700-italic.css';
// Importing Main Fonts (Work Sans)
import '@fontsource/work-sans/100.css';
import '@fontsource/work-sans/100-italic.css';
import '@fontsource/work-sans/200.css';
import '@fontsource/work-sans/200-italic.css';
import '@fontsource/work-sans/300.css';
import '@fontsource/work-sans/300-italic.css';
import '@fontsource/work-sans/400.css';
import '@fontsource/work-sans/400-italic.css';
import '@fontsource/work-sans/500.css';
import '@fontsource/work-sans/500-italic.css';
import '@fontsource/work-sans/600.css';
import '@fontsource/work-sans/600-italic.css';
import '@fontsource/work-sans/700.css';
import '@fontsource/work-sans/700-italic.css';
import '@fontsource/work-sans/800.css';
import '@fontsource/work-sans/800-italic.css';
import '@fontsource/work-sans/900.css';
import '@fontsource/work-sans/900-italic.css';
// Importing Main Fonts (Roboto Slab)
import '@fontsource/roboto-slab/100.css';
import '@fontsource/roboto-slab/200.css';
import '@fontsource/roboto-slab/300.css';
import '@fontsource/roboto-slab/400.css';
import '@fontsource/roboto-slab/500.css';
import '@fontsource/roboto-slab/600.css';
import '@fontsource/roboto-slab/700.css';
import '@fontsource/roboto-slab/800.css';
import '@fontsource/roboto-slab/900.css';
// Importing Main Fonts (Roboto Mono)
import '@fontsource/roboto-mono/100.css';
import '@fontsource/roboto-mono/100-italic.css';
import '@fontsource/roboto-mono/200.css';
import '@fontsource/roboto-mono/200-italic.css';
import '@fontsource/roboto-mono/300.css';
import '@fontsource/roboto-mono/300-italic.css';
import '@fontsource/roboto-mono/400.css';
import '@fontsource/roboto-mono/400-italic.css';
import '@fontsource/roboto-mono/500.css';
import '@fontsource/roboto-mono/500-italic.css';
import '@fontsource/roboto-mono/600.css';
import '@fontsource/roboto-mono/600-italic.css';
import '@fontsource/roboto-mono/700.css';
import '@fontsource/roboto-mono/700-italic.css';

// Importing Material UI Icons
import '@fontsource/material-icons';
import '@fontsource/material-icons-outlined';

const AppPage = ({ Component, pageProps }: AppProps) => {
	return (
		<Providers {...pageProps}>
			<Meta />
			<main>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</main>
		</Providers>
	);
};

export default AppPage;
