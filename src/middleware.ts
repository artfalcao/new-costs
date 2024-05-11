import { authMiddleware } from './midlewares/auth.middleware';
import stackMiddlewares from './midlewares/stackHandler';

const middlewares = [authMiddleware];
export default stackMiddlewares(middlewares);