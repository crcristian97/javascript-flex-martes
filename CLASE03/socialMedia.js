export default function redirectSocialMedia(redes = ''){
    debugger
    switch(redes){
        case 'facebook':
            window.location.href = `https://www.${redes}.com/sombrearte.com.ar/`;
            break;
        case 'instagram':
            window.location.href = `https://www.${redes}.com/sombrearte.com.ar/`;
            break;
        case 'x':
            window.location.href = `https://www.${redes}.com/sombrearte.com.ar/`;
            break;
        default:
            return "te queda aca";
    }
};