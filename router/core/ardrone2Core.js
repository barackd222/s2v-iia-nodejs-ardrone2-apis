var arDrone = require('ar-drone');
var client = arDrone.createClient();


var takeOffStayLand = function (command) {

    console.log("Inside Command takeOffStayLand");


    client.takeoff();

    /*
        client
            .after(3000, function () {
                this.clockwise(0.5);
            })
            .after(2000, function () {
                this.stop();
                this.land();
            });
    */
    client.after(5000, function () {
        this.stop();
        this.land();
    });

}

var longTakeOffStayLand = function (command) {

    console.log("Inside Command longTakeOffStayLand");

    client.takeoff();

    client
        .after(3000, function () {
            this.clockwise(0.5);
        })
        .after(3000, function () {
            this.clockwise(-0.5);
        })
        .after(3000, function () {
            this.up(1);
        })
        .after(2000, function () {
            this.down(1);
        })
        .after(2000, function () {
            this.stop();
            this.land();
        });

}

var takeOffUpDownLand = function (command) {

    console.log("Inside Command takeOffUpDownLand");


}

var takeOffLeftRightLand = function (command) {

    console.log("Inside Command takeOffLeftRightLand");



}

var takeOffForwardBackwardLand = function (command) {

    console.log("Inside Command takeOffForwardBackwardLand");


}

var takeOffFlipLand = function (command) {

    console.log("Inside Command takeOffFlipLand");


}

function commander(command) {

    if (command.toUpperCase() === "TAKEOFF-STAY-LAND") {

        console.log("Command Parrot to Takeoff, Stay and Land");
        longTakeOffStayLand();

    } else if (command.toUpperCase() === "TAKEOFF-UP-DOWN-LAND") {

        console.log("Command Parrot to Takeoff, go up, go down and Land");
        takeOffUpDownLand();

    } else if (command.toUpperCase() === "TAKEOFF-LEFT-RIGHT-LAND") {

        console.log("Command Parrot to Takeoff, go left, go right and Land");
        takeOffLeftRightLand();

    } else if (command.toUpperCase() === "TAKEOFF-FORWARD-BACKWARD-LAND") {

        console.log("Command Parrot to Takeoff, go forward, go backward and Land");
        takeOffForwardBackwardLand();

    } else if (command.toUpperCase() === "TAKEOFF-FLIP-LAND") {

        console.log("Command Parrot to Takeoff, Flip and Land");
        takeOffFlipLand();

    }
}

module.exports = commander;