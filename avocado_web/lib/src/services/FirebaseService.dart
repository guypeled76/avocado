import 'dart:async';
import 'package:angular/angular.dart';
import 'package:firebase/firebase.dart' as fb;

@Injectable()
class FirebaseService {
  fb.User user;
  fb.Auth _fbAuth;
  fb.GoogleAuthProvider _fbGoogleAuthProvider;

  FirebaseService() {
    fb.initializeApp(
        apiKey: "AIzaSyDZZbKWz5B2ofJAkbI_jw2u51aPdNnNmO0",
        authDomain: "avocado-backend.firebaseapp.com",
        databaseURL: "https://avocado-backend.firebaseio.com",
        projectId: "avocado-backend",
        storageBucket: "avocado-backend.appspot.com",
        messagingSenderId: "219538454820");


    _fbAuth = fb.auth();
    _fbAuth.onAuthStateChanged.listen(_authChanged);
  }

  void _authChanged(fb.User event) {
    user = event;
  }

  Future signIn() async {
    try {
      _fbGoogleAuthProvider = new fb.GoogleAuthProvider();
      await _fbAuth.signInWithPopup(_fbGoogleAuthProvider);
    } catch (error) {
      print("$runtimeType::login() -- $error");
    }
  }

  void signOut() {
    _fbAuth.signOut();
  }
}
