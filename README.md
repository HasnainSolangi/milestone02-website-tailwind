# Milestone 2 Assignment 2 - Multi-Page Website with Tailwind CSS

## Overview
This project is a multi-page blog-style website built with Next.js (version 15) and React components, styled using Tailwind CSS. The objective of this assignment is to apply Tailwind CSS for responsive and scalable design, enhancing the website's layout and accessibility.

## Pages and Content
- **Home Page**: Introduction to the blog, featuring a section with a preview of the featured article.
- **About Page**: Personal introduction with hobbies and interests.
- **Blog Page**: A detailed blog post about productivity tips, focusing on goal-setting, time management, and self-care.

## Project Structure

```
Milestone2-WEBSITE-TAILWIND/
├── src/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.tsx            # About Page Component
│   │   ├── blog/
│   │   │   └── page.tsx            # Blog Page Component
│   ├── components/
│   │   ├── Navbar.tsx              # Navbar Component
│   │   └── Footer.tsx              # Footer Component
│   │   ├── contact/
│   │   │   └── page.tsx            # Contact Page Component
│   │   └── layout.tsx              # Global Layout Component
│   │   ├── page.tsx                # Home Page Component
│   │   ├── globals.css             # Tailwind CSS Setup
├── public/                         # Public assets (e.g., favicon.ico)
├── .eslintrc.json                  # ESLint configuration
├── next.config.ts                  # Next.js configuration
├── package.json                    # Node.js dependencies
├── README.md                       # Project README file
├── tsconfig.json                   # TypeScript configuration
└── ...                             # Other configuration files

## Features
- **React Components**: All pages are structured as modular React components.
- **Tailwind CSS Styling**: Responsive design achieved through Tailwind's utility classes.
- **Responsive Layout**: Ensures a consistent and adaptive layout across different screen sizes.

## Technologies Used
- Next.js 15
- React
- Custom CSS