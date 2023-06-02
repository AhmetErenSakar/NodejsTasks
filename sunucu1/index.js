const http = require('http')

const server = http.createServer((req, res) => {

    const url = req.url;

    if (url === '/') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h1>Index Sayfasina hosgeldiniz</h1>')
    } else if (url === '/hakkimda') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h2>hakkimda sayfasina hosgeldiniz</h2>')
    } else if (url === '/iletisim') {
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h2>iletisim sayfasina hosgeldiniz</h2>')
    }
    else {
        res.write('404 sayfa yok')
    }


    res.write('merhaba');
    res.end();
});

const port = 5000;

server.listen(port, () => {
    console.log('sunucu port 5000 de ')
});
