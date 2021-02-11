# 00 - Getting Started

## Contents:

- Initialization of `System`.
- Using `update` and `draw` queues.
- Starting `System`.

<br/>

## Initialization of `System`

The `System` is the main control class in Cherry, it is the responsible of timely frame drawing, frame updates, and handling pointer and keyboard events. Once the `System` has been initialized the properties `screenWidth` and `screenHeight` will be available.

- Initialization is done by calling the **init ([options: Object])** method, please view system.md file for further details about the options object.

- After initialization, the system is started by calling the `start()` method, afterwards it will take care of all rendering and updates to ensure the desired FPS is met.

- A full-stop (no more draw nor update cycles) is achieved by calling the `stop()` method.

- And a partial-stop (just update cycles stopped) is achieved by calling the `pause()` method, and then call `resume()` to resume it.

<br/>

## Using `update` and `draw` callbacks

`System` as mentioned before, is responsible for frame draw and frame update, this is done by registering an object to either queue or to both. When an object is registered for the `update` queue it must have an **update (deltaTime: float)** method (`deltaTime` is in seconds), and when registered for the `draw` queue it must have a **draw (canvas: Canvas)** method.

- Use `updateQueueAdd (obj: Object)` to add the object to the update queue.
- Use `drawQueueAdd (obj: Object)` to add the object to the draw queue.
- Use `queueAdd (obj: Object)` to add the object to both update and draw queues.

And symmetrically:

- Use `updateQueueRemove (obj: Object)` to remove the object from the update queue.
- Use `drawQueueRemove (obj: Object)` to remove the object from the draw queue.
- Use `queueRemove (obj: Object)` to remove the object from both the update and draw queues.
