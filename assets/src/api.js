import Axios from 'axios'

const axiosInstance = Axios.create({
    baseURL: ajaxurl,
    headers: {
		'X-WP-Nonce': wpQuizNonce 
	}
});

module.exports = axiosInstance;
