describe ('Plane', function(){



// Arrange
  it ('must create a plane',  function() {
    plane = new Plane
  });

  it ("the plane must be able to land", function () {
    plane = new Plane
    expect(plane.land()).toBe(true)
  });

  it ("the plane must be able to takeoff", function () {
    plane = new Plane
    expect(plane.takeoff()).toBe(true)
  });

//   it "the plane must be able to receive the message to takeoff" do
//     plane = Plane.new
//     weather = Weather.new
//     expect(plane.takeoff(weather.stormy?)).to eq true
//   end
//
//   it "the plane must confirm it is in the air after takeoff" do
//     plane = Plane.new
//     weather = Weather.new
//     expect(plane.takeoff(weather.stormy?)).to eq true
//   end
//
//   it "must not take off if weather status is stormy " do
//     plane = Plane.new
//     weather = Weather.new("Stormy")
//     expect(plane.takeoff(weather.stormy?)).to eq false
//   end
//
//   it "must not land if weather status is stormy " do
//     plane = Plane.new
//     weather = Weather.new("Stormy")
//     expect(plane.land(weather.stormy?)).to eq false
//   end
//
//   it "must not land if airport is full " do
//     plane = Plane.new
//     full = true
//     airport = Airport.new(full)
//     expect(plane.land(airport.full?)).to eq false
//   end

});
