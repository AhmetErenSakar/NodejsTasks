const Koa = require('koa');
const app = new Koa();

// response
app.use(ctx => {
    const url = ctx.url
    if (url === '/') {
        ctx.body = 'Index'
    }
    if (url === '/hakkimda') {
        ctx.type = 'html'
        ctx.body = '<h1>hakkimda sayfasina hoşgeldiniz</h1>';
    }
    if (url === '/iletisim') {
        ctx.type = 'html'
        ctx.body = '<h1>iletisim sayfasina hoşgeldiniz</h1>';
    }
});



const port = 3000;
app.listen(port);