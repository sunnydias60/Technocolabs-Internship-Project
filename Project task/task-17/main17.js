 
    class School {
        constructor(name, numberOfStudents, level) {
            this._name = name;
            this._numberOfStudents = numberOfStudents;
            this._level = level;
        }
    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get numberOfStudents() {
        return this._numberOfStudents;
    }
    set numberOfStudents(numberOfStudents) {
        if(Number.isInteger(numberOfStudents)  == true )
        {
            this._numberOfStudents = numberOfStudents;
        }
        else
            console.log(`Invalid input: numberOfStudents must be set to a Number.`)
    }
    quickFacts() {
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`);
    }
    static pickSubstituteTeacher(substituteTeachers) {
        let n = (substituteTeachers.length) - 1;
        let randomNum = Math.floor(Math.random() * n);  
        return substituteTeachers[randomNum];      
        }
    } 
    

    class PrimarySchool extends School {
        constructor(name, numberOfStudents, pickupPolicy) {
            super(name, numberOfStudents);
            this._level = "primary";
            this._pickupPolicy = pickupPolicy;
        }
        get pickupPolicy() {
           return this.pickupPolicy; 
        }
    }
    class HighSchool extends School {
        constructor(name, numberOfStudents, sportsTeams) {
            super(name, numberOfStudents);
            this._level = "high";
            this._sportsTeams = sportsTeams;
        }
        get sportsTeams() {
            console.log(`${this._sportsTeams}`);
        }
    }

    const lorraineHansbury = new PrimarySchool("Lorraine Hansbury", 514, "Students must be picked up by a parent, guardian, or a family member over the age of 13." );
    lorraineHansbury.quickFacts();

    let subTeacher = ['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli'];
    School.pickSubstituteTeacher(subTeacher);
    
    let teams = ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'];
    const alSmith = new HighSchool("Al E. Smith", 415, teams);
    alSmith.sportsTeams;
         
