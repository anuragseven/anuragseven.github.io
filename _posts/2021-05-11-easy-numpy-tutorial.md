---
date: 2021-05-11 16:40:31
layout: post
title: "Easy NumPy Tutorial Part 1"
subtitle: In this article we will learn important concepts of NumPy , a famous Python library used for numerical computing.
description: In this article we will learn important concepts of NumPy , a famous Python library used for numerical computing.
image: https://images.unsplash.com/photo-1505166065723-bae088a12fc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80
optimized_image:
category: Data Science
tags:
  - basic numpy tutorial 
  - numpy tutorial
  - important concepts of numpy
  - learn numpy
  - numpy concepts
  - numpy python
  - numpy array
  - numpy shape , dtype , ndim and astype
  - numpy ndarray arithmetic
  - numpy Indexing and Slicing

  
author: AnuragTripathi
paginate: false
---


# Outline:

<a href="/easy-numpy-tutorial/#introduction">**1. Introduction**</a>          
<a href="/easy-numpy-tutorial/#why-numpy-">**2. Why NumPy ?**</a>                          
<a href="/easy-numpy-tutorial/#importing-numpy">**3. importing NumPy**</a>                           
<a href="/easy-numpy-tutorial/#ndarrays">**4. ndarrays**</a>                              
<a href="/easy-numpy-tutorial/#shape--dtype--ndim-and-astype">**5. shape , dtype , ndim and astype**</a>                             
<a href="/easy-numpy-tutorial/#ndarray-arithmetic">**6. ndarray arithmetic**</a>                                      
<a href="/easy-numpy-tutorial/#indexing-and-slicing">**7. Indexing and Slicing**</a>                                   
                                         


# Introduction:
**Numerical Python** or **NumPy** is one of the most prominent python library in the data analysis world , whether you are a beginner data science enthusiast or an advanced data science wizard , numpy is a  must . 
The tutorial will teach you the most important stuff that you will be using as a data scientist/analyst.

Get ready ! Have some water , coffee , tea or snacks nearby because this is gonna be a little long. I am assuming you already know basic python,  things like **lists , tuples , class , functions, methods** etc, have already installed and setup **Jupyter Notebook(or JupyterLab)** and also installed **NumPy** like the good person you are. Let’s go!

# Why NumPy ?

**NumPy** with many other things provides data structures and algorithms for powerful and efficient numerical computing. Following points make it further clear why numpy is what it is :                   
**1)** **NumPy** provides an n dimensional array known as **ndarray** , which is not only faster and space efficient than python’s list , it also serves a way of transferring data to algorithms .                    
**2)** Provides functions for performing arithmetic operations between arrays without needing to use for loops.                        
**3)** Numpy also makes it easier to read and write data to disks.                         
**4)** Many algorithms in NumPy are written in **C** or **C++** , thus they are faster . Also **NumPy** provides a **C** API which enables libraries written in **C** or **C++** to access **NumPy** arrays without any typecheck or copying it into some other memory representation.                  

# importing NumPy

Enough Theory ! Now open **Jupyter Notebook**or **JupyterLab** , personally  I prefer **JupyterLab** (it is a beefed up version of **Jupyter Notebook**) but whatever . Select your interpreter and create a new notebook.  First thing you should do is to import **NumPy**:
```js
import numpy as np
``` 
Write above code in the first cell and hit **shift+enter** to execute the cell.
It is a standard convention to **import numpy as np**. It is not desirable to import everything as **NumPy** is quite big. Use this notebook for the rest of the tutorial , also try to add comments whenever possible so that at the end you will have a beautifully commented notebook with code for your future reference.

# ndarrays 

The most important data structure **NumPy** provides is **ndarray**, you will find yourself using **ndarray** for storing , manipulating and passing data. **ndarray** is a multidimensional container for homogeneous data, means it contains data of the same data type.
The easiest way of creating an **ndarray** is to use **array** function:
```js
data1=[1,2,3,4,5]
arr1=np.array(data1)
arr1
```
**np.array** accepts sequence like object like lists and returns an **ndarray**. Execute the cell.
```js
array([1, 2, 3, 4, 5])
```
Passing nested sequences will output a multidimensional array:
```js
np.array([[1,2,3],[4,5,6]])
---------Out:
array([[1, 2, 3],
       [4, 5, 6]])
```
To create an array which contains random values use **np.random.randn** function :
```js
np.random.randn(2,3)
---------Out:
array([[-0.44204679, -0.27622247, -1.12643644],
       [ 0.33900235, -1.27008439, -1.87216394]])
```
Functions like **zeros** and **ones** create arrays of 0s and 1s respectively:
```js
np.zeros(10)
---------Out:
array([0., 0., 0., 0., 0., 0., 0., 0., 0., 0.])
```
To create higher dimensional arrays specify the  shape by passing a tuple:
```js
np.zeros((4,5))
--------Out:
array([[0., 0., 0., 0., 0.],
       [0., 0., 0., 0., 0.],
       [0., 0., 0., 0., 0.],
       [0., 0., 0., 0., 0.]])
```
**empty** creates  an array without initialising its values thus the array will contain garbage values:
```js
np.empty((2,3,4))
---------Out:
array([[[1.78879622e+161, 6.53443053e+179, 4.59245718e-072,
         7.23784225e+271],
        [6.96742101e+252, 9.08367229e+223, 6.01347002e-154,
         2.31649991e-152],
        [5.85218946e+199, 2.02763010e+174, 2.50479810e+262,
         1.79313309e+209]],

       [[1.80724905e+185, 2.68216407e-110, 6.01347002e-154,
         5.73818475e+180],
        [4.03259187e+175, 6.76925765e-043, 6.01346953e-154,
         2.52760136e-258],
        [4.47593804e-091, 6.01346953e-154, 5.96083817e+175,
         5.98193034e-154]]])

```
**arange** is similar to python range function:
```js
np.arange(10)
---------Out:
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```
# shape , dtype , ndim and astype 

