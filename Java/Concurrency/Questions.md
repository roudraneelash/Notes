HOW IT HAPPENS..?
Concurrency challenges arise when multiple tasks or processes are executed simultaneously, especially in environments with shared resources. Here are some key challenges associated with concurrency:

1. Race Conditions
   Definition: Occur when multiple threads or processes access and modify shared data simultaneously, leading to unpredictable results.
   Example: Two threads incrementing a shared counter without synchronization might both read the same initial value, increment it, and write back the same result, effectively losing one increment.
2. Deadlocks
   Definition: Occur when two or more threads or processes are waiting indefinitely for resources held by each other, creating a cycle of dependencies that prevents them from proceeding.
   Example: Thread A holds Resource 1 and waits for Resource 2, while Thread B holds Resource 2 and waits for Resource 1.
3. Starvation
   Definition: Happens when a thread or process is perpetually denied necessary resources to proceed, often due to other threads/processes monopolizing those resources.
   Example: A low-priority thread never gets CPU time because high-priority threads keep executing.
4. Livelocks
   Definition: Occur when threads or processes continuously change their state in response to each other without making any progress.
   Example: Two threads repeatedly yield to each other, each thinking the other needs the resource first.
5. Synchronization Overhead
   Definition: The additional time required to manage access to shared resources, which can degrade performance.
   Example: Excessive use of locks can slow down a program due to the overhead of acquiring and releasing locks.
   Mitigation Strategies
   Locks and Mutexes: Ensure only one thread accesses critical sections at a time.
   Semaphores: Control access to a common resource by multiple threads.
   Atomic Operations: Perform read-modify-write operations as a single, indivisible step.
   Thread Pools: Manage a pool of worker threads to optimize resource usage and avoid excessive thread creation.
   Lock-Free Data Structures: Use data structures that do not require locks, minimizing the risk of deadlocks and reducing overhead.
   Proper Design: Architect systems to minimize shared state and dependencies between threads.
   Examples
   DeadLock
