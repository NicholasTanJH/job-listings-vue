# Vue Job Board

This website allows users to browse, view details, and manage job listings in an interactive and responsive interface. It provides the ability to add, edit, and delete jobs with data managed through a simulated backend.

---

### Tech Stack

- **Vue 3** – Frontend framework
- **Vite** – Development build tool
- **Vue Router** – For routing between views
- **Axios** – For HTTP requests to the mock API
- **Tailwind CSS** – For utility-first styling
- **json-server** – Simulated REST API backend

---

## Getting Started

### Prerequisites

- Node.js (v16 or newer)
- npm (v8 or newer)

---

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/NicholasTanJH/job-listings-vue
cd job-listings-vue
```

2. **Install dependencies**
```bash
npm install
```

---

### Running the App

1. **Start the mock API server** (loads jobs from `jobs.json`):
   ```bash
   npm run server
   ```

2. In a separate terminal, start the Vue dev server:
   ```bash
   npm run dev
   ```

3. Open your browser and go to:  
   http://localhost:5173