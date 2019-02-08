
import 'package:avocado_common/common.dart';

class ClinicStore {
  final AppStore _store;



  ClinicStore(this._store) {
  }

  Stream<ClinicState> get state {
    return this._store.state.map((state) => state.clinic).distinct();
  }

  ClinicActions get actions {
    return this._store.actions.clinic;
  }

  /*ClinicEvents get events {
    return this._store.actions.events.;
  }*/

}