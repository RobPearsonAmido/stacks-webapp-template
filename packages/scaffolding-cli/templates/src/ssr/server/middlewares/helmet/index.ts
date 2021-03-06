import { Request, Response, NextFunction } from 'express';
import Helmet from 'helmet'

const helmetGuard = Helmet({
  frameguard: {
    action: 'same-origin'
  },
//   contentSecurityPolicy: {
//     directives: {
//       defaultSrc: ["* 'unsafe-inline 'unsafe-eval'"]
//     }
//   }
})

// https://github.com/helmetjs/helmet/wiki/How-to-set-a-custom-X%E2%80%93Powered%E2%80%93By-header
export function removeXPoweredByHeader(req: Request, res: Response, next: NextFunction) {
    res.removeHeader("X-Powered-By")
    return next()
}

export { helmetGuard }