The attribute **shape** is a tuple which indicates the size of each dimension:
```js
data=np.array([[1,2,3],[4,5,6]])
data.shape
---------Out:
(2, 3)
```
The **dtype** attribute is an object which stores the data type of the array:
```js
data.dtype
---------Out:
dtype('int32')
```
You can use **ndim** to find out the dimensions of an ndarray:
```js
data.ndim
---------Out:
2
```
You can provide an argument **dtype** to **array** function to override the
default data type of the ndarray:
```js
arr=np.array([1,2,3,4,5],dtype=np.int8)
arr
---------Out:
array([1, 2, 3, 4, 5], dtype=int8)
```
Using **astype** method you can convert or cast an **ndarray** from one data type to another:
```js
arr.astype(np.int64)
---------Out:
array([1, 2, 3, 4, 5], dtype=int64)
```
**astype** always returns a new array .

# ndarray arithmetic

You can do arithmetic between **ndarrys** without writing any for loops,
also known as batch computations or vectorization . Any arithmetic operation between equally sized ndarrays is done element-wise:
```js
arr1=np.array([[1,2,3],[4,5,6]])
arr2=np.array([[1,7.6,9],[6,7,2]])
```
Sum :
```js
arr1+arr2
---------Out:
array([[ 2. ,  9.6, 12. ],
       [10. , 12. ,  8. ]])
```
Difference:
```js
arr1-arr2
---------Out:
array([[ 0. , -5.6, -6. ],
       [-2. , -2. ,  4. ]])
```
Multiplication:
```js
arr1*arr2
---------Out:
array([[ 1. , 15.2, 27. ],
       [24. , 35. , 12. ]])
```
Division:
```js
arr1/arr2
---------Out:
array([[1.        , 0.26315789, 0.33333333],
       [0.66666667, 0.71428571, 3.        ]])
```
Arithmetic operation with one scalar argument propagates the scalar argument to each element:
```js
arr1*0.5
---------Out:
array([[0.5, 1. , 1.5],
       [2. , 2.5, 3. ]])
```
Comparison between arrays results in equally sized boolean arrays:
```js
arr1>arr2
---------Out:
array([[False, False, False],
       [False, False,  True]])
```
# Indexing and Slicing:
NumPy provides a number of ways to get a subset of data or individual elements from ndarrays. One dimensional arrays  can be indexed similar to python lists:
```js
arr1=np.array([0,1,2,3,4,5])
arr1[2]
---------Out:
2
```
Use slicing to get a subset of ndarray:
```js
arr1[2:5]
---------Out:
array([2, 3, 4])
```
If you assign a scalar value to the slice , the value is assigned to the entire selection:
```js
arr1[2:5]=-1
arr1
---------Out:
array([ 0,  1, -1, -1, -1,  5])
```
One important thing to note , the array slices are views on the original array, no data is copied , so any change you make on the slice will reflect on the original array . To explicitly copy use **arr1[2:5].copy()** method.

You get a number of options with multidimensional arrays:
```js
arr2=np.array([[1,2,3],[4,5,6],[7,8,9]])
arr2
---------Out:
array([[1, 2, 3],
       [4, 5, 6],
       [7, 8, 9]])
```
```js
arr2[1]
---------Out:
array([4, 5, 6])
```
Unlike one dimensional array , each element in multidimensional arrays is an array.
To select individual element pass comma separated list of indices :
```js
arr2[1,2]
---------Out:
6
```
You can think of the first argument as ‘rows’ and  the second as ‘columns’.
For three dimensional arrays, providing only one index will output the two dimensional array at that index.
```js
arr3 = np.array([[[1, 2, 3], [4, 5, 6]], [[7, 8, 9], [10, 11, 12]]]) 
arr3
---------Out:
array([[[ 1,  2,  3],
        [ 4,  5,  6]],

       [[ 7,  8,  9],
        [10, 11, 12]]])
```
```js
arr3[0]
---------Out:
array([[1, 2, 3],
       [4, 5, 6]])
```
Now we have looked at basic indexing methods , let's understand how we can do indexing with slices:
```js
arr2[:2]
----------Out:
array([[1, 2, 3],
       [4, 5, 6]])
```
It basically means select the first two rows(or elements) .
```js
arr2[:2,:2]
---------Out:
array([[1, 2],
       [4, 5]])
```
Select the first two rows and from them select the first two columns.
```js
arr2[:]=0
arr2
---------Out:
array([[0, 0, 0],
       [0, 0, 0],
       [0, 0, 0]])
```
In above , we assigned every value in **arr2** to zero .


# Conclusion

In this tutorial you learned about what is numpy , What are Numpy arrays . You also learned about shape , dtype , ndim and astype attributes of an ndarray.
Go to <a href="/easy-numpy-tutorial-part-2">**Part 2**</a> and <a href="/easy-numpy-tutorial-part-3">**Part 3**</a> to continue learning more about NumPy.


