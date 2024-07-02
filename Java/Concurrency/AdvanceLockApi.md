---------------------- Advanced Locks
To work independently of the object/synchronization, Java provides several advanced locks:

- Reeentrant lock
- Reeentrant Readwrite lock
- stamp lock
- Semaphore lock

---------------------- ReentrantLock
Allows the same thread to enter a locked section more than once.

-- code

import java.util.concurrent.locks.ReentrantLock;

public class ReentrantLockExample {
private final ReentrantLock lock = new ReentrantLock();
private int counter = 0;

    public void increment() {
        lock.lock();
        try {
            counter++;
            System.out.println(Thread.currentThread().getName() + " incremented counter to " + counter);
        } finally {
            lock.unlock();
        }
    }

}

------------------------- ReentrantReadWriteLock

Provides a shared lock for reading and an exclusive lock for writing.Reentrant read/write lock- here read lock is acquired as a shared lock(i.e multiple thread can have the monitor lock),
and for write it is exclusive lock(only one thread can acquire the lock at a same time).

-- code
import java.util.concurrent.locks.ReentrantReadWriteLock;

public class ReentrantReadWriteLockExample {
private final ReentrantReadWriteLock rwLock = new ReentrantReadWriteLock();
private final ReentrantReadWriteLock.ReadLock readLock = rwLock.readLock();
private final ReentrantReadWriteLock.WriteLock writeLock = rwLock.writeLock();
private int counter = 0;

    public void increment() {
        writeLock.lock();
        try {
            counter++;
            System.out.println(Thread.currentThread().getName() + " incremented counter to " + counter);
        } finally {
            writeLock.unlock();
        }
    }

    public int getCounter() {
        readLock.lock();
        try {
            return counter;
        } finally {
            readLock.unlock();
        }
    }

}
------------------------------ StampedLock
Provides read, write, and optimistic read locks. Optimistic reads do not block.Optimistic lock-> without any lock the data handling is done. i.e during read time , we get a stamp(i.e the state of the read value),
and while unlocking the lock we validate if the state is same for the data ,if yes then we move ahead and release the lock, else we rollback and again get the current data with the same state.

Key Points
Optimistic Reading: The optimistic read allows multiple threads to read data concurrently without blocking each other, improving performance in read-heavy workloads.
Validation: Validation ensures that the data read optimistically is consistent. If the data has been modified by a write operation, the reader thread falls back to a traditional read lock to get consistent data.
Rollback: In the context of optimistic locking, "rollback" refers to discarding the optimistically read data if the validation fails and reading the data again with proper locking.
Optimistic locking is efficient for scenarios where conflicts are rare and the cost of occasional retries (falling back to a read lock) is outweighed by the performance benefits of allowing concurrent reads.
-- code
import java.util.concurrent.locks.StampedLock;

public class StampedLockExample {
private final StampedLock lock = new StampedLock();
private int counter = 0;

    public void increment() {
        long stamp = lock.writeLock();
        try {
            counter++;
            System.out.println(Thread.currentThread().getName() + " incremented counter to " + counter);
        } finally {
            lock.unlockWrite(stamp);
        }
    }

    public int getCounter() {
        long stamp = lock.tryOptimisticRead();
        int currentCounter = counter;
        if (!lock.validate(stamp)) {
            stamp = lock.readLock();
            try {
                currentCounter = counter;
            } finally {
                lock.unlockRead(stamp);
            }
        }
        return currentCounter;
    }

}

------------------------------------- Semaphore

Controls access to a resource with a fixed number of permits.

-- code
import java.util.concurrent.Semaphore;

public class SemaphoreExample {
private final Semaphore semaphore = new Semaphore(2);
private int counter = 0;

    public void increment() {
        try {
            semaphore.acquire();
            counter++;
            System.out.println(Thread.currentThread().getName() + " incremented counter to " + counter);
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
        } finally {
            semaphore.release();
        }
    }

}
