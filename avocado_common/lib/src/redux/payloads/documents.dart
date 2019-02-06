import 'package:avocado_common/common.dart';
import 'payload.dart';

class DocumentPayload extends Payload {

}


class EntityPayload<EntityType extends EntityInfo> extends Payload {
  final EntityType entity;

  EntityPayload(this.entity);
}

class EntitiesPayload<EntityType extends EntityInfo> extends Payload {
  final List<EntityType> entities;

  EntitiesPayload(this.entities);
}
