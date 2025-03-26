# 🌟 Modern Quote Generator

A beautiful, responsive quote generator with dark mode support and modern UI effects. This application fetches inspirational quotes from the ZenQuotes API through a PHP proxy to avoid CORS issues.

## 🚀 Features

- **Modern UI Design** with smooth animations and transitions
- **Dark/Light Mode Toggle** with system preference detection
- **Responsive Layout** that works on all devices
- **API Integration** with ZenQuotes via PHP proxy
- **Fallback Mechanism** for offline usage
- **Visual Feedback** for loading states and API status
- **3D Card Effects** with mouse movement tracking
- **Gradient Animations** and decorative SVG elements
- **Accessibility** considerations for better user experience

## 🌍 Demo

Check out the live demo: [Quote Generator Demo](https://hridoy.top/QuoteGenerator/)

## 📋 Requirements

- Web server with PHP support (Apache, Nginx, XAMPP, etc.)
- PHP 7.0 or higher
- Modern web browser

## 💻 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/1dev-hridoy/QuoteGenerator.git
   ```
2. Upload the files to your web server or place them in your local server's web directory.
3. Make sure the web server has PHP enabled.
4. Access the application through your web server (not directly from the file system).

## 📂 Folder Structure

```plaintext
QuoteGenerator/
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   ├── main.js
│   │   └── style.js
├── bin/
│   ├── index.html
│   ├── user.php
├── includes/
│   ├── components/
│   │   ├── footer.php
│   │   └── header.php
│   ├── index.php
│   └── proxy.php
├── .gitignore
```

## 🔄 How It Works

1. The application attempts to fetch quotes from the ZenQuotes API through the PHP proxy.
2. The PHP proxy makes server-side requests to the ZenQuotes API, avoiding CORS restrictions.
3. If the API is unavailable, the application falls back to a local collection of quotes.
4. The UI provides visual feedback about the API status and source of quotes.
5. Dark/light mode preferences are saved in localStorage.

## 🌐 API Usage

This project uses the [ZenQuotes API](https://zenquotes.io/) to fetch random inspirational quotes. The API is accessed through a PHP proxy to avoid CORS issues in browsers.

## 🎨 Customization

You can customize the application by:

- Modifying the color scheme in the Tailwind configuration
- Adding more quotes to the fallback collection
- Changing the animations and transitions
- Updating the SVG decorations

## 🔍 Troubleshooting

**Quotes not loading?**

- Make sure your web server has PHP enabled
- Check if the PHP proxy can access external URLs (some hosts restrict this)
- Verify that the ZenQuotes API is available

**Dark mode not working?**

- Ensure JavaScript is enabled in your browser
- Check for any console errors

## 🤝 Contributing

Contributions are welcome! Feel free to:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📜 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [ZenQuotes API](https://zenquotes.io/) for providing inspirational quotes
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Inter Font](https://fonts.google.com/specimen/Inter) for typography

---

Made with ❤️ by [1dev-hridoy](https://github.com/1dev-hridoy)

