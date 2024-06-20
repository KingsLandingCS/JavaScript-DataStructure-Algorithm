// arr[i - num],  arr[i]  
//Element Sliding Out: arr[3 - 3] = arr[0] = 2
// Element Sliding In: arr[3] = 2



// First Slide (i = 3):

// Previous Window: [2, 6, 9]
// New Window: [6, 9, 2]
// Element Sliding Out: arr[3 - 3] = arr[0] = 2
// Element Sliding In: arr[3] = 2
// Update tempSum: tempSum = tempSum - arr[0] + arr[3]
// Calculation: tempSum = 17 - 2 + 2 = 17


// Second Slide (i = 4):

// Previous Window: [6, 9, 2]
// New Window: [9, 2, 1]
// Element Sliding Out: arr[4 - 3] = arr[1] = 6
// Element Sliding In: arr[4] = 1
// Update tempSum: tempSum = tempSum - arr[1] + arr[4]
// Calculation: tempSum = 17 - 6 + 1 = 12


// Second Slide (i = 5):

// Previous Window: [6, 9, 2]
// New Window: [9, 2, 1]
// Element Sliding Out: arr[4 - 3] = arr[1] = 6
// Element Sliding In: arr[4] = 1
// Update tempSum: tempSum = tempSum - arr[1] + arr[4]
// Calculation: tempSum = 17 - 6 + 1 = 12


// Slide Right (i = 6):

// New Window: [1, 8, 5]
// Remove arr[3] = 2 (element sliding out).
// Add arr[6] = 5 (element sliding in).
// tempSum = tempSum - arr[3] + arr[6]
// tempSum = 11 - 2 + 5 = 14
// Update maxSum = Math.max(17, 14) = 17

// Slide Right (i = 7):

// New Window: [1, 8, 5]
// Remove arr[3] = 2 (element sliding out).
// Add arr[6] = 5 (element sliding in).
// tempSum = tempSum - arr[3] + arr[6]
// tempSum = 11 - 2 + 5 = 14
// Update maxSum = Math.max(17, 14) = 17


// Slide Right (i = 8):

// New Window: [5, 6, 3]
// Remove arr[5] = 8 (element sliding out).
// Add arr[8] = 3 (element sliding in).
// tempSum = tempSum - arr[5] + arr[8]
// tempSum = 19 - 8 + 3 = 14
// Update maxSum = Math.max(19, 14) = 19