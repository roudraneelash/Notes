- Extend 'Thread' class
- Implementin Runnable Interface.

@FunctionalInterface
interface Runnable(){
run();
}

class Thread implements Runnable{
init()
run()
sleep()
start()
stop()
interrupt()
etc...
}

step1: Create a Runnable Obj

Create a class that implements 'Runnable' interface
implement run() method to tell the task which thread has to do.

public class MultithreadingLearning implements Runnable{
@Override
public void run(){
System.out.println("code executed by thread: "+Thread.currentThread().getName());
}
}

step2:
Create an instance of the class that implements 'Runnable'

- pass Runnable obj to thread constructor
- start the thread.

---------------------------------------------------Thread Lifecycle in Java

-The lifecycle of a thread includes various states, transitions between these states, and events that cause these transitions.
1.New

- Definition: When a new thread is created, it is in the `New` state.
- Transition: This state transitions to `Runnable` when the `start()` method is called.

2. Runnable

- Definition: A thread that is ready to run is in the `Runnable` state. This state includes both threads waiting for CPU time and threads currently executing (i.e., `Running`).
- Running: When the CPU allocates time to the thread, it moves from `Runnable` to `Running`.
- Transition: The thread can move between `Runnable` and `Running` states due to context switching.

3. Blocked

- Definition: A thread enters the `Blocked` state when it is waiting to acquire a lock or monitor.
- Transition: The thread will move back to `Runnable` once it acquires the necessary lock.

#### 4. **Waiting**

- **Definition**: A thread enters the `Waiting` state when it is waiting indefinitely for another thread to perform a particular action. This is typically achieved using `wait()` method.
- **Transition**: The thread moves from `Waiting` to `Runnable` when another thread calls `notify()` or `notifyAll()` on the same object.

#### 5. **Timed Waiting**

- **Definition**: A thread enters the `Timed Waiting` state when it is waiting for a specified amount of time. This can be caused by methods such as `sleep(milliseconds)`, `wait(milliseconds)`, or `join(milliseconds)`.
- **Transition**: The thread will move from `Timed Waiting` to `Runnable` either when the specified time elapses or if it is notified or interrupted.

#### 6. **Terminated**

- **Definition**: A thread enters the `Terminated` state once it has completed its execution or is aborted.
- **Transition**: This state is the end of the thread's lifecycle. It cannot transition to any other state.

### Thread States with Transitions

1. **New**

   - **Transition**:
     - `start()`
     - **Next State**: Runnable

2. **Runnable** (Ready to run or currently running)

   - **Transition**:
     - Context Switching
     - **Next State**: Running (when the CPU allocates time)

3. **Running**

   - **Transition**:
     - `sleep(milliseconds)`
     - `wait()`
     - `join(milliseconds)`
     - **Next State**: Timed Waiting or Waiting
     - `Blocked` (if waiting to acquire a lock)

4. **Blocked**

   - **Transition**:
     - Acquires lock
     - **Next State**: Runnable

5. **Waiting**

   - **Transition**:
     - `notify()`
     - `notifyAll()`
     - **Next State**: Runnable

6. **Timed Waiting**

   - **Transition**:
     - Time expires
     - **Next State**: Runnable

7. **Terminated**
   - **Transition**:
     - End of execution
     - **Next State**: None (end of lifecycle)

Summary Diagram of Thread Lifecycle

```
     New
      |
    start()
      |
      V
  Runnable <----> Running
      |               |
Blocked (I/O or lock)| (context switching)
      |               |
      V               V
  Waiting         Timed Waiting
      |               |
notify()/notifyAll()  |
      |               |
      +--> Runnable <--+
            |
        Thread finishes
            |
            V
      Terminated
```

Key Points to Remember

- New: The thread is created but not yet started.
- Runnable: The thread is ready to run and waiting for CPU time.
- Running: The thread is actively executing.
- Blocked: The thread is waiting to acquire a lock.
- Waiting: The thread is waiting indefinitely for another thread to perform an action.
- Timed Waiting: The thread is waiting for a specified period.
- Terminated: The thread has completed execution or is aborted.

why stop,Resume,Suspended method is deprecated.?

Stop : terminates the thread abruptly, no lock release, no resource clean up happens.
Suspend: Put the thread on hold(suspend) for temporarily. No lock is release too.
Resume: Used to Resume the execution of Suspended thread.

Both this operation could led to issues like deadlock.

-- instead using wait()/notify()/ sleep(during the time , lock is produce on the obj) is prefered.

scene 1:
th1.start();
th2.start();
try {
Thread.sleep(3000);
}catch(Exception e) {
// handle any exception
}
System.out.println("thread 1 is suspended");
th1.suspend();
System.out.println("Main thread is finishing its work");

    output:
    Main thread started

thread 1 calling produce method
Lock acquired
Thread2 calling produce method
thread 1 is suspended
Main thread finished

--th2 is in deadlock

scene 2:
th1.start();
th2.start();
try {
Thread.sleep(3000);
}catch(Exception e) {
// handle any exception
}
System.out.println("thread 1 is suspended");
th1.suspend();
System.out.println("Main thread is finishing its work");
th1.resume();
output:
Main thread started
thread 1 calling produce method
Lock acquired
Thread2 calling produce method
thread 1 is suspended
Main thread finished
Lock release
Lock acquired
Lock release

-- join

th1.start();
th2.start();
try {

    		Thread.sleep(3000);
      th1.join();
    	}catch(Exception e) {
    		// handle any exception
    	}

    	System.out.println("thread 1 is suspended");
    	th1.suspend();
    	System.out.println("Main thread is finishing its work");
    th1.resume();

-- Thread Priority

Thread thread1 = new Thread(() -> {
System.out.println("Thread 1 running");
});
thread1.setPriority(Thread.MAX_PRIORITY);

Thread thread2 = new Thread(() -> {
System.out.println("Thread 2 running");
});
thread2.setPriority(Thread.MIN_PRIORITY);

thread1.start();
thread2.start();

-- Priority Range: Thread priorities are integers between Thread.MIN_PRIORITY (1) and Thread.MAX_PRIORITY (10). The default priority is Thread.NORM_PRIORITY (5).
In this example, thread1 has the highest priority and thread2 has the lowest. The thread scheduler will give preference to thread1 over thread2, but this does not guarantee the exact order of execution due to the JVM's implementation specifics and the underlying OS's thread scheduling.

--- Demon threads

Daemon threads are background threads that do not prevent the JVM from exiting when the program finishes executing all user threads. They are typically used for tasks such as garbage collection, monitoring, or other background services.
When all user threads (non-daemon threads) finish execution, the JVM terminates all daemon threads and shuts down.

Thread daemonThread = new Thread(() -> {
while (true) {
System.out.println("Daemon thread running");
try {
Thread.sleep(1000);
} catch (InterruptedException e) {
e.printStackTrace();
}
}
});
daemonThread.setDaemon(true);
daemonThread.start();

Thread userThread = new Thread(() -> {
System.out.println("User thread running");
try {
Thread.sleep(3000);
} catch (InterruptedException e) {
e.printStackTrace();
}
System.out.println("User thread finished");
});
userThread.start();
