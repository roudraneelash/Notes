------------------- Need for Concurrency

- When threads execute, they make a copy of variables into their local cache from the main memory.
- Threads read, modify, and then update variables back to the system memory, which can cause inconsistency.
- When multiple threads work on the same variable concurrently, this can lead to race conditions and data inconsistency.

----------------------- Concurrency
Concurrency is often managed using blocking mechanisms, i.e., locks.

Synchronization using the synchronized keyword

- Explicit acquire/release of lock is done

-- Object-level Lock (Intrinsic Lock / Monitor Lock)
// example

synchronized(object) {
// The thread will acquire a lock on the object,
// and after completing its work, it will release the lock.
// No other thread can acquire a lock on the same object simultaneously.
}
-- Method-level Lock

public synchronized void method() {
// Here, the lock is acquired at the method level, on the object calling the method.
// Different threads working on different objects can still work independently.
}

Note: Synchronization is object-dependent.

------------------------------- Optimizing Lock Conditions

Points to Perform Optimized Lock Conditions:

1. Choose the Right Object for Locking:

   - Select an object that is shared across the threads that need synchronization.
   - Ensure the object chosen has a clear and consistent locking strategy.

2. Synchronize the Bare Minimum Code Necessary:
   - Only the critical section of code that modifies shared resources should be synchronized.
   - Minimize the scope of synchronization to reduce contention and increase concurrency.

Problems with Locking

1. Choosing Wrong Locks:

   - Locking on an inappropriate object can lead to unexpected behavior or inefficiency.
   - For instance, locking on local variables or different instances of an object can fail to protect shared resources.

2. Extreme Synchronization:
   - Overusing synchronization can serialize code that could otherwise run concurrently.
   - This can degrade performance by turning potentially parallel execution into serial execution.

Liveness Problems

Liveness Issues:

- Situations where threads are unable to proceed because they are waiting indefinitely for resources.

Deadlock

Deadlock:

- Occurs when two or more threads are blocked forever, each waiting on the other to release a lock.
- Typically happens when locks are acquired in different orders by different threads.

Example:

// Thread 1
synchronized(objRef1) {
synchronized(objRef2) {
// critical section
}
}

// Thread 2
synchronized(objRef2) {
synchronized(objRef1) {
// critical section
}
}

```

In the above example, `Thread 1` acquires a lock on `objRef1` and waits for a lock on `objRef2`. Meanwhile, `Thread 2` acquires a lock on `objRef2` and waits for a lock on `objRef1`. Neither thread can proceed, causing a deadlock.

Strategies to Avoid Deadlock

1. Lock Ordering:
   - Always acquire locks in a predefined order. This avoids circular waiting.

// Both threads should acquire locks in the same order
synchronized(objRef1) {
    synchronized(objRef2) {
        // critical section
    }
}

2.Lock Timeout:
   - Use a timeout when attempting to acquire a lock. If the lock isn't acquired within the timeout period, the thread can back off and try again.

import java.util.concurrent.locks.ReentrantLock;
import java.util.concurrent.TimeUnit;

public class LockTimeoutExample {
    private final ReentrantLock lock1 = new ReentrantLock();
    private final ReentrantLock lock2 = new ReentrantLock();

    public void method1() throws InterruptedException {
        if (lock1.tryLock(1000, TimeUnit.MILLISECONDS)) {
            try {
                if (lock2.tryLock(1000, TimeUnit.MILLISECONDS)) {
                    try {
                        // critical section
                    } finally {
                        lock2.unlock();
                    }
                }
            } finally {
                lock1.unlock();
            }
        }
    }
}
3. Deadlock Detection:
   - Use tools or algorithms to detect deadlocks and take corrective actions, such as terminating one of the deadlocked threads.

Example: Correcting Synchronization Issues

Problematic Synchronization:
public class ExtremeSynchronization {
    public synchronized void performTask() {
        // Large critical section
        // All threads wait for this
    }
}

Optimized Synchronization:

public class OptimizedSynchronization {
    private final Object lock = new Object();

    public void performTask() {
        // Non-critical section code

        synchronized (lock) {
            // Minimized critical section
        }

        // More non-critical section code
    }
}

---------------------- Volatile

The volatile keyword ensures that a variable is read from and written to the main memory directly, not from the thread's local cache.

Volatile Variables
volatile is a keyword in Java used to mark a variable as being stored in main memory. More precisely, it ensures that every read of a volatile variable will be read from main memory, and not from a CPU cache, and that every write to a volatile variable will be written to main memory.

Key Characteristics of volatile:
Visibility:

Changes to a volatile variable are always visible to other threads. When a volatile variable is modified by one thread, other threads see the updated value immediately.
No Caching:

The value of a volatile variable is never cached thread-locally. All reads and writes go directly to and from the main memory
```

---------------- Atomic

Lock-free:
-- Atomic variables use low-level atomic hardware primitives like Compare-And-Swap (CAS) to provide thread-safety without using locks, which can lead to better performance and scalability.
-- The compareAndSet method in atomic variables is a form of optimistic concurrency control. It attempts to update a variable only if it has not been changed by another thread since the last read.

Common Atomic Classes:
AtomicInteger
AtomicLong
AtomicBoolean
AtomicReference
