# Flickd
🏷️ Flickd Smart Tagging Engine
An AI-powered image tagging system with confidence scoring, built with Next.js, TypeScript, and modern web technologies.

✨ Features
Smart AI Tagging: Automatically generates relevant tags for uploaded images
Confidence Scoring: Each tag comes with a confidence score (0-100%)
Category Classification: Tags organized by categories (color, object, scene, etc.)
Modern Web Interface: Beautiful, responsive React UI with drag-and-drop
Real-time Analysis: Fast image processing with live progress indicators
TypeScript: Full type safety and excellent developer experience
Responsive Design: Works perfectly on desktop and mobile devices
🚀 Quick Start
Prerequisites
Node.js 18+ or Bun
npm, yarn, or bun package manager
Installation
Clone the repository ```bash git clone cd flickd-smart-tagging ```

Install dependencies ```bash

Using npm
npm install

Using yarn
yarn install

Using bun
bun install ```

Run the development server ```bash

Using npm
npm run dev

Using yarn
yarn dev

Using bun
bun dev ```

Open your browser Navigate to http://localhost:3000

Production Build
```bash

Build for production
npm run build

Start production server
npm start ```

📁 Project Structure
``` flickd-smart-tagging/ ├── app/ # Next.js App Router │ ├── api/ # API routes │ │ ├── analyze/ # Image analysis endpoint │ │ ├── health/ # Health check │ │ ├── stats/ # System statistics │ │ └── debug/ # Debug endpoint │ ├── globals.css # Global styles │ ├── layout.tsx # Root layout │ └── page.tsx # Home page ├── components/ # React components │ ├── ImageUploader.tsx # File upload component │ ├── ResultsDisplay.tsx # Results visualization │ ├── ConfidenceBar.tsx # Confidence score bar │ └── LoadingSpinner.tsx # Loading animation ├── types/ # TypeScript type definitions │ └── analysis.ts # Analysis result types ├── package.json # Dependencies and scripts ├── tailwind.config.js # Tailwind CSS configuration ├── next.config.js # Next.js configuration ├── tsconfig.json # TypeScript configuration ├── .eslintrc.json # ESLint configuration └── README.md # This file ```

🔧 API Endpoints
POST /api/analyze
Upload and analyze an image to get smart tags with confidence scores.

Request:

Method: POST
Content-Type: multipart/form-data
Body: Image file (JPEG, PNG, GIF, BMP, TIFF)
Max file size: 10MB
Response: ```json { "tags": [ { "tag": "blue_dominant", "confidence": 0.85, "category": "color" }, { "tag": "person", "confidence": 0.92, "category": "object" } ], "image_info": { "width": 1920, "height": 1080, "aspect_ratio": 1.78, "format": "JPEG" }, "filename": "example.jpg", "timestamp": "2024-01-15T10:30:00Z", "processing_time": 1.0 } ```

GET /api/health
Health check endpoint for monitoring.

GET /api/stats
Get system statistics and supported formats.

GET /api/debug
Debug endpoint for troubleshooting deployment issues.

🚀 Deployment
Vercel (Recommended)
This project is optimized for Vercel deployment:

Push to GitHub ```bash git add . git commit -m "Initial commit" git push origin main ```

Deploy to Vercel

Go to vercel.com
Import your GitHub repository
Vercel will automatically detect it's a Next.js project
Deploy with zero configuration needed
Automatic Deployments

Every push to main branch triggers a new deployment
Preview deployments for pull requests
Instant global CDN distribution
Other Platforms
The app can be deployed to any platform that supports Next.js:

Netlify: Use the Next.js build command
Railway: Connect GitHub repo and deploy
Heroku: Add Node.js buildpack
DigitalOcean App Platform: Use Node.js runtime
AWS Amplify: Connect repository for automatic deployments
Environment Variables
For production deployment, you can set these optional environment variables:

```env

Optional: Customize app behavior
NEXT_PUBLIC_APP_NAME=Flickd Smart Tagging NEXT_PUBLIC_MAX_FILE_SIZE=10485760 ```

🎨 Features in Detail
Smart Tagging Categories
Color: Dominant colors and color schemes
Object: Detected objects and entities
Scene: Scene type, composition, and setting
Style: Artistic style and visual characteristics
Confidence Scoring
Each tag includes a confidence score indicating accuracy:

90-100%: Very high confidence (green)
70-89%: High confidence (yellow)
50-69%: Medium confidence (orange)
30-49%: Low confidence (red)
User Interface
Drag & Drop: Simply drag images onto the upload area
Real-time Preview: Instant image preview and analysis
Category Filtering: Filter tags by category
Responsive Design: Optimized for all screen sizes
Loading States: Beautiful loading animations
Error Handling: Clear error messages and recovery
🛠️ Technology Stack
Framework: Next.js 14 with App Router
Language: TypeScript
Styling: Tailwind CSS
Icons: Lucide React
Deployment: Vercel-optimized
Runtime: Node.js 18+
🔍 Development
Adding New Features
New Tag Categories: Modify the analysis logic in `app/api/analyze/route.ts`
UI Components: Add new components in the `components/` directory
Styling: Update Tailwind classes or add custom CSS
Types: Define new types in `types/analysis.ts`
Code Quality
```bash

Type checking
npm run type-check

Linting
npm run lint

Build check
npm run build ```

Development Tips
Use the debug endpoint `/api/debug` to check deployment status
Check browser console for client-side errors
Monitor Vercel function logs for server-side issues
Test with different image formats and sizes
🤝 Contributing
Fork the repository
Create a feature branch: `git checkout -b feature/amazing-feature`
Commit your changes: `git commit -m 'Add amazing feature'`
Push to the branch: `git push origin feature/amazing-feature`
Open a Pull Request
📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🆘 Support
Documentation: Check this README and code comments
Issues: Open an issue on GitHub
API Health: Check `/api/health` endpoint
Debug Info: Check `/api/debug` endpoint
Vercel Logs: Check function logs in Vercel dashboard
🔮 Future Enhancements
 Real AI model integration (OpenAI CLIP, Google Vision API)
 Batch processing for multiple images
 User authentication and saved analyses
 Custom model training
 Advanced image filters and effects
 Export results to various formats
 Integration with cloud storage services
 Real-time collaboration features
🚨 Troubleshooting
Common Issues
Build Errors: Run `npm run build` locally to check for issues
API Errors: Check `/api/debug` endpoint for runtime information
Upload Issues: Ensure images are under 10MB and valid formats
Deployment Issues: Check Vercel function logs in dashboard
Debug Endpoints
`/api/health` - Basic health check
`/api/debug` - Runtime and environment information
`/api/stats` - Application statistics and capabilities ```
