import {
    initBridge,
    handler,
} from 'bridge';

import { z } from 'zod';
const express = require('express')

const app = express();

const helloHandler = handler({
    body: z.object({}),
    resolve: () => {
        return "Hello worldddd"
    }
})

const router = {
    hello: helloHandler
}

const bridge = initBridge({
    routes: router
})

app.use('', bridge.expressMiddleware)

app.listen(8080, () => {
    console.log(`Server listening on port ${8080}`);
});