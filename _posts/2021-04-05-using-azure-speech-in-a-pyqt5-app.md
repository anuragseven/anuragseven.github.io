---
date: 2021-04-05 10:41:41
layout: post
title: "How to use Azure Speech Services with PyQt5"
subtitle:  We will build a simple PyQt5 app which uses Azure Speech Services. We will unerstand how to add azure speech to text and text to speech in PyQt5 a app , use multithreading to prevent GUI freezing and more.
description: We will build a simple PyQt5 app which uses Azure Speech Services. We will unerstand how to add azure speech to text and text to speech in PyQt5 a app , use multithreading to prevent GUI freezing and more.   
image: https://images.unsplash.com/photo-1515879218367-8466d910aaa4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80
optimized_image:
category: Python Programming
tags:
  - Azure PyQt5 
  - Azure Speech to text PyQt5
  - Azure text to speech PyQt5
  - Azure speech to text in PyQt5 with multithreading
  - Python PyQt5 Azure Speech to text 
  - PyQt5 Azure Speech to text 
author: AnuragTripathi
paginate: false
---



<a href="/using-azure-speech-in-a-pyqt5-app/#introduction">**1. Introduction**</a>                               
<a href="/using-azure-speech-in-a-pyqt5-app/#set-up-your-environment">**2. Set up your environment**</a>                                              
<a href="/using-azure-speech-in-a-pyqt5-app/#creating-a-minimalistic-user-interface">**3. Creating a minimalistic User Interface**</a>                                 
<a href="/using-azure-speech-in-a-pyqt5-app/#writing-code-for-speech-to-text">**4. Writing code for speech to text**</a>                              
<a href="/using-azure-speech-in-a-pyqt5-app/#using-qthreadpool-and-qrunnable-to-prevent-gui-freezing">**5. Using QThreadPool and QRunnable to prevent GUI freezing**</a>                                         
<a href="/using-azure-speech-in-a-pyqt5-app/#writing-code-for-text-to-speech">**6. Writing code for text to speech**</a>                                
<a href="/using-azure-speech-in-a-pyqt5-app/#making-final-connections">**7. Making final connections**</a>                                  
<a href="/using-azure-speech-in-a-pyqt5-app/#conclusion">**8. Conclusion**</a>    


# Introduction:

**PyQt5** is a python wrapper around **Qt**, a powerful GUI toolkit to write cross platform apps. In this tutorial we will explore how to add  **Azure** speech services like speech to text and text to speech in a **PyQt5** app. We will create  a **PyQt5** app, which has one text box and two buttons and performs recognition and dictation .
There are numerous guides explaining **PyQt5** , **Azure** does a good job providing documentation and SDKs for its speech services  as well .  So why bother writing again ?  The answer is their integration can be tricky .
There are things you need to take care of while writing a GUI app. What will happen if you execute a long running task in the GUI thread ? How will you communicate with a thread ? How will you synchronize multiple threads ? Hopefully you will find  the answers after finishing the guide.

# Set up your environment:

I assume you already have python installed , created a speech resource in azure and got the API keys, if you are not sure 
about the latter please visit the <a href="https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/get-started-speech-to-text?tabs=windowsinstall&pivots=programming-language-python">azure doc</a> for detailed instruction. 
If you haven't already please install these libraries, I recommend using a virtual environment :

**pip install PyQt5**                                                                                                 
**pip install azure-cognitiveservices-speech**                                                                                 
**pip install playsound**


Now you are ready to go , open your favourite IDE.

# Creating a minimalistic User Interface

Create a file **ui.py**  . We only need two buttons and one text box for our app , add the following code in **ui.py**  :

```js
import sys
from PyQt5.QtWidgets import QApplication, QWidget, \
    QVBoxLayout, QLineEdit, QPushButton

app = QApplication(sys.argv)

class UI(QWidget):
    def __init__(self):
        super().__init__()
        self.layout = QVBoxLayout()
        self.recognised_text_box = QLineEdit()
        self.start_listening = QPushButton('Start Listening')
        self.dictate_text = QPushButton('Dictate Text')
        self.layout.addWidget(self.recognised_text_box)
        self.layout.addWidget(self.start_listening)
        self.layout.addWidget(self.dictate_text)
        self.setLayout(self.layout)

ui = UI()
ui.show()
sys.exit(app.exec_())
```
Run the file ,  you must see a  text box , a **Start Listening** button and a **Dictate Text** button.

<img src="https://user-images.githubusercontent.com/51025361/113690817-733f3280-96e9-11eb-8767-3e8047a7abe4.PNG" alt="user interface" width="317" height="257">

