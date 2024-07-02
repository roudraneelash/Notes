- Threads
- Process
- Using Threads
- Daemon Threads
- Life Cycle and Threads states
- Sleeping, joining and interrupting threads

- Advanced concurrency APIs
- Unstructured locks
- Executor service
- Thread pool types
- Callables and Future
- Semaphores
- Fork Join Framework

----- Thread

- Single sequential flow of control
- Sequence of programmed instructions that can be managed independently
- Allows the program to split into simultaneously running tasks

Example : Bricks in a constructing a building

------ Process
Running an application->

- Load program to memory
- Allocates resources
- "Execute" the program

Executino -> Process

- Binary instructions loaded into memory
- Gets access to resources like memory
- (Its own stack, heap, registers)
- Resource is protected from other processes
- Does its thing

Processes are independent

- Can be started and stopped without affecting others
- Cannot talk to each other( unless mechanism is coded to )

Process vs Threads

- Default execution mode of a process is concurrent
- to leverage multiple core, we need the process to run in parallel(not sequential)
- it is achieved using threads.
- Threads are unit of execution within a process

- Does the work of a process
- Usually has a shared objective
- Has shared resources like memory, heap storage.

A Java application

- A single process (JVM)
- Consists of various threads
- Application thread- responsible for running the main() method
- Other threads for runtime concerns- like grabage collection

------------------ Thread Creation

- Steps to create a thread and excute it

- create a class that implements Runnable interface and write the defination for run()
- create an instance of Thread(), and pass the runnable implementation class obj.

@FunctionalInterface
interface Runnable{
void run();
}

class MyRunnable implements Runnable{
public void run(){
System.out.println("thread is running....")
}
}

main(){
MyRunnable r= new MyRunnable();
// this wont start a new thread, it execute the run method in the same thread
r.run();
// this will start a new thread
Thread th= new Thread(r);
th.start();
}

----------- Alternate Syntax to create a Thread
----- Annonymous class

- Runnable r= new Runnable(){
  void run(){
  System.out.println("Anonymous class....")
  }
  }

------ Lamda implementations

- Runnable r= ()->System.out.println("Lamda implementation");
  new Thread(()->System.out.println("Lamda implementation")).start();

------ Implementing using Thread class

- Mythread extends Thread{
  public void run(){
  System.out.println("Thread class internally implements Runnable interface....")
  }
  }
  new Mythread().start();

---------------------------- Thread End
- Thread gets terminated when it has stopped/completed its process
- If it gets any Exception

- The application ends , when all the threads gets terminated/completed.

- There are 2 types of Thread

- User thread
- its the thread we excute after creating from Runnable interface

- Daemon Thread.
- the threads gets terminated when all user (non-daemon) threads finish their execution

Thread.join()-> basically it will make the main thread wait till all the thread finish its work/excution, i.e is not terminated

----------------------------- How do we terminate/ stop a thread

- thread.interrupt() is used to do soft terminate/interrupt a thread

-------------------------------- Parallelism vs Concurrency

- Parallel threads depends on the Core of the CPU , dual core-> so that 2 independent threads can run parallely,
- Concurrency -> when there are multiple threads working on a same core, it is managed by the OS scheduler, so it goes from running to runnable state , (i.e context switching ), the scheduler alots a certain time ,and then pause it and does context switching.
- Thread lifecycle

new->runnable->waiting,timedwaiting,Blocked-> terminated

waiting->join
timedwaiting->thread.sleep
blocked->locks

