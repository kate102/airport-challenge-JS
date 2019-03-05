// This is the airport class

function Airport() {
  this.capacity = 50
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
