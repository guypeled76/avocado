import 'package:avocado_common/common.dart';
import 'package:firebase_auth/firebase_auth.dart';

class AuthServiceImpl implements AuthService {

  ProfileInfo _profile;

  AuthServiceImpl(FirebaseUser user) : _profile = ProfileInfo(
    key: user.uid,
    displayName: user.displayName,
    image: user.photoUrl
  );

  @override
  ProfileInfo get profile {
    return _profile;
  }

  @override
  void signInWithFacebook() {

  }

  @override
  void signInWithGoogle() {

  }

  @override
  void signOut() {

  }




}