//###################################################################
//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

// Dog Constructor & Prototype
function Dog (name, status, color, hungry, owner) {
  this.name = name;
  this.status = status;
  this.color = color;
  this.hungry = hungry;
  this.owner = owner;
}
Dog.prototype.pet = function() {
  this.status = 'happy';
};
Dog.prototype.feed = function() {
  this.hungry = false;
};
// Instances of Dog
// Needed: sadie, moonshine, atticus
const sadie = new Dog('sadie', 'normal', 'black', false);
const moonshine = new Dog('moonshine', 'normal', 'black', true);
const atticus = new Dog('atticus');

//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

// Human Constructor & Prototype
function Human (name, cool) {
  this.name = name;
  this.cool = cool;
}
Human.prototype.pet = function(dog) {
  dog.pet();
};
Human.prototype.feed = function(dog) {
  dog.feed();
};

// Instances of Human
// Needed: mason, julia
const mason = new Human('mason', false);
const julia = new Human('julia', true);
