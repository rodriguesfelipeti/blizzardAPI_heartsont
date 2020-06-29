import axios from 'axios';

const api = axios.create({
    baseURL: 'https://us.api.blizzard.com/hearthstone/deck/AAECAQcG%2Bwyd8AKS%2BAKggAOblAPanQMMS6IE%2Fweb8wLR9QKD%2BwKe%2BwKz%2FAL1gAOXlAOalAOSnwMA?locale=en_US&access_token=US7KXLRuO4WLtaAtzE26AHidGtGUax4FsS'
});

export default api;