For now leave it as it is.
# Writing code for speech to text:
Before moving ahead create a folder **music** in the project directory , add two **.wav** music files which you can get from <a href="https://github.com/anuragseven/azurespeech-pyqt5/tree/main/music">here.</a> 
Create a file **speech.py**  and add following code in it:
```js
import azure.cognitiveservices.speech as speechsdk
from playsound import playsound

API_KEY = ''
REGION = ''

def stt():
   speech_config = speechsdk.SpeechConfig(subscription=API_KEY, region=REGION)
   speech_recognizer = speechsdk.SpeechRecognizer(speech_config=speech_config)
   playsound("music/StartBeep.wav")
   result = speech_recognizer.recognize_once()
   playsound("music/EndBeep.wav")
   if result.reason == speechsdk.ResultReason.RecognizedSpeech:
       return result.text
   elif result.reason == speechsdk.ResultReason.NoMatch:
       print("No speech could be recognized")
   elif result.reason == speechsdk.ResultReason.Canceled:
       cancellation_details = result.cancellation_details
       print("Speech Recognition canceled: {}".format(cancellation_details.reason))
       if cancellation_details.reason == speechsdk.CancellationReason.Error:
           print("Error details: {}".format(cancellation_details.error_details))

```
What’s happening? First we imported the modules necessary for speech to text and playing music . The **StartBeep** and **EndBeep** will help us identify start and end of recognition respectively .
If recognition is successful we are returning the recognised text otherwise we are printing the error message. Add your API key and region.

Now make the changes in **ui.py** , so that recognition starts after clicking on **Start Listening** button .
```js 
.
.
.
self.layout.addWidget(self.dictate_text)
self.setLayout(self.layout)
self.start_listening.clicked.connect(lambda :self.recognised_text_box.setText(stt()))
```
Don't forget to import **stt()** .  Now run **ui.py** and click on **Start Listening** . What happened ? Try minimising and maximising during recognition, the odds are the app is freezed . The issue is you are running a long running task in the gui thread which is freezing the app. Let's fix that.

# Using QThreadPool and QRunnable to prevent GUI freezing

PyQt5 provides high level APIs such as  **QRunnable** and **QThreadPool** to incorporate multithreading. **QRunnable** represents a task or piece of code which is to be run. **QThreadPool** will give you access to the global thread pool which contains reusable threads. You can achieve multithreading in three simple steps:
1. Create a class which inherits **QRunnable**                                            
2. Reimplement **run()** method which contains the task to be executed.                             
3. Start the the thread using **QThreadPool.globalInstance().start(runnable)** , where **runnable** is the instance of the class inheriting QRunnable. 

In **speech.py** add following code  :
```js
from PyQt5.QtCore import QRunnable, QThreadPool

class Stt(QRunnable):
    def __init__(self):
        super().__init__()

    def run(self) -> None:
        pass

    def start(self):
        QThreadPool.globalInstance().start(self)

```
This is the basic skeleton which is necessary for creating a  new thread and executing the task defined in **run()** method .  Now copy the contents of **stt()** function defined earlier and paste it in **run()**. The **speech.py** should now look like this:
```js
from PyQt5.QtCore import QRunnable, QThreadPool
import azure.cognitiveservices.speech as speechsdk
from playsound import playsound

API_KEY = ''
REGION = ''


class Stt(QRunnable):
    def __init__(self):
        super().__init__()

    def run(self) -> None:
        speech_config = speechsdk.SpeechConfig(subscription=API_KEY, region=REGION)
        speech_recognizer = speechsdk.SpeechRecognizer(speech_config=speech_config)
        playsound('music/StartBeep.wav')
        result = speech_recognizer.recognize_once()
        playsound("music/EndBeep.wav")

        if result.reason == speechsdk.ResultReason.RecognizedSpeech:
            return result.text
        elif result.reason == speechsdk.ResultReason.NoMatch:
            print("No speech could be recognized")
        elif result.reason == speechsdk.ResultReason.Canceled:
            cancellation_details = result.cancellation_details
            print("Speech Recognition canceled: {}".format(cancellation_details.reason))
            if cancellation_details.reason == speechsdk.CancellationReason.Error:
                print("Error details: {}".format(cancellation_details.error_details))

    def start(self):
        QThreadPool.globalInstance().start(self)


```
The problem is we can't use **return** in **run()** method , so how we are going to get the recognised text ?  Well there is a rather simple way to communicate with the thread , signals and slots.
After the thread finishes its work , it can emit a signal which is caught by a slot , we can use **pyqtSignal** for this purpose. In **speech.py** add following code :
```js
class WorkerSignals(QObject):
    finished = pyqtSignal(str)

```
Import **QObject** and **pyqtSignal** . We are passing **str** argument in **pyqtSignal** which basically means the emitted signal will have a **str** argument . Now make changes in **Stt** so that it can emit signals:
```js
from PyQt5.QtCore import QRunnable, QThreadPool, QObject, pyqtSignal
import azure.cognitiveservices.speech as speechsdk
from playsound import playsound

API_KEY = ''
REGION = ''


class Stt(QRunnable):
    def __init__(self):
        super().__init__()
        self.signals = WorkerSignals()

    def run(self) -> None:
        speech_config = speechsdk.SpeechConfig(subscription=API_KEY, region=REGION)
        speech_recognizer = speechsdk.SpeechRecognizer(speech_config=speech_config)
        playsound('music/StartBeep.wav')
        result = speech_recognizer.recognize_once()
        playsound("music/EndBeep.wav")

        if result.reason == speechsdk.ResultReason.RecognizedSpeech:
            self.signals.finished.emit(result.text)
        elif result.reason == speechsdk.ResultReason.NoMatch:
            print("No speech could be recognized")
        elif result.reason == speechsdk.ResultReason.Canceled:
            cancellation_details = result.cancellation_details
            print("Speech Recognition canceled: {}".format(cancellation_details.reason))
            if cancellation_details.reason == speechsdk.CancellationReason.Error:
                print("Error details: {}".format(cancellation_details.error_details))

    def start(self):
        QThreadPool.globalInstance().start(self)


class WorkerSignals(QObject):
    finished = pyqtSignal(str)


```
The class **Stt** is now complete before moving ahead let's write a class for text to speech as well.


