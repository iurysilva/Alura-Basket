# ⚛️ React Native: Starting from zero

This is a project from the **Starting from Zero** program, part of the **React Native** course by [Alura](https://www.alura.com.br/).

## 📱 Project

This project implements a screen of details for a e-commerce orgs basket. This screen will contain static data about the basket name, farm, price and items.

<img src="https://user-images.githubusercontent.com/9091491/123982988-e3ccb700-d999-11eb-880e-872881ee8b10.gif" width="350" />

## 🧑‍💻 Techniques and technologies

The techniques and technologies used in this project are:

- `Expo`: technology used to simplify the development environment
- `Componentes React Native`: basic pre-existing components of the technology to fill the screen
  - `Text`: component used to show texts
  - `View`: container of component blocks
  - `ScrollView`: container of component blocks with scrollbar
  - `Image`: component to show images
  - `TouchableOpacity`: component to creact clickable areas
- `Componentes customizados`: creation and utilization of customized components
- `Suporte a telas`: do not allow content to be  under the status bar
- `Expo Google Fonts`: Google Fonts support via expo
- `StyleSheet`: basic component stylization
- `Dimensions`: retrieve data about screen dimensions

## 📲 Running the project

### ✔️ Pré-requirements

To be able to follow this README and run the project, you might need to have the following items:
- Git to clone the project and and have access to its branches. You can install [](https://git-scm.com/downloads);
- Node so we can run `expo` and `npm`. You can isntall it [here](https://nodejs.org/en/);
- A Android or iOS phone with expo installed. Or else, some Android or iOS simulator in your computer;

If one want to test the installations, it is necessary to run those command below separately, they need to show the versions.

```
git --version
node --version
npm --version
```

With `npm` installed we can install `expo` and check its versions:
```
npm install --global expo-cli
expo --version
```

### 🐙 Clonning the project

To have access to the project files, one need to clone it using the following commands:

```
git clone https://github.com/alura-cursos/react-native-comecando-do-zero.git
```

### ▶️ Running project

Now that you have the project folders in your machine, install its dependencies inside it:
```
npm install
```

So, we can run the project:
```
npm start
```

A page in the browser should open, generally in [this address](http://localhost:19002/).
If you're using a phone, **scan the QR code using the Expo app** or the camera.
If your phone is connected to a different network from your computer, change "CONNECTION" to "Tunnel", and the app will be transmitted on the internet.
If you have a emulator, click in the operational system option in the left menu of your emulator.

Done, now you should see the app running.