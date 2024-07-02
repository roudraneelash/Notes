-------------------------------------------------- Thread Pool and Executor Service in Java

Thread Pool:

- A thread pool is a collection of pre-initialized threads that can be reused to execute multiple tasks.
- It helps in managing a pool of worker threads efficiently, minimizing the overhead of creating and destroying threads.
- Thread pools can improve the performance and resource utilization of an application.

Executor Service:

- The `ExecutorService` is a higher-level replacement for working with threads directly.
- It provides a framework for managing a pool of worker threads, scheduling tasks, and handling their lifecycle.

----------------------------------------- Working of ExecutorService and Thread Pool

1. Creating an ExecutorService:
   - You can create an instance of `ExecutorService` using factory methods in the `Executors` class.

import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class ExecutorServiceExample {
public static void main(String[] args) {
// Create a fixed thread pool with 5 threads
ExecutorService executorService = Executors.newFixedThreadPool(5);

        // Submit tasks to the executor service
        for (int i = 0; i < 10; i++) {
            executorService.submit(new Task());
        }

        // Shutdown the executor service
        executorService.shutdown();
    }

}

class Task implements Runnable {
@Override
public void run() {
System.out.println(Thread.currentThread().getName() + " is executing task.");
try {
Thread.sleep(1000); // Simulating some work
} catch (InterruptedException e) {
Thread.currentThread().interrupt();
}
}
}

------------------------------------------------- Types of Thread Pools:

- Fixed Thread Pool: A pool with a fixed number of threads. If all threads are busy, new tasks wait in a queue.

// ExecutorService fixedThreadPool = Executors.newFixedThreadPool(5);

- Cached Thread Pool: A pool that creates new threads as needed, but reuses previously constructed threads when they are available.

// ExecutorService cachedThreadPool = Executors.newCachedThreadPool();

- Single Thread Executor: An executor that uses a single worker thread to execute tasks sequentially.

// ExecutorService singleThreadExecutor = Executors.newSingleThreadExecutor();

- Scheduled Thread Pool: A pool that can schedule commands to run after a given delay or to execute periodically.

// ScheduledExecutorService scheduledThreadPool = Executors.newScheduledThreadPool(5);

3. Submitting Tasks:
   - You can submit tasks for execution using the `submit()` or `execute()` methods.

executorService.submit(() -> {
System.out.println("Task executed");
});

```

4. Shutting Down ExecutorService:
   - It's important to properly shut down the `ExecutorService` to allow previously submitted tasks to execute before terminating.

// code
executorService.shutdown();
try {
    if (!executorService.awaitTermination(60, TimeUnit.SECONDS)) {
        executorService.shutdownNow();
    }
} catch (InterruptedException e) {
    executorService.shutdownNow();
}
--------------------------------------- Lifecycle of ExecutorService

1. Creating the ExecutorService:
   - Create an instance using factory methods from `Executors` class.

2. Submitting Tasks:
   - Submit tasks to the executor service using `submit()` or `execute()` methods.

3. Task Execution:
   - Tasks are executed by the threads in the pool. If all threads are busy, tasks are placed in a queue.

4. Shutdown:
   - `shutdown()`: Initiates an orderly shutdown in which previously submitted tasks are executed, but no new tasks will be accepted.
   - `shutdownNow()`: Attempts to stop all actively executing tasks and halts the processing of waiting tasks.

5. Await Termination:
   - `awaitTermination()`: Blocks until all tasks have completed execution after a shutdown request, or the timeout occurs, or the current thread is interrupted, whichever happens first.

Example: Using Different Types of Executors

------------ shutdown vs await Termination vs shutdownNow

- Shutdown:
Initiate orderly shutdown of the ExecutorService.
After calling 'Shutdown', Executor will not accept new task submission.
Already Submitted tasks, will continue to execute.

- AwaitTermination:

Its an Optional functionality. Return true/false.
It is used after calling 'Shutdown' method.
```
