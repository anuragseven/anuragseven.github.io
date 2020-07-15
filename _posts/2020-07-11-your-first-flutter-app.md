---
date: 2020-07-11 07:38:03
layout: post
title:  Your first flutter app
subtitle: ' write your first flutter app , no previous exposure to app development is required'
description: >-
  I will talk about how can  you build your first flutter app , right from scratch.
image: >-
  https://images.unsplash.com/photo-1495819903255-00fdfa38a8de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=927&q=80
category: Flutter for beginners
tags:
  - basic flutter app
  - basic flutter projects
  - basic flutter app ideas
  - basic flutter app tutorials
  - basic flutter widgets
author: AnuragTripathi
paginate: true
---


Flutter - Make an API call to get NASA Astronomical Picture of the day 

We will build a basic app to understand how to make an API call , handle Futures and use the knowledge to get a beautiful NASA Astronomical picture of the day . 

# Introduction

Flutter , since its first release in May , 2017 , has gained enormous popularity , thanks to its strong documentation, helpful community and the efficient and beautiful apps that we can build with it .  With flutter we can build awesome apps easily from scratch . In this tutorial , we are going to build a simple app that displays a NASA Astronomical Picture of the day and  the information about the picture .  To accomplish this , we are going to use  NASA APOD API .

I am assuming that you have already installed flutter SDK and Android Studio / VS Code / X Code and know how to build and run a basic flutter app . Before going ahead let's understand briefly , what is an API and what are Futures and how to handle them in Flutter . Feel free to skip if you already know about them. 

**API** :  It stands for  Application Programming Interface and it means different in different contexts , but the most common meaning is an Internet address to which a programmer sends http requests to read or write data . Of course an API is not just that and there are a lot of things involved but for the sake of simplicity , I am not touching any other concepts . Communication with an API is done using http methods , the most common are :  

GET         :  for reading records
DELETE :  for deleting records 
POST       :  for inserting new records 

PUT         :  for replacing existing records
PATCH   :  for updating existing  records
 

**Future** :  Before you understand Future , you should know that certain operations are slow compared to the  CPU , like reading a file or writing data to a file , communicating to an API using http requests etc.  

We can’t keep waiting for these slow operations to complete otherwise it would waste the CPU's  precious time and block other commands . In Flutter , the slow task is started as normal and then moved away from the  main thread , a listener is created , this listener monitors the slow task and raises an alert when it finishes waiting , the reference to the listener is returned to the main thread and is known as Future .  Don’t worry if all this sounds hard , it is very easy to handle a Future in flutter , there are two ways to do it : 

**Using  .then() :** 

Let’s assume you have this function which reads from a file and returns a String ,

Future<String>  readFile()
{
 //logic
}

The function has a return type Future<String> , it means  we can’t  access the String returned by the function like this :

String str= readFile();

Because it is slow and  can take a lot of time to complete , instead we have to provide a callback function which is called when the readFile() function finally completes .

void callbackFun(String str)
{
//use the expected String that will be returned by readFile() 

}

Note that the parameter is of type String , the parameter of a callback function must match with type of Future returned . 
Now call the readFile() function like this :

readFile.then(callbackFun).onError((){

//handle error 

});

If readFile fails with an error , you should be able to handle the error .  onError would do that . 

**Using async , await :**

The other more straightforward way is to mark the function as async ,

Future<String>  readFile() async 
{
//logic
}

Now you can get the String by using await keyword,
String str = await readFile();

Awaiting can pause the running code , until the Future is resolved , before moving to the next line .

If you are calling readFile inside another function, say upperFun , then make it async as well,

Future<type> upperFun() async
{
String str=await readFile();
}

It is worth noting that build functions can’t be marked as async but events like  onPress can  , so solve the async - await - async thing there . 

Enough theory , let’s build the project .


#NASA APOD Flutter Project 

Create a new flutter project in your favourite IDE and name it nasa_apod .
Open main.dart file and clear all the code except the imports , main function and MyApp class . Edit your MyApp class so it look like this :

