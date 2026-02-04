---
title: "Flutter - NASA Astronomical Picture of the Day"
date: 2020-07-16
category: "Flutter"
excerpt: "Build a basic app to understand how to make an API call, handle Futures and get beautiful NASA Astronomical pictures."
---

## Introduction

Flutter, since its first release in May 2017, has gained enormous popularity, thanks to its strong documentation, helpful community and the efficient and beautiful apps that we can build with it. With flutter we can build awesome apps easily from scratch. In this tutorial, we are going to build a simple app that displays a NASA Astronomical Picture of the day and the information about the picture. To accomplish this, we are going to use NASA APOD API.

I am assuming that you have already installed flutter SDK and Android Studio / VS Code / X Code and know how to build and run a basic flutter app.

If you don't know what is an API, JSON, what are Futures and how to handle them in Flutter, please refer to the end of the tutorial, I have explained them briefly under **"Understand Basics"**.

(**If you want to jump straight to coding without going through complete tutorial, then please visit [nasa_apod github repository](https://github.com/anuragseven/nasa_apod) and please give it a star if you liked the tutorial/project. Thanks.**)

Let's build the project.

## NASA APOD Flutter Project

Create a new flutter project in your favourite IDE and name it nasa_apod. Open main.dart file and clear all the code except the imports, main function and MyApp class. Edit your MyApp class and make it look like this:

```dart
import 'package:flutter/material.dart';
import 'package:http/http.dart';

void main() => runApp(MyApp());

class MyApp extends StatelessWidget {
  Widget build(BuildContext context) {
    return MaterialApp(
      title: "NASA APOD",
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: ShowPic(),
    );
  }
}
```

Before going ahead, open your **pubspec.yaml** file and add this dependency:

```yaml
dependencies:
  flutter:
    sdk: flutter
  http: ^0.12.1
```

Now run **pub get**.

Add these two import statements at the top of **main.dart**:

```dart
import 'dart:convert';
import 'package:http/http.dart';
```

Create a stateful class **ShowPic**, as you might know you will have to create a **State** class, **ShowPicState**. These two classes should look like this:

```dart
class ShowPic extends StatefulWidget {
  @override
  _ShowPicState createState() => _ShowPicState();
}

class _ShowPicState extends State<ShowPic> {
  @override
  Widget build(BuildContext context) {
    // TODO: implement build
    throw UnimplementedError();
  }
}
```

**_ShowPicState** class will contain all the logic to get the data from the api and display on the screen. The data that we will get contain information like title, media_type, information, hd url for the image etc. We are going to store the data in four String variables. We also need String variables for year, month and day. Create these String variables:

```dart
String imageUrl;
String imageInfo = "Image Information";
String imageTitle = "Image Title";
String mediaType = "mediaType";
String year;
String month;
String day;
```

It's time to create the function that will call the api:

```dart
Future<Response> getApodResponse({String year, String month, String day}) {
  String date = year + "-" + month + "-" + day;
  String url = Uri.encodeFull(
      "https://api.nasa.gov/planetary/apod?date=$date&hd=true&api_key=DEMO_KEY");
  Future<Response> response = get(url);
  return response;
}
```

The function is quite simple. First we concatenated year, month and day, so that **date** is in the right format, **YYYY-MM-DD**. Second, we have encoded the url. It's important because it ensures that the url is valid. The third line calls the get method with the url as an argument. The get method is used to get data from the server. The **get** method returns a Future<response> object, this object will contain all the information like status code, json string etc.

## Understanding Futures

Before you understand **Future**, you should know that certain operations are slow compared to the CPU, like reading a file or writing data to a file, communicating to an API using http requests etc.

We can't keep waiting for these slow operations to complete otherwise it would waste the CPU's precious time and block other commands. In Flutter, the slow task is started as normal and then moved away from the main thread, a listener is created, this listener monitors the slow task and raises an alert when it finishes waiting, the reference to the listener is returned to the main thread and is known as **Future**.

**Using .then():**

Let's assume you have this function which reads from a file and returns a String:

```dart
Future<String> readFile() {
  //logic
}
```

The function has a return type `Future<String>`, it means we can't access the String returned by the function like this:

```dart
String str = readFile();
```

Because it is slow and can take a lot of time to complete, instead we have to provide a callback function which is called when the **readFile()** function finally completes.

```dart
void callbackFun(String str) {
  //use the expected String that will be returned by readFile()
}
```

The **readFile()** function should be called like this:

```dart
readFile.then(callbackFun).onError((error) {
  //handle error
});
```

**Using async, await:**

The other more straightforward way is to mark the function as async:

```dart
Future<String> readFile() async {
  //logic
}
```

Now you can get the String by using **await** keyword:

```dart
String str = await readFile();
```

If you liked the tutorial, then please give it a star on [github](https://github.com/anuragseven/nasa_apod).
