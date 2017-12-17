import { Injectable, Inject } from "@angular/core";
// https://stackoverflow.com/a/43777940/750989
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
//import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState, FirebaseApp } from 'angularfire2';
import { User } from '../model/User';
import { BehaviorSubject } from 'rxjs';
import * as gravatar from 'gravatar';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

// export const providers = {
//   [AuthProviders.Google]: 'google',
//   [AuthProviders.Twitter]: 'twitter',
//   [AuthProviders.Facebook]: 'facebook',
//   [AuthProviders.Github]: 'github',
// };

// https://github.com/angular/angularfire2/blob/master/docs/version-4-upgrade.md
@Injectable()
export class AuthService {
  //user: BehaviorSubject<User>;
  user: Observable<firebase.User>;
  //constructor(private af: AngularFireAuth,
  //            @Inject(FirebaseApp) private app: any) {
  constructor(private af: AngularFireAuth, db: AngularFireDatabase) {
    this.user = af.authState; //new BehaviorSubject<User>(null);
    //this.af.auth
      //.subscribe(authState => this.user.next(this.fromAuthState(authState)));
  }

  // create(user: User) {
  //   return this.app.auth().createUserWithEmailAndPassword(user.email, user.password)
  //   .then(u => u.updateProfile({
  //     displayName: user.name,
  //   }));
  // }

  logIn() {
    this.af.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  // logIn(user: User) {
  //   return this.af.auth.login(user, {
  //     provider: AuthProviders.Password,
  //     method: AuthMethods.Password,
  //   })
  // }

  // logInWithCredential(credential: firebase.auth.AuthCredential,
  //                     provider: AuthProviders) {
  //   return this.af.auth.login(credential, {
  //     provider,
  //     method: AuthMethods.OAuthToken,
  //   });
  // }

  // logOut() {
  //   this.af.auth.logout();
  // }

  logOut() {
    this.af.auth.signOut();
  }

  // fromAuthState(authState: FirebaseAuthState): User {
  //   if (authState) {
  //     if (authState.provider == AuthProviders.Password)  {
  //       const user = authState.auth;
  //       return new User(authState.uid, user.displayName || user.email, user.email, '', gravatar.url(user.email));
  //     } else if (authState.provider in providers) {
  //        const user = authState[providers[authState.provider]] as firebase.UserInfo;
  //        return new User(authState.uid, user.displayName, user.email, '', user.photoURL || gravatar.url(user.email));
  //     }
  //   }
  //   return null;
  // }
}
