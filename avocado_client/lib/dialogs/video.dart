import 'package:flutter/material.dart';
import 'package:video_player/video_player.dart';

class VideoViewDialog extends StatefulWidget {

  final String video;
  VideoViewDialog({Key key, @required this.video}) : super(key: key);

  @override
  _VideoViewDialogState createState() => _VideoViewDialogState();

  static void show(BuildContext context, String video) {
    Navigator.push(
      context,
      MaterialPageRoute(builder: (context) => VideoViewDialog(
        video: video,
      )),
    );
  }
}

class _VideoViewDialogState extends State<VideoViewDialog> {

  VideoPlayerController _controller;
  bool _isPlaying = false;

  @override
  void initState() {
    super.initState();
    _controller = VideoPlayerController.network(
      widget.video,
    )
      ..addListener(() {
        final bool isPlaying = _controller.value.isPlaying;
        if (isPlaying != _isPlaying) {
          setState(() {
            _isPlaying = isPlaying;
          });
        }
      })
      ..initialize().then((_) {
        _controller.play();
        // Ensure the first frame is shown after the video is initialized, even before the play button has been pressed.
        setState(() {});
      });
  }

  @override
  void dispose() {
    // TODO: implement dispose
    super.dispose();

    _controller.dispose();
  }


  @override
  Widget build(BuildContext context) {
    return Scaffold(
        backgroundColor: Colors.black,
        appBar: AppBar(
          title: Text("video"),
          backgroundColor: Colors.black,
          actions: <Widget>[IconButton(
            icon:Icon(Icons.more_vert),
            onPressed: () {
              Navigator.pop(context);
            },
          )],
        ),
        body: Center(
          child: GestureDetector(
            onTap: _press,
            child: _controller.value.initialized
                ? AspectRatio(
              aspectRatio: _controller.value.aspectRatio,
              child: VideoPlayer(_controller),
            )
                : SizedBox(
                width: 40.0,
                height: 40.0,
                child: CircularProgressIndicator()
            ),
          ),
        ),
        floatingActionButton: FloatingActionButton(
          onPressed: _press,
          child: Icon(
            _controller.value.isPlaying ? Icons.pause : Icons.play_arrow,
          ),
        ),
      );
  }

  void _press() {
    _controller.value.isPlaying
        ? _controller.pause()
        : _controller.play();
  }
}