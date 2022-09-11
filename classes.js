class Governor {
    constructor(security, mansion, chef) {
        this.security = security,
        this.mansion = mansion,
        this.chef = chef
    }
    static workdays() {
        console.log('The governror only works on Tuesdays');
    }
}
Governor.workdays();


class person {
    constructor(language, hometown, favFood){
        this.language = language
        this.hometown = hometown
        this.favFood = favFood
    }
}
    class PostalWorker extends person {
        constructor (language, hometown, favFood){
        super(language, hometown, favFood)
    
    }}
     class Chef extends person {
        constructor (language, hometown, favFood){
        super(language, hometown, favFood)
        
         }}

    
let postMan = new PostalWorker('English', 'Atlanta', 'Spaghetti')
console.log(postMan.language, postMan.hometown, postMan.favFood);
let postMan2 = new PostalWorker('Spanish', 'Charlotte', 'BBQ')
console.log(postMan2.language, postMan2.hometown, postMan2.favFood);
let chefMan = new Chef('French', 'Paris', 'pastry')
console.log(chefMan.language, chefMan.hometown, chefMan.favFood);
let chefMan2 = new Chef('Italian', 'Rome', 'pizza')
console.log(chefMan2.language, chefMan2.hometown, chefMan2.favFood);

//=======Bank Accounts===========

class BankAccount {
    constructor() {
      this.ownerName = 'John'
      this.balance = 250.00
      this.acctNum = 12345678
    }
    deposit(amount) {
      this.balance += amount
    }
    withdraw(amount) {
      this.balance = this.balance - amount
    }
  }
  class CheckingAccount extends BankAccount {
    constructor(overdraftEnabled) {
      super()
      this.overdraftEnabled = overdraftEnabled
    }
    withdraw(amount) {
      if(this.overdraftEnabled && this.balance - amount < 0) { //First check is to see if overdraft is enabled when balance doesn't have enough funds
        this.balance = this.balance - amount 
      } else if(this.overdraftEnabled === false && this.balance - amount < 0) { //checks if overdraft is false and have enough funds
        console.log('You dont have enough money'); 
      } else { //runs even though user has enough money to withdraw
        this.balance = this.balance - amount
      }
    }
  }
  class SavingsAccount extends BankAccount {
  
  }
  
  // const kelvinAccount = new BankAccount()
  // console.log(kelvinAccount.balance);
  // kelvinAccount.deposit(200.00)
  // console.log(kelvinAccount.balance);
  // kelvinAccount.withdraw(50.75)
  // console.log(kelvinAccount.balance);
   const kelvin = new CheckingAccount(true)
   console.log(kelvin.withdraw(300.00));
   console.log(kelvin.balance);