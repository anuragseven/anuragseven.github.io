---
date: 2021-05-11 16:40:31
layout: post
title: "Easy NumPy Tutorial"
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
  - numpy Boolean Indexing
  - numpy Fancy Indexing
  - numpy Array transposition 
  - numpy universal functions
  - numpy where function
  - numpy Mathematical and statistical methods
  - numpy sum,any and all
  - numpy Sorting
  - numpy set operations
  - numpy Linear Algebra
  
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
<a href="/easy-numpy-tutorial/#boolean-indexing">**8. Boolean Indexing**</a>                              
<a href="/easy-numpy-tutorial/#fancy-indexing">**9. Fancy Indexing**</a>                             
<a href="/easy-numpy-tutorial/#array-transposition">**10. Array transposition**</a>                                
<a href="/easy-numpy-tutorial/#unary-and-binary-universal-functions">**11. Unary and binary universal functions**</a>                                    
<a href="/easy-numpy-tutorial/#using-npwhere-to-express-conditional-logic">**12. Using np.where to express conditional logic**</a>                                             
<a href="/easy-numpy-tutorial/#numpys-mathematical-and-statistical-methods">**13. NumPy’s Mathematical and statistical methods**</a>                              
<a href="/easy-numpy-tutorial/#sumany-and-all-for-boolean-arrays">**14. sum,any and all for boolean arrays**</a>                               
<a href="/easy-numpy-tutorial/#sorting">**15. Sorting**</a>                                       
<a href="/easy-numpy-tutorial/#some-set-operations">**16. Some set operations**</a>                                      
<a href="/easy-numpy-tutorial/#file-inputoutput-with-numpy-arrays">**17. File Input/Output with numpy arrays**</a>                            
<a href="/easy-numpy-tutorial/#linear-algebra-with-numpy">**18. Linear Algebra with NumPy**</a>                                
<a href="/easy-numpy-tutorial/#conclusion">**19. Conclusion**</a>                                   
<a href="/easy-numpy-tutorial/#references">**20. References**</a>                                         


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

# Boolean Indexing

Let's consider we have this one dimensional ndarray :
```js
alphas=np.array(['A','B','A','C','B','A'])
alphas
---------Out:
array(['A', 'B', 'A', 'C', 'B', 'A'], dtype='<U1')
```
Now assume each element in **alphas** corresponds to each row in this 2D ndarray:
```js
arr=np.random.randn(6,4)
arr
----------Out:
array([[-0.36050934,  1.21002631,  0.73535608, -2.08497402],
       [ 2.17936211, -0.18231343,  0.9371307 ,  0.28126783],
       [ 0.90013888, -0.41022263, -0.23235058, -0.49212827],
       [ 2.54863382,  0.06277704,  0.98000304,  0.4931022 ],
       [-0.4162991 ,  0.50105643, -0.04215995, -0.34751543],
       [-0.35394152, -0.03290295, -0.92444656, -1.02117132]])
```
 Now we want to select those rows which correspond to the alphabet **‘A’** , how are we going to do that ? Well there is rather simple way of doing that, first we will create a boolean array which contains **True** for **‘A’** otherwise **‘False’**:
```js
alphas=='A'
---------Out:
array([ True, False,  True, False, False,  True])
```
Now we can use this array to get the rows from **arr** which corresponds to **‘A’**:
```js
arr[alphas=='A']
---------Out:
array([[-0.36050934,  1.21002631,  0.73535608, -2.08497402],
       [ 0.90013888, -0.41022263, -0.23235058, -0.49212827],
       [-0.35394152, -0.03290295, -0.92444656, -1.02117132]])
```
This is known as Boolean Indexing.
You can also use boolean indexing to assign values:
```js
arr[alphas=='B']=-1
arr
---------Out:
array([[-0.36050934,  1.21002631,  0.73535608, -2.08497402],
       [-1.        , -1.        , -1.        , -1.        ],
       [ 0.90013888, -0.41022263, -0.23235058, -0.49212827],
       [ 2.54863382,  0.06277704,  0.98000304,  0.4931022 ],
       [-1.        , -1.        , -1.        , -1.        ],
       [-0.35394152, -0.03290295, -0.92444656, -1.02117132]])
```
# Fancy Indexing

