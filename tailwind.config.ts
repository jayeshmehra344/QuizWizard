import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px'
      }
    },
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        quiz: {
          purple: '#8B5CF6',
          'light-purple': '#9d8df2',
          'dark-purple': '#6E59A5',
          pink: '#FF2E63',
          peach: '#FF9A8B',
          yellow: '#FEF7CD',
          green: '#08D9D6',
          blue: '#252A34',
          dark: '#1A1F2C',
          'dark-blue': '#0C1323',
          neon: '#00FF9D',
        }
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        },
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-out': {
          '0%': {
            opacity: '1',
            transform: 'translateY(0)'
          },
          '100%': {
            opacity: '0',
            transform: 'translateY(-10px)'
          }
        },
        'pulse-soft': {
          '0%, 100%': {
            opacity: '1'
          },
          '50%': {
            opacity: '0.8'
          }
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)'
          },
          '50%': {
            transform: 'translateY(-10px)'
          }
        },
        'rotate-slow': {
          '0%': {
            transform: 'rotate(0deg)'
          },
          '100%': {
            transform: 'rotate(360deg)'
          }
        },
        'glow': {
          '0%, 100%': {
            boxShadow: '0 0 5px rgba(139, 92, 246, 0.5)'
          },
          '50%': {
            boxShadow: '0 0 20px rgba(139, 92, 246, 0.8), 0 0 30px rgba(139, 92, 246, 0.6)'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        'fade-in': 'fade-in 0.3s ease-out',
        'fade-out': 'fade-out 0.3s ease-out',
        'pulse-soft': 'pulse-soft 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'rotate-slow': 'rotate-slow 15s linear infinite',
        'glow': 'glow 2s ease-in-out infinite',
      },
      transformOrigin: {
        'center': 'center',
      },
      transform: {
        'perspective-1000': 'perspective(1000px)',
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
