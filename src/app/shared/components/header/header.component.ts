import { Component, ElementRef, OnInit, Renderer2, ViewChild, AfterViewInit } from '@angular/core';
import { Profile } from 'src/app/interfaces/profile';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ProfileService } from 'src/app/services/profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterViewInit {

  @ViewChild('accountMenu') accountMenu: ElementRef;
  @ViewChild('auth') auth: ElementRef;

  hamClick: any;
  searchArea: any;
  authModal: boolean = false;
  isSignedin: boolean = false;
  signinBtn: boolean = true;
  welcomeSect: boolean = false;
  userId: any;
  users: any;
  user: any;

  constructor(private renderer: Renderer2, private firebaseService: FirebaseService, private profileService: ProfileService) { }

  ngAfterViewInit(): void {
    // Check if User is Signed in
    if (localStorage.getItem('id') !== null) {
      this.isSignedin = true
      this.welcomeSect = true
      this.signinBtn = false
    } else {
      this.isSignedin = false
      this.welcomeSect = false
      this.signinBtn = true
    }

    // Get single User Informations
    this.userId = JSON.parse(localStorage.getItem('id') || '{}')
    this.users = this.profileService.getSingleUser(this.userId).subscribe((res: any) => {
      res.forEach((r: any) => {
        let item = r.payload.doc.data() as Profile
        this.user = item
      });
    })

    // Click Outside to close element
    this.renderer.listen('window', 'click', (e: Event) => {
      let x = !this.accountMenu.nativeElement.contains(e.target)
      let y = !this.auth.nativeElement.contains(e.target)
      if (x && y) {
        this.authModal = false;
      }
    });
  }

  // Toggle Menu
  openMenu() {
    this.hamClick = !this.hamClick
  }

  // Open Auth Modal
  openAuthModal() {
    this.authModal = !this.authModal
  }

  // Open Auth Modal
  openSearchArea() {
    this.searchArea = !this.searchArea
    console.log("Click")
  }

  // Log the user out
  signOut() {
    this.firebaseService.signout()

    window.location.reload()
  }
}
