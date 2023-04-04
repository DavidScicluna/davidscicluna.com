/* eslint-disable import/default */
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';
import relativeTime from 'dayjs/plugin/relativeTime';

import i18n from './i18n';

import 'dayjs/locale/bg';
import 'dayjs/locale/cs';
import 'dayjs/locale/da';
import 'dayjs/locale/de';
import 'dayjs/locale/el';
import 'dayjs/locale/en';
import 'dayjs/locale/es';
import 'dayjs/locale/fr';
import 'dayjs/locale/hr';
import 'dayjs/locale/hu';
import 'dayjs/locale/it';
import 'dayjs/locale/mt';
import 'dayjs/locale/nl';
import 'dayjs/locale/pl';
import 'dayjs/locale/pt';
import 'dayjs/locale/ro';
import 'dayjs/locale/ru';
import 'dayjs/locale/sr';
import 'dayjs/locale/sv';
import 'dayjs/locale/tr';
import 'dayjs/locale/uk';

dayjs.extend(duration);
dayjs.extend(relativeTime);
dayjs.locale(i18n.language);

export default dayjs;