```
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
Before going ahead , open your pubspec.yaml file and add this dependency :

```
dependencies:
  flutter:
    sdk: flutter
  http: ^0.12.1

```
Now run **pub get** . 

Add these two import statements at the top of main.dart :

```
import 'dart:convert';
import 'package:http/http.dart';

```


Create a stateful class ShowPic , as you might know you will have to create another class ,  ShowPicState . These two classes should look like this : 

```
class ShowPic extends StatefulWidget {

  @override
  _ShowPicState createState()=> _ShowPicState();

}

class _ShowPicState extends State<ShowPic>{

@override
  Widget build(BuildContext context) {
// TODO: implement build
  throw UnimplementedError();
 }
}

```
_ShowPicState class will contain all the logic to get the data from the api and display on the screen . The data that we will get  contain information like title , media_type , information , hd url for the image etc  .  We are going to store the data in four String variables . Create these String variables:

  String imageUrl;
  String imageInfo="Image Information";
  String imageTitle=”Image Title”;
  String mediaType ="mediaType";

It’s time to create the function that will call the api :
```
Future<Response> getApodResponse(){
String url=
Uri.encodeFull("https://api.nasa.gov/planetary/apod?hd=true&api_key=DEMO_KEY");

    Future <Response> response = get(url);

    return response;


  }


```
The function is quite simple , first we have encoded the url . It’s important because it ensures that the url is valid. The second line calls the  get method with the url as an argument. As we already know, the get method is used  to get data from the server . The get method returns a Future<response> object , this object will contain all the information like status code , json string etc .  Generally an api returns data as json string . What is json ? 
It stands for JavaScript Object Notation and is used for exchanging data from client to server and vice - versa . A json string contains key - value pairs like this :
“{

“Name”: “xyz”
 “uid  ” : 1234
 “ country_code” : “IN”  
}”

First you have to decode this json string to Dart data types , a very simple way to do this is to use **json.decode** which is present in the library **dart:convert** , for this example , you can do like this : 

Map<String,dynamic> person_info = json.decode(“json_string”);

To access name , write this :  ** person_info[“Name”];**

Now get back to our app , the json string returned by NASA APOD API look like this : 

```
{"copyright":"Declan Deval","date":"2020-07-14","explanation":"Have you ever seen a comet? Tonight -- and likely the next few nights -- should be a good chance. Go outside just at sunset and look to your northwest.  The lower your horizon, the better.  Binoculars may help, but if your sky is cloudless and dark, all you should need is your unaided eyes and patience. As the Sun sets, the sky will darken, and there will be an unusual faint streak pointing diagonally near the horizon. That is Comet NEOWISE. It is a 5-kilometer-wide evaporating dirty iceberg visiting from -- and returning to -- the outer Solar System. As the Earth turns, the comet will soon set, so you might want to take a picture. In the featured image, Comet C/2020 F3 (NEOWISE) was captured two mornings ago rising over Stonehenge in the UK.  Discovered with the NASA satellite NEOWISE toward the end of March, Comet NEOWISE has surprised many by surviving its closest approach to the Sun, brightening dramatically, and developing impressive (blue) ion and (white) dust tails.    Notable Images of Comet NEOWISE Submitted to APOD:  || July 13  || July 12  || July 11  || July 10 & earlier ||","hdurl":"https://apod.nasa.gov/apod/image/2007/NeowiseStonehenge_Deval_5572.jpg","media_type":"image","service_version":"v1","title":"Comet NEOWISE over Stonehenge","url":"https://apod.nasa.gov/apod/image/2007/NeowiseStonehenge_Deval_960.jpg"}

```

We are going to decode the json string in our callback function : 

```
displayApod(Response response){
    Map<String,dynamic> apoddetails=json.decode(response.body);


    setState(() {

      imageInfo=apoddetails['explanation'];
      imageTitle=apoddetails['title'];

    });
    mediaType=apoddetails['media_type'];
if(mediaType=="image"){ 
 imageUrl=apoddetails['hdurl'];}

  }


