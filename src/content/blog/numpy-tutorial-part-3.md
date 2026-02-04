---
title: "Easy NumPy Tutorial Part 3"
date: 2021-05-29
category: "Data Science"
excerpt: "Final part of the NumPy series - Sorting, Set operations, File I/O, and Linear Algebra with NumPy."
---

## Introduction

The Part 3 of **easy numpy tutorial** series comprises of **Sorting**, **Set Operations**, **File I/O** and **Linear Algebra**.

## Sorting

**ndarrays** can be sorted with **sort** method:

```python
arr = np.random.randn(10)
arr.sort()
# Array is now sorted in ascending order
```

For multidimensional arrays you can pass the axis which you want to be sorted:

```python
arr = np.random.randn(3, 4)
arr.sort(axis=1)  # Sort each row
```

The module level **np.sort** returns a new sorted copy of the array instead of modifying it.

## Some Set Operations

NumPy provides some basic set operations for one dimensional arrays. The most common is **unique** which returns sorted unique values:

```python
arr = np.array(['apple', 'mango', 'apple', 'banana', 'avocado', 'mango'])
np.unique(arr)
# Output: array(['apple', 'avocado', 'banana', 'mango'], dtype='<U7')
```

## File Input/Output with NumPy Arrays

NumPy provides an easy to use API for loading and saving data from and to disks in text or binary format.

**np.save** function saves the data in raw binary with **.npy** extension:

```python
arr = np.arange(10)
np.save('array', arr)
```

The file on the disk can be loaded with **np.load**:

```python
np.load('array.npy')
# Output: array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
```

## Linear Algebra with NumPy

Common linear algebra operations like matrix multiplication, determinant can easily be done with NumPy.

You can perform array dot product with **dot**:

```python
x = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])
y = np.array([[9, 10], [11, 12], [13, 14], [15, 16]])

x.dot(y)
# Output: array([[130, 140],
#                [322, 348]])
```

As of **Python 3.5**, you can also use **@** for matrix multiplication:

```python
x @ y
# Same result as x.dot(y)
```

**numpy.linalg** provides standard functions like matrix decomposition, inverse, determinant etc:

```python
from numpy.linalg import inv

arr = np.random.randn(2, 2)
inv(arr)  # Returns the inverse of the matrix
```

## Conclusion

After completing this tutorial, you must be familiar with important concepts of **NumPy**, which you will find useful in various numerical computing and data analysis problems.

Check out Part 1 and Part 2 if you haven't already!

## References

Some examples and topics are referenced from **Python for Data Analysis: Data Wrangling with Pandas, NumPy, and IPython** by Wes McKinney. It is great for beginners who want to learn data analysis with python.
