import { rest } from 'msw';

export const handlers = [
    rest.get('/hello', (req, res, ctx) => {
        // res.send('helloo!');
        return res(
            ctx.delay(2000),
            ctx.status(200),
            ctx.json({
                hello: 'asdasds'
            })
        )
    })
]