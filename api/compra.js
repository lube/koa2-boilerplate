import Router from 'koa-router'
import Models from '../models'
import errorUtils from '../error_utils'

let processError = errorUtils.processError

const router = new Router();

router
    .post('/compra/:id', function(ctx, next) {
        return Models.Compra.findById(ctx.params.id)
        .then(function(compra) {
            if (!compra) {
                ctx.status = 404
            } else {
                return Models.Compra.update(ctx.request.body, {where: {id: ctx.params.id}})
                .then(function(actualizadas) {
                    ctx.body = actualizadas
                })
            }
        })
        .catch(function(e){
            ctx.body = processError(e)
            ctx.status = 400
        })
    })
    .post('/compra', function(ctx, next) {
        return Models.Compra.create(ctx.request.body)
        .then(function({dataValues}) {
            ctx.body = dataValues
        })
    })
    .delete('/compra/:id', function(ctx, next) {
        return Models.Compra.destroy({
            where: {
                id: ctx.params.id
            }
        })
        .then(function(compra) {
            ctx.body = compra
        })
    })
    
export default router