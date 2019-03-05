describe ('Plane', function(){



// Arrange
  it ('must create a plane',  function() {
    plane = new Plane
  });

  it ("the plane must be able to land", function () {
    plane = new Plane
    airport = new Airport(false)
    expect(plane.land(airport)).toBe(true)
  });

  it ("the plane must be able to takeoff", function () {
    plane = new Plane
    airport = new Airport(false)
    expect(plane.takeoff(airport)).toBe(true)
  });

  it ("must not land if airport is full ", function() {
    plane = new Plane
    airport = new Airport(true)
    expect(plane.land(airport)).toBe(false)
  });

//   it "must not land if airport is full " do
//     plane = Plane.new
//     full = true
//     airport = Airport.new(full)
//     expect(plane.land(airport.full?)).to eq false
//   end

});
