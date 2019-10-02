'use strict';
require("express")()
.use(require('body-parser').urlencoded({
  extended: true
}))
.post('/', function(req, res, next) {
  try{
    require('./parsers/'+req.body.target)(req.body.data).then((url)=>res.send(url));
  }catch(e){
    res.send(e);
  }
  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
})
.listen(3000, () => console.log("Running on port 3000"));
