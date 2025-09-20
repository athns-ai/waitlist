# Startup Waitlist

A simple, beautiful waitlist application built with React, Vite, Tailwind CSS, and Supabase.

## Features

- 📧 Email collection with validation
- 🎨 Modern, responsive design
- ⚡ Fast performance with Vite
- 🔒 Secure with Supabase
- 📱 Mobile-friendly
- ✅ Duplicate email prevention
- 🎯 Built for up to 2000+ emails

## Setup Instructions

### 1. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Go to Settings > API to get your project URL and anon key
3. In the SQL Editor, run the schema from `supabase-schema.sql`

### 2. Environment Variables

Create a `.env` file in the root directory:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Run Development Server

```bash
npm run dev
```

### 5. Build for Production

```bash
npm run build
```

## Database Schema

The application uses a simple `waitlist` table with:
- `id` - Primary key
- `email` - Unique email address
- `created_at` - Timestamp when user joined
- `updated_at` - Last updated timestamp

## Deployment

This app can be deployed to:
- **Vercel** (recommended) - Just connect your GitHub repo
- **Netlify** - Drag and drop the `dist` folder
- **GitHub Pages** - Use the build output

## Customization

- Update the copy in `src/App.jsx`
- Modify colors in `tailwind.config.js`
- Add your logo/branding
- Customize the form in `src/components/WaitlistForm.jsx`

## Export Email List

To export your waitlist emails from Supabase:

1. Go to Table Editor > waitlist
2. Click "Export" or use SQL:
   ```sql
   SELECT email, created_at FROM waitlist ORDER BY created_at DESC;
   ```

## License

MIT License - feel free to use for your startup!