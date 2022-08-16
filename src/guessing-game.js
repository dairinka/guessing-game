class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.middleRange = null;
    }

   setRange(min, max) {
    this.min = min;
    this.max = max;
    }

    guess() {
        console.log('this.max: ', this.max)
        console.log('this.min: ', this.min)
     
      this.middleRange = (Math.round((this.max - this.min) / 2)) + this.min;
      console.log('this.middleRange: ', this.middleRange)
      return this.middleRange;
    }

    lower() {
        this.max = this.middleRange;
        return this.guess();
    }

    greater() {
        this.min = this.middleRange;
        return this.guess();
    }
}

module.exports = GuessingGame;
