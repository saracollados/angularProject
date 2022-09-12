import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'users'
})
export class UsersPipe implements PipeTransform {

  transform(users:Array<string>, searchUser: string): Array<string> {
    if(users.length === 0 || searchUser === '') {
      return users;
    }

    let usersValidos:Array<string> = [];
    
    for(let user of users) {
      if(user.toLowerCase().includes(searchUser.toLowerCase())){
        usersValidos.push(user);
      }
    }

    return usersValidos;
  }

}
