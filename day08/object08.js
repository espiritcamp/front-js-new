// 은행(Bank)
// 이름(name), 계좌(account)

// 입금(deposit)
// 은행에서 관리하는 유저의 돈(account)이 증가
// 유저의 돈(moeny)이 감소

// 출금(withdraw), 
// 은행에서 관리하는 유저의 돈(account)이 감소
// 유저의 돈(돈)이 증가

// 계좌이체(transferMoney)
// 은행을 통해 유저1 -> 유저2 입금
// 유저1 돈(account) 감소
// 유저2 돈(account) 증가

// user1(User)
// 이름(name), 돈(money)

// user2(User)
// 이름(name), 돈(money)

// User 객체
function User(name, money) {
    this.name = name;
    this.money = money;
}

// Bank 객체
function Bank(name, account) {
    this.name = name;
    this.account = account;

    // 입금
    this.deposit = function(user, money) {
        if (user.money >= money) {
            user.money -= money;
            this.account += money;
        } else {
            console.log("잔액이 부족합니다.");
        }
    };

    // 출금
    this.withdraw = function(user, money) {
        if (this.account >= money) {
            this.account -= money;
            user.money += money;
        } else {
            console.log("은행 잔액이 부족합니다.");
        }
    };

    // 계좌이체
    this.transferMoney = function(fromUser, toUser, money) {
        if (fromUser.money >= money) {
            fromUser.money -= money;
            toUser.money += money;
        } else {
            console.log("잔액이 부족합니다.");
        }
    };
}

// 객체 생성
let bank = new Bank("국민은행", 1000000);

let user1 = new User("홍길동", 100000);
let user2 = new User("김철수", 50000);

// 입금
bank.deposit(user1, 30000);
console.log(bank.account); // 1030000
console.log(user1.money);  // 70000

// 출금
bank.withdraw(user1, 20000);
console.log(bank.account); // 1010000
console.log(user1.money);  // 90000

// 계좌이체
bank.transferMoney(user1, user2, 50000);
console.log(user1.money); // 40000
console.log(user2.money); // 100000