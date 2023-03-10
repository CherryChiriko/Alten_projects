export class LoginService {

  users = [];

  constructor() {
    for (let i=0; i<41; i++){
      const birth_day = Math.floor(Math.random() * 28)+1;
      let birth_month = Math.floor(Math.random() * 12)+1;
      birth_month = birth_month < 10?  `0${birth_month}` : `${birth_month}`
      const birth_year = Math.floor(Math.random() * 100)+1922;
      const names = [
        'Michael', 'Jack', 'Steven', 'Eric', 'John', 'Max', 'Robert', 'Fiona'
      ]
      const surnames = [
        'Hu', 'Wu', 'Huang', 'Zhang', 'Wang', 'Peng', 'Hong', 'Zhao'
      ]
      const countries = [
        'Germany, Berlin', 'Italy, Pisa', 'France, Marseille', 'Japan, Kyoto', 'Vietnam, Hanoi', 'USA, New York'
      ] 

      this.users.push(
        { 
          id: `${i}`,
          userName: `user${i}`,
          password: '123',
          name: `${names[Math.floor(Math.random() * 7)]}`,
          surname: `${surnames[Math.floor(Math.random() * 7)]}`,
          birthday: `${birth_day}/${birth_month}/${birth_year}`,
          address: `${countries[Math.floor(Math.random() * 5)]}, ${Math.floor(Math.random() * 50)+3}th Street, ${Math.floor(Math.random() * 100)+1}`
        }
      )
    }
  }

  getAll(){    return this.users;  }

  findUser(body) {
    const user = this.users.find(u => 
      u.userName === body.userName && u.password === body.password);
    return user;
  }

  getUser(id) {    return this.users.find(user => user.id == id);  }

  getRandomIntinRange(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
    // The maximum is exclusive and the minimum is inclusive
  }
}
