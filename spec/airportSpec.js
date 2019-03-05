describe ('Airport', function(){

// Arrange
  it ('must create a airport object, default is not null',function() {
    airport = new Airport();
});
  it ("must be able to change the capacity ", function () {
    airport = new Airport()
    expect(airport.setCapacity(1000)).toBe("Airport capacity is now 1000")
  


  })
});
