import 'package:avocado_console/avocado_console.dart' as avocado_console;

main(List<String> arguments) async {
  print('Test JSON: ${await avocado_console.testJSON()}!');
}
