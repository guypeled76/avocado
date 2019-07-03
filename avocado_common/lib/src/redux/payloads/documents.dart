import 'package:avocado_common/common.dart';
import 'payload.dart';

class DocumentPayload extends Payload {

}


class EntityPayload<EntityType extends EntityInfo> extends Payload {
  final EntityType entity;

  EntityPayload(this.entity);
}

class EntityWithImagePayload<EntityType extends EntityInfo> extends EntityPayload {

  Object image;
  EntityWithImagePayload(EntityType entity, this.image) : super(entity);
}

class EntityWithImageAndVideoPayload<EntityType extends EntityInfo> extends EntityWithImagePayload {

  Object video;
  EntityWithImageAndVideoPayload(EntityType entity, Object image, this.video) : super(entity, image);
}

class EntitiesPayload<EntityType extends EntityInfo> extends Payload {
  final List<EntityType> entities;

  EntitiesPayload(this.entities);
}
