---
date: 2021-05-28 14:40:31
layout: post
title: "Easy NumPy Tutorial Part 2"
subtitle: In this tutorial we will continue learning important concepts of NumPy like Fancy indexing , array transposition etc.
description: In this tutorial we will continue learning important concepts of NumPy like Fancy indexing , array transposition etc.
image: https://images.unsplash.com/photo-1505166065723-bae088a12fc4?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1947&q=80
optimized_image:
category: Data Science
tags:
  - numpy Boolean Indexing
  - numpy Fancy Indexing
  - numpy Array transposition 
  - numpy universal functions
  - numpy where function
  - numpy Mathematical and statistical methods
  - numpy sum,any and all
  
author: AnuragTripathi
paginate: false
---

# Outline:
                                  
<a href="/easy-numpy-tutorial-part-2/#boolean-indexing">**8. Boolean Indexing**</a>                              
<a href="/easy-numpy-tutorial-part-2/#fancy-indexing">**9. Fancy Indexing**</a>                             
<a href="/easy-numpy-tutorial-part-2/#array-transposition">**10. Array transposition**</a>                                
<a href="/easy-numpy-tutorial-part-2/#unary-and-binary-universal-functions">**11. Unary and binary universal functions**</a>                                    
<a href="/easy-numpy-tutorial-part-2/#using-npwhere-to-express-conditional-logic">**12. Using np.where to express conditional logic**</a>                                             
<a href="/easy-numpy-tutorial-part-2/#numpys-mathematical-and-statistical-methods">**13. NumPy’s Mathematical and statistical methods**</a>                              
<a href="/easy-numpy-tutorial-part-2/#sumany-and-all-for-boolean-arrays">**14. sum,any and all for boolean arrays**</a>                               
                                        


# Introduction:

In the previous tutorial we learned about what is **NumPy* and some basic cocepts about **ndarrays** and how to index them . In this part ,
we will continue with Boolean Indexing and will also learn about array transposition, universal functions etc.

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


# Conclusion

So you have completed part 2 of easy numpy tutorial . Go to  <a href="/easy-numpy-tutorial-part-3">**Part 3**</a> and <a href="/easy-numpy-tutorial">**Part 1**</a>. Thank You.