You can use integer arrays for indexing , this is known as fancy indexing.
Suppose you have this 6 X 4 array:
```js
arr=np.arange(24).reshape(6,4)
arr
---------Out:
array([[ 0,  1,  2,  3],
       [ 4,  5,  6,  7],
       [ 8,  9, 10, 11],
       [12, 13, 14, 15],
       [16, 17, 18, 19],
       [20, 21, 22, 23]])
```
To select particular rows from **arr** , you just need to pass the order of rows as a list:
```js
arr[[1,5,3,0]]
---------Out:
array([[ 4,  5,  6,  7],
       [20, 21, 22, 23],
       [12, 13, 14, 15],
       [ 0,  1,  2,  3]])
```
Passing negative integers selects from end :
```js
arr[[-1,-5,-3,-2]]
---------Out:
array([[20, 21, 22, 23],
       [ 4,  5,  6,  7],
       [12, 13, 14, 15],
       [16, 17, 18, 19]])
```
If you pass multiple index lists , for 2d arrays first rows and from them columns are selected and for 3d arrays first the elements at the indices specified in the first argument are selected , then from them rows and columns are selected. Following examples illustrate this further:
```js
arr=np.arange(20).reshape(5,4)
arr
---------Out:
array([[ 0,  1,  2,  3],
       [ 4,  5,  6,  7],
       [ 8,  9, 10, 11],
       [12, 13, 14, 15],
       [16, 17, 18, 19]])
```
```js
arr[[1,3,4],[3,2,1]]
---------Out:
array([ 7, 14, 17])
```
In case of 3d arrays:
```js
arr=np.arange(30).reshape(2,5,3)
arr
---------Out:
array([[[ 0,  1,  2],
        [ 3,  4,  5],
        [ 6,  7,  8],
        [ 9, 10, 11],
        [12, 13, 14]],

       [[15, 16, 17],
        [18, 19, 20],
        [21, 22, 23],
        [24, 25, 26],
        [27, 28, 29]]])
```
```js
arr[[1],[0,4],[0,2]]
-----------Out:
array([15, 29])
```
# Array Transposition 

You can compute array transposition with the special **.T** attribute or **.transpose** method:
```js
arr=np.random.randn(3,4)
arr
---------Out:
array([[ 0.49154633,  1.87644946, -0.00501345,  0.69947679],
       [-1.08481299, -0.03367458,  1.03123648, -0.32336388],
       [ 0.89892434, -1.24175692,  0.6704515 ,  1.11809958]])
``` 
```js
arr.T
---------Out:
array([[ 0.49154633, -1.08481299,  0.89892434],
       [ 1.87644946, -0.03367458, -1.24175692],
       [-0.00501345,  1.03123648,  0.6704515 ],
       [ 0.69947679, -0.32336388,  1.11809958]])
```
# Unary and binary universal functions
**ufuncs** are functions that perform element wise operations on data present in ndarrays.Some common examples are:
**sqrt**
```js
ar=np.arange(10)
ar
---------Out:
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```
```js
np.sqrt(ar)
---------Out:
array([0.        , 1.        , 1.41421356, 1.73205081, 2.        ,
       2.23606798, 2.44948974, 2.64575131, 2.82842712, 3.        ])
```

