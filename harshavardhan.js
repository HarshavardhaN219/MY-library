function isTouching(tom,jerry) {
    if (jerry.x - tom.x < tom.width/2 + jerry.width/2
      && tom.x - jerry.x < tom.width/2 + jerry.width/2
      && jerry.y - tom.y < tom.height/2 + jerry.height/2
      && tom.y -jerry.y < tom.height/2 + jerry.height/2) {
     return true;
  }
  else {
     return false;
  }
  
  }