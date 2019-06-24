import 'package:angular/angular.dart';
import 'package:avocado_web/src/components/feed/feed_component.dart';

@Component(
  selector: 'clients-component',
  templateUrl: 'clients_component.html',
  directives: [
    FeedComponent
  ]
)
class ClientsComponent {
  var name = 'Clients';
}
