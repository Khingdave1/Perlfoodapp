import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  profile: any;

  constructor(private db: AngularFirestore) { }

  collectionPath = this.db.collection('profile')
  collectionName = 'profile'

  // CREATE
  addUser(payload: any) {
    return new Promise<any>((resolve, reject) => {
      this.collectionPath.add(payload).then(res => resolve(res), err => reject(err))
    })
  }

  // Get single profile
  getSingleUser(userId: string) {
    this.profile = this.db.collection(this.collectionName, ref => ref.where('uid', '==', userId).limit(1))
      .snapshotChanges()
    return this.profile
  }

  // UPDATE
  updateUser(userId: string, payload: any) {
    this.db.doc(this.collectionName + '/' + userId).update(payload)
  }
}