# Writing code for text to speech:

First prepare a skeleton  similar to what you did for speech to text :
```js
class Tts(QRunnable):
    def __init__(self):
        super().__init__()
    
    def run(self) -> None:
        pass
    
    def start(self):
        QThreadPool.globalInstance().start(self)

```

 

Now make these changes so it can actually start converting text to speech:
```js
class Tts(QRunnable):
    def __init__(self, text):
        super().__init__()
        self.text = text

    def run(self) -> None:
        speech_config = speechsdk.SpeechConfig(subscription=API_KEY, region=REGION)
        synthesizer = speechsdk.SpeechSynthesizer(speech_config=speech_config)
        synthesizer.speak_text(self.text)

    def start(self):
        QThreadPool.globalInstance().start(self)

```
As you can see , we are passing the text which is to be dictated in the constructor. 
Lets jump in **ui.py** and make all the connections.

# Making final connections:

Open the file **ui.py** , first import **Stt** and **Tts** from **speech** , then  remove this line :
```js
self.start_listening.clicked.connect(lambda :self.recognised_text_box.setText(stt()))
```
Now define what would happen when the user clicks on **Start Listening** button:

```js
    def on_start_listening(self):
        self.start_listening.setDisabled(True)
        stt = Stt()
        stt.signals.finished.connect(self.on_speech_recognized)
        stt.start()

```
Define **on_speech_recognized** method:
```js
    def on_speech_recognized(self, text):
        self.start_listening.setDisabled(False)
        self.recognised_text_box.setText(text)
```
Now connect **on_start_listening**  on the clicked event of **Start Listening** button
```js
self.start_listening.clicked.connect(self.on_start_listening)
```
We are done with **Start Listening**.  Lets define the clicked event of **Dictate Speech**:
```js
     def on_dictate_text_clicked(self):
        self.dictate_text.setDisabled(True)
        tts = Tts(self.recognised_text_box.text())
        tts.signals.finished.connect(lambda: self.dictate_text.setDisabled(False))
        tts.start()


```
Finally add this line at the end of the **UI** constructor:
```js
self.dictate_text.clicked.connect(self.on_dictate_text_clicked)
```
Now the **ui.py** should look like this:
```js
import sys
from PyQt5.QtWidgets import QApplication, QWidget, \
    QVBoxLayout, QLineEdit, QPushButton
from speech import Stt, Tts

app = QApplication(sys.argv)

class UI(QWidget):
    def __init__(self):
        super().__init__()
        self.layout = QVBoxLayout()
        self.recognised_text_box = QLineEdit()
        self.recognised_text_box.setReadOnly(True)
        self.start_listening = QPushButton('Start Listening')
        self.dictate_text = QPushButton('Dictate Text')
        self.layout.addWidget(self.recognised_text_box)
        self.layout.addWidget(self.start_listening)
        self.layout.addWidget(self.dictate_text)
        self.setLayout(self.layout)
        self.start_listening.clicked.connect(self.on_start_listening)
        self.dictate_text.clicked.connect(self.on_dictate_text_clicked)

    def on_start_listening(self):
        self.start_listening.setDisabled(True)
        stt = Stt()
        stt.signals.finished.connect(self.on_speech_recognized)
        stt.start()

    def on_speech_recognized(self, text):
        self.start_listening.setDisabled(False)
        self.recognised_text_box.setText(text)

    def on_dictate_text_clicked(self):
        self.dictate_text.setDisabled(True)
        tts = Tts(self.recognised_text_box.text())
        tts.signals.finished.connect(lambda: self.dictate_text.setDisabled(False))
        tts.start()

ui = UI()
ui.show()
sys.exit(app.exec_())

```
Great!  We are done . Run the **ui.py** to see everything is working as expected.

# Conclusion:
We created a simple **PyQt5** app , learned how to add **Azure** speech services in it , prevented GUI freezing using multithreading and finally made the connections necessary for everything to work . Great job! 
If you want complete code  visit <a href="https://github.com/anuragseven/azurespeech-pyqt5">this github repo</a> and don't forget to give it a like . Thank You for reading this article . 
  
