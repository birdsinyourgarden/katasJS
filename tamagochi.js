class Tamagotchi {
    constructor() {
        this.hunger = 4; 
        this.energy = 4; 
        this.mood = 4; 
    }

    getState() {
        if (this.mood > 8) {
            return ':-)'; 
        } else if (this.energy < 3 && this.energy > 0) {
            return '(-_-)'; 
        } else if (this.energy === 0) {
            return '(-_-) zZZ'; 
        } else if (this.mood < 2) {
            return 'ఠ_ఠ'; 
        } else {
            return ':-|'; 
        }
    }

    play() {
        this.hunger += 1; 
        this.mood += 1;   
        this.energy -= 1; 
        return this.getState(); 
    }

    eat() {
        this.hunger = Math.max(0, this.hunger - 2); 
        this.energy -= 1; 
        return this.getState(); 
    }

    sleep() {
        this.energy += 2; 
        return '(-_-) zZZ'; 
    }
}


const myTamagotchi = new Tamagotchi();
console.log(myTamagotchi.play());  
console.log(myTamagotchi.eat());   
console.log(myTamagotchi.sleep()); 
