import Router from "koa-router";

import exampleController from '../controllers/ExampleController'
const router = new Router();

router.get("/", async ctx => {
  const result = exampleController.getExample();
  ctx.body = result;
});

export default router;