```
The first line decodes the json string , we have only included imageInfo and imageTitle in the setState method because we want to display these two on the screen .  After that we have enquired about the media type . Why ? Because sometimes the api returns the media type as video and provides a url for that , in this basic tutorial , we are only interested in displaying images . We only initialize imageUrl if the media type is image. I don’t know about you but  I like hd images that’s why I have provided **”hdurl”** , you can provide **“url”** , if you want a low resolution image . 

Now override **initState** method and call the function **getApodResponse**,

```
  @override
  initState(){
    super.initState();
   getApodResponse().then((response) => displayApod(response)).catchError((){

   });
  }

```
You can see we have not handled any error , if you want to handle error in your way , you can do that . It is not necessary for this tutorial because in case of any error , like internet connection is not available , our app will still open but does nothing , pretty good actually .  
Now , your _ShowPicState class should look like this :
```
class _ShowPicState extends State<ShowPic>{
  String imageUrl;
  String imageInfo="Image Information";
  String imageTitle='Image Title';
  String mediaType ="mediaType";


  Future<Response> getApodResponse(){
    String url =Uri.encodeFull("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY");

    Future <Response> response = get(url);

    return response;


  }

  displayApod(Response response){
    Map<String,dynamic> apoddetails=json.decode(response.body);


    setState(() {

      imageInfo=apoddetails['explanation'];
      imageTitle=apoddetails['title'];

    });
    mediaType=apoddetails['media_type'];
if(mediaType=="image"){  imageUrl=apoddetails['hdurl'];}

  }

  @override
  initState(){
    super.initState();
   getApodResponse().then((response) => displayApod(response)).catchError((){

   });
  }

  @override
  Widget build(BuildContext context) {
// TODO: implement build
  throw UnimplementedError();
  }

}

```
Finally , let’s display the image and other data on the screen ,

Clear everything present inside build function , return SafeArea and make Scaffold child of it : 

```
@override
  Widget build(BuildContext context) {

return SafeArea(
        child : Scaffold(

          appBar: AppBar(
            title: Text("NASA APOD"),

       ),
),
);

}

```
Add **body** to Scaffold and pass Padding into it , make ListView  child of Padding :

```
Scaffold(

          appBar: AppBar(
            title: Text("NASA APOD"),

       ),
body : Padding(
            padding:EdgeInsets.only(top:20,left:30,right:30),
            child:ListView(
            
            children: <Widget>[
              ]
   ),
 ),
),

```
We have given a padding of 20 px from the top and 30 px from left and right , the text and image will look better .  The next thing is to display title , image and information :

```
children: <Widget>[
               Text(imageTitle,
               style: TextStyle(
                 fontWeight: FontWeight.bold
               ),
               ),
              Padding(padding: EdgeInsets.only(bottom: 20),
              ),
              Container(

                child: imageUrl!=null?Image.network(imageUrl):mediaType=="video"?Text("image is not available"):Text("Waiting For the picture"),

              ),

              Padding(padding: EdgeInsets.only(bottom: 20),
              ),

             Text(imageInfo,
            style: TextStyle(
                fontStyle: FontStyle.italic
            ),


           ),
            ],

```

We have given a padding of 20 px between title and image , and 20 px between image and information . We have put all  three inside ListView so that the user can scroll .  The only tricky part is child argument of Container , it is simple actually :
If the imagUrl is not null , it means we have successfully got the image url and we can display the image . If it is null then we check the media type , if it is video , we display that image is not available , if it’s not , then it means some error has occurred and we display “waiting for image”.

Now , it’s time to run the app , run the app in debug mode on the emulator/physical device .  

There are few points worth noting :
The api call is done using demo_key  . Using demo_key , you can make 50 requests per day and maximum 30 requests per hour. 
NASA gives an option to get the APOD of any day between June 16, 1995 ( The APOD launch date ) to today . You just have to provide the date in your request : 

https://api.nasa.gov/planetary/apod?date=1995-06-16&api_key=DEMO_KEY

The clean  way to deserialize  json is to build Strongly typed Dart classes . Also , we can use FutureBuilder to handle an api call and change the data on the UI . I avoided them because for a simple app like this , they would have been an overkill . 

