// This is the airport class

function Airport(full) {
  this.capacity = 50
  this.full = full
}

Airport.prototype.isFull = function(){
  return this.full
}

Airport.prototype.setCapacity = function(capacity) {
  this.capacity = capacity
  return "Airport capacity is now " + this.capacity
}

//   def full?
//     @full
//   end
//
// end
