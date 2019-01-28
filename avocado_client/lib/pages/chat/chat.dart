import 'package:avocado_client/dialogs/imageview.dart';
import 'package:image_picker/image_picker.dart';
import 'package:avocado_common/common.dart';
import 'package:flutter/material.dart';
import 'message.dart';

class ChatWidget extends StatelessWidget {

  final ChatBLoC bloc;

  ChatWidget({Key key, @required this.bloc}) : super(key: key);

  _openImage(BuildContext context) async {
    var image = await ImagePicker.pickImage(source: ImageSource.gallery);

    ImageViewDialog.showFromFile(context, PostInfo(
      key: "t1",
      content: "",
      date:DateTime.now(),
      user: UserInfo(
          key: "dd",
          displayName: "dd",
          image: "https://c8.alamy.com/comp/ANJRF0/friedrich-nietzsche-ANJRF0.jpg"
      ),
      image: image.uri.toString()
    ), image);
  }

  _takeImage(BuildContext context) async {
    var image = await ImagePicker.pickImage(source: ImageSource.camera);

    ImageViewDialog.showFromFile(context, PostInfo(
        key: "t1",
        content: "",
        date:DateTime.now(),
        user: UserInfo(
            key: "dd",
            displayName: "dd",
            image: "https://c8.alamy.com/comp/ANJRF0/friedrich-nietzsche-ANJRF0.jpg"
        ),
        image: image.uri.toString()
    ), image);
  }

  @override
  Widget build(BuildContext context) {
    return Column(
        children: <Widget>[
          Expanded(
              child: buildChat(context)
          ),
          Row(children: <Widget>[
            IconButton(
                onPressed: () => _takeImage(context),
                icon: Icon(Icons.camera)
            ),
            IconButton(
              onPressed: () => _openImage(context),
                icon: Icon(Icons.image)
            ),
            Expanded(child: TextFormField(

            ),),
            IconButton(icon: Icon(Icons.send), onPressed: () {},),

          ])
        ]);
  }

  Widget buildChat(BuildContext context) {
    return StreamBuilder<List<MessageInfo>>(
        stream: this.bloc.messages,
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.done) {
            if (snapshot.hasError) {
              return new Text(snapshot.error.toString());
            }
            return ListView.builder(
                padding: EdgeInsets.all(0),
                itemCount: snapshot.data.length,
                itemBuilder: (context, index) {
                  MessageInfo message = snapshot.data[index];

                  return MessageWidget(
                    message: message,
                    other: message.user,
                  );
                });
          } else {
            return Text("Loading");
          }
        });
  }
}
