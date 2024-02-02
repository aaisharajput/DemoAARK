const { VITE_REACT_APP_SERVER_URL } = import.meta.env;
const serverUrl=VITE_REACT_APP_SERVER_URL;

// const serverUrl = 'http://localhost:3000';

export default function GetRoute(name) {
    return serverUrl + name;
}
