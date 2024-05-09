import { NextApiRequest, NextApiResponse } from 'next';
import authMiddleware from "./midlewares/auth.middleware";

const combineMiddlewares = (middlewares: Function[]) => {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const nextMiddleware = async (index: number) => {
      if (index < middlewares.length) {
        await middlewares[index](req, res, () => nextMiddleware(index + 1));
      }
    };

    await nextMiddleware(0);
  };
};

const middleware = combineMiddlewares([authMiddleware]);

export default middleware;