import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '001-angular';
  users: string[]= ['julio','juan', 'edu', 'gabi' , 'vivi', 'rodi'];


saludo(){
  alert('hola vivi')
  }

// deleteUser(user:any){
//   for(let i = 0; i< this.users.length; i++){
//     if (user === this.users[i]){
//       this.users.splice(i, 1)
//       }
//     }
//   }



deleteUser(user:any){
  alert(user+' eliminado')
          this.users.splice(user, 1)
      }
    
addUser(newUser: any){
  console.log(newUser.value);
  this.users.push(newUser.value);
  newUser.value = ''; //limpia el casillero input y pone el cursor
  newUser.focus();//mantiene el cursor siempre en el formulario
  return false;
}
deleteAllUser(){
  this.users.splice(0, this.users.length);
}
originList(){
  location. reload()
  }
  }



