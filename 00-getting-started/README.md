# 00 - Getting Started

## Contents:

- Initialization of `System`.
- Using `update` and `draw` queues.
- Starting `System`.


## Initialization of `System`

The `System` is the main control class in Cherry, it is the responsible of timely frame drawing, frame updates, and handling pointer and keyboard events. Once the `System` has been initialized the properties `screenWidth` and `screenHeight` will be available.

Initialization is done by calling the `init ([options: Object])` method, the options is an optional object having one or more of the following properties:

### System Initialization Options

|Property Name|Description|Default Value
|-------------|-----------|-------------
|`background`|Background color of the canvas.|`#000`
|`fps`|Maximum number of frames per second (FPS) the system should target.|`60`
|`minFps`|Minimum number of FPS the system is allowed to reach, when an FPS lower that this value is detected the system will ensure a fixed time step of 1000/minFps is used.|`15`
|`antialias`|Indicates if antialias should be enabled on the `System` Canvas.|`true`
|`targetScreenWidth`|When not-null or not-zero specifies the target screen width desired. If a larger or smaller width is detected on the client, the `System` will scale it appropriately such that you can always assume your width is `targetScreenWidth`.|`null`
|`targetScreenHeight`|Same as above, but for height.|`null`
|`orientation`|Specifies the target screen orientation. See available orientations below for details.|`System.DEFAULT`
|`fullscreen`|When `true` the `System` will use the `screen` object to size the canvas. When `false` it will use the `window`'s inner bounds.|`true`

### Orientation

Orientation constants are accessed using `System` and the following are available:

|Constant|Description
|----|-----------
|`System.DEFAULT`|Keep whatever orientation the user has, never rotate the canvas.
|`System.LANDSCAPE`|Force landscape orientation, will rotate the canvas when portrait is detected to ensure that `screenWidth` > `screenHeight`.
|`System.PORTRAIT`|Force portrait orientation, will rotate the canvas when landscape is detected to ensure that  `screenWidth` < `screenHeight`.
|`System.AUTOMATIC`|Detect either orientation and rotate the canvas accordingly.

## Using `update` and `draw` callbacks

`System` as mentioned before, is responsible for frame draw and frame update, this is done by registering an object to either queue or to both. When an object is registered for the `update` queue it must have an `update (deltaTime: int)` method (`deltaTime` is in milliseconds), and when registered for the `draw` queue it must have a `draw (canvas: Canvas)` method.

- Use `updateQueueAdd (obj: Object)` to add the object to the update queue.
- Use `drawQueueAdd (obj: Object)` to add the object to the draw queue.
- Use `queueAdd (obj: Object)` to add the object to both update and draw queues.

And symmetrically:

- Use `updateQueueRemove (obj: Object)` to remove the object from the update queue.
- Use `drawQueueRemove (obj: Object)` to remove the object from the draw queue.
- Use `queueRemove (obj: Object)` to remove the object from both the update and draw queues.

## Initialization of `System`

The `System` is started by calling the `start()` method, afterwards it will take care of all rendering and updates to ensure the desired FPS is met.

A full-stop (no more draw nor update cycles) is achieved by calling the `stop()` method.

And a partial-stop (just update cycles stopped) is achieved by calling the `pause()` method, and then call `start()` to resume it.

## Last Words

This example contains what we've covered here, and uses the `Canvas` object to draw three bouncing circles on the screen.
