import { Component, OnInit } from '@angular/core';
import { Account } from 'src/app/Account';
import { AccountsService } from 'src/app/services/accounts.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.css']
})


export class MyProfileComponent implements OnInit {

  files: File[] = [];
  imageChangedEvent: any = '';
  croppedImage: any = '';

  accounts: Account[] = [];
  loggedAccounts: Account[] = [];
  showEye: boolean = false;
  showEdit: boolean;

  username: string;
  firstName: string;
  lastName: string;
  gender: string;
  email: string;
  GSM: string;
  passwordChange: string;

  password: string;

  loggedUsers: Account[];
  loggedUser: Account;

  currentLoggedUser: Account;

  showEditPhoto: boolean; showEditUserame: boolean; showEditFirstName: boolean; showEditLastName: boolean; showEditGender: boolean; showEditEmail:boolean; showEditGSM: boolean; showEditPass: boolean;

  simpleObject: any;

  show: boolean = false;

  constructor(private accountsService: AccountsService, private loginService: LoginService) {
  }

  ngOnInit(): void { 
   // this.accountsService.getLogging().subscribe((loggedUser) => (this.loggedAccounts = loggedUser));
    this.accountsService.getAccount().subscribe((account) => (this.accounts = account));
    
    this.loginService.getLogged().subscribe(loggedUser => this.loggedUsers = loggedUser);
  }

  getLoggedUser(){
    this.show = true;
    this.dontShowEditing();
    this.loggedUser = this.loggedUsers[this.loggedUsers.length - 1];
    console.log("gettttt" + this.loggedUser);
  }

  // getLoggedUser(){
  //   this.dontShowEditing();
  //   this.loggedUser = {
  //     username: this.currentLoggedUser.username,
  //     photoSrc: this.currentLoggedUser.photoSrc,
  //     firstName: this.currentLoggedUser.firstName,
  //     lastName: this.currentLoggedUser.lastName,
  //     gender: this.currentLoggedUser.gender,
  //     email: this.currentLoggedUser.email,
  //     GSM: this.currentLoggedUser.GSM,
  //     password: this.currentLoggedUser.password,
  //     agreement: this.currentLoggedUser.agreement
  //   };
  //   console.log(this.loggedUser)
  //   this.showPassword();
  //   return this.loggedUser;
  // }

  onSelectFile(e: any){
    this.imageChangedEvent = e;
  }

  imageCropped(event: ImageCroppedEvent){
    this.croppedImage = event.base64;

    const accountIndex = this.accounts.findIndex(account => account.username === this.loggedUser.username);
     
    this.accounts[accountIndex].photoSrc = this.croppedImage;
    this.accountsService.updateAccount(this.accounts[accountIndex]).subscribe();
  }

