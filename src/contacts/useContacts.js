import { useIntl } from 'react-intl';

export function useContacts() {
    const intl = useIntl();
    const rows = intl.messages['contactSection'];

    return {
        rows,
    };
}
