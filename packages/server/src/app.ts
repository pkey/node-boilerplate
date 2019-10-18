import * as dotenv from "dotenv";
import Koa from "koa";
import koaBody from "koa-body";

import appRouter from './routers/ExampleRouter'

dotenv.config();

const app = new Koa();

const port = process.env.PORT || 3001;

app.use(koaBody());
app.use(appRouter.routes());

app.listen(port, () => console.log(`App listening on port ${port}!`));
