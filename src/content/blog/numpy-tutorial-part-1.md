---
title: "Easy NumPy Tutorial Part 1"
date: 2021-05-11
category: "Data Science"
excerpt: "Learn important concepts of NumPy - ndarrays, shape, dtype, arithmetic operations, indexing and slicing."
---

## Introduction

**Numerical Python** or **NumPy** is one of the most prominent python library in the data analysis world. Whether you are a beginner data science enthusiast or an advanced data science wizard, numpy is a must.

This tutorial will teach you the most important stuff that you will be using as a data scientist/analyst.

## Why NumPy?

**NumPy** with many other things provides data structures and algorithms for powerful and efficient numerical computing. Following points make it further clear why numpy is what it is:

1. **NumPy** provides an n dimensional array known as **ndarray**, which is not only faster and space efficient than python's list, it also serves a way of transferring data to algorithms.
2. Provides functions for performing arithmetic operations between arrays without needing to use for loops.
3. Numpy also makes it easier to read and write data to disks.
4. Many algorithms in NumPy are written in **C** or **C++**, thus they are faster.

## Importing NumPy

```python
import numpy as np
```

It is a standard convention to **import numpy as np**.

## ndarrays

The most important data structure **NumPy** provides is **ndarray**. You will find yourself using **ndarray** for storing, manipulating and passing data. **ndarray** is a multidimensional container for homogeneous data.

The easiest way of creating an **ndarray** is to use **array** function:

```python
data1 = [1, 2, 3, 4, 5]
arr1 = np.array(data1)
arr1
# Output: array([1, 2, 3, 4, 5])
```

Passing nested sequences will output a multidimensional array:

```python
np.array([[1, 2, 3], [4, 5, 6]])
# Output: array([[1, 2, 3],
#                [4, 5, 6]])
```

Functions like **zeros** and **ones** create arrays of 0s and 1s respectively:

```python
np.zeros(10)
# Output: array([0., 0., 0., 0., 0., 0., 0., 0., 0., 0.])

np.zeros((4, 5))
# Output: array([[0., 0., 0., 0., 0.],
#                [0., 0., 0., 0., 0.],
#                [0., 0., 0., 0., 0.],
#                [0., 0., 0., 0., 0.]])
```

**arange** is similar to python range function:

```python
np.arange(10)
# Output: array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```

## shape, dtype, ndim and astype

The attribute **shape** is a tuple which indicates the size of each dimension:

```python
data = np.array([[1, 2, 3], [4, 5, 6]])
data.shape
# Output: (2, 3)
```

The **dtype** attribute stores the data type of the array:

```python
data.dtype
# Output: dtype('int32')
```

You can use **ndim** to find out the dimensions of an ndarray:

```python
data.ndim
# Output: 2
```

Using **astype** method you can convert an **ndarray** from one data type to another:

```python
arr = np.array([1, 2, 3, 4, 5], dtype=np.int8)
arr.astype(np.int64)
# Output: array([1, 2, 3, 4, 5], dtype=int64)
```

## ndarray arithmetic

You can do arithmetic between **ndarrays** without writing any for loops (vectorization). Any arithmetic operation between equally sized ndarrays is done element-wise:

```python
arr1 = np.array([[1, 2, 3], [4, 5, 6]])
arr2 = np.array([[1, 7.6, 9], [6, 7, 2]])

# Sum
arr1 + arr2
# Output: array([[ 2. ,  9.6, 12. ],
#                [10. , 12. ,  8. ]])

# Multiplication
arr1 * arr2
# Output: array([[ 1. , 15.2, 27. ],
#                [24. , 35. , 12. ]])
```

## Indexing and Slicing

One dimensional arrays can be indexed similar to python lists:

```python
arr1 = np.array([0, 1, 2, 3, 4, 5])
arr1[2]
# Output: 2

arr1[2:5]
# Output: array([2, 3, 4])
```

For multidimensional arrays:

```python
arr2 = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
arr2[1]
# Output: array([4, 5, 6])

arr2[1, 2]
# Output: 6
```

Continue to Part 2 and Part 3 to learn more about NumPy.
