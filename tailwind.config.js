/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        default: "#e9eef5",
        light: "",
        primary: "#4f46e5",
        secondary: "#f000b9",
        info: "#0ea5e9",
        success: "#10b981",
        warning: "#ff9800",
        error: "#ff5724",
        "primary-soft": "#4f46e51a",
        "secondary-soft": "#f000b91a",
        "info-soft": "#0ea5e91a",
        "success-soft": "rgba(16,185,129,.1)",
        "warning-soft": "#ff98001a",
        "error-soft": "#ff57241a",
        "color-pera": "#64748b",
        "color-heading": "#334155",
        "default-hover":"#e2e8f0",
        "primary-hover": "#4338ca",
        "secondary-hover": "#bd0090",
        "info-hover": "#0284c7",
        "success-hover": "#059669",
        "warning-hover": "#e68200",
        "error-hover": "#f03000",
        "primary-soft-hover": "rgba(79,70,229,.2)",
        "secondary-soft-hover": "rgba(240,0,185,.2)",
        "info-soft-hover": "rgba(14,165,233,.2)",
        "success-soft-hover": "rgba(16,185,129,.2)",
        "warning-soft-hover": "rgba(255,152,0,.2)",
        "error-soft-hover": "rgba(255,87,36,.2)",
        "default-active":"rgba(226,232,240,.8)",
        "primary-active": "rgba(67,56,202,.9)",
        "secondary-active": "rgba(189,0,144,.9)",
        "info-active": "rgba(2,132,199,.9)",
        "success-active": "rgba(5,150,105,.9)",
        "warning-active": "rgba(230,130,0,.9)",
        "error-active": "rgba(240,48,0,.9)",
        "primary-soft-active": "rgba(79,70,229,.25)",
        "secondary-soft-active": "rgba(240,0,185,.2)",
        "info-soft-active": "rgba(14,165,233,.25)",
        "success-soft-active": "rgba(16,185,129,.25)",
        "warning-soft-active": "rgba(255,152,0,.25)",
        "error-soft-active": "rgba(255,87,36,.25)",
        "primary-border": "#4f46e54d",
        "secondary-border": "#f000b94d",
        "info-border": "#0ea5e94d",
        "success-border": "#10b9814d",
        "warning-border": "#ff98004d",
        "error-border": "#ff57244d",
      },
      fontSize: {
        "size-heading": "",
      },
      keyframes: {
        progress: {
          '0%': {
          width: "0"
          },
          '50%': {
            width: '200px',
            
          },
          '100%': {
            width: '100%',
            
          },
        },
      },
      animation: {
        pulse: 'progress 5s linear',
       
      },

    },
  },
  plugins: [],
};
