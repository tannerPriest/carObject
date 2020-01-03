class Car{
    constructor(color, convertible){
        this.color = color;
        this.convertible = convertible;
        this.speed = 0;
    }
    accelerate (num) {
        this.speed += num;
        return this.speed
    }
    decelerate (num) {
        this.speed -= num
        return this.speed;
    }
}

module.exports = Car;

// const machFive = new Car('red', true);
// machFive.color.should.be.eql('red');
// machFive.convertible.should.be.eql(true);
// machFive.accelerate(25);
// machFive.speed.should.be.eql(25);
// machFive.accelerate(10);
// machFive.decelerate(10);
// machFive.speed.should.be.eql(25);