
------------------------------- Callable/Future Object/Fork Join Pool

### Difference between `Runnable` and `Callable`

**Runnable:**
- Represents a task that can be executed concurrently by a thread.
- Does not return a result and cannot throw a checked exception.
- Defined with a `run()` method.

```java
Runnable task = () -> {
    System.out.println("Executing task...");
};

// Executing with a thread
Thread thread = new Thread(task);
thread.start();
```

**Callable:**
- Represents a task that can be executed concurrently by a thread.
- Returns a result and can throw a checked exception.
- Defined with a `call()` method.

```java
Callable<String> task = () -> {
    return "Task result";
};

// Executing with an ExecutorService
ExecutorService executor = Executors.newSingleThreadExecutor();
Future<String> future = executor.submit(task);

try {
    String result = future.get(); // Blocks until the result is available
    System.out.println("Task result: " + result);
} catch (InterruptedException | ExecutionException e) {
    e.printStackTrace();
}

executor.shutdown();
```

### `Future` Object

- Represents the result of an asynchronous computation.
- Methods:
  - `get()`: Retrieves the result, blocking if necessary.
  - `cancel(boolean mayInterruptIfRunning)`: Attempts to cancel the execution.
  - `isCancelled()`: Checks if the task was cancelled.
  - `isDone()`: Checks if the task has completed.