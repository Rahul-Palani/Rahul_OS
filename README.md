# Rahul_OS

A modern, interactive portfolio website that mimics a desktop operating system interface. Built with React, TypeScript, and Tailwind CSS.

## Features

- 🖥️ **Desktop OS Interface**: Full-screen desktop layout with a beautiful gradient background
- 🎯 **App-Style Icons**: Clickable desktop icons for different sections
- 🪟 **Draggable Windows**: Resizable and draggable popup windows using react-rnd
- 📱 **Responsive Design**: Works on desktop and tablet devices
- 🎨 **Modern UI**: Clean, modern design with smooth animations and transitions
- 🗂️ **Modular Components**: Well-organized, reusable components

## Sections

- **About Me**: Personal information, skills, and interests
- **Projects**: Showcase of projects with descriptions and technologies used
- **Resume**: Professional experience, education, and technical skills
- **Contact**: Contact information and contact form

## Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first CSS framework
- **react-rnd** - Draggable and resizable components
- **Vite** - Fast build tool

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Rahul_OS
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Building for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Desktop.tsx           # Main desktop layout
│   ├── Icon.tsx             # Desktop icon component
│   ├── Window.tsx           # Draggable window component
│   └── windows/
│       ├── AboutMe.tsx      # About window content
│       ├── Projects.tsx     # Projects window content
│       ├── Resume.tsx       # Resume window content
│       └── Contact.tsx      # Contact window content
├── App.tsx                  # Main app component
├── index.tsx               # React entry point
└── index.css              # Global styles with Tailwind
```

## Usage

1. **Opening Windows**: Click on any desktop icon to open its corresponding window
2. **Dragging Windows**: Click and drag the window header to move windows around
3. **Resizing Windows**: Drag the window edges or corners to resize
4. **Closing Windows**: Click the red "×" button in the window header
5. **Taskbar**: Use the taskbar at the bottom to toggle window visibility

## Customization

### Adding New Sections

1. Create a new window content component in `src/components/windows/`
2. Add the new section to the `windows` state in `Desktop.tsx`
3. Add a corresponding icon in the `icons` array
4. Update the `getWindowContent` function to handle the new section

### Styling

The project uses Tailwind CSS for styling. You can customize:
- Colors in `tailwind.config.js`
- Background patterns in `Desktop.tsx`
- Window styles in `Window.tsx`
- Icon styles in `Icon.tsx`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by modern desktop operating systems
- Built with React and Tailwind CSS
- Uses react-rnd for draggable functionality
