---
title: "How to use Azure Speech Services with PyQt5"
date: 2021-04-16
category: "Python"
excerpt: "Build a PyQt5 app with Azure Speech Services - learn speech to text, text to speech, and multithreading to prevent GUI freezing."
---

## Introduction

**PyQt5** is a python wrapper around **Qt**, a powerful GUI toolkit to write cross platform apps. In this tutorial we will explore how to add **Azure** speech services like speech to text and text to speech in a **PyQt5** app.

We will create a **PyQt5** app, which has one text box and two buttons and performs recognition and dictation.

There are numerous guides explaining **PyQt5**, **Azure** does a good job providing documentation and SDKs for its speech services as well. So why bother writing again? The answer is their integration can be tricky.

There are things you need to take care of while writing a GUI app. What will happen if you execute a long running task in the GUI thread? How will you communicate with a thread? How will you synchronize multiple threads? Hopefully you will find the answers after finishing the guide.

## Set up your environment

I assume you already have python installed, created a speech resource in azure and got the API keys. If you are not sure about the latter please visit the [azure doc](https://docs.microsoft.com/en-us/azure/cognitive-services/speech-service/get-started-speech-to-text?tabs=windowsinstall&pivots=programming-language-python) for detailed instruction.

If you haven't already please install these libraries, I recommend using a virtual environment:

```bash
pip install PyQt5
pip install azure-cognitiveservices-speech
pip install playsound
```

Now you are ready to go, open your favourite IDE.

## Creating a minimalistic User Interface

Create a file **ui.py**. We only need two buttons and one text box for our app:

```python
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

Run the file, you must see a text box, a **Start Listening** button and a **Dictate Text** button.

## Writing code for speech to text

Create a file **speech.py** and add following code in it:

```python
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
```

## Using QThreadPool and QRunnable to prevent GUI freezing

PyQt5 provides high level APIs such as **QRunnable** and **QThreadPool** to incorporate multithreading. **QRunnable** represents a task or piece of code which is to be run. **QThreadPool** will give you access to the global thread pool which contains reusable threads.

You can achieve multithreading in three simple steps:
1. Create a class which inherits **QRunnable**
2. Reimplement **run()** method which contains the task to be executed
3. Start the thread using **QThreadPool.globalInstance().start(runnable)**

```python
from PyQt5.QtCore import QRunnable, QThreadPool, QObject, pyqtSignal

class WorkerSignals(QObject):
    finished = pyqtSignal(str)

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

    def start(self):
        QThreadPool.globalInstance().start(self)
```

## Conclusion

We created a simple **PyQt5** app, learned how to add **Azure** speech services in it, prevented GUI freezing using multithreading and finally made the connections necessary for everything to work.

If you want complete code visit [this github repo](https://github.com/anuragseven/azurespeech-pyqt5) and don't forget to give it a like. Thank You for reading this article.
