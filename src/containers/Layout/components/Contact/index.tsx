import { FC } from 'react';

import { useTheme, Button } from '@davidscicluna/component-library';

import { useMediaQuery, useBoolean, VStack, Text } from '@chakra-ui/react';

import { dataAttr } from '@chakra-ui/utils';
import { useTranslation } from 'react-i18next';

import { useSpacing, useUserTheme } from '../../../../common/hooks';
import { HoveringOverlay, MailOverlay } from '../../../../components';

import useStyles from './common/styles';

const Contact: FC = () => {
	const theme = useTheme();
	const { color, colorMode } = useUserTheme();

	const [isSm] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const [isMd] = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

	const spacing = useSpacing();

	const { t } = useTranslation();

	const style = useStyles({ theme, color, colorMode });

	const [isActive, setIsActive] = useBoolean();

	return (
		<MailOverlay>
			<HoveringOverlay>
				{(isHovering) => (
					<VStack
						data-active={dataAttr(isHovering && isActive)}
						width='100%'
						height={['75vh', '50vh']}
						cursor='pointer'
						alignItems='center'
						justifyContent='center'
						onMouseDown={() => setIsActive.on()}
						onMouseUp={() => setIsActive.off()}
						onMouseLeave={() => setIsActive.off()}
						spacing={spacing}
						p={spacing}
						sx={style.contact}
						_hover={isHovering ? style.hover : {}}
						_active={isHovering && isActive ? style.active : {}}
					>
						<Text
							align='center'
							fontSize={['2xl', '2xl', '3xl', '3xl', '4xl', '4xl']}
							fontWeight='semibold'
							lineHeight='shorter'
							userSelect='none'
							textTransform='uppercase'
						>
							{`${t('layout.contact.label')}`}
						</Text>

						<Button
							color={color}
							colorMode={colorMode}
							isActive={isActive}
							size={isSm ? 'md' : isMd ? 'lg' : 'xl'}
						>
							{`${t('layout.contact.action')}`}
						</Button>
					</VStack>
				)}
			</HoveringOverlay>
		</MailOverlay>
	);
};

export default Contact;
