


void logError(String message, Object error) {
  if(error != null) {
    print('ERROR:$message[$error]');
  }
}

void logInfo(String message) {
  print('INFO:$message');
}