  onSave(){
    const accountIndex = this.accounts.findIndex(account => account.username === this.loggedUser.username);

    if(!this.username){
      this.loggedUser.username = this.loggedUser.username;
      this.accounts[accountIndex].username = this.accounts[accountIndex].username;
    }else {
      this.loggedUser.username = this.username;
      this.accounts[accountIndex].username = this.username;
    }

    if(!this.firstName){
      this.loggedUser.firstName = this.loggedUser.firstName;
      this.accounts[accountIndex].firstName = this.accounts[accountIndex].firstName;
    }else {
      this.loggedUser.firstName = this.firstName;
      this.accounts[accountIndex].firstName = this.firstName;
    }

    if(!this.lastName){
      this.loggedUser.lastName = this.loggedUser.lastName;
      this.accounts[accountIndex].lastName = this.accounts[accountIndex].lastName;
    }else {
      this.loggedUser.lastName = this.lastName;
      this.accounts[accountIndex].lastName = this.lastName;
    }

    if(!this.gender){
      this.loggedUser.gender = this.loggedUser.gender;
      this.accounts[accountIndex].gender = this.accounts[accountIndex].gender;
    }else {
      this.loggedUser.gender = this.gender;
      this.accounts[accountIndex].gender = this.gender;
    }

    if(!this.email){
      this.loggedUser.email = this.loggedUser.email;
      this.accounts[accountIndex].email = this.accounts[accountIndex].email;
    }else {
      this.loggedUser.email = this.email;
      this.accounts[accountIndex].email = this.email;
    }

    if(!this.GSM){
      this.loggedUser.GSM = this.loggedUser.GSM;
      this.accounts[accountIndex].GSM = this.accounts[accountIndex].GSM;
    }else {
      this.loggedUser.GSM = this.GSM;
      this.accounts[accountIndex].GSM = this.GSM;
    }

    if(!this.passwordChange){
      this.loggedUser.password = this.loggedUser.password;
      this.accounts[accountIndex].password = this.accounts[accountIndex].password;
    }else {
      this.loggedUser.password = this.passwordChange;
      this.accounts[accountIndex].password = this.passwordChange;
    }

    this.loggedUser.photoSrc = this.croppedImage;
  // this.getLoggedUser();
    this.accountsService.updateAccount(this.accounts[accountIndex]).subscribe();
    this.dontShowEditing();
  }

  // getLoggedUser(){
  //   this.dontShowEditing();
  //   this.loggedUser = {
  //     username: this.loggedAccounts.slice(-1).pop()?.username,
  //     photoSrc: this.loggedAccounts.slice(-1).pop()?.photoSrc,
  //     firstName: this.loggedAccounts.slice(-1).pop()?.firstName,
  //     lastName: this.loggedAccounts.slice(-1).pop()?.lastName,
  //     gender: this.loggedAccounts.slice(-1).pop()?.gender,
  //     email: this.loggedAccounts.slice(-1).pop()?.email,
  //     GSM: this.loggedAccounts.slice(-1).pop()?.GSM,
  //     password: this.loggedAccounts.slice(-1).pop()?.password,
  //     agreement: this.loggedAccounts.slice(-1).pop()?.agreement
  //   };
    
  //   if(!this.loggedUser.photoSrc){
  //     this.loggedUser.photoSrc = "assets/plainAvatar.png"
  //   }
  //   console.log(this.loggedUser);
  //   this.showPassword();
  //   return this.loggedUser;
  // }

  onSelectDropzone(event: any) {
		console.log(event);
		this.files.push(...event.addedFiles);

    console.log(event)
  
    //this.filesService.addFile(event).subscribe((event) => (this.files.push(event)));
	}

	onRemove(event: any) {
		console.log(event);
		this.files.splice(this.files.indexOf(event), 1);
	}

  showPassword(){
    this.showEye = !this.showEye;

    if(this.showEye){
      this.password = this.loggedUser.password!;
    }else {
      this.password = "";
      for(let i = 0; i < this.loggedUser.password!.length; i++){
        this.password += "*";
      }
    }
  }

  showEditing(){
    this.showEditPhoto=true; this.showEditUserame=true; this.showEditFirstName=true; this.showEditLastName=true; this.showEditGender=true; this.showEditEmail=true; this.showEditGSM=true; this.showEditPass=true;
  }

  dontShowEditing(){
    this.showEditPhoto=false; this.showEditUserame=false; this.showEditFirstName=false; this.showEditLastName=false; this.showEditGender=false; this.showEditEmail=false; this.showEditGSM=false; this.showEditPass=false;
  }

  showEditingPhoto(){this.showEditPhoto=true;}

  showEditingUsername(){this.showEditUserame=true;}

  showEditingFirstName(){this.showEditFirstName=true;}

  showEditingLastName(){this.showEditLastName=true;}

  showEditingGender(){this.showEditGender=true;}

  showEditingEmail(){this.showEditEmail=true;}

  showEditingGSM(){this.showEditGSM=true;}

  showEditingPass(){this.showEditPass=true;}
}
