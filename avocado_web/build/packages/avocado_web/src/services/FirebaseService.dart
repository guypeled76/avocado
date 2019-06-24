import 'dart:async';
import 'package:angular/angular.dart';
import 'package:avocado_common/common.dart';
import 'package:firebase/firebase.dart' as fb;

@Injectable()
class FirebaseService implements AuthService {
  fb.User profile;
  fb.Auth _fbAuth;

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
    profile = event;
  }

  Future signInWithGoogle() async {
    try {
      var _fbGoogleAuthProvider = new fb.GoogleAuthProvider();
      await _fbAuth.signInWithPopup(_fbGoogleAuthProvider);
    } catch (error) {
      print("$runtimeType::login() -- $error");
    }
  }

  Future signInWithFacebook() async {
    try {
      var _fbFacebookAuthProvider = new fb.FacebookAuthProvider();
      await _fbAuth.signInWithPopup(_fbFacebookAuthProvider);
    } catch (error) {
      print("$runtimeType::login() -- $error");
    }
  }

  void signOut() {
    _fbAuth.signOut();
  }

  @override
  String get displayName => profile?.displayName;

  @override
  String get email => profile?.email;

  @override
  String get photoUrl => profile?.photoURL;
}
