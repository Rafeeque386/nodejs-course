const express=require('express');
const bodyParser=require('body-parser');
const promoRouter=express.Router();
promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req,res,next) => {
    res.statusCode=200;
    res.setHeader('content-type','text/plain');
    next();
})

.get((req,res,next)=>{
    res.end('will send all promotions to you')
})

.post((req,res,next) => {
    res.end('will add the promotion:'+req.body.name + 'with details'+ req.body.description);
    

  })

  .put((req,res,next) => {
    res.statusCode=403;
    res.end('put operation not work on /promotion');
    

  })
  .delete((req,res,next) => {
   
    res.end('deleting all promotions');
    

  });

  promoRouter.route('/:promoId')
.get((req,res,next)=>{
    res.end('Will send details of the promotion: ' + req.params.promoId +' to you!');
  })
  .post( (req, res, next) => {
    res.statusCode = 403;
    res.end('POST operation not supported on /promotion/'+ req.params.promoId);
  })

  .put( (req, res, next) => {
    res.write('Updating the promotion: ' + req.params.promoId + '\n');
    res.end('Will update the promotion: ' + req.body.name + 
          ' with details: ' + req.body.description);
  })

  .delete( (req, res, next) => {
    res.end('Deleting promotion: ' + req.params.promoId);
});  

module.exports=promoRouter;
