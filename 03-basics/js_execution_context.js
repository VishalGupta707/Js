
/*
javascript execution context
1. Global execution context{} -> this 

2. Function execution context

3. Eval execution context

steps
{}-> Memory creation phase
     Execution phase


     let val1=5
     let val2=10
     function addNum(val1,val2){
       let total=num1+num2
       return total
     }
     let result1=addNum(val1,val2)
     let result2=addNum(2,3)

     step
     1-> {} global -> 'this' is allocated here
     2-> Memory phase 
         val1=undefined
         val2=undefined
         addNum=Defination
         result1=undefined
         result2=undefined

    3-> Execution Phase
    val1=5 val2=10
    addNum -> one more executional context(new environment variable + execution thread) is created
              Now whenever the function comes new context is created
              Memory phase                         Execution phase
              val1=undefined                       num1=5
              val2=undefined                       num2=10
              total=undefined                      total=15

              This is created for result1 after the execution it comes
              again in global and then new execution is similarly created for result2
              


*/