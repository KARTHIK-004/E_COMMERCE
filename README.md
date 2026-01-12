# E-Commerce

A modern, responsive e-commerce web application built with React 18 and Vite. This application provides a complete online shopping experience with product browsing, cart management, user authentication, and order tracking functionality.

![React](https://img.shields.io/badge/React-18.3.1-blue)
![Vite](https://img.shields.io/badge/Vite-5.3.1-646CFF)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.4-38B2AC)
![License](https://img.shields.io/badge/License-MIT-green)

## 🌟 Features

- **Product Catalog**: Browse through a wide range of products with detailed information
- **Category Filtering**: Filter products by categories (Men/Women, Topwear, etc.)
- **Product Search**: Real-time search functionality to find products quickly
- **Shopping Cart**: Add, remove, and manage items in your cart
- **Cart Total Calculation**: Automatic calculation of subtotal, shipping, and total costs
- **User Authentication**: Login and registration system for users
- **Order Placement**: Complete checkout process with order placement
- **Order Tracking**: View and track your order history
- **Responsive Design**: Fully responsive UI that works on desktop, tablet, and mobile devices
- **Product Details**: Detailed product pages with images, descriptions, and size selection
- **Related Products**: Display related products on product detail pages
- **Newsletter Subscription**: Email subscription for updates and promotions
- **Toast Notifications**: User-friendly notifications for actions and events

## 🛠️ Tech Stack

### Frontend

- **React 18.3.1** - JavaScript library for building user interfaces
- **React Router DOM 6.26.1** - Declarative routing for React applications
- **Vite 5.3.1** - Next-generation frontend build tool
- **Tailwind CSS 3.4.4** - Utility-first CSS framework
- **React Toastify 10.0.5** - Toast notifications for React

### Development Tools

- **ESLint** - Code linting and quality assurance
- **PostCSS** - CSS transformation tool
- **Autoprefixer** - Automatic vendor prefixing for CSS
- **gh-pages** - GitHub Pages deployment tool

## 📋 Prerequisites

Before you begin, ensure you have the following installed on your system:

- **Node.js** (version 14.0 or higher)
- **npm** (version 6.0 or higher) or **yarn**
- **Git** (for cloning the repository)

## 🚀 Installation

Follow these steps to set up the project locally:

1. **Clone the repository**

   ```bash
   git clone https://github.com/KARTHIK-004/E_COMMERCE.git
   cd E_COMMERCE
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   or if you're using yarn:

   ```bash
   yarn install
   ```

3. **Verify installation**
   Ensure all dependencies are installed correctly by checking the `node_modules` folder.

## 💻 Development Commands

### Start Development Server

Run the application in development mode with hot module replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (default Vite port).

### Build for Production

Create an optimized production build:

```bash
npm run build
```

The build output will be in the `dist` folder.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Lint Code

Check code quality with ESLint:

```bash
npm run lint
```

## 🌐 Deployment

This project is configured for deployment to GitHub Pages.

### Deploy to GitHub Pages

1. **Update the homepage URL** in `package.json`:

   ```json
   "homepage": "https://YOUR_USERNAME.github.io/YOUR_REPO_NAME"
   ```

2. **Deploy the application**:
   ```bash
   npm run deploy
   ```
   This command will:
   - Build the project (`npm run build`)
   - Deploy the `dist` folder to the `gh-pages` branch
   - Make the site available at your GitHub Pages URL

### Manual Deployment

You can also deploy the `dist` folder to any static hosting service:

- Netlify
- Vercel
- AWS S3
- Firebase Hosting
- Cloudflare Pages

## 📁 Project Structure

```
E_COMMERCE/
├── public/                 # Public assets
│   └── vite.svg           # Vite logo
├── src/
│   ├── assets/            # Images, icons, and static data
│   │   ├── assets.js      # Product data and configuration
│   │   ├── logo.svg       # Application logo
│   │   └── *.png          # Product images and icons
│   ├── components/        # Reusable React components
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── Footer.jsx     # Footer component
│   │   ├── SearchBar.jsx  # Search functionality
│   │   ├── Hero.jsx       # Hero section
│   │   ├── LatestCollection.jsx
│   │   ├── BestSeller.jsx
│   │   ├── ProductItems.jsx
│   │   ├── CartTotal.jsx
│   │   ├── RelatedProducts.jsx
│   │   ├── OurPolicy.jsx
│   │   ├── NewsLetterBox.jsx
│   │   └── Title.jsx
│   ├── context/           # React Context for state management
│   │   └── ShopContext.jsx
│   ├── pages/             # Page components
│   │   ├── Home.jsx       # Home page
│   │   ├── Collection.jsx # Product collection page
│   │   ├── Product.jsx    # Product detail page
│   │   ├── Cart.jsx       # Shopping cart page
│   │   ├── Login.jsx      # Login/Register page
│   │   ├── PlaceOrder.jsx # Checkout page
│   │   ├── Order.jsx      # Order history page
│   │   ├── About.jsx      # About page
│   │   └── Contact.jsx    # Contact page
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Application entry point
│   └── index.css          # Global styles
├── index.html             # HTML template
├── package.json           # Project dependencies and scripts
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
└── README.md              # Project documentation
```

## 🎯 Usage

### Navigating the Application

1. **Home Page**: Browse featured products, latest collections, and best sellers
2. **Collection Page**: View all products with filtering and sorting options
3. **Product Details**: Click on any product to view detailed information
4. **Search**: Use the search bar to find specific products
5. **Add to Cart**: Select size and add products to your shopping cart
6. **Cart**: Review items, adjust quantities, and proceed to checkout
7. **Login**: Create an account or log in to place orders
8. **Place Order**: Complete the checkout process with delivery information
9. **Orders**: View your order history and track orders

### Key Features Usage

#### Shopping Cart

- Add items by selecting size and clicking "Add to Cart" on product pages
- View cart by clicking the cart icon in the navigation bar
- Adjust quantities or remove items from the cart page
- View real-time total calculation including shipping fees

#### Product Filtering

- Filter by category (Men, Women)
- Filter by subcategory (Topwear, Bottomwear, Winterwear)
- Sort products by relevance, price (low to high, high to low)

#### Search Functionality

- Click the search icon in the navigation bar
- Type product name or keywords
- Results update in real-time on the collection page

## 🔧 Configuration

### Tailwind CSS

Customize the design system in `tailwind.config.js`:

```javascript
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Add custom colors, fonts, etc.
    },
  },
  plugins: [],
};
```

### Vite Configuration

Modify build settings in `vite.config.js`:

```javascript
export default defineConfig({
  plugins: [react()],
  base: "/", // Change for subdirectory deployment
});
```

## 🤝 Contributing

Contributions are welcome! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

### Contribution Guidelines

- Follow the existing code style and conventions
- Write clear, descriptive commit messages
- Test your changes thoroughly before submitting
- Update documentation as needed
- Ensure your code passes ESLint checks

## 🐛 Known Issues & Future Enhancements

### Potential Improvements

- Backend integration for real product data
- Payment gateway integration
- User profile management
- Product reviews and ratings
- Wishlist functionality
- Advanced filtering options
- Multi-language support
- Dark mode theme

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

If you have any questions or need help, please:

- Open an issue on GitHub

---

**Made with ❤️ using React and Vite**
