var assert = {
  i: 0,
  pass:0,

  equals:function(message,results,newmsg){

    var bforall = document.createElement("div");
    bforall.id = "bforall" + this.i;
    bforall.style.height = "300px";
    bforall.style.width = "300px";
    bforall.style.border = "5px solid black";
    bforall.style.display = "inline-block";

    document.body.appendChild(bforall);

    var rg = new RedOrGreen(bforall.id);
      
      if(message === results) {
      bforall.innerHTML = newmsg;
      rg.makeGreen();
      this.pass ++;
    }

    else {
      bforall.innerHTML = newmsg;
      rg.makeRed();
    }

    this.i ++;
  }
}

var TestMyCode = {
  run:function(name, assertTest){
    this.name = name;
    assertTest(assert);
  }
}

function results () {
  var me = document.createElement("p");
  document.body.appendChild(me);
    me.innerHTML = "Number of passed tests is " + assert.pass + " out of " + assert.i;

  }