const isNgServer = window.location.hostname === 'localhost' && window.location.port === '4200';

const BACKEND_HOST = isNgServer ? 'http://localhost:11111' : window.location.origin;

export default BACKEND_HOST;
