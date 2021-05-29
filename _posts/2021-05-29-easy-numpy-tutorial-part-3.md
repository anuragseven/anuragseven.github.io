---
date: 2021-05-28 16:40:31
layout: post
title: "Easy NumPy Tutorial Part 3"
subtitle: In this last part of easy numpy tutorial we will learn about Sorting , File I/O and other topics.
description: In this last part of easy numpy tutorial we will learn about SOrting , File I/O and other topics.
image: https://images.unsplash.com/photo-1505166065723-bae088a12fc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80
optimized_image:
category: Data Science
tags:
  - numpy Sorting
  - numpy set operations
  - numpy File/Input output 
  - numpy Linear Algebra
  
author: AnuragTripathi
paginate: false
---


# Outline:
                             
<a href="/easy-numpy-tutorial-part-3/#sorting">**15. Sorting**</a>                                       
<a href="/easy-numpy-tutorial-part-3/#some-set-operations">**16. Some set operations**</a>                                      
<a href="/easy-numpy-tutorial-part-3/#file-inputoutput-with-numpy-arrays">**17. File Input/Output with numpy arrays**</a>                            
<a href="/easy-numpy-tutorial-part-3/#linear-algebra-with-numpy">**18. Linear Algebra with NumPy**</a>                                
                                       

# Introduction:

The Part 3 of **easy numpy tutorial** series comprises of **Sorting** , **Set Operations** , **File I/O** and **Linear Algebra**.  
 
# Sorting

**ndarrays** can be sorted with **sort** method:
```js
arr=np.random.randn(10)
arr
---------Out:
array([ 0.15010146, -0.90865459, -1.32660676, -1.2586473 ,  0.33456535,
       -0.52628284,  1.08191402,  0.01194585,  1.16277344, -0.85564764])
```
```js
arr.sort()
arr
---------Out:
array([-1.32660676, -1.2586473 , -0.90865459, -0.85564764, -0.52628284,0.01194585,  0.15010146,  0.33456535,  1.08191402,  1.16277344])
```
For multidimensional arrays you can pass the axis which you want to be sorted:
```js
arr=np.random.randn(3,4)
arr
---------Out:
array([[-0.9994893 , -1.59630403, -0.9099843 ,  0.02968692],
       [ 0.11655207,  0.96398831, -0.28124549,  0.33964778],
       [ 1.45948445,  1.30783811, -0.71988526,  0.2722295 ]])
```
```js
arr.sort(axis=1)
arr
---------Out:
array([[-1.59630403, -0.9994893 , -0.9099843 ,  0.02968692],
       [-0.28124549,  0.11655207,  0.33964778,  0.96398831],
       [-0.71988526,  0.2722295 ,  1.30783811,  1.45948445]])
```
The module level **np.sort** returns a new sorted copy of the array instead of modifying it.

# Some set operations

NumPy provides some basic set operations for one dimensional arrays, the most common is **unique** which returns sorted unique values from the array:
```js
arr=np.array(['apple','mango','apple','banana','avocado','mango'])
np.unique(arr)
---------Out:
array(['apple', 'avocado', 'banana', 'mango'], dtype='<U7')
```

# File Input/Output with numpy arrays

NumPy provides an easy to use API for loading and saving data from and to disks in text or binary format.
**np.save** function saves the data in raw binary with **.npy** extension:
```js
arr=np.arange(10)
np.save('array',arr)
``` 
The **.npy** extension is already added if not specified.
The file on the disk can be loaded with **np.load**:
```js
np.load('array.npy')
---------Out:
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```

# Linear Algebra with NumPy

Common linear algebra like matrix multiplication , determinant can easily be done with NumPY. You can perform array dot product with **dot** present both at top level function and as an array instance method:
```js
x=np.array([[1,2,3,4],[5,6,7,8]])
y=np.array([[9,10,],[11,12],[13,14,],[15,16]])
x
---------Out:
array([[1, 2, 3, 4],
       [5, 6, 7, 8]])
```
```js
y
---------Out:
array([[ 9, 10],
       [11, 12],
       [13, 14],
       [15, 16]])
```
```js
x.dot(y)
---------Out:
array([[130, 140],
       [322, 348]])
```
As of **Python 3.5** , you can also use **@** for matrix multiplication:
```js
x@y
---------Out:
array([[130, 140],
       [322, 348]])
```
**numpy.linalg**  provides standard functions  like matrix decomposition, inverse, determinant etc:
```js
from numpy.linalg import inv
arr=np.random.randn(2,2)
arr
---------Out:
array([[-1.97007582,  2.3830042 ],
       [-0.48148139, -1.41080847]])
```
```js
inv(arr)
---------Out:
array([[-0.35927946, -0.60686088],
       [ 0.12261507, -0.50170367]])
```
Some other common functions it provides are : **diag** ,**dot**,**trace** etc.

# Conclusion

 After completing this tutorial , you must be familiar with important concepts of **NumPy** , which you will find useful in various numerical computing and data analysis problems.
 If you enjoyed this series , consider donating to my **buy me a coffee** which will help me creating more content. Thank You .
 Go to <a href="/easy-numpy-tutorial">**Part 1**</a>    or <a href="/easy-numpy-tutorial-part-2">**Part 2**</a>   .

# References

Some examples and topics are referenced from **Python for Data Analysis: Data Wrangling with Pandas, NumPy, and IPython
Book by Wes McKinney** . It is a great for beginners who want to learn data analysis with python , you can buy it here:
<a target="_blank"  href="https://www.amazon.in/gp/product/1491957662/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=1491957662&linkCode=as2&tag=datahunkdev-21&linkId=b873220a6859a072bbf9878d532eda3c"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=1491957662&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=datahunkdev-21" ></a>

