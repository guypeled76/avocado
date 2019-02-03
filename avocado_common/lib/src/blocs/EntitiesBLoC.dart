import 'dart:async';
import 'package:avocado_common/common.dart';
import 'package:rxdart/rxdart.dart';

abstract class EntitiesBLoC<EntityType extends EntityInfo> extends BaseBLoC {
  final RepositoryService repository;

  final BehaviorSubject<List<EntityType>> _entitiesController =
      BehaviorSubject();

  EntitiesBLoC(this.repository) {
    _entitiesController.onListen = () {
      repositoryQuery.get().then((list) {
        _entitiesController.sink
            .add(list.map((map) => entityFromJson(map)).toList());
      });
    };
  }

  Stream<List<EntityType>> get entities {
    return _entitiesController.stream;
  }

  EntityType entityFromJson(Map<String, dynamic> json);

  Map<String, dynamic> jsonFromEntity(EntityType entity);

  RepositoryQuery get repositoryQuery {
    return this.repositoryCollection;
  }

  RepositoryCollection get repositoryCollection;

  Future<EntityType> add(EntityType entity) {
    return repositoryCollection.add(jsonFromEntity(entity)).then((doc) {
      return doc.get().then((json) => entityFromJson(json));
    }).then((entity) {
      _entitiesController.first.then((list) {
        List<EntityType> newList = List.from(list);
        newList.add(entity);
        _entitiesController.sink.add(newList);
      });

      return entity;
    });
  }

  Future<List<EntityType>> addMany(Stream<EntityType> entities) async {
    return repositoryCollection
        .addAll(entities.map((entity) => jsonFromEntity(entity)))
        .asyncMap((doc) => doc.get())
        .map((map) => entityFromJson(map))
        .toList()
        .then((entities) {
      _entitiesController.first.then((list) {
        List<EntityType> newList = List.from(list);
        newList.addAll(entities);
        _entitiesController.sink.add(newList);
      });
    });
  }

  void delete(EntityType entity) {
    repositoryCollection.doc(entity.key).delete().then((_) {
      _entitiesController.first.then((list) {
        List<EntityType> newList = List.from(list);
        newList.remove(entity);
        _entitiesController.sink.add(newList);
      });
    });
  }

  @override
  void dispose() {
    super.dispose();


  }
}
