# 🧪 Test Examples for Code Explainer

Here are some code examples you can paste into the AI Code Explainer to test its functionality:

## 1. JavaScript - Fibonacci Function
```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(10));
```

## 2. Python - List Comprehension
```python
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
squares = [x**2 for x in numbers if x % 2 == 0]
print(squares)
```

## 3. React Component
```jsx
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

## 4. CSS - Flexbox Layout
```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
}

.card {
  padding: 2rem;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
```

## 5. SQL Query
```sql
SELECT 
  u.name,
  COUNT(o.id) as order_count,
  SUM(o.total) as total_spent
FROM users u
LEFT JOIN orders o ON u.id = o.user_id
WHERE o.created_at >= '2024-01-01'
GROUP BY u.id, u.name
HAVING COUNT(o.id) > 5
ORDER BY total_spent DESC;
```

## 6. Java - Binary Search
```java
public class BinarySearch {
    public static int binarySearch(int[] arr, int target) {
        int left = 0;
        int right = arr.length - 1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            
            if (arr[mid] == target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return -1;
    }
}
```

## 7. Node.js - Express Server
```javascript
const express = require('express');
const app = express();

app.use(express.json());

app.get('/api/users', (req, res) => {
  const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];
  res.json(users);
});

app.post('/api/users', (req, res) => {
  const { name } = req.body;
  // Add user logic here
  res.status(201).json({ message: 'User created' });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
```

## 8. HTML - Semantic Structure
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Website</title>
</head>
<body>
    <header>
        <nav>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
            </ul>
        </nav>
    </header>
    
    <main>
        <section id="home">
            <h1>Welcome</h1>
            <p>This is the main content.</p>
        </section>
    </main>
    
    <footer>
        <p>&copy; 2024 My Website</p>
    </footer>
</body>
</html>
```

## 9. TypeScript - Interface and Class
```typescript
interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

class UserService {
  private users: User[] = [];
  
  addUser(user: User): void {
    this.users.push(user);
  }
  
  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
  
  getActiveUsers(): User[] {
    return this.users.filter(user => user.isActive);
  }
}
```

## 10. Git Commands
```bash
# Initialize a new repository
git init

# Add all files to staging
git add .

# Commit changes with message
git commit -m "Initial commit"

# Create and switch to new branch
git checkout -b feature-branch

# Push to remote repository
git push origin feature-branch
```

---

**Instructions:**
1. Copy any of these code examples
2. Paste it into the Code Explainer text area
3. Click "🚀 Explain Code Line by Line"
4. Read the detailed line-by-line explanation provided by Gemini AI

Each example demonstrates different programming concepts and syntax that the AI can explain in detail! 