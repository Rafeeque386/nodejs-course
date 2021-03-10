const express=require('express');
const bodyParser=require('body-parser');
const dishRouter=express.Router();
dishRouter.use(bodyParser.json());

dishRouter.route('/')
.all((req,res,next) => {
    res.statusCode=200;
    res.setHeader('content-type','text/plain');
    next();
  })
  
    .get((req,res,next) => {
      res.end('will send all dishes to you');
  
  
    })
    .post((req,res,next) => {
      res.end('will add the dish:'+req.body.name + 'with details'+ req.body.description);
      
  
    })
  
    .put((req,res,next) => {
      res.statusCode=403;
      res.end('put operation not work on /dishes');
      
  
    })
    .delete((req,res,next) => {
     
      res.end('deleting all dishes');
      
  
    });
  
  /* app.get('/dishes/:dishId',(req,res,next)=>{
      res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
    });
    app.post('/dishes/:dishId', (req, res, next) => {
      res.statusCode = 403;
      res.end('POST operation not supported on /dishes/'+ req.params.dishId);
    });
  
    app.put('/dishes/:dishId', (req, res, next) => {
      res.write('Updating the dish: ' + req.params.dishId + '\n');
      res.end('Will update the dish: ' + req.body.name + 
            ' with details: ' + req.body.description);
    });
  
    app.delete('/dishes/:dishId', (req, res, next) => {
      res.end('Deleting dish: ' + req.params.dishId);
  });  
  */
  module.exports=dishRouter;