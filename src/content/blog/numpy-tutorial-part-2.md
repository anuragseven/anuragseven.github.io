---
title: "Easy NumPy Tutorial Part 2"
date: 2021-05-28
category: "Data Science"
excerpt: "Continue learning NumPy - Boolean indexing, Fancy indexing, Array transposition, universal functions, and np.where."
---

## Introduction

In the previous tutorial we learned about what is **NumPy** and some basic concepts about **ndarrays** and how to index them. In this part, we will continue with Boolean Indexing and will also learn about array transposition, universal functions etc.

## Boolean Indexing

Let's consider we have this one dimensional ndarray:

```python
alphas = np.array(['A', 'B', 'A', 'C', 'B', 'A'])
```

Now assume each element in **alphas** corresponds to each row in this 2D ndarray:

```python
arr = np.random.randn(6, 4)
```

Now we want to select those rows which correspond to the alphabet **'A'**. First we will create a boolean array:

```python
alphas == 'A'
# Output: array([ True, False,  True, False, False,  True])
```

Now we can use this array to get the rows from **arr** which corresponds to **'A'**:

```python
arr[alphas == 'A']
# Selects rows where alphas is 'A'
```

## Fancy Indexing

You can use integer arrays for indexing, this is known as fancy indexing.

```python
arr = np.arange(24).reshape(6, 4)

# Select particular rows
arr[[1, 5, 3, 0]]
# Output: array([[ 4,  5,  6,  7],
#                [20, 21, 22, 23],
#                [12, 13, 14, 15],
#                [ 0,  1,  2,  3]])
```

## Array Transposition

You can compute array transposition with the special **.T** attribute:

```python
arr = np.random.randn(3, 4)
arr.T
# Transposes the array
```

## Universal Functions (ufuncs)

**ufuncs** are functions that perform element wise operations on data present in ndarrays:

```python
ar = np.arange(10)
np.sqrt(ar)
# Output: array([0., 1., 1.41421356, 1.73205081, 2., ...])
```

## Using np.where

Suppose we have two ndarrays **x** and **y**, and we want to choose a value from **x** when the value is greater than 5 otherwise choose from **y**:

```python
x = np.array([4, 6, 7, 4, 6, 4, 2])
y = np.array([8, 4, 7, 9, 1, 3, 6])
np.where(x > 5, x, y)
# Output: array([8, 6, 7, 9, 6, 3, 6])
```

Replace all negative values with zero:

```python
arr = np.random.randn(3, 4)
np.where(arr > 0, arr, 0)
```

## Mathematical and Statistical Methods

NumPy provides statistical and mathematical methods like **sum**, **mean**, **std** etc:

```python
arr = np.arange(20).reshape(5, 4)

np.sum(arr)
# Output: 190

np.mean(arr)
# Output: 9.5

# Sum across columns
arr.sum(axis=1)
# Output: array([ 6, 22, 38, 54, 70])
```

## Boolean Array Methods

The method **sum** counts **True** values:

```python
arr = np.array([True, True, False, True, True])
arr.sum()
# Output: 4

arr.any()  # Returns True if any True exists
# Output: True

arr.all()  # Returns True if all are True
# Output: False
```

Continue to Part 3 for more NumPy concepts!