Some other common ufuncs are:**abs**, **exp**, **maximum**,**add** etc
Some unfunc can return multiple arrays, one such unfunc is **modf**, similar to python **divmod**  it returns fractional and integral parts of the floating point ndarray.
```js
arr= np.random.randn(8)*7
arr
---------Out:
array([-0.4794411 ,  2.35559177,  1.04567002,  4.00067995,  5.87245769,
       12.51809748,  9.79171725,  4.68084042])
```
```js
frac,inte=np.modf(arr)
frac
----------Out:
array([-4.79441104e-01,  3.55591765e-01,  4.56700201e-02,  6.79946756e-04,
        8.72457695e-01,  5.18097480e-01,  7.91717246e-01,  6.80840421e-01])
```
```js
inte
---------Out:
array([-0.,  2.,  1.,  4.,  5., 12.,  9.,  4.])
```
# Using np.where to express conditional logic

Suppose we have two ndarrays **x** and **y** , let's say we want to choose a value from **x** when the value is greater than 5 otherwise we choose from **y**. You can write this logic very precisely using **np.where**. 
```js
x=np.array([4,6,7,4,6,4,2])
y=np.array([8,4,7,9,1,3,6])
np.where(x>5,x,y)
---------Out:
array([8, 6, 7, 9, 6, 3, 6])
```
You can also combine scalars and arrays:
```js
arr=np.random.randn(3,4)
arr
---------Out:
array([[ 0.12334337, -2.01683185,  0.0144243 , -0.77945785],
       [ 0.80625443, -0.36673467, -0.57174275,  0.96786551],
       [ 1.60528668,  1.03123417,  0.10747426,  0.45346208]])
```
Let's say we want to replace all negative values with zero:
```js
np.where(arr>0,arr,0)
---------Out:
array([[0.12334337, 0.        , 0.0144243 , 0.        ],
       [0.80625443, 0.        , 0.        , 0.96786551],
       [1.60528668, 1.03123417, 0.10747426, 0.45346208]])
```
# NumPy’s mathematical and Statistical methods

NumPy provides a number of statistical and mathematical methods like **sum**,**mean**,**std** etc. You can use them by calling the array instance method or calling the top level NumPy function:
```js
arr= np.arange(20).reshape(5,4)
arr
---------Out:
array([[ 0,  1,  2,  3],
       [ 4,  5,  6,  7],
       [ 8,  9, 10, 11],
       [12, 13, 14, 15],
       [16, 17, 18, 19]])
```
**sum**
```js
np.sum(arr)
---------Out:
190
```
**mean**
```js
np.mean(arr)
---------Out:
9.5
```
Functions like **sum** ,**mean** take an extra **axis** argument that computes along the axis specified. Following example computes sum across columns of array **arr**
```js
arr.sum(axis=1)
---------Out:
array([ 6, 22, 38, 54, 70])
```
Methods like **cumsum** and **cumprod** produces array which contains intermediate results:
```js
arr=np.arange(10)
arr
---------Out:
array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```
 ```js
arr.cumsum()
---------Out:
array([ 0,  1,  3,  6, 10, 15, 21, 28, 36, 45], dtype=int32)
```
# sum,any and all for boolean arrays

The method **sum** is used to count number of **True** in a boolean array:
```js
arr=np.array([True,True,False,True,True])
arr.sum()
----------Out:
4
```
The method **any** returns **True** if there is one or more **True** values in the boolean array, while **all** checks whether every value is **True**
```js
arr.any()
---------Out:
True
```
```js
arr.all()
---------Out:
False
```
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

# References

Some examples and topics are referenced from **Python for Data Analysis: Data Wrangling with Pandas, NumPy, and IPython
Book by Wes McKinney** . It is a great for beginners who want to learn data analysis with python , you can buy it here:
<a target="_blank"  href="https://www.amazon.in/gp/product/1491957662/ref=as_li_tl?ie=UTF8&camp=3638&creative=24630&creativeASIN=1491957662&linkCode=as2&tag=datahunkdev-21&linkId=b873220a6859a072bbf9878d532eda3c"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=IN&ASIN=1491957662&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=datahunkdev-21" ></a>

