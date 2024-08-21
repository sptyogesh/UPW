
function loadScript(url) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = url;
        script.onload = () => resolve(url);
        script.onerror = () => reject(new Error(`Script load error for ${url}`));
        document.head.appendChild(script);
    });
}

loadScript('./main.js')
    .then(url => {
        console.log(` ${url}`);
    })
    .catch(error => {
        console.error(error);
    });
