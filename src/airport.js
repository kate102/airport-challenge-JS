// This is the airport class

function Airport() {
  this.capacity = 50
}
// 
//   attr_writer :full, :capacity
//
//   def initialize(full = false)
//     @capacity = 50
//     @full = full
//   end

Airport.prototype.setCapacity = function(capacity) {
  this.capacity = capacity
  return "Airport capacity is now " + this.capacity
}

//   def capacity(capacity)
//     @capacity = capacity
//     p "Airport capacity is now #{@capacity}"
//   end
//
//   def full?
//     @full
//   end
//
// end
