# Navigation Template Project
## for react-native developments

This code is provided as a template project for developers wishing to create a react-native project that uses basic navigation between screens, using the generic [Navigator component](https://facebook.github.io/react-native/docs/navigator.html).

Provided is a basic routing setup with an initial route and two additional screens that demonstrate the push and pop methods of the Navigator component for the purpose of transitioning between screens.

Additionally, an example of how to pass values between screens using properties.

Hoping to add an example of some unit tests to complement the template in the near future. If you would like to fork your own branch and contribute to the template project, please feel free to do so. I would be most welcoming of your contributions toward a simple "goto" react-native sample project.

## Android Instructions

Setup the react-native environment for Android development as described in the [guides](https://facebook.github.io/react-native/docs/android-setup.html).

Navigate to the directory into which you have cloned this project and execute the following command:

```
$ npm install
```

This will install the dependencies required by the project. Once completed - assuming you have an Android emulator/device setup and ready - you can then execute the following command to build, deploy, and run the code as an app on your device/emulator:

```
$ react-native run-android
```

## iOS Instructions

Setup the react-native environment for iOS development as described in the [guides](https://facebook.github.io/react-native/docs/getting-started.html).

Navigate to the directory into which you have cloned this project and execute the following command:

```
$ npm install
```

This will install the dependencies required by the project. Once completed - assuming you have the iOS Xcode developer tools installed - you can then execute the following command to open the project in Xcode.

```
$ open ios/ReactNativeNavigationTemplate.xcodeproj
```

Within Xcode you can select a target device to run your project upon and then click the 'play' button to build and deploy your project onto the emulator. Alternatively, you can execute the following command (assuming that Xcode development tools are available on your system path):

```
$ react-native run-ios
```

This will also build the project and deploy to the default emulator, without launching the Xcode GUI.

Have fun!
