import 'package:angular/angular.dart';
import 'package:avocado_web/app_component.template.dart' as ng;
import 'package:firebase/firebase.dart';

void main() {
  initializeApp(
      apiKey: "AIzaSyDZZbKWz5B2ofJAkbI_jw2u51aPdNnNmO0",
      authDomain: "avocado-backend.firebaseapp.com",
      databaseURL: "https://avocado-backend.firebaseio.com",
      projectId: "avocado-backend",
      storageBucket: "avocado-backend.appspot.com");

  runApp(ng.AppComponentNgFactory);
}
