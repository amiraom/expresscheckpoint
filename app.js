
const express =require('express');
const app =express();

const myLogger = function (req, res, next) {
  var date = new Date();
 
  if(date.getDay() < 5 && date.getHours() > 9 && date.getHours() < 17){
   
      next();
  }else{
      res.redirect('/offlinepage');
  }
   
}
app.use(myLogger);
const port=5000;
app.set('views','./views')
app.set('view engine','pug')
app.get('/first', function(req, res){
   res.render('first_view');
});
app.get('/home', function(req, res){
  res.render('home');
});
app.get('/contact', function(req, res){
  res.render('contact');
});
app.get('/service', function(req, res){
  res.render('our-services');
});
app.get('/offlinepage', function(req, res){
  res.render('offlinepage');
});
app.listen(port,()=>{
  console.log('server runnig with success');
})
