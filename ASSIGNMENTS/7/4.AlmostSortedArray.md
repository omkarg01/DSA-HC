# 4. An almost sorted array is given to us and the task is to sort that array completely. Then, which sorting algorithm would you prefer and why? [Salesforce]

_ANSWER_

## First of all, `What is nearly sorted array or almost sorted array ?`

> ## Given an array of n elements, where each element is at most k away from its target position is called nearly sorted. 

> ## _For example_ :- let us consider k is 2, an element at index 7 in the sorted array, can be at indexes 5, 6, 7, 8, 9 in the given array.

## _Eg:_
### 1. {6, 5, 3, 2, 8, 10, 9}, k = 3 
### 2. {10, 9, 8, 7, 4, 70, 60, 50}, k = 4

## Efficient Sorting algorithm : _INSERTION SORT_

## _Reason :_

> ## Because what Insertion Sort does is it compares the key element with all left elements and placed it into its correct position.
> ## So in nearly sorted array every elements correct position will be at k distance far. So, for each element there will be only K comparisions not N comparisions.  
 