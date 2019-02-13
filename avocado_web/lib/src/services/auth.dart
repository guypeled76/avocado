import 'package:angular/angular.dart';
import 'package:avocado_common/common.dart';
import 'package:firebase/firebase.dart' as fb;
import 'package:rxdart/rxdart.dart';

@Injectable()
class AuthServiceImpl implements AuthService {

  final BehaviorSubject<ProfileInfo> _profile = BehaviorSubject(
      seedValue: null);

  fb.Auth _fbAuth;

  AuthServiceImpl() {
    fb.initializeApp(
        apiKey: "AIzaSyDZZbKWz5B2ofJAkbI_jw2u51aPdNnNmO0",
        authDomain: "avocado-backend.firebaseapp.com",
        databaseURL: "https://avocado-backend.firebaseio.com",
        projectId: "avocado-backend",
        storageBucket: "avocado-backend.appspot.com",
        messagingSenderId: "219538454820");

    fb.firestore().enablePersistence().then((success) {
      print("Enabled presistance.");
    }).catchError((error) {
      print("Failed to enable presistance: " + error);
    });

    _fbAuth = fb.auth();
    _fbAuth.onAuthStateChanged.listen(_authChanged);
  }

  Stream<ProfileInfo> get profile {
    return _profile;
  }


  void _authChanged(fb.User user) {
    if (user != null) {
      _profile.add(ProfileInfo(
          key: user.uid,
          image: user.photoURL,
          displayName: user.displayName
      ));
    } else {
      _profile.add(null);
    }
  }

  Future signInWithGoogle() async {
    var _fbGoogleAuthProvider = new fb.GoogleAuthProvider();
    await _fbAuth.signInWithPopup(_fbGoogleAuthProvider);
  }

  Future signInWithFacebook() async {
    var _fbFacebookAuthProvider = new fb.FacebookAuthProvider();
    await _fbAuth.signInWithPopup(_fbFacebookAuthProvider);
  }

  Future signOut() async {
    _fbAuth.signOut();
  }


}
