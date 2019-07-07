package com.gremlinsapps.avocado_client;

import android.os.Bundle;

import com.facebook.FacebookSdk;

import io.flutter.app.FlutterActivity;
import io.flutter.plugins.GeneratedPluginRegistrant;

public class MainActivity extends FlutterActivity {
  @Override
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);

    FacebookSdk.setApplicationId("2289351617806667");
    FacebookSdk.sdkInitialize(getApplicationContext());
    GeneratedPluginRegistrant.registerWith(this);
  }
}
