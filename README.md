# 🚀 LeetCode Pro - AI-Powered Learning Platform

A comprehensive web application that combines AI-powered code explanation with LeetCode challenge creation and management. Built with React, Chakra UI, and Express.js.

## ✨ Features

### 🤖 AI Code Explainer
- **Line-by-line code analysis** using Google's Gemini AI
- **Simple, concise explanations** for each line of code
- **Support for all programming languages**
- **Real-time explanations** with loading states

### 🎯 LeetCode Challenge Creator
- **Create custom challenges** with 10 curated LeetCode problems
- **Shareable challenge links** that can be sent to friends
- **Multiple difficulty levels** (Easy, Medium)
- **Various problem categories** (Array, String, Tree, DP, etc.)
- **Direct LeetCode integration** with problem links

### 📊 Progress Tracking
- **Daily todo lists** for problem solving
- **Progress visualization** with completion tracking
- **Monthly progress monitoring**
- **Customizable problem sets**

### 🎨 Modern UI/UX
- **Beautiful, responsive design** with Chakra UI
- **Mobile-friendly interface**
- **Smooth animations** with Framer Motion
- **Intuitive navigation**

## 🚀 Quick Start

### Prerequisites

- Node.js (v14 or higher)
- Google Gemini API key

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd leetproj
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd chakra-demo
   npm install
   ```

3. **Get your Gemini API key**
   - Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
   - Create a new API key
   - Copy the key

4. **Configure the API key**
   - Open `chakra-demo/server.js`
   - Replace `YOUR_API_KEY_HERE` with your actual Gemini API key

5. **Start the backend server**
   ```bash
   # From the root directory
   npm run dev
   ```

6. **Start the frontend**
   ```bash
   # In a new terminal, from chakra-demo directory
   cd chakra-demo
   npm run dev
   ```

7. **Open the application**
   - Frontend: http://localhost:5176/ (or the port shown in terminal)
   - Backend: http://localhost:3001

## 📖 How to Use

### AI Code Explainer
1. **Navigate to Code Explainer**
   - Go to http://localhost:5176/exp

2. **Paste your code**
   - Use the text area to paste any programming code
   - Supports all programming languages

3. **Get explanations**
   - Click "🚀 Explain Code Line by Line"
   - View simple, line-by-line explanations

### LeetCode Challenge Creator
1. **Create a Challenge**
   - Go to http://localhost:5176/ and click "Challenge a Friend"
   - Select questions from the 10 available problems
   - Click "🚀 Create Challenge Link"

2. **Share the Challenge**
   - Copy the generated link
   - Share it with friends or colleagues

3. **Solve the Challenge**
   - When someone opens the link, they see all selected questions
   - Click on any question to go directly to LeetCode

### Progress Tracking
1. **Daily Goals**
   - Use the sidebar to create daily todo lists
   - Track your completion progress

2. **Monthly Progress**
   - View your monthly solving patterns
   - Monitor your consistency

## 🛠️ Example Usage

### Code Explanation
**Input:**
```javascript
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
```

**Output:**
```
Line 1: Defines a function named 'fibonacci' that takes parameter 'n'
Line 2: Base case - if n is 0 or 1, return n directly
Line 3: Recursive case - return sum of previous two Fibonacci numbers
```

### Challenge Creation
1. Select questions like "Two Sum", "Valid Parentheses", "Merge Two Sorted Lists"
2. Generate a shareable link
3. Share with friends for collaborative learning

## 🔧 Technical Details

### Frontend
- **React 19** with modern hooks
- **Chakra UI** for beautiful components
- **React Router** for navigation
- **Framer Motion** for animations
- **Responsive design** with mobile support

### Backend
- **Express.js** server
- **CORS** enabled for cross-origin requests
- **Google Gemini AI API** integration
- **Error handling** and validation

### API Endpoints
- `POST /explain` - Analyzes code and returns line-by-line explanations

### Project Structure
```
leetproj/
├── chakra-demo/          # Frontend React application
│   ├── src/
│   │   ├── App.jsx       # Main app with routing
│   │   ├── Dashboard.jsx # Home dashboard
│   │   ├── Explain.jsx   # AI code explainer
│   │   ├── Challenge.jsx # Challenge creator
│   │   ├── ChallengeView.jsx # Challenge viewer
│   │   ├── Features.jsx  # Features grid
│   │   ├── Sidebar.jsx   # Todo list sidebar
│   │   └── Monthly.jsx   # Progress tracking
│   └── server.js         # Backend Express server
├── package.json          # Root dependencies
└── README.md            # This file
```

## 🎨 Customization

### Styling
- Modify colors in component files
- Update Chakra UI theme configuration
- Customize layout and spacing

### AI Prompts
- Edit the prompt in `chakra-demo/server.js` to change explanation style
- Adjust temperature and token limits for different response types

### Challenge Questions
- Add more questions in `Challenge.jsx`
- Modify difficulty levels and categories
- Update LeetCode URLs

## 🐛 Troubleshooting

### Common Issues

1. **API Key Error**
   - Ensure your Gemini API key is correctly set in `server.js`
   - Check if the API key has proper permissions

2. **CORS Error**
   - Verify the frontend is running on the correct port
   - Check CORS configuration in `server.js`

3. **Server Not Starting**
   - Ensure all dependencies are installed
   - Check if port 3001 is available

4. **Import Errors**
   - Run `npm install @chakra-ui/icons` if you see icon import errors

### Error Messages
- **"API Error"** - Check your Gemini API key and quota
- **"Failed to fetch explanation"** - Network or server issue
- **"Code is required"** - No code was provided

## 📝 Environment Variables

For production, consider using environment variables:

```bash
# .env file
GEMINI_API_KEY=your_api_key_here
PORT=3001
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
1. Build the project: `cd chakra-demo && npm run build`
2. Deploy the `dist` folder

### Backend (Railway/Heroku)
1. Set environment variables
2. Deploy the `server.js` file

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Google Gemini AI** for providing the AI capabilities
- **Chakra UI** for the beautiful component library
- **React team** for the amazing framework
- **LeetCode** for the problem database
- **Framer Motion** for smooth animations

## 📞 Support

If you have any questions or need help:
- Create an issue on GitHub
- Check the troubleshooting section above
- Review the code comments for implementation details

---

**Happy coding and happy learning! 🚀**

*Built with ❤️ for the coding community* 