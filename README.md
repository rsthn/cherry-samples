# Cherry Samples

This folder contains all the currently available samples for the Cherry Gamedev library, each one is contained within its own folder with its own README describing what you will learn with it.

# Installation

First clone this repository and ensure you have NodeJS installed. The root folder of this repo is a NodeJS project that requires **browserify**, **watchify**, and of course **Cherry**. To install all required dependencies simply run:

```sh
npm install --no-optional
```

# Compiling Samples

Each sample is contained within its own folder, each of these folders start with two digits indicating the order in which you should try them. Once you decide which sample you'd like to try, to build it run the following:

```sh
npm run sample-folder
```

Or if you want to watch it for changes and auto rebuild (in case you're messing with it) use:

```sh
npm run watch-sample-folder
```

Where "sample-folder" is the name of the sample you'd like to try. For example, the first one is `00-getting-started`, therefore you can build it using:

```sh
npm run 00-getting-started
```

Once built, to view the final result just open the `index.html` file located in the `dist` folder.

Have fun